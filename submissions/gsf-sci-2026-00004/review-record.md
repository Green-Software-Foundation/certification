# Review Record: GreenInsight — GreenInsight

```
REVIEW RECORD
=============
Submission ID:    GSF-SUB-2026-0004
Reviewer:         Kirsty Du Plessis
Review Date:      2026-11-16 (submission received 2026-11-08,
                  signed 2026-11-08; assigned 2026-11-10)
Time Spent:       0.5 hours

CHECKLIST (Y = present & adequate, N = missing, I = insufficient)

  1.  Identity and scope:                                        Y
      Org, contact, and software clearly identified (GreenInsight,
      SaaS Production Release v1.0, October 2026, URL given).
      Three included components named (Supabase PostgreSQL on the
      Free plan, Nano compute, AWS eu-west-1; Supabase Edge
      Functions and PostgREST API; static frontend on Hostinger
      shared hosting, France). Five exclusions, each with a
      system-specific rationale: end-user devices (customer-owned),
      internet delivery to end users (outside CCF scope, with an
      order-of-magnitude estimate), storage energy (quantitative:
      below plan caps, under 1 gCO2e/month), third-party AI/OCR
      APIs (no provider data; disclosed, not assumed zero), and
      offices/developer workstations (not runtime delivery).
      Shared infrastructure explicitly addressed: Supabase and
      Hostinger are both shared, allocated on a reserved-resource
      basis of 1 vCPU-equivalent each because utilisation was not
      measured.
  2.  Score and period:                                          Y
      171.28 gCO2eq per active user per month. Period 2026-10-01
      to 2026-10-31 (one calendar month, 744 h).
  3.  Functional unit (R):                                       Y
      1 monthly active user. Rationale ties the unit to how the
      platform delivers value (dashboards, ingestion, reporting
      workspaces). Counting method named (Supabase auth and
      activity audit logs) with an explicit definition of an
      active user. Total stated (R = 10).
  4.  Energy and carbon intensity (E, I):                        Y
      Total energy 4.916 kWh. PUE stated per provider with
      source: Supabase 1.135 (CCF, AWS); Hostinger 1.58, labelled
      as a non-provider-specific industry benchmark (Uptime
      Institute via Climatiq, survey year not stated). Per-
      component breakdown with values and working for all three
      included components; a separate table distinguishes
      published plan limits, modelled allocation, and actual
      utilisation (not measured; CCF 50% fallback). Carbon
      intensity per site: 305 gCO2eq/kWh Ireland (eu-west-1) and
      74 gCO2eq/kWh France (eu-west-3 used as national factor),
      location-based, EEA values as published in CCF methodology
      Appendix V, underlying data covering years up to 2022.
      Energy-weighted intensity 166.24 given as informative.
  5.  Embodied emissions (M):                                    Y
      M = 895.60 gCO2eq. Clearly labelled as an exploratory proxy:
      CCF/Climatiq 2021 factor for AWS t4g.large (2 vCPU)
      converted to 0.6019 gCO2e per vCPU-hour and applied to the
      1 vCPU allocation per provider over 744 h. Per-component
      breakdown given. States that neither provider's hardware is
      documented as equivalent, and that a Dell R740 LCA was
      considered and rejected (not provider-specific).
  6.  Methodology and transparency:                              Y
      Calculation approach stated (cloud modelling from published
      provider specifications). Method described per SCI term.
      Eleven specific assumptions/limitations tabulated with
      justifications, including the allocation basis (with a
      2 vCPU sensitivity, 270.66), 50% utilisation fallback,
      modelled Edge Function invocations, generic PUE for
      Hostinger, memory-term treatment, grid-factor vintage (with
      a 2024 national-figure sensitivity, 139.94), proxy embodied
      factor, and the low user count. Full SCI calculation shown
      with actual numbers.
  7.  Attestation:                                               Y
      All 10 points present, signed (/s/ Houssem Ben Malek,
      Founder) and dated 2026-11-08, after the measurement period.

Result:           APPROVE (recommend)

If REVISION REQUESTED — items marked N or I with notes:

  Earlier round(s): [TO COMPLETE: date of initial submission and
  the items raised, e.g. consistency of the grid-factor source
  description and the shared-infrastructure wording]. The
  applicant's final version (signed 2026-11-08) clarifies the
  baseline grid factors (CCF Appendix V, underlying EEA data up
  to 2022) and aligns the shared-infrastructure statement with
  the reserved-resource allocation used in Section 5. All items
  now Y.

If REJECT — rationale:
N/A — submission recommended for approval.

NOTES / PRECEDENT:
- Reviewer arithmetic check (not part of the checklist): all
  figures reconcile. Supabase DB 2.316 W x 744 h x 1.135 =
  1.956 kWh; Edge Functions 2.78 vCPU-h x 2.12 W x 1.135 =
  0.007 kWh; Hostinger 2.512 W x 744 h x 1.58 = 2.953 kWh;
  E = 4.916 kWh. E x I = 598.72 + 218.52 = 817.24 g. M =
  2 x 447.80 = 895.60 g. SCI = 1,712.84 / 10 = 171.28. Both
  sensitivities (270.66 and 139.94) also reconcile.
- Shared hosting with no measured utilisation: the applicant
  attributes a reserved 1 vCPU-equivalent per provider and
  states this likely overstates its share. Possible precedent
  entry: a reserved-resource (plan-limit) allocation on shared
  infrastructure is acceptable where it is labelled as a
  modelling assumption, the direction of bias is stated, and a
  sensitivity is given.
- Embodied proxy: M is about 52% of the score and rests on a
  generic per-vCPU proxy from an AWS instance factor, applied
  also to non-AWS (Hostinger) hardware. Clearly labelled as
  exploratory and not provider-specific, so it meets the
  completeness bar; accuracy is out of scope. Possible
  precedent entry alongside the one above.
- Low R (10 users): the score is dominated by fixed
  infrastructure and will move sharply with usage. Disclosed by
  the applicant.
- Grid factors pre-date the measurement period (EEA data up to
  2022). Disclosed, with a 2024 sensitivity. Source and year
  description is now consistent throughout.
- Minor, non-blocking: the internet-delivery row says the
  excluded traffic would add "about 1%"; on the stated figures
  (under 1 GB x 0.1 kWh/GB at 166 to 305 gCO2eq/kWh) it is
  roughly 1 to 2% of the total. Order of magnitude holds.
- Minor, non-blocking: the 50,000 Edge Function invocations
  and 0.2 s duration are assumptions, not exported measurements;
  disclosed, and the effect is negligible (0.007 kWh).
- Production service runs on the Supabase Free plan. Noted for
  context only; not a completeness issue.
- Disclosure formatting: the submission was received inline in
  email. For publication, field labels and table headers were
  mapped to the submission template so the certificate page
  parser can read them (e.g. "What does it do?" to "Software
  description:", "SCI score:" to "Your SCI score:", separate
  measurement start/end dates, template energy-breakdown
  columns, "Shared infrastructure" heading). Applicant content
  is unchanged. Contact email redacted and certificate header
  added.
- Logo opt-in: Yes (logo attached to email). Blog/case study
  opt-in: Yes. Downstream analysis consent: Yes (including AI
  syntheses).
- SWG notified 2026-11-17; 7-day objection period closes
  2026-11-24. Sign-off by SWG Chair / Executive
  Director required before certificate issue.
- Certificate GSF-SCI-2026-00004: [TO COMPLETE: issue and
  expiry dates once issued; update disclosure header to match].
```
