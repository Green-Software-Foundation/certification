# Example Review Record: GreenTech Solutions — Inventory Management API

> **This is an example review record.** It demonstrates what a completed review
> record looks like when a reviewer processes a submission through the 7-item
> checklist and recommends approval.

---

```
REVIEW RECORD
=============
Submission ID:    GSF-SUB-2026-0001
Reviewer:         Marcus Rivera
Review Date:      2026-02-10
Time Spent:       0.5 hours

CHECKLIST (Y = present & adequate, N = missing, I = insufficient)

  1.  Identity and scope:                                        Y
      Org, contact, and software clearly identified (GreenTech
      Solutions, Inventory Management API v3.2.1). Six included
      components individually named with instance types, specs,
      and specific justifications. Four excluded components each
      have concrete, system-specific rationales (e.g., CDN
      "handles only documentation traffic, not API requests;
      contributes <0.5% of total infrastructure cost"). Shared
      infrastructure explicitly addressed: "No shared
      infrastructure. All included components are dedicated
      instances."
  2.  Score and period:                                          Y
      4.85 gCO2eq per 1,000 API requests. January 2026
      measurement period with start/end dates.
  3.  Functional unit (R):                                       Y
      Unit clearly named (1,000 API requests) with rationale
      connecting to value delivery and scaling behaviour. Counting
      method described with cross-validation (FastAPI access logs
      validated against ALB CloudWatch, agreed within 0.3%).
      Total units stated.
  4.  Energy and carbon intensity (E, I):                        Y
      Total energy 58.05 kWh with PUE 1.2. Each of six components
      has: average power draw, hours, pre-PUE and post-PUE energy,
      calculation method (e.g., "TDP 85W x 2/48 vCPU share x ~35%
      avg utilization"), and specific data source (e.g., "AWS
      CloudWatch CPU metrics, 5-min intervals"). Carbon intensity
      370 gCO2eq/kWh, AWS us-east-1, location-based, EPA eGRID
      2023 SRVC subregion (published February 2025). Single
      region, no weighting needed.
  5.  Embodied emissions (M):                                    Y
      Each of five hardware components lists total embodied
      emissions, expected lifespan, time reserved, resource share,
      calculated allocated M, and data source. Full allocation
      formula presented. Component-level values sum to stated total.
  6.  Methodology and transparency:                              Y
      Hybrid approach clearly stated. Ten specific assumptions and
      limitations with technical justifications and mitigations,
      presented in a single combined table. Full SCI formula shown
      with actual numbers.
  7.  Attestation:                                               Y
      All 10 points present and signed.

Result:           APPROVE

If REVISION REQUESTED — items marked N or I with notes:
N/A — no revisions required.

If REJECT — rationale:
N/A — submission approved.

NOTES / PRECEDENT:
- Strong exemplar submission. The energy component table with both pre-PUE
  and post-PUE columns goes substantially beyond the minimum disclosure
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
