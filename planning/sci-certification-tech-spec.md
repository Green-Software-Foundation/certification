# SCI Self-Certification: Technical Specification for Implementation

This document provides file-by-file, line-by-line implementation instructions
for extending the GSF Badges Platform to support SCI self-certification.

**Target audience:** Developer agent or developer implementing the changes.

**Reference:** Design decisions and rationale are in `certification-update-plan.md`.

---

## Table of Contents

1. [Prerequisites: Database Setup](#1-prerequisites-database-setup)
2. [File: `src/data/badge-types.yaml`](#2-file-srcdatabadge-typesyaml)
3. [File: `src/data/credentials.ts`](#3-file-srcdatacredentialsts)
4. [File: `src/data/awards.ts`](#4-file-srcdataawardsts)
5. [File: `src/pages/api/webhooks/course-completion.ts`](#5-file-srcpagesapiwebhookscourse-completionts)
6. [File: `src/lib/certificatePdf.ts`](#6-file-srclibcertificatepdfts)
7. [File: `src/lib/resend.ts`](#7-file-srclibresendts)
8. [File: `src/pages/awards/[awardId].astro`](#8-file-srcpagesawardsawardidastr)
9. [File: `src/pages/credentials/[slug].astro`](#9-file-srcpagescredentialsslugas)
10. [Static Assets](#10-static-assets)
11. [Supabase Webhook Configuration](#11-supabase-webhook-configuration)
12. [Implementation Order](#12-implementation-order)
13. [Regression Checklist](#13-regression-checklist)

---

## 1. Prerequisites: Database Setup

Execute the following SQL in the Supabase SQL Editor **before** making any
code changes. The existing `badges`, `people`, and `awards` tables are
**not modified** -- these are all new objects.

### 1.1 Insert the `sci-certificate` badge row

```sql
INSERT INTO badges (slug) VALUES ('sci-certificate');
```

Verify: `SELECT id, slug FROM badges WHERE slug = 'sci-certificate';`
-- Save the returned UUID; the webhook handler resolves it dynamically, so
no hardcoding is needed in application code.

### 1.2 Create the `sci_certifications` table

```sql
CREATE TABLE sci_certifications (
  id                uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  award_id          uuid NOT NULL UNIQUE REFERENCES awards(id) ON DELETE CASCADE,

  -- Certificate identity
  certificate_id    text NOT NULL UNIQUE,
  status            text NOT NULL DEFAULT 'Active',

  -- Organization & software
  organization_name text NOT NULL,
  software_name     text NOT NULL,
  software_version  text NOT NULL,

  -- SCI score
  sci_score         numeric NOT NULL,
  sci_unit          text NOT NULL,
  functional_unit   text NOT NULL,

  -- Measurement period
  measurement_start date NOT NULL,
  measurement_end   date NOT NULL,

  -- Validity
  valid_from        date NOT NULL,
  valid_until       date NOT NULL,

  -- Links
  disclosure_url    text NOT NULL,

  -- Contact
  contact_name      text NOT NULL,
  contact_email     text NOT NULL,

  -- Audit
  created_at        timestamptz NOT NULL DEFAULT now(),
  updated_at        timestamptz NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX idx_sci_cert_id ON sci_certifications(certificate_id);
```

### 1.3 Create the certificate ID sequence and function

```sql
CREATE SEQUENCE sci_cert_seq START 1;

CREATE OR REPLACE FUNCTION next_sci_certificate_id()
RETURNS text AS $$
  SELECT 'GSF-SCI-' || extract(year FROM now())::int || '-' ||
         lpad(nextval('sci_cert_seq')::text, 5, '0');
$$ LANGUAGE sql;
```

### 1.4 Create the `sci_approvals` table

This is the table the reviewer inserts into. A Supabase database webhook
on INSERT triggers the course-completion endpoint.

```sql
CREATE TABLE sci_approvals (
  id                  uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_name   text NOT NULL,
  contact_name        text NOT NULL,
  contact_email       text NOT NULL,
  software_name       text NOT NULL,
  software_version    text NOT NULL,
  sci_score           numeric NOT NULL,
  sci_unit            text NOT NULL,
  functional_unit     text NOT NULL,
  measurement_start   date NOT NULL,
  measurement_end     date NOT NULL,
  disclosure_url      text NOT NULL,
  created_at          timestamptz NOT NULL DEFAULT now()
);
```

---

## 2. File: `src/data/badge-types.yaml`

**Current state:** Lines 221-242 contain a placeholder `sci-certificate`
entry with course-oriented dummy data (outcomes copied from GSP, earning
criteria about a quiz, duration "3 hours", etc.).

**Action:** Replace the entire `sci-certificate:` block (lines 221-242)
with the following:

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

**Critical:** All entries above the `sci-certificate:` key (lines 1-220)
must remain exactly as-is. The new `credentialType` field is the key
differentiator -- existing entries do NOT have this field.

---

## 3. File: `src/data/credentials.ts`

**Current file:** 79 lines. Types `CredentialConfig` (lines 5-20) and
`Credential` (lines 27-42) plus `buildCredentialsFromYaml()` (lines 45-68).

### 3.1 Add `credentialType` to `CredentialConfig`

In the `CredentialConfig` type (line 5-20), add one line after
`learnMoreUrl` (line 19):

**Find (lines 18-20):**
```typescript
  learnMoreText: string;
  learnMoreUrl: string | null;
};
```

**Replace with:**
```typescript
  learnMoreText: string;
  learnMoreUrl: string | null;
  credentialType?: "course" | "sci-certificate";
};
```

### 3.2 Add `credentialType` to `Credential`

In the `Credential` type (lines 27-42), add one line after `learnMoreUrl`
(line 41):

**Find (lines 40-42):**
```typescript
  learnMoreText?: string;
  learnMoreUrl?: string;
};
```

**Replace with:**
```typescript
  learnMoreText?: string;
  learnMoreUrl?: string;
  credentialType?: "course" | "sci-certificate";
};
```

### 3.3 Pass `credentialType` through in `buildCredentialsFromYaml()`

In the `buildCredentialsFromYaml()` function, add the field to the object
pushed into `credentials`. After `learnMoreUrl` (line 63):

**Find (lines 62-64):**
```typescript
      learnMoreText: config.learnMoreText || "Learn More",
      learnMoreUrl: config.learnMoreUrl || config.primaryCtaUrl || undefined,
    });
```

**Replace with:**
```typescript
      learnMoreText: config.learnMoreText || "Learn More",
      learnMoreUrl: config.learnMoreUrl || config.primaryCtaUrl || undefined,
      credentialType: config.credentialType,
    });
```

**Verification:** After this change, `getCredentialBySlug("sci-certificate")`
returns a `Credential` with `credentialType === "sci-certificate"`. All
existing credentials return `credentialType === undefined`.

---

## 4. File: `src/data/awards.ts`

**Current file:** 59 lines. Has `Award` type and `getAwardById()`.

### 4.1 Add `SciCertification` type

Add the following type export **before** the `Award` type (before line 3):

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
```

### 4.2 Add `sci` field to `Award` type

**Find (lines 22-24):**
```typescript
  certificateUrl?: string;
};
```

**Replace with:**
```typescript
  certificateUrl?: string;
  sci?: SciCertification;
};
```

### 4.3 Extend `getAwardById()` to fetch SCI data

**Critical:** Do NOT modify the existing Supabase query (lines 27-38).
Instead, add a **second query** after the award is constructed. This
avoids any risk of breaking existing award fetching.

**Find (lines 46-59) -- the return statement through end of function:**
```typescript
  return {
    id: data.id,
    recipientName: Array.isArray(data.people)
      ? (data.people as any)[0]?.name
      : (data.people as any)?.name,
    credentialSlug: Array.isArray(data.badges)
      ? (data.badges as any)[0]?.slug
      : (data.badges as any)?.slug,
    issuedAt: data.issued_at,
    certificateUrl: supabase.storage.from("certificates").getPublicUrl(`awards/${data.id}.pdf`).data
      .publicUrl,
  };
}
```

**Replace with:**
```typescript
  const award: Award = {
    id: data.id,
    recipientName: Array.isArray(data.people)
      ? (data.people as any)[0]?.name
      : (data.people as any)?.name,
    credentialSlug: Array.isArray(data.badges)
      ? (data.badges as any)[0]?.slug
      : (data.badges as any)?.slug,
    issuedAt: data.issued_at,
    certificateUrl: supabase.storage.from("certificates").getPublicUrl(`awards/${data.id}.pdf`).data
      .publicUrl,
  };

  // Fetch SCI certification data if this is an SCI award
  if (award.credentialSlug === "sci-certificate") {
    const { data: sciData, error: sciError } = await supabase
      .from("sci_certifications")
      .select(
        `
        certificate_id,
        status,
        organization_name,
        software_name,
        software_version,
        sci_score,
        sci_unit,
        functional_unit,
        measurement_start,
        measurement_end,
        valid_from,
        valid_until,
        disclosure_url,
        contact_name,
        contact_email
      `,
      )
      .eq("award_id", data.id)
      .maybeSingle();

    if (!sciError && sciData) {
      award.sci = {
        certificateId: sciData.certificate_id,
        status: sciData.status,
        organizationName: sciData.organization_name,
        softwareName: sciData.software_name,
        softwareVersion: sciData.software_version,
        sciScore: Number(sciData.sci_score),
        sciUnit: sciData.sci_unit,
        functionalUnit: sciData.functional_unit,
        measurementStart: sciData.measurement_start,
        measurementEnd: sciData.measurement_end,
        validFrom: sciData.valid_from,
        validUntil: sciData.valid_until,
        disclosureUrl: sciData.disclosure_url,
        contactName: sciData.contact_name,
        contactEmail: sciData.contact_email,
      };
    }
  }

  return award;
}
```

**Verification:** For non-SCI awards, `award.sci` is `undefined` and the
second query is never executed. Zero impact on existing behavior.

---

## 5. File: `src/pages/api/webhooks/course-completion.ts`

**Current file:** 361 lines. This is the highest-risk file. Changes must
be surgical -- the existing course completion flow must remain untouched.

### 5.1 Add SCI-related imports

**Find (line 7):**
```typescript
import { sendAwardNotification, type EmailSendStatus } from "@/lib/resend";
```

**Replace with:**
```typescript
import { sendAwardNotification, sendSciCertificationNotification, type EmailSendStatus } from "@/lib/resend";
```

### 5.2 Add SCI Zod schemas

Add the following two schemas **after** the `supabaseWebhookSchema`
(after line 39, before the `COURSE_TO_BADGE_SLUG` constant):

```typescript
// Schema for Supabase webhook on sci_approvals table INSERT
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

// Schema for direct SCI certification API calls
const sciPayloadSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  badgeSlug: z.literal("sci-certificate"),
  sci: z.object({
    contactName: z.string().min(1),
    softwareName: z.string().min(1),
    softwareVersion: z.string().min(1),
    sciScore: z.number().positive(),
    sciUnit: z.string().min(1),
    functionalUnit: z.string().min(1),
    measurementStart: z.string().date(),
    measurementEnd: z.string().date(),
    disclosureUrl: z.string().url(),
  }),
});
```

### 5.3 Add SCI entries to `COURSE_TO_BADGE_SLUG`

**Find (lines 49-52):**
```typescript
  "sustainable-cloud-specialist": "sustainable-cloud-specialist",
  "sustainable cloud specialist": "sustainable-cloud-specialist",
  scs: "sustainable-cloud-specialist",
};
```

**Replace with:**
```typescript
  "sustainable-cloud-specialist": "sustainable-cloud-specialist",
  "sustainable cloud specialist": "sustainable-cloud-specialist",
  scs: "sustainable-cloud-specialist",
  // SCI Self-Certification
  "sci-certificate": "sci-certificate",
  "sci self-certification": "sci-certificate",
  sci: "sci-certificate",
};
```

### 5.4 Restructure payload parsing in the `POST` handler

This is the most critical change. The current parsing (lines 152-187)
tries `supabaseWebhookSchema` then falls back to `directPayloadSchema`.
We need to add the SCI schemas while preserving the exact same behavior
for existing payloads.

**Find (lines 152-187):**
```typescript
  // Try to parse as Supabase webhook payload first
  const supabaseParsed = supabaseWebhookSchema.safeParse(json);
  let name: string,
    email: string,
    badgeSlug: string | undefined,
    courseId: string | undefined,
    courseName: string | undefined;

  if (supabaseParsed.success) {
    // Handle Supabase webhook payload
    const record = supabaseParsed.data.record;
    name = record.user_name;
    email = record.user_email;
    courseId = record.course_id;
    courseName = record.course_name;
  } else {
    // Try to parse as direct payload
    const directParsed = directPayloadSchema.safeParse(json);
    if (!directParsed.success) {
      return jsonResponse(
        {
          error: "Invalid payload - must be either Supabase webhook or direct API format",
          details: directParsed.error.flatten(),
        },
        400,
      );
    }

    // Handle direct API payload
    const data = directParsed.data;
    name = data.name;
    email = data.email;
    badgeSlug = data.badgeSlug;
    courseId = data.courseId;
    courseName = data.courseName;
  }
```

**Replace with:**
```typescript
  // --- Payload parsing: try each schema in order ---

  // SCI-specific payload types
  type SciFields = {
    contactName: string;
    softwareName: string;
    softwareVersion: string;
    sciScore: number;
    sciUnit: string;
    functionalUnit: string;
    measurementStart: string;
    measurementEnd: string;
    disclosureUrl: string;
  };

  let name: string,
    email: string,
    badgeSlug: string | undefined,
    courseId: string | undefined,
    courseName: string | undefined,
    sciFields: SciFields | undefined;

  // 1) Supabase webhook from sci_approvals table
  const sciWebhookParsed = supabaseSciWebhookSchema.safeParse(json);
  if (sciWebhookParsed.success) {
    const record = sciWebhookParsed.data.record;
    name = record.organization_name;
    email = record.contact_email;
    badgeSlug = "sci-certificate";
    sciFields = {
      contactName: record.contact_name,
      softwareName: record.software_name,
      softwareVersion: record.software_version,
      sciScore: record.sci_score,
      sciUnit: record.sci_unit,
      functionalUnit: record.functional_unit,
      measurementStart: record.measurement_start,
      measurementEnd: record.measurement_end,
      disclosureUrl: record.disclosure_url,
    };
  } else {
    // 2) Supabase webhook from course_completions table (existing)
    const supabaseParsed = supabaseWebhookSchema.safeParse(json);
    if (supabaseParsed.success) {
      const record = supabaseParsed.data.record;
      name = record.user_name;
      email = record.user_email;
      courseId = record.course_id;
      courseName = record.course_name;
    } else {
      // 3) Direct SCI payload
      const sciDirectParsed = sciPayloadSchema.safeParse(json);
      if (sciDirectParsed.success) {
        const data = sciDirectParsed.data;
        name = data.name;
        email = data.email;
        badgeSlug = data.badgeSlug;
        sciFields = data.sci;
      } else {
        // 4) Direct course-completion payload (existing)
        const directParsed = directPayloadSchema.safeParse(json);
        if (!directParsed.success) {
          return jsonResponse(
            {
              error: "Invalid payload - must be Supabase webhook, SCI, or direct API format",
              details: directParsed.error.flatten(),
            },
            400,
          );
        }
        const data = directParsed.data;
        name = data.name;
        email = data.email;
        badgeSlug = data.badgeSlug;
        courseId = data.courseId;
        courseName = data.courseName;
      }
    }
  }
```

**Why this ordering is safe:**
- `supabaseSciWebhookSchema` requires `table: "sci_approvals"` (a literal),
  so it will never match existing course-completion webhook payloads which
  have a different `table` value and `record.course_id`.
- `supabaseWebhookSchema` requires `record.course_id`, which SCI payloads
  don't have. So it won't match SCI payloads.
- `sciPayloadSchema` requires `badgeSlug: "sci-certificate"` (a literal),
  so it won't match existing direct course payloads.
- The existing `directPayloadSchema` fallback is unchanged.

### 5.5 Add SCI badge image mapping

**Find (lines 286-293):**
```typescript
  // Dynamically select badge image based on badge slug
  let badgeImageUrl: string | undefined;
  if (badge.slug.startsWith("green-software-practitioner")) {
    badgeImageUrl = "/assets/badges/gsp-badge.png";
  } else if (badge.slug.startsWith("soft")) {
    badgeImageUrl = "/assets/badges/soft-badge.png";
  } else {
    badgeImageUrl = "/assets/card-badge.png"; // Fallback
  }
```

**Replace with:**
```typescript
  // Dynamically select badge image based on badge slug
  let badgeImageUrl: string | undefined;
  if (badge.slug === "sci-certificate") {
    badgeImageUrl = "/assets/badges/sci-certificate-badge.png";
  } else if (badge.slug.startsWith("green-software-practitioner")) {
    badgeImageUrl = "/assets/badges/gsp-badge.png";
  } else if (badge.slug.startsWith("soft")) {
    badgeImageUrl = "/assets/badges/soft-badge.png";
  } else {
    badgeImageUrl = "/assets/card-badge.png"; // Fallback
  }
```

**Note:** The `sci-certificate` check must come **before** the other
checks since it doesn't start with "green-software-practitioner" or "soft".

### 5.6 Fix idempotency for SCI (skip duplicate check)

The existing idempotency check (lines 252-258) prevents the same person
from getting the same badge twice. For SCI, the same organization can
certify multiple software products, so we must skip this check.

**Find (lines 252-265):**
```typescript
  // Make webhook idempotent: reuse existing award for this badge+person when present.
  const { data: existingAward, error: awardLookupError } = await supabase
    .from("awards")
    .select("id, issued_at")
    .eq("person_id", personId)
    .eq("badge_id", badge.id)
    .maybeSingle();

  if (awardLookupError) {
    return jsonResponse(
      { error: "Failed to lookup existing award", details: awardLookupError.message },
      500,
    );
  }
```

**Replace with:**
```typescript
  // Make webhook idempotent: reuse existing award for this badge+person when present.
  // For SCI certificates, skip idempotency -- the same org can certify multiple products.
  let existingAward: { id: string; issued_at: string } | null = null;

  if (!sciFields) {
    const { data: foundAward, error: awardLookupError } = await supabase
      .from("awards")
      .select("id, issued_at")
      .eq("person_id", personId)
      .eq("badge_id", badge.id)
      .maybeSingle();

    if (awardLookupError) {
      return jsonResponse(
        { error: "Failed to lookup existing award", details: awardLookupError.message },
        500,
      );
    }

    existingAward = foundAward;
  }
```

**Effect:** When `sciFields` is defined (SCI payload), `existingAward`
stays `null`, so the code always creates a new award. For course payloads,
behavior is identical to today.

### 5.7 Add SCI-specific post-award logic

After the certificate is generated and uploaded (after the `try/catch`
block that calls `generateCertificateAndUpload`, which ends around
line 334), and **before** the email sending code, insert the SCI
certification row creation and branch the email logic.

**Find (lines 316-344) -- from "Always (re)generate" to "emailStatus = emailResult":**
```typescript
  // Always (re)generate/upload the certificate for this award.
  const badgeUrl = new URL(`awards/${awardRecord.id}`, assetBaseUrl).toString();
  const issuedAtForCertificate = awardRecord.issued_at ?? issuedAt;
  try {
    const certificate = await generateCertificateAndUpload({
      recipientName: name,
      issuedAt: issuedAtForCertificate,
      verificationCode: awardRecord.id,
      badgeTitle: badgeName,
      badgeSlug: badge.slug,
      assetBaseUrl,
    });
    certificateUrl = certificate.publicUrl;
  } catch (err) {
    console.error(
      "Failed to generate or upload certificate SVG - check SUPABASE_SERVICE_ROLE_KEY",
      err,
    );
  }

  const emailResult = await sendAwardNotification({
    to: normalizedEmail,
    recipientName: name,
    credentialName: badgeName,
    badgeUrl,
    badgeImageUrl,
    assetBaseUrl,
  });
  emailStatus = emailResult;
```

**Replace with:**
```typescript
  // Always (re)generate/upload the certificate for this award.
  const badgeUrl = new URL(`awards/${awardRecord.id}`, assetBaseUrl).toString();
  const issuedAtForCertificate = awardRecord.issued_at ?? issuedAt;

  // For SCI: generate certificate ID and insert sci_certifications row
  let sciCertificateId: string | undefined;
  let sciValidFrom: string | undefined;
  let sciValidUntil: string | undefined;

  if (sciFields) {
    // Get sequential certificate ID via Postgres function
    const { data: certIdData, error: certIdError } = await supabase.rpc(
      "next_sci_certificate_id",
    );

    if (certIdError || !certIdData) {
      return jsonResponse(
        { error: "Failed to generate SCI certificate ID", details: certIdError?.message },
        500,
      );
    }

    sciCertificateId = certIdData as string;
    const today = new Date();
    sciValidFrom = today.toISOString().split("T")[0];
    const nextYear = new Date(today);
    nextYear.setFullYear(nextYear.getFullYear() + 1);
    sciValidUntil = nextYear.toISOString().split("T")[0];

    const { error: sciInsertError } = await supabase
      .from("sci_certifications")
      .insert({
        award_id: awardRecord.id,
        certificate_id: sciCertificateId,
        status: "Active",
        organization_name: name,
        software_name: sciFields.softwareName,
        software_version: sciFields.softwareVersion,
        sci_score: sciFields.sciScore,
        sci_unit: sciFields.sciUnit,
        functional_unit: sciFields.functionalUnit,
        measurement_start: sciFields.measurementStart,
        measurement_end: sciFields.measurementEnd,
        valid_from: sciValidFrom,
        valid_until: sciValidUntil,
        disclosure_url: sciFields.disclosureUrl,
        contact_name: sciFields.contactName,
        contact_email: normalizedEmail,
      });

    if (sciInsertError) {
      return jsonResponse(
        { error: "Failed to create SCI certification record", details: sciInsertError.message },
        500,
      );
    }
  }

  try {
    const certificate = await generateCertificateAndUpload({
      recipientName: name,
      issuedAt: issuedAtForCertificate,
      verificationCode: awardRecord.id,
      badgeTitle: badgeName,
      badgeSlug: badge.slug,
      assetBaseUrl,
      sci: sciFields
        ? {
            certificateId: sciCertificateId!,
            contactName: sciFields.contactName,
            softwareName: sciFields.softwareName,
            softwareVersion: sciFields.softwareVersion,
            sciScore: sciFields.sciScore,
            sciUnit: sciFields.sciUnit,
            functionalUnit: sciFields.functionalUnit,
            measurementStart: sciFields.measurementStart,
            measurementEnd: sciFields.measurementEnd,
            validUntil: sciValidUntil!,
            disclosureUrl: sciFields.disclosureUrl,
            status: "Active",
          }
        : undefined,
    });
    certificateUrl = certificate.publicUrl;
  } catch (err) {
    console.error(
      "Failed to generate or upload certificate SVG - check SUPABASE_SERVICE_ROLE_KEY",
      err,
    );
  }

  // Send notification email -- different template for SCI vs course
  if (sciFields && sciCertificateId) {
    const emailResult = await sendSciCertificationNotification({
      to: normalizedEmail,
      contactName: sciFields.contactName,
      organizationName: name,
      certificateId: sciCertificateId,
      softwareName: sciFields.softwareName,
      sciScore: sciFields.sciScore,
      sciUnit: sciFields.sciUnit,
      badgeUrl,
      disclosureUrl: sciFields.disclosureUrl,
      badgeImageUrl,
      assetBaseUrl,
    });
    emailStatus = emailResult;
  } else {
    const emailResult = await sendAwardNotification({
      to: normalizedEmail,
      recipientName: name,
      credentialName: badgeName,
      badgeUrl,
      badgeImageUrl,
      assetBaseUrl,
    });
    emailStatus = emailResult;
  }
```

### 5.8 Extend the response object for SCI

**Find (lines 346-359) -- the final return:**
```typescript
  return jsonResponse({
    status: "ok",
    badgeSlug: badge.slug,
    recipientEmail: normalizedEmail,
    recipientName: name,
    award: {
      id: awardRecord.id,
      verificationCode: awardRecord.id,
      issuedAt: awardRecord.issued_at ?? issuedAt,
      url: badgeUrl,
      certificateUrl,
    },
    email: emailStatus,
  });
```

**Replace with:**
```typescript
  const responseBody: Record<string, unknown> = {
    status: "ok",
    badgeSlug: badge.slug,
    recipientEmail: normalizedEmail,
    recipientName: name,
    award: {
      id: awardRecord.id,
      verificationCode: awardRecord.id,
      issuedAt: awardRecord.issued_at ?? issuedAt,
      url: badgeUrl,
      certificateUrl,
    },
    email: emailStatus,
  };

  if (sciFields && sciCertificateId) {
    responseBody.sci = {
      certificateId: sciCertificateId,
      organizationName: name,
      softwareName: sciFields.softwareName,
      softwareVersion: sciFields.softwareVersion,
      sciScore: sciFields.sciScore,
      sciUnit: sciFields.sciUnit,
      validFrom: sciValidFrom,
      validUntil: sciValidUntil,
      disclosureUrl: sciFields.disclosureUrl,
    };
  }

  return jsonResponse(responseBody);
```

---

## 6. File: `src/lib/certificatePdf.ts`

**Current file:** 503 lines. Handles template downloading, placeholder
replacement, and PDF/PNG generation via Puppeteer.

### 6.1 Add SCI placeholder constants

**Find (lines 19-20):**
```typescript
const COURSE_PLACEHOLDER = "${CourseName}";
const BADGE_IMAGE_PLACEHOLDER = "${BadgeImage}";
```

**Replace with:**
```typescript
const COURSE_PLACEHOLDER = "${CourseName}";
const BADGE_IMAGE_PLACEHOLDER = "${BadgeImage}";

// SCI-specific placeholders (used in templates/sci-certificate.html)
const SCI_CERTIFICATE_ID_PLACEHOLDER = "${CertificateId}";
const SCI_SOFTWARE_NAME_PLACEHOLDER = "${SoftwareName}";
const SCI_SOFTWARE_VERSION_PLACEHOLDER = "${SoftwareVersion}";
const SCI_SCORE_PLACEHOLDER = "${SciScore}";
const SCI_UNIT_PLACEHOLDER = "${SciUnit}";
const SCI_FUNCTIONAL_UNIT_PLACEHOLDER = "${FunctionalUnit}";
const SCI_MEASUREMENT_PERIOD_PLACEHOLDER = "${MeasurementPeriod}";
const SCI_VALID_UNTIL_PLACEHOLDER = "${ValidUntil}";
const SCI_DISCLOSURE_URL_PLACEHOLDER = "${DisclosureUrl}";
const SCI_CONTACT_NAME_PLACEHOLDER = "${ContactName}";
const SCI_STATUS_PLACEHOLDER = "${Status}";
```

### 6.2 Add SCI fields to `GenerateOptions`

**Find (lines 34-40):**
```typescript
type GenerateOptions = {
  recipientName: string;
  issuedAt: string;
  verificationCode: string;
  badgeTitle: string;
  badgeSlug?: string;
};
```

**Replace with:**
```typescript
type SciGenerateFields = {
  certificateId: string;
  contactName: string;
  softwareName: string;
  softwareVersion: string;
  sciScore: number;
  sciUnit: string;
  functionalUnit: string;
  measurementStart: string;
  measurementEnd: string;
  validUntil: string;
  disclosureUrl: string;
  status: string;
};

type GenerateOptions = {
  recipientName: string;
  issuedAt: string;
  verificationCode: string;
  badgeTitle: string;
  badgeSlug?: string;
  sci?: SciGenerateFields;
};
```

### 6.3 Add measurement period formatting helper

Add the following function **after** `formatIssuedDate` (after line 49):

```typescript
function formatMeasurementPeriod(start: string, end: string): string {
  const startDate = new Date(start + "T00:00:00");
  const endDate = new Date(end + "T00:00:00");
  const startLabel = startDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const endLabel = endDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return `${startLabel} – ${endLabel}`;
}
```

### 6.4 Add `replaceSciPlaceholders` function

Add the following function **after** `replacePlaceholders` (after line 163):

```typescript
function replaceSciPlaceholders(
  template: string,
  values: {
    organizationName: string;
    certificateId: string;
    softwareName: string;
    softwareVersion: string;
    sciScore: string;
    sciUnit: string;
    functionalUnit: string;
    measurementPeriod: string;
    issuedDateLabel: string;
    validUntilLabel: string;
    disclosureUrl: string;
    contactName: string;
    status: string;
  },
): string {
  const replacements: Array<[string, string]> = [
    [NAME_PLACEHOLDER, values.organizationName],
    [SCI_CERTIFICATE_ID_PLACEHOLDER, values.certificateId],
    [SCI_SOFTWARE_NAME_PLACEHOLDER, values.softwareName],
    [SCI_SOFTWARE_VERSION_PLACEHOLDER, values.softwareVersion],
    [SCI_SCORE_PLACEHOLDER, values.sciScore],
    [SCI_UNIT_PLACEHOLDER, values.sciUnit],
    [SCI_FUNCTIONAL_UNIT_PLACEHOLDER, values.functionalUnit],
    [SCI_MEASUREMENT_PERIOD_PLACEHOLDER, values.measurementPeriod],
    [DATE_PLACEHOLDER, values.issuedDateLabel],
    [SCI_VALID_UNTIL_PLACEHOLDER, values.validUntilLabel],
    [SCI_DISCLOSURE_URL_PLACEHOLDER, values.disclosureUrl],
    [SCI_CONTACT_NAME_PLACEHOLDER, values.contactName],
    [SCI_STATUS_PLACEHOLDER, values.status],
  ];

  let result = template;
  for (const [placeholder, value] of replacements) {
    if (!result.includes(placeholder)) {
      throw new Error(`SCI certificate template missing placeholder ${placeholder}`);
    }
    result = result.replaceAll(placeholder, value);
  }

  return result;
}
```

### 6.5 Branch `buildCertificateHtml` for SCI

**Find (lines 254-265):**
```typescript
export async function buildCertificateHtml(options: {
  recipientName: string;
  issuedDateLabel: string;
  badgeTitle: string;
  assetBaseUrl?: string;
  badgeSlug?: string;
}): Promise<string> {
  const template = await downloadCertificateTemplate(options.badgeSlug);
  const withBase = injectBaseHref(template);
  const withValues = replacePlaceholders(withBase, options);
  return inlineAssetSources(withValues, options.assetBaseUrl);
}
```

**Replace with:**
```typescript
export async function buildCertificateHtml(options: {
  recipientName: string;
  issuedDateLabel: string;
  badgeTitle: string;
  assetBaseUrl?: string;
  badgeSlug?: string;
  sci?: SciGenerateFields;
}): Promise<string> {
  const template = await downloadCertificateTemplate(options.badgeSlug);
  const withBase = injectBaseHref(template);

  let withValues: string;
  if (options.badgeSlug === "sci-certificate" && options.sci) {
    const validUntilDate = new Date(options.sci.validUntil + "T00:00:00");
    const validUntilLabel = validUntilDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    withValues = replaceSciPlaceholders(withBase, {
      organizationName: options.recipientName,
      certificateId: options.sci.certificateId,
      softwareName: options.sci.softwareName,
      softwareVersion: options.sci.softwareVersion,
      sciScore: options.sci.sciScore.toString(),
      sciUnit: options.sci.sciUnit,
      functionalUnit: options.sci.functionalUnit,
      measurementPeriod: formatMeasurementPeriod(
        options.sci.measurementStart,
        options.sci.measurementEnd,
      ),
      issuedDateLabel: options.issuedDateLabel,
      validUntilLabel,
      disclosureUrl: options.sci.disclosureUrl,
      contactName: options.sci.contactName,
      status: options.sci.status,
    });
  } else {
    withValues = replacePlaceholders(withBase, options);
  }

  return inlineAssetSources(withValues, options.assetBaseUrl);
}
```

### 6.6 Pass SCI fields through `generateCertificatePdf`

**Find (lines 407-419):**
```typescript
export async function generateCertificatePdf(
  options: GenerateOptions & { assetBaseUrl?: string },
): Promise<Uint8Array> {
  const issuedDateLabel = formatIssuedDate(options.issuedAt);
  const html = await buildCertificateHtml({
    recipientName: options.recipientName,
    issuedDateLabel,
    badgeTitle: options.badgeTitle,
    assetBaseUrl: options.assetBaseUrl,
    badgeSlug: options.badgeSlug,
  });
  return htmlToPdf(html);
}
```

**Replace with:**
```typescript
export async function generateCertificatePdf(
  options: GenerateOptions & { assetBaseUrl?: string },
): Promise<Uint8Array> {
  const issuedDateLabel = formatIssuedDate(options.issuedAt);
  const html = await buildCertificateHtml({
    recipientName: options.recipientName,
    issuedDateLabel,
    badgeTitle: options.badgeTitle,
    assetBaseUrl: options.assetBaseUrl,
    badgeSlug: options.badgeSlug,
    sci: options.sci,
  });
  return htmlToPdf(html);
}
```

### 6.7 No changes needed to `generateCertificateAndUpload`

The function signature is `GenerateOptions & { assetBaseUrl?: string }`,
and `GenerateOptions` now includes the optional `sci` field. The function
calls `generateCertificatePdf(options)` which passes all fields through.
No code change needed -- the type change in `GenerateOptions` is sufficient.

---

## 7. File: `src/lib/resend.ts`

**Current file:** 268 lines. Contains `sendAwardNotification()` and helpers.

### 7.1 Add `sendSciCertificationNotification` function

Add the following **after** the `sendAwardNotification` function (after
line 265, before the final `export type { EmailSendStatus };`):

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
}: {
  to: string;
  contactName: string;
  organizationName: string;
  certificateId: string;
  softwareName: string;
  sciScore: number;
  sciUnit: string;
  badgeUrl: string;
  disclosureUrl: string;
  badgeImageUrl?: string;
  assetBaseUrl?: string;
}): Promise<EmailSendStatus> {
  const resend = getResendClient();
  const from = 'help@greensoftware.foundation';

  if (!resend || !from) {
    return { status: "skipped", reason: "Resend not configured (missing API key or from address)" };
  }

  const subject = `Your SCI Self-Certification is confirmed – ${organizationName}`;
  const firstName = contactName.split(" ")[0];

  const resolvedBadgeImageUrl = toAbsoluteUrl(
    badgeImageUrl || "/assets/badges/sci-certificate-badge.png",
    assetBaseUrl,
  );
  const linkedInIconUrl = toAbsoluteUrl("/assets/icons/linkedin.png", assetBaseUrl);
  const globeIconUrl = toAbsoluteUrl("/assets/icons/global.png", assetBaseUrl);

  const footerIconsHtml = `
                 <a href="https://www.linkedin.com/company/green-software-foundation" style="display: inline-block; margin: 0 8px; opacity: 0.6;">
                   <img src="${linkedInIconUrl}" width="20" height="20" alt="LinkedIn" style="display: block; width: 20px; height: 20px; border: 0; outline: none; text-decoration: none;" />
                 </a>
                 <a href="https://greensoftware.foundation" style="display: inline-block; margin: 0 8px; opacity: 0.6;">
                   <img src="${globeIconUrl}" width="20" height="20" alt="Website" style="display: block; width: 20px; height: 20px; border: 0; outline: none; text-decoration: none;" />
                 </a>`;

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
</style>
</head>
<body style="margin: 0; padding: 0; background-color: white; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; color: #1f2937;">
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: white;">
    <tr>
      <td align="center" style="background:#fbfcf6; padding: 64px 0px; border-radius: 24px;">
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08); width: 100%; max-width: 600px; border: 1px solid #e5e7eb;">
           <tr>
             <td align="center" style="background-color: #ffffff; padding: 48px 40px 24px 40px;">
                <h2 style="color: #006d69; font-size: 20px; font-weight: 700; margin: 0; letter-spacing: -0.02em;">Green Software Foundation</h2>
             </td>
           </tr>

           <tr>
             <td style="padding: 40px 48px 48px 48px;">
               <h1 style="color: #111827; font-size: 26px; font-weight: 800; margin: 0 0 16px 0; text-align: center; letter-spacing: -0.02em; line-height: 1.2;">
                 SCI Self-Certification Confirmed
               </h1>

               <p style="color: #4b5563; font-size: 18px; line-height: 28px; margin: 0 0 32px 0; text-align: center;">
                 Hello ${firstName}, your organization's certification is ready.
               </p>

               <div style="background: radial-gradient(circle at center, #f0fdf4 0%, #ffffff 70%); padding: 40px 0; margin-bottom: 32px; text-align: center;">
                  <img src="${resolvedBadgeImageUrl}" alt="SCI Self-Certification badge" width="256" height="256" style="max-width: 256px; height: auto; display: block; margin: 0 auto;" />
               </div>

               <div style="background-color: #f9fafb; border-radius: 16px; padding: 32px; margin-bottom: 32px; border: 1px solid #f3f4f6;">
                 <p style="color: #111827; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 20px 0; text-align: center;">Certificate Details</p>

                 <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                   <tr>
                     <td style="padding-bottom: 12px;">
                        <span style="color: #6b7280; font-size: 14px;">Certificate ID</span><br />
                        <span style="color: #111827; font-weight: 600; font-size: 15px;">${certificateId}</span>
                     </td>
                   </tr>
                   <tr>
                     <td style="padding-bottom: 12px;">
                        <span style="color: #6b7280; font-size: 14px;">Organization</span><br />
                        <span style="color: #111827; font-weight: 600; font-size: 15px;">${organizationName}</span>
                     </td>
                   </tr>
                   <tr>
                     <td style="padding-bottom: 12px;">
                        <span style="color: #6b7280; font-size: 14px;">Software</span><br />
                        <span style="color: #111827; font-weight: 600; font-size: 15px;">${softwareName}</span>
                     </td>
                   </tr>
                   <tr>
                     <td>
                        <span style="color: #6b7280; font-size: 14px;">SCI Score</span><br />
                        <span style="color: #111827; font-weight: 600; font-size: 15px;">${sciScore} ${sciUnit}</span>
                     </td>
                   </tr>
                 </table>
               </div>

               <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                 <tr>
                   <td align="center" style="padding-bottom: 16px;">
                     <a href="${badgeUrl}" style="display: inline-block; background-color: #059669; color: #ffffff; font-size: 16px; font-weight: 600; text-decoration: none; padding: 16px 48px; border-radius: 50px; text-align: center; box-shadow: 0 4px 6px -1px rgba(5, 150, 105, 0.3), 0 2px 4px -1px rgba(5, 150, 105, 0.1);">
                       View Your Certificate
                     </a>
                   </td>
                 </tr>
                 <tr>
                   <td align="center" style="padding-bottom: 32px;">
                     <a href="${disclosureUrl}" style="color: #059669; font-size: 14px; font-weight: 600; text-decoration: underline;">
                       View Public Disclosure
                     </a>
                   </td>
                 </tr>
               </table>

               <p style="color: #374151; font-size: 14px; line-height: 22px; margin-bottom: 32px; text-align: center; font-style: italic;">
                 This is not third-party certification or accredited conformity assessment. The disclosed information enables peer review and community validation of conformity claims.
               </p>

               <div style="text-align: center;">
                 <p style="color: #111827; font-size: 16px; font-weight: 600; margin: 0;">
                   The Green Software Foundation Team
                 </p>
               </div>

               <div style="border-top: 1px dashed #e5e7eb; margin: 40px 0;"></div>

               <p style="color: #6b7280; font-size: 14px; line-height: 22px; margin: 0; text-align: center; max-width: 440px; margin-left: auto; margin-right: auto;">
                 Share your certification on LinkedIn and help drive the movement for greener software.
               </p>
             </td>
           </tr>

           <tr>
             <td style="background-color: #f9fafb; padding: 24px; text-align: center; border-top: 1px solid #f3f4f6;">
               <div style="margin-bottom: 20px;">
                 ${footerIconsHtml}
               </div>
               <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                 &copy; ${new Date().getFullYear()} Green Software Foundation. All rights reserved.
               </p>
             </td>
           </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  try {
    const result = await resend.emails.send({
      from: `Green Software Foundation <${from}>`,
      to,
      subject,
      text: [
        `Hello ${firstName},`,
        "",
        `Your organization's SCI Self-Certification has been confirmed.`,
        "",
        `Certificate ID: ${certificateId}`,
        `Organization: ${organizationName}`,
        `Software: ${softwareName}`,
        `SCI Score: ${sciScore} ${sciUnit}`,
        "",
        `View your certificate: ${badgeUrl}`,
        `View public disclosure: ${disclosureUrl}`,
        "",
        "This is not third-party certification or accredited conformity assessment.",
        "The disclosed information enables peer review and community validation of conformity claims.",
        "",
        "The Green Software Foundation Team",
        "",
        "---",
        "Share your certification on LinkedIn and help drive the movement for greener software.",
        "",
        `\u00A9 ${new Date().getFullYear()} Green Software Foundation. All rights reserved.`,
      ]
        .filter(Boolean)
        .join("\n"),
      html: htmlContent,
    });

    if (result.error) {
      return {
        status: "failed",
        reason: result.error.message || "Domain not verified or other Resend error",
      };
    }

    return { status: "sent" };
  } catch (error) {
    console.error("Failed to send SCI certification notification email", error);
    return {
      status: "failed",
      reason: error instanceof Error ? error.message : "Unknown error sending email",
    };
  }
}
```

### 7.2 Update exports

The existing file ends with `export type { EmailSendStatus };` on
line 267. The new function is exported via its `export async function`
declaration, so no change is needed to the export line. But the import
in `course-completion.ts` (changed in section 5.1) references the new
function name, so ensure the function is named exactly
`sendSciCertificationNotification`.

---

## 8. File: `src/pages/awards/[awardId].astro`

**Current file:** 317 lines. The award display page.

### 8.1 Update the frontmatter (script section)

The page needs to detect whether this is an SCI award and prepare
SCI-specific variables.

**Find (lines 40-44):**
```typescript
const credential = await getCredentialBySlug(award.credentialSlug);

if (!credential) {
  return Astro.redirect("/404");
}
```

**Replace with:**
```typescript
const credential = await getCredentialBySlug(award.credentialSlug);

if (!credential) {
  return Astro.redirect("/404");
}

const isSciCertificate = credential.credentialType === "sci-certificate" && !!award.sci;
```

**Find (lines 56-58):**
```typescript
const shareText = `I just earned the ${credential.title} credential from the Green Software Foundation!`;
const encodedUrl = encodeURIComponent(pageUrl);
const encodedText = encodeURIComponent(shareText);
```

**Replace with:**
```typescript
const shareText = isSciCertificate
  ? `${award.recipientName} is self-certified compliant with ISO/IEC 21031:2024 (SCI), verified by the Green Software Foundation`
  : `I just earned the ${credential.title} credential from the Green Software Foundation!`;
const encodedUrl = encodeURIComponent(pageUrl);
const encodedText = encodeURIComponent(shareText);
```

### 8.2 Add SCI-specific formatted dates in frontmatter

Add the following **after** the `linkedInProfileUrl` declaration (after
line 78):

```typescript
// SCI-specific display values
const sciMeasurementPeriod = isSciCertificate
  ? `${new Date(award.sci!.measurementStart + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} – ${new Date(award.sci!.measurementEnd + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}`
  : "";
const sciValidFrom = isSciCertificate
  ? new Date(award.sci!.validFrom + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
  : "";
const sciValidUntil = isSciCertificate
  ? new Date(award.sci!.validUntil + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
  : "";
```

### 8.3 Replace the main content with conditional layout

The core content of the page (inside `<PageLayout>`) needs a top-level
conditional: SCI layout vs course layout. The course layout must remain
**byte-for-byte identical** to the existing markup.

**Find (lines 96-263) -- from `<section class="container">` through the
closing `</section>` and the `<Cta>` component:**

Replace the entire `<section class="container">` block and the `<Cta>`
block with the following. The course layout branch is an exact copy of
the original markup:

```astro
  {isSciCertificate ? (
    <>
    <section class="container">
      <Card className="p-6 md:p-8 lg:p-10">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <p class="text-xs text-primary-darker">
            Certificate ID:
            <span class="font-bold">{award.sci!.certificateId}</span>
          </p>

          <div class="flex items-center gap-3">
            <span class={cn(
              "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
              award.sci!.status === "Active"
                ? "bg-green-100 text-green-800"
                : award.sci!.status === "Expired"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-red-100 text-red-800"
            )}>
              {award.sci!.status}
            </span>

            <a
              href={certificateUrl}
              download={`${award.sci!.certificateId}.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              class={cn(
                buttonVariants({ variant: "outline" }),
                "flex items-center gap-2",
                !award.certificateUrl && "pointer-events-none opacity-50"
              )}
            >
              <DownloadIcon />
              Download certificate
            </a>
          </div>
        </div>

        <div
          class="mt-8 flex flex-col items-center gap-8 text-center md:flex-row md:items-center md:gap-12 md:text-left"
        >
          <div class="shrink-0">
            <img
              src={credential.badgeImage || "/assets/card-badge.svg"}
              alt={`${credential.title} badge`}
              class="size-40 object-contain lg:size-53"
            />
          </div>

          <div class="max-w-2xl">
            <h1 class="text-3xl font-extrabold text-primary md:text-[40px]">
              {award.recipientName}
            </h1>
            <p class="mt-2 text-sm font-semibold uppercase tracking-wide text-gray-darker">
              Self-Certified Compliant with ISO/IEC 21031:2024
            </p>
            <p class="mt-1 text-2xl font-extrabold text-primary md:text-4xl">
              Software Carbon Intensity (SCI)
            </p>
            <p class="mt-3 text-sm text-gray-darker">
              {award.sci!.softwareName} v{award.sci!.softwareVersion}
            </p>
            <p
              class="mt-3 flex items-center justify-center gap-2 text-sm text-gray-darker md:justify-start"
            >
              <CalendarIcon /> Valid: {sciValidFrom} – {sciValidUntil}
            </p>
          </div>
        </div>
      </Card>

      <div class="mt-4 flex w-full flex-col gap-4 lg:flex-row">
        <Card className="p-8 lg:basis-[75%]">
          <div class="space-y-3">
            <h2 class="flex items-center gap-2 text-xl font-bold text-primary md:text-2xl">
              <BookIcon />
              Certificate Details
            </h2>
            <div class="mt-4 grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
              <div>
                <p class="font-semibold text-primary-darker">Organization</p>
                <p class="text-gray-darker">{award.sci!.organizationName}</p>
              </div>
              <div>
                <p class="font-semibold text-primary-darker">Software</p>
                <p class="text-gray-darker">{award.sci!.softwareName} v{award.sci!.softwareVersion}</p>
              </div>
              <div>
                <p class="font-semibold text-primary-darker">SCI Score</p>
                <p class="text-gray-darker">{award.sci!.sciScore} {award.sci!.sciUnit}</p>
              </div>
              <div>
                <p class="font-semibold text-primary-darker">Functional Unit</p>
                <p class="text-gray-darker">{award.sci!.functionalUnit}</p>
              </div>
              <div>
                <p class="font-semibold text-primary-darker">Measurement Period</p>
                <p class="text-gray-darker">{sciMeasurementPeriod}</p>
              </div>
              <div>
                <p class="font-semibold text-primary-darker">Issued</p>
                <p class="text-gray-darker">{issuedDateFormatted}</p>
              </div>
            </div>
          </div>

          <div class="my-8 h-px w-full bg-gray"></div>

          <h3 class="flex items-center gap-2 text-xl font-bold text-primary md:text-2xl">
            <WhatWillYouLearnIcon />
            Self-Certification Statement
          </h3>
          <div class="mt-4 space-y-3 text-sm text-gray-darker md:text-base">
            <p>
              This certificate confirms that {award.recipientName} has self-certified
              conformity with ISO/IEC 21031:2024 (Software Carbon Intensity) and
              provided complete disclosure information verified by the Green Software
              Foundation.
            </p>
            <ul class="ml-4 list-disc space-y-2">
              <li>
                <strong>Self-certification:</strong> {award.recipientName} declares that
                this SCI calculation conforms to ISO/IEC 21031:2024 requirements
              </li>
              <li>
                <strong>Disclosure verification:</strong> GSF verified that all required
                disclosure elements were provided with sufficient detail for community review
              </li>
            </ul>
            <p class="italic text-gray-500">
              This is not third-party certification or accredited conformity assessment.
              The disclosed information enables peer review and community validation of
              conformity claims.
            </p>
          </div>

          <div class="my-8 h-px w-full bg-gray"></div>

          <a
            href={award.sci!.disclosureUrl}
            target="_blank"
            rel="noopener noreferrer"
            class={cn(
              buttonVariants({ variant: "outline" }),
              "text-primary hover:text-primary-darker"
            )}
          >
            View Full Disclosure
            <ArrowRight />
          </a>
        </Card>

        <Card className="h-fit p-6 lg:basis-[25%]">
          <p class="flex items-center gap-3 text-sm font-extrabold text-primary">
            <ShareLinkIcon />
            Share Achievement
          </p>

          <div class="mt-3 flex items-center gap-2">
            {
              [
                { id: "linkedin", Icon: LinkedInIcon, href: socialLinks.linkedin },
                { id: "x", Icon: XIcon, href: socialLinks.x },
                { id: "facebook", Icon: FacebookIcon, href: socialLinks.facebook },
                { id: "whatsapp", Icon: WhatsappIcon, href: socialLinks.whatsapp },
              ].map(({ id, Icon, href }) => (
                <a
                  href={href}
                  data-share-id={id}
                  target="_blank"
                  rel="noopener noreferrer"
                  class={cn(buttonVariants({ variant: "primary" }), "p-2")}
                >
                  <Icon />
                </a>
              ))
            }
            <button
              id="copy-link-btn"
              data-url={pageUrl}
              class={cn(buttonVariants({ variant: "primary" }), "p-2")}
            >
              <CopyIcon />
            </button>
          </div>

          <a
            href={linkedInProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            class={cn(buttonVariants({ variant: "outline" }), "mt-3 w-full font-extrabold")}
          >
            Add to My LinkedIn Profile
          </a>

          <div class="my-3 h-px w-full bg-gray"></div>

          <a
            href={award.sci!.disclosureUrl}
            target="_blank"
            rel="noopener noreferrer"
            class={cn(
              buttonVariants({ variant: "primary" }),
              "flex w-full items-center gap-2 font-extrabold"
            )}
          >
            View Full Disclosure
            <ExternalLinkIcon />
          </a>
        </Card>
      </div>
    </section>

    <Cta
      sectionId="ready-to-build"
      sectionClass="pt-10 md:pt-12 lg:pt-16"
      title="Ready to Build Sustainable Software?"
      description="Take the next step in your green software journey. Get certified, access exclusive resources, and join thousands of practitioners making a real impact on our planet's future."
      buttonText="See all credentials"
      buttonVariant="primary"
      buttonHref="/#credentials"
      imageSrc="/assets/ready-to-build.svg"
      imageAlt="Ready to build sustainable software"
    />
    </>
  ) : (
    <>
    <section class="container">
      <Card className="p-6 md:p-8 lg:p-10">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <p class="text-xs text-primary-darker">
            Verification Code:
            <span class="font-bold">{award.id}</span>
          </p>

          <a
            href={certificateUrl}
            download={`${award.id}.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            class={cn(
              buttonVariants({ variant: "outline" }),
              "flex items-center gap-2",
              !award.certificateUrl && "pointer-events-none opacity-50"
            )}
          >
            <DownloadIcon />
            Download certificate
          </a>
        </div>

        <div
          class="mt-8 flex flex-col items-center gap-8 text-center md:flex-row md:items-center md:gap-12 md:text-left"
        >
          <div class="shrink-0">
            <img
              src={credential.badgeImage || "/assets/card-badge.svg"}
              alt={`${credential.title} badge`}
              class="size-40 object-contain lg:size-53"
            />
          </div>

          <div class="max-w-2xl">
            <h1 class="text-3xl font-extrabold text-primary md:text-[40px]">
              {award.recipientName}
            </h1>
            <p class="mt-3 text-sm text-gray-darker md:text-base">
              has successfully completed the course
            </p>
            <p class="mt-3 text-2xl font-extrabold text-primary md:text-4xl">
              {credential.title}
            </p>
            <p
              class="mt-3 flex items-center justify-center gap-2 text-sm text-gray-darker md:justify-start"
            >
              <CalendarIcon /> Awarded:
              <span>{issuedDateFormatted}</span>
            </p>
          </div>
        </div>
      </Card>

      <div class="mt-4 flex w-full flex-col gap-4 lg:flex-row">
        <Card className="p-8 lg:basis-[75%]">
          <div class="space-y-3">
            <h2 class="flex items-center gap-2 text-xl font-bold text-primary md:text-2xl">
              <BookIcon />
              About
            </h2>
            <div class="space-y-3 text-sm text-gray-darker md:text-base">
              {credential.aboutParagraphs.map((paragraph) => <p>{paragraph}</p>)}
            </div>
          </div>

          <div class="my-8 h-px w-full bg-gray"></div>

          <h3 class="flex items-center gap-2 text-xl font-bold text-primary md:text-2xl">
            <WhatWillYouLearnIcon />
            Outcomes
          </h3>
          <ul class="mt-4 text-gray-darker">
            {
              credential.outcomes.map((item) => (
                <li class="mt-4 flex items-center gap-3 first:mt-0">
                  <RoundedCheckIcon />
                  <span>{item}</span>
                </li>
              ))
            }
          </ul>

          <a
            href={credential.learnMoreUrl || `/credentials/${credential.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            class={cn(
              buttonVariants({ variant: "outline" }),
              "mt-4 text-primary hover:text-primary-darker"
            )}
          >
            {credential.learnMoreText || "Learn More"}
            <ArrowRight />
          </a>
        </Card>

        <Card className="h-fit p-6 lg:basis-[25%]">
          <p class="flex items-center gap-3 text-sm font-extrabold text-primary">
            <ShareLinkIcon />
            Share Achievement
          </p>

          <div class="mt-3 flex items-center gap-2">
            {
              [
                { id: "linkedin", Icon: LinkedInIcon, href: socialLinks.linkedin },
                { id: "x", Icon: XIcon, href: socialLinks.x },
                { id: "facebook", Icon: FacebookIcon, href: socialLinks.facebook },
                { id: "whatsapp", Icon: WhatsappIcon, href: socialLinks.whatsapp },
              ].map(({ id, Icon, href }) => (
                <a
                  href={href}
                  data-share-id={id}
                  target="_blank"
                  rel="noopener noreferrer"
                  class={cn(buttonVariants({ variant: "primary" }), "p-2")}
                >
                  <Icon />
                </a>
              ))
            }
            <button
              id="copy-link-btn"
              data-url={pageUrl}
              class={cn(buttonVariants({ variant: "primary" }), "p-2")}
            >
              <CopyIcon />
            </button>
          </div>

          <a
            href={linkedInProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            class={cn(buttonVariants({ variant: "outline" }), "mt-3 w-full font-extrabold")}
          >
            Add to My LinkedIn Profile
          </a>

          <div class="my-3 h-px w-full bg-gray"></div>

          <a
            href={credential.primaryCtaUrl || `/credentials/${credential.slug}`}
            class={cn(
              buttonVariants({ variant: "primary" }),
              "flex w-full items-center gap-2 font-extrabold"
            )}
          >
            {credential.primaryCtaText || "Take the course"}
            <ExternalLinkIcon />
          </a>
        </Card>
      </div>
    </section>

    <Cta
      sectionId="ready-to-build"
      sectionClass="pt-10 md:pt-12 lg:pt-16"
      title="Ready to Build Sustainable Software?"
      description="Take the next step in your green software journey. Get certified, access exclusive resources, and join thousands of practitioners making a real impact on our planet's future."
      buttonText="See all credentials"
      buttonVariant="primary"
      buttonHref="/#credentials"
      imageSrc="/assets/ready-to-build.svg"
      imageAlt="Ready to build sustainable software"
    />
    </>
  )}
```

**Critical verification:** The course layout branch (inside the `else`)
must be a character-for-character copy of the existing lines 96-263.
Any deviation will be a regression.

### 8.4 Script sections remain unchanged

The three `<script>` blocks at the bottom (lines 266-316) work for both
SCI and course layouts since they target elements by ID/data attributes
that exist in both layouts. No changes needed.

### 8.5 Known gap: OG/social-preview PNG uses generic award template

The award page triggers on-demand OG image generation via
`/api/og/[awardId].ts`, which calls `generateAwardPng()`. That function
renders the generic `templates/award.html` template from Supabase Storage,
which only has `${Name}` and `${CourseName}` placeholders.

For SCI awards this produces a course-style OG image reading something
like "ACME CORPORATION / SCI SELF-CERTIFICATION". This is functional
(no errors, no broken images) but visually suboptimal.

The same applies to the inline PNG generation inside
`generateCertificateAndUpload()` (`src/lib/certificatePdf.ts:473`),
which also calls `generateAwardPng()` with the generic template.

**No code changes are needed for this right now.** The OG endpoint and
the inline generation both work correctly -- they just produce a generic
social-sharing image for SCI awards rather than an SCI-specific one.

**Future improvement:** Create an SCI-specific award/OG template
(e.g. `templates/award-sci-certificate.html` in Supabase Storage) and
branch `generateAwardPng()` on `badgeSlug`, the same way
`buildCertificateHtml()` is branched for the certificate PDF. Update
`/api/og/[awardId].ts` similarly.

---

## 9. File: `src/pages/credentials/[slug].astro`

**Current file:** 161 lines. The credential detail page.

### 9.1 Guard the Outcomes section for empty arrays

**Find (lines 84-97):**
```astro
        <h3 class="flex items-center gap-2 text-xl font-bold text-primary md:text-2xl">
          <WhatWillYouLearnIcon />
          Outcomes
        </h3>
        <ul class="mt-4 text-gray-darker">
          {
            credential.outcomes.map((item) => (
              <li class="mt-4 flex items-center gap-3 first:mt-0">
                <RoundedCheckIcon />
                <span>{item}</span>
              </li>
            ))
          }
        </ul>
```

**Replace with:**
```astro
        {credential.outcomes.length > 0 && (
          <>
            <h3 class="flex items-center gap-2 text-xl font-bold text-primary md:text-2xl">
              <WhatWillYouLearnIcon />
              Outcomes
            </h3>
            <ul class="mt-4 text-gray-darker">
              {
                credential.outcomes.map((item) => (
                  <li class="mt-4 flex items-center gap-3 first:mt-0">
                    <RoundedCheckIcon />
                    <span>{item}</span>
                  </li>
                ))
              }
            </ul>
          </>
        )}
```

### 9.2 Conditional label for "Earning Criteria" vs "Requirements"

**Find (line 134):**
```astro
              <p class="text-sm font-medium text-primary-darker">Earning Criteria</p>
```

**Replace with:**
```astro
              <p class="text-sm font-medium text-primary-darker">{credential.credentialType === "sci-certificate" ? "Requirements" : "Earning Criteria"}</p>
```

### 9.3 Hide divider when Outcomes section is hidden

The divider between About and Outcomes (line 82-83) should only show
when Outcomes are present.

**Find (line 82):**
```astro
        <div class="my-8 h-px w-full bg-gray"></div>
```

**Replace with:**
```astro
        {credential.outcomes.length > 0 && <div class="my-8 h-px w-full bg-gray"></div>}
```

---

## 10. Static Assets

The following assets need to be created/placed. These require design work
and are **not generated by code changes**.

### 10.1 Badge image (PNG)

**File:** `public/assets/badges/sci-certificate-badge.png`

**Purpose:** Displayed on credential pages, award pages, and in emails.

**Specs:** 256x256px minimum, transparent background, GSF branding with
"SCI Self-Certification" text.

**Placeholder:** Until the final design is ready, copy an existing badge
as a placeholder:
```bash
cp public/assets/badges/gsp-badge.png public/assets/badges/sci-certificate-badge.png
```

### 10.2 Certificate HTML template

**Storage location:** Supabase Storage at
`certificates/templates/sci-certificate.html`

**Purpose:** Used by Puppeteer to render the PDF certificate.

**Required placeholders** (must appear exactly as shown):
- `${Name}` -- Organization name
- `${CertificateId}` -- GSF-SCI-2026-00042
- `${SoftwareName}` -- E-commerce API Service
- `${SoftwareVersion}` -- v2.1.0
- `${SciScore}` -- 349.63
- `${SciUnit}` -- gCO2eq per 1,000 API requests
- `${FunctionalUnit}` -- 1,000 API requests
- `${MeasurementPeriod}` -- January 1, 2025 – January 31, 2025
- `{Date}` -- March 28, 2026 (issued date)
- `${ValidUntil}` -- March 28, 2027
- `${DisclosureUrl}` -- GitHub link
- `${ContactName}` -- Contact person name
- `${Status}` -- Active

**Viewport:** 1440x810px (same as existing templates).

**Content requirements:**
- GSF branding/logo at top
- Title: "SELF-CERTIFIED COMPLIANT WITH ISO/IEC 21031:2024"
- Subtitle: "Software Carbon Intensity (SCI)"
- All placeholder fields displayed
- Self-certification statement (verbatim from spec)
- Disclaimer: "This is not third-party certification..."

This template must be uploaded to Supabase Storage before SCI
certificates can be generated.

---

## 11. Supabase Webhook Configuration

After all code is deployed, configure a Supabase database webhook:

1. Go to Supabase Dashboard → Database → Webhooks
2. Create a new webhook:
   - **Name:** `sci-approval-certificate-issuance`
   - **Table:** `sci_approvals`
   - **Events:** `INSERT`
   - **URL:** `https://badges.greensoftware.foundation/api/webhooks/course-completion`
   - **HTTP method:** POST
   - **Headers:**
     - `Content-Type: application/json`
     - `Authorization: Bearer <WEBHOOK_SECRET>`

The webhook secret must match the `WEBHOOK_SECRET` environment variable
already configured for the existing course-completion webhook.

---

## 12. Implementation Order

Execute in this order to minimize broken intermediate states:

1. **Database** (Section 1) -- Run all SQL. No impact on running code.
2. **YAML + types** (Sections 2, 3) -- Update badge definition and types.
   Deploy-safe: the new `credentialType` field is optional, and the
   SCI credential page will just work (no custom UI yet, but it renders).
3. **Awards data** (Section 4) -- Extend `getAwardById()`. Deploy-safe:
   returns `sci: undefined` for all existing awards.
4. **Certificate PDF** (Section 6) -- Add SCI placeholder handling.
   Deploy-safe: only invoked when `badgeSlug === "sci-certificate"`.
5. **Email** (Section 7) -- Add new function. Deploy-safe: not called
   until webhook handler is updated.
6. **Webhook handler** (Section 5) -- The big change. Must be deployed
   atomically. After this, the full SCI flow is live.
7. **Award page** (Section 8) -- SCI-specific display. Can deploy before
   or after the webhook handler (it gracefully handles `award.sci` being
   `undefined`).
8. **Credential page** (Section 9) -- Minor tweaks. Deploy anytime.
9. **Static assets** (Section 10) -- Badge images and HTML template.
   Must be in place before the first SCI certificate is generated.
10. **Supabase webhook** (Section 11) -- Configure last, once everything
    is deployed and tested.

---

## 13. Regression Checklist

After implementation, verify these existing features still work:

### Course completion webhook
- [ ] Send a POST to `/api/webhooks/course-completion` with the existing
      Supabase webhook format (`type: "INSERT", table: "course_completions",
      record: { course_id, user_name, user_email }`). Verify it creates
      a person, award, certificate PDF, and sends an email.
- [ ] Send the same payload again. Verify idempotency: reuses the
      existing award, does not create a duplicate.
- [ ] Send a direct payload (`{ name, email, badgeSlug: "green-software-practitioner" }`).
      Verify it works identically to before.

### Award pages
- [ ] Visit an existing course award page (`/awards/{uuid}`). Verify
      layout is unchanged: "has successfully completed the course" text,
      verification code, download link, share buttons, "Take the course" CTA.
- [ ] Visit a new SCI award page. Verify SCI-specific layout: certificate
      ID, status badge, validity dates, SCI score, disclosure link,
      self-certification statement.

### Credential pages
- [ ] Visit `/credentials/green-software-practitioner`. Verify Outcomes
      section displays (non-empty array), "Earning Criteria" label shows.
- [ ] Visit `/credentials/sci-certificate`. Verify Outcomes section is
      hidden (empty array), "Requirements" label shows instead of
      "Earning Criteria".

### SCI-specific flow
- [ ] Insert a row into `sci_approvals` via Supabase. Verify the webhook
      fires and creates: person row, award row, sci_certifications row
      with sequential certificate ID, PDF certificate, OG PNG, and
      sends the SCI-specific email.
- [ ] Insert a second row for the same organization (different software).
      Verify it creates a **new** award (idempotency skipped for SCI),
      with a new certificate ID (sequence incremented).
