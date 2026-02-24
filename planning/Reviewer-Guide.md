# Reviewer Guide: SCI Self-Certification Program

## 1. Purpose and Scope

Your job is to verify **disclosure completeness**. When an organization submits an SCI self-certification application, you determine whether the submission contains enough information — in enough detail — for a knowledgeable third party to understand and evaluate the calculation.

You are **not** assessing whether the calculation is correct, whether the methodology is appropriate, or whether the submission conforms to ISO/IEC 21031:2024. The applicant self-certifies conformity; the community validates through review of the disclosed information. Your role is to confirm that the disclosure is complete, internally consistent, and sufficiently detailed to enable that community validation.

### What Reviewers Explicitly Do NOT Assess

- Whether the calculation actually conforms to ISO/IEC 21031:2024 (the applicant self-certifies this)
- Whether the SCI score is "correct" or "accurate"
- Whether the chosen methodology is the best or most appropriate approach
- Whether assumptions are "right" (only that they are disclosed)
- Whether data sources are "good" (only that they are identified)
- The relative quality of one submission compared to another (each is evaluated on its own merits)

---

## 2. Before You Start

### Conflict of Interest

You must recuse yourself if you have a professional or financial relationship with the applicant. This includes submissions from your own employer. If a conflict exists, disclose it to the program manager immediately so the submission can be reassigned.

### Time Budget

A routine submission should take approximately **2 hours total**:

| Gate | Expected Time |
|------|--------------|
| Gate 1: Completeness | ~30 minutes |
| Gate 2: Internal Consistency | ~15 minutes |
| Gate 3: Disclosure Sufficiency | ~60 minutes |

### Workflow

Work through the submission top to bottom. Gates 1 and 2 are mechanical — if the submission fails either, **stop and return it immediately** with specific feedback. Only invest the deeper reading time of Gate 3 on submissions that pass the first two gates.

---

## 3. Gate 1: Completeness

**Question**: Is everything present?

Binary checks — no judgement. Work through the submission section by section. Items marked *(if applicable)* can be skipped when the condition doesn't apply.

### Applicant and software (§3.1)

| # | Item | Y/N |
|---|------|-----|
| 1 | Organization name, contact name, and contact email | |
| 2 | Software name and version | |
| 3 | SCI score — numeric value with units including functional unit | |
| 4 | Measurement start date and end date | |

### Software boundary (§3.2)

| # | Item | Y/N |
|---|------|-----|
| 5 | At least one included component with justification for inclusion | |
| 6 | Excluded components listed — each with a specific rationale | |
| 7 | *(If shared infrastructure)* Allocation method and share stated | |

### Functional unit (§3.3)

| # | Item | Y/N |
|---|------|-----|
| 8 | Functional unit named | |
| 9 | Rationale for choice provided | |
| 10 | How units are counted or measured | |
| 11 | Total units in measurement period stated | |

### Energy — E (§3.4)

| # | Item | Y/N |
|---|------|-----|
| 12 | Total energy value with unit (kWh) | |
| 13 | Per-component energy breakdown with calculation or measurement method | |
| 14 | Data source(s) identified for energy values | |
| 15 | PUE value stated, or explicitly noted as not applicable | |

### Carbon intensity — I (§3.4)

| # | Item | Y/N |
|---|------|-----|
| 16 | Carbon intensity value with unit (gCO2eq/kWh) | |
| 17 | Location(s) stated | |
| 18 | Approach stated (location-based or market-based) | |
| 19 | Data source named with year | |
| 20 | *(If multi-region)* Per-region breakdown with percentage weights | |

### Embodied emissions — M (§3.4)

| # | Item | Y/N |
|---|------|-----|
| 21 | Total M value with unit (gCO2eq), OR explicit justification if M=0 | |
| 22 | *(If M>0)* Per-hardware-component breakdown | |
| 23 | *(If M>0)* Allocation methodology described (lifespan, time reserved, resource share) | |
| 24 | Data source(s) identified | |

### Methodology and assumptions (§3.4)

| # | Item | Y/N |
|---|------|-----|
| 25 | Overall approach stated (measurement / calculation / hybrid) | |
| 26 | At least one key assumption with justification | |
| 27 | At least one known limitation acknowledged | |

### Calculation

| # | Item | Y/N |
|---|------|-----|
| 28 | SCI formula shown with numbers (O = E×I, SCI = (O+M)/R) | |

### Attestation (§2.3)

| # | Item | Y/N |
|---|------|-----|
| 29 | Signed self-certification attestation covering all 10 points | |

### Gate 1 Outcome

- **All Y** → Proceed to Gate 2.
- **Any N** → **Revision Requested**. Draft a revision request listing exactly what is missing by item number. Do not proceed to Gate 2. The applicant can resubmit.
- **5+ items missing** → The submission is substantially incomplete. Send a brief email directing the applicant to the submission template rather than itemizing every gap.

---

## 4. Gate 2: Internal Consistency

**Question**: Do the numbers add up?

Extract the key values from the submission, verify the formulas, and record your working inline. Use the worksheet column to show your arithmetic.

| # | Check | Pass criterion | Tolerance | Your working |
|---|-------|---------------|-----------|-------------|
| 1 | O = E × I | Reviewer calculates E × I; result matches stated operational emissions | ±1% | E = ___ × I = ___ = ___ vs stated ___ |
| 2 | SCI = (O + M) / R | Reviewer calculates (O + M) / R; result matches stated SCI score | ±1% | (___ + ___) / ___ = ___ vs stated ___ |
| 3 | Component energy sums to total | Sum of per-component energy values (× PUE if stated) ≈ stated total E | ±1% | Sum = ___ × PUE ___ = ___ vs stated ___ |
| 4 | Embodied components sum to total | Sum of per-component allocated emissions ≈ stated total M | ±1% | Sum = ___ vs stated ___ |
| 5 | Dates are logical | start_date < end_date; end_date ≤ today | Exact | start = ___ end = ___ |
| 6 | PUE in plausible range | If stated: 1.0 ≤ PUE ≤ 3.0 | Exact | PUE = ___ |
| 7 | Carbon intensity in plausible range | 0 < I < 2000 gCO2eq/kWh | Exact | I = ___ |
| 8 | Regional weights sum to 100% | If multi-region: stated percentage allocations sum to 100% | Exact | Sum = ___% |
| 9 | Units are consistent throughout | Energy in kWh, carbon in gCO2eq, intensity in gCO2eq/kWh, SCI score includes functional unit | Exact | |

### Gate 2 Outcome

- **All pass** → Proceed to Gate 3.
- **Any fail** → **Revision Requested**. Identify the specific discrepancy — show both stated and calculated values (e.g., "Stated SCI is 350.00 but (E × I + M) / R = 349.63 — please confirm or correct"). Do not proceed to Gate 3.

---

## 5. Gate 3: Disclosure Sufficiency

**Question**: Is there enough detail for a knowledgeable third party to understand and evaluate the calculation?

This is the only gate requiring reviewer judgement. Score each criterion on the rubric below. Focus your attention on the boundary between 2 (insufficient — triggers revision) and 3 (sufficient — passes).

### Scoring Rubric (1–5 per criterion)

| Score | Meaning |
|-------|---------|
| 1 | **Absent or vacuous** — present but no meaningful content (e.g. "standard methodology") |
| 2 | **Vague** — some information but a practitioner could not understand the approach |
| 3 | **Adequate** — a practitioner can understand what was done. **This is the pass bar.** |
| 4 | **Good** — clear, specific, with named sources, explicit formulas, and justified choices |
| 5 | **Exemplary** — comprehensive and reproducible, with uncertainty analysis |

### Scored Criteria

For each criterion, the table shows the pass bar (score 3) and a concrete example of what fails (score 2). Use these to calibrate quickly.

#### A. Boundary Clarity

- **Pass bar (score ≥ 3)**: Included and excluded components are identifiable by name; each exclusion has a specific rationale tied to the system (e.g. "CDN is a separate service outside our operational boundary").
- **Fails — triggers revision (score ≤ 2)**: Exclusions listed but rationale is blank or generic (e.g. "not included", "out of scope").

**Your score**: [ ] **Rationale**: ___

#### B. Functional Unit Justification

- **Pass bar (score ≥ 3)**: Unit named, rationale connects it to how the software scales or delivers value, counting method identified (e.g. "counted from nginx access logs").
- **Fails — triggers revision (score ≤ 2)**: Unit named but no rationale, or rationale is circular (e.g. "we chose requests because we measure requests").

**Your score**: [ ] **Rationale**: ___

#### C. Energy Methodology

- **Pass bar (score ≥ 3)**: For each component: how energy was measured or estimated, what data was used, what coefficients were applied. A reader can trace from raw data to E.
- **Fails — triggers revision (score ≤ 2)**: Only a total energy figure with no breakdown, or breakdown with no explanation of how values were derived (e.g. "Server: 21.6 kWh" with no method).

**Your score**: [ ] **Rationale**: ___

#### D. Carbon Intensity Sourcing

- **Pass bar (score ≥ 3)**: Location(s) named, I value stated, data source named with year (e.g. "EPA eGRID 2022, SRVC subregion"). If multi-region, weighting shown.
- **Fails — triggers revision (score ≤ 2)**: I value stated but no source, or source without year, or "average grid data" without specifying whose data or which grid.

**Your score**: [ ] **Rationale**: ___

#### E. Embodied Emissions Methodology

- **Pass bar (score ≥ 3)**: If M>0: each hardware component shows total embodied, lifespan, time reserved, resource share (if applicable), allocation formula, and data source. If M=0: specific justification (e.g. "pure SaaS, no hardware under operational control").
- **Fails — triggers revision (score ≤ 2)**: M value with no component breakdown, or breakdown without allocation methodology, or M=0 with no justification.

**Your score**: [ ] **Rationale**: ___

#### F. Assumptions and Limitations

- **Pass bar (score ≥ 3)**: At least one specific assumption with justification (e.g. "server power 15W based on AWS TDP at 40% utilization"). At least one specific limitation (e.g. "no direct power metering — used cloud telemetry as proxy").
- **Fails — triggers revision (score ≤ 2)**: Generic statements only (e.g. "industry standard assumptions", "some limitations exist") or section is empty.

**Your score**: [ ] **Rationale**: ___

### Gate 3 Decision Rule

- **Approve**: ALL criteria score ≥ 3 (adequate or better).
- **Revision Requested**: ANY criterion scores 1 or 2 — specify which criteria are insufficient and what the applicant needs to add to reach a 3.
- **Reject**: Reserved for bad faith only (fabricated data, obvious fraud, persistent refusal to engage after revision requests). Never used for poor quality — poor quality always gets revision requests first. Rejection requires concurrence from 2+ reviewers.

---

## 6. Decision and Feedback

### Writing the Review Record

After completing all applicable gates, fill in the review record template (Section 7). Every review must produce a completed record — this is the auditable trail for the decision.

- Record Y/N for every Gate 1 item (mark N/A for conditional items that don't apply).
- Show your arithmetic for every Gate 2 check.
- Write a 1–2 sentence rationale for every Gate 3 score, referencing specific content in the submission.

### Drafting Revision-Request Feedback

When requesting revisions, your feedback must be **specific and actionable**:

- Reference the exact gate, item number, or criterion that triggered the revision.
- For Gate 1: list the missing items by number (e.g., "Items 6, 15, and 21 are missing").
- For Gate 2: show both the stated and calculated values (e.g., "Stated O = 15,600 gCO2eq but E × I = 46.01 × 340 = 15,643.4 gCO2eq").
- For Gate 3: identify the criterion (A–F), the score you gave, and what the applicant needs to add to reach a 3 (e.g., "Criterion C scored 2 — the energy section provides per-component values but does not explain how each value was derived. Please describe the measurement or estimation method for each component.").

### Rejection Escalation

Rejection is **never** used for poor quality — poor quality always gets revision requests first.

Rejection requires:

1. Evidence of bad faith (fabricated data, obvious fraud, or persistent refusal to engage after revision requests).
2. A detailed written rationale from the first reviewer.
3. Concurrence from a second reviewer who independently reviews the submission.
4. Both reviewers' records are submitted to the program manager before the rejection is communicated.

### Submitting Your Review

- Submit your completed review record to the program manager.
- **For approvals**: the program manager issues the certificate and publishes the disclosure.
- **For revision requests**: the program manager sends the feedback email to the applicant with your specific scored criteria.
- **For rejections**: the program manager assigns a second reviewer for independent assessment before the final decision.

---

## 7. Review Record Template

Copy the block below and fill it in for each review.

```
REVIEW RECORD
=============
Submission ID:    GSF-SUB-2026-NNNN
Reviewer:         [Name]
Review Date:      [Date]
Time Spent:       [hours]

GATE 1: COMPLETENESS (items grouped by submission section)
Items 1-29:       [Y/N for each, N/A for conditional items that don't apply]
Gate 1 Result:    PASS / FAIL (list missing items by number)

GATE 2: CONSISTENCY (record your working)
E = ___    I = ___    M = ___    R = ___
Check 1 (O=E×I):           ___ × ___ = ___  vs stated ___  | PASS / FAIL
Check 2 (SCI=(O+M)/R):     (___ + ___) / ___ = ___  vs stated ___  | PASS / FAIL
Check 3 (energy sum):      PASS / FAIL  [sum of components × PUE = ___]
Check 4 (embodied sum):    PASS / FAIL  [sum of components = ___]
Check 5 (dates logical):   PASS / FAIL
Check 6 (PUE range):       PASS / FAIL / N/A
Check 7 (CI range):        PASS / FAIL
Check 8 (regional weights): PASS / FAIL / N/A  [sum = ___%]
Check 9 (units consistent): PASS / FAIL
Gate 2 Result:    PASS / FAIL (specify failed checks)

GATE 3: DISCLOSURE SUFFICIENCY
A. Boundary clarity:              [1-5]  [rationale]
B. Functional unit justification: [1-5]  [rationale]
C. Energy methodology:            [1-5]  [rationale]
D. Carbon intensity sourcing:     [1-5]  [rationale]
E. Embodied emissions methodology:[1-5]  [rationale]
F. Assumptions and limitations:   [1-5]  [rationale]
Total Score:       [6-30]
Gate 3 Result:     APPROVE / REVISION REQUESTED / REJECT

OVERALL RECOMMENDATION:  APPROVE / REVISION REQUESTED / REJECT

If REVISION REQUESTED, specific feedback for applicant:
[What needs to change, tied to specific criteria]

If REJECT, rationale:
[Detailed justification; requires second reviewer concurrence]

NOTES / PRECEDENT:
[Any observations for future reference]
```

---

## 8. Edge Cases and Precedent Guidance

### M = 0 (Zero Embodied Emissions)

**Situation**: The applicant reports zero embodied emissions.

**How to handle**: M = 0 is acceptable **only** with a specific justification. Valid justifications include "pure SaaS with no hardware under operational control" or "serverless functions on shared infrastructure where provider does not disclose hardware details." A bare "M = 0" with no explanation fails Gate 1 (item 21). If the justification is present but weak (e.g., "not applicable"), score Criterion E accordingly in Gate 3.

### Unusual Functional Units

**Situation**: The applicant uses a functional unit you haven't seen before (e.g., "per document processed", "per GB transferred", "per model inference").

**How to handle**: The SCI specification allows any functional unit that scales with how the software is used. Do not reject a unit simply because it is novel. Check that (1) the unit is named, (2) there is a rationale connecting it to how the software delivers value or scales, and (3) the counting method is described. If all three are present, it passes Gate 1 and the rationale quality is assessed in Gate 3 (Criterion B). Note unusual units in the NOTES / PRECEDENT section of your review record so future reviewers can reference the precedent.

### "Internal Tools" as Data Sources

**Situation**: The applicant cites "internal monitoring tools", "proprietary telemetry", or "company dashboard" as data sources without naming the specific tool or method.

**How to handle**: The requirement is that data sources are **identified**, not that they are public or third-party. "Internal Prometheus monitoring with 5-minute sampling" or "AWS CloudWatch CPU utilization metrics" are adequate (score ≥ 3). "Internal tools" alone is vague (score ≤ 2) — the applicant needs to say what kind of tool and what it measures. Use Criterion C (Energy Methodology) or Criterion D (Carbon Intensity Sourcing) to score this.

### Vague Exclusion Rationales

**Situation**: The applicant lists excluded components but rationales are generic — "out of scope", "not included", "N/A".

**How to handle**: Each exclusion needs a rationale **specific to the system** — e.g., "CDN is a separate service managed by a third-party provider and outside our operational boundary." Generic rationales fail Gate 1 (item 6). If the rationale is present but thin, it passes Gate 1 but may score low on Criterion A in Gate 3. Provide example rationales in your revision feedback to help the applicant understand what is expected.

### Inconsistent Calculations (Rounding)

**Situation**: Gate 2 checks show a small discrepancy — the applicant's stated value differs from your calculation by less than 1%.

**How to handle**: The ±1% tolerance on checks 1–4 exists to accommodate rounding. If the discrepancy is within tolerance, the check **passes** — do not flag it. If it is just outside tolerance (e.g., 1.2%), use your judgement: if the discrepancy is clearly a rounding artifact (e.g., the applicant rounded intermediate values), note it but pass the check. If the discrepancy suggests a calculation error, request revision.

### Outdated Carbon Intensity Data

**Situation**: The applicant uses grid carbon intensity data that is more than 3–5 years old.

**How to handle**: The requirement is that the data source is **named with year** (Gate 1, item 19). Old data passes Gate 1 as long as the year is stated. In Gate 3 (Criterion D), consider whether more recent data is readily available for the stated region. If the region's grid mix has been relatively stable, older data may still be adequate (score 3). If the region has undergone significant grid changes and recent data is widely available (e.g., EPA eGRID is updated annually), note this in your rationale but still score based on whether the disclosure is sufficient for a reader to understand the calculation. Do not reject solely on data age.

### Multi-Region with Complex Weighting

**Situation**: The applicant operates across many regions with dynamic traffic-based allocation.

**How to handle**: Gate 1 requires per-region breakdown with percentage weights (item 20). Gate 2 requires the regional weights sum to 100% (check 8). If the applicant describes a dynamic weighting methodology (e.g., "weighted by monthly request volume per region"), verify that they have provided the actual percentages used for the measurement period, not just the methodology description. The weights must be concrete numbers that sum to 100%.

---

## 9. Calibration and Consistency

The following mechanisms keep assessments consistent across reviewers. You do not need to manage these — they are maintained by the program manager — but you should know they exist.

1. **Initial calibration session**: Before reviewing real submissions, all reviewers independently score 2–3 example submissions, then compare and discuss scores. This establishes shared understanding of the rubric.

2. **Dual review for the first 10 submissions**: During the pilot and early launch, every submission is reviewed by two reviewers independently. Scores are compared; divergences of more than 1 point on any criterion are discussed and resolved.

3. **Precedent log**: Edge-case decisions and their reasoning are recorded. When a similar case arises, reviewers reference the precedent rather than starting from scratch.

4. **Monthly calibration check**: At the monthly committee meeting, one recently-approved and one recently-revised submission are reviewed as a group. The committee confirms it would have reached the same decisions.

5. **Inter-reviewer agreement metric**: How often dual reviewers agree (both approve, both request revision) is tracked. Target: 80%+ agreement. If agreement is low, the rubric or guidance is tightened.
