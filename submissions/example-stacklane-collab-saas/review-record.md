# Example Review Record: StackLane Inc — Collaborative Workspace

> **This is an example review record.** It demonstrates what a completed review
> record looks like for a fully-managed-PaaS workload reporting M = 0,
> recommended for approval.

---

```
REVIEW RECORD
=============
Submission ID:    GSF-SUB-2026-0006
Reviewer:         Daniel Whitaker
Review Date:      2026-06-26
Time Spent:       0.5 hours

CHECKLIST (Y = present & adequate, N = missing, I = insufficient)

  1.  Identity and scope:                                        Y
      Org, contact, and software clearly identified (StackLane
      Inc, Collaborative Workspace v3.7.0). Five included
      components individually named: Vercel function, Vercel
      static delivery, Neon Postgres, Upstash Redis, Cloudflare
      Workers — each with provider, role, and specific
      justification. Six excluded components have concrete,
      system-specific rationales (e.g., "Sentry / PostHog
      operated by third parties on their own infrastructure";
      "GitHub Actions runs only on deploys, ~5/week × 3 minutes,
      <0.05% of monthly platform energy"). Shared infrastructure
      explicitly addressed: applicant has no dedicated
      infrastructure of its own; all components are managed-PaaS.
  2.  Score and period:                                          Y
      170.00 gCO2eq per 1,000 active user-days. May 2026
      measurement period (1–30) with start/end dates.
  3.  Functional unit (R):                                       Y
      Unit clearly named (1,000 active user-days) with strong
      rationale connecting to engagement and infrastructure
      load. Alternatives ("per active user per month",
      "per session") considered and rejected explicitly.
      Counting method described (analytics warehouse one row
      per user per active day) and cross-validated against
      auth provider's daily_active_user aggregate, agreement
      within 0.6%.
  4.  Energy and carbon intensity (E, I):                        Y
      Total energy 370 kWh. PUE not applied — and the
      justification is correct: provider coefficients are
      facility-level (PUE-inclusive), so applying our own
      would double-count. Each of the 5 components has the
      activity metric, the energy value, the calculation
      method (e.g., "function-seconds × CCF serverless
      coefficient"), and a specific data source (provider
      sustainability reports, CCF, GSF SCI Data, Cloudflare
      Impact Report). Carbon intensity is provided per-
      provider with three distinct sources: EPA eGRID 2023
      SRVC for Vercel/Upstash on us-east-1, EPA eGRID 2023
      RFCW for Neon on us-east-2, Cloudflare Impact Report
      2024 for the CF edge. Per-provider breakdown table
      with effective combined intensity.
  5.  Embodied emissions (M):                                    Y
      M = 0 reported with explicit justification grounded in
      operational control: StackLane operates no servers,
      containers, or VMs; per ISO/IEC 21031:2024 embodied is
      allocated to the operator with operational control over
      hardware. The justification correctly distinguishes
      "M = 0 because hardware is absent" (which would be
      false) from "M = 0 because we have no operational
      control over the hardware" (which is the actual case).
      Forward-looking acknowledgement that ISO may revise
      managed-PaaS allocation in future.
  6.  Methodology and transparency:                              Y
      Calculation approach correctly identified. The
      methodology section is strong: each provider's coefficient
      source is named (CCF for Vercel and Neon; provider-
      published for Upstash and Cloudflare), and the rationale
      for omitting our own PUE is explicit. 12 specific
      assumptions and limitations with concrete justifications,
      including an honest ±25% energy-estimation uncertainty
      bound (larger than fully-metered submissions, which is
      correct for a managed-PaaS estimation approach). Full
      SCI formula shown with per-provider operational subtotals.
  7.  Attestation:                                               Y
      All 10 points present and signed (Priya Sharma,
      Co-Founder and Head of Engineering).

Result:           APPROVE

If REVISION REQUESTED — items marked N or I with notes:
N/A — no revisions required.

If REJECT — rationale:
N/A — submission approved.

NOTES / PRECEDENT:
- First M = 0 submission in the corpus. This is an exemplar
  for how M = 0 should be justified: not by claiming hardware
  is absent, but by reasoning from operational control. This
  framing aligns with ISO/IEC 21031:2024's allocation principle.
  Recording as precedent: M = 0 is acceptable for fully-managed-
  PaaS deployments when the applicant explicitly cites the lack
  of operational control over hardware lifecycle, names the
  providers retaining that control, and acknowledges that this
  treatment may evolve as the standard matures.
- The decision NOT to apply an applicant-level PUE is correct
  and well-justified (provider energy figures are facility-
  level). Recording as precedent: managed-PaaS submissions
  using provider-published energy coefficients should not
  apply a separate applicant-level PUE.
- The mix of carbon intensity sources across providers is
  handled cleanly: EPA eGRID 2023 for two AWS regions plus
  Cloudflare's own location-based figure, with a clear
  breakdown table. Each is named with year of publication.
- The Impact Framework manifest models the five providers as
  separate children with carbon-embodied: 0 throughout, and
  uses pre-summed operational at system-total (necessary for
  multiple providers in different regions). It computes
  170.00 gCO2eq per 1,000 user-days exactly.
- Estimation uncertainty is honestly disclosed at ±25%,
  reflecting the larger uncertainty inherent in coefficient-
  based managed-PaaS estimation vs direct hardware telemetry.
- This submission is ready for publication as-is.
```
