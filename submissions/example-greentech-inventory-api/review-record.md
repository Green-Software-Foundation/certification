# Example Review Record: GreenTech Solutions — Inventory Management API

> **This is an example review record.** It demonstrates what a completed review
> record looks like when a reviewer processes a submission through the 13-item
> checklist and recommends approval.

---

```
REVIEW RECORD
=============
Submission ID:    GSF-SUB-2026-0001
Reviewer:         Marcus Rivera
Review Date:      2026-02-10
Time Spent:       0.75 hours

CHECKLIST (Y = present & adequate, N = missing, I = insufficient)

  1.  Applicant and software details:                              Y
      (org, contact, software name/version/description)
  2.  SCI score and measurement period:                            Y
      (score with units incl. functional unit; start/end dates)
  3.  Software boundary:                                           Y
      Six included components individually named with instance
      types, specs, and specific justifications. Four excluded
      components each have concrete, system-specific rationales
      (e.g., CDN "handles only documentation traffic, not API
      requests; contributes <0.5% of total infrastructure cost").
      No shared infrastructure.
  4.  Functional unit (R):                                         Y
      Unit clearly named (1,000 API requests) with rationale
      connecting to value delivery and scaling behaviour. Counting
      method described with cross-validation (FastAPI access logs
      validated against ALB CloudWatch, agreed within 0.3%).
      Total units stated.
  5.  Energy (E) — total and PUE:                                  Y
      Total energy stated in kWh. PUE of 1.2 from AWS data.
  6.  Energy (E) — per-component breakdown:                        Y
      Each of six components has: average power draw, hours, pre-PUE
      and post-PUE energy, calculation method (e.g., "TDP 85W × 2/48
      vCPU share × ~35% avg utilization"), and specific data source
      (e.g., "AWS CloudWatch CPU metrics, 5-min intervals"). Network
      component uses a different model (coefficient × GB) and explains
      why. A practitioner could reproduce these calculations.
  7.  Carbon intensity (I):                                        Y
      AWS us-east-1, Northern Virginia. Location-based approach.
      "EPA eGRID 2023, SRVC subregion (SERC Virginia/Carolina)",
      publication year February 2025. Single region, no weighting
      needed.
  8.  Embodied emissions (M):                                      Y
      Each of five hardware components lists total embodied emissions,
      expected lifespan, time reserved, resource share (100% —
      dedicated instances), calculated allocated M, and data source.
      Full allocation formula presented (M = TE × (TiR / EL) × (RR /
      ToR)). Component-level values sum correctly to the stated total.
  9.  Methodology approach:                                        Y
      Hybrid approach clearly stated.
  10. Assumptions:                                                  Y
      Six specific assumptions, each with a technical justification
      and impact assessment (e.g., "a ±5W change shifts E by ~7.4 kWh
      and SCI by ~0.22").
  11. Limitations:                                                  Y
      Four specific limitations with severity ratings and mitigations.
  12. Calculation shown:                                            Y
      Full SCI formula with actual numbers.
  13. Signed attestation:                                           Y
      All 10 points present and signed.

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
