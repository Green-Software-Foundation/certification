# Example Review Record: NeuralCast Inc — NeuralCast Inference API

> **This is an example review record.** It demonstrates what a completed review
> record looks like for an AI inference workload, processed through the 7-item
> checklist and recommended for approval.

---

```
REVIEW RECORD
=============
Submission ID:    GSF-SUB-2026-0002
Reviewer:         Priya Anand
Review Date:      2026-04-02
Time Spent:       0.75 hours

CHECKLIST (Y = present & adequate, N = missing, I = insufficient)

  1.  Identity and scope:                                        Y
      Org, contact, and software clearly identified (NeuralCast
      Inc, NeuralCast Inference API v2.4.0). Eleven included
      components individually named: 8 GPU compute nodes, 2 API
      gateway nodes, 1 Memorystore Redis instance — each with
      instance types and specs. Six excluded components each have
      concrete, system-specific rationales (e.g., model training
      infrastructure "distinct workload measured separately, not
      exercised by this service in production"; network egress
      "<0.05% of total energy at GSF coefficient"). Shared
      infrastructure explicitly addressed.
  2.  Score and period:                                          Y
      47.54 gCO2eq per 1,000,000 tokens. February 2026 measurement
      period with start/end dates.
  3.  Functional unit (R):                                       Y
      Unit clearly named (1,000,000 tokens combined input + output)
      with rationale connecting to billable value and customer cost
      reasoning. Counting method described with source identified
      (vLLM Prometheus metrics — prompt_tokens and completion_tokens
      counters) and cross-validated against per-customer billing
      telemetry, agreement within 0.1%. Total units stated.
  4.  Energy and carbon intensity (E, I):                        Y
      Total energy 1,977.70 kWh with PUE 1.09. Eleven components
      each list average power draw, hours, pre-PUE and post-PUE
      energy, calculation method (e.g., "A100 TDP 400W × 70% util
      + 50W host overhead"), and specific data source (e.g.,
      "NVIDIA A100 datasheet; vLLM metrics for utilisation").
      Carbon intensity 420 gCO2eq/kWh, GCP us-central1,
      location-based, EPA eGRID 2023 MROE subregion (published
      February 2025). Single region.
  5.  Embodied emissions (M):                                    Y
      Each of eleven hardware components lists total embodied
      emissions, expected lifespan, time reserved, resource share,
      calculated allocated M, and data source. Full allocation
      formula presented. Differential lifespan (3 years for GPU
      hardware, 4 years for general-purpose servers) is justified
      with reference to NVIDIA refresh guidance and Cloud Carbon
      Footprint defaults — a thoughtful choice for AI workloads.
      Component-level values sum to stated total.
  6.  Methodology and transparency:                              Y
      Calculation approach clearly stated and justified (no direct
      hardware metering available). Eleven specific assumptions and
      limitations with technical justifications, presented in a
      single combined table. Full SCI formula shown with actual
      numbers, including per-component subtotals.
  7.  Attestation:                                               Y
      All 10 points present and signed (Marcus Liu, CTO).

Result:           APPROVE

If REVISION REQUESTED — items marked N or I with notes:
N/A — no revisions required.

If REJECT — rationale:
N/A — submission approved.

NOTES / PRECEDENT:
- High-quality submission for a GPU-accelerated workload. The
  decision to use a 3-year lifespan for GPU hardware (vs the
  typical 4-year cloud server default) is a notable methodology
  choice; the rationale references NVIDIA refresh guidance and
  Cloud Carbon Footprint defaults. Recording this here as
  precedent for future GPU-heavy submissions.
- The applicant provided an Impact Framework manifest that
  independently computes 47.5414 gCO2eq per 1M tokens, which
  rounds to the disclosed 47.54.
- Embodied emissions dominate the per-token footprint less than
  one might expect for GPU workloads (M is ~25% of total here),
  due to the high token throughput diluting per-token allocation.
  This is a useful data point for the community on the
  operational/embodied balance of well-utilised inference fleets.
- This submission is ready for publication as-is.
```
