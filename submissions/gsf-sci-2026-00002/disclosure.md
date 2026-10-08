# SCI Self-Certification — Public Disclosure

| Field | Value |
|-------|-------|
| **Certificate ID** | [TO BE ISSUED: GSF-SCI-2026-NNNNN] |
| **Date Issued** | [TO BE COMPLETED ON ISSUE] |
| **Valid Until** | [TO BE COMPLETED ON ISSUE] |
| **Certificate URL** | [TO BE COMPLETED ON ISSUE] |
| **Status** | [Active on issue] |

---

## Section 1 — About You and Your Software

**Organization name:** DWaste

**Contact name:** Suman Kunwar

**Contact email:** *[redacted]*

**Software name:** DWaste Platform

**Software version:** v1.4.0

**Software URL:** https://www.dwaste.live

**What does it do?**

DWaste is an edge-AI and IoT-enabled platform for sustainable waste intelligence, automated recycling sorting, and real-time contamination tracking serving educational institutions, businesses, public spaces, and Material Recovery Facilities (MRFs). The platform deploys lightweight computer-vision models directly on smartphones and edge devices including full offline functionality to classify waste into seven recycling-critical categories (biological, cardboard, glass, metal, paper, plastic, trash).

Core capabilities include the mobile AI sorting app, mountable edge camera units for automatic bin-level waste detection, DInsights on-device MRF waste auditing, DSort gamified education, and automated sorting hardware integration (6-compartment flapper smart bins and conveyor machines). By processing vision telemetry locally on resource-constrained hardware, dWaste bypasses the heavy energy footprint of transmitting raw video streams to cloud infrastructure. The platform architecture and benchmarks are backed by peer-reviewed research published in the Journal on Artificial Intelligence and the Journal of the Brazilian Computer Society.

**Deployed model:** YOLOv8n-CBAM (Convolutional Block Attention Module injected at the deepest backbone layer)

**Validated performance** (on held-out validation set, 1,778 images / 2,942 instances): mAP50 = 0.809, mAP50-95 = 0.598, Precision = 0.776, Recall = 0.730, F1 = 0.809.

---

## Section 2 — Your SCI Score

**SCI score:** 0.003 gCO2eq per waste-sorting inference

**Measurement start date:** 2025-10-23

**Measurement end date:** 2025-10-23

**Measurement period:** Benchmark evaluation period (Single-inference paper evaluation methodology)

---

## Section 3 — Software Boundary

### What's included?

| Component | Brief description |
|-----------|-------------------|
| Edge Inference Runtime | Quantized YOLOv8n-CBAM model execution layer (3.5 MB footprint) |

### What's excluded, and why?

| Component | Reason for exclusion |
|-----------|----------------------|
| Cloud Analytics Backend | Excluded because core classification operates cloud-free by design; optional external syncing falls outside the measured operational boundary. |
| Model Training Phase | Excluded from operational SCI per ISO/IEC 21031:2024 guidelines (one-time development cost of 0.09458 kgCO2, reported separately). |
| Embodied Hardware Emissions | Excluded because the end-user devices (smartphones and client edge boards) are not under DWaste's operational control and their lifecycle emissions are not attributable to the software. |
| Network Transmission | Excluded by architectural design as all image inference and auditing occur locally on-device. |
| Actuator Control Signals | Excluded because the control signals that drive the sorting hardware (6-compartment flapper bins and conveyor machines) are emitted as low-power digital GPIO/PWM outputs from an embedded microcontroller. Their operational energy is negligible relative to the vision inference runtime, and they execute on a separate hardware path (microcontroller) outside the measured edge inference boundary. |
| On-Device Vision Pipeline, Mobile & Audit App Runtimes | Excluded because these components execute on separate hardware paths (mobile CPU/ISP/DSP and embedded microcontroller) that are outside the measured edge inference runtime boundary. This is a deliberate boundary decision: the SCI assessment isolates the vision inference runtime as the sole attributable operational component under DWaste's control, and treats the surrounding capture, display, and audit application layers as host-platform functions. |

### Shared infrastructure statement

No shared infrastructure is attributable to DWaste's operational boundary. The benchmark was executed on a Kaggle-hosted Tesla T4 GPU, which is a shared cloud environment. Per ISO/IEC 21031:2024, shared infrastructure emissions are allocated to the software only to the extent they are attributable to its operation. In this assessment, the GPU time consumed by the single-inference benchmark run was isolated via execution profilers, and only that attributable slice is included in the reported energy (E). The broader shared host, its embodied emissions, and idle capacity are not attributable to DWaste and are excluded.

---

## Section 4 — Functional Unit (R)

**Functional unit:** 1 waste-sorting inference (one forward pass on a single image input)

**Why this unit:** A single inference represents the fundamental unit of utility delivered by the software converting an image into a structured 7-class waste classification.

**How counted:** Logged forward-pass executions measured via execution profilers and benchmark telemetry during evaluation.

**Total in measurement period:** 1 functional unit (Benchmark single-inference run)

---

## Section 5 — Energy (E) and Carbon Intensity (I)

### Energy

**Total energy:** 7.3 × 10⁻⁶ kWh (benchmark value on Kaggle Tesla T4 GPU; represents an upper bound for deployed edge hardware)

**PUE applied:** N/A (Direct edge runtime deployment)

| Component | Energy (kWh) | Data source |
|-----------|--------------|-------------|
| YOLOv8n-CBAM Edge Inference | 7.3 × 10⁻⁶ | Calculated from empirical inference time (0.11s) and execution power logs via CodeCarbon v3.0.7 |

**Note on component energy values:** Only the Edge Inference Runtime draws measurable operational power within the assessed boundary, and its energy is captured within the 7.3 × 10⁻⁶ kWh. The On-Device Vision Pipeline, Mobile & Audit App Runtimes, and Actuator Control Signals are excluded from this boundary for the reasons stated in Section 3 (separate hardware paths outside the measured edge inference runtime); no portion of their operational energy is attributed to this score.

**Note on hardware differences:** The energy value of 7.3 × 10⁻⁶ kWh was derived from a benchmark run on a Kaggle Tesla T4 GPU, not from the deployed edge hardware. The T4 has a higher power envelope than typical mobile and edge inference chips, so this value represents an upper bound for the deployed system.

### Carbon intensity

**Carbon intensity:** 412 gCO2eq/kWh

**Location(s):** US-IA (Iowa Grid Subregion)

**Approach:** Location-based

**Data source + year:** CodeCarbon v3.0.7 grid database (EPA eGRID / Ember 2023)

| Region | Component | gCO2eq/kWh | Source |
|--------|-----------|------------|--------|
| US-IA | Edge Inference Runtime | 412 | CodeCarbon v3.0.7 / EPA eGRID |

---

## Section 6 — Embodied Emissions (M)

**Total embodied (allocated):** 0 gCO2eq

**Explanation:** Embodied hardware emissions are excluded from this operational assessment boundary. In accordance with the methodology published in Kunwar, S. (2026), Journal on Artificial Intelligence, carbon measurements focus strictly on operational emissions (Scope 2). End-user devices (smartphones and client edge boards) are not under DWaste's operational control and their lifecycle emissions are not attributable to the software. Future work will incorporate full lifecycle carbon accounting including hardware emissions.

---

## Section 7 — Methodology and Calculation

**Approach:** Hybrid (direct GPU telemetry via pynvml combined with TDP-based CPU power modeling via CodeCarbon v3.0.7)

**Hardware used for benchmark:** Kaggle Tesla T4 GPU, Intel Xeon @ 2.00 GHz (4 threads), 31.35 GB RAM. GPU power was measured directly via pynvml; CPU power was estimated using CodeCarbon's TDP-based model. The deployed edge inference runtime uses equivalent low-power hardware, but the benchmark values reported here are from the Kaggle Tesla T4 environment.

**How you calculated your score:** The score was derived from empirical benchmark measurements conducted for the deployed YOLOv8n-CBAM model architecture (3,012,213 parameters, 3.5 MB quantized footprint). Power draw and carbon output were captured using CodeCarbon v3.0.7 during inference benchmarking over an execution duration of 0.11 s per forward pass. While the paper's summary tables truncate single-inference emissions to 0.000000 kgCO2 due to display precision limits (rounding down values under 1 × 10⁻⁶ kgCO2), the unrounded narrative calculation yields approximately 3 × 10⁻⁶ kgCO2 (0.003 gCO2eq per inference based on 7.3 × 10⁻⁶ kWh at 412 gCO2eq/kWh), which is used here to prevent underreporting.

**Show your calculation:**

```
SCI = (E × I) + M per R

= (0.0000073 kWh × 412 gCO2eq/kWh) + 0

= 0.003 gCO2eq per inference
```

**Assumptions and limitations:**

| Assumption or limitation | Justification or mitigation |
|--------------------------|------------------------------|
| Single-inference benchmark evaluation | Benchmark settings do not capture long-term thermal throttling or extended field deployment dynamics; future disclosures will report longitudinal field logs. |
| CPU power draw estimated via static TDP models | Direct hardware ammeters are unavailable on heterogenous mobile edge hardware; CodeCarbon TDP modeling serves as the standard proxy. |
| GPU benchmark hardware differs from deployed edge hardware | Benchmark was run on a Kaggle Tesla T4 GPU, whereas the deployed runtime runs on low-power edge devices. The reported values represent an upper bound for the deployed system. |

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

**Signature:** Suman Kunwar

**Date:** October 7, 2026

**Name and title:** Suman Kunwar, Founder & Lead Researcher

**Organization:** DWaste

---

## Community Participation (Optional)

**May we feature your organisation?**

- [x] Yes — you may display our organisation name and logo on the GSF certified organisations page
- [ ] No thank you

**Would you participate in a blog post or case study?**

- [x] Yes — we'd be open to participating in a blog post or case study
- [ ] No thank you

**May we use your disclosure for downstream analysis?**

- [x] Yes — you may use our published disclosure for downstream analysis, including AI syntheses
- [ ] No thank you

## Optional Attachments

- TSP_JAI_76674.pdf (Peer-reviewed Journal on Artificial Intelligence paper)
- 7774-Article Text-41625.pdf (Peer-reviewed Journal of the Brazilian Computer Society paper)
