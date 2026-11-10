# SCI Self-Certification Submission — Email Template

Copy everything below the line into a new email addressed to **sci-certification@greensoftware.foundation** with the subject line shown. Replace all placeholder text in [square brackets] with your information. Delete the helper notes in *italics* as you go.

**Format:** You can answer inline in the email or attach documents (PDF, Word, Markdown, or plain text). If you use attachments, note the filename inline so the reviewer can match it — e.g., *"See attached: acme-api-boundary.pdf"*.

**This submission becomes your public disclosure.** If approved, it is published as-is to the `greensoftware-foundation/certification` GitHub repository (your contact email is redacted and a certificate metadata header is added). Write accordingly — there is no separate disclosure step.

**Keep the headings, bold field labels and table column headers exactly as written.** The certificate page on badges.greensoftware.foundation reads your published disclosure by matching these labels, so renaming, merging or removing them stops fields from rendering on your badge page. Add extra detail beneath any field, as notes or additional tables, rather than changing the label. Keep the "—" in each "## Section N —" heading, and leave a blank line after each heading and bold label.

---

**To:** sci-certification@greensoftware.foundation

**Subject:** "SCI Self-Certification - [Your Organization Name] - [Your Software Name]"

---

## Section 1 — About You and Your Software

**Organization name:** [e.g. Acme Corporation]

**Contact name:** [Full name]

**Contact email:** [e.g. jane.smith@acme.com]

**Software name:** [Name of the application or service being measured]

**Software version:** [e.g. v2.1.0, or "commit abc123 deployed 2026-01-15"]

**Software URL:** [Link to application, docs, or repository if public, or "Internal"]

**Software description:**

[2-3 sentences: what the software does, tech stack, where it runs]

*Write this as a single paragraph with no line breaks. Only the first line is shown on your certificate page.*

---

## Section 2 — Your SCI Score

**Your SCI score:** [Number] [unit] per [functional unit]

*Example: 349.6 gCO2eq per 1,000 API requests*

*Start with a plain decimal number followed by a space and the unit. Do not use thousands separators (write 1349.6, not 1,349.6) or scientific notation (write 0.000000515, not 5.15 × 10⁻⁷). Your certificate page cannot be generated if the score is not in this format.*

**Measurement start date:** [YYYY-MM-DD]

**Measurement end date:** [YYYY-MM-DD]

*Example: 2026-01-01 and 2026-03-31. Use the YYYY-MM-DD format and give both dates as separate fields, even for a single-day benchmark.*

---

## Section 3 — Software Boundary

### Included Components

| Component | Description |
|-----------|-------------|
| [e.g. Application servers] | [e.g. 2x EC2 t3.medium running Node.js] |
| [e.g. Database] | [e.g. RDS PostgreSQL db.t3.medium] |

### Excluded Components

| Component | Reason for exclusion |
|-----------|----------------------|
| [e.g. CDN] | [e.g. Separate service outside operational boundary] |

*Each exclusion needs a system-specific rationale. "Not included" or "out of scope" is not sufficient.*

### Shared infrastructure

[Describe any included component that runs on shared or multi-tenant infrastructure and how its energy and embodied emissions were allocated to your software. If nothing is shared, say so and explain why, e.g. "No included component runs on shared infrastructure; all compute is on dedicated hosts."]

---

## Section 4 — Functional Unit (R)

**What is your functional unit?**

[e.g. 1,000 API requests]

**Why did you choose this unit?**

[e.g. Primary measure of how the service delivers value]

**How did you count or measure the total units?**

[e.g. nginx access logs, validated against CloudWatch]

**Total units in measurement period:** [e.g. 45,000,000 requests]

---

## Section 5 — Energy (E) and Carbon Intensity (I)

### Energy

**Total energy consumed:** [e.g. 46.01 kWh]

**PUE applied:** [e.g. 1.2, or "N/A, cloud provider"]

Energy breakdown

| Component | Duration | Power (incremental) | Energy after PUE (kWh) | How calculated |
|-----------|----------|---------------------|------------------------|----------------|
| [e.g. Application servers] | [e.g. 720 h] | [e.g. 30 W avg] | [e.g. 21.6] | [e.g. AWS CloudWatch CPU metrics -> TDP model] |
| [e.g. Database] | [e.g. 720 h] | [e.g. 20 W avg] | [e.g. 14.4] | [e.g. RDS CloudWatch metrics] |

### Carbon intensity

**Carbon intensity value:** [e.g. 340 gCO2eq/kWh]

**Location(s):** [e.g. AWS us-east-1 (Virginia, USA)]

**Approach:** [Location-based / Market-based]

**Data source + year:** [e.g. EPA eGRID 2023, SRVC subregion]

*If multi-region, add a row per region:*

| Region | Component | gCO2eq/kWh | Source |
|--------|-----------|------------|--------|
| [e.g. us-east-1] | [e.g. Application servers] | [e.g. 340] | [e.g. EPA eGRID 2023] |

---

## Section 6 — Embodied Emissions (M)

**Total embodied emissions allocated to this measurement:** [e.g. 96,574.9 gCO2eq]

**Allocation methodology:** [e.g. SCI time-share allocation (M = TE x (TiR / EL) x RS), using Cloud Carbon Footprint embodied coefficients]

*If M = 0, explain why in the allocation methodology (e.g. "Pure SaaS, no hardware under our operational control") and skip the table.*

Hardware component breakdown

| Hardware component | Allocated M (gCO2eq) | Data source |
|--------------------|----------------------|-------------|
| [e.g. App server, EC2 t3.medium] | [e.g. 24,658] | [e.g. Cloud Carbon Footprint] |

---

## Section 7 — Methodology and Calculation

**Overall approach:** [Measurement / Calculation / Hybrid]

**Describe your methodology:**

[What tools/models you used, how you gathered data, key decisions you made. If different methods were used for different components, please give component-wise descriptions]

*Write this as a single paragraph with no line breaks. Only the first line is shown on your certificate page, so numbered or bulleted lists will be cut off after the first item. Put extra detail in the assumptions table or an attachment.*

**Show your calculation:**

```
E x I = [E] x [I] = [result] gCO2eq
M = [M] gCO2eq
R = [total units]

SCI = (E x I + M) / R = [result] [unit] per [functional unit]
```

**Assumptions and limitations:**

| Assumption or limitation | Justification or mitigation |
|--------------------------|-----------------------------|
| [e.g. Server avg power draw is 15W] | [e.g. Based on AWS TDP at 40% avg utilization] |
| [e.g. No direct hardware power metering] | [e.g. Used cloud telemetry as proxy] |

*Include at least one specific assumption and one specific limitation.*

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

## Community Participation (Optional)

*These are entirely optional and have no effect on your application or review. You can change your mind at any time by emailing us.*

**May we feature your organisation?**

We maintain a public page of certified organisations to help grow the SCI community. If you opt in, your organisation name and logo will appear on our "Certified Organisations" page alongside other certificate holders.

- [ ] Yes — you may display our organisation name and logo on the GSF certified organisations page
- [ ] No thank you

*If yes, please attach your organisation logo (SVG or PNG, minimum 200px wide) or let us know where to find it.*

**Would you participate in a blog post or case study?**

We'd love to share your SCI measurement journey with the community — what you learned, what worked, and what was challenging.

- [ ] Yes — we'd be open to participating in a blog post or case study
- [ ] No thank you

**May we use your disclosure for downstream analysis?**

Your published disclosure may be included in aggregate analyses, research, and AI-generated syntheses (e.g., benchmarking reports, trend summaries, or training data for sustainability tools). Your disclosure is already published publicly, but this opt-in confirms you are happy for it to be used in these ways.

- [ ] Yes — you may use our published disclosure for downstream analysis, including AI syntheses
- [ ] No thank you

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
- [ ] Section 6 — Embodied emissions with allocation method and breakdown (or justification if zero)
- [ ] Section 7 — Methodology, assumptions, limitations, and calculation shown
- [ ] Attestation — Signed and dated
