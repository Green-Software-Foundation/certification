# Example Review Record: GreenTech Solutions — Inventory Management API

> **This is an example review record.** It demonstrates what a completed review
> record looks like when a reviewer processes a submission through the 27-item
> checklist and recommends approval.

---

```
REVIEW RECORD
=============
Submission ID:    GSF-SUB-2026-0001
Reviewer:         Marcus Rivera
Review Date:      2026-02-10
Time Spent:       0.75 hours

CHECKLIST (Y = present & adequate, N = missing, I = insufficient, N/A = not applicable)

Applicant and software:
  1.  Organization, contact name, contact email:                    Y
  2.  Software name, version, description:                          Y
  3.  SCI score with units and functional unit:                     Y
  4.  Measurement start and end dates:                              Y

Software boundary:
  5.  Included components with reasons:                             Y
      Six components individually named with instance types, specs,
      and specific justifications ("dedicated instance under our
      operational control").
  6.  Excluded components with system-specific rationales:          Y
      Four excluded components each have concrete, system-specific
      rationales (e.g., CDN "handles only documentation traffic, not
      API requests; contributes <0.5% of total infrastructure cost").
  7.  (If shared) Allocation method and share:                      N/A

Functional unit:
  8.  Functional unit named:                                        Y
  9.  Rationale (connects to scaling/value):                        Y
      Unit clearly named (1,000 API requests) with rationale
      connecting to value delivery and scaling behaviour. Counting
      method described with cross-validation (FastAPI access logs
      validated against ALB CloudWatch, agreed within 0.3%).
  10. Counting/measurement method:                                  Y
  11. Total units in period:                                        Y

Energy:
  12. Total energy (kWh):                                           Y
  13. Per-component: value + method + data source each:             Y
      Each of six components has: average power draw, hours, pre-PUE
      and post-PUE energy, calculation method (e.g., "TDP 85W × 2/48
      vCPU share × ~35% avg utilization"), and specific data source
      (e.g., "AWS CloudWatch CPU metrics, 5-min intervals"). Network
      component uses a different model (coefficient × GB) and explains
      why. A practitioner could reproduce these calculations.
  14. PUE stated or N/A:                                            Y

Carbon intensity:
  15. CI value (per-region if multi-region):                        Y
  16. Location(s):                                                  Y
      AWS us-east-1, Northern Virginia.
  17. Approach (location/market-based):                             Y
      Location-based.
  18. Data source with year:                                        Y
      "EPA eGRID 2023, SRVC subregion (SERC Virginia/Carolina)",
      publication year February 2025.
  19. (If multi-region) Per-region weights:                         N/A

Embodied emissions:
  20. Total M or justification if zero:                             Y
  21. (If M>0) Per-component: total + allocation + value + source:  Y
      Each of five hardware components lists total embodied emissions,
      expected lifespan, time reserved, resource share (100% —
      dedicated instances), calculated allocated M, and data source.
      Full allocation formula presented (M = TE × (TiR / EL) × (RR /
      ToR)). Component-level values sum correctly to the stated total.
  22. (If M>0) Allocation method with parameters:                   Y

Methodology, assumptions, limitations:
  23. Overall approach:                                             Y
  24. Specific assumption(s) with justification:                    Y
      Six specific assumptions, each with a technical justification
      and impact assessment (e.g., "a ±5W change shifts E by ~7.4 kWh
      and SCI by ~0.22").
  25. Specific limitation(s):                                       Y
      Four specific limitations with severity ratings and mitigations.

Calculation and attestation:
  26. SCI formula with numbers:                                     Y
  27. Signed attestation (10 points):                               Y

Result:           APPROVE

If REVISION REQUESTED — items marked N or I with notes:
N/A — no revisions required.

If REJECT — rationale:
N/A — submission approved.

NOTES / PRECEDENT:
- Strong exemplar submission. The energy component table with both pre-PUE
  and post-PUE columns, and the explicit sensitivity analysis in the
  assumptions section, go substantially beyond the minimum disclosure
  requirements.
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
