# SCI Self-Certification Submission — Email Template

Copy everything below the line into a new email addressed to **sci-certification@greensoftware.foundation** with the subject line shown. Replace all placeholder text in [square brackets] with your information. Delete the helper notes in *italics* as you go.

**Format:** You can answer inline in the email or attach documents (PDF, Word, Markdown, or plain text). If you use attachments, note the filename inline so the reviewer can match it — e.g., *"See attached: acme-api-boundary.pdf"*.

**This submission becomes your public disclosure.** If approved, it is published as-is to the `greensoftware-foundation/sci-certifications` GitHub repository (your contact email is redacted and a certificate metadata header is added). Write accordingly — there is no separate disclosure step.

---

**To:** sci-certification@greensoftware.foundation
**Subject:** SCI Self-Certification Submission — [Your Organization Name] — [Your Software Name]

---

## PART 1 — Applicant and Software

**Organization name:** [e.g. Acme Corporation]

**Contact name:** [Full name]

**Contact email:** [e.g. jane.smith@acme.com]

**Software name:** [Name of the application or service being measured]

**Software version:** [e.g. v2.1.0, or "commit abc123 deployed 2026-01-15"]

**Software description:**
[2-4 sentences: what it does, tech stack, hosting environment, rough scale.]

**Software URL:** [Link to application, docs, or repository — if public]

---

## PART 2 — Measurement Period and Score

**Measurement start date:** [YYYY-MM-DD]

**Measurement end date:** [YYYY-MM-DD]

**SCI score:** [Number with units, e.g. "349.63 gCO2eq per 1,000 API requests"]

---

## PART 3 — Software Boundary

### Included components

| Component | Description | Why included |
|-----------|-------------|--------------|
| [e.g. Application Servers] | [e.g. 2x EC2 t3.medium running Node.js] | [e.g. Core compute under our operational control] |
| ... | ... | ... |

### Excluded components

| Component | Description | Reason for exclusion |
|-----------|-------------|----------------------|
| [e.g. CDN] | [e.g. CloudFront distribution for static assets] | [e.g. Separate service outside operational boundary] |
| ... | ... | ... |

### Shared infrastructure [delete if not applicable]

| Shared component | How you allocated your share | Your allocation % or ratio |
|------------------|------------------------------|----------------------------|
| [e.g. Kubernetes cluster node] | [e.g. By vCPU reservation: 2 of 16 vCPUs] | [e.g. 12.5%] |

---

## PART 4 — Functional Unit (R)

**Functional unit:** [e.g. "1,000 API requests"]

**Why this unit?**
[How it connects to how your software scales or delivers value. See Applicant Guide Section 4.]

**How counted or measured:** [e.g. "Counted from nginx access logs, validated against CloudWatch request metrics."]

**Total units in measurement period:** [e.g. 45,000,000 requests]

---

## PART 5 — Energy (E)

**Total energy:** [e.g. "46.01 kWh"]

**PUE:** [e.g. 1.2 — or "N/A"]

**Energy breakdown by component:**

| Component | Energy (kWh) | How calculated or measured | Data source |
|-----------|-------------|---------------------------|-------------|
| [e.g. Application Servers] | [e.g. 21.6] | [e.g. 2 instances x 15W avg x 720h] | [e.g. AWS CloudWatch CPU metrics] |
| [e.g. Database] | [e.g. 14.4] | [e.g. 20W avg x 720h] | [e.g. RDS CloudWatch metrics] |
| ... | ... | ... | ... |

---

## PART 6 — Carbon Intensity (I)

**Carbon intensity:** [e.g. "340 gCO2eq/kWh"]

**Location(s):** [e.g. "AWS us-east-1 (Virginia, USA)"]

**Approach:** [Location-based / Market-based]

**Data source (with year):** [e.g. "EPA eGRID 2023, SRVC subregion"]

### Regional breakdown [delete if single-region]

| Region | % of workload | Carbon intensity (gCO2eq/kWh) | Data source |
|--------|--------------|-------------------------------|-------------|
| [e.g. us-east-1] | [e.g. 60%] | [e.g. 340] | [e.g. EPA eGRID 2023] |
| [e.g. eu-west-1] | [e.g. 40%] | [e.g. 280] | [e.g. EEA 2023] |

**Weighted average carbon intensity:** [show the calculation]

---

## PART 7 — Embodied Emissions (M)

**Total embodied emissions (allocated):** [e.g. "96,574.9 gCO2eq"]

*If M = 0, explain why (e.g. "Pure SaaS — no hardware under our operational control") and skip the table.*

**Hardware component breakdown:**

| Component | Total embodied (gCO2eq) | Expected lifespan | Time reserved | Resource share | Allocated M (gCO2eq) | Data source |
|-----------|------------------------|-------------------|---------------|----------------|---------------------|-------------|
| [e.g. App Server 1 — EC2 t3.medium] | [e.g. 1,200,000] | [e.g. 4 years] | [e.g. 720h] | [e.g. 100%] | [e.g. 24,658] | [e.g. Cloud Carbon Footprint] |
| ... | ... | ... | ... | ... | ... | ... |

---

## PART 8 — Methodology, Assumptions, and Limitations

**Overall approach:** [Measurement / Calculation / Hybrid]

**Methodology:**
[How you gathered data, what models or tools you used, and how you arrived at your SCI score.]

**Key assumptions:**

| Assumption | Justification | Impact (Low / Medium / High) |
|------------|---------------|------------------------------|
| [e.g. Server avg power draw is 15W] | [e.g. Based on AWS TDP at 40% utilization] | [e.g. Medium] |
| ... | ... | ... |

**Known limitations:**

| Limitation | Severity (Low / Medium / High) | Mitigation |
|------------|--------------------------------|------------|
| [e.g. No direct hardware power metering] | [e.g. Medium] | [e.g. Used cloud telemetry as proxy] |
| ... | ... | ... |

**Data sources:**

| Source | Description | URL (if available) |
|-------|-------------|--------------------|
| [e.g. AWS CloudWatch] | [e.g. CPU/memory telemetry, 5-min intervals] | [https://...] |
| [e.g. EPA eGRID 2023] | [e.g. US grid carbon intensity, SRVC subregion] | [https://...] |
| ... | ... | ... |

---

## PART 9 — Show Your Calculation

```
O = E x I = [your E] x [your I] = [result] gCO2eq
M = [your M] gCO2eq
R = [your total units] / [normalizer if any] = [result]

SCI = (O + M) / R = [result] per [your functional unit]
```

---

## PART 10 — Baseline Comparison [OPTIONAL — delete if this is your first measurement]

**Previous SCI score:** [value and unit]

**Previous certificate ID:** [e.g. GSF-SCI-2025-00123]

**New SCI score:** [value and unit]

**What changed and why:**
[Actions taken between measurements and what drove the score change.]

---

## PART 11 — Supporting Materials [OPTIONAL — not required but encouraged]

- [ ] Impact Framework manifest file (IMP/YAML)
- [ ] Spreadsheet with detailed calculations
- [ ] Links to public documentation or methodology write-ups

---

## PART 12 — Self-Certification Attestation

*Copy the attestation below as-is. Fill in the signature fields.*

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

- [ ] Part 1 — Organization and software details
- [ ] Part 2 — Measurement period and SCI score
- [ ] Part 3 — Included and excluded components with justifications/rationales
- [ ] Part 4 — Functional unit with rationale and measurement method
- [ ] Part 5 — Energy with per-component breakdown and data sources
- [ ] Part 6 — Carbon intensity with location, data source, and year
- [ ] Part 7 — Embodied emissions with hardware breakdown (or justification if zero)
- [ ] Part 8 — Methodology, assumptions, and limitations
- [ ] Part 9 — SCI calculation shown with arithmetic
- [ ] Part 12 — Attestation signed and dated
- [ ] All attachments referenced by filename in the relevant section
