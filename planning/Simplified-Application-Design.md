# Simplified Application Experience: Design Document

This document proposes changes to the submission template and review checklist to make the application experience as simple and frictionless as possible, while still collecting everything needed for disclosure verification.

---

## 1. Design Principles

1. **One channel**: Applicants email a completed markdown template to `sci-certification@greensoftware.foundation`. No portal, no form, no account.
2. **One document**: The template is a structured questionnaire the applicant fills in. A well-completed questionnaire is sufficient for certificate issuance — no additional materials are required.
3. **Guided, not open-ended**: Every field has a concrete prompt, an example answer, and a format hint. Applicants fill in blanks rather than composing narrative.
4. **Fewer decisions**: Remove conditional sections that force the applicant to decide what applies. If a section doesn't apply, they write "N/A" with a one-line reason.
5. **Review maps 1:1 to template**: Each review checklist item corresponds to a numbered section of the questionnaire, so reviewers can check items in order without hunting.

---

## 2. What Changes from the Current Template

The current `submission-email-template.md` has 12 parts across ~250 lines. The main friction points:

| Friction | Proposed fix |
|----------|-------------|
| 12 separate parts with varying structure (tables, prose, code blocks) | Consolidate to 8 sections with consistent fill-in format |
| Shared infrastructure table is confusing — applicants unsure if it applies | Fold into the boundary section as a simple follow-up question |
| Energy breakdown table has 4 columns per row | Simplify to 3 columns (component, value, source) — method goes in the methodology section |
| Embodied emissions table has 6 columns | Simplify to 3 columns (component, allocated value, source) — allocation detail goes in methodology |
| Assumptions and limitations are separate tables with severity/impact columns | Merge into a single "Assumptions and Limitations" list — drop severity ratings |
| Baseline comparison section creates confusion for first-time applicants | Move to end as clearly optional |
| Supporting materials section is vague | Replace with a specific one-liner about optional attachments |

---

## 3. Proposed Questionnaire Template

Below is the complete revised template. Section numbers match the proposed 7-item review checklist (Section 4).

---

### Email subject line

`SCI Self-Certification — [Organization] — [Software Name]`

### Section 1: About You and Your Software

```
Organization:        [e.g. Acme Corporation]
Contact name:        [Full name]
Contact email:       [e.g. jane.smith@acme.com]
Software name:       [e.g. E-commerce API]
Software version:    [e.g. v2.1.0 or "commit abc123, deployed 2026-01-15"]
Software URL:        [Link if public, or "Internal"]

What does it do?     [2-3 sentences: what the software does, tech stack, where it runs]
```

### Section 2: Your SCI Score

```
SCI score:           [Number] [unit] per [functional unit]
                     Example: 349.6 gCO2eq per 1,000 API requests

Measurement period:  [Start date] to [End date]
                     Example: 2026-01-01 to 2026-03-31
```

### Section 3: Software Boundary

**What's included?**

| Component | Brief description |
|-----------|------------------|
| [e.g. Application servers] | [e.g. 2× EC2 t3.medium running Node.js] |
| [e.g. Database] | [e.g. RDS PostgreSQL db.t3.medium] |

**What's excluded, and why?**

| Component | Reason for exclusion |
|-----------|---------------------|
| [e.g. CDN] | [e.g. Separate service outside operational boundary] |

**Does any included component run on shared infrastructure?** If yes, state what is shared and how you allocated your share. If no, write "No shared infrastructure."

```
[e.g. "App servers run on a shared Kubernetes cluster. Allocated by vCPU reservation: 2 of 16 vCPUs = 12.5%."]
```

### Section 4: Functional Unit (R)

```
Functional unit:     [e.g. 1,000 API requests]
Why this unit:       [e.g. Primary measure of how the service delivers value]
How counted:         [e.g. nginx access logs, validated against CloudWatch]
Total in period:     [e.g. 45,000,000 requests]
```

### Section 5: Energy (E) and Carbon Intensity (I)

**Energy**

```
Total energy:        [e.g. 46.01 kWh]
PUE applied:         [e.g. 1.2, or "N/A — cloud provider"]
```

| Component | Energy (kWh) | Data source |
|-----------|-------------|-------------|
| [e.g. Application servers] | [e.g. 21.6] | [e.g. AWS CloudWatch CPU metrics → TDP model] |
| [e.g. Database] | [e.g. 14.4] | [e.g. RDS CloudWatch metrics] |

**Carbon intensity**

```
Carbon intensity:    [e.g. 340 gCO2eq/kWh]
Location(s):         [e.g. AWS us-east-1 (Virginia, USA)]
Approach:            [Location-based / Market-based]
Data source + year:  [e.g. EPA eGRID 2023, SRVC subregion]
```

*If multi-region, add a row per region:*

| Region | % of workload | gCO2eq/kWh | Source |
|--------|--------------|------------|--------|
| [e.g. us-east-1] | [e.g. 60%] | [e.g. 340] | [e.g. EPA eGRID 2023] |

### Section 6: Embodied Emissions (M)

```
Total embodied (allocated): [e.g. 96,574.9 gCO2eq]
```

*If M = 0, explain why (e.g. "Pure SaaS — no hardware under our operational control") and skip the table.*

| Component | Allocated M (gCO2eq) | Data source |
|-----------|---------------------|-------------|
| [e.g. App server — EC2 t3.medium] | [e.g. 24,658] | [e.g. Cloud Carbon Footprint] |

### Section 7: Methodology and Calculation

**Approach:** [Measurement / Calculation / Hybrid]

**How you calculated your score:**

[Paragraph or bullet points: what tools/models you used, how you gathered data, key decisions you made.]

**Assumptions and limitations:**

| Assumption or limitation | Justification or mitigation |
|--------------------------|----------------------------|
| [e.g. Server avg power draw is 15W] | [e.g. Based on AWS TDP at 40% avg utilization] |
| [e.g. No direct hardware power metering] | [e.g. Used cloud telemetry as proxy] |

**Show your calculation:**

```
E × I = [E] × [I] = [result] gCO2eq
M = [M] gCO2eq
R = [total units]

SCI = (E × I + M) / R = [result] [unit] per [functional unit]
```

### Attestation

*Copy this block as-is and fill in the signature fields.*

> By submitting this application, I declare that the submitted SCI calculation conforms to all requirements of ISO/IEC 21031:2024, was performed in good faith using appropriate methodologies, and constitutes self-certification under ISO/IEC 17050. I accept responsibility for the accuracy and completeness of this disclosure, agree to maintain supporting documentation for 3 years, agree to use the certificate and badge only as permitted in the Badge Usage Guidelines, and consent to public disclosure of this submission. Full attestation terms: [link to attestation terms].
>
> **Signature:** _______________
> **Date:** _______________
> **Name and title:** _______________
> **Organization:** _______________

### Optional Attachments

You may attach supporting materials such as a spreadsheet with detailed calculations, an Impact Framework manifest file (IMP/YAML), or links to public documentation. These are encouraged but not required — the questionnaire above is sufficient.

---

## 4. Proposed 7-Item Review Checklist

The current 13-item checklist is thorough but can be consolidated further. Because the questionnaire is structured with clear fields, the reviewer's job shifts from "is this information present?" to "is this information adequate?" — presence is largely guaranteed by the template structure.

| # | Item | What the reviewer checks | Maps to |
|---|------|-------------------------|---------|
| 1 | **Identity and scope** | Org, contact, software identified; boundary has included/excluded with rationales; shared infra addressed if applicable | Sections 1, 3 |
| 2 | **Score and period** | SCI score stated with units and functional unit; measurement period with start/end dates | Section 2 |
| 3 | **Functional unit (R)** | Named, justified, counting method stated, total units provided | Section 4 |
| 4 | **Energy and carbon intensity (E, I)** | Total E with PUE; per-component breakdown with sources; I value with location, approach, source+year; multi-region weighted if applicable | Section 5 |
| 5 | **Embodied emissions (M)** | Total stated or M=0 justified; per-component with sources if M>0 | Section 6 |
| 6 | **Methodology and transparency** | Approach stated; methodology described; at least one assumption and one limitation disclosed; calculation shown with actual numbers matching the stated SCI score | Section 7 |
| 7 | **Attestation** | Signed and dated | Attestation |

**Marking**: Y (adequate) / N (missing) / I (insufficient — present but too vague to evaluate)

**Decision rule**:
- All Y → **Approved**
- Any N → **Revision Requested** — list missing items
- Any I → **Revision Requested** — state what needs strengthening
- 3+ items N or I → Direct applicant back to the template rather than itemising every gap
- **Reject** → Bad faith only (fabricated data, fraud). Requires 2 reviewers to concur. Never used for poor quality.

**Target review time**: ~30 minutes for a routine submission.

---

## 5. How This Relates to the Current 13-Item Checklist

| New 7-item | Current 13-item equivalent |
|------------|---------------------------|
| 1. Identity and scope | 1 (Applicant details) + 3 (Boundary) |
| 2. Score and period | 2 (SCI score and measurement period) |
| 3. Functional unit | 4 (Functional unit) |
| 4. Energy and carbon intensity | 5 (Energy total) + 6 (Energy breakdown) + 7 (Carbon intensity) |
| 5. Embodied emissions | 8 (Embodied emissions) |
| 6. Methodology and transparency | 9 (Methodology) + 10 (Assumptions) + 11 (Limitations) + 12 (Calculation shown) |
| 7. Attestation | 13 (Signed attestation) |

No information is lost. The 7 items group what a reviewer naturally checks together. The main consolidations:

- **Energy + carbon intensity** become one item because reviewers already check these together (E × I is a single term in the formula)
- **Methodology + assumptions + limitations + calculation** become one item because these are all "show your working" — the reviewer reads them as a block
- **Applicant details + boundary** become one item because both answer "who are you and what are you measuring?"

---

## 6. Implementation Status

This design has been implemented across all program documentation:

1. `submission-email-template.md` — rewritten with the 7-section questionnaire
2. `Reviewer-Guide.md` — updated to the 7-item checklist with review record template
3. `Applicant-Guide.md` — updated requirements, evaluation criteria, and pre-submission checklist
4. `LAUNCH-IMPLEMENTATION-PLAN.md` — updated checklist, review record template, and review procedure
5. `PM-Operations-Manual.md` — all checklist references updated
6. `Governance.md` — checklist references updated
7. `Landing-Page-Design.md` — submission requirements and checklist references updated
8. `GSF CoD Simplified proposal doc.md` — checklist references updated
9. `certification-update-plan.md` and `sci-certification-tech-spec.md` — earning criteria updated
10. Example submission and review record — restructured to match new sections and 7-item format
11. `README.md` — updated references

No information is lost from the previous 13-item checklist — every check is still performed, just grouped into 7 items that match how reviewers naturally read submissions.

---

## 7. What This Does NOT Change

- **Submission channel**: Email to `sci-certification@greensoftware.foundation` (unchanged)
- **What reviewers assess**: Disclosure completeness, not accuracy (unchanged)
- **Certificate lifecycle**: 1-year validity, renewal by full resubmission (unchanged)
- **Governance**: Same roles, escalation paths, dispute resolution (unchanged)
- **Public disclosure**: Approved submissions published to GitHub (unchanged)
