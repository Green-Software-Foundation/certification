# Applicant Guide: SCI Self-Certification Program

## What This Program Is

The Green Software Foundation (GSF) Self-Certification Program lets any organization declare that their Software Carbon Intensity (SCI) calculation conforms to ISO/IEC 21031:2024. You self-certify conformity. GSF then checks that your disclosure is complete and detailed enough for the public to understand and evaluate your calculation. If it is, GSF issues a certificate.

**This is not a third-party audit.** GSF does not validate the accuracy of your numbers, assess whether your methodology is correct, or confirm that your calculation actually conforms to ISO/IEC 21031:2024. You are responsible for all of that. GSF verifies only that your disclosure is complete and sufficiently detailed. Your submission is then published so the community can review it.

The program is **free**. There is no fee to apply, receive a certificate, or renew.

---

## Who Can Apply

The program is open to **any organization** that has calculated an SCI score according to ISO/IEC 21031:2024. There are no restrictions on organization size, type, location, software domain, or calculation methodology.

---

## How the Process Works — Overview

| Step | What happens | Who acts | Timeline |
|------|-------------|----------|----------|
| 1 | You email your submission | You | — |
| 2 | You receive an acknowledgement with a tracking number | Automatic | Within 1 business day |
| 3 | A reviewer checks your submission against a 7-item checklist | GSF reviewer | 10–15 business days |
| 4a | **Approved** — reviewer recommends approval | GSF reviewer | Included in the 10–15 days |
| 4b | **Revision requested** — you receive specific feedback on what to fix | GSF | Included in the 10–15 days |
| 4c | **Rejected** — only if the submission is made in bad faith | GSF | Included in the 10–15 days |
| 5 | **SWG sign-off** — the Software Standards Working Group has a 7-day objection period; the SWG Chair or Executive Director then provides sign-off | SWG | 7 calendar days after step 4a |
| 6 | **Certificate issued** — certificate issued, disclosure published | GSF | After sign-off |
| 7 | If revisions were requested, you fix and resubmit | You | At your pace |
| 8 | Resubmission re-enters the review queue | GSF reviewer | Another 10–15 business days (plus sign-off period if approved) |

Complex cases may extend to 20 business days for the review step. You will be notified of any delay. The total time from submission to certificate issuance is typically **3–4 weeks** (review period plus sign-off period).

---

## What You Must Submit

Your submission must contain **all** of the following. If any item is missing, your submission will be returned for revision before the review proceeds. Use the submission email template (`submission-email-template.md` in this repository) as your starting point — it is structured to match these requirements exactly.

### 1. About you and your software (template Section 1)

- Organization name
- Contact name and email
- Software or system name
- Software version
- Brief description of the software (what it does, how it is deployed)

### 2. Your SCI score (template Section 2)

- SCI score as a numeric value with units that include the functional unit (e.g., "349.63 gCO2eq per 1,000 API requests")
- Measurement start date (YYYY-MM-DD)
- Measurement end date (YYYY-MM-DD)

### 3. Software boundary (template Section 3)

- **Included components**: every significant component in the calculation, with a brief description.
- **Excluded components**: every significant component you left out, each with a **specific rationale** tied to your system. "Not included" or "out of scope" is not a rationale. See the examples below.
- **Shared infrastructure**: if any included component runs on shared infrastructure, state what is shared and how you allocated your share. If not, state "No shared infrastructure."

| Rationale that passes | Rationale that does not pass |
|-----------------------|------------------------------|
| "CDN is a separate service managed by a third-party provider and outside our operational boundary" | "Not included" |
| "End-user devices are beyond our operational control" | "Out of scope" |
| "CI/CD pipeline runs only during deployments and contributes <0.1% of total energy" | "N/A" |

### 4. Functional unit (template Section 4)

- The unit you chose (e.g., "per 1,000 API requests", "per training run", "per user-month")
- Why you chose it — the rationale must connect the unit to how your software scales or delivers value
- How you counted or measured the total units (e.g., "counted from nginx access logs")
- Total units in the measurement period (a number)

### 5. Energy and carbon intensity (template Section 5)

- Total energy value with unit (kWh)
- PUE value, or an explicit statement that PUE is not applicable
- **Per-component energy breakdown**: each component that consumes energy, the energy value, and the data source
- Carbon intensity value with unit (gCO2eq/kWh)
- Location(s) where the software runs
- Approach: location-based or market-based
- Data source **named with year** (e.g., "EPA eGRID 2023, SRVC subregion"). "Average grid data" with no source name or year is not sufficient.
- If multi-region: per-region breakdown with percentage weights that sum to 100%

### 6. Embodied emissions (template Section 6)

- Total M value with unit (gCO2eq), **OR** an explicit justification if M = 0 (e.g., "pure SaaS with no hardware under our operational control")
- If M > 0: per-component breakdown showing allocated emissions and data source for each

### 7. Methodology and calculation (template Section 7)

- Overall approach: measurement, calculation, or hybrid
- Description of your methodology
- **At least one specific assumption with justification** (e.g., "server average power draw is 15W, based on AWS TDP at estimated 40% utilization"). "Industry standard assumptions" is not specific enough.
- **At least one specific limitation** (e.g., "no direct hardware power metering — used cloud telemetry as proxy"). "Some limitations exist" is not specific enough.
- Full SCI calculation shown with your actual numbers

### Attestation

The submission template contains a 10-point attestation that you must sign and include. This is not optional. Copy it verbatim from the template, fill in the signature fields, and include it in your submission. The attestation covers your declaration of ISO/IEC 21031:2024 conformity, your responsibilities, GSF's limited role, badge usage obligations, and your consent to public disclosure.

### Optional attachments (encouraged)

These are not required but strengthen your submission:

- Impact Framework manifest file (IMP/YAML)
- Spreadsheet with detailed calculations
- Links to public documentation or methodology write-ups
- Baseline comparison data (if this is a renewal or re-measurement)

---

## How to Submit

**Email to:** sci-certification@greensoftware.foundation

**Subject line:** `SCI Self-Certification Submission — [Your Organization Name] — [Your Software Name]`

**Accepted formats:** PDF, Word, Markdown, or plain text in the email body. You can answer inline in the email or attach one or more documents. If you use attachments, reference each filename in the relevant section so the reviewer can match it.

Use the submission email template (`submission-email-template.md`) as your starting point. It is structured to match the requirements above section by section, with examples for every field.

**Your submission becomes your public disclosure.** If approved, your submission is published as-is to the public GitHub repository (with your contact email redacted and a certificate metadata header added). Write your submission knowing it will be the public-facing document — there is no separate disclosure step.

---

## Exactly How Your Submission Is Evaluated

Your reviewer works through a **7-item checklist** in a single pass. This is the exact same checklist your reviewer follows — there are no hidden criteria. Each item is marked **Y** (present and adequate), **N** (missing), or **I** (insufficient — present but too vague for a practitioner to understand). All items must be Y to pass.

The reviewer's question for every item: *"Could a knowledgeable practitioner reading this disclosure understand and evaluate this part of the calculation?"*

Here is what the reviewer checks, and what "adequate" looks like for the items where detail matters:

| Item | What must be present | What "adequate" looks like | What gets marked insufficient |
|------|---------------------|---------------------------|-------------------------------|
| **1. Identity and scope** | Applicant details; included/excluded components with rationales; shared infra | Exclusions have system-specific rationales (e.g., "CDN is outside our operational boundary") | Generic rationales ("out of scope", "N/A") |
| **3. Functional unit** | Unit, rationale, counting method, total | Rationale connects to how software scales; counting method named | Circular rationale ("we chose requests because we measure requests") |
| **4. Energy and carbon intensity** | Total E with PUE; per-component breakdown with sources; I value, location, approach, source+year | Each component shows energy value and data source; carbon intensity source named with year | Just a number per component with no source; "average grid data" |
| **5. Embodied (M)** | Total (or justified M=0); per-component with sources if M>0 | Each component shows allocated value and data source | Just an allocated number with no source |
| **6. Methodology and transparency** | Approach; methodology; assumptions; limitations; calculation shown | Specific assumptions with justification; specific limitations; SCI formula with actual numbers | "Industry standard assumptions"; "some limitations exist" |

**Decision rule:**

- **All Y** → Approved.
- **Any N or I** → Revision requested. You receive specific feedback identifying which items need attention and what to add.
- **3+ items N or I** → Submission substantially incomplete. You are directed back to this guide and the submission template.
- **Bad faith** (fabricated data, obvious fraud, persistent refusal to engage after revision requests) → Rejected. This requires concurrence from 2+ reviewers and is never used for poor quality. Poor quality always gets a revision request first.

---

## The Three Outcomes

### Approved

Your submission passes the review. What happens next:

1. The reviewer recommends approval. Your submission then enters a **7-day objection period** during which the Software Standards Working Group may raise objections. This is a governance safeguard — in practice, most submissions proceed without objection.
2. After the objection period, the SWG Chair or GSF Executive Director provides explicit sign-off.
3. GSF issues a certificate on the badging platform with a unique certificate ID (format: `GSF-SCI-YYYY-NNNNN`).
4. Your submission is published to the public GitHub repository (`greensoftware-foundation/sci-certifications`) with your contact email redacted and a certificate metadata header added.
5. You receive a short email with your certificate link, disclosure URL, badge download instructions, and expiry date.
6. Your certificate is **valid for 1 year** from the date of issuance.

### Revision Requested

Your submission had one or more items marked N (missing) or I (insufficient). This is **not a rejection** — it is an invitation to fix specific issues and resubmit. You will receive:

- The specific checklist items that need attention, identified by number.
- For missing items: what is missing.
- For insufficient items: what is too vague and what you need to add.

You may resubmit as many times as needed. Each resubmission enters the review queue and is reviewed within 10–15 business days.

### Rejected

Rejection is reserved exclusively for bad faith — fabricated data, obvious fraud, or persistent refusal to engage after revision requests. It is never used for incomplete or low-quality submissions. Those always receive revision requests.

If rejected, you receive a written explanation and may appeal through the dispute resolution process (see "Appeals" below).

---

## After Approval: Your Certificate

### What you receive

- A certificate on the GSF badging platform confirming your self-certification
- A downloadable badge (SVG and PNG, light and dark variants) for display on your website, README, presentations, and marketing materials
- A public disclosure page on GitHub containing your full submission

### Certificate validity

- Certificates are valid for **1 year** from the date of issuance.
- You will receive a renewal reminder **30 days** before expiry.
- To renew, submit a **full new submission** through the same process — renewal is not a lighter or abbreviated review. Renewed certificates receive a new certificate ID linked to the previous one.
- Expired certificates remain publicly visible as a historical record but are marked "Expired."

### Get featured (optional)

If you opted in during your submission, your organisation name and logo will appear on our **Certified Organisations** page — a public showcase of organisations that have self-certified their SCI scores. This is entirely voluntary and has no effect on your certificate. You can opt in or out at any time by emailing sci-certification@greensoftware.foundation.

You may also be invited to participate in a blog post or case study sharing your SCI measurement journey with the community.

### Your public disclosure

Your submission is published as-is to the `greensoftware-foundation/sci-certifications` GitHub repository, with two changes: your contact email is redacted, and a certificate metadata header (certificate ID, issue date, expiry date, certificate URL) is prepended. No separate disclosure document is created — your submission is the disclosure. This is a requirement of the program (attestation point 10) and enables the community validation that underpins the self-certification model.

---

## Certificate and Badge Usage Rules

These rules are binding. Violating them may result in certificate revocation. The full rules, including display examples, asset downloads, and enforcement details, are in the **[Badge Usage Guidelines](badge-usage-guidelines.md)**. The key points are summarized below.

### The single most important rule

**You must always include the "self-certified" qualifier when claiming ISO/IEC 21031:2024 conformity.** This applies everywhere: websites, marketing materials, press releases, presentations, social media, documentation, sales collateral — no exceptions.

Removing the "self-certified" qualifier is a violation of your attestation (point 8) and grounds for revocation.

### Quick reference

| Rule | Details |
|------|---------|
| **Always say "self-certified"** | Never claim "ISO certified", "third-party certified", "independently verified", or imply GSF validated accuracy or conformity. |
| **Badge must link to your certificate** | Every badge display must be a clickable link to your certificate URL. |
| **Active certificates only** | Remove the badge immediately when your certificate expires or is revoked. |
| **Do not modify the badge** | Use official assets only — no color changes, no layout changes, no added text. |
| **Include context** | When displaying the badge, include a statement clarifying this is self-certification, not third-party audit. |
| **One badge per product** | Only display the badge for the specific software covered by your certificate. |

### What GSF actually verified

GSF verified that your disclosure is **complete** (all required information present) and **sufficiently detailed** (a practitioner can understand what you did). GSF did not verify that your calculation is accurate, that your arithmetic is correct, that your methodology is appropriate, or that your SCI score conforms to ISO/IEC 21031:2024. You are responsible for all of that.

### Enforcement

- Community members can report misuse to sci-certification@greensoftware.foundation.
- First offence: warning with 14 days to correct.
- Persistent misuse: certificate revocation.
- GSF may conduct periodic spot-checks.

For approved/prohibited language examples, display guidelines, asset downloads, and the full enforcement process, see the **[Badge Usage Guidelines](badge-usage-guidelines.md)**.

---

## Community Challenge Process

Because this is self-certification, the community serves as the validation layer. Any party may challenge your certificate if they believe your calculation is non-conformant with ISO/IEC 21031:2024 or was made in bad faith.

**If your certificate is challenged:**

1. GSF reviews the challenge for legitimacy (5 business days). Frivolous challenges are dismissed.
2. If the challenge is valid, you are notified and have **30 days** to respond with clarifications, corrections, or a rebuttal. Your certificate status changes to "Under Community Review" during this period.
3. GSF evaluates your response (15 business days).

**Possible outcomes:**

| Outcome | What happens |
|---------|-------------|
| Challenge unfounded | Dismissed. Certificate returns to "Active." |
| Minor issues identified | You correct your disclosure. Certificate remains valid with a note: "Updated in response to community feedback." |
| Material non-conformity confirmed | Certificate revoked. You may resubmit after corrections. |
| Bad faith confirmed | Certificate immediately revoked. Public notice issued. 12–24 month ban from the program. |

---

## Appeals

If your submission is rejected or you disagree with a review decision, you may appeal.

**Phase 1 — Informal resolution (days 1–10):** Submit your dispute by email to sci-certification@greensoftware.foundation with a detailed rationale. The Program Owner (GSF Head of R&D) attempts informal resolution.

**Phase 2 — Formal review (days 11–30):** If unresolved, a 3-person panel from the review committee (excluding anyone involved in the original decision) reviews written statements from both sides and issues a written decision.

**Phase 3 — Final appeal (days 31–60):** Limited to procedural errors, new evidence, or panel misconduct. Heard by the SWG Chair (Chair of the Software Standards Working Group). Decision is final.

---

## Timescale Summary

| Event | Timeline |
|-------|----------|
| Acknowledgement after submission | Within 1 business day |
| Initial review decision | 10–15 business days (up to 20 for complex cases) |
| SWG objection period (after approval recommendation) | 7 calendar days |
| SWG Chair / Executive Director sign-off | After objection period expires |
| Total time: submission to certificate | ~3–4 weeks (review + sign-off) |
| Resubmission review | 10–15 business days from resubmission (plus sign-off period) |
| Certificate validity | 1 year from issuance |
| Renewal reminder | 30 days before expiry |
| Community challenge — initial review | 5 business days |
| Community challenge — your response window | 30 days |
| Community challenge — GSF evaluation | 15 business days |
| Appeal — informal resolution | 10 days |
| Appeal — formal review | 20 days |
| Appeal — final appeal | 30 days |

---

## Pre-Submission Checklist

Before you send your submission, confirm every item below. This checklist mirrors the 7 items the reviewer will check. If any item is missing or too vague, your submission will be returned.

- [ ] **1. Identity and scope** — organization name, contact, software name/version/description; included components with reasons; excluded components with **system-specific** rationales; shared infrastructure addressed
- [ ] **2. Score and period** — numeric SCI score with units including functional unit; measurement start and end dates
- [ ] **3. Functional unit (R)** — unit named; rationale connects to how the software scales or delivers value; counting/measurement method identified; total units stated
- [ ] **4. Energy and carbon intensity (E, I)** — total energy with PUE; per-component breakdown with data sources; carbon intensity value with location, approach, and source **named with year**; per-region breakdown if multi-region
- [ ] **5. Embodied emissions (M)** — total M with unit **or** specific justification if M = 0; per-component breakdown with data sources if M > 0
- [ ] **6. Methodology and transparency** — approach stated; methodology described; at least one **specific** assumption with justification; at least one **specific** limitation; calculation shown with actual numbers
- [ ] **7. Attestation** — all 10 attestation points present and signed

---

## Quick Reference: What Gets Approved, What Gets Returned, What Gets Rejected

| Situation | Outcome |
|-----------|---------|
| All 7 items marked Y | **Approved** |
| Missing items (e.g., no PUE stated, no exclusion rationales) | **Revision requested** — specific missing items listed by number |
| Disclosure too vague (e.g., "standard methodology", no data sources named) | **Revision requested** — items marked insufficient with guidance on what to add |
| Genuinely incomplete submission (3+ items N or I) | **Revision requested** — directed back to this guide and the submission template |
| Fabricated data, obvious fraud, persistent refusal to engage after revision requests | **Rejected** — requires 2+ reviewers to agree; you may appeal |

**The bar is "adequate", not "perfect."** You do not need uncertainty analysis, exhaustive documentation, or the best possible methodology. You need to provide enough detail that a practitioner can understand what you did and see where your numbers come from. If something is unclear, you will be told exactly what to fix.
