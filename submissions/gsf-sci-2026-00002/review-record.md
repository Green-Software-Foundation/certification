# Review Record: DWaste — DWaste Platform

```
REVIEW RECORD
=============
Submission ID:    [GSF-SUB-2026-00002]
Reviewer:         Kirsty
Review Date:      2026-10-08 (final review of resubmission dated 2026-10-07)
Time Spent:       [TO COMPLETE]

CHECKLIST (Y = present & adequate, N = missing, I = insufficient)

  1.  Identity and scope:                                        Y
      Org, contact, and software clearly identified (DWaste,
      DWaste Platform v1.4.0, URL given). Included component:
      Edge Inference Runtime (quantized YOLOv8n-CBAM). Six
      exclusions, each with a system-specific rationale,
      including Actuator Control Signals (GPIO/PWM microcontroller
      signals on a separate hardware path, negligible energy) and
      the On-Device Vision Pipeline / Mobile & Audit App Runtimes
      (stated boundary decision; host-platform functions on
      separate hardware paths). Shared infrastructure addressed:
      Kaggle-hosted Tesla T4 identified as shared, with the
      benchmark GPU time slice isolated via execution profilers.
  2.  Score and period:                                          Y
      0.003 gCO2eq per waste-sorting inference. Start and end
      dates both 2025-10-23 (single-day benchmark).
  3.  Functional unit (R):                                       Y
      1 waste-sorting inference (one forward pass). Rationale
      ties the unit to value delivered. Counting method named
      (logged forward-pass executions via profilers and benchmark
      telemetry). Total stated (1).
  4.  Energy and carbon intensity (E, I):                        Y
      Total energy 7.3 x 10^-6 kWh; PUE stated as N/A with
      reason. Single in-boundary component with value and source
      (0.11 s inference time and power logs via CodeCarbon
      v3.0.7). Section 5 note now matches the Section 3 boundary.
      Carbon intensity 412 gCO2eq/kWh, US-IA, location-based,
      CodeCarbon v3.0.7 grid database (EPA eGRID / Ember 2023).
  5.  Embodied emissions (M):                                    Y
      M = 0 gCO2eq with a specific justification: end-user
      devices are not under DWaste's operational control and
      their lifecycle emissions are not attributable to the
      software.
  6.  Methodology and transparency:                              Y
      Hybrid approach stated (pynvml GPU telemetry plus
      CodeCarbon TDP-based CPU modelling). Benchmark hardware
      stated. Three specific assumptions/limitations with
      justifications. SCI formula shown with actual numbers.
  7.  Attestation:                                               Y
      All 10 points present, signed and dated 2026-10-07.

Result:           APPROVE (recommend)

If REVISION REQUESTED — items marked N or I with notes:

  Round 1 (initial submission signed 2026-09-27) — items 1, 2,
  4, 6 marked N/I:
  - Item 1: shared-infrastructure statement missing; embodied
    hardware exclusion cited "paper boundary constraints"
    rather than a system-specific rationale.
  - Item 2: measurement start/end dates missing.
  - Item 4: energy and source given for the inference runtime
    only; other included components had no value or source.
  - Item 6: "Show your calculation" field blank; approach
    labelled "Measurement" but mixed TDP modelling and
    estimates; benchmark hardware not stated.
  Applicant resubmitted and also corrected the CodeCarbon
  version (v3.0.4 to v3.0.7).

  Round 2 (resubmission) — item 1 still I:
  - Actuator Control Signals was in neither the included nor
    excluded list.
  - Exclusion rationale for the vision pipeline and app runtimes
    rested on "not measured" and conflicted with Section 5.
  - Optional: clarify how the shared Kaggle environment was
    treated.
  Applicant revised Sections 3 and 5 accordingly (resubmitted
  2026-10-07); all points resolved.

If REJECT — rationale:
N/A — submission approved.

NOTES / PRECEDENT:
- Single-day, single-inference benchmark (R = 1) on Kaggle
  Tesla T4, not deployed edge hardware. Accepted under the
  existing precedent (GSF-SUB-2026-0002, Offlyn Clipper):
  completeness bar is met because the limited scope is clearly
  disclosed and the T4 value is labelled an upper bound.
- Boundary covers the edge inference runtime only. The vision
  pipeline, app runtimes and actuator signals are excluded with
  stated rationales. Reviewers may want a precedent-log entry on
  accepting a deliberately narrow boundary where excluded
  components are described as host-platform functions. Flagged
  for team discussion, not a settled requirement.
- Minor, non-blocking: Section 7 still describes the deployed
  edge hardware as "equivalent low-power hardware" while Section
  5 calls the T4 an upper bound. Wording is slightly
  inconsistent; not a completeness issue.
- Calculation accuracy not reviewed (out of scope). Check: 7.3 x
  10^-6 kWh x 412 gCO2eq/kWh = 0.0030 gCO2eq, consistent with
  the stated score.
- SWG objection period: [DATES: 7 calendar days from
  notification]. Sign-off by SWG Chair / Executive Director
  required before certificate issue.
- Applicant opted in to logo display, blog/case study, and
  downstream analysis.
- Ready for publication as-is once certificate metadata is
  added and contact email redacted (done in disclosure.md).
```
