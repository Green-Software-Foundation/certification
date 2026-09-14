# Review Record: Offlyn.ai — Offlyn Clipper

```
REVIEW RECORD
=============
Submission ID:    GSF-SUB-2026-0002
Reviewer:         Kirsty Bryant
Review Date:      2026-09-14
Time Spent:       -

CHECKLIST (Y = present & adequate, N = missing, I = insufficient)

  1.  Identity and scope:                                        Y
      Org, contact, and software clearly identified (Offlyn.ai,
      Offlyn Clipper v1.0 beta-2026-07). Five included components
      individually named (on-device ASR, LLM, embeddings, audio
      capture, local storage). Four excluded components each
      have a system-specific rationale (model training occurred
      pre-deployment; model download amortized and negligible;
      baseline device power common across architectures; cloud
      fallback unused in default config). Shared infrastructure
      explicitly addressed: "No included component runs on shared
      multi-tenant infrastructure."
      Note: initial submission (v0.1.0) had an ambiguous system
      name (disclosure title referenced a different benchmark
      name than the "software system" field) — resolved in
      revision to a single named system, Offlyn Clipper.
  2.  Score and period:                                          Y
      4.58 gCO2eq per meeting workflow. Measured 2026-07-22
      (single-day benchmark), clearly labelled as such rather
      than presented as production-representative usage.
  3.  Functional unit (R):                                       Y
      Unit clearly named (one 60-minute meeting workflow) with
      rationale tied to value delivered. Counting method
      described. Secondary units provided for cross-comparison.
  4.  Energy and carbon intensity (E, I):                        Y
      Total 0.00101 kWh, per-phase breakdown (transcription,
      summarization) with method (macOS powermetrics) and
      measured baseline/active values. PUE correctly marked N/A
      for local device. Carbon intensity 350 gCO2eq/kWh, IEA
      World Energy Outlook 2023, source named with year.
  5.  Embodied emissions (M):                                    Y
      Initial submission (v1.0.0) set M = 0, justified only as
      "reliable allocation data unavailable" for local devices,
      cloud hardware, networking, and storage. Objection raised
      during the 7-day SWG window (J. Darian): absence of a
      component-specific manufacturer figure (Apple has not
      published a standalone M4 embodied-carbon figure) does not
      establish the value is zero — the device demonstrably has
      non-zero embodied carbon. WG confirmed this as a valid
      objection and recommended a data hierarchy for resolution:
      first-party OEM data > third-party PCF/LCA databases >
      disclosed proxy/model.
      Resolved in v1.1.0 using first-party OEM data (Apple
      Product Environmental Report, MacBook Pro 14" M4, Oct
      2024): M = TE x (TiR / EL) x RS, where TE = 146,520 gCO2e
      (74% production-phase share of 198 kg CO2e device
      lifecycle), TiR = 1.0125 h, EL = 35,040 h (4-year
      lifespan), RS = 1.0 (conservative — full device reserved
      during workflow). M = 4.23 gCO2eq. Sensitivity to RS
      disclosed transparently (RS ~0.10 -> M = 0.42g), with
      stated rationale for choosing the conservative value.
  6.  Methodology and transparency:                              Y
      Measurement approach clearly stated. Five specific
      assumptions/limitations with justifications (single-device
      measurement, global average grid intensity, summarization
      duration, PER production-phase-only scope, default
      configuration only). Full calculation shown with actual
      numbers, including the revised M term.
  7.  Attestation:                                                Y
      All 10 points present, verbatim from the GSF template,
      signed and dated (Joel Nishant Reddy, Co-founder,
      2026-07-22).

Result:           APPROVE

If REVISION REQUESTED — items marked N or I with notes:
N/A at final review. Two rounds of revision preceded approval:
  - Round 1 (v0.1.0 -> v1.0.0): Items 1, 2, 4, and 7 revised —
    system naming clarified, single measured SCI score and
    period provided, carbon-intensity source named with year,
    verbatim attestation substituted for a custom statement.
  - Round 2 (v1.0.0 -> v1.1.0): Item 5 revised following a
    formal SWG objection — M=0 replaced with a sourced,
    calculated non-zero value.

If REJECT — rationale:
N/A — submission approved.

NOTES / PRECEDENT:
- First external submission to the SCI Self-Certification
  Program, and the first submission to exercise the 7-day SWG
  objection period.
- Precedent: "component-level manufacturer data unavailable" is
  not, by itself, an adequate justification for M = 0. Applicants
  must use first-party OEM device-level data, third-party PCF/LCA
  databases, or a disclosed proxy/allocation model. See
  precedent-log.md.
- Precedent: a single controlled benchmark (R = 1), clearly
  labelled as such and not represented as production-typical
  usage, satisfies the "Score and period" completeness bar for
  consumer/single-device software. This does not extend to
  enterprise or provider-side submissions, which are expected to
  report a measurement period reflecting real operating usage.
- This submission is ready for publication as-is.
```
