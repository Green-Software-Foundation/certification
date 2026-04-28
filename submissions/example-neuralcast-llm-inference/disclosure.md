# SCI Self-Certification — Public Disclosure

> **This is an example public disclosure.** It shows what gets published to
> the `greensoftware-foundation/sci-certifications` GitHub repository after
> approval. It is the applicant's submission published as-is, with a
> certificate metadata header prepended and the contact email redacted.

| Field | Value |
|-------|-------|
| **Certificate ID** | GSF-SCI-2026-00002 |
| **Date Issued** | 2026-04-15 |
| **Valid Until** | 2027-04-15 |
| **Certificate URL** | [View certificate](https://badges.greensoftware.foundation/credentials/gsf-sci-2026-00002) |
| **Status** | Active |

---

## Section 1 — About You and Your Software

**Organization name:** NeuralCast Inc

**Contact name:** Dr. Marcus Liu

**Contact email:** *[redacted]*

**Software name:** NeuralCast Inference API

**Software version:** v2.4.0 (commit 7f3a8e1 deployed 2026-01-22)

**Software description:**
A managed REST API providing low-latency LLM inference for 7B–13B parameter open-weights models. Built with vLLM and NVIDIA Triton Inference Server, deployed on Google Kubernetes Engine in us-central1. The service handles request routing, batching, streaming token generation, and per-customer rate limiting. It serves approximately 23 billion tokens per month across 380 enterprise customer accounts running production workloads.

**Software URL:** https://docs.neuralcast.example/api

---

## Section 2 — Your SCI Score

**Measurement start date:** 2026-02-01

**Measurement end date:** 2026-02-28

**Your SCI score:** 47.54 gCO2eq per 1,000,000 tokens

---

## Section 3 — Software Boundary

### Included components

| Component | Description | Why included |
|-----------|-------------|--------------|
| GPU compute node 1 | A2-ultragpu-1g (1× NVIDIA A100 40GB, 12 vCPU, 85 GB RAM) | Core inference compute — dedicated instance under our operational control |
| GPU compute node 2 | A2-ultragpu-1g (1× NVIDIA A100 40GB) | Core inference compute — dedicated instance |
| GPU compute node 3 | A2-ultragpu-1g (1× NVIDIA A100 40GB) | Core inference compute — dedicated instance |
| GPU compute node 4 | A2-ultragpu-1g (1× NVIDIA A100 40GB) | Core inference compute — dedicated instance |
| GPU compute node 5 | A2-ultragpu-1g (1× NVIDIA A100 40GB) | Core inference compute — dedicated instance |
| GPU compute node 6 | A2-ultragpu-1g (1× NVIDIA A100 40GB) | Core inference compute — dedicated instance |
| GPU compute node 7 | A2-ultragpu-1g (1× NVIDIA A100 40GB) | Core inference compute — dedicated instance |
| GPU compute node 8 | A2-ultragpu-1g (1× NVIDIA A100 40GB) | Core inference compute — dedicated instance |
| API gateway 1 | e2-standard-4 (4 vCPU, 16 GB RAM) running FastAPI router | Request routing and authentication — dedicated instance |
| API gateway 2 | e2-standard-4 (4 vCPU, 16 GB RAM) running FastAPI router | Second router instance for redundancy — dedicated instance |
| Memorystore Redis | basic-1gb instance for request queue and rate-limiter state | Dedicated cache layer provisioned exclusively for this application |

### Excluded components

| Component | Description | Reason for exclusion |
|-----------|-------------|----------------------|
| Cloud Storage (model weights) | GCS bucket holding model checkpoint files | Read once at pod startup; idle cold storage during measurement; contributes <0.001% of energy |
| Network egress to clients | Token streaming responses to customer applications | ~230 GB/month total transfer; <0.05% of total energy at GSF coefficient (0.001 kWh/GB) |
| Cloud Logging and Monitoring | GCP managed logging and metric ingestion | Shared infrastructure across all NeuralCast services; contributes <0.5% of total resource consumption |
| GKE control plane | Managed Kubernetes control plane | Shared by GCP across many tenants; not under our operational control; GCP allocates internally |
| Customer applications | End-user applications calling the API | Beyond our operational control — clients run on customer infrastructure |
| Model training infrastructure | Separate offline training cluster | Distinct workload measured separately; not exercised by this service in production |

### Shared infrastructure

No shared infrastructure is included in the boundary. All listed compute nodes (GPU and CPU) and the Memorystore Redis instance are dedicated to this application. The GKE control plane and GCP-managed networking fabric are excluded as they are shared infrastructure outside our operational control.

---

## Section 4 — Functional Unit (R)

**What is your functional unit?**
1,000,000 tokens (combined input + output)

**Why did you choose this unit?**
Tokens are the natural billable unit for LLM inference and the primary axis along which our service delivers value. Token volume scales linearly with customer usage and is the unit our customers reason about for both cost and capacity planning. We normalise to 1 million tokens to produce a SCI value at a meaningful scale for ML practitioners reading the disclosure.

**How did you count or measure the total units?**
Token counts were extracted from the vLLM serving metrics emitted by every inference pod and aggregated in our Prometheus metrics pipeline. Each completed request emits `prompt_tokens` and `completion_tokens` counters. Cross-validated against per-customer billing telemetry, which agreed within 0.1%.

**Total units in measurement period:** 23,200,000,000 tokens (23.2 billion)

---

## Section 5 — Energy (E) and Carbon Intensity (I)

**Total energy consumed:** 1,977.70 kWh (1,814.40 kWh before PUE)

**PUE applied:** 1.09 (Google Cloud published value for us-central1, 2024 fleet-wide average)

**How was energy measured or estimated?**
Energy was estimated using a calculation approach. For each GPU node, we used the published TDP for NVIDIA A100 40GB (400W) and Google's host overhead estimate (~50W per node), scaled by the average GPU utilisation observed in our serving telemetry (~70% across the measurement period). The product of resulting average power draw, hours, and PUE gives total energy. CPU-only nodes use TDP-based estimates from Google Cloud's published power model. Memorystore Redis power was taken from Cloud Carbon Footprint estimates for the basic-1gb instance class. We did not have direct hardware power metering — see Assumptions and Limitations.

**Energy breakdown by component:**

| Component | Avg Power (kW) | Hours | Energy before PUE (kWh) | Energy after PUE (kWh) | How calculated | Data source |
|-----------|---------------|-------|------------------------|----------------------|----------------|-------------|
| GPU node 1 (A100 40GB) | 0.330 | 672 | 221.76 | 241.72 | A100 TDP 400W × 70% util + 50W host overhead | NVIDIA A100 datasheet; vLLM metrics for utilisation |
| GPU node 2 (A100 40GB) | 0.330 | 672 | 221.76 | 241.72 | Identical model and utilisation profile to node 1 (within 1.5%) | Same as node 1 |
| GPU node 3 (A100 40GB) | 0.330 | 672 | 221.76 | 241.72 | Identical | Same as node 1 |
| GPU node 4 (A100 40GB) | 0.330 | 672 | 221.76 | 241.72 | Identical | Same as node 1 |
| GPU node 5 (A100 40GB) | 0.330 | 672 | 221.76 | 241.72 | Identical | Same as node 1 |
| GPU node 6 (A100 40GB) | 0.330 | 672 | 221.76 | 241.72 | Identical | Same as node 1 |
| GPU node 7 (A100 40GB) | 0.330 | 672 | 221.76 | 241.72 | Identical | Same as node 1 |
| GPU node 8 (A100 40GB) | 0.330 | 672 | 221.76 | 241.72 | Identical | Same as node 1 |
| API gateway 1 (e2-standard-4) | 0.025 | 672 | 16.80 | 18.31 | TDP scaled by ~25% avg CPU utilisation | GCP Compute power model; CloudWatch CPU metrics |
| API gateway 2 (e2-standard-4) | 0.025 | 672 | 16.80 | 18.31 | Same as gateway 1 | Same as gateway 1 |
| Memorystore Redis | 0.010 | 672 | 6.72 | 7.32 | Cloud Carbon Footprint estimate for basic-1gb instance | Cloud Carbon Footprint methodology |
| **Total** | | | **1,814.40** | **1,977.70** | | |

### Carbon intensity

**Carbon intensity value:** 420 gCO2eq/kWh

**Location(s):** Google Cloud us-central1 (Council Bluffs, Iowa, USA)

**Approach:** Location-based

**Data source + year:** EPA eGRID 2023, MROE subregion (Midwest Reliability Organization East), published February 2025

---

## Section 6 — Embodied Emissions (M)

**Total embodied emissions allocated to this measurement:** 272,328.77 gCO2eq

**Allocation methodology:**
Embodied emissions were allocated using the standard time-share formula from ISO/IEC 21031:2024:

M = TE × (TiR / EL) × (RR / ToR)

Where:
- TE = Total embodied emissions over the full hardware lifecycle (Cloud Carbon Footprint database)
- TiR = Time reserved = 672 hours (28-day measurement period)
- EL = Expected lifespan = 26,280 hours for GPU nodes (3 years), 35,040 hours for non-GPU components (4 years)
- RR / ToR = Resource share = 1.0 (all components are dedicated instances)

The shorter GPU lifespan (3 years) reflects the typical refresh cycle for ML accelerator hardware in production inference environments, consistent with NVIDIA published guidance and Cloud Carbon Footprint defaults.

**Hardware component breakdown:**

| Hardware component | Type | Total embodied TE (gCO2eq) | Expected lifespan | Time reserved | Resource share | Allocated M (gCO2eq) | Data source |
|--------------------|------|---------------------------|-------------------|---------------|----------------|---------------------|-------------|
| GPU node 1 | A2-ultragpu-1g (A100 40GB + host) | 1,200,000 | 3 years (26,280 h) | 672 h | 100% | 30,684.93 | Cloud Carbon Footprint — A100 + host server |
| GPU node 2 | A2-ultragpu-1g | 1,200,000 | 3 years | 672 h | 100% | 30,684.93 | Same as node 1 |
| GPU node 3 | A2-ultragpu-1g | 1,200,000 | 3 years | 672 h | 100% | 30,684.93 | Same as node 1 |
| GPU node 4 | A2-ultragpu-1g | 1,200,000 | 3 years | 672 h | 100% | 30,684.93 | Same as node 1 |
| GPU node 5 | A2-ultragpu-1g | 1,200,000 | 3 years | 672 h | 100% | 30,684.93 | Same as node 1 |
| GPU node 6 | A2-ultragpu-1g | 1,200,000 | 3 years | 672 h | 100% | 30,684.93 | Same as node 1 |
| GPU node 7 | A2-ultragpu-1g | 1,200,000 | 3 years | 672 h | 100% | 30,684.93 | Same as node 1 |
| GPU node 8 | A2-ultragpu-1g | 1,200,000 | 3 years | 672 h | 100% | 30,684.93 | Same as node 1 |
| API gateway 1 | e2-standard-4 | 600,000 | 4 years (35,040 h) | 672 h | 100% | 11,506.85 | Cloud Carbon Footprint — e2 server |
| API gateway 2 | e2-standard-4 | 600,000 | 4 years | 672 h | 100% | 11,506.85 | Same as gateway 1 |
| Memorystore Redis | basic-1gb | 200,000 | 4 years | 672 h | 100% | 3,835.62 | Cloud Carbon Footprint — managed Redis allocation |
| **Total** | | **8,600,000** | | | | **272,328.77** | |

---

## Section 7 — Methodology and Calculation

**Overall approach:** Calculation (TDP-based power modelling combined with measured GPU utilisation)

**Describe your methodology:**
We used a calculation approach. For each GPU node, average power draw was estimated as TDP × utilisation + host overhead, where utilisation was the mean GPU utilisation observed in vLLM Prometheus metrics over the 28-day measurement period. CPU-only node power was estimated from Google Cloud's published TDP model for e2 instances scaled by mean CPU utilisation. Memorystore Redis power was estimated using Cloud Carbon Footprint coefficients. Network energy from token streaming (~230 GB total) was estimated using the GSF coefficient of 0.001 kWh/GB and excluded from the boundary as <0.05% of total energy. A PUE of 1.09 was applied uniformly. Carbon intensity was obtained from EPA eGRID 2023 for the MROE subregion. Embodied emissions were sourced from the Cloud Carbon Footprint database using a 3-year lifespan for GPU hardware and a 4-year lifespan for general-purpose servers, consistent with manufacturer refresh guidance.

**Assumptions and limitations:**

| Assumption or limitation | Justification or mitigation |
|--------------------------|----------------------------|
| GPU average power is 0.330 kW per node | A100 40GB TDP is 400W; observed mean GPU utilisation across the period was 70% (218 W on the GPU); host overhead estimated at 50 W; total of ~280 + 50 = 330 W |
| GPU utilisation of 70% is representative of the full period | Computed as a request-volume-weighted mean of 5-minute samples; standard deviation 6%; no individual hour exceeded 92% or fell below 41% |
| API gateway power is 0.025 kW per node | Mean CPU utilisation of e2-standard-4 was 25%; TDP for e2 in GCP power model is ~100 W per fully-utilised host scaled by host fraction |
| Memorystore Redis power is 0.010 kW | Cloud Carbon Footprint estimate for managed basic-1gb tier; we cannot directly observe the underlying hardware |
| PUE of 1.09 for us-central1 | Google's published 2024 fleet-wide average PUE; us-central1 is a mature large-scale facility consistent with this number |
| GPU expected lifespan is 3 years | NVIDIA published refresh guidance for production AI accelerators; consistent with Cloud Carbon Footprint defaults |
| Non-GPU expected lifespan is 4 years | Standard cloud server refresh cycle, consistent with Cloud Carbon Footprint defaults |
| No direct hardware power metering | Used vLLM CPU/GPU utilisation metrics as proxy via TDP-to-power model; estimation uncertainty approximately ±15% |
| Network egress excluded as <0.05% of energy | At GSF 0.001 kWh/GB coefficient, 230 GB egress contributes ~0.23 kWh — <0.02% of the 1,977 kWh footprint |
| Embodied emissions based on Cloud Carbon Footprint estimates | These derive from manufacturer LCA data and AI accelerator-specific coefficients; A100 embodied data is uncertain to ±20% per published methodology notes |
| Carbon intensity is annual average, not time-of-use | For a continuous-running service measured over 28 days, the annual average is a reasonable approximation; time-shifted inference is not a feature we offer |

### Show your calculation

```
Per-component energy (after PUE 1.09):
  GPU nodes (×8):     8 × 0.330 kW × 672 h × 1.09  = 1,933.7472 kWh
  API gateways (×2):  2 × 0.025 kW × 672 h × 1.09  =    36.6240 kWh
  Memorystore Redis:  1 × 0.010 kW × 672 h × 1.09  =     7.3248 kWh
  Total energy E                                   = 1,977.6960 kWh

Operational emissions (O = E × I):
                              = 1,977.6960 kWh × 420 gCO2eq/kWh
                              =   830,632.32 gCO2eq

Embodied emissions (M, time-share allocated):
  GPU nodes (×8):     8 × 1,200,000 × (672 / 26,280)  = 245,479.45 gCO2eq
  API gateways (×2):  2 ×   600,000 × (672 / 35,040)  =  23,013.70 gCO2eq
  Memorystore Redis:  1 ×   200,000 × (672 / 35,040)  =   3,835.62 gCO2eq
  Total embodied M                                    = 272,328.77 gCO2eq

Functional units (R):
                              = 23,200,000,000 tokens / 1,000,000
                              =  23,200

SCI = (O + M) / R             = (830,632.32 + 272,328.77) / 23,200
                              =  1,102,961.09 / 23,200
                              =  47.54 gCO2eq per 1,000,000 tokens
```

---

## Attestation

**Self-Certification Attestation for ISO/IEC 21031:2024**

By submitting this application, I hereby:

1. **DECLARE** that the submitted SCI calculation conforms to all requirements of ISO/IEC 21031:2024 (Software Carbon Intensity).

2. **ATTEST** that the calculation was performed in good faith using appropriate methodologies and data sources consistent with ISO/IEC 21031:2024.

3. **ACKNOWLEDGE** that this is self-certification under the ISO/IEC 17050 framework and does not constitute third-party certification or independent validation by the Green Software Foundation.

4. **MAINTAIN** supporting documentation for all calculations, methodologies, data sources, and assumptions for a minimum of 3 years and will provide upon reasonable request.

5. **ACCEPT RESPONSIBILITY** for the accuracy, completeness, and conformity of the calculation and disclosure with ISO/IEC 21031:2024.

6. **AGREE** to promptly correct any errors or inaccuracies if identified through community review or self-discovery.

7. **UNDERSTAND** that GSF's role is limited to verifying disclosure completeness, not validating calculation accuracy or ISO/IEC 21031:2024 conformity.

8. **AGREE** to use the certificate and badge only as permitted in the GSF Badge Usage Guidelines, including always using the "self-certified" qualifier when claiming ISO/IEC 21031:2024 conformity.

9. **ACKNOWLEDGE** that false or misleading self-certification may result in certificate revocation, public notice, and potential legal consequences.

10. **CONSENT** to public disclosure of the submitted information to enable community review and validation.

**Signature:** Marcus Liu

**Date:** 2026-03-12

**Name and title:** Dr. Marcus Liu, Chief Technology Officer

**Organization:** NeuralCast Inc

---

## Community Participation

- [x] Yes — you may display our organisation name and logo on the GSF certified organisations page
- [x] Yes — we'd be open to participating in a blog post or case study
- [x] Yes — you may use our published disclosure for downstream analysis, including AI syntheses

---

## Optional Attachments

- [x] Impact Framework manifest file (IMP/YAML) — see attached: `neuralcast-inference-api-v2.4.0-sci.yml`

  Run with: `if-run --manifest neuralcast-inference-api-v2.4.0-sci.yml`

  The manifest models each infrastructure component as a separate child node in the Impact Framework tree. A `system-total` child verifies the aggregate SCI score from pre-summed totals. The manifest independently computes 47.5414 gCO2eq per 1,000,000 tokens, rounding to 47.54.

---

## Submission Checklist

- [x] Section 1 — Organization and software details
- [x] Section 2 — SCI score with units and measurement period
- [x] Section 3 — Included and excluded components with rationales
- [x] Section 4 — Functional unit with rationale and measurement method
- [x] Section 5 — Energy with per-component breakdown; carbon intensity with source and year
- [x] Section 6 — Embodied emissions with hardware breakdown
- [x] Section 7 — Methodology, assumptions, limitations, and calculation shown
- [x] Attestation — Signed and dated

---

*This disclosure is published under the GSF SCI Self-Certification Program. To challenge this certification, see the [Community Challenge Process](https://github.com/greensoftware-foundation/sci-certifications/blob/main/CHALLENGE-PROCESS.md).*
