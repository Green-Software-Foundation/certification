# Review Record: DWaste — DWaste Platform

```
REVIEW RECORD
=============
Submission ID:    [GSF-SUB-2026-NNNN: confirm from tracking sheet]
Reviewer:         Kirsty
Review Date:      2026-10-29 (final review; submission signed 2026-10-26)
Time Spent:       [TO COMPLETE]

CHECKLIST (Y = present & adequate, N = missing, I = insufficient)

  1.  Identity and scope:                                        Y
      Org, contact, and software clearly identified (DWaste,
      DWaste Platform v1.4.0, URL given). Included component:
      Edge Inference Runtime (quantized YOLOv8n-CBAM). Six
      exclusions, each with a system-specific rationale:
      Cloud Analytics Backend, Model Training Phase, Network
      Transmission, Actuator Control Signals, On-Device Vision
      Pipeline / Mobile & Audit App Runtimes (stated boundary
      decision; host-platform functions on separate hardware
      paths), and Local Storage (quantitative rationale: ~0.005 J,
      under 0.3% of inference energy). Shared infrastructure
      addressed: iPhone 13 is a dedicated device, no shared
      allocation required.
  2.  Score and period:                                          Y
      0.000402 gCO2eq per waste-sorting inference, labelled as a
      single-inference benchmark on iPhone 13 (iOS 26.5.2).
      Start and end dates 2026-10-22.
  3.  Functional unit (R):                                       Y
      1 waste-sorting inference (one forward pass). Rationale
      ties the unit to value delivered. Counting method named
      (OSSignposter-isolated forward pass). Total stated (1).
  4.  Energy and carbon intensity (E, I):                        Y
      Total energy 5.15 x 10^-7 kWh; PUE stated as N/A with
      reason. Single in-boundary component with value and source
      (442.90 ms via OSSignposter; Power Profiler 33.7 %/hr at 93%
      brightness, 12.41 Wh battery = 4.182 W). Carbon intensity
      418 gCO2eq/kWh, US-PJM (test location Baltimore, MD),
      location-based, Electricity Maps historical daily data, 2026.
  5.  Embodied emissions (M):                                    Y
      M = 0.000187 gCO2eq. Reference device iPhone 13 128 GB;
      M_device 64 kgCO2eq from Apple's Product Environmental
      Report (Sept 2021); 83% embodied share (Use phase excluded
      to avoid double-counting E); SCI time-share allocation over
      a 4-year life. Formula and working shown.
  6.  Methodology and transparency:                              Y
      Hybrid approach stated. Power trace (~51 s, process 3003)
      and inference trace (442.90 ms, process 2801) are described
      as separate; power treated as an upper bound. Three
      specific assumptions/limitations with justifications. SCI
      formula shown with actual numbers.
  7.  Attestation:                                               Y
      All 10 points present, signed and dated 2026-10-26.

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

  Round 2 (resubmission 2026-10-07) — item 1 still I:
  - Actuator Control Signals was in neither the included nor
    excluded list; the vision pipeline / app runtime exclusion
    rested on "not measured" and conflicted with Section 5.
  Applicant revised Sections 3 and 5; all items then Y.

  SWG feedback (after round 2). SWG members raised four points
  before certificate issue: (1) include M, using a supported
  mobile/edge device and manufacturer lifecycle data; (2) use an
  actual deployed-class device rather than the Kaggle Tesla T4 as
  the benchmark baseline; (3) label the score clearly as a
  single-inference benchmark result, not average deployment
  performance (repeated measurements recommended, not required);
  (4) address local storage in the boundary. These were sent to
  the applicant, who re-measured on an iPhone 13 and included M.

  Round 3 (resubmission with iPhone 13 baseline) — items 2, 4, 6
  marked I:
  - Item 2: measurement dates (2026-10-26) were after the
    attestation date.
  - Item 4: carbon intensity still the Iowa value (412) from the
    earlier Kaggle run; test location not stated.
  - Item 6: wrong model name in Section 7 (RT-DETR); power
    described as measured "over the same interval" as inference
    although it was a whole-session average from a separate
    trace; interval name inconsistent; approach labelled "Direct
    measurement" though E is derived from battery-percent drain.
  Applicant corrected all points (dates 2026-10-22; 418
  gCO2eq/kWh US-PJM, Baltimore; hybrid approach; separate-trace
  wording) and re-signed on 2026-10-26; all items then Y.

If REJECT — rationale:
N/A — submission approved.

NOTES / PRECEDENT:
- Certificate notes (SWG request): the score is a
  single-inference benchmark result on iPhone 13 (iOS 26.5.2),
  not typical or average deployment performance. E is derived
  from whole-session battery-drain power and is an upper bound
  for isolated inference energy. M uses Apple's published
  lifecycle data allocated by time-share.
- Single-day, single-inference benchmark (R = 1). Accepted under
  the existing precedent (GSF-SUB-2026-0002, Offlyn Clipper):
  the completeness bar is met because the limited scope is
  clearly disclosed. The SWG notes repeated measurements would
  strengthen the baseline; recommended, not required.
- Embodied emissions: the first version set M = 0 on the basis
  that end-user devices are outside the applicant's operational
  control. That passes the checklist as written (specific
  justification given), but SWG members advised that M should be
  included for software running on end-user hardware. Suggest a
  precedent-log entry so future submissions are handled
  consistently. Flagged for team discussion, not a settled
  requirement.
- Boundary covers the edge inference runtime only; vision
  pipeline, app runtimes, actuator signals and local storage
  are excluded with stated rationales. Reviewers may want a
  precedent-log entry on accepting a deliberately narrow
  boundary described as host-platform functions.
- Minor, non-blocking: Section 3 (Local Storage) still says
  "measured 1.85 J inference energy" where the rest of the
  disclosure says E is derived. The resource share in the M
  allocation is implicit (whole device).
- Calculation accuracy not reviewed (out of scope). Check:
  5.145 x 10^-7 kWh x 418 gCO2eq/kWh = 0.000215 gCO2eq; plus M
  0.000187 = 0.000402, consistent with the stated score.
- SWG objection period: [CONFIRM: re-run or direct sign-off, and
  dates]. Sign-off by SWG Chair / Executive Director required
  before certificate issue.
- Applicant opted in to logo display, blog/case study, and
  downstream analysis.
- Ready for publication as-is once certificate metadata is
  added and contact email redacted (done in disclosure.md).
```
