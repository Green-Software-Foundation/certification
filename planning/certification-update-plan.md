# SCI Self-Certification: Platform Update Design

This document describes the changes needed to extend the GSF Badges Platform
(`badges.greensoftware.foundation`) to support the SCI Self-Certification
Program as specified in `../certification/planning/GSF CoD Simplified proposal doc.md`.

---

## 1. How SCI certificate minting works (end-to-end flow)

The existing platform mints awards for **course completions**: a learner
finishes a quiz, a webhook fires, and the platform creates an award with a
PDF certificate and notification email -- all automatically.

SCI self-certification is different. A reviewer must manually approve a
submission before a certificate is minted. The platform reuses the same
pipeline but with a new trigger and richer data.

### Existing flow (course completions)

```
Learner completes course quiz
  → LMS inserts row into Supabase `course_completions` table
    → Supabase DB webhook fires POST /api/webhooks/course-completion
      → Platform upserts person (name + email) in `people` table
      → Platform creates `awards` row (person_id + badge_id)
      → Platform generates PDF certificate from HTML template (Puppeteer)
      → Platform generates OG preview PNG for social sharing
      → Platform uploads PDF + PNG to Supabase Storage
      → Platform sends notification email via Resend
      → Returns award URL + certificate URL
```

### New flow (SCI self-certification)

```
Organization submits SCI disclosure via email
  → Reviewer performs 3-gate review (completeness, consistency, sufficiency)
  → On approval, reviewer inserts row into Supabase `sci_approvals` table
    → Supabase DB webhook fires POST /api/webhooks/course-completion
      → Webhook handler detects SCI payload (table = "sci_approvals")
      → Platform upserts organization in `people` table (org name + contact email)
      → Platform creates `awards` row (person_id + sci-certificate badge_id)
      → Platform generates sequential certificate ID (GSF-SCI-2026-00042)
      → Platform creates `sci_certifications` row (all SCI fields, FK to award)
      → Platform generates PDF certificate from SCI-specific HTML template
        (includes: org name, software, SCI score, measurement period,
         self-certification statement, validity dates, disclaimer)
      → Platform generates OG preview PNG for social sharing
      → Platform uploads PDF + PNG to Supabase Storage
      → Platform sends SCI-specific notification email
        (to contact person, with certificate ID, disclosure link, badge info)
      → Returns award URL + certificate URL + SCI metadata
```

### Key differences from course flow

| Aspect | Course completion | SCI self-certification |
|--------|------------------|----------------------|
| Trigger | Automatic (quiz completion) | Manual (reviewer inserts `sci_approvals` row) |
| Recipient | Individual person | Organization (with contact person) |
| Data | Name + email only | Org, software, SCI score, functional unit, measurement period, disclosure URL |
| Certificate ID | UUID | Sequential: GSF-SCI-YYYY-NNNNN |
| Validity | Permanent | 1 year from issuance |
| Certificate content | Name, course title, date | Full SCI details + self-certification statement + disclaimer |
| Award page | "completed the course" | SCI score, status badge, disclosure link, validity dates |
| Email | "Your badge is ready" | "Your SCI Self-Certification is confirmed" + disclosure link |

### What the reviewer concretely does to issue a certificate

The reviewer's only interaction with this platform is inserting a single row
into the `sci_approvals` table in the Supabase dashboard. Everything else
happens automatically.

The current Supabase database has three tables (no migration files exist;
the schema is managed via the Supabase web dashboard):

```
Existing tables (unchanged):
┌─────────────────────────────────────────────┐
│ badges                                      │
│   id          uuid  PK  (auto-generated)    │
│   slug        text      (e.g. "green-software-practitioner") │
│   (+ name, description, cta fields – see badges.md)         │
├─────────────────────────────────────────────┤
│ people                                      │
│   id          uuid  PK  (auto-generated)    │
│   name        text      (person or org name)│
│   email       text  UNIQUE                  │
├─────────────────────────────────────────────┤
│ awards                                      │
│   id          uuid  PK  (auto-generated, becomes the URL)   │
│   person_id   uuid  FK → people(id)         │
│   badge_id    uuid  FK → badges(id)         │
│   issued_at   timestamptz                   │
└─────────────────────────────────────────────┘
```

After the migrations in this plan are applied, a new `sci_approvals` table
will exist. **The reviewer opens the Supabase Table Editor (or SQL Editor)
and inserts a row with these exact columns:**

```
sci_approvals – the reviewer fills in ALL of these columns:
┌──────────────────────┬──────────┬───────────────────────────────────────────┐
│ Column               │ Type     │ Example value                             │
├──────────────────────┼──────────┼───────────────────────────────────────────┤
│ organization_name    │ text     │ Acme Corporation                          │
│ contact_name         │ text     │ Jane Smith                                │
│ contact_email        │ text     │ jane.smith@acme.org                       │
│ software_name        │ text     │ E-commerce API Service                    │
│ software_version     │ text     │ v2.1.0                                    │
│ sci_score            │ numeric  │ 349.63                                    │
│ sci_unit             │ text     │ gCO2eq per 1,000 API requests             │
│ functional_unit      │ text     │ 1,000 API requests                        │
│ measurement_start    │ date     │ 2025-01-01                                │
│ measurement_end      │ date     │ 2025-01-31                                │
│ disclosure_url       │ text     │ https://github.com/Green-Software-Foundation/sci-certifications/blob/main/certifications/2026/GSF-SCI-2026-00042/disclosure.md │
└──────────────────────┴──────────┴───────────────────────────────────────────┘
(id and created_at are auto-generated and should not be filled in)
```

**Equivalently, in the Supabase SQL Editor:**

```sql
INSERT INTO sci_approvals (
  organization_name,
  contact_name,
  contact_email,
  software_name,
  software_version,
  sci_score,
  sci_unit,
  functional_unit,
  measurement_start,
  measurement_end,
  disclosure_url
) VALUES (
  'Acme Corporation',
  'Jane Smith',
  'jane.smith@acme.org',
  'E-commerce API Service',
  'v2.1.0',
  349.63,
  'gCO2eq per 1,000 API requests',
  '1,000 API requests',
  '2025-01-01',
  '2025-01-31',
  'https://github.com/Green-Software-Foundation/sci-certifications/blob/main/certifications/2026/GSF-SCI-2026-00042/disclosure.md'
);
```

**What happens next (automatically, no reviewer action needed):**

1. Supabase fires a database webhook on INSERT to `sci_approvals`.
2. The webhook sends the row data to `POST /api/webhooks/course-completion`.
3. The platform creates entries in `people`, `awards`, and
   `sci_certifications`, generates the PDF certificate and OG image,
   uploads them to storage, and sends the notification email.
4. The contact person receives an email with their certificate link.
5. The certificate is live at `badges.greensoftware.foundation/awards/{uuid}`.

The reviewer does **not** need to touch the `people`, `awards`,
`sci_certifications`, or `badges` tables. Those are populated automatically
by the webhook handler.

---

## 2. Design decisions

The following decisions were made during scoping. Each had multiple viable
alternatives noted below for future revisiting.

### 2.1 How are SCI certificates issued?

**Decision: Extend existing webhook** -- Add SCI-specific fields to the
existing `course-completion` webhook, triggered by inserting a row into a new
Supabase table (`sci_approvals`). A reviewer (or script) inserts the row after
completing the 3-gate review, and a Supabase database webhook fires the API.

Alternatives considered:
- **Manual API call**: A reviewer calls the API directly (e.g. via curl/script)
  with all SCI fields after approving a submission. Simpler but no audit trail
  in the database for the approval event itself.
- **Admin UI**: Build a browser-based admin page where reviewers fill in the
  SCI fields and issue a certificate. Better UX but significantly more work
  for v1.

### 2.2 How are organizations represented?

**Decision: Reuse `people` table** -- Store the organization name in the
`name` field and the contact person's email in `email`. The contact person's
name is stored in the `sci_certifications` table. This minimizes schema changes.

Alternatives considered:
- **New `organizations` table**: A dedicated table for organizations. SCI awards
  link to an organization; course awards link to a person. Cleanest data model
  but more migration work and requires changes to the shared `awards` table
  foreign key structure.
- **Dual link**: SCI awards link to both an organization (new table) AND a
  contact person (existing `people` table). Most normalized but most complex.

### 2.3 Where do SCI-specific fields live?

**Decision: New `sci_certifications` table** -- A dedicated table with typed
columns for all SCI fields, linked to the `awards` table via foreign key.
Clean separation; existing course awards are completely unaffected.

Alternatives considered:
- **JSONB metadata column on `awards`**: Add a nullable `metadata` JSONB column
  to the awards table. Simpler migration but less type safety in the database
  and harder to query/validate.
- **Columns on `awards` table**: Add nullable columns directly to awards for
  all SCI fields. Simplest queries but clutters the existing table with ~15
  nullable columns that are irrelevant for course completions.

### 2.4 Certificate lifecycle handling

**Decision: Display only (MVP)** -- Show `status` and `valid_until` on the
certificate and award page. Status changes (expiry, revocation) are handled
via direct database updates. No automated expiry checks or reminder emails.

Alternatives considered:
- **Full lifecycle**: Status field with all states (Active/Expired/Revoked/
  Under Review), automated expiry cron job, 30-day renewal reminder emails,
  revocation API endpoint, community challenge workflow. Comprehensive but
  significant extra scope.

---

## 3. Database changes

### 3.1 New table: `sci_certifications`

Linked 1:1 to an `awards` row. Created after the award is inserted.

```sql
create table sci_certifications (
  id            uuid primary key default gen_random_uuid(),
  award_id      uuid not null unique references awards(id) on delete cascade,

  -- Certificate identity
  certificate_id    text not null unique,            -- "GSF-SCI-2026-00042"
  status            text not null default 'Active',  -- Active | Expired | Revoked | Under Review

  -- Organization & software
  organization_name text not null,
  software_name     text not null,
  software_version  text not null,

  -- SCI score
  sci_score         numeric not null,                -- e.g. 349.63
  sci_unit          text not null,                   -- e.g. "gCO2eq per 1,000 API requests"
  functional_unit   text not null,                   -- e.g. "1,000 API requests"

  -- Measurement period
  measurement_start date not null,
  measurement_end   date not null,

  -- Validity
  valid_from        date not null,                   -- = date of approval
  valid_until       date not null,                   -- = valid_from + 1 year

  -- Links
  disclosure_url    text not null,                   -- GitHub URL to public disclosure

  -- Contact (redundant with people row but explicit per spec)
  contact_name      text not null,
  contact_email     text not null,

  -- Audit
  created_at        timestamptz not null default now(),
  updated_at        timestamptz not null default now()
);

-- Index for lookup by certificate_id (public-facing ID)
create unique index idx_sci_cert_id on sci_certifications(certificate_id);
```

### 3.2 Sequence for certificate IDs

The spec requires `GSF-SCI-{YEAR}-{NNNNN}` format. We use a Postgres sequence
and a helper function:

```sql
create sequence sci_cert_seq start 1;

-- Helper to generate the next certificate ID for the current year.
-- Called from the application layer before insert.
create or replace function next_sci_certificate_id()
returns text as $$
  select 'GSF-SCI-' || extract(year from now())::int || '-' ||
         lpad(nextval('sci_cert_seq')::text, 5, '0');
$$ language sql;
```

### 3.3 No changes to existing tables

The `awards`, `badges`, and `people` tables remain unchanged. An SCI
certificate is represented as:

- A row in `people` (organization name + contact email)
- A row in `awards` (linking the person/org to the `sci-certificate` badge)
- A row in `sci_certifications` (all SCI-specific fields, FK to `awards.id`)

---

## 4. YAML credential definition

Replace the placeholder `sci-certificate` entry in `src/data/badge-types.yaml`
with a complete definition. Key differences from course badges:

- `badgeLabel`: "Certification" (not "Education")
- `credentialType`: new field, value `"sci-certificate"` (used to switch UI layouts)
- `aboutParagraphs`: describes the self-certification program
- `outcomes`: not applicable (empty array)
- `earningCriteria`: describes the 3-gate review process
- No `duration` or `cost`

```yaml
sci-certificate:
  name: "SCI Self-Certification"
  slug: "sci-certificate"
  credentialType: "sci-certificate"
  primaryCtaUrl: "https://greensoftware.foundation/sci-certification"
  primaryCtaText: "Apply for certification"
  badgeLabel: "Certification"
  badgeDescription: >-
    Self-certified compliant with ISO/IEC 21031:2024 (Software Carbon
    Intensity). This certificate confirms that an organization has
    self-certified conformity and provided complete disclosure information
    verified by the Green Software Foundation.
  badgeImage: "/assets/badges/sci-certificate-badge.png"
  aboutParagraphs:
    - >-
      The SCI Self-Certification Program enables organizations to
      self-certify their Software Carbon Intensity calculations under
      the ISO/IEC 17050 supplier's declaration framework.
    - >-
      GSF verifies disclosure completeness, not calculation accuracy.
      All approved submissions are published on GitHub for community
      review and validation. This is not third-party certification or
      accredited conformity assessment.
  outcomes: []
  earningCriteria:
    - "Submit a complete SCI disclosure covering all 29 required items."
    - "Pass the internal consistency check (arithmetic verification)."
    - "Score at least 'Adequate' (3/5) on all six disclosure sufficiency criteria."
  duration: ""
  cost: "Free"
  learnMoreText: "Applicant Guide"
  learnMoreUrl: "https://greensoftware.foundation/sci-certification/guide"
```

### 4.1 New field: `credentialType`

Add an optional `credentialType` field to the YAML schema and the
`CredentialConfig` / `Credential` types in `src/data/credentials.ts`.
This field controls which UI layout and certificate template to use.

Values:
- `undefined` / `"course"` (default) -- existing course completion flow
- `"sci-certificate"` -- SCI self-certification flow

```typescript
// In CredentialConfig and Credential types:
credentialType?: "course" | "sci-certificate";
```

---

## 5. API changes

### 5.1 Webhook payload extension

The existing `POST /api/webhooks/course-completion` endpoint already accepts
a `directPayloadSchema`. We extend it with optional SCI fields:

```typescript
const sciPayloadSchema = z.object({
  name: z.string().min(1),              // organization name
  email: z.string().email(),            // contact email
  badgeSlug: z.literal("sci-certificate"),

  // SCI-specific fields
  sci: z.object({
    contactName: z.string().min(1),
    softwareName: z.string().min(1),
    softwareVersion: z.string().min(1),
    sciScore: z.number().positive(),
    sciUnit: z.string().min(1),           // "gCO2eq per 1,000 API requests"
    functionalUnit: z.string().min(1),    // "1,000 API requests"
    measurementStart: z.string().date(),  // "2025-01-01"
    measurementEnd: z.string().date(),    // "2025-01-31"
    disclosureUrl: z.string().url(),
  }),
});
```

Parsing order becomes:

1. Try `supabaseWebhookSchema` (existing Supabase DB webhook)
2. Try `supabaseSciWebhookSchema` (new Supabase SCI approval webhook)
3. Try `sciPayloadSchema` (new SCI-specific direct payload)
4. Try `directPayloadSchema` (existing direct course-completion payload)
5. Return 400 if none match

### 5.2 SCI issuance logic

When the payload matches `sciPayloadSchema` or `supabaseSciWebhookSchema`:

1. Upsert `people` row (org name + contact email)
2. Look up `badges` row for slug `"sci-certificate"`
3. Create `awards` row (same as today)
4. Call `next_sci_certificate_id()` via Supabase RPC to get the formatted ID
5. Insert `sci_certifications` row with all SCI fields
6. Generate certificate PDF using SCI-specific template (see Section 6)
7. Generate OG preview PNG
8. Send notification email using SCI-specific template (see Section 8)
9. Return extended response including `sci.certificateId`, `sci.disclosureUrl`,
   `sci.validUntil`

### 5.3 Extended response

```json
{
  "status": "ok",
  "badgeSlug": "sci-certificate",
  "recipientEmail": "contact@acme.org",
  "recipientName": "Acme Corporation",
  "award": {
    "id": "uuid",
    "verificationCode": "uuid",
    "issuedAt": "2026-03-28T...",
    "url": "https://badges.greensoftware.foundation/awards/uuid",
    "certificateUrl": "https://...storage.../awards/uuid.pdf"
  },
  "sci": {
    "certificateId": "GSF-SCI-2026-00042",
    "organizationName": "Acme Corporation",
    "softwareName": "E-commerce API Service",
    "softwareVersion": "v2.1.0",
    "sciScore": 349.63,
    "sciUnit": "gCO2eq per 1,000 API requests",
    "validFrom": "2026-03-28",
    "validUntil": "2027-03-28",
    "disclosureUrl": "https://github.com/..."
  },
  "email": { "status": "sent" }
}
```

### 5.4 Supabase webhook trigger (for `sci_approvals` table)

The reviewer workflow would be:

1. Reviewer completes 3-gate review manually (outside this platform).
2. Reviewer (or a script) inserts a row into a new `sci_approvals` table.
3. A Supabase database webhook fires `POST /api/webhooks/course-completion`
   with the insertion payload.

The `sci_approvals` table mirrors the SCI payload fields and acts as the
source of truth for approved submissions. Schema:

```sql
create table sci_approvals (
  id                  uuid primary key default gen_random_uuid(),
  organization_name   text not null,
  contact_name        text not null,
  contact_email       text not null,
  software_name       text not null,
  software_version    text not null,
  sci_score           numeric not null,
  sci_unit            text not null,
  functional_unit     text not null,
  measurement_start   date not null,
  measurement_end     date not null,
  disclosure_url      text not null,
  created_at          timestamptz not null default now()
);
```

We also add a new Supabase webhook schema variant to the webhook handler:

```typescript
const supabaseSciWebhookSchema = z.object({
  type: z.literal("INSERT"),
  table: z.literal("sci_approvals"),
  schema: z.string(),
  record: z.object({
    organization_name: z.string(),
    contact_name: z.string(),
    contact_email: z.string().email(),
    software_name: z.string(),
    software_version: z.string(),
    sci_score: z.number(),
    sci_unit: z.string(),
    functional_unit: z.string(),
    measurement_start: z.string(),
    measurement_end: z.string(),
    disclosure_url: z.string().url(),
  }),
  old_record: z.any().nullable(),
});
```

When this schema matches, the handler maps it into the same SCI issuance logic
described in 5.2.

### 5.5 COURSE_TO_BADGE_SLUG mapping update

Add entries for SCI:

```typescript
const COURSE_TO_BADGE_SLUG: Record<string, string> = {
  // ... existing entries ...
  "sci-certificate": "sci-certificate",
  "sci self-certification": "sci-certificate",
  "sci": "sci-certificate",
};
```

---

## 6. Certificate PDF template

### 6.1 New template: `templates/sci-certificate.html`

Stored in Supabase Storage at `certificates/templates/sci-certificate.html`.
This is a fundamentally different layout from the course completion certificate.

**Required placeholders:**

| Placeholder | Value |
|-------------|-------|
| `${Name}` | Organization name |
| `${CertificateId}` | GSF-SCI-2026-00042 |
| `${SoftwareName}` | E-commerce API Service |
| `${SoftwareVersion}` | v2.1.0 |
| `${SciScore}` | 349.63 |
| `${SciUnit}` | gCO2eq per 1,000 API requests |
| `${FunctionalUnit}` | 1,000 API requests |
| `${MeasurementPeriod}` | January 1 - January 31, 2025 |
| `{Date}` | March 28, 2026 (issued date) |
| `${ValidUntil}` | March 28, 2027 |
| `${DisclosureUrl}` | GitHub link |
| `${ContactName}` | Contact person name |
| `${Status}` | Active |

**Required certificate content (per spec):**

- GSF branding/logo at top
- Title: "SELF-CERTIFIED COMPLIANT WITH ISO/IEC 21031:2024"
- Subtitle: "Software Carbon Intensity (SCI)"
- Organization name, software name, version
- SCI score with functional unit
- Measurement period
- Self-certification statement (exact text from spec -- see below)
- Issued date and valid-until date
- Certificate ID
- Disclosure URL
- Disclaimer: "This is not third-party certification or accredited conformity assessment."

**Self-certification statement (verbatim from spec):**

> This certificate confirms that [Organization] has self-certified conformity
> with ISO/IEC 21031:2024 (Software Carbon Intensity) and provided complete
> disclosure information verified by the Green Software Foundation.
>
> - Self-certification: [Organization] declares that this SCI calculation
>   conforms to ISO/IEC 21031:2024 requirements
> - Disclosure verification: GSF verified that all required disclosure
>   elements were provided with sufficient detail for community review
>
> This is not third-party certification or accredited conformity assessment.
> The disclosed information enables peer review and community validation of
> conformity claims.

### 6.2 Template rendering changes in `certificatePdf.ts`

The existing `replacePlaceholders()` function only handles `${Name}`,
`{Date}`, and `${CourseName}`. For SCI certificates, we need a new
function that handles all the SCI-specific placeholders:

```typescript
type SciPlaceholders = {
  organizationName: string;
  certificateId: string;
  softwareName: string;
  softwareVersion: string;
  sciScore: string;         // formatted number
  sciUnit: string;
  functionalUnit: string;
  measurementPeriod: string; // "January 1 - January 31, 2025"
  issuedDateLabel: string;
  validUntilLabel: string;
  disclosureUrl: string;
  contactName: string;
  status: string;
};

function replaceSciPlaceholders(
  template: string,
  values: SciPlaceholders,
): string { /* ... */ }
```

The `buildCertificateHtml()` function branches on `badgeSlug`:
- If `badgeSlug === "sci-certificate"`, use `replaceSciPlaceholders()`
- Otherwise, use existing `replacePlaceholders()`

The `generateCertificateAndUpload()` function receives new optional SCI
fields and passes them through.

---

## 7. Award page changes

### 7.1 Fetching SCI data

`src/data/awards.ts` -- extend `getAwardById()` to also fetch the
`sci_certifications` row when present:

```typescript
export type SciCertification = {
  certificateId: string;
  status: string;
  organizationName: string;
  softwareName: string;
  softwareVersion: string;
  sciScore: number;
  sciUnit: string;
  functionalUnit: string;
  measurementStart: string;
  measurementEnd: string;
  validFrom: string;
  validUntil: string;
  disclosureUrl: string;
  contactName: string;
  contactEmail: string;
};

export type Award = {
  id: string;
  recipientName: string;
  credentialSlug: string;
  issuedAt: string;
  certificateUrl?: string;
  sci?: SciCertification;  // populated for SCI awards only
};
```

Fetch with a second query if `credentialSlug === "sci-certificate"`, or use
a left join.

### 7.2 Award page layout: `src/pages/awards/[awardId].astro`

When `credential.credentialType === "sci-certificate"` and `award.sci` is
present, render a different layout:

**Header card changes:**
- Replace "has successfully completed the course" with the certificate title
  "SELF-CERTIFIED COMPLIANT WITH ISO/IEC 21031:2024"
- Show "Software Carbon Intensity (SCI)" subtitle
- Show `award.sci.certificateId` as the verification code (instead of UUID)
- Show status badge (Active/Expired/Revoked) with color coding
- Show "Valid: {validFrom} - {validUntil}"

**Main content changes (left panel):**
- **Certificate Details** section:
  - Organization: `award.sci.organizationName`
  - Software: `award.sci.softwareName` v`award.sci.softwareVersion`
  - SCI Score: `award.sci.sciScore` `award.sci.sciUnit`
  - Functional Unit: `award.sci.functionalUnit`
  - Measurement Period: formatted date range
- **Self-Certification Statement** section:
  - The full verbatim statement from the spec (with org name substituted)
- **Public Disclosure** link to `award.sci.disclosureUrl`

**Sidebar changes (right panel):**
- Replace "Take the course" CTA with "View Full Disclosure" link
- Keep share buttons (LinkedIn, X, Facebook, WhatsApp, copy link)
- Keep "Add to LinkedIn Profile" but use certification-appropriate text
- Add "Download Badge" section with link to badge image assets

**Social sharing text change:**
- Course: "I just earned the {title} credential..."
- SCI: "{Organization} is self-certified compliant with ISO/IEC 21031:2024 (SCI), verified by the Green Software Foundation"

### 7.3 Credential page: `src/pages/credentials/[slug].astro`

For the `sci-certificate` credential page, the existing layout works well
enough since it already supports dynamic content from the YAML. The `outcomes`
section will be empty and hidden. The `earningCriteria` will show the 3-gate
process. Minor tweaks:

- Hide the "Outcomes" section when `credential.outcomes` is empty
- Change sidebar labels when `credentialType === "sci-certificate"`:
  - Hide "Duration" and "Cost" (they're empty)
  - Show "Earning Criteria" as "Requirements"

---

## 8. Email template changes

### 8.1 SCI notification email

In `src/lib/resend.ts`, branch on the badge slug to use an SCI-specific
email template when `badgeSlug === "sci-certificate"`.

**Subject line:**
`"Your SCI Self-Certification is confirmed - {Organization}"`

**Key differences from course email:**
- Address contact person by first name (from `contactName`, not org name)
- Show certificate ID prominently
- Include software name and SCI score
- Link to certificate page (award URL)
- Link to public disclosure (GitHub URL)
- Include badge download instructions
- Replace "has successfully completed the course" language with
  "has been self-certified compliant with ISO/IEC 21031:2024"
- Include the disclaimer: "This is not third-party certification..."

**New function signature:**

```typescript
export async function sendSciCertificationNotification({
  to,
  contactName,
  organizationName,
  certificateId,
  softwareName,
  sciScore,
  sciUnit,
  badgeUrl,
  disclosureUrl,
  badgeImageUrl,
  assetBaseUrl,
}: SciEmailParams): Promise<EmailSendStatus>
```

---

## 9. Static assets needed

These need to be created and added to the repository or uploaded to storage:

| Asset | Path | Purpose |
|-------|------|---------|
| SCI badge image (PNG) | `/public/assets/badges/sci-certificate-badge.png` | Badge icon on credential & award pages |
| SCI badge image (SVG) | `/public/assets/badges/sci-certificate-badge.svg` | Scalable badge for OG image generation |
| SCI certificate template | Supabase: `certificates/templates/sci-certificate.html` | PDF/PNG generation |

Badge design specs from the proposal:
- GSF leaf logo (top center)
- "Certificate of Disclosure" or "SCI Self-Certification" text
- Year of issuance
- Primary color: #00C853 (GSF Green)
- Light/dark variants
- WCAG 2.1 AA contrast compliance

---

## 10. Files to modify

| File | Change |
|------|--------|
| `src/data/badge-types.yaml` | Replace placeholder `sci-certificate` entry with full definition |
| `src/data/credentials.ts` | Add `credentialType` to types; pass through from YAML |
| `src/data/awards.ts` | Add `SciCertification` type; extend `getAwardById()` to fetch SCI data |
| `src/pages/api/webhooks/course-completion.ts` | Add `sciPayloadSchema`, `supabaseSciWebhookSchema`; add SCI issuance branch; update `COURSE_TO_BADGE_SLUG`; extend response |
| `src/lib/certificatePdf.ts` | Add `replaceSciPlaceholders()`; branch `buildCertificateHtml()` for SCI; pass SCI fields through `generateCertificateAndUpload()` |
| `src/lib/resend.ts` | Add `sendSciCertificationNotification()` function |
| `src/pages/awards/[awardId].astro` | Add SCI-specific award page layout (conditional on `credentialType`) |
| `src/pages/credentials/[slug].astro` | Hide empty outcomes; adjust sidebar labels for certification type |

## 11. Files to create

| File | Purpose |
|------|---------|
| `public/assets/badges/sci-certificate-badge.png` | Badge image (needs design work) |
| `public/assets/badges/sci-certificate-badge.svg` | Scalable badge image (needs design work) |
| Supabase: `certificates/templates/sci-certificate.html` | Certificate PDF template (needs design work) |

## 12. Database migrations to run

1. Create `sci_certifications` table (Section 3.1)
2. Create `sci_cert_seq` sequence and `next_sci_certificate_id()` function (Section 3.2)
3. Create `sci_approvals` table (Section 5.4)
4. Insert `sci-certificate` badge row into `badges` table: `INSERT INTO badges (slug) VALUES ('sci-certificate');`
5. Configure Supabase database webhook on `sci_approvals` table INSERT to fire the course-completion webhook endpoint

---

## 13. Implementation order

1. **Database**: Run migrations (tables, sequence, badge row)
2. **YAML + types**: Update badge-types.yaml and credentials.ts
3. **API**: Extend webhook with SCI payload schemas and issuance logic
4. **Certificate generation**: Add SCI placeholder handling in certificatePdf.ts
5. **Award data**: Extend awards.ts to fetch SCI certification data
6. **Award page**: Add SCI-specific layout to [awardId].astro
7. **Credential page**: Minor tweaks to [slug].astro for certification type
8. **Email**: Add SCI notification email template
9. **Assets**: Create/upload badge images and certificate HTML template
10. **Supabase webhook**: Configure the `sci_approvals` INSERT trigger

---

## 14. Impact analysis: risk to existing features

### Purely additive (no risk to existing flows)

- **`src/data/badge-types.yaml`**: The existing `sci-certificate` placeholder
  entry gets replaced with a complete one. No other entries are touched.
- **`COURSE_TO_BADGE_SLUG` mapping**: Adding three new keys to the lookup
  table. Existing keys are unchanged.
- **`src/lib/resend.ts`**: A new `sendSciCertificationNotification()` function
  is added alongside the existing `sendAwardNotification()`. The existing
  function is not modified.
- **New database tables** (`sci_certifications`, `sci_approvals`): Entirely
  new tables. No schema changes to `awards`, `badges`, or `people`.
- **New static assets** (badge images, HTML template): New files only.

### Extends existing code (low risk)

- **`src/data/credentials.ts`**: Adds an optional `credentialType?` field to
  `CredentialConfig` and `Credential` types. All existing credentials will
  have `credentialType === undefined`, which maps to the default (course)
  behavior. The only change to `buildCredentialsFromYaml()` is passing
  through the new optional field.
- **`src/data/awards.ts`**: Adds optional `sci?: SciCertification` to the
  `Award` type. The safest implementation fetches SCI data in a **second
  query** after the existing query, conditional on
  `credentialSlug === "sci-certificate"`. This does not touch the existing
  Supabase query at all. (If implemented as a left join instead, the changed
  query shape could break existing award fetching.)
- **`src/pages/credentials/[slug].astro`**: Minor conditionals to hide empty
  outcomes and adjust sidebar labels. The existing page already guards on
  empty `duration` and `cost` with `&&` checks. Adding
  `{credential.outcomes.length > 0 && ...}` around the Outcomes section is
  safe.

### Modifies existing logic (needs care)

- **`src/pages/api/webhooks/course-completion.ts`**: Highest-risk file.
  Three concerns:

  1. **Schema parsing restructure.** The current handler tries 2 schemas
     sequentially. The plan adds 2 more, making it a 4-way dispatch. The
     existing `supabaseWebhookSchema` requires `record.course_id`, which SCI
     payloads won't have, so it won't accidentally match SCI payloads. Safe
     as long as the SCI schemas are tried first or alongside.

  2. **Post-parsing branching.** After parsing, the current code is a single
     linear flow. For SCI we need to branch after award creation (insert
     `sci_certifications`, call different email function, return extended
     response). If the branch condition is wrong, the SCI insert could run
     for course completions (and fail) or be skipped for SCI certs.

  3. **Idempotency collision (design bug -- must be fixed).** The existing
     idempotency check finds an existing award by `person_id + badge_id`.
     For courses this is correct: one person gets one badge. But for SCI,
     a single organization (same `people` row / same email) could certify
     **multiple software products**, all under the `sci-certificate` badge.
     The current check would find the first award and silently reuse it,
     preventing the second certification from being created.

     **Fix:** Skip or modify the idempotency check when
     `badgeSlug === "sci-certificate"`. Always create a new award for SCI,
     or use a more specific uniqueness key (e.g. org email + software name
     + software version).

- **`src/lib/certificatePdf.ts`**: `buildCertificateHtml()` needs to branch
  on `badgeSlug` to call `replaceSciPlaceholders()` instead of
  `replacePlaceholders()`. If the branch is wrong, the template will throw
  on missing placeholders (safe failure -- 500 error, not a silent
  corruption). The `generateCertificateAndUpload()` signature gains new
  optional SCI fields, which doesn't break existing callers.

- **`src/pages/awards/[awardId].astro`**: Has hardcoded course-specific text
  ("has successfully completed the course"). For SCI, the entire content
  area changes. Best implemented as a top-level conditional
  (`isSciCertificate ? <SciLayout> : <CourseLayout>`) rather than scattered
  inline conditions. Existing course awards are safe as long as the default
  branch renders the current markup unchanged.

### Risk summary

| Risk | Area | Issue | Mitigation |
|------|------|-------|------------|
| **Bug** | Webhook idempotency | Same org certifying multiple products is blocked by `person_id + badge_id` check | Skip idempotency for SCI, or key on org + software + version |
| **Moderate** | Webhook POST handler | 4-way schema dispatch + branching post-parse logic | Test existing course webhook payloads against the modified handler |
| **Moderate** | Award page | Course-specific hardcoded text needs conditional replacement | Use top-level layout switch, not scattered inline conditions |
| **Low** | certificatePdf.ts | Wrong branch throws on missing placeholders | Safe failure (500), not silent corruption |
| **Low** | awards.ts | Fetching SCI data after existing query | Use second query, not a join, to avoid touching existing query |
| **None** | YAML, types, email, DB tables, assets, slug mapping | All purely additive | N/A |

---

## 15. Out of scope (future work)

- Automated expiry cron job and renewal reminder emails
- Revocation API endpoint
- Community challenge workflow
- Admin UI for reviewers
- Badge download page with SVG/PNG variants at multiple sizes
- Structured IMP (YAML/JSON) submission parsing
- Renewal flow linking new certificate to previous
