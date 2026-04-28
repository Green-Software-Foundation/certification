# SCI Self-Certification — Public Disclosure

> **This is an example public disclosure.** It shows what gets published to
> the `greensoftware-foundation/sci-certifications` GitHub repository after
> approval. It is the applicant's submission published as-is, with a
> certificate metadata header prepended and the contact email redacted.

| Field | Value |
|-------|-------|
| **Certificate ID** | GSF-SCI-2026-00005 |
| **Date Issued** | 2026-06-18 |
| **Valid Until** | 2027-06-18 |
| **Certificate URL** | [View certificate](https://badges.greensoftware.foundation/credentials/gsf-sci-2026-00005) |
| **Status** | Active |

---

## Section 1 — About You and Your Software

**Organization name:** Portal Arena Studios Ltd

**Contact name:** Jonas Berglund

**Contact email:** *[redacted]*

**Software name:** Portal Arena Game Backend

**Software version:** v12.3 (build 2026.04.0142)

**Software description:**
The server-side backend for *Portal Arena*, a competitive 5v5 online arena game. The backend runs matchmaking, authoritative game-state simulation, real-time chat, and the persistent leaderboard. Built in Rust and Go, deployed on Google Kubernetes Engine in us-central1. The game-server fleet is autoscaled (15–50 nodes through the day, peaking on weekend evenings); always-on stateful services use a small fixed pool. The game client running on player devices is out of scope for this measurement.

**Software URL:** https://portal-arena.example/dev-blog

---

## Section 2 — Your SCI Score

**Measurement start date:** 2026-04-01

**Measurement end date:** 2026-04-30

**Your SCI score:** 65.39 gCO2eq per 1,000 player-sessions

---

## Section 3 — Software Boundary

### Included components

| Component | Description | Why included |
|-----------|-------------|--------------|
| Game-server fleet | Autoscaled GKE node pool of n2-standard-4 instances (4 vCPU, 16 GB) running game-server pods. 15–50 active nodes through the period; mean 30; total 21,600 node-hours. | Core compute under our operational control |
| State manager 1 | n2-standard-8 (8 vCPU, 32 GB) running authoritative match state coordination | Always-on dedicated instance for stateful coordination |
| State manager 2 | n2-standard-8 (8 vCPU, 32 GB), redundant state manager | Always-on dedicated instance for redundancy |
| Memorystore Redis | standard-1gb tier, holds in-flight match state and session tokens | Dedicated cache provisioned for this application |
| Cloud SQL Postgres | db-custom-2-8192 instance, holds player profiles and progression | Dedicated database provisioned for this application |

### Excluded components

| Component | Description | Reason for exclusion |
|-----------|-------------|----------------------|
| Player game client | The Portal Arena game client running on player PCs, consoles, mobile | Beyond our operational control — runs on player devices |
| Player ISP / network | Last-mile connection from player to GCP edge | Beyond our operational control |
| GCS asset hosting | Game asset bundles served at game-client startup | Used by client, not by the backend during gameplay; allocation infeasible per-bucket. Contributes <0.5% of backend energy per Cloud Carbon Footprint comparator estimates. |
| GKE control plane | Managed Kubernetes control plane | Shared by GCP across many tenants; not under our operational control; GCP allocates internally |
| Cloud Logging / Monitoring | GCP managed observability | Shared infrastructure; per-application allocation not meaningful |
| Match replay storage | Cold storage of completed match replay files | Idle write-once archive; powered down except during writes; <0.05% of energy |

### Shared infrastructure

The Cloud SQL Postgres instance is dedicated to Portal Arena (no other Studios products share it). The Memorystore Redis instance is dedicated. The autoscaled game-server node pool is dedicated to the Game Backend; we run separate pools for the Studios website, content distribution, and corporate workloads. The GKE cluster control plane is shared across these pools but not under our operational control and is excluded.

---

## Section 4 — Functional Unit (R)

**What is your functional unit?**
1,000 player-sessions

**Why did you choose this unit?**
A player-session — the period from a player joining matchmaking to leaving the game — is the natural unit of value for an online arena game. Each session is what the player experiences and what our infrastructure must deliver. Player-sessions scale with engagement and directly drive backend load (matchmaking, simulation, state writes). We considered "per match" but rejected it because matches with 10 players exert substantially more backend work than would be implied by a per-match metric; "per minute of play" is a possible alternative but harder to communicate. We normalise to 1,000 sessions to produce an SCI value at a scale meaningful to product and operations teams.

**How did you count or measure the total units?**
Sessions were counted from the matchmaking service's `session_completed` events, written to BigQuery in real time. The count was independently reconciled against the authentication service's `session_token_issued` event count, agreement within 0.4%.

**Total units in measurement period:** 12,000,000 player-sessions (12 million)

---

## Section 5 — Energy (E) and Carbon Intensity (I)

**Total energy consumed:** 855.43 kWh (784.80 kWh before PUE)

**PUE applied:** 1.09 (Google Cloud published value for us-central1)

**How was energy measured or estimated?**
A measurement-based approach. Per-node CPU and memory utilisation were collected at 30-second intervals from Prometheus node_exporter on every active GKE node throughout the measurement period. These telemetry samples were converted to estimated per-node power draw using TDP-scaled coefficients from the Cloud Carbon Footprint methodology. For the autoscaled game-server fleet, total node-hours were taken directly from GKE billing telemetry (21,600 node-hours over the 30-day period, equivalent to a mean fleet size of 30 nodes). Mean per-node power draw across the period was 0.030 kW, observed in the telemetry. Always-on services have full 720-hour reservations. PUE 1.09 was applied uniformly.

**Energy breakdown by component:**

| Component | Avg Power (kW) | Hours | Energy before PUE (kWh) | Energy after PUE (kWh) | How calculated | Data source |
|-----------|---------------|-------|------------------------|----------------------|----------------|-------------|
| Game-server fleet (30 nodes mean × 720 h = 21,600 node-hours) | 0.900 | 720 | 648.00 | 706.32 | Mean per-node 0.030 kW × 21,600 node-hours | GKE billing telemetry; Prometheus node_exporter |
| State manager 1 (n2-standard-8) | 0.060 | 720 | 43.20 | 47.09 | TDP scaled by ~50% mean CPU utilisation | Prometheus node_exporter |
| State manager 2 (n2-standard-8) | 0.060 | 720 | 43.20 | 47.09 | Same | Prometheus node_exporter |
| Memorystore Redis (standard-1gb) | 0.020 | 720 | 14.40 | 15.70 | Cloud Carbon Footprint estimate for managed standard-1gb tier | Cloud Carbon Footprint methodology |
| Cloud SQL Postgres (db-custom-2-8192) | 0.050 | 720 | 36.00 | 39.24 | TDP scaled by ~40% mean CPU utilisation reported in Cloud SQL Insights | Cloud SQL Insights metrics |
| **Total** | | | **784.80** | **855.43** | | |

### Carbon intensity

**Carbon intensity value:** 420 gCO2eq/kWh

**Location(s):** Google Cloud us-central1 (Council Bluffs, Iowa, USA)

**Approach:** Location-based

**Data source + year:** EPA eGRID 2023, MROE subregion (Midwest Reliability Organization East), published February 2025

---

## Section 6 — Embodied Emissions (M)

**Total embodied emissions allocated to this measurement:** 425,342.47 gCO2eq

**Allocation methodology:**
Embodied emissions were allocated using the standard time-share formula from ISO/IEC 21031:2024:

M = TE × (TiR / EL) × (RR / ToR)

For the autoscaled game-server fleet, allocation is by node-hours rather than by clock-hours: each node-hour of usage carries a share of one node's lifecycle embodied. The fleet contributed 21,600 node-hours over the 30-day period (mean 30 nodes), so the time-share allocation is 30 × (720 / 35,040) for the fleet's combined lifecycle embodied (30 × 600,000 = 18,000,000 gCO2eq). For always-on services, allocation is straightforward — full 720-hour reservation against per-node 35,040-hour lifespan.

**Hardware component breakdown:**

| Hardware component | Type | Total embodied TE (gCO2eq) | Expected lifespan | Time reserved | Resource share | Allocated M (gCO2eq) | Data source |
|--------------------|------|---------------------------|-------------------|---------------|----------------|---------------------|-------------|
| Game-server fleet (30 node-equivalents) | n2-standard-4 × 30 | 18,000,000 | 4 years (35,040 h per node) | 720 h × 30 nodes | 100% per node | 369,863.01 | Cloud Carbon Footprint — n2-standard-4 |
| State manager 1 | n2-standard-8 | 800,000 | 4 years | 720 h | 100% | 16,438.36 | Cloud Carbon Footprint — n2-standard-8 |
| State manager 2 | n2-standard-8 | 800,000 | 4 years | 720 h | 100% | 16,438.36 | Same |
| Memorystore Redis | standard-1gb | 400,000 | 4 years | 720 h | 100% | 8,219.18 | Cloud Carbon Footprint — managed Redis allocation |
| Cloud SQL Postgres | db-custom-2-8192 | 700,000 | 4 years | 720 h | 100% | 14,383.56 | Cloud Carbon Footprint — Cloud SQL allocation |
| **Total** | | **20,700,000** | | | | **425,342.47** | |

---

## Section 7 — Methodology and Calculation

**Overall approach:** Measurement (Prometheus telemetry-driven for power; GKE billing telemetry for node-hours; Cloud SQL Insights for managed-service utilisation)

**Describe your methodology:**
We used a measurement approach grounded in real telemetry from the production environment. Per-node CPU and memory utilisation were collected at 30-second intervals from Prometheus node_exporter throughout the 30-day measurement period. For the autoscaled game-server fleet, GKE billing telemetry provided authoritative total node-hours (21,600), which we cross-checked against the autoscaler event log. Mean per-node power was computed by averaging 30-second utilisation samples and applying the Cloud Carbon Footprint TDP-to-power model. For always-on services, the same Prometheus telemetry was used to derive average power. Cloud SQL utilisation came from Cloud SQL Insights. Network energy is not material for this workload (game traffic is low-byte, high-frequency; <100 GB egress over the period at <0.04% of energy per the GSF coefficient) and is excluded with rationale below. Carbon intensity was applied uniformly using EPA eGRID 2023 for MROE. Embodied emissions used Cloud Carbon Footprint values with a 4-year lifespan; the autoscaled fleet's allocation is by node-hours rather than clock-hours.

**Assumptions and limitations:**

| Assumption or limitation | Justification or mitigation |
|--------------------------|----------------------------|
| Game-server fleet mean power is 0.030 kW per node | Derived from 30-second Prometheus samples averaged over 21,600 node-hours; the n2-standard-4 TDP under Cloud Carbon Footprint linear interpolation produces ~30 W at the observed 25–30% mean CPU utilisation |
| Mean fleet size of 30 nodes is representative | Computed as 21,600 node-hours / 720 hours = 30. The fleet ranged 15–50; modelling as the mean is the standard convention for measurement-based allocation across an autoscaled fleet |
| State managers run at 50% mean CPU utilisation | Observed in Prometheus telemetry; SD 9% across the period |
| Memorystore Redis power is 0.020 kW | Cloud Carbon Footprint estimate for managed standard-1gb tier; we cannot directly observe the underlying hardware |
| Cloud SQL power is 0.050 kW | TDP for db-custom-2-8192 scaled by ~40% mean CPU utilisation from Cloud SQL Insights |
| PUE 1.09 for us-central1 | Google's published 2024 fleet-wide average PUE |
| 4-year EC2/GCE-equivalent hardware lifespan | Cloud Carbon Footprint default; we cannot observe Google's actual refresh cycle |
| Network egress is excluded | Game traffic is dominated by small UDP packets at low aggregate volume; full-period egress measured at <100 GB; at GSF 0.001 kWh/GB coefficient this is <0.1 kWh — <0.012% of the 855 kWh footprint |
| Embodied allocation by node-hours for the autoscaled fleet | This is the measurement-based interpretation of TiR / EL: a node that exists for an hour contributes 1/35,040th of its lifecycle embodied. Aggregated over the fleet this gives 21,600 / 35,040 of fleet-equivalent embodied |
| Carbon intensity is annual average, not time-of-use | The game has clear evening/weekend peaks but we do not currently shift load (gameplay is real-time); time-of-use intensity is on our roadmap for future submissions |
| Embodied data from Cloud Carbon Footprint | Derived from manufacturer LCA data; uncertain to ±20% per published methodology |

### Show your calculation

```
Per-component energy (after PUE 1.09):

Game-server fleet (30 nodes mean × 720 h = 21,600 node-hours):
  21,600 node-hours × 0.030 kW × 1.09          =  706.32 kWh
  (equivalently: 0.9 kW aggregated × 720 × 1.09)

Always-on services:
  2× state-manager n2-standard-8:
    2 × 0.060 kW × 720 h × 1.09                =   94.18 kWh
  Memorystore Redis:
    0.020 kW × 720 h × 1.09                    =   15.70 kWh
  Cloud SQL Postgres:
    0.050 kW × 720 h × 1.09                    =   39.24 kWh

Total energy E                                 =  855.43 kWh

Operational emissions (O = E × I):
                              = 855.43 kWh × 420 gCO2eq/kWh
                              = 359,281.44 gCO2eq

Embodied emissions (M, time-share allocated):
  Game-server fleet:    18,000,000 × (720 / 35,040)  =  369,863.01 gCO2eq
  State managers (×2):   2 × 800,000 × (720 / 35,040) =   32,876.71 gCO2eq
  Memorystore Redis:        400,000 × (720 / 35,040) =    8,219.18 gCO2eq
  Cloud SQL:                700,000 × (720 / 35,040) =   14,383.56 gCO2eq
  Total embodied M                                   =  425,342.47 gCO2eq

Functional units (R)          = 12,000,000 player-sessions / 1,000
                              = 12,000

SCI = (O + M) / R             = (359,281.44 + 425,342.47) / 12,000
                              =   784,623.91 / 12,000
                              =   65.39 gCO2eq per 1,000 player-sessions
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

**Signature:** Jonas Berglund

**Date:** 2026-05-22

**Name and title:** Jonas Berglund, Director of Live Operations

**Organization:** Portal Arena Studios Ltd

---

## Community Participation

- [x] Yes — you may display our organisation name and logo on the GSF certified organisations page
- [x] Yes — we'd be open to participating in a blog post or case study
- [x] Yes — you may use our published disclosure for downstream analysis, including AI syntheses

---

## Optional Attachments

- [x] Impact Framework manifest file (IMP/YAML) — see attached: `portal-arena-backend-v12.3-sci.yml`

  Run with: `if-run --manifest portal-arena-backend-v12.3-sci.yml`

  The manifest models the autoscaled game-server fleet as a single child with aggregated power (30 nodes × 0.030 kW = 0.9 kW) and aggregated fleet-lifecycle embodied (30 × 600,000 = 18,000,000 gCO2eq) — mathematically equivalent to summing 30 identical per-node children. Always-on services are modelled individually. The manifest independently computes 65.385 gCO2eq per 1,000 sessions, rounding to 65.39.

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
