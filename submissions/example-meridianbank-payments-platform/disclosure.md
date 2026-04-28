# SCI Self-Certification — Public Disclosure

> **This is an example public disclosure.** It shows what gets published to
> the `greensoftware-foundation/sci-certifications` GitHub repository after
> approval. It is the applicant's submission published as-is, with a
> certificate metadata header prepended and the contact email redacted.

| Field | Value |
|-------|-------|
| **Certificate ID** | GSF-SCI-2026-00003 |
| **Date Issued** | 2026-05-08 |
| **Valid Until** | 2027-05-08 |
| **Certificate URL** | [View certificate](https://badges.greensoftware.foundation/credentials/gsf-sci-2026-00003) |
| **Status** | Active |

---

## Section 1 — About You and Your Software

**Organization name:** Meridian Bank Plc

**Contact name:** Helena Okonkwo

**Contact email:** *[redacted]*

**Software name:** Meridian Payments Platform

**Software version:** v8.4.2 (release 2026.03 — deployed 2026-02-15)

**Software description:**
A real-time retail and commercial payments platform handling card-not-present, faster-payments (UK FPS), and SEPA transactions for Meridian Bank's UK and EEA customer base. Built on Java/Spring Boot microservices with Oracle 19c on the data tier and Apache Kafka on the messaging tier. Deployed in a hybrid configuration: primary site at Meridian's on-premises Slough data centre running the live workload; an active-passive disaster-recovery site at AWS eu-west-2 (London) running Kafka MirrorMaker and an RDS read replica for failover. The platform is subject to PRA and FCA operational resilience requirements; the DR site is therefore part of the production environment and is included in this measurement.

**Software URL:** Internal (regulated banking infrastructure — no public URL)

---

## Section 2 — Your SCI Score

**Measurement start date:** 2026-03-01

**Measurement end date:** 2026-03-31

**Your SCI score:** 17.85 gCO2eq per 10,000 transactions

---

## Section 3 — Software Boundary

### Included components

| Component | Description | Why included |
|-----------|-------------|--------------|
| On-prem application server 1 | Dell PowerEdge R650, 2× Xeon Gold 6354, 256 GB RAM, running Spring Boot microservices | Core compute — dedicated rack assignment to the Payments Platform |
| On-prem application server 2 | Dell PowerEdge R650, identical to server 1 | Core compute — dedicated rack assignment |
| On-prem application server 3 | Dell PowerEdge R650, identical to server 1 | Core compute — dedicated rack assignment |
| On-prem application server 4 | Dell PowerEdge R650, identical to server 1 | Core compute — dedicated rack assignment |
| On-prem application server 5 | Dell PowerEdge R650, identical to server 1 | Core compute — dedicated rack assignment |
| On-prem application server 6 | Dell PowerEdge R650, identical to server 1 | Core compute — dedicated rack assignment |
| On-prem database server 1 | Dell PowerEdge R750, 2× Xeon Platinum 8358, 1 TB RAM, Oracle 19c | Dedicated database server, primary node |
| On-prem database server 2 | Dell PowerEdge R750, identical, Oracle 19c standby | Dedicated database server, sync standby |
| On-prem Kafka node 1 | Dell PowerEdge R650 running Apache Kafka 3.7 | Dedicated Kafka broker, transaction event log |
| On-prem Kafka node 2 | Dell PowerEdge R650 | Dedicated Kafka broker |
| On-prem Kafka node 3 | Dell PowerEdge R650 | Dedicated Kafka broker |
| On-prem Kafka node 4 | Dell PowerEdge R650 | Dedicated Kafka broker |
| On-prem storage array | NetApp FAS9500, ~250 TB usable capacity | Dedicated storage chassis serving database and Kafka data |
| AWS Kafka mirror 1 | EC2 c6i.4xlarge running Kafka MirrorMaker 2 | DR replication consumer — production failover infrastructure under PRA operational resilience requirements |
| AWS Kafka mirror 2 | EC2 c6i.4xlarge running Kafka MirrorMaker 2 | Second DR replication consumer for redundancy |
| AWS RDS read replica | RDS db.r6i.2xlarge Oracle Standard Edition Two | Hot standby database read replica — production DR infrastructure |

### Excluded components

| Component | Description | Reason for exclusion |
|-----------|-------------|----------------------|
| Internal corporate network | Bank-wide MPLS WAN | Shared infrastructure across all bank functions; no defensible per-application allocation; regulator considers this "below the boundary" of operational software |
| Card-network connectivity | Visa/Mastercard direct connections | Provided by card networks; outside Meridian's operational control |
| Customer end-user devices | Cards, POS terminals, mobile banking apps on customer phones | Beyond Meridian's operational control |
| HSM appliances | Hardware Security Modules for cryptographic operations | Shared across all bank applications including unrelated regulatory reporting; allocation impractical and contributes <1% of facility load per facility metering |
| Backup tape library | Long-term archive (offline) | Idle during measurement period; powered only during weekly backup runs (~4 hours/week); contributes <0.05% of facility energy |
| AWS Direct Connect | DR-site network connectivity | Shared with three other Meridian regulated workloads; per-application allocation not feasible |

### Shared infrastructure

The Slough on-premises facility hosts other Meridian Bank workloads alongside the Payments Platform. Power and embodied emissions are allocated to the Payments Platform on the basis of dedicated rack assignment — every server, storage, and network element listed above is exclusively assigned to this platform and is not multi-tenanted. Cooling, power distribution, and shared facility overhead are captured through the facility-level PUE of 1.45 applied to all listed components. The AWS DR site uses dedicated VPC and dedicated EC2/RDS instances; no allocation is required there.

---

## Section 4 — Functional Unit (R)

**What is your functional unit?**
10,000 transactions

**Why did you choose this unit?**
A transaction is the fundamental billable and regulatory unit for a payments platform — it is what we count for revenue, capacity planning, regulatory reporting, and customer-impact analysis. Transaction volume is the linear driver of platform load. We normalise to 10,000 transactions to produce an SCI value that is meaningful at the scale at which payments operations professionals reason about their systems.

**How did you count or measure the total units?**
Transaction counts were aggregated from the platform's authoritative ledger — the Oracle `transactions_audit` table — over the 31-day measurement period. The count was independently reconciled against the upstream Kafka topic (`tx.completed`) message count and against monthly regulatory reporting (the FCA SUP 16.13 monthly return), which all agreed within 0.05%.

**Total units in measurement period:** 280,000,000 transactions (280 million)

---

## Section 5 — Energy (E) and Carbon Intensity (I)

**Total energy consumed:** 3,663.27 kWh (2,566.80 kWh before PUE adjustments)

**PUE applied:**
- On-prem (Slough): 1.45 (measured 2025 annualised facility average from the BMS)
- AWS eu-west-2: 1.135 (Amazon Web Services published 2024 figure for eu-west-2)

**How was energy measured or estimated?**
For the on-premises components, energy was measured using rack-PDU metering (Raritan PX3) at the per-rack level, with allocation to per-server based on iDRAC power telemetry collected over the measurement period. For the AWS components, energy was estimated from CPU utilisation telemetry (CloudWatch) using TDP-scaled coefficients from the Cloud Carbon Footprint methodology. PUE was applied uniformly within each site. Storage power was measured at the appliance level via the NetApp Active IQ telemetry feed.

**Energy breakdown by component:**

| Component | Avg Power (kW) | Hours | Energy before PUE (kWh) | Energy after PUE (kWh) | How calculated | Data source |
|-----------|---------------|-------|------------------------|----------------------|----------------|-------------|
| On-prem app server 1 (R650) | 0.250 | 744 | 186.00 | 269.70 | iDRAC mean power telemetry (60% utilisation observed) | iDRAC + PDU metering |
| On-prem app server 2 (R650) | 0.250 | 744 | 186.00 | 269.70 | Same | iDRAC + PDU metering |
| On-prem app server 3 (R650) | 0.250 | 744 | 186.00 | 269.70 | Same | iDRAC + PDU metering |
| On-prem app server 4 (R650) | 0.250 | 744 | 186.00 | 269.70 | Same | iDRAC + PDU metering |
| On-prem app server 5 (R650) | 0.250 | 744 | 186.00 | 269.70 | Same | iDRAC + PDU metering |
| On-prem app server 6 (R650) | 0.250 | 744 | 186.00 | 269.70 | Same | iDRAC + PDU metering |
| On-prem DB server 1 (R750) | 0.300 | 744 | 223.20 | 323.64 | iDRAC mean power telemetry (70% utilisation) | iDRAC + PDU metering |
| On-prem DB server 2 (R750) | 0.300 | 744 | 223.20 | 323.64 | Same | iDRAC + PDU metering |
| On-prem Kafka 1 (R650) | 0.150 | 744 | 111.60 | 161.82 | iDRAC mean power telemetry (35% utilisation) | iDRAC + PDU metering |
| On-prem Kafka 2 (R650) | 0.150 | 744 | 111.60 | 161.82 | Same | iDRAC + PDU metering |
| On-prem Kafka 3 (R650) | 0.150 | 744 | 111.60 | 161.82 | Same | iDRAC + PDU metering |
| On-prem Kafka 4 (R650) | 0.150 | 744 | 111.60 | 161.82 | Same | iDRAC + PDU metering |
| On-prem storage (FAS9500) | 0.500 | 744 | 372.00 | 539.40 | NetApp Active IQ appliance-level metering | NetApp Active IQ |
| AWS Kafka mirror 1 (c6i.4xlarge) | 0.080 | 744 | 59.52 | 67.56 | TDP scaled by ~25% mean CPU utilisation | CloudWatch CPU metrics, Cloud Carbon Footprint |
| AWS Kafka mirror 2 (c6i.4xlarge) | 0.080 | 744 | 59.52 | 67.56 | Same | CloudWatch CPU metrics, Cloud Carbon Footprint |
| AWS RDS read replica (db.r6i.2xlarge) | 0.090 | 744 | 66.96 | 76.00 | TDP scaled by ~30% mean CPU utilisation | RDS CloudWatch metrics, Cloud Carbon Footprint |
| **Total** | | | **2,566.80** | **3,663.27** | | |

### Carbon intensity

**Carbon intensity value:** 25 gCO2eq/kWh (on-prem); 50 gCO2eq/kWh (AWS DR); effective combined intensity of 26.44 gCO2eq/kWh by energy weight

**Location(s):** Slough, UK (on-prem primary) and AWS eu-west-2 / London (DR)

**Approach:** Market-based

**Data source + year:**
- On-prem: 90% covered by a corporate Power Purchase Agreement with a UK onshore wind operator (REGOs retired against Slough consumption, audited by EY 2025); residual 10% at UK national grid average of 210 gCO2eq/kWh (DEFRA conversion factors 2024, published June 2024). Effective on-prem market-based intensity: 0.9 × 0 + 0.1 × 210 ≈ 25 gCO2eq/kWh.
- AWS eu-west-2: 50 gCO2eq/kWh from AWS Customer Carbon Footprint tool, market-based view, 2025 reporting period

**Per-region breakdown:**

| Region | Component scope | Energy (kWh, after PUE) | gCO2eq/kWh (market-based) | Operational gCO2eq | Source |
|--------|----------------|------------------------|--------------------------|-------------------|--------|
| Slough on-prem | All on-prem components | 3,452.16 | 25 | 86,304.00 | PPA + DEFRA UK 2024 |
| AWS eu-west-2 | DR site components | 211.11 | 50 | 10,555.50 | AWS CCF market-based 2025 |
| **Total** | | **3,663.27** | (effective 26.44) | **96,859.50** | |

---

## Section 6 — Embodied Emissions (M)

**Total embodied emissions allocated to this measurement:** 403,000.00 gCO2eq

**Allocation methodology:**
Embodied emissions were allocated using the standard time-share formula from ISO/IEC 21031:2024:

M = TE × (TiR / EL) × (RR / ToR)

Where:
- TE = Total embodied emissions over the full hardware lifecycle
- TiR = Time reserved = 744 hours (31-day measurement period)
- EL = Expected lifespan = 43,800 hours (5 years) for on-prem hardware; 35,040 hours (4 years) for AWS hardware
- RR / ToR = Resource share = 1.0 for all components (all are dedicated)

The longer 5-year lifespan for on-prem hardware reflects Meridian Bank's documented hardware refresh policy for production payments infrastructure, supported by extended warranty contracts; the 4-year cloud lifespan follows Cloud Carbon Footprint defaults. On-prem TE figures are taken from manufacturer LCA data (Dell Product Carbon Footprint reports for the R650/R750; NetApp Sustainability Report 2024 for the FAS9500). AWS TE figures use Cloud Carbon Footprint estimates.

**Hardware component breakdown:**

| Hardware component | Type | Total embodied TE (gCO2eq) | Expected lifespan | Time reserved | Resource share | Allocated M (gCO2eq) | Data source |
|--------------------|------|---------------------------|-------------------|---------------|----------------|---------------------|-------------|
| On-prem app server 1 | Dell PowerEdge R650 | 1,500,000 | 5 years (43,800 h) | 744 h | 100% | 25,479.45 | Dell Product Carbon Footprint, R650, 2024 |
| On-prem app server 2 | Dell PowerEdge R650 | 1,500,000 | 5 years | 744 h | 100% | 25,479.45 | Same |
| On-prem app server 3 | Dell PowerEdge R650 | 1,500,000 | 5 years | 744 h | 100% | 25,479.45 | Same |
| On-prem app server 4 | Dell PowerEdge R650 | 1,500,000 | 5 years | 744 h | 100% | 25,479.45 | Same |
| On-prem app server 5 | Dell PowerEdge R650 | 1,500,000 | 5 years | 744 h | 100% | 25,479.45 | Same |
| On-prem app server 6 | Dell PowerEdge R650 | 1,500,000 | 5 years | 744 h | 100% | 25,479.45 | Same |
| On-prem DB server 1 | Dell PowerEdge R750 | 1,800,000 | 5 years | 744 h | 100% | 30,575.34 | Dell Product Carbon Footprint, R750, 2024 |
| On-prem DB server 2 | Dell PowerEdge R750 | 1,800,000 | 5 years | 744 h | 100% | 30,575.34 | Same |
| On-prem Kafka 1 | Dell PowerEdge R650 | 1,000,000 | 5 years | 744 h | 100% | 16,986.30 | Dell PCF R650 (lighter spec config) |
| On-prem Kafka 2 | Dell PowerEdge R650 | 1,000,000 | 5 years | 744 h | 100% | 16,986.30 | Same |
| On-prem Kafka 3 | Dell PowerEdge R650 | 1,000,000 | 5 years | 744 h | 100% | 16,986.30 | Same |
| On-prem Kafka 4 | Dell PowerEdge R650 | 1,000,000 | 5 years | 744 h | 100% | 16,986.30 | Same |
| On-prem storage | NetApp FAS9500 | 3,500,000 | 5 years | 744 h | 100% | 59,452.05 | NetApp Sustainability Report 2024 |
| AWS Kafka mirror 1 | EC2 c6i.4xlarge | 900,000 | 4 years (35,040 h) | 744 h | 100% | 19,109.59 | Cloud Carbon Footprint — c6i |
| AWS Kafka mirror 2 | EC2 c6i.4xlarge | 900,000 | 4 years | 744 h | 100% | 19,109.59 | Cloud Carbon Footprint — c6i |
| AWS RDS read replica | RDS db.r6i.2xlarge | 1,100,000 | 4 years | 744 h | 100% | 23,356.16 | Cloud Carbon Footprint — r6i |
| **Total** | | **20,500,000** | | | | **403,000.00** | |

---

## Section 7 — Methodology and Calculation

**Overall approach:** Hybrid (measurement-based for on-prem components via PDU and iDRAC telemetry; calculation-based for AWS components via CloudWatch utilisation and TDP-scaled coefficients)

**Describe your methodology:**
For the on-premises footprint we used a measurement approach. Power was measured at the rack PDU level (Raritan PX3 metered PDUs with per-outlet readings) and reconciled against per-server iDRAC power telemetry, both collected at 5-minute intervals over the 31-day measurement period. The NetApp storage array's power was measured at the appliance level via the Active IQ feed. For the AWS DR footprint we used a calculation approach: per-instance CPU utilisation was retrieved from CloudWatch and converted to estimated power draw using the Cloud Carbon Footprint linear interpolation model. PUE was applied within each site. For carbon intensity, we used a market-based approach: the on-premises site is 90% covered by a corporate Power Purchase Agreement (UK onshore wind, REGOs retired and audited by EY for 2025), with the residual 10% at the UK grid average; the AWS DR site uses the AWS Customer Carbon Footprint market-based value for eu-west-2. Embodied emissions for on-premises hardware were sourced from Dell and NetApp manufacturer LCA documentation; AWS hardware embodied emissions were taken from Cloud Carbon Footprint. The on-premises hardware uses a 5-year lifespan reflecting Meridian's documented refresh policy; AWS hardware uses Cloud Carbon Footprint's default 4-year cloud lifespan.

**Assumptions and limitations:**

| Assumption or limitation | Justification or mitigation |
|--------------------------|----------------------------|
| On-prem PUE of 1.45 | Measured 2025 annualised average from the Slough facility's BMS; consistent with prior-year submissions to FCA on operational resilience |
| AWS PUE of 1.135 | AWS published value for eu-west-2; we cannot directly observe and must trust the provider |
| 90% PPA coverage on-prem | Verified by EY external audit of 2025 REGO retirement; the remaining 10% is true grid consumption above the contracted MWh ceiling |
| 5-year on-prem hardware lifespan | Meridian's documented refresh policy for tier-1 production hardware, supported by extended Dell ProSupport contracts |
| 4-year AWS hardware lifespan | Cloud Carbon Footprint default; we cannot observe AWS's actual refresh cycle |
| 60% utilisation on app servers | Computed as request-volume-weighted mean of 5-minute iDRAC samples; standard deviation 8% across the period |
| TDP-scaled estimation for AWS | AWS does not provide direct power telemetry; the Cloud Carbon Footprint linear interpolation model is the industry convention; estimation uncertainty approximately ±15% |
| Market-based intensity is acceptable per ISO/IEC 21031:2024 | The standard permits market-based reporting where the contractual instruments are documented and verifiable, which is the case here |
| Bank-wide WAN excluded from boundary | No defensible per-application allocation is possible for shared regulated network infrastructure; the regulator considers this below the application boundary |
| HSM appliances excluded | Shared across all bank applications; allocation would be arbitrary and the contribution to Payments Platform is <1% of facility load |
| Embodied data from manufacturer LCA may be uncertain to ±20% | Dell Product Carbon Footprint is the most authoritative source available; we report the manufacturer's central estimate |
| DR site is included though only 20% of workload | Required by PRA operational resilience rules — the DR is part of production; excluding it would underreport |

### Show your calculation

```
Per-component energy (after site-specific PUE):

On-prem (PUE 1.45):
  6× R650 app servers:  6 × 0.250 kW × 744 h × 1.45  = 1,618.20 kWh
  2× R750 db servers:   2 × 0.300 kW × 744 h × 1.45  =   647.28 kWh
  4× R650 Kafka nodes:  4 × 0.150 kW × 744 h × 1.45  =   647.28 kWh
  NetApp storage:       1 × 0.500 kW × 744 h × 1.45  =   539.40 kWh
  On-prem subtotal                                   = 3,452.16 kWh

AWS DR (PUE 1.135):
  2× c6i.4xlarge:       2 × 0.080 kW × 744 h × 1.135 =   135.11 kWh
  1× db.r6i.2xlarge:    1 × 0.090 kW × 744 h × 1.135 =    76.00 kWh
  AWS subtotal                                       =   211.11 kWh

Total energy E                                       = 3,663.27 kWh

Operational emissions (O = E × I, market-based, per-region):
  On-prem: 3,452.16 kWh × 25 gCO2eq/kWh             =  86,304.00 gCO2eq
  AWS DR:    211.11 kWh × 50 gCO2eq/kWh             =  10,555.50 gCO2eq
  Total operational O                                =  96,859.50 gCO2eq

Embodied emissions (M, time-share allocated):
  6× R650 app:         6 × 1,500,000 × (744/43,800) = 152,876.71 gCO2eq
  2× R750 db:          2 × 1,800,000 × (744/43,800) =  61,150.68 gCO2eq
  4× R650 Kafka:       4 × 1,000,000 × (744/43,800) =  67,945.21 gCO2eq
  NetApp storage:      1 × 3,500,000 × (744/43,800) =  59,452.05 gCO2eq
  2× c6i.4xlarge:      2 ×   900,000 × (744/35,040) =  38,219.18 gCO2eq
  1× db.r6i.2xlarge:   1 × 1,100,000 × (744/35,040) =  23,356.16 gCO2eq
  Total embodied M                                  = 403,000.00 gCO2eq

Functional units (R):                               = 280,000,000 transactions / 10,000
                                                    =  28,000

SCI = (O + M) / R    = (96,859.50 + 403,000.00) / 28,000
                     =  499,859.50 / 28,000
                     =  17.85 gCO2eq per 10,000 transactions
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

**Signature:** Helena Okonkwo

**Date:** 2026-04-08

**Name and title:** Helena Okonkwo, Director of Cloud and Infrastructure Engineering

**Organization:** Meridian Bank Plc

---

## Community Participation

- [x] Yes — you may display our organisation name and logo on the GSF certified organisations page
- [ ] No thank you — we are not able to participate in a blog post or case study at this time
- [x] Yes — you may use our published disclosure for downstream analysis, including AI syntheses

---

## Optional Attachments

- [x] Impact Framework manifest file (IMP/YAML) — see attached: `meridianbank-payments-v8.4.2-sci.yml`

  Run with: `if-run --manifest meridianbank-payments-v8.4.2-sci.yml`

  The manifest models each of the 16 infrastructure components as a separate child node with its own region-specific PUE and market-based grid carbon intensity. A `system-total` child takes pre-summed `carbon-operational` (computed across two regions with different intensities) and `carbon-embodied` to produce the SCI score. The manifest independently computes 17.852125 gCO2eq per 10,000 transactions, rounding to 17.85.

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
