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

**SCI score:** 0.000402 gCO2eq per waste-sorting inference, single-inference benchmark result on iPhone 13 (MLML3LL/A), iOS version 26.5.2.

**Measurement start date:** 2026-10-22

**Measurement end date:** 2026-10-22

**Measurement period:** Single-inference benchmark on the named reference device; scope and limits stated in Sections 3 and 7.

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
| Network Transmission | Excluded by architectural design as all image inference and auditing occur locally on-device. |
| Actuator Control Signals | Excluded because the control signals that drive the sorting hardware (6-compartment flapper bins and conveyor machines) are emitted as low-power digital GPIO/PWM outputs from an embedded microcontroller. Their operational energy is negligible relative to the vision inference runtime, and they execute on a separate hardware path (microcontroller) outside the measured edge inference boundary. |
| On-Device Vision Pipeline, Mobile & Audit App Runtimes | Excluded because these components execute on separate hardware paths (mobile CPU/ISP/DSP and embedded microcontroller) that are outside the measured edge inference runtime boundary. This is a deliberate boundary decision: the SCI assessment isolates the vision inference runtime as the sole attributable operational component under DWaste's control, and treats the surrounding capture, display, and audit application layers as host-platform functions. |
| Local Storage | Excluded because the 3.5 MB ONNX model is memory-mapped and read once per inference; estimated read energy is ~0.005 J (using a conservative NAND benchmark of ~1.5 J/GB), which is under 0.3% of the measured 1.85 J inference energy (5.15 × 10⁻⁷ kWh). Image reads and temporary writes are infrequent and fall below the reporting precision. |

### Shared infrastructure statement

No shared infrastructure is attributable to DWaste's operational boundary. The benchmark was executed on the iPhone 13 reference device, a dedicated edge device, not a shared cloud environment. No shared-infrastructure allocation is therefore required for E.

---

## Section 4 — Functional Unit (R)

**Functional unit:** 1 waste-sorting inference (one forward pass on a single image input)

**Why this unit:** A single inference represents the fundamental unit of utility delivered by the software converting an image into a structured 7-class waste classification.

**How counted:** Logged forward-pass executions isolated with OSSignposter during a single-inference benchmark on iPhone 13.

**Total in measurement period:** 1 functional unit (Benchmark single-inference run)

---

## Section 5 — Energy (E) and Carbon Intensity (I)

### Energy

**Total energy:** 5.15 × 10⁻⁷ kWh (derived on iPhone 13, edge reference hardware)

**PUE applied:** N/A (Direct edge runtime deployment)

| Component | Energy (kWh) | Data source |
|-----------|--------------|-------------|
| YOLOv8n-CBAM Edge Inference | 5.15 × 10⁻⁷ | iPhone 13 (MLML3LL/A), iOS 26.5.2; t_inference 442.90 ms via OSSignposter; Power Profiler overall-system power 33.7 %/hr at 93% brightness (unplugged) gave 4.182 W |

**Note on component energy values:** Only the Edge Inference Runtime draws measurable operational power within the assessed boundary, and its energy is captured within the 5.15 × 10⁻⁷ kWh. The On-Device Vision Pipeline, Mobile & Audit App Runtimes, and Actuator Control Signals are excluded from this boundary for the reasons stated in Section 3 (separate hardware paths outside the measured edge inference runtime); no portion of their operational energy is attributed to this score.

**Note on hardware and scope:** E was derived on the iPhone 13 reference device, not a datacentre GPU. The Power Profiler value is overall-system power and includes display and system overhead over the whole measurement session; it is therefore an upper bound for the isolated inference energy. The inference interval (442.90 ms) was isolated via OSSignposter.

### Carbon intensity

**Carbon intensity:** 418 gCO2eq/kWh

**Location(s):** US-PJM (PJM Interconnection)

**Approach:** Location-based

**Data source + year:** Electricity Maps (historical daily data), 2026

| Region | Component | gCO2eq/kWh | Source |
|--------|-----------|------------|--------|
| US-PJM | Edge Inference Runtime | 418 | Electricity Maps |

The iPhone 13 measurement was conducted in Baltimore, MD, within the US-PJM grid region.

---

## Section 6 — Embodied Emissions (M)

**Total embodied (allocated):** 0.000187 gCO2eq

**Reference hardware:** iPhone 13 (MLML3LL/A), 128 GB, iOS 26.5.2

**M_device:** 64 kgCO2eq (source: Apple, iPhone 13 Product Environmental Report, September 2021, endnote 3, ISO 14040/14044 LCA for 128 GB configuration)

**Life-cycle stage breakdown:** Production 81%, Transport 2%, Use 16%, End-of-life <1%

**Embodied share used for allocation:** Production (81%) + Transport (2%) + End-of-life (<1%) = 83%, so M_embodied = 0.83 × 64 = 53.12 kgCO2eq.

**Rationale for excluding the Use phase:** Apple's Use-phase share (16%) represents aggregate operational electricity already superseded by the E reported in Section 5 for this functional unit; including it would double-count operational emissions. M therefore uses the Production + Transport + End-of-life share (83%).

**Allocation formula (SCI time-share method):**

```
M_allocated = M_embodied × (t_inference / t_device_active_life)

            = 53.12 kgCO2eq × (0.4429 s / 1.261 × 10⁸ s)

            = 1.866 × 10⁻⁷ kgCO2eq = 0.000187 gCO2eq per inference
```

t_device_active_life = 4 years × 365 × 24 × 3600 = 1.261 × 10⁸ s, per Apple's stated 3 to 4 year first-owner use assumption (endnote 3)

---

## Section 7 — Methodology and Calculation

**Approach:** Hybrid measurement on the edge reference device. Inference duration measured directly via OSSignposter in Xcode Instruments; energy derived from battery-percent drain and battery capacity rather than measured at component level; power via Power Profiler overall-system battery drain.

**Hardware used for benchmark:** iPhone 13 (MLML3LL/A), iOS 26.5.2. Inference duration measured via OSSignposter (Model_Inference interval, 442.90 ms, Runner process 2801). Power measured via Power Profiler as a whole-session average over the full trace (~51 s, Runner process 3003) at 93% brightness, unplugged. This is a separate trace from the inference interval and is treated as an upper bound.

**How you calculated your score:** The score is a single-inference benchmark result on iPhone 13, not typical or average deployment performance. The YOLOv8n-CBAM model (3.5 MB ONNX) ran once per inference; the inference interval (442.90 ms) was isolated with OSSignposter. Power Profiler reported overall-system power of 33.7 %/hr at 93% brightness; multiplied by the iPhone 13 battery capacity (12.41 Wh) this gives P_avg = 4.182 W. E = 4.182 W × 0.4429 s ÷ 3,600,000 = 5.15 × 10⁻⁷ kWh. This is an upper bound for isolated inference energy because the power figure is a whole-session average from a separate trace and includes display and system overhead.

**Show your calculation:**

```
SCI = (E × I) + M per R

= (5.145 × 10⁻⁷ kWh × 418 gCO2eq/kWh) + 0.000187 gCO2eq

= 0.000402 gCO2eq per inference
```

**Assumptions and limitations:**

| Assumption or limitation | Justification or mitigation |
|--------------------------|------------------------------|
| Single-inference benchmark evaluation | Explicitly labelled as a single-inference benchmark on iPhone 13, not typical/average deployment. Benchmark settings do not capture long-term thermal throttling or extended field deployment dynamics; future disclosures will report longitudinal field logs. |
| Power measured at 93% display brightness; overall-system value | Includes display and system overhead, so E is an upper bound for isolated inference energy. Measurement was unplugged on the battery. |
| Embodied emissions allocation | Allocated per SCI time-share using Apple's published LCA and 4-year use assumption; formula and sources in Section 6. |

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

**Date:** October 26, 2026

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

- Power Measurement
- Inference Measurement
