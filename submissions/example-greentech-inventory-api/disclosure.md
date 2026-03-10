# SCI Self-Certification — Public Disclosure

> **This is an example public disclosure.** It shows what gets published to
> the `greensoftware-foundation/sci-certifications` GitHub repository after
> approval. It is the applicant's submission published as-is, with a
> certificate metadata header prepended and the contact email redacted.

| Field | Value |
|-------|-------|
| **Certificate ID** | GSF-SCI-2026-00001 |
| **Date Issued** | 2026-02-12 |
| **Valid Until** | 2027-02-12 |
| **Certificate URL** | [View certificate](https://badges.greensoftware.foundation/credentials/gsf-sci-2026-00001) |
| **Status** | Active |

---

## Section 1 — About You and Your Software

**Organization name:** GreenTech Solutions Ltd

**Contact name:** Sarah Chen

**Contact email:** *[redacted]*

**Software name:** Inventory Management API

**Software version:** v3.2.1 (commit e4a7f2b deployed 2025-12-18)

**Software description:**
A REST API providing real-time inventory management for retail and e-commerce businesses. Built with Python (FastAPI) and PostgreSQL, with Redis for caching and session management. Deployed on two AWS EC2 m5.large instances behind an Application Load Balancer in us-east-1 (Virginia, USA). Serves approximately 25 million API requests per month across 140 B2B customer accounts.

**Software URL:** https://github.com/greentech-solutions/inventory-api

---

## Section 2 — Your SCI Score

**Measurement start date:** 2026-01-01

**Measurement end date:** 2026-01-31

**Your SCI score:** 4.85 gCO2eq per 1,000 API requests

**Brief summary of the measurement:**
We measured the carbon intensity of our Inventory Management API over January 2026 (31 days, 744 hours). The calculation included application servers, database, cache, load balancer, and network data transfer. Energy was estimated from cloud provider telemetry (CPU utilization and instance specifications). Embodied emissions were allocated from lifecycle data for each hardware component using the time-share method. The resulting SCI is 4.85 gCO2eq per 1,000 API requests.

---

## Section 3 — Software Boundary

### Included components

| Component | Description | Why included |
|-----------|-------------|--------------|
| Application Server 1 | EC2 m5.large (2 vCPUs, 8 GB RAM) running FastAPI | Core compute — dedicated instance under our operational control |
| Application Server 2 | EC2 m5.large (2 vCPUs, 8 GB RAM) running FastAPI | Core compute — second instance for redundancy, under our operational control |
| PostgreSQL Database | RDS r6g.large (2 vCPUs, 16 GB RAM) | Dedicated database provisioned exclusively for this application |
| Redis Cache | ElastiCache r6g.medium (1 vCPU, 6.38 GB RAM) | Dedicated cache layer provisioned exclusively for this application |
| Application Load Balancer | AWS ALB distributing traffic across both app servers | Dedicated load balancer provisioned exclusively for this application |
| Network Data Transfer | ~1,500 GB/month of data transfer across all components | Material network energy consumption for API response payloads and inter-service traffic |

### Excluded components

| Component | Description | Reason for exclusion |
|-----------|-------------|----------------------|
| CloudFront CDN | CDN distribution serving static API documentation pages | Separate service with independent billing and management; handles only documentation traffic, not API requests; contributes <0.5% of total infrastructure cost |
| End-user devices | Client applications and devices making API calls | Beyond our operational control — clients are third-party B2B applications running on customer infrastructure |
| CI/CD pipeline | GitHub Actions build and deployment workflow | Runs only during deployments (~2 per week, ~15 minutes each); contributes <0.01% of monthly compute hours |
| Monitoring stack | DataDog APM and logging agents | Shared monitoring infrastructure across all GreenTech services; contributes <1% of total resource consumption for this application |

---

## Section 4 — Functional Unit (R)

**What is your functional unit?**
1,000 API requests

**Why did you choose this unit?**
API requests are the core unit of value our service delivers — each request represents an inventory query, update, or synchronisation operation for a customer. Request volume scales linearly with customer usage and is the natural measure of how much work the system performs. We normalise to 1,000 requests to produce a human-readable SCI value.

**How did you count or measure the total units?**
Counted from the FastAPI access logs aggregated in our DataDog logging pipeline. Validated against AWS ALB request count metrics in CloudWatch. The two sources agreed within 0.3%.

**Total units in measurement period:** 25,000,000 requests

---

## Section 5 — Energy (E) and Carbon Intensity (I)

**Total energy consumed:** 58.05 kWh (48.37 kWh before PUE)

**PUE applied:** 1.2 (based on AWS sustainability data for us-east-1 data centres)

**How was energy measured or estimated?**
Energy was estimated using a power-modelling approach. For each compute component, we obtained average CPU utilization from AWS CloudWatch over the measurement period, then estimated average power draw using the instance type's thermal design power (TDP) scaled by utilisation. The TDP-to-power scaling factors are from the Cloud Carbon Footprint methodology (linear interpolation model). Network energy was estimated using the Green Software Foundation's network energy coefficient (0.001 kWh/GB). PUE of 1.2 was applied to all components to account for data centre cooling and overhead.

**Energy breakdown by component:**

| Component | Avg Power (W) | Hours | Energy before PUE (kWh) | Energy after PUE (kWh) | How calculated | Data source |
|-----------|--------------|-------|------------------------|----------------------|----------------|-------------|
| App Server 1 (m5.large) | 15 | 744 | 11.160 | 13.392 | TDP 85W × 2/48 vCPU share × ~35% avg utilization scaling = ~15W avg | AWS CloudWatch CPU metrics (5-min intervals) |
| App Server 2 (m5.large) | 15 | 744 | 11.160 | 13.392 | Same model as App Server 1; utilization within 2% of Server 1 | AWS CloudWatch CPU metrics (5-min intervals) |
| PostgreSQL Database (r6g.large) | 22 | 744 | 16.368 | 19.642 | TDP for Graviton2 instance at ~40% avg CPU utilization = ~22W avg | AWS RDS CloudWatch metrics (CPU, connections, IOPS) |
| Redis Cache (r6g.medium) | 8 | 744 | 5.952 | 7.142 | TDP for Graviton2 instance at ~30% avg utilization = ~8W avg | AWS ElastiCache CloudWatch metrics |
| Load Balancer (ALB) | 3 | 744 | 2.232 | 2.678 | Estimated 3W constant draw for ALB handling ~9 req/s | AWS ALB documentation; Cloud Carbon Footprint ALB coefficient |
| Network Transfer | — | — | 1.500 | 1.800 | 1,500 GB × 0.001 kWh/GB = 1.5 kWh | GSF network energy coefficient; AWS CloudWatch NetworkOut metrics |
| **Total** | | | **48.372** | **58.046** | | |

### Carbon intensity

**Carbon intensity value:** 370 gCO2eq/kWh

**Location(s):** AWS us-east-1 (Northern Virginia, USA)

**Approach:** Location-based

**Data source + year:** EPA eGRID 2023, SRVC subregion (SERC Virginia/Carolina), published February 2025

---

## Section 6 — Embodied Emissions (M)

**Total embodied emissions allocated to this measurement:** 99,794.52 gCO2eq

**Allocation methodology:**
Embodied emissions were allocated using the standard time-share formula from ISO/IEC 21031:2024:

M = TE × (TiR / EL) × (RR / ToR)

Where:
- TE = Total embodied emissions over the full hardware lifecycle (from Cloud Carbon Footprint database)
- TiR = Time reserved = 744 hours (the measurement period)
- EL = Expected lifespan = 35,040 hours (4 years × 365 days × 24 hours)
- RR / ToR = Resource share = 1.0 for all components (all are dedicated instances)

The time-share factor is: 744 / 35,040 = 0.02123

**Hardware component breakdown:**

| Hardware component | Type | Total embodied TE (gCO2eq) | Expected lifespan | Time reserved | Resource share | Allocated M (gCO2eq) | Data source |
|--------------------|------|---------------------------|-------------------|---------------|----------------|---------------------|-------------|
| App Server 1 | EC2 m5.large | 1,100,000 | 4 years (35,040 h) | 744 h | 100% | 23,356.16 | Cloud Carbon Footprint — AWS m5 embodied emissions |
| App Server 2 | EC2 m5.large | 1,100,000 | 4 years (35,040 h) | 744 h | 100% | 23,356.16 | Cloud Carbon Footprint — AWS m5 embodied emissions |
| Database | RDS r6g.large | 1,400,000 | 4 years (35,040 h) | 744 h | 100% | 29,726.03 | Cloud Carbon Footprint — AWS r6g embodied emissions |
| Redis Cache | ElastiCache r6g.medium | 700,000 | 4 years (35,040 h) | 744 h | 100% | 14,863.01 | Cloud Carbon Footprint — AWS r6g embodied emissions |
| Load Balancer | AWS ALB | 400,000 | 4 years (35,040 h) | 744 h | 100% | 8,493.15 | Cloud Carbon Footprint — AWS ALB embodied emissions |
| **Total** | | **4,700,000** | | | | **99,794.52** | |

---

## Section 7 — Methodology and Calculation

**Overall approach:** Hybrid (measurement-derived utilisation data combined with power-modelling calculation)

**Describe your methodology:**
We used a hybrid approach combining measured utilisation data with power-modelling calculations. CPU utilisation was measured directly from AWS CloudWatch at 5-minute intervals over the 31-day measurement period. These utilisation values were converted to estimated power draw using the Cloud Carbon Footprint linear interpolation model, which maps CPU utilisation percentage to a fraction of the instance type's thermal design power (TDP). Network energy was estimated using the GSF's published coefficient of 0.001 kWh/GB. A PUE of 1.2 was applied to account for data centre cooling and infrastructure overhead. Carbon intensity was obtained from the EPA eGRID 2023 database for the SRVC subregion (Virginia). Embodied emissions were sourced from the Cloud Carbon Footprint database and allocated using the ISO/IEC 21031:2024 time-share methodology.

**Key assumptions:**

| Assumption | Justification | Impact on result (Low / Medium / High) |
|------------|---------------|----------------------------------------|
| App server average power draw is 15W per instance | Based on m5.large TDP (85W for host with 48 vCPUs), scaled to 2-vCPU share (~3.5W baseline), with 35% average CPU utilisation from CloudWatch producing ~15W via linear interpolation | Medium — a ±5W change shifts E by ~7.4 kWh and SCI by ~0.22 |
| Database average power draw is 22W | Based on r6g.large Graviton2 TDP scaled by 40% average utilisation from RDS CloudWatch | Medium — database is the largest single energy component |
| Redis cache average power draw is 8W | Based on r6g.medium TDP scaled by 30% average utilisation from ElastiCache CloudWatch | Low — smallest compute component |
| PUE of 1.2 for AWS us-east-1 | From AWS sustainability data for North American data centres. AWS reports a global PUE of 1.2; us-east-1 is a mature, large-scale facility | Low — well-documented by provider; a change to 1.15 or 1.25 shifts SCI by ~±2% |
| Server expected lifespan is 4 years | Standard refresh cycle for cloud provider server hardware, consistent with Cloud Carbon Footprint methodology and industry norms | Medium — a 3-year lifespan would increase M by ~33% |
| Network energy coefficient is 0.001 kWh/GB | From the GSF SCI Data project; represents average energy per GB for data centre networking | Low — network is <4% of total energy |

**Known limitations:**

| Limitation | Severity (Low / Medium / High) | Mitigation |
|------------|--------------------------------|------------|
| No direct hardware power metering | Medium | Used cloud provider CPU telemetry as proxy for power consumption. The TDP-to-power model is a well-established approximation but introduces estimation error of approximately ±10-15%. |
| Embodied emissions based on generic server lifecycle data, not actual manufacturing data for specific hardware | Medium | Used the Cloud Carbon Footprint database, which derives estimates from manufacturer-published LCA data and academic research. Instance-type-specific coefficients provide reasonable accuracy. |
| Carbon intensity is annual average, not time-of-use | Low | We used the annual average grid intensity for the SRVC subregion. Hourly marginal intensity would be more precise, but for a continuous-running service measured over a full month, the annual average is a reasonable approximation. |
| ALB power estimate is coarse | Low | The ALB is the smallest energy component (~2.2 kWh before PUE, ~4% of total). Even a 50% error in this estimate would shift the SCI by less than 0.05. |

**All data sources used:**

| Source name | Type | Description | URL (if available) |
|-------------|------|-------------|--------------------|
| AWS CloudWatch | Measurement | Cloud provider telemetry for CPU utilisation, memory, network I/O, and request counts. Sampled at 5-minute intervals. | https://aws.amazon.com/cloudwatch/ |
| Cloud Carbon Footprint | Database | Open-source database of embodied emissions and power coefficients for cloud infrastructure. Based on manufacturer LCA data and academic research. | https://www.cloudcarbonfootprint.org/ |
| EPA eGRID 2023 | Grid data | Official US power grid emissions data. Used SRVC (SERC Virginia/Carolina) subregion annual average for 2023. Published February 2025. | https://www.epa.gov/egrid |
| GSF SCI Data | Coefficient | Network energy coefficient (0.001 kWh/GB) from the Green Software Foundation's SCI open data project. | https://github.com/Green-Software-Foundation/sci-data |
| AWS Sustainability | Reference | PUE values for AWS data centres. Global PUE reported as 1.2. | https://sustainability.aboutamazon.com/ |

### Show your calculation

```
Energy (E):
  Component subtotal  = 11.160 + 11.160 + 16.368 + 5.952 + 2.232 + 1.500
                      = 48.372 kWh
  After PUE           = 48.372 × 1.2
                      = 58.046 kWh

Operational emissions (O) = E × I
                          = 58.046 kWh × 370 gCO2eq/kWh
                          = 21,477.17 gCO2eq

Embodied emissions (M)    = 23,356.16 + 23,356.16 + 29,726.03 + 14,863.01 + 8,493.15
                          = 99,794.52 gCO2eq

Functional units (R)       = 25,000,000 requests / 1,000
                          = 25,000

SCI = (O + M) / R         = (21,477.17 + 99,794.52) / 25,000
                          = 121,271.69 / 25,000
                          = 4.85 gCO2eq per 1,000 API requests
```

---

## Optional Attachments

- [x] Impact Framework manifest file (IMP/YAML) — see attached: `greentech-inventory-api-v3.2.1-sci.yml`

  Run with: `if-run --manifest greentech-inventory-api-v3.2.1-sci.yml`

  The manifest models each infrastructure component as a separate child node in the Impact Framework tree. A `system-total` child verifies the aggregate SCI score. The manifest independently computes the same SCI value (4.8509 gCO2eq, rounding to 4.85) from the raw inputs.

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

**Signature:** Sarah Chen

**Date:** 2026-02-01

**Name and title:** Sarah Chen, VP Engineering

**Organization:** GreenTech Solutions Ltd

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
