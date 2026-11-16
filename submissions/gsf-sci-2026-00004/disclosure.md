# SCI Self-Certification — Public Disclosure

| Field | Value |
|-------|-------|
| **Certificate ID** | GSF-SCI-2026-00004 |
| **Date Issued** | [TO COMPLETE: YYYY-MM-DD] |
| **Valid Until** | [TO COMPLETE: YYYY-MM-DD] |
| **Certificate URL** | [View certificate](https://badges.greensoftware.foundation/awards/sci/gsf-sci-2026-00004) |
| **Status** | Active |

---

## Section 1 — About You and Your Software

**Organization name:** GreenInsight

**Contact name:** Houssem Ben Malek

**Contact email:** *[redacted]*

**Software name:** GreenInsight

**Software version:** SaaS, Production Release v1.0 (October 2026)

**Software URL:** https://greeninsight.online/

**Software description:**

GreenInsight is an enterprise SaaS platform for corporate carbon accounting, ESG reporting and regulatory compliance (GHG Protocol, IFRS S1/S2, CBAM). It ingests activity data, runs deterministic and auditable emissions calculations ("Glass Box" methodology) and generates sustainability disclosures. The backend runs on Supabase (PostgreSQL, authentication, storage, Edge Functions) in AWS eu-west-1 (Ireland). The frontend is hosted on Hostinger (France).

---

## Section 2 — Your SCI Score

**Your SCI score:** 171.28 gCO2eq per active user per month

**Measurement start date:** 2026-10-01

**Measurement end date:** 2026-10-31

**Measurement period:** 2026-10-01 to 2026-10-31

---

## Section 3 — Software Boundary

### Included Components

| Component | Description |
|-----------|-------------|
| Database & Storage | Supabase managed PostgreSQL, Free plan, Nano compute (documented as shared CPU, up to 0.5 GB RAM; core count not published), AWS eu-west-1 (Ireland) |
| Application & Backend Services | Supabase Edge Functions and PostgREST API (business logic, calculation engine), eu-west-1 |
| Frontend Hosting | Static web application on Hostinger shared web hosting (France) |

### Excluded Components

| Component | Reason for exclusion |
|-----------|----------------------|
| End-user devices (PCs, smartphones) | Owned and operated by customers, outside our control. Disclosed as a limitation. |
| Internet delivery of traffic to end users | The CCF methodology covers only data exchanged between data centers and ignores traffic to end users. Disclosed as a limitation with an order-of-magnitude estimate. |
| Storage energy | Stored data is below the Supabase Free plan caps (500 MB database, 1 GB files); effect below 1 gCO2e per month, not added to the score. |
| Third-party AI/OCR APIs | No provider-level energy data available. Disclosed as a limitation, not assumed to be zero. |
| Offices and developer workstations | Not part of runtime service delivery to active users. |

### Shared infrastructure

Shared infrastructure components (Supabase shared database and Hostinger shared server) are allocated on a conservative reserved-resource basis (1 vCPU equivalent each) within the system boundary, as runtime utilization was not directly measured.

---

## Section 4 — Functional Unit (R)

**What is your functional unit?**

1 monthly active user

**Why did you choose this unit?**

Monthly active users represent how the platform delivers its core value (carbon dashboards, data ingestion, ESG reporting workspaces).

**How did you count or measure the total units?**

Authentication and activity records (Supabase audit logs) over the measurement period. An active user in the Supabase records is defined as any unique authenticated user account that performs at least one logged action or session sign-in within the measurement period.

**Total units in measurement period:** 10 active users

---

## Section 5 — Energy (E) and Carbon Intensity (I)

### Energy

**Total energy consumed:** 4.916 kWh

**PUE applied:** Supabase 1.135 (CCF value for AWS). Hostinger 1.58, used as a non-provider-specific modeling assumption based on an Uptime Institute industry benchmark as cited by Climatiq (survey year not stated in that source). This is not a measured Hostinger PUE and not a CCF coefficient.

**Method:** CCF power model (minimum/maximum watts per vCPU, memory coefficient) applied to the estimated allocation below, multiplied by PUE.

Resources: published limits, estimated allocation, actual utilization

| Provider | Published specification or plan limits | Estimated allocation used in the model (modeling assumption) | Actual utilization |
|----------|----------------------------------------|--------------------------------------------------------------|--------------------|
| Supabase (Nano) | CPU "shared" (core count not published); memory up to 0.5 GB | 1 vCPU-equivalent + 0.5 GB RAM | Not measured; CCF fallback of 50% CPU utilization applied |
| Hostinger (web hosting) | Plan limits: 1 CPU core, 1 GB RAM, on a shared server (limits are not dedicated resources) | 1 vCPU + 1 GB RAM attributed to GreenInsight (this overstates its share of a shared server) | Not measured; CCF fallback of 50% CPU utilization applied |

Energy breakdown

| Component | Duration | Power (incremental) | Energy after PUE (kWh) | How calculated |
|-----------|----------|---------------------|------------------------|----------------|
| Supabase database compute + memory (Ireland) | 744 h | 2.316 W | 1.956 | CCF AWS averages: 0.74 W min, 3.50 W max; 50% utilization: 0.74 + 0.5 x (3.50 - 0.74) = 2.12 W per vCPU; 1 vCPU = 2.12 W; memory 0.5 GB x 0.392 W/GB = 0.196 W; total 2.316 W x 744 h = 1.723 kWh; x PUE 1.135 |
| Supabase Edge Functions / API (Ireland) | 2.78 vCPU-h | 2.12 W per vCPU | 0.007 | Modeling assumption: 50,000 invocations x 0.2 s = 2.78 vCPU-h x 2.12 W x PUE 1.135 (not exported measurements) |
| Hostinger frontend (France) | 744 h | 2.512 W | 2.953 | (1 x 2.12 + 1 x 0.392) W = 2.512 W x 744 h = 1.869 kWh; x PUE 1.58 |

Supabase (Ireland) subtotal: 1.963 kWh. Hostinger (France): 2.953 kWh.

### Carbon intensity

**Carbon intensity value:** 305 gCO2eq/kWh (Supabase, Ireland) and 74 gCO2eq/kWh (Hostinger, France); effective combined intensity 166.24 gCO2eq/kWh by energy weight (817.24 / 4.916, informative)

**Location(s):** AWS eu-west-1 (Ireland) for Supabase; France for Hostinger

**Approach:** Location-based

**Data source + year:** EEA electricity emission intensity, as published in Cloud Carbon Footprint (CCF) methodology Appendix V (https://www.cloudcarbonfootprint.org/docs/methodology/), based on the underlying EEA grid average dataset covering years up to 2022.

| Region | Component | gCO2eq/kWh | Source |
|--------|-----------|------------|--------|
| Ireland (AWS eu-west-1) | Supabase | 305 | EEA electricity emission intensity, as published in CCF methodology Appendix V (eu-west-1) |
| France | Hostinger | 74 | EEA electricity emission intensity, as published in CCF methodology Appendix V (eu-west-3, used as the French national factor) |

Both values are in gCO2e/kWh, from the same source and unit.

---

## Section 6 — Embodied Emissions (M)

**Total embodied emissions allocated to this measurement:** 895.60 gCO2eq

**Allocation methodology:** Exploratory proxy estimate, not a measured or provider-specific value. CCF embodied-emissions factor for AWS t4g.large (Graviton2), 2 vCPU, 0.001203775313 kgCO2e per instance-hour (as published by Climatiq, derived from CCF models, 2021) = 1.2038 gCO2e per instance-hour. Neither Supabase Nano nor Hostinger hardware is documented as equivalent to this instance. The factor is therefore converted to a per-vCPU-hour proxy and applied to the estimated allocation over 744 hours: 1.2038 / 2 = 0.6019 gCO2e per vCPU-hour.

Hardware component breakdown

| Hardware component | Allocated M (gCO2eq) | Data source |
|--------------------|----------------------|-------------|
| Supabase compute (Ireland) | 447.80 | CCF per-vCPU-hour proxy (AWS t4g.large via Climatiq, 2021): 0.6019 g x 744 h x 1 vCPU-equivalent |
| Hostinger hosting (France) | 447.80 | CCF per-vCPU-hour proxy (AWS t4g.large via Climatiq, 2021): 0.6019 g x 744 h x 1 vCPU |

The Dell PowerEdge R740 LCA (8,640 kgCO2e, high uncertainty) was reviewed but not used, because it is not specific to the providers' hardware.

---

## Section 7 — Methodology and Calculation

**Overall approach:** Calculation (cloud modeling from published provider specifications)

**Describe your methodology:**

- E: CCF power model applied to the estimated allocation of each provider, multiplied by PUE.
- I: Location-based factors per site (Ireland for Supabase, France for Hostinger), same source and unit.
- M: Per-vCPU-hour proxy derived from a CCF embodied-emissions factor, applied over 744 hours to the estimated allocation.
- R: Number of monthly active users.

**Show your calculation:**

```
E x I = 1.963 x 305 + 2.953 x 74 = 598.72 + 218.52 = 817.24 gCO2eq
M = 447.80 + 447.80 = 895.60 gCO2eq
R = 10 active users

SCI = (E x I + M) / R = (817.24 + 895.60) / 10 = 171.28 gCO2eq per active user per month
```

**Assumptions and limitations:**

| Assumption or limitation | Justification or mitigation |
|--------------------------|-----------------------------|
| Resource allocation is a modeling assumption: published information gives no core count for Supabase Nano and only plan limits for Hostinger shared hosting. Provider resources are attributed on a conservative reserved-resource basis (1 vCPU equivalent each), not by measured share of use. Sensitivity: with 2 vCPU-equivalents for Supabase the score would be about 270.66. | Stated explicitly; to be replaced by provider data or measured utilization |
| 50% CPU utilization is the CCF fallback value, not a measurement | To be replaced by measured utilization |
| 50,000 invocations and 0.2 s duration are modeling assumptions | To be replaced by exported measurements in the next period |
| Hostinger PUE (1.58) is an industry-average assumption, not provider-specific | No provider-published value available |
| CCF AWS average CPU coefficients are used for both providers; memory is added for all allocated memory, whereas CCF applies a memory term only above a reference level | Generic, documented coefficients; effect small |
| Grid factors are EEA values listed by CCF (gCO2e), covering years up to 2022. Sensitivity: with 2024 national figures (224 gCO2/kWh Ireland, EPA, CO2 only; 21.7 gCO2e/kWh France, RTE) the score would be 139.94 | Same source and unit used for both sites; alternative disclosed |
| Embodied emissions are an exploratory proxy (2021 CCF factor for AWS t4g.large, converted per vCPU); not provider-specific | Closest documented factor; disclosed for review |
| Internet delivery of traffic (reported below 1 GB) is excluded; at an order of magnitude of 0.1 kWh/GB it would add about 1% to the total | CCF does not cover end-user traffic |
| Storage energy (below 1 gCO2e per month at plan caps) is not added | Negligible effect, disclosed |
| Third-party AI/OCR APIs and end-user devices are not quantified | No attributable data available; disclosed, not assumed zero |
| Low user count (10): the score is dominated by fixed infrastructure | Re-measured each period as usage changes |

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

**Signature:** /s/ Houssem Ben Malek

**Date:** 2026-11-08

**Name and title:** Houssem Ben Malek, Founder

**Organization:** GreenInsight

---

## Community Participation (Optional)

**May we feature your organisation?**

- [x] Yes — you may display our organisation name and logo on the GSF certified organisations page
- [ ] No thank you

Logo attached (PNG/SVG, at least 200px wide).

**Would you participate in a blog post or case study?**

- [x] Yes — we'd be open to participating in a blog post or case study
- [ ] No thank you

**May we use your disclosure for downstream analysis?**

- [x] Yes — you may use our published disclosure for downstream analysis, including AI syntheses
- [ ] No thank you

---

## Submission Checklist

- [x] Section 1 — Organization and software details
- [x] Section 2 — SCI score with units and measurement period
- [x] Section 3 — Included and excluded components with rationales
- [x] Section 4 — Functional unit with rationale and measurement method
- [x] Section 5 — Energy with per-component breakdown; carbon intensity with source and year
- [x] Section 6 — Embodied emissions with allocation method and breakdown (or justification if zero)
- [x] Section 7 — Methodology, assumptions, limitations, and calculation shown
- [x] Attestation — Signed and dated
