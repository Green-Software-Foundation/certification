# Example Review Record: LoftStream Media Ltd — Origin & Player

> **This is an example review record.** It demonstrates what a completed review
> record looks like for a multi-region streaming workload that excludes a
> third-party CDN, recommended for approval.

---

```
REVIEW RECORD
=============
Submission ID:    GSF-SUB-2026-0004
Reviewer:         Aisha Mehta
Review Date:      2026-05-22
Time Spent:       0.75 hours

CHECKLIST (Y = present & adequate, N = missing, I = insufficient)

  1.  Identity and scope:                                        Y
      Org, contact, and software clearly identified (LoftStream
      Media Ltd, Origin & Player v5.1.0). 15 included components
      individually named: 8 US (4 encoder, 2 origin, 2 metadata,
      1 network split), 5 EU (2 encoder, 2 origin, 1 metadata,
      1 network split). Six excluded components have concrete
      rationales — notably the CDN exclusion is well-reasoned
      ("third-party service... CDN providers publish their own
      sustainability reports; we include only the origin → CDN
      edge leg in our boundary, which is under our control").
      Shared infrastructure: compute is dedicated; network is
      allocated by viewer traffic share with method documented.
  2.  Score and period:                                          Y
      3.31 gCO2eq per 1,000 viewer-hours. April 2026 measurement
      period with start/end dates.
  3.  Functional unit (R):                                       Y
      Unit clearly named (1,000 viewer-hours) with strong
      rationale connecting to consumption, engagement,
      advertiser value, and capacity planning. Alternatives
      considered and explicitly rejected ("per stream" and
      "per concurrent peak viewer" — neither linear in load).
      Counting method described (player heartbeat events every
      30s aggregated to BigQuery) and cross-validated against
      CDN bytes-served reports, agreement within 1.2%.
  4.  Energy and carbon intensity (E, I):                        Y
      Total 1,329.77 kWh with PUE 1.135 applied uniformly. Each
      of 15 components has avg power, hours (where applicable),
      pre/post-PUE energy, calculation method, and specific
      data source. Network egress is included with the GSF
      coefficient; total bytes from CDN ingest reports.
      Carbon intensity provided per-region with clear sources
      (EPA eGRID 2023 SRVC for us-east-1, SEAI 2024 for
      eu-west-1). Per-region breakdown table with weighted
      effective intensity.
  5.  Embodied emissions (M):                                    Y
      Each of 13 hardware components lists embodied total,
      lifespan, time reserved, resource share, allocated M, and
      data source (Cloud Carbon Footprint per instance type).
      Network egress correctly carries no allocated embodied
      ("no dedicated network hardware under our operational
      control"). Component-level values sum to stated total.
  6.  Methodology and transparency:                              Y
      Hybrid approach correctly identified (calculation for
      compute; coefficient-based for network egress). 12
      specific assumptions and limitations with concrete
      justifications. Full SCI formula shown with per-region
      operational subtotals and complete embodied breakdown.
  7.  Attestation:                                               Y
      All 10 points present and signed (Yuki Tanaka, VP Platform
      Engineering).

Result:           APPROVE

If REVISION REQUESTED — items marked N or I with notes:
N/A — no revisions required.

If REJECT — rationale:
N/A — submission approved.

NOTES / PRECEDENT:
- Exemplar handling of a third-party CDN exclusion. The
  applicant draws the boundary at "origin → CDN edge" rather
  than viewer screen, with a clear rationale rooted in
  operational control. Recording as precedent: streaming
  platforms may exclude third-party CDNs provided the
  origin-to-CDN-edge leg is included and the rationale cites
  operational control.
- The GSF network energy coefficient (0.001 kWh/GB) is used
  for egress with PUE applied. This matches the existing
  greentech reference example's pattern; consistent treatment
  across the corpus.
- The accompanying Impact Framework manifest models 15
  components and uses pre-summed operational carbon at the
  system-total level (necessary for multi-region with different
  location-based intensities). It computes 3.31341 gCO2eq per
  1,000 viewer-hours, rounding to the disclosed 3.31.
- This submission is ready for publication as-is.
```
