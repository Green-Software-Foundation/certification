# Applicant Guide: SCI Self-Certification Program

## What This Program Is

The Green Software Foundation (GSF) Self-Certification Program lets any organization declare that its Software Carbon Intensity (SCI) calculation conforms to ISO/IEC 21031:2024. You self-certify conformity. GSF then checks that your disclosure is complete and detailed enough for the public to understand and evaluate your calculation. If it is, GSF issues a certificate.

**This is not a third-party audit.** GSF does not validate the accuracy of your numbers, assess whether your methodology is correct, or confirm that your calculation actually conforms to ISO/IEC 21031:2024. You are responsible for all of that. GSF verifies only that your disclosure is complete, internally consistent, and sufficiently detailed. Your submission is then published so the community can review it.

The program is **free**. There is no fee to apply, and no fee to receive or renew a certificate.

---

## Who Can Apply

Any individual or organization that has calculated an SCI score according to ISO/IEC 21031:2024. There are no restrictions on organization size, type, location, software domain, or calculation methodology.

---

## How the Process Works — Overview

| Step | What happens | Who acts | Timeline |
|------|-------------|----------|----------|
| 1 | You email your submission | You | — |
| 2 | You receive an acknowledgement with a tracking number | Automatic | Within 1 business day |
| 3 | A reviewer checks your submission against three gates | GSF reviewer | 10–15 business days |
| 4a | **Approved** — certificate issued, disclosure published | GSF | Included in the 10–15 days |
| 4b | **Revision requested** — you receive specific feedback on what to fix | GSF | Included in the 10–15 days |
| 4c | **Rejected** — only if the submission is made in bad faith | GSF | Included in the 10–15 days |
| 5 | If revisions were requested, you fix and resubmit | You | At your pace |
| 6 | Resubmission re-enters the review queue | GSF reviewer | Another 10–15 business days |

Complex cases may extend to 20 business days. You will be notified of any delay.

---

## What You Must Submit

Your submission must contain **all** of the following. If any item is missing, your submission will be returned for revision before the review proceeds. Use the submission email template (`submission-email-template.md` in this repository) as your starting point — it is structured to match these requirements exactly.

### 1. Applicant and software details

- Organization name
- Contact name and email
- Software or system name
- Software version
- Brief description of the software (what it does, how it is deployed)

### 2. Measurement period and SCI score

- Measurement start date (YYYY-MM-DD)
- Measurement end date (YYYY-MM-DD)
- SCI score as a numeric value with units that include the functional unit (e.g., "349.63 gCO2eq per 1,000 API requests")

### 3. Software boundary

- **Included components**: every significant component in the calculation, with a brief justification for why each is included.
- **Excluded components**: every significant component you left out, each with a **specific rationale** tied to your system. "Not included" or "out of scope" is not a rationale. See the examples below.
- **Shared infrastructure** (if applicable): the allocation method and your share (percentage or ratio).

| Rationale that passes | Rationale that does not pass |
|-----------------------|------------------------------|
| "CDN is a separate service managed by a third-party provider and outside our operational boundary" | "Not included" |
| "End-user devices are beyond our operational control" | "Out of scope" |
| "CI/CD pipeline runs only during deployments and contributes <0.1% of total energy" | "N/A" |

### 4. Functional unit (R)

- The unit you chose (e.g., "per 1,000 API requests", "per training run", "per user-month")
- Why you chose it — the rationale must connect the unit to how your software scales or delivers value
- How you counted or measured the total units (e.g., "counted from nginx access logs")
- Total units in the measurement period (a number)

### 5. Energy (E)

- Total energy value with unit (kWh)
- **Per-component energy breakdown**: each component that consumes energy, the energy value, how it was calculated or measured, and the data source. A single total number with no breakdown is not sufficient.
- PUE value, or an explicit statement that PUE is not applicable

### 6. Carbon intensity (I)

- Carbon intensity value with unit (gCO2eq/kWh)
- Location(s) where the software runs
- Approach: location-based or market-based
- Data source **named with year** (e.g., "EPA eGRID 2022, SRVC subregion"). "Average grid data" with no source name or year is not sufficient.
- If multi-region: per-region breakdown with percentage weights that sum to 100%

### 7. Embodied emissions (M)

- Total M value with unit (gCO2eq), **OR** an explicit justification if M = 0 (e.g., "pure SaaS with no hardware under our operational control")
- If M > 0: per-hardware-component breakdown showing total embodied emissions, expected lifespan, time reserved, resource share (if applicable), allocated emissions, and data source for each
- Allocation methodology described

### 8. Methodology, assumptions, and limitations

- Overall approach: measurement, calculation, or hybrid
- **At least one specific assumption with justification** (e.g., "server average power draw is 15W, based on AWS TDP at estimated 40% utilization"). "Industry standard assumptions" is not specific enough.
- **At least one specific limitation** (e.g., "no direct hardware power metering — used cloud telemetry as proxy"). "Some limitations exist" is not specific enough.
- All data sources used, identified by name

### 9. Calculation

Show the full SCI formula with your actual numbers so arithmetic can be verified:

```
O = E × I = [your E] × [your I] = [result]
SCI = (O + M) / R = ([your O] + [your M]) / [your R] = [your score] per [your functional unit]
```

### 10. Self-certification attestation

The 10-point attestation below must be signed and included. This is not optional. Copy it verbatim, fill in the signature fields, and include it in your submission.

> **Self-Certification Attestation for ISO/IEC 21031:2024**
>
> By submitting this application, I hereby:
>
> 1. **DECLARE** that the submitted SCI calculation conforms to all requirements of ISO/IEC 21031:2024 (Software Carbon Intensity).
>
> 2. **ATTEST** that the calculation was performed in good faith using appropriate methodologies and data sources consistent with ISO/IEC 21031:2024.
>
> 3. **ACKNOWLEDGE** that this is self-certification under the ISO/IEC 17050 framework and does not constitute third-party certification or independent validation by the Green Software Foundation.
>
> 4. **MAINTAIN** supporting documentation for all calculations, methodologies, data sources, and assumptions for a minimum of 3 years and will provide upon reasonable request.
>
> 5. **ACCEPT RESPONSIBILITY** for the accuracy, completeness, and conformity of the calculation and disclosure with ISO/IEC 21031:2024.
>
> 6. **AGREE** to promptly correct any errors or inaccuracies if identified through community review or self-discovery.
>
> 7. **UNDERSTAND** that GSF's role is limited to verifying disclosure completeness, not validating calculation accuracy or ISO/IEC 21031:2024 conformity.
>
> 8. **AGREE** to use the certificate and badge only as permitted in the GSF Badge Usage Guidelines, including always using the "self-certified" qualifier when claiming ISO/IEC 21031:2024 conformity.
>
> 9. **ACKNOWLEDGE** that false or misleading self-certification may result in certificate revocation, public notice, and potential legal consequences.
>
> 10. **CONSENT** to public disclosure of the submitted information to enable community review and validation.
>
> **Signature:** ___________________
>
> **Date:** ___________________
>
> **Name and title:** ___________________
>
> **Organization:** ___________________

### Optional supporting materials (encouraged)

These are not required but strengthen your submission:

- Impact Framework manifest file (IMP/YAML)
- Spreadsheet with detailed calculations
- Links to public documentation or methodology write-ups
- Baseline comparison data (if this is a renewal or re-measurement)

---

## How to Submit

**Email to:** sci-certification@greensoftware.foundation

**Subject line:** `SCI Self-Certification Submission — [Your Organization Name] — [Your Software Name]`

**Accepted formats for the disclosure document:** PDF, Word, Markdown, or plain text in the email body. You can answer inline in the email or attach one or more documents. If you use attachments, reference each filename in the relevant section so the reviewer can match it.

Use the submission email template (`submission-email-template.md`) as your starting point. It is structured to match the requirements above section by section, with examples for every field.

---

## Exactly How Your Submission Is Evaluated

Your submission is measured against **three sequential gates**. This is the exact same process your reviewer follows — there are no hidden criteria. A submission must pass all three gates to be approved. Failure at any gate stops the review and produces specific feedback.

### Gate 1: Completeness — Is everything present?

The reviewer checks that all 29 required items (Sections 1–10 above) are present. This is binary — each item is either there or it isn't. No judgement is involved.

**If anything is missing**: your submission is returned with a list of the specific missing items. You fix them and resubmit.

**If 5 or more items are missing**: your submission is substantially incomplete. You will receive a short note directing you back to this guide and the submission template rather than an item-by-item list.

### Gate 2: Internal Consistency — Do the numbers add up?

The reviewer extracts your key values and verifies the arithmetic:

| Check | What the reviewer does | Tolerance |
|-------|----------------------|-----------|
| O = E × I | Multiplies your E by your I and compares to your stated operational emissions | ±1% |
| SCI = (O + M) / R | Calculates (O + M) / R and compares to your stated SCI score | ±1% |
| Component energy sums | Adds up your per-component energy values (× PUE if stated) and compares to your stated total E | ±1% |
| Embodied components sum | Adds up your per-component embodied emissions and compares to your stated total M | ±1% |
| Dates are logical | Checks that start < end and end ≤ today | Exact |
| PUE in plausible range | If stated: 1.0 ≤ PUE ≤ 3.0 | Exact |
| Carbon intensity in plausible range | 0 < I < 2,000 gCO2eq/kWh | Exact |
| Regional weights sum to 100% | If multi-region: checks that your percentages add up | Exact |
| Units consistent | Energy in kWh, carbon in gCO2eq, intensity in gCO2eq/kWh, SCI score includes functional unit | Exact |

**If any check fails**: your submission is returned with the specific discrepancy — the reviewer will show both your stated value and their calculated value.

### Gate 3: Disclosure Sufficiency — Is there enough detail?

This is the only gate involving judgement. The reviewer scores six criteria on a 1–5 scale. **The pass bar is 3 ("adequate") on every criterion.** You do not need to be exemplary — you need to be clear enough that a knowledgeable practitioner can understand what you did.

| Score | Meaning |
|-------|---------|
| 1 | **Absent or vacuous** — present but no meaningful content (e.g. "standard methodology") |
| 2 | **Vague** — some information but a practitioner could not understand the approach |
| 3 | **Adequate** — a practitioner can understand what was done. **This is the pass bar.** |
| 4 | **Good** — clear, specific, with named sources, explicit formulas, and justified choices |
| 5 | **Exemplary** — comprehensive and reproducible, with uncertainty analysis |

The six criteria, with concrete examples of what passes and what doesn't:

**A. Boundary clarity**

| Passes (score 3+) | Does not pass (score 2 or below) |
|--------------------|----------------------------------|
| Included and excluded components identifiable by name; each exclusion has a specific rationale tied to the system | Exclusions listed but rationale is blank or generic (e.g. "not included", "out of scope") |

**B. Functional unit justification**

| Passes (score 3+) | Does not pass (score 2 or below) |
|--------------------|----------------------------------|
| Unit named, rationale connects it to how the software scales or delivers value, counting method identified | Unit named but no rationale, or rationale is circular (e.g. "we chose requests because we measure requests") |

**C. Energy methodology**

| Passes (score 3+) | Does not pass (score 2 or below) |
|--------------------|----------------------------------|
| For each component: how energy was measured or estimated, what data was used, what coefficients were applied. A reader can trace from raw data to E. | Only a total energy figure with no breakdown, or breakdown with no explanation of how values were derived (e.g. "Server: 21.6 kWh" with no method) |

**D. Carbon intensity sourcing**

| Passes (score 3+) | Does not pass (score 2 or below) |
|--------------------|----------------------------------|
| Location(s) named, I value stated, data source named with year (e.g. "EPA eGRID 2022, SRVC subregion"). If multi-region, weighting shown. | I value stated but no source, or source without year, or "average grid data" without specifying whose data or which grid |

**E. Embodied emissions methodology**

| Passes (score 3+) | Does not pass (score 2 or below) |
|--------------------|----------------------------------|
| If M>0: each hardware component shows total embodied, lifespan, time reserved, resource share (if applicable), allocation formula, and data source. If M=0: specific justification (e.g. "pure SaaS, no hardware under operational control"). | M value with no component breakdown, or breakdown without allocation methodology, or M=0 with no justification |

**F. Assumptions and limitations**

| Passes (score 3+) | Does not pass (score 2 or below) |
|--------------------|----------------------------------|
| At least one specific assumption with justification. At least one specific limitation. | Generic statements only (e.g. "industry standard assumptions", "some limitations exist") or section is empty |

**Gate 3 decision rule:**

- **All six criteria score 3 or higher** → Approved.
- **Any criterion scores 1 or 2** → Revision requested. You receive specific feedback identifying which criteria need more detail and what to add.
- **Bad faith** (fabricated data, obvious fraud, persistent refusal to engage after revision requests) → Rejected. This requires concurrence from 2+ reviewers and is never used for poor quality. Poor quality always gets a revision request first.

---

## The Three Outcomes

### Approved

Your submission passes all three gates. What happens next:

1. GSF issues a certificate on the badging platform with a unique certificate ID (format: `GSF-SCI-YYYY-NNNNN`).
2. Your full disclosure is published to the public GitHub repository (`greensoftware-foundation/sci-certifications`).
3. You receive an email with your certificate link, badge download instructions, and badge usage guidelines.
4. Your certificate is **valid for 1 year** from the date of issuance.

### Revision Requested

Your submission failed one or more gates. This is **not a rejection** — it is an invitation to fix specific issues and resubmit. You will receive:

- The exact gate where the review stopped (Gate 1, 2, or 3).
- The specific items, checks, or criteria that need attention.
- What you need to add or correct to pass.

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
- To renew, submit an updated SCI calculation through the same process. Renewed certificates receive a new certificate ID linked to the previous one.
- Expired certificates remain publicly visible as a historical record but are marked "Expired."

### Your public disclosure

Your complete submission is published to the `greensoftware-foundation/sci-certifications` GitHub repository. This is a requirement of the program — by submitting, you consent to full public disclosure (attestation point 10). This transparency enables the community validation that underpins the self-certification model.

---

## Certificate and Badge Usage Rules

These rules are binding. Violating them may result in certificate revocation.

### The single most important rule

**You must always include the "self-certified" qualifier when claiming ISO/IEC 21031:2024 conformity.** This applies everywhere: websites, marketing materials, press releases, presentations, social media, documentation, sales collateral — no exceptions.

Removing the "self-certified" qualifier is a violation of your attestation (point 8) and grounds for revocation.

### Language you MAY use

- "Self-certified compliant with ISO/IEC 21031:2024, verified by GSF"
- "ISO/IEC 21031:2024 SCI calculation (self-certified, disclosure verified by Green Software Foundation)"
- "Our software carbon intensity has been self-certified to ISO/IEC 21031:2024 standards"
- "We have self-certified our SCI calculation with ISO/IEC 21031:2024 through the GSF program"

### Language you MUST NOT use

- "ISO certified" or "ISO/IEC 21031:2024 certified" (missing "self-certified" qualifier)
- "Certified by Green Software Foundation to ISO/IEC 21031:2024" (implies GSF certified conformity)
- "Certified by GSF for ISO 21031:2024" (implies GSF certified conformity)
- "Independently verified ISO/IEC 21031:2024 compliant" (falsely claims independent verification)
- "ISO certified software carbon intensity" (missing "self-certified" qualifier)
- "GSF verified ISO compliant" (implies GSF validated conformity, not just disclosure)
- "Certified by ISO accredited body" (this program is not accredited certification)
- "Third-party certified" or "independently certified" (this is self-certification, not third-party)
- "Audited and certified" (no audit was performed)
- Any claim implying GSF have verified compliance against the ISO standard
- Any claim implying an independent certification audit occurred

### Badge display rules

- The badge **must** link to your full disclosure (certificate URL or GitHub page).
- The badge may **only** be displayed while your certificate is active — not after it has expired or been revoked.
- The badge design **must not** be modified.
- If displaying conformity claims alongside the badge, the "self-certified" qualifier must be visible.

### What GSF actually verified

To be precise: GSF verified that your disclosure is **complete** (all required information present), **internally consistent** (the arithmetic checks out), and **sufficiently detailed** (a practitioner can understand what you did). GSF did not verify that your calculation is accurate, that your methodology is appropriate, or that your SCI score conforms to ISO/IEC 21031:2024. You certified those things yourself.

### Enforcement

- Community members can report misuse to sci-certification@greensoftware.foundation.
- First offence: warning with 14 days to correct.
- Persistent misuse: certificate revocation.
- GSF may conduct periodic spot-checks.

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

**Phase 1 — Informal resolution (days 1–10):** Submit your dispute by email to sci-certification@greensoftware.foundation with a detailed rationale. GSF staff attempt informal resolution.

**Phase 2 — Formal review (days 11–30):** If unresolved, a 3-person panel from the review committee (excluding anyone involved in the original decision) reviews written statements from both sides and issues a written decision.

**Phase 3 — Final appeal (days 31–60):** Limited to procedural errors, new evidence, or panel misconduct. Heard by GSF Standards Working Group leadership. Decision is final.

---

## Timescale Summary

| Event | Timeline |
|-------|----------|
| Acknowledgement after submission | Within 1 business day |
| Initial review decision | 10–15 business days (up to 20 for complex cases) |
| Resubmission review | 10–15 business days from resubmission |
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

Before you send your submission, confirm every item below. This checklist mirrors the 29 items the reviewer will check in Gate 1. If any item is missing, your submission will be returned.

- [ ] Organization name, contact name, and contact email
- [ ] Software name and version
- [ ] SCI score — numeric value with units including functional unit
- [ ] Measurement start date and end date
- [ ] At least one included component with justification for inclusion
- [ ] Excluded components listed — each with a specific rationale
- [ ] *(If shared infrastructure)* Allocation method and share stated
- [ ] Functional unit named
- [ ] Rationale for functional unit choice provided
- [ ] How units are counted or measured
- [ ] Total units in measurement period stated
- [ ] Total energy value with unit (kWh)
- [ ] Per-component energy breakdown with calculation or measurement method
- [ ] Data source(s) identified for energy values
- [ ] PUE value stated, or explicitly noted as not applicable
- [ ] Carbon intensity value with unit (gCO2eq/kWh)
- [ ] Location(s) stated
- [ ] Approach stated (location-based or market-based)
- [ ] Data source named with year
- [ ] *(If multi-region)* Per-region breakdown with percentage weights
- [ ] Total M value with unit (gCO2eq), OR explicit justification if M = 0
- [ ] *(If M > 0)* Per-hardware-component breakdown
- [ ] *(If M > 0)* Allocation methodology described (lifespan, time reserved, resource share)
- [ ] Data source(s) identified for embodied emissions
- [ ] Overall methodology approach stated (measurement / calculation / hybrid)
- [ ] At least one key assumption with justification
- [ ] At least one known limitation acknowledged
- [ ] SCI formula shown with numbers (O = E×I, SCI = (O+M)/R)
- [ ] Signed self-certification attestation (all 10 points)

---

## Quick Reference: What Gets Approved, What Gets Returned, What Gets Rejected

| Situation | Outcome |
|-----------|---------|
| All information present, arithmetic checks out, all six disclosure criteria score 3+ | **Approved** |
| Missing items (e.g., no PUE stated, no exclusion rationales) | **Revision requested** — specific missing items listed |
| Arithmetic error (e.g., O ≠ E × I within 1%) | **Revision requested** — discrepancy shown with both values |
| Disclosure too vague (e.g., "standard methodology", no data sources named) | **Revision requested** — specific criteria identified with guidance on what to add |
| Genuinely incomplete submission (5+ items missing) | **Revision requested** — directed back to this guide and the submission template |
| Fabricated data, obvious fraud, persistent refusal to engage after revision requests | **Rejected** — requires 2+ reviewers to agree; you may appeal |

**The bar is "adequate", not "perfect."** You do not need uncertainty analysis, exhaustive documentation, or the best possible methodology. You need to provide enough detail that a practitioner can understand what you did, verify your arithmetic, and see where your numbers come from. If something is unclear, you will be told exactly what to fix.
