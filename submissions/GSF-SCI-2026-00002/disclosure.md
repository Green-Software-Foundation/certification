# SCI Self-Certification — Public Disclosure

| Field | Value |
|-------|-------|
| **Certificate ID** | GSF-SCI-2026-00002 |
| **Date Issued** | 2026-09-14 |
| **Valid Until** | 2027-09-14 |
| **Certificate URL** | [View certificate](https://badges.greensoftware.foundation/credentials/gsf-sci-2026-00002) |
| **Status** | Active |

---

## Section 1 — About You and Your Software

**Organization name:** Offlyn.ai

**Contact name:** Joel Nishant Reddy

**Contact email:** *[redacted]*

**Software name:** Offlyn Clipper

**Software version:** 1.0 (beta-2026-07)

**Software URL:** https://clipper.offlyn.ai/

**What does it do?**

Offlyn Clipper is a native macOS application that provides AI-powered meeting intelligence running entirely on-device. It captures audio from Mac system audio, transcribes speech to text using on-device Whisper (MLX), and generates meeting summaries, action items, and searchable notes using on-device LLM inference (Gemma 4 via MLX). All AI processing runs locally on Apple Silicon with zero cloud API calls in the default configuration.

---

## Section 2 — Your SCI Score

**SCI score:** 4.58 gCO2eq per meeting workflow

**Measurement period:** 2026-07-22 to 2026-07-22 (single-day benchmark)

**Measurement method:** Direct power measurement using macOS `powermetrics` on Apple M4

**Note:** This is a representative benchmark measurement. The SCI score represents the carbon intensity of a single 60-minute meeting workflow based on measured power consumption during controlled testing.

---

## Section 3 — Software Boundary

### What's Included?

| Component | Description |
|-----------|-------------|
| On-device ASR (Whisper Large V3 Turbo) | Speech-to-text transcription, ~809 MB model, MLX runtime |
| On-device LLM (Gemma 4 E4B 4-bit) | Summary, action items, key moments, Q&A, ~2.9 GB model, MLX runtime |
| On-device embeddings (BGE-Base-EN) | Semantic search indexing, ~270 MB model, MLX runtime |
| Audio capture | System audio capture from Mac |
| Local storage | SQLite database and file storage on user device |

### What's Excluded, and Why?

| Component | Reason for exclusion |
|-----------|----------------------|
| Model training | Training occurred before operational use; outside consumer SCI boundary |
| Model download | One-time download (~4 GB); amortized over device lifetime, negligible per-meeting |
| Baseline device power | All users have an active Mac; baseline is common across all architectures |
| Cloud fallback (if enabled) | Not used in default configuration; would be measured separately if enabled |

### Shared Infrastructure

No included component runs on shared multi-tenant infrastructure. Offlyn Clipper runs entirely on end-user Apple Silicon devices. Audio capture, transcription, embedding generation, and AI inference all execute locally on the user's Mac.

There is no cloud component in the default configuration.

---

## Section 4 — Functional Unit (R)

**Functional unit:** One 60-minute meeting intelligence workflow

**Why this unit:** A meeting workflow is the primary unit of value delivered by Clipper. It encompasses the complete pipeline: audio capture, transcription, summarization, action item extraction, and searchable indexing.

**How counted:** Each meeting processed through Clipper from start (begin recording) to finish (summary generated) counts as one functional unit.

**Total in measurement period:** 1 meeting workflow

**Benchmark methodology:** Power consumption was measured during a controlled 60-minute meeting workflow using macOS `powermetrics`. The measurement captures one complete functional unit to establish the per-workflow SCI score. This benchmark approach is appropriate for consumer software where each user runs the software independently on their own device.

---

## Section 5 — Energy (E) and Carbon Intensity (I)

### Energy

**Total energy:** 0.00101 kWh per meeting workflow

**PUE applied:** N/A — local consumer device (no datacenter infrastructure)

**Method:** Direct power measurement using macOS `powermetrics` with incremental power calculation (active inference power minus baseline idle power)

| Component | Duration | Power (incremental) | Energy (kWh) | Data source |
|-----------|----------|---------------------|--------------|-------------|
| Transcription (Whisper) | 60 min | 0.86 W | 0.00086 | powermetrics measurement |
| Summarization (Gemma 4) | 45 sec | 12.11 W | 0.00015 | powermetrics measurement |
| **Total** | - | - | **0.00101** | - |

### Measured Power Values

| Phase | Baseline | Active | Incremental |
|-------|----------|--------|-------------|
| Idle | 198 mW | - | - |
| Transcription | 198 mW | 1,056 mW | 858 mW (0.86 W) |
| Summarization | 198 mW | 12,313 mW | 12,115 mW (12.11 W) |

### Carbon Intensity

**Carbon intensity:** 350 gCO2eq/kWh

**Location:** Global average (user location varies)

**Approach:** Location-based

**Data source:** IEA World Energy Outlook 2023, global average electricity emission factor

---

## Section 6 — Embodied Emissions (M)

**Total embodied (allocated):** 4.23 gCO2eq per meeting workflow

**Source:** Apple Product Environmental Report, MacBook Pro 14-inch with M4 (October 2024)

**Device lifecycle emissions:** 198 kg CO2e total; 74% production = 146.5 kg CO2e embodied

**Allocation method:** SCI specification formula (M = TE × TS × RS)

| Parameter | Value | Rationale |
|-----------|-------|-----------|
| TE (Total Embodied) | 146,520 gCO2e | Apple PER, production phase (74% of 198 kg CO2e) |
| TiR (Time Reserved) | 1.0125 hours | 60 min transcription + 45 sec summarization |
| EL (Expected Lifespan) | 35,040 hours | 4 years (industry standard for Mac hardware) |
| RS (Resource Share) | 1.0 | Device reserved for user during meeting workflow |
| **M** | **4.23 gCO2eq** | Per functional unit |

**Calculation:**

```
M = TE × (TiR / EL) × RS
M = 146,520 × (1.0125 / 35,040) × 1.0
M = 146,520 × 0.0000289
M = 4.23 gCO2eq per meeting workflow
```

**Assumptions:**
- TE uses only the production phase (74%) of Apple's reported lifecycle emissions, excluding transportation, use-phase, and end-of-life
- Expected lifespan of 4 years assumes typical Mac hardware lifecycle
- RS = 1.0 is conservative; the device is dedicated to the user during the meeting

**Resolution note:** The initial submission set M = 0 on the basis that Apple has not published a standalone embodied-carbon figure for the M4 chip. This was raised as a formal objection during SWG review — absence of a component-specific figure does not establish that the value is zero. The applicant resolved this using first-party OEM lifecycle data (Apple's Product Environmental Report) and a time-share allocation formula, per GSF's recommended data hierarchy (first-party OEM data → third-party PCF/LCA databases → modeled proxy estimate).

---

## Section 7 — Methodology and Calculation

**Approach:** Measurement

**How you calculated your score:**

1. Power measurement was conducted on an Apple M4 Mac using macOS `powermetrics` with the `cpu_power` sampler at 1-second intervals
2. Baseline power was measured with Clipper open but idle (30 seconds)
3. Transcription power was measured during active real-time transcription (90 seconds)
4. Summarization power was measured during LLM inference for summary generation (60 seconds)
5. Incremental power was calculated as active power minus baseline power for each phase
6. Energy was calculated as incremental power × duration for each phase
7. Total operational carbon was calculated as total energy × grid carbon intensity

**Show your calculation:**

```
Energy breakdown:
  Transcription = 0.86 W × 1.0 h = 0.00086 kWh
  Summarization = 12.11 W × 0.0125 h = 0.00015 kWh
  Total E = 0.00101 kWh

O = E × I = 0.00101 kWh × 350 gCO2eq/kWh = 0.35 gCO2eq
M = TE × (TiR/EL) × RS = 146,520 × (1.0125/35,040) × 1.0 = 4.23 gCO2eq
R = 1 meeting workflow

SCI = (O + M) / R = (0.35 + 4.23) / 1 = 4.58 gCO2eq per meeting workflow
```

### Assumptions and Limitations

| Assumption or limitation | Justification or mitigation |
|--------------------------|----------------------------|
| Single device measurement (Apple M4) | Power varies by Apple Silicon generation; M4 represents current-generation efficiency |
| Global average grid intensity | Users should substitute region-specific values for more accurate local calculations |
| Summarization duration (45 sec) | Based on observed Gemma 4 inference time; varies with transcript length |
| Embodied emissions from Apple PER | Production-phase only (74%); excludes transport, use-phase, end-of-life |
| Default configuration only | Cloud fallback mode, if enabled, would increase operational carbon |

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

**Signature:** /s/ Joel Nishant Reddy

**Date:** July 22, 2026

**Name and title:** Joel Nishant Reddy, Co-founder

**Organization:** Offlyn.ai

---

## Submission Checklist

- [x] Section 1 — Organization and software details
- [x] Section 2 — SCI score with units and measurement period
- [x] Section 3 — Included and excluded components with rationales
- [x] Section 4 — Functional unit with rationale and measurement method
- [x] Section 5 — Energy with per-component breakdown; carbon intensity with source and year
- [x] Section 6 — Embodied emissions with allocation method and data source
- [x] Section 7 — Methodology, assumptions, limitations, and calculation shown
- [x] Attestation — Signed and dated

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 0.1.0 | 2026-06-10 | Initial modeled disclosure |
| 1.0.0 | 2026-07-22 | Revised with measured power data; single-system framing for Offlyn Clipper |
| 1.1.0 | 2026-08-10 | Added non-zero M using Apple PER data; SCI updated from 0.35 to 4.58 |

*This disclosure is published under the GSF SCI Self-Certification Program. To challenge this certification, see the [Community Challenge Process](../../faqs.md#community-and-accountability).*
