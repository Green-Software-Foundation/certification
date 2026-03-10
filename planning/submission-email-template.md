# SCI Self-Certification Submission — Email Template

Copy everything below the line into a new email addressed to **sci-certification@greensoftware.foundation** with the subject line shown. Replace all placeholder text in [square brackets] with your information. Delete the helper notes in *italics* as you go.

**Format:** You can answer inline in the email or attach documents (PDF, Word, Markdown, or plain text). If you use attachments, note the filename inline so the reviewer can match it — e.g., *"See attached: acme-api-boundary.pdf"*.

**This submission becomes your public disclosure.** If approved, it is published as-is to the `greensoftware-foundation/sci-certifications` GitHub repository (your contact email is redacted and a certificate metadata header is added). Write accordingly — there is no separate disclosure step.

---

**To:** sci-certification@greensoftware.foundation
**Subject:** SCI Self-Certification — [Your Organization Name] — [Your Software Name]

---

## Section 1 — About You and Your Software

**Organization name:** [e.g. Acme Corporation]

**Contact name:** [Full name]

**Contact email:** [e.g. jane.smith@acme.com]

**Software name:** [Name of the application or service being measured]

**Software version:** [e.g. v2.1.0, or "commit abc123 deployed 2026-01-15"]

**Software URL:** [Link to application, docs, or repository — if public, or "Internal"]

**What does it do?**
[2-3 sentences: what the software does, tech stack, where it runs]

---

## Section 2 — Your SCI Score

**SCI score:** [Number] [unit] per [functional unit]
*Example: 349.6 gCO2eq per 1,000 API requests*

**Measurement period:** [Start date] to [End date]
*Example: 2026-01-01 to 2026-03-31*

---

## Section 3 — Software Boundary

### What's included?

| Component | Brief description |
|-----------|------------------|
| [e.g. Application servers] | [e.g. 2x EC2 t3.medium running Node.js] |
| [e.g. Database] | [e.g. RDS PostgreSQL db.t3.medium] |

### What's excluded, and why?

| Component | Reason for exclusion |
|-----------|---------------------|
| [e.g. CDN] | [e.g. Separate service outside operational boundary] |

*Each exclusion needs a system-specific rationale. "Not included" or "out of scope" is not sufficient.*

### Shared infrastructure

*Does any included component run on shared infrastructure? If yes, state what is shared and how you allocated your share. If no, write "No shared infrastructure."*

[e.g. "App servers run on a shared Kubernetes cluster. Allocated by vCPU reservation: 2 of 16 vCPUs = 12.5%."]

---

## Section 4 — Functional Unit (R)

**Functional unit:** [e.g. 1,000 API requests]

**Why this unit:** [e.g. Primary measure of how the service delivers value]

**How counted:** [e.g. nginx access logs, validated against CloudWatch]

**Total in measurement period:** [e.g. 45,000,000 requests]

---

## Section 5 — Energy (E) and Carbon Intensity (I)

### Energy

**Total energy:** [e.g. 46.01 kWh]

**PUE applied:** [e.g. 1.2, or "N/A — cloud provider"]

| Component | Energy (kWh) | Data source |
|-----------|-------------|-------------|
| [e.g. Application servers] | [e.g. 21.6] | [e.g. AWS CloudWatch CPU metrics -> TDP model] |
| [e.g. Database] | [e.g. 14.4] | [e.g. RDS CloudWatch metrics] |

### Carbon intensity

**Carbon intensity:** [e.g. 340 gCO2eq/kWh]

**Location(s):** [e.g. AWS us-east-1 (Virginia, USA)]

**Approach:** [Location-based / Market-based]

**Data source + year:** [e.g. EPA eGRID 2023, SRVC subregion]

*If multi-region, add a row per region:*

| Region | % of workload | gCO2eq/kWh | Source |
|--------|--------------|------------|--------|
| [e.g. us-east-1] | [e.g. 60%] | [e.g. 340] | [e.g. EPA eGRID 2023] |

---

## Section 6 — Embodied Emissions (M)

**Total embodied (allocated):** [e.g. 96,574.9 gCO2eq]

*If M = 0, explain why (e.g. "Pure SaaS — no hardware under our operational control") and skip the table.*

| Component | Allocated M (gCO2eq) | Data source |
|-----------|---------------------|-------------|
| [e.g. App server — EC2 t3.medium] | [e.g. 24,658] | [e.g. Cloud Carbon Footprint] |

---

## Section 7 — Methodology and Calculation

**Approach:** [Measurement / Calculation / Hybrid]

**How you calculated your score:**
[Paragraph or bullet points: what tools/models you used, how you gathered data, key decisions you made.]

**Assumptions and limitations:**

| Assumption or limitation | Justification or mitigation |
|--------------------------|----------------------------|
| [e.g. Server avg power draw is 15W] | [e.g. Based on AWS TDP at 40% avg utilization] |
| [e.g. No direct hardware power metering] | [e.g. Used cloud telemetry as proxy] |

*Include at least one specific assumption and one specific limitation.*

**Show your calculation:**

```
E x I = [E] x [I] = [result] gCO2eq
M = [M] gCO2eq
R = [total units]

SCI = (E x I + M) / R = [result] [unit] per [functional unit]
```

---

## Attestation

*Copy the attestation below as-is. Fill in the signature fields.*

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

## Optional Attachments

You may attach supporting materials such as a spreadsheet with detailed calculations, an Impact Framework manifest file (IMP/YAML), or links to public documentation. These are encouraged but not required — the questionnaire above is sufficient.

---

## Submission Checklist

- [ ] Section 1 — Organization and software details
- [ ] Section 2 — SCI score with units and measurement period
- [ ] Section 3 — Included and excluded components with rationales
- [ ] Section 4 — Functional unit with rationale and measurement method
- [ ] Section 5 — Energy with per-component breakdown; carbon intensity with source and year
- [ ] Section 6 — Embodied emissions with breakdown (or justification if zero)
- [ ] Section 7 — Methodology, assumptions, limitations, and calculation shown
- [ ] Attestation — Signed and dated
