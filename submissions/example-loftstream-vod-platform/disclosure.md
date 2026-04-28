# SCI Self-Certification — Public Disclosure

> **This is an example public disclosure.** It shows what gets published to
> the `greensoftware-foundation/sci-certifications` GitHub repository after
> approval. It is the applicant's submission published as-is, with a
> certificate metadata header prepended and the contact email redacted.

| Field | Value |
|-------|-------|
| **Certificate ID** | GSF-SCI-2026-00004 |
| **Date Issued** | 2026-06-04 |
| **Valid Until** | 2027-06-04 |
| **Certificate URL** | [View certificate](https://badges.greensoftware.foundation/credentials/gsf-sci-2026-00004) |
| **Status** | Active |

---

## Section 1 — About You and Your Software

**Organization name:** LoftStream Media Ltd

**Contact name:** Yuki Tanaka

**Contact email:** *[redacted]*

**Software name:** LoftStream Origin & Player

**Software version:** v5.1.0 (release 2026-Q1, deployed 2026-03-04)

**Software description:**
An ad-supported video-on-demand platform serving long-form film and series content to web, mobile, and connected-TV audiences in North America and Europe. The platform comprises (1) an ingest and encoding pipeline producing an adaptive-bitrate ladder per title, (2) HLS and DASH origin servers, and (3) a metadata/catalog API. The player application running on customer devices is out of scope (separate measurement). Content delivery to viewers is handled by a third-party CDN, also out of scope. The system runs on AWS in two regions: us-east-1 (primary) and eu-west-1.

**Software URL:** https://loftstream.example/about/engineering

---

## Section 2 — Your SCI Score

**Measurement start date:** 2026-04-01

**Measurement end date:** 2026-04-30

**Your SCI score:** 3.31 gCO2eq per 1,000 viewer-hours

---

## Section 3 — Software Boundary

### Included components

| Component | Description | Why included |
|-----------|-------------|--------------|
| US encoder 1 | EC2 c6i.8xlarge running FFmpeg, us-east-1 | Core encoding compute — dedicated instance |
| US encoder 2 | EC2 c6i.8xlarge | Core encoding compute — dedicated instance |
| US encoder 3 | EC2 c6i.8xlarge | Core encoding compute — dedicated instance |
| US encoder 4 | EC2 c6i.8xlarge | Core encoding compute — dedicated instance |
| US origin 1 | EC2 c6i.4xlarge running NGINX | Dedicated origin serving HLS/DASH for North America |
| US origin 2 | EC2 c6i.4xlarge | Second origin for North America (redundancy and load) |
| US metadata API 1 | EC2 m6i.large running Node.js catalog API | Dedicated metadata service for North America |
| US metadata API 2 | EC2 m6i.large | Second metadata API node for redundancy |
| US network egress | Origin → CDN edge data transfer (~150,000 GB/month, 60% of total) | Material network energy from segment delivery to CDN edge nodes |
| EU encoder 1 | EC2 c6i.8xlarge, eu-west-1 | Core encoding compute — dedicated instance |
| EU encoder 2 | EC2 c6i.8xlarge | Core encoding compute — dedicated instance |
| EU origin 1 | EC2 c6i.4xlarge | Dedicated origin serving HLS/DASH for Europe |
| EU origin 2 | EC2 c6i.4xlarge | Second origin for Europe |
| EU metadata API | EC2 m6i.large | Dedicated metadata service for Europe |
| EU network egress | Origin → CDN edge data transfer (~100,000 GB/month, 40% of total) | Material network energy for Europe |

### Excluded components

| Component | Description | Reason for exclusion |
|-----------|-------------|----------------------|
| Third-party CDN (CloudFront / Fastly) | Edge caching and delivery to viewer ISPs | The CDN is operated by a third party. Viewer-edge segment delivery is not under our operational control; CDN providers publish their own sustainability reports for their infrastructure. We include only the origin → CDN edge leg in our boundary, which is under our control. |
| Viewer devices | Browsers, mobile apps, smart-TV apps, set-top boxes | Beyond our operational control — owned and operated by viewers |
| Viewer ISP infrastructure | Last-mile network from CDN edge to viewer | Beyond our operational control |
| S3 content storage | Encoded segments stored at rest in AWS S3 | AWS does not provide per-bucket energy telemetry; allocation to a single workload is infeasible. S3 contributes <1% of platform energy per Cloud Carbon Footprint comparator estimates. |
| CloudWatch / DataDog | Observability stack | Shared across LoftStream services; per-application allocation not meaningful |
| Build and CI infrastructure | GitHub Actions runners | Not exercised by the production service; runs only on deploys (~3/week) |

### Shared infrastructure

No shared infrastructure is included in the boundary at the compute layer — every encoder, origin, and metadata API node is a dedicated EC2 instance. Network egress is allocated by region traffic share (60% US / 40% EU based on viewer distribution measured in CDN logs) since a single egress allocation per region is both possible and the most defensible allocation key.

---

## Section 4 — Functional Unit (R)

**What is your functional unit?**
1,000 viewer-hours

**Why did you choose this unit?**
Viewer-hours are the natural unit of consumption for a streaming platform — they capture both content reach and engagement, are directly meaningful to the audience and to our advertisers, and are the unit our content acquisition and product teams use for capacity planning. We normalise to 1,000 viewer-hours to produce an SCI value at a meaningful scale. We considered "per stream" and "per concurrent peak viewer" but rejected both as they do not linearly capture system load.

**How did you count or measure the total units?**
Viewer-hours were aggregated from the player heartbeat events emitted every 30 seconds while a stream is active. These events are written to our analytics warehouse (BigQuery) and aggregated by our standard reporting pipeline. The total was independently reconciled against CDN provider monthly billing reports (which report bytes served, convertible to viewer-hours via average bitrate and content duration), agreement within 1.2%.

**Total units in measurement period:** 220,000,000 viewer-hours (220 million)

---

## Section 5 — Energy (E) and Carbon Intensity (I)

**Total energy consumed:** 1,329.77 kWh (1,171.60 kWh before PUE)

**PUE applied:** 1.135 (AWS published value, applied uniformly across both regions and to network egress)

**How was energy measured or estimated?**
A hybrid approach. For each EC2 compute node, energy was estimated from CloudWatch CPU utilisation telemetry over the measurement period, converted to power draw using TDP-scaled coefficients from the Cloud Carbon Footprint methodology. For network egress, energy was estimated from total bytes transferred (CDN ingest reports) using the GSF network energy coefficient of 0.001 kWh/GB. Average utilisation observed was high on encoders (encoding is CPU-bound; mean 75%) and lower on origins and metadata (mean 25–35%). PUE 1.135 was applied uniformly.

**Energy breakdown by component:**

| Component | Avg Power (kW) | Hours | Energy before PUE (kWh) | Energy after PUE (kWh) | How calculated | Data source |
|-----------|---------------|-------|------------------------|----------------------|----------------|-------------|
| US encoder 1 (c6i.8xlarge) | 0.150 | 720 | 108.00 | 122.58 | TDP scaled by 75% mean CPU utilisation | CloudWatch CPU; Cloud Carbon Footprint |
| US encoder 2 (c6i.8xlarge) | 0.150 | 720 | 108.00 | 122.58 | Same | Same |
| US encoder 3 (c6i.8xlarge) | 0.150 | 720 | 108.00 | 122.58 | Same | Same |
| US encoder 4 (c6i.8xlarge) | 0.150 | 720 | 108.00 | 122.58 | Same | Same |
| US origin 1 (c6i.4xlarge) | 0.080 | 720 | 57.60 | 65.38 | TDP scaled by 25% mean CPU utilisation | CloudWatch CPU |
| US origin 2 (c6i.4xlarge) | 0.080 | 720 | 57.60 | 65.38 | Same | CloudWatch CPU |
| US metadata 1 (m6i.large) | 0.020 | 720 | 14.40 | 16.34 | TDP scaled by 30% mean CPU utilisation | CloudWatch CPU |
| US metadata 2 (m6i.large) | 0.020 | 720 | 14.40 | 16.34 | Same | CloudWatch CPU |
| US network egress | — | — | 150.00 | 170.25 | 150,000 GB × 0.001 kWh/GB (60% of 250,000 GB total) | GSF coefficient; CDN provider monthly traffic report |
| EU encoder 1 (c6i.8xlarge) | 0.150 | 720 | 108.00 | 122.58 | TDP scaled by 75% mean CPU utilisation | CloudWatch CPU |
| EU encoder 2 (c6i.8xlarge) | 0.150 | 720 | 108.00 | 122.58 | Same | CloudWatch CPU |
| EU origin 1 (c6i.4xlarge) | 0.080 | 720 | 57.60 | 65.38 | TDP scaled by 25% mean CPU utilisation | CloudWatch CPU |
| EU origin 2 (c6i.4xlarge) | 0.080 | 720 | 57.60 | 65.38 | Same | CloudWatch CPU |
| EU metadata (m6i.large) | 0.020 | 720 | 14.40 | 16.34 | TDP scaled by 30% mean CPU utilisation | CloudWatch CPU |
| EU network egress | — | — | 100.00 | 113.50 | 100,000 GB × 0.001 kWh/GB (40% of 250,000 GB total) | GSF coefficient; CDN provider monthly traffic report |
| **Total** | | | **1,171.60** | **1,329.77** | | |

### Carbon intensity

**Carbon intensity value:** 370 gCO2eq/kWh (us-east-1) and 290 gCO2eq/kWh (eu-west-1); effective combined intensity 339.6 gCO2eq/kWh by energy weight

**Location(s):** AWS us-east-1 (Northern Virginia, USA) and AWS eu-west-1 (Dublin, Ireland)

**Approach:** Location-based

**Data source + year:**
- us-east-1: EPA eGRID 2023, SRVC subregion (SERC Virginia/Carolina), published February 2025
- eu-west-1: SEAI (Sustainable Energy Authority of Ireland) National Energy Balance 2024, published October 2024

**Per-region breakdown:**

| Region | Component scope | Energy (kWh, after PUE) | gCO2eq/kWh | Operational gCO2eq | Source |
|--------|----------------|------------------------|------------|-------------------|--------|
| us-east-1 | US compute + US network egress | 824.01 | 370 | 304,883.70 | EPA eGRID 2023 SRVC |
| eu-west-1 | EU compute + EU network egress | 505.76 | 290 | 146,669.24 | SEAI Ireland 2024 |
| **Total** | | **1,329.77** | (effective 339.6) | **451,552.94** | |

---

## Section 6 — Embodied Emissions (M)

**Total embodied emissions allocated to this measurement:** 277,397.26 gCO2eq

**Allocation methodology:**
Embodied emissions were allocated using the standard time-share formula from ISO/IEC 21031:2024:

M = TE × (TiR / EL) × (RR / ToR)

Where:
- TE = Total embodied emissions over the full hardware lifecycle (Cloud Carbon Footprint)
- TiR = Time reserved = 720 hours (30-day measurement period)
- EL = Expected lifespan = 35,040 hours (4 years), Cloud Carbon Footprint default for EC2 compute
- RR / ToR = Resource share = 1.0 (all components are dedicated EC2 instances)

Network egress carries no allocated embodied emissions — there is no dedicated network hardware under our operational control; the CDN is excluded and AWS's transit network is shared.

**Hardware component breakdown:**

| Hardware component | Type | Total embodied TE (gCO2eq) | Expected lifespan | Time reserved | Resource share | Allocated M (gCO2eq) | Data source |
|--------------------|------|---------------------------|-------------------|---------------|----------------|---------------------|-------------|
| US encoder 1 | EC2 c6i.8xlarge | 1,400,000 | 4 years (35,040 h) | 720 h | 100% | 28,767.12 | Cloud Carbon Footprint — c6i |
| US encoder 2 | EC2 c6i.8xlarge | 1,400,000 | 4 years | 720 h | 100% | 28,767.12 | Same |
| US encoder 3 | EC2 c6i.8xlarge | 1,400,000 | 4 years | 720 h | 100% | 28,767.12 | Same |
| US encoder 4 | EC2 c6i.8xlarge | 1,400,000 | 4 years | 720 h | 100% | 28,767.12 | Same |
| US origin 1 | EC2 c6i.4xlarge | 900,000 | 4 years | 720 h | 100% | 18,493.15 | Cloud Carbon Footprint — c6i |
| US origin 2 | EC2 c6i.4xlarge | 900,000 | 4 years | 720 h | 100% | 18,493.15 | Same |
| US metadata 1 | EC2 m6i.large | 500,000 | 4 years | 720 h | 100% | 10,273.97 | Cloud Carbon Footprint — m6i |
| US metadata 2 | EC2 m6i.large | 500,000 | 4 years | 720 h | 100% | 10,273.97 | Same |
| EU encoder 1 | EC2 c6i.8xlarge | 1,400,000 | 4 years | 720 h | 100% | 28,767.12 | Same as US encoders |
| EU encoder 2 | EC2 c6i.8xlarge | 1,400,000 | 4 years | 720 h | 100% | 28,767.12 | Same |
| EU origin 1 | EC2 c6i.4xlarge | 900,000 | 4 years | 720 h | 100% | 18,493.15 | Same as US origins |
| EU origin 2 | EC2 c6i.4xlarge | 900,000 | 4 years | 720 h | 100% | 18,493.15 | Same |
| EU metadata | EC2 m6i.large | 500,000 | 4 years | 720 h | 100% | 10,273.97 | Same as US metadata |
| **Total** | | **13,500,000** | | | | **277,397.26** | |

---

## Section 7 — Methodology and Calculation

**Overall approach:** Hybrid (calculation-based for compute via TDP-scaled CloudWatch utilisation; coefficient-based for network egress via GSF kWh/GB)

**Describe your methodology:**
For compute components, we used a calculation approach: per-instance CPU utilisation was retrieved from CloudWatch over the 30-day measurement period and converted to estimated power draw using the Cloud Carbon Footprint linear interpolation model with EC2 instance-specific TDP coefficients. For network egress, we used a coefficient-based approach: total origin-to-CDN bytes transferred (from CDN ingest reports) were multiplied by the GSF network energy coefficient (0.001 kWh/GB) to produce total network energy. Network energy was allocated to regions in proportion to viewer-hours served by each region (60% US / 40% EU). PUE 1.135 was applied uniformly to all components. Carbon intensity was applied per-region (location-based) using EPA eGRID 2023 for us-east-1 and SEAI 2024 for eu-west-1. Embodied emissions for compute were sourced from Cloud Carbon Footprint with a 4-year lifespan.

**Assumptions and limitations:**

| Assumption or limitation | Justification or mitigation |
|--------------------------|----------------------------|
| Encoder average power is 0.150 kW | c6i.8xlarge TDP scaled by 75% mean CPU utilisation observed in CloudWatch; encoding is CPU-bound and runs at sustained high utilisation |
| Origin average power is 0.080 kW | c6i.4xlarge TDP scaled by 25% mean CPU utilisation; serving HLS/DASH segments is I/O bound |
| Metadata API average power is 0.020 kW | m6i.large at 30% mean CPU utilisation |
| PUE 1.135 applied to network as well as compute | Origin egress originates from data centre infrastructure subject to facility PUE before reaching the public internet; this is consistent with how AWS reports total facility energy |
| Network energy coefficient is 0.001 kWh/GB | GSF SCI Data project published value; we cannot directly observe transit network energy and the GSF coefficient is the best available estimate |
| Region traffic split 60% US / 40% EU | Based on monthly CDN viewer-hours reports for the measurement period; standard deviation across the period was 3% |
| 4-year EC2 hardware lifespan | Cloud Carbon Footprint default; we cannot observe AWS's actual refresh cycle |
| CDN excluded from boundary | The CDN is a third-party service; we have no operational control and the CDN provider publishes its own sustainability reports for the infrastructure within its boundary |
| S3 content storage excluded | AWS does not provide per-bucket energy telemetry; allocation infeasible; estimated <1% of total energy |
| No direct hardware power metering | Used CPU utilisation as proxy via TDP-to-power model; estimation error approximately ±15% |
| Carbon intensity is annual average | For a continuous service measured over a full month, the annual average is reasonable; we do not currently shift workloads in time |
| Embodied data from Cloud Carbon Footprint | Derived from manufacturer LCA data with cloud-instance-specific coefficients; uncertain to ±20% per published methodology |

### Show your calculation

```
Per-component energy (after PUE 1.135):

US (us-east-1):
  4× encoders (c6i.8xlarge):  4 × 0.150 kW × 720 h × 1.135  = 490.32 kWh
  2× origins (c6i.4xlarge):   2 × 0.080 kW × 720 h × 1.135  = 130.75 kWh
  2× metadata (m6i.large):    2 × 0.020 kW × 720 h × 1.135  =  32.69 kWh
  US network (150 kWh raw):   150 × 1.135                   = 170.25 kWh
  US subtotal                                               = 824.01 kWh

EU (eu-west-1):
  2× encoders (c6i.8xlarge):  2 × 0.150 kW × 720 h × 1.135  = 245.16 kWh
  2× origins (c6i.4xlarge):   2 × 0.080 kW × 720 h × 1.135  = 130.75 kWh
  1× metadata (m6i.large):    1 × 0.020 kW × 720 h × 1.135  =  16.34 kWh
  EU network (100 kWh raw):   100 × 1.135                   = 113.50 kWh
  EU subtotal                                               = 505.76 kWh

Total energy E                                              = 1,329.77 kWh

Operational emissions (O = E × I per region, location-based):
  US: 824.01 kWh × 370 gCO2eq/kWh                           =  304,883.70 gCO2eq
  EU: 505.76 kWh × 290 gCO2eq/kWh                           =  146,669.24 gCO2eq
  Total operational O                                       =  451,552.94 gCO2eq

Embodied emissions (M, time-share allocated):
  US encoders (×4):    4 × 1,400,000 × (720/35,040)         =  115,068.49 gCO2eq
  US origins (×2):     2 ×   900,000 × (720/35,040)         =   36,986.30 gCO2eq
  US metadata (×2):    2 ×   500,000 × (720/35,040)         =   20,547.95 gCO2eq
  EU encoders (×2):    2 × 1,400,000 × (720/35,040)         =   57,534.25 gCO2eq
  EU origins (×2):     2 ×   900,000 × (720/35,040)         =   36,986.30 gCO2eq
  EU metadata (×1):    1 ×   500,000 × (720/35,040)         =   10,273.97 gCO2eq
  Total embodied M                                          =  277,397.26 gCO2eq

Functional units (R):                                       = 220,000,000 viewer-hours / 1,000
                                                            =  220,000

SCI = (O + M) / R    = (451,552.94 + 277,397.26) / 220,000
                     =  728,950.20 / 220,000
                     =  3.31 gCO2eq per 1,000 viewer-hours
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

**Signature:** Yuki Tanaka

**Date:** 2026-05-12

**Name and title:** Yuki Tanaka, VP Platform Engineering

**Organization:** LoftStream Media Ltd

---

## Community Participation

- [x] Yes — you may display our organisation name and logo on the GSF certified organisations page
- [x] Yes — we'd be open to participating in a blog post or case study
- [x] Yes — you may use our published disclosure for downstream analysis, including AI syntheses

---

## Optional Attachments

- [x] Impact Framework manifest file (IMP/YAML) — see attached: `loftstream-vod-v5.1.0-sci.yml`

  Run with: `if-run --manifest loftstream-vod-v5.1.0-sci.yml`

  The manifest models each of the 15 infrastructure components (8 US compute, 5 EU compute, 2 network) as a separate child node with its own region-specific grid carbon intensity. A `system-total` child uses pre-summed `carbon-operational` (because two regions have different intensities) and `carbon-embodied` to produce the SCI score. The manifest independently computes 3.31341 gCO2eq per 1,000 viewer-hours, rounding to 3.31.

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
