# Example Review Record: GreenTech Solutions — Inventory Management API

> **This is an example review record.** It demonstrates what a completed review
> record looks like when a reviewer processes a submission through all three
> gates and recommends approval. The arithmetic in Gate 2 shows the reviewer's
> actual working. The Gate 3 rationales illustrate the level of specificity
> expected.

---

```
REVIEW RECORD
=============
Submission ID:    GSF-SUB-2026-0001
Reviewer:         Marcus Rivera
Review Date:      2026-02-10
Time Spent:       1.75 hours

GATE 1: COMPLETENESS (items grouped by submission section)

Applicant and software (§3.1):
  1.  Organization name, contact name, contact email:                      Y
  2.  Software name and version:                                           Y
  3.  SCI score — numeric value with units including functional unit:       Y
  4.  Measurement start date and end date:                                 Y

Software boundary (§3.2):
  5.  At least one included component with justification:                  Y
  6.  Excluded components — each with a specific rationale:                Y
  7.  (If shared infrastructure) Allocation method and share stated:       N/A

Functional unit (§3.3):
  8.  Functional unit named:                                               Y
  9.  Rationale for choice provided:                                       Y
  10. How units are counted or measured:                                    Y
  11. Total units in measurement period stated:                            Y

Energy — E (§3.4):
  12. Total energy value with unit (kWh):                                  Y
  13. Per-component energy breakdown with method:                          Y
  14. Data source(s) identified for energy values:                         Y
  15. PUE value stated, or explicitly noted as not applicable:             Y

Carbon intensity — I (§3.4):
  16. Carbon intensity value with unit (gCO2eq/kWh):                       Y
  17. Location(s) stated:                                                  Y
  18. Approach stated (location-based or market-based):                    Y
  19. Data source named with year:                                         Y
  20. (If multi-region) Per-region breakdown with percentage weights:       N/A

Embodied emissions — M (§3.4):
  21. Total M value with unit (gCO2eq):                                    Y
  22. (If M>0) Per-hardware-component breakdown:                           Y
  23. (If M>0) Allocation methodology described:                           Y
  24. Data source(s) identified:                                           Y

Methodology and assumptions (§3.4):
  25. Overall approach stated:                                             Y
  26. At least one key assumption with justification:                      Y
  27. At least one known limitation acknowledged:                          Y

Calculation:
  28. SCI formula shown with numbers (O = E×I, SCI = (O+M)/R):            Y

Attestation (§2.3):
  29. Signed self-certification attestation covering all 10 points:        Y

Gate 1 Result:    PASS (29/29 items present; items 7 and 20 N/A)


GATE 2: CONSISTENCY (record your working)

E = 58.046 kWh    I = 370 gCO2eq/kWh    M = 99,794.52 gCO2eq    R = 25,000

Check 1 (O=E×I):
  58.046 × 370 = 21,477.02 vs stated 21,477.17                  | PASS
  [0.0007% difference — rounding of intermediate E value
   (48.372 × 1.2 = 58.0464; 58.0464 × 370 = 21,477.168)]

Check 2 (SCI=(O+M)/R):
  (21,477.17 + 99,794.52) / 25,000 = 121,271.69 / 25,000
  = 4.85087 vs stated 4.85                                      | PASS
  [Rounds correctly to stated value]

Check 3 (energy sum):
  Component energy before PUE:
    11.160 + 11.160 + 16.368 + 5.952 + 2.232 + 1.500 = 48.372 kWh
  After PUE: 48.372 × 1.2 = 58.0464 kWh
  Stated total: 58.046 kWh (summary says 58.05 kWh)             | PASS
  [58.0464 rounds to 58.046 at 3 d.p. and 58.05 at 2 d.p.]

Check 4 (embodied sum):
  23,356.16 + 23,356.16 + 29,726.03 + 14,863.01 + 8,493.15
  = 99,794.51 vs stated 99,794.52                               | PASS
  [0.01 gCO2eq difference — rounding artifact from component-
   level truncation. Precise sum is 99,794.5205...]

Check 5 (dates logical):
  start = 2026-01-01, end = 2026-01-31
  start < end: YES
  end ≤ today (2026-02-10): YES                                 | PASS

Check 6 (PUE range):
  PUE = 1.2; 1.0 ≤ 1.2 ≤ 3.0                                   | PASS

Check 7 (CI range):
  I = 370 gCO2eq/kWh; 0 < 370 < 2000                           | PASS

Check 8 (regional weights):
  Single region (us-east-1) — no weighting required              | N/A

Check 9 (units consistent):
  Energy stated in kWh throughout                                  YES
  Carbon stated in gCO2eq throughout                               YES
  Intensity stated in gCO2eq/kWh                                   YES
  SCI includes functional unit ("per 1,000 API requests")          YES
                                                                 | PASS

Gate 2 Result:    PASS (all 8 applicable checks pass; check 8 N/A)


GATE 3: DISCLOSURE SUFFICIENCY

A. Boundary clarity:              5
   Six included components individually named with instance types, specs,
   and specific justifications ("dedicated instance under our operational
   control"). Four excluded components each have concrete, system-specific
   rationales (e.g., CDN "handles only documentation traffic, not API
   requests; contributes <0.5% of total infrastructure cost"). Boundary
   is comprehensive and unambiguous — a reader can reconstruct the full
   infrastructure diagram.

B. Functional unit justification: 4
   Unit clearly named (1,000 API requests) with a rationale connecting it
   to value delivery ("core unit of value our service delivers") and
   scaling behaviour ("scales linearly with customer usage"). Counting
   method described with cross-validation (FastAPI access logs validated
   against ALB CloudWatch, agreed within 0.3%). Strong disclosure. Scored
   4 rather than 5 because no discussion of whether different request
   types (queries vs. updates) have materially different resource costs,
   which could affect the SCI's representativeness.

C. Energy methodology:            5
   Each of the six components has: average power draw, hours, pre-PUE and
   post-PUE energy, calculation method (e.g., "TDP 85W × 2/48 vCPU share
   × ~35% avg utilization"), and specific data source (e.g., "AWS
   CloudWatch CPU metrics, 5-min intervals"). Network component uses a
   different model (coefficient × GB) and explains why. The methodology
   paragraph traces the full chain from raw CloudWatch data through TDP
   scaling to final energy. A practitioner could reproduce these
   calculations.

D. Carbon intensity sourcing:     4
   Location stated (AWS us-east-1, Northern Virginia). Approach stated
   (location-based). Data source identified with specificity: "EPA eGRID
   2023, SRVC subregion (SERC Virginia/Carolina)" with publication year
   (February 2025). Scored 4 rather than 5 because the submission uses an
   annual average rather than marginal or time-of-use intensity and does
   not quantify the sensitivity of SCI to CI variation — though this is
   acknowledged as a limitation in Part 8.

E. Embodied emissions methodology: 5
   Full allocation formula presented and explained (M = TE × (TiR / EL) ×
   (RR / ToR)) with reference to ISO/IEC 21031:2024. Each of the five
   hardware components lists total embodied emissions, expected lifespan,
   time reserved, resource share (100% for all — dedicated instances),
   calculated allocated M, and data source. The time-share factor is
   explicitly computed (744 / 35,040 = 0.02123). Component-level
   allocated values sum correctly to the stated total. Fully reproducible.

F. Assumptions and limitations:   5
   Six specific assumptions, each with a technical justification and an
   impact assessment (e.g., "a ±5W change shifts E by ~7.4 kWh and SCI
   by ~0.22"). Four specific limitations with severity ratings and
   mitigations. Five data sources documented in a structured table with
   type, description, and URL. This goes well beyond the pass bar —
   includes sensitivity analysis for key parameters.

Total Score:       28/30
Gate 3 Result:     APPROVE


OVERALL RECOMMENDATION:  APPROVE

If REVISION REQUESTED, specific feedback for applicant:
N/A — no revisions required.

If REJECT, rationale:
N/A — submission approved.

NOTES / PRECEDENT:
- Strong exemplar submission. The energy component table with both pre-PUE
  and post-PUE columns, and the explicit sensitivity analysis in the
  assumptions section, go substantially beyond the minimum disclosure
  requirements.
- Minor rounding note: the stated O (21,477.17) does not exactly match
  E × I using the rounded E value (58.046 × 370 = 21,477.02). This is
  because the applicant computed O from the unrounded E (58.0464 kWh).
  The discrepancy is 0.0007% — well within the ±1% tolerance. Noted for
  precedent: when applicants use unrounded intermediate values, small
  display-level discrepancies are expected and acceptable.
- The applicant provided an Impact Framework manifest file that
  independently computes the same SCI value (4.8509, rounding to 4.85).
  While not required, this is a useful supporting artefact that
  strengthens confidence in the calculation's reproducibility. The
  Applicant Guide already lists IF manifests as encouraged optional
  material.
- This submission is ready for publication as-is (per the streamlined
  flow: contact email redacted, certificate metadata header prepended,
  no further editing required).
```
