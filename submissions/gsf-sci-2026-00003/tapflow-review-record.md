# Review Record: tapflow — tapflow

```
REVIEW RECORD
=============
Submission ID:    GSF-SUB-2026-0003
Reviewer:         Kirsty
Review Date:      2026-10-05
Time Spent:       [add] hours

CHECKLIST (Y = present & adequate, N = missing, I = insufficient)

  1.  Identity and scope:                                        Y
      Org, contact, and software identified (tapflow, open-source
      project, v0.18.0, measured release; current release v0.26.1
      disclosed). Four included components named (agent host, relay
      process, iOS agent process, iOS simulator). Four excluded
      components (viewer browser/machine, network transport,
      CI/CD and developer machines, build artifact storage), each
      with a system-specific rationale (e.g., viewer devices are
      not owned or controlled by the operator; storage sits on the
      agent host whose embodied carbon is already allocated).
      Shared infrastructure explicitly addressed: up to four
      concurrent simulator slots on one host, allocated at 1/4.
  2.  Score and period:                                          Y
      3.79 gCO2eq per QA session-hour. Period 2026-08-03 to
      2026-08-03. Single controlled benchmark, clearly disclosed
      as such and not represented as reflective of production
      usage (see precedent GSF-SUB-2026-0002).
  3.  Functional unit (R):                                       Y
      One QA session-hour. Rationale ties the unit to how energy
      scales (session duration and interaction, not builds or
      accounts). Counting method stated (one benchmark session,
      timed directly). Total stated (R = 1).
  4.  Energy and carbon intensity (E, I):                        Y
      Total energy 0.005725 kWh; PUE explicitly N/A with reason
      (desk/office machine). Single whole-host energy row with
      source and derivation (Apple Product Environmental Report
      idle power plus measured SoC increment, adapter efficiency
      applied, 30% duty). A per-process split is not available;
      this is explained, and a three-state differencing table is
      provided instead. Carbon intensity 417.3 gCO2eq/kWh,
      Republic of Korea, location-based, national consumption-side
      grid factor, 2023 factor confirmed 2025-12-17. Single
      location, no weighting needed.
  5.  Embodied emissions (M):                                    Y
      M = 1.404 gCO2eq for the agent host, sourced to the Apple
      Product Environmental Report (14-inch MacBook Pro M2 Pro).
      Allocation formula shown (4-year life, 1/4 slot share). TE
      definition and derivation from published stage shares
      explained, with the resulting score range (3.75 to 3.80).
  6.  Methodology and transparency:                              Y
      Hybrid approach stated. Method described (powermetrics,
      60 one-second samples in three states). Specific
      assumptions and limitations tabulated with justifications,
      including 30% duty, allocation basis, derived TE, no
      per-process split, single-day benchmark, upper-bound
      increment, version gap, and a second modelled host that is
      not the certified figure. Full SCI calculation shown with
      actual numbers.
  7.  Attestation:                                               Y
      All 10 points present, signed (/s/ Jo Duchan) and dated
      2026-10-02.

Result:           APPROVE (recommend)

If REVISION REQUESTED — items marked N or I with notes:
N/A — no revisions required.

If REJECT — rationale:
N/A — submission recommended for approval.

NOTES / PRECEDENT:
- Single-day, single-host benchmark: accepted under the existing
  precedent in GSF-SUB-2026-0002 (Offlyn Clipper). Scope is
  clearly disclosed and not overstated.
- Measured on v0.18.0; current release at submission is v0.26.1.
  The gap and the absence of re-measurement are disclosed
  openly. Possible precedent entry: score measured on an older
  release than current is acceptable where the version gap is
  stated and not claimed as re-verified.
- A second host (Mac mini M4, 2.50 gCO2eq per session-hour) is
  disclosed but deliberately not certified. Possible precedent
  entry: additional modelled figures are acceptable where
  clearly labelled as not the certified score.
- Reviewer arithmetic check (not part of the checklist): E, E x I,
  M and the total all reconcile.
- Formatting glitches in the text first received (stray code
  fences, run-together lines in the submission checklist).
  Applicant supplied a corrected file; compared against the
  reviewed version, content is unchanged and the formatting
  is clean. The corrected file is the version to publish.
- Logo opt-in: Yes. Blog/case study opt-in: Yes. Downstream
  analysis consent: Yes.
- SWG notified 2026-10-06; 7-day objection period ends
  2026-10-13.
```
