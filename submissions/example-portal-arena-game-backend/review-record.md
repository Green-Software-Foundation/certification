# Example Review Record: Portal Arena Studios Ltd — Game Backend

> **This is an example review record.** It demonstrates what a completed review
> record looks like for an autoscaled gaming workload using a measurement-based
> approach, recommended for approval.

---

```
REVIEW RECORD
=============
Submission ID:    GSF-SUB-2026-0005
Reviewer:         Camille Doucet
Review Date:      2026-06-04
Time Spent:       0.75 hours

CHECKLIST (Y = present & adequate, N = missing, I = insufficient)

  1.  Identity and scope:                                        Y
      Org, contact, and software clearly identified (Portal
      Arena Studios Ltd, Game Backend v12.3). Five included
      components individually named: 1 autoscaled game-server
      fleet, 2 state managers, 1 Redis, 1 Cloud SQL — each with
      instance type, specs, and specific justification. Six
      excluded components have concrete rationales (e.g.,
      "match replay storage idle write-once archive";
      "GKE control plane shared by GCP across many tenants").
      Shared infrastructure addressed: separate node pools per
      Studios product; the Cloud SQL and Redis instances are
      dedicated.
  2.  Score and period:                                          Y
      65.39 gCO2eq per 1,000 player-sessions. April 2026
      measurement period with start/end dates.
  3.  Functional unit (R):                                       Y
      Unit clearly named (1,000 player-sessions) with strong
      rationale connecting to player experience, engagement,
      and backend load. Alternatives ("per match", "per minute
      of play") considered and explicitly discussed. Counting
      method described (matchmaking session_completed events
      written to BigQuery) and cross-validated against
      authentication session_token_issued events, agreement
      within 0.4%.
  4.  Energy and carbon intensity (E, I):                        Y
      Total 855.43 kWh with PUE 1.09. The autoscaled fleet is
      handled correctly: 21,600 node-hours from GKE billing
      telemetry, mean per-node 0.030 kW from Prometheus
      samples. Each of 5 components has avg power, hours, pre/
      post-PUE energy, calculation method (e.g., "TDP scaled by
      ~50% mean CPU utilisation"), and specific data source
      (Prometheus node_exporter, Cloud SQL Insights, Cloud
      Carbon Footprint). Carbon intensity 420 gCO2eq/kWh,
      us-central1, location-based, EPA eGRID 2023 MROE.
  5.  Embodied emissions (M):                                    Y
      Each of the 5 hardware components lists embodied total,
      lifespan, time reserved, resource share, allocated M, and
      data source. The autoscaled fleet's allocation is by
      node-hours rather than clock-hours — this is the correct
      treatment for an autoscaled deployment and the rationale
      is explicitly given. Component-level values sum to stated
      total.
  6.  Methodology and transparency:                              Y
      Measurement approach correctly identified. The
      methodology section is strong: telemetry sources are
      named (Prometheus node_exporter, GKE billing, Cloud SQL
      Insights), sampling frequency given (30 seconds), and
      the autoscaled fleet allocation is clearly explained.
      11 specific assumptions and limitations with concrete
      justifications. Full SCI formula shown with per-component
      operational and embodied breakdown.
  7.  Attestation:                                               Y
      All 10 points present and signed (Jonas Berglund,
      Director of Live Operations).

Result:           APPROVE

If REVISION REQUESTED — items marked N or I with notes:
N/A — no revisions required.

If REJECT — rationale:
N/A — submission approved.

NOTES / PRECEDENT:
- First measurement-based submission in the corpus and a good
  exemplar. The applicant correctly leans on real telemetry
  rather than nameplate TDP estimates. Recording as precedent:
  measurement-based submissions should name telemetry sources,
  sampling frequency, and a way of cross-validating utilisation
  against billing or service-level metrics (the GKE billing
  telemetry cross-check here is exemplary).
- Autoscaled fleet allocation by node-hours is also worth
  recording as precedent. The submission models the fleet as
  "30 nodes mean × 720 hours" mathematically equivalent to
  21,600 node-hours, with embodied allocated by node-hour.
  Future autoscaled submissions can follow this pattern.
- The accompanying Impact Framework manifest models the fleet
  as a single aggregated child with 30× the power and 30× the
  fleet-lifecycle embodied — this is a clean and reproducible
  way to express the autoscaled fleet in IF without enumerating
  30 children. It computes 65.385 gCO2eq per 1,000 sessions,
  rounding to the disclosed 65.39.
- Network egress exclusion is well-reasoned (small UDP packets,
  <100 GB total, <0.012% of energy). Defensible.
- This submission is ready for publication as-is.
```
