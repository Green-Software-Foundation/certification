# Reviewer Guide: SCI Self-Certification Program

## 1. Purpose and Scope

Your job is to verify **disclosure completeness and adequacy**. When an organization submits an SCI self-certification application, you determine whether the submission contains enough information — in enough detail — for a knowledgeable third party to understand and evaluate the calculation.

You are **not** assessing whether the calculation is correct, whether the methodology is appropriate, or whether the submission conforms to ISO/IEC 21031:2024. The applicant self-certifies conformity; the community validates through review of the disclosed information. Your role is to confirm that the disclosure is complete and sufficiently detailed to enable that community validation.

### What Reviewers Explicitly Do NOT Assess

- Whether the calculation actually conforms to ISO/IEC 21031:2024 (the applicant self-certifies this)
- Whether the SCI score is "correct" or "accurate"
- Whether the arithmetic is correct (the applicant is responsible for this)
- Whether the chosen methodology is the best or most appropriate approach
- Whether assumptions are "right" (only that they are disclosed)
- Whether data sources are "good" (only that they are identified)
- The relative quality of one submission compared to another (each is evaluated on its own merits)

---

## 2. Before You Start

### Conflict of Interest

You must recuse yourself if you have a professional or financial relationship with the applicant. This includes submissions from your own employer. If a conflict exists, disclose it to the Program Owner (GSF Head of R&D) immediately so the submission can be reassigned.

### Time Budget

A routine submission should take approximately **45 minutes**.

### Workflow

Work through the submission top to bottom using the checklist in Section 3. For each item, mark **Y** (present and adequate), **N** (missing), or **I** (present but insufficient — too vague for a practitioner to understand). One pass through the submission is all that's needed.

The question for every item: *"Could a knowledgeable practitioner reading this disclosure understand and evaluate this part of the calculation?"*

---

## 3. Review Checklist

Each item is marked **Y** (present and adequate), **N** (missing), or **I** (insufficient — present but too vague). Items marked *(if applicable)* can be marked N/A when the condition doesn't apply.

### Applicant and software

| # | Item | Y/N/I |
|---|------|-------|
| 1 | Organization name, contact name, and contact email | |
| 2 | Software name, version, and brief description | |
| 3 | SCI score — numeric value with units including functional unit | |
| 4 | Measurement start and end dates (start < end, end not in the future) | |

### Software boundary

| # | Item | Y/N/I |
|---|------|-------|
| 5 | Included components named, each with a reason for inclusion | |
| 6 | Excluded components named, each with a **system-specific** rationale (not just "out of scope") | |
| 7 | *(If shared infrastructure)* Allocation method and share stated | |

### Functional unit (R)

| # | Item | Y/N/I |
|---|------|-------|
| 8 | Functional unit named | |
| 9 | Rationale connects the unit to how the software scales or delivers value (not circular) | |
| 10 | Counting/measurement method identified | |
| 11 | Total units in measurement period stated | |

### Energy (E)

| # | Item | Y/N/I |
|---|------|-------|
| 12 | Total energy with unit (kWh) | |
| 13 | Per-component energy breakdown — **each component** shows: energy value, how it was calculated or measured, and data source | |
| 14 | PUE stated, or explicitly noted as N/A | |

### Carbon intensity (I)

| # | Item | Y/N/I |
|---|------|-------|
| 15 | Carbon intensity value with unit (gCO2eq/kWh) — if multi-region, **per-region values** with weighting | |
| 16 | Location(s) stated | |
| 17 | Approach stated (location-based or market-based) | |
| 18 | Data source named **with year** (not just "grid average") | |
| 19 | *(If multi-region)* Per-region breakdown with percentage weights | |

### Embodied emissions (M)

| # | Item | Y/N/I |
|---|------|-------|
| 20 | Total M with unit, **or** specific justification if M = 0 | |
| 21 | *(If M > 0)* Per-component embodied emissions — **each component** shows: total embodied, allocation calculation, allocated value, and data source | |
| 22 | *(If M > 0)* Allocation method described with per-component parameters (lifespan, time reserved, resource share where applicable) | |

### Methodology, assumptions, limitations

| # | Item | Y/N/I |
|---|------|-------|
| 23 | Overall approach stated (measurement / calculation / hybrid) | |
| 24 | At least one **specific** assumption with justification (not "industry standard") | |
| 25 | At least one **specific** limitation acknowledged (not "some limitations exist") | |

### Calculation and attestation

| # | Item | Y/N/I |
|---|------|-------|
| 26 | SCI formula shown with actual numbers (O = E x I, SCI = (O+M)/R) | |
| 27 | Signed attestation covering all 10 points | |

### When to mark I (Insufficient)

Mark **I** when the information is present but too vague for a practitioner to understand what was done. Examples:

| Section | Passes (mark Y) | Insufficient (mark I) |
|---------|-----------------|----------------------|
| Exclusion rationales | "CDN is a separate service outside our operational boundary" | "Not included" / "Out of scope" |
| Functional unit rationale | "API requests are the primary unit of value; counted from nginx access logs" | "We chose requests because we measure requests" |
| Energy per component | "App servers: 21.6 kWh — 2 instances x 15W avg x 720h, from CloudWatch CPU metrics" | "App servers: 21.6 kWh" (no method or source) |
| Carbon intensity source | "EPA eGRID 2023, SRVC subregion" | "Average grid data" |
| Embodied per component | "Server: 1.2M gCO2eq total, 4yr lifespan, 720h reserved, allocated 24,658 gCO2eq (Cloud Carbon Footprint)" | "Server: 24,658 gCO2eq" (no allocation method or source) |
| Assumptions | "Server avg power 15W based on AWS TDP at 40% utilization" | "Industry standard assumptions" |
| Limitations | "No direct power metering — used cloud telemetry as proxy" | "Some limitations exist" |

---

## 4. Decision Rule

- **All Y (or N/A)** → **Approved**.
- **Any N** → **Revision Requested** — list missing items by number.
- **Any I** → **Revision Requested** — state what is too vague and what the applicant needs to add.
- **5+ items N or I** → Submission substantially incomplete. Direct the applicant back to the submission template rather than itemizing every gap.
- **Reject** → Bad faith only (fabricated data, obvious fraud, persistent refusal to engage). Never used for poor quality. Requires concurrence from 2+ reviewers.

---

## 5. Decision and Feedback

### Writing the Review Record

After completing the checklist, fill in the review record template (Section 6). Every review must produce a completed record — this is the auditable trail for the decision.

- Record Y/N/I for every item (mark N/A for conditional items that don't apply).
- For any item marked I, write a brief note explaining what is insufficient and what the applicant needs to add.

### Drafting Revision-Request Feedback

When requesting revisions, your feedback must be **specific and actionable**:

- Reference the exact item number(s) that triggered the revision.
- For items marked N: state what is missing (e.g., "Item 14: no PUE value stated").
- For items marked I: state what is too vague and what would make it adequate (e.g., "Item 13: the energy breakdown lists values per component but does not explain how each value was derived. Please describe the measurement or estimation method and data source for each component.").

### Rejection Escalation

Rejection is **never** used for poor quality — poor quality always gets revision requests first.

Rejection requires:

1. Evidence of bad faith (fabricated data, obvious fraud, or persistent refusal to engage after revision requests).
2. A detailed written rationale from the first reviewer.
3. Concurrence from a second reviewer who independently reviews the submission.
4. Both reviewers' records are submitted to the Program Owner before the rejection is communicated.

### Submitting Your Review

- Submit your completed review record to the Program Owner.
- **For approvals**: the Program Owner issues the certificate via the badging platform's issuance API (see Section 9) and publishes the disclosure to GitHub.
- **For revision requests**: the Program Owner sends the feedback email to the applicant with your specific notes.
- **For rejections**: the Program Owner assigns a second reviewer for independent assessment before the final decision.

---

## 6. Review Record Template

Copy the block below and fill it in for each review.

```
REVIEW RECORD
=============
Submission ID:    GSF-SUB-2026-NNNN
Reviewer:         [Name]
Review Date:      [Date]
Time Spent:       [hours]

CHECKLIST (Y = present & adequate, N = missing, I = insufficient, N/A = not applicable)

Applicant and software:
  1.  Organization, contact name, contact email:                    [ ]
  2.  Software name, version, description:                          [ ]
  3.  SCI score with units and functional unit:                     [ ]
  4.  Measurement start and end dates:                              [ ]

Software boundary:
  5.  Included components with reasons:                             [ ]
  6.  Excluded components with system-specific rationales:          [ ]
  7.  (If shared) Allocation method and share:                      [ ]

Functional unit:
  8.  Functional unit named:                                        [ ]
  9.  Rationale (connects to scaling/value):                        [ ]
  10. Counting/measurement method:                                  [ ]
  11. Total units in period:                                        [ ]

Energy:
  12. Total energy (kWh):                                           [ ]
  13. Per-component: value + method + data source each:             [ ]
  14. PUE stated or N/A:                                            [ ]

Carbon intensity:
  15. CI value (per-region if multi-region):                        [ ]
  16. Location(s):                                                  [ ]
  17. Approach (location/market-based):                             [ ]
  18. Data source with year:                                        [ ]
  19. (If multi-region) Per-region weights:                         [ ]

Embodied emissions:
  20. Total M or justification if zero:                             [ ]
  21. (If M>0) Per-component: total + allocation + value + source:  [ ]
  22. (If M>0) Allocation method with parameters:                   [ ]

Methodology, assumptions, limitations:
  23. Overall approach:                                             [ ]
  24. Specific assumption(s) with justification:                    [ ]
  25. Specific limitation(s):                                       [ ]

Calculation and attestation:
  26. SCI formula with numbers:                                     [ ]
  27. Signed attestation (10 points):                               [ ]

Result:           APPROVE / REVISION REQUESTED / REJECT

If REVISION REQUESTED — items marked N or I with notes:
[List item numbers and what needs to change]

If REJECT — rationale:
[Detailed justification; requires second reviewer concurrence]

NOTES / PRECEDENT:
[Any observations for future reference]
```

---

## 7. Edge Cases and Precedent Guidance

### M = 0 (Zero Embodied Emissions)

**Situation**: The applicant reports zero embodied emissions.

**How to handle**: M = 0 is acceptable **only** with a specific justification. Valid justifications include "pure SaaS with no hardware under operational control" or "serverless functions on shared infrastructure where provider does not disclose hardware details." A bare "M = 0" with no explanation → mark item 20 as **I**. If the justification is present but weak (e.g., "not applicable"), also mark as **I** with a note.

### Unusual Functional Units

**Situation**: The applicant uses a functional unit you haven't seen before (e.g., "per document processed", "per GB transferred", "per model inference").

**How to handle**: The SCI specification allows any functional unit that scales with how the software is used. Do not reject a unit simply because it is novel. Check that (1) it is named (item 8), (2) the rationale connects it to how the software delivers value or scales (item 9), and (3) the counting method is described (item 10). If all three are present and adequate, mark Y. Note unusual units in the NOTES / PRECEDENT section of your review record so future reviewers can reference the precedent.

### "Internal Tools" as Data Sources

**Situation**: The applicant cites "internal monitoring tools", "proprietary telemetry", or "company dashboard" as data sources without naming the specific tool or method.

**How to handle**: The requirement is that data sources are **identified**, not that they are public or third-party. "Internal Prometheus monitoring with 5-minute sampling" or "AWS CloudWatch CPU utilization metrics" → mark Y. "Internal tools" alone → mark the relevant item as **I** — the applicant needs to say what kind of tool and what it measures.

### Vague Exclusion Rationales

**Situation**: The applicant lists excluded components but rationales are generic — "out of scope", "not included", "N/A".

**How to handle**: Each exclusion needs a rationale **specific to the system** — e.g., "CDN is a separate service managed by a third-party provider and outside our operational boundary." Generic rationales → mark item 6 as **I**. Provide example rationales in your revision feedback to help the applicant understand what is expected.

### Outdated Carbon Intensity Data

**Situation**: The applicant uses grid carbon intensity data that is more than 3–5 years old.

**How to handle**: The requirement is that the data source is **named with year** (item 18). Old data is acceptable as long as the source and year are clearly stated — mark Y. The community can challenge whether the data is appropriate; your job is just to confirm it is identified. Do not reject solely on data age.

### Multi-Region with Complex Weighting

**Situation**: The applicant operates across many regions with dynamic traffic-based allocation.

**How to handle**: Item 19 requires per-region breakdown with percentage weights. If the applicant describes a dynamic weighting methodology (e.g., "weighted by monthly request volume per region"), verify that they have provided the actual percentages used for the measurement period, not just the methodology description. The weights must be concrete numbers that sum to 100%.

---

## 8. Calibration and Consistency

The following mechanisms keep assessments consistent across reviewers. You do not need to manage these — they are maintained by the Program Owner — but you should know they exist.

1. **Initial calibration session**: Before reviewing real submissions, all reviewers independently review 2–3 example submissions, then compare and discuss results. This establishes shared understanding of Y vs I boundaries.

2. **Dual review for the first 10 submissions**: During the pilot and early launch, every submission is reviewed by two reviewers independently. Results are compared; disagreements on Y vs I are discussed and resolved.

3. **Precedent log**: Edge-case decisions and their reasoning are recorded. When a similar case arises, reviewers reference the precedent rather than starting from scratch.

4. **Monthly calibration check**: At the monthly committee meeting, one recently-approved and one recently-revised submission are reviewed as a group. The committee confirms it would have reached the same decisions.

5. **Inter-reviewer agreement metric**: How often dual reviewers agree (both approve, both request revision) is tracked. Target: 80%+ agreement. If agreement is low, the checklist guidance is tightened.

---

## 9. Issuing a Certificate (After Approval)

Once a submission is approved, the Program Owner (or designated
reviewer) issues the certificate by calling the badging platform's
issuance API. The platform (`badges.greensoftware.foundation`) then
generates the certificate, uploads it, and emails the applicant.

### Step-by-step

1. **Publish the disclosure** to the `sci-certifications` GitHub repo and
   note the resulting URL.

2. **Call the issuance API** with the following fields, taken directly from
   the approved submission:

   | Field | What to enter | Source |
   |-------|--------------|--------|
   | `organization_name` | The applicant's organization name | Submission item 1 |
   | `contact_name` | The contact person's full name | Submission item 1 |
   | `contact_email` | The contact person's email address | Submission item 1 |
   | `software_name` | The name of the software or system | Submission item 2 |
   | `software_version` | The version string | Submission item 2 |
   | `sci_score` | The numeric SCI score (e.g. `349.63`) | Submission item 3 |
   | `sci_unit` | The full unit string including functional unit (e.g. `gCO2eq per 1,000 API requests`) | Submission item 3 |
   | `functional_unit` | The functional unit alone (e.g. `1,000 API requests`) | Submission item 8 |
   | `measurement_start` | Measurement period start date (`YYYY-MM-DD`) | Submission item 4 |
   | `measurement_end` | Measurement period end date (`YYYY-MM-DD`) | Submission item 4 |
   | `disclosure_url` | The GitHub URL of the published disclosure | From step 1 |

3. **Verify the certificate was issued.** The platform will have:
   - Created the certificate with a sequential ID (e.g. `GSF-SCI-2026-00042`)
   - Generated and uploaded the PDF certificate and social preview image
   - Sent a notification email to the contact person

   Open the certificate URL to confirm the certificate page is live.

### Important notes

- **Double-check all values before calling the API.** The data you provide
  becomes the certificate. Typos in the organization name, SCI score, or
  dates will appear on the published certificate.
- **One issuance per certification.** Each software product certified gets
  its own API call, even if the same organization has multiple certifications.

A more detailed operational guide with screenshots and troubleshooting will
be created after the platform implementation is complete.
