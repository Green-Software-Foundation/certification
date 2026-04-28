# Example Review Record: Meridian Bank Plc — Payments Platform

> **This is an example review record.** It demonstrates what a completed review
> record looks like for a hybrid on-prem + multi-region cloud workload using
> a market-based carbon approach, recommended for approval.

---

```
REVIEW RECORD
=============
Submission ID:    GSF-SUB-2026-0003
Reviewer:         Tomás Aguilera
Review Date:      2026-04-25
Time Spent:       1.0 hours

CHECKLIST (Y = present & adequate, N = missing, I = insufficient)

  1.  Identity and scope:                                        Y
      Org, contact, and software clearly identified (Meridian
      Bank Plc, Payments Platform v8.4.2). 16 included components
      individually named: 13 on-prem (6 app, 2 DB, 4 Kafka, 1
      storage) and 3 AWS (2 Kafka mirror, 1 RDS replica). Each
      with instance type, specs, and specific justification. Six
      excluded components each have concrete rationales (e.g.,
      "HSM appliances shared across all bank applications;
      contributes <1% of facility load"; "Backup tape library
      idle during measurement period; powered ~4 hours/week").
      Shared infrastructure addressed: Slough facility hosts
      other workloads but allocation is by dedicated rack
      assignment with facility-level PUE for shared overhead.
  2.  Score and period:                                          Y
      17.85 gCO2eq per 10,000 transactions. March 2026
      measurement period with start/end dates.
  3.  Functional unit (R):                                       Y
      Unit clearly named (10,000 transactions) with strong
      rationale connecting to billable, regulatory, and
      capacity-planning use. Counting method described with
      authoritative source (Oracle transactions_audit table)
      and triple cross-validation (Kafka topic count, FCA SUP
      16.13 monthly return) — all agreed within 0.05%. Total
      units stated.
  4.  Energy and carbon intensity (E, I):                        Y
      Total energy 3,663.27 kWh with two distinct PUE values
      (1.45 on-prem, 1.135 AWS) appropriate to each site. Each
      of 16 components has avg power, hours, pre/post-PUE
      energy, calculation method, and specific data source
      (e.g., "iDRAC mean power telemetry"; "NetApp Active IQ").
      Carbon intensity provided in market-based form with full
      audit trail: PPA + REGO retirement audited by EY for the
      on-prem 90% green coverage; UK grid residual at DEFRA
      2024; AWS Customer Carbon Footprint market-based for DR.
      Multi-region table provided showing per-region energy,
      intensity, operational gCO2eq, and source. Effective
      combined intensity reported.
  5.  Embodied emissions (M):                                    Y
      Each of 16 hardware components lists total embodied,
      lifespan, time reserved, resource share, allocated M, and
      specific data source (Dell PCF for R650/R750, NetApp
      Sustainability Report for storage, Cloud Carbon Footprint
      for AWS instances). Differential lifespan (5 years on-prem,
      4 years AWS) is justified with reference to Meridian's
      documented refresh policy and Cloud Carbon Footprint
      defaults. Component-level values sum to stated total.
  6.  Methodology and transparency:                              Y
      Hybrid approach correctly identified and justified
      (measurement-based for on-prem with PDU and iDRAC
      telemetry; calculation-based for AWS where direct
      metering is unavailable). 12 specific assumptions and
      limitations with concrete justifications. Full SCI formula
      shown with per-region operational subtotals and per-
      component embodied breakdown.
  7.  Attestation:                                               Y
      All 10 points present and signed (Helena Okonkwo, Director
      of Cloud and Infrastructure Engineering).

Result:           APPROVE

If REVISION REQUESTED — items marked N or I with notes:
N/A — no revisions required.

If REJECT — rationale:
N/A — submission approved.

NOTES / PRECEDENT:
- Strong example of a market-based submission. The applicant
  has documented the contractual instruments (PPA + audited
  REGO retirement) clearly enough that a reviewer can satisfy
  themselves the market-based intensity is defensible without
  needing access to the underlying audit reports. Recording as
  precedent: market-based intensity at single-digit gCO2eq/kWh
  is acceptable when supported by documented PPA + EAC
  retirement with named third-party audit.
- The submission elegantly handles a hybrid + multi-region
  deployment by reporting two PUE values, two intensities, and
  a per-region operational breakdown table. This is the
  pattern other multi-region applicants should follow.
- The accompanying Impact Framework manifest models each of
  the 16 components individually and uses pre-summed
  operational carbon at the system-total level (necessary for
  multi-region with different intensities). It computes
  17.852125 gCO2eq per 10,000 transactions, which rounds to
  the disclosed 17.85.
- Inclusion of the DR site as production infrastructure is
  correct and matches PRA operational resilience expectations
  for regulated banking workloads. Excluding the DR would
  underreport.
- This submission is ready for publication as-is.
```
