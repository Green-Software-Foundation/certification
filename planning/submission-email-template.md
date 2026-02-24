# SCI Self-Certification Submission — Email Template

Copy everything below the line into a new email addressed to **sci-certification@greensoftware.foundation** with the subject line shown. Replace all placeholder text in [square brackets] with your information. Delete the helper notes in *italics* as you go — they are there to guide you.

**A note on format:** You can answer any section inline in the email or in an attached document (PDF, Word, Markdown, or plain text). If you provide information as an attachment, just note the filename inline so the reviewer can match it to the requirement — for example: *"See attached: acme-api-boundary.pdf"*. You can use a single attachment for everything or separate files per section — whatever is easiest for you.

---

**To:** sci-certification@greensoftware.foundation
**Subject:** SCI Self-Certification Submission — [Your Organization Name] — [Your Software Name]

---

## PART 1 — About You and Your Software

**Organization name:** [e.g. Acme Corporation]

**Contact name:** [Full name of the person responsible for this submission]

**Contact email:** [e.g. jane.smith@acme.com]

**Software name:** [The name of the specific application or service being measured]

**Software version:** [e.g. v2.1.0, or "commit abc123 deployed 2026-01-15"]

**Software description:**
[Describe the system in 2-4 sentences so that a reader unfamiliar with your product can understand what it does and how it is deployed. Include the tech stack, hosting environment, and rough scale.]

*Example: "A REST API serving an e-commerce platform, built with Node.js and PostgreSQL, deployed on two AWS EC2 t3.medium instances behind an Application Load Balancer in us-east-1. Handles approximately 45 million requests per month."*

**Software URL:** [Link to the application, its documentation, or its repository — if public]

---

## PART 2 — Measurement Period and Score

**Measurement start date:** [YYYY-MM-DD]

**Measurement end date:** [YYYY-MM-DD]

**Your SCI score:** [Number with units, e.g. "349.63 gCO2eq per 1,000 API requests"]

**Brief summary of the measurement:**
[2-3 sentences describing what was measured and the headline result.]

*Example: "We measured the carbon intensity of our e-commerce API over January 2026. The calculation included compute, database, load balancing, and network transfer, and yielded an SCI of 349.63 gCO2eq per 1,000 API requests."*

---

## PART 3 — Software Boundary

*List every significant component of your system and state whether it is **included** or **excluded** from the calculation. For included components, briefly say why. For excluded components, you must give a rationale for the exclusion.*

### Included components

| Component | Description | Why included |
|-----------|-------------|--------------|
| [e.g. Application Servers] | [e.g. 2x EC2 t3.medium running Node.js] | [e.g. Core compute under our operational control] |
| [e.g. Database] | [e.g. RDS PostgreSQL r6g.large] | [e.g. Dedicated database for this application] |
| ... | ... | ... |

### Excluded components

| Component | Description | Reason for exclusion |
|-----------|-------------|----------------------|
| [e.g. CDN] | [e.g. CloudFront distribution for static assets] | [e.g. Separate service outside operational boundary] |
| [e.g. End-user devices] | [e.g. Client browsers] | [e.g. Beyond our operational control] |
| ... | ... | ... |

### Shared infrastructure *(if any — delete this section if not applicable)*

| Shared component | How you allocated your share | Your allocation % or ratio |
|------------------|------------------------------|----------------------------|
| [e.g. Kubernetes cluster node] | [e.g. By vCPU reservation: 2 of 16 vCPUs] | [e.g. 12.5%] |
| ... | ... | ... |

---

## PART 4 — Functional Unit (R)

**What is your functional unit?**
[e.g. "1,000 API requests"]

**Why did you choose this unit?**
[Explain why this unit scales with how your software delivers value.]

*Example: "API requests are the core unit of value our service delivers. Request volume scales linearly with usage, making it an appropriate normalizing factor."*

**How did you count or measure the total units?**
[e.g. "Counted from nginx access logs, validated against CloudWatch request metrics."]

**Total units in measurement period:** [e.g. 45,000,000 requests]

---

## PART 5 — Energy (E)

**Total energy consumed:** [Number and unit, e.g. "46.01 kWh"]

**PUE applied:** [e.g. 1.2 — or "N/A" if not applicable]

**How was energy measured or estimated?**
[Describe your approach — direct metering, cloud provider telemetry, power modelling, etc.]

**Energy breakdown by component:**

| Component | Energy (kWh) | How calculated or measured | Data source |
|-----------|-------------|---------------------------|-------------|
| [e.g. Application Servers] | [e.g. 21.6] | [e.g. 2 instances x 15W avg x 720h] | [e.g. AWS CloudWatch CPU metrics] |
| [e.g. Database] | [e.g. 14.4] | [e.g. 20W avg x 720h] | [e.g. RDS CloudWatch metrics] |
| ... | ... | ... | ... |

---

## PART 6 — Carbon Intensity (I)

**Carbon intensity value:** [Number and unit, e.g. "340 gCO2eq/kWh"]

**Location(s):** [e.g. "AWS us-east-1 (Virginia, USA)"]

**Approach:** [Location-based / Market-based]

**Data source:** [e.g. "EPA eGRID 2022, SRVC subregion"]

**Year of data:** [e.g. 2022]

### Regional breakdown *(if your software runs in multiple regions — delete if single-region)*

| Region | % of workload | Carbon intensity (gCO2eq/kWh) | Data source |
|--------|--------------|-------------------------------|-------------|
| [e.g. us-east-1] | [e.g. 60%] | [e.g. 340] | [e.g. EPA eGRID 2022] |
| [e.g. eu-west-1] | [e.g. 40%] | [e.g. 280] | [e.g. EEA 2023] |

**Weighted average carbon intensity:** [if multi-region, show the calculation]

---

## PART 7 — Embodied Emissions (M)

**Total embodied emissions allocated to this measurement:** [Number and unit, e.g. "96,574.9 gCO2eq"]

**Allocation methodology:**
[Describe how you allocated embodied emissions across time and resources. The standard formula is M = TE x (TiR / EL) x (RR / ToR) — explain how you applied it or describe any alternative approach.]

**Hardware component breakdown:**

| Hardware component | Type | Total embodied (gCO2eq) | Expected lifespan | Time reserved | Resource share | Allocated emissions (gCO2eq) | Data source |
|--------------------|------|------------------------|-------------------|---------------|----------------|------------------------------|-------------|
| [e.g. App Server 1] | [e.g. EC2 t3.medium] | [e.g. 1,200,000] | [e.g. 4 years] | [e.g. 720h] | [e.g. 100%] | [e.g. 24,658] | [e.g. Cloud Carbon Footprint] |
| ... | ... | ... | ... | ... | ... | ... | ... |

*If embodied emissions are zero, explain why (e.g. "Pure SaaS — no hardware under our operational control").*

---

## PART 8 — Methodology, Assumptions, and Limitations

**Overall approach:** [Measurement / Calculation / Hybrid]

**Describe your methodology:**
[A paragraph explaining the overall approach — how you gathered data, what models or tools you used, and how you combined E, I, and M into your final SCI score.]

**Key assumptions:**

| Assumption | Justification | Impact on result (Low / Medium / High) |
|------------|---------------|----------------------------------------|
| [e.g. Server avg power draw is 15W] | [e.g. Based on AWS TDP at 40% utilization] | [e.g. Medium] |
| [e.g. Server lifespan is 4 years] | [e.g. Industry standard refresh cycle] | [e.g. Medium] |
| ... | ... | ... |

**Known limitations:**

| Limitation | Severity (Low / Medium / High) | Mitigation |
|------------|--------------------------------|------------|
| [e.g. No direct hardware power metering] | [e.g. Medium] | [e.g. Used cloud telemetry as proxy] |
| ... | ... | ... |

**All data sources used:**

| Source name | Type | Description | URL (if available) |
|-------------|------|-------------|--------------------|
| [e.g. AWS CloudWatch] | [Measurement] | [Cloud provider CPU/memory telemetry] | [https://...] |
| [e.g. EPA eGRID 2022] | [Grid data] | [US grid carbon intensity] | [https://...] |
| ... | ... | ... | ... |

---

## PART 9 — Show Your Calculation

*Reproduce the final SCI formula with your numbers so the reviewer can verify the arithmetic.*

```
Operational emissions (O) = E x I = [e.g. 46.01 kWh] x [e.g. 340 gCO2eq/kWh] = [e.g. 15,643.4 gCO2eq]
Embodied emissions (M) = [e.g. 96,574.9 gCO2eq]
Functional units (R) = [e.g. 45,000,000 requests]

SCI = (O + M) / R = ([e.g. 15,643.4] + [e.g. 96,574.9]) / [e.g. 45,000] x 1,000
    = [e.g. 349.63 gCO2eq per 1,000 API requests]
```

---

## PART 10 — Baseline Comparison *(delete this section if this is your first measurement)*

**Previous SCI score:** [value and unit]

**Date of previous measurement:** [YYYY-MM-DD]

**Previous certificate ID (if any):** [e.g. GSF-SCI-2025-00123]

**New SCI score:** [value and unit]

**Actions taken between measurements:**
- [e.g. Migrated to GPU-accelerated training]
- [e.g. Optimized model architecture]
- ...

**Explanation of change:**
[Describe why the score changed — what drove the improvement or increase.]

---

## PART 11 — Supporting Materials *(optional but encouraged)*

*Attach or link any of the following if available. These are not required but strengthen your submission.*

- [ ] Impact Framework manifest file (IMP/YAML) — *highly encouraged for maximum transparency*
- [ ] Link to IF Visualizer output for your manifest
- [ ] Spreadsheet with detailed calculations
- [ ] Links to public documentation or methodology write-ups

---

## PART 12 — Self-Certification Attestation

*You must include the following attestation. Copy it as-is, fill in the signature fields, and include it in your email or as a signed attachment.*

---

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

**Signature:** ___________________

**Date:** ___________________

**Name and title:** ___________________

**Organization:** ___________________

---

## Submission Checklist

*Before sending, confirm you have included everything. Incomplete submissions will be returned.*

- [ ] Part 1 — Organization and software details filled in
- [ ] Part 2 — Measurement period and SCI score stated
- [ ] Part 3 — All included and excluded components listed with justifications/rationales
- [ ] Part 4 — Functional unit defined with rationale and measurement method
- [ ] Part 5 — Energy value with per-component breakdown and data sources
- [ ] Part 6 — Carbon intensity value with location, data source, and year
- [ ] Part 7 — Embodied emissions with hardware breakdown (or justification if zero)
- [ ] Part 8 — Methodology described; assumptions and limitations documented
- [ ] Part 9 — Final SCI calculation shown with arithmetic
- [ ] Part 12 — Attestation signed and dated
- [ ] All attachments referenced by filename in the relevant section
