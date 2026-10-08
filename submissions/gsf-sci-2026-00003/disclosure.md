# SCI Self-Certification — Public Disclosure

| Field | Value |
|-------|-------|
| **Certificate ID** | GSF-SCI-2026-00003 |
| **Date Issued** |  |
| **Valid Until** |  |
| **Certificate URL** |  |
| **Status** | [Active on issue] |

---

## Section 1 — About You and Your Software

**Organization name:** tapflow (open-source project)

**Contact name:** Jo Duchan

**Contact email:** jo_duchan@icloud.com

**Software name:** tapflow

**Software version:** v0.18.0 — the release the score was measured on (2026-08-03).
The exact commit was not recorded at the time. The current release at submission is
v0.26.1, and the score has not been re-measured against it. See Section 7.

**Software URL:** https://www.tapflow.dev · https://github.com/jo-duchan/tapflow

**What does it do?**
tapflow streams iOS simulators and Android emulators to a browser, so a whole team can
run mobile QA without installing a mobile development environment. It is TypeScript on
Node.js: a relay process serves the dashboard and brokers sessions over WebSocket, and
an agent process runs on an Apple Silicon Mac next to the simulators it controls,
encoding the screen as H.264. It is MIT licensed and self-hosted — it runs on hardware
the operator already owns, such as a desk Mac, a LAN host, or a machine behind a
tunnel. No cloud service is involved.

---

## Section 2 — Your SCI Score

**SCI score:** 3.79 gCO2eq per QA session-hour

**Measurement period:** 2026-08-03 to 2026-08-03

This is a single controlled benchmark on one host, not an aggregate over a production
period. Section 7 states what that does and does not support.

---

## Section 3 — Software Boundary

### What's included?

| Component | Brief description |
| --- | --- |
| Agent host | 1x MacBook Pro 14-inch (M2 Pro, 32 GB, macOS 26.5.2). Energy and embodied carbon both counted. |
| Relay process | Node.js. Serves the dashboard from the built `public/` directory and brokers the session. Runs on the agent host. |
| iOS agent process | Node.js. Controls the simulator and encodes the screen as H.264. Runs on the agent host. |
| iOS simulator | One simulator instance, started and controlled by the agent. |

### What's excluded, and why?

| Component | Reason for exclusion |
| --- | --- |
| The viewer's browser and the machine running it | An end-user device. The operator of a tapflow instance does not own, provision, or control the testers' laptops, and tapflow imposes no requirement on them beyond a browser. |
| Network transport between host and viewer | The path is chosen by the operator — a LAN, a Tailscale tunnel, or a reverse proxy they already run. tapflow ships no network infrastructure of its own, so there is no component here under our operational control to measure. |
| CI/CD runners and developer machines | These run while tapflow is being built, not while a deployed instance serves a QA session. The functional unit is a session-hour on a running instance, so development compute falls outside the system being measured. |
| Build artifact storage | Uploaded builds are written to the operator's own filesystem on the agent host, whose embodied carbon is already allocated above. Counting the storage again would double-count the same hardware. |

**Shared infrastructure.** The agent host is shared rather than dedicated: tapflow runs
up to four concurrent simulator slots on one Mac. Embodied carbon is therefore
allocated at one quarter of the host — see Section 6.

---

## Section 4 — Functional Unit (R)

**Functional unit:** one QA session-hour — one tester streaming one simulator for one hour.

**Why this unit:** tapflow's energy cost tracks how long a session is held open and how
much interaction happens inside it. It does not track builds uploaded or accounts
registered. A live session is single-occupancy by design, so one session-hour maps
one-to-one onto the work delivered.

**How counted:** R = 1. The score comes from one controlled benchmark session, timed
directly, not from aggregated production telemetry.

**Total in measurement period:** 1 QA session-hour.

---

## Section 5 — Energy (E) and Carbon Intensity (I)

### Energy

**Total energy:** 0.005725 kWh

**PUE applied:** N/A. The host is a desk or office machine, not a data-centre tenant.
There is no facility overhead to apportion.

| Component | Energy (kWh) | Data source |
| --- | --- | --- |
| Agent host, whole machine, 1 hour | 0.005725 | Idle wall power 4.21 W from the Apple Product Environmental Report power table for the 14-inch MacBook Pro (M2 Pro), January 2023, at 100 V. Active increment 5.05 W wall: 4.52 W measured at the SoC, divided by the 89.5% adapter efficiency printed in the same table. Increment applied to 30% of the hour. |

A per-process split is not available. `powermetrics` reports combined SoC power for the
machine, so the relay, the agent, the simulator, and the H.264 encoder cannot be
separated. What the measurement does resolve is the cost of the session itself, by
differencing three states on the same machine:

| State | SoC power | Increment over idle |
| --- | --- | --- |
| No session open | 0.66 W (sd 0.14) | — |
| Session open, screen static | 0.64 W (sd 0.29) | ~0, within noise |
| Session open, continuous scrolling | 5.16 W (sd 1.99, peak 15.98) | +4.52 W |

E = (4.21 W + 5.05 W x 0.30) x 1 h = 5.725 Wh = 0.005725 kWh

### Carbon intensity

**Carbon intensity:** 417.3 gCO2eq/kWh

**Location(s):** Republic of Korea.

**Approach:** Location-based.

**Data source + year:** Republic of Korea national grid emission factor,
consumption-side combined, 2023 factor, confirmed by the national greenhouse gas
statistics committee on 2025-12-17. Combustion-based, not lifecycle. The
generation-side figure for the same year is 384.4 gCO2eq/kWh; it is a different
quantity and is not used here.

---

## Section 6 — Embodied Emissions (M)

**Total embodied (allocated):** 1.404 gCO2eq

| Component | Allocated M (gCO2eq) | Data source |
| --- | --- | --- |
| Agent host — MacBook Pro 14-inch (M2 Pro, 512 GB) | 1.404 | Apple Product Environmental Report, 14-inch MacBook Pro (M2 Pro), January 2023. |

**Allocation:** M = TE x (1 / 35,040 h) x (1 / 4 slots). The first factor is a four-year
service life, matching the first-owner lifespan Apple uses in its own reports. The
second is tapflow's documented concurrency of four simulator slots on one host, so one
session takes a quarter of the machine.

**TE definition:** production + transport + end-of-life processing, **excluding the use
stage**. The use stage is computed separately in Section 5 against the Korean grid
factor; including it in TE would double-count it.

**How TE was derived, and how precise it is.** The report prints a life-cycle total of
243 kg CO2e and stage shares only — 79% production, <1% transport, 20% use, <1%
end-of-life processing. There is no numeric per-stage table, so TE is derived rather
than read off: 243 kg x (79% + 1% + 1%) = 196.8 kg, counting each "<1%" stage as a full
1% so that the figure errs upward. Propagating the rounding on all three shares puts TE
between roughly 191 and 198 kg, which moves M between 1.36 and 1.41 gCO2eq and the SCI
score between 3.75 and 3.80 — the third significant figure.

---

## Section 7 — Methodology and Calculation

**Approach:** Hybrid. The active increment is measured. Idle wall power, embodied
carbon, and grid intensity come from published figures.

**How you calculated your score:**

- Power was sampled in three states on one host — no session, session open with a
  static screen, session open with continuous scrolling — using
  `powermetrics --samplers cpu_power`, 60 one-second samples per state, reading
  `Combined Power (CPU + GPU + ANE)`. The difference between the first and third states
  gives the cost of active use: +4.52 W at the SoC.
- Holding a session open with nothing moving on screen costs nothing measurable. The
  static state read 0.02 W *below* idle, well inside the standard deviation, because
  the H.264 encoder has almost nothing to encode when the screen does not change. This
  is why the duty assumption below applies the increment only to the interacting
  fraction of the hour.
- SoC-only instrumentation is deliberate for a difference. Display, SSD, and fan draw
  are constant across the three states and cancel out. Absolute draw therefore comes
  from Apple's published wall-power figure, which already includes platform draw, and
  the SoC increment is converted to wall power with the adapter efficiency from the
  same table.
- Embodied carbon comes from the manufacturer's Product Environmental Report for the
  exact host model, allocated as described in Section 6.
- The grid factor is the national location-based factor for the country the host runs
  in.

**Show your calculation:**

```
E x I = 0.005725 kWh x 417.3 gCO2eq/kWh = 2.389 gCO2eq
M = 1.404 gCO2eq
R = 1 QA session-hour

SCI = (E x I + M) / R = (2.389 + 1.404) / 1 = 3.79 gCO2eq per QA session-hour
```

**Assumptions and limitations:**

| Assumption or limitation | Justification or mitigation |
| --- | --- |
| The active increment applies to 30% of a session-hour. | A QA session is mostly spent looking at the screen, with interaction in bursts. The static state is indistinguishable from idle, so only the interacting fraction carries the increment. 30% is a conservative estimate of that fraction for interactive manual testing. |
| Embodied carbon is allocated over four years and four concurrent simulator slots. | Four years matches the first-owner service life Apple uses in the report the TE figure comes from. Four slots is tapflow's documented concurrency on one host. |
| TE is derived from stage shares, not read from a numeric table. | The report prints only a total and percentages. Each "<1%" stage is counted as a full 1%, which errs upward. The resulting range is stated in Section 6: SCI 3.75 to 3.80. |
| No per-process energy split is available. | `powermetrics` reports combined SoC power for the whole machine. The measurement resolves the session increment by differencing states instead, which is the quantity the score depends on. |
| Single-day, single-host benchmark. | This is one controlled session on 2026-08-03, not an aggregate over an extended production period. It is not represented as reflective of broader production usage. |
| The increment is an upper bound. | The viewer's browser decoded the stream on the same Mac during the benchmark. In normal use the browser runs on the tester's own machine and the agent host only encodes. Sixty seconds of continuous scrolling is also harsher than real QA. |
| The score was measured on v0.18.0; the current release is v0.26.1. | The measurement has not been repeated against the current release. Nothing here should be read as a claim that the figure has been re-verified for it. |
| A second host was modelled but is not the certified figure. | The same calculation for a Mac mini M4 host gives 2.50 gCO2eq per session-hour (O 2.30, M 0.198, TE 27.8 kg of a 32 kg life-cycle total). It is disclosed here rather than certified because it would transfer the active increment from the M2 Pro machine it was measured on to a different chip. The embodied share differs sharply between the two: 37% of the score on the laptop, 7.9% on the desktop. |

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

**Signature:** /s/ Jo Duchan

**Date:** October 2, 2026

**Name and title:** Jo Duchan, maintainer

**Organization:** tapflow (open-source project)

---

## Community Participation (Optional)

**May we feature your organisation?**

- [x] Yes — you may display our organisation name and logo on the GSF certified organisations page
- [ ] No thank you

Logo attached.

**Would you participate in a blog post or case study?**

- [x] Yes — we'd be open to participating in a blog post or case study
- [ ] No thank you

**May we use your disclosure for downstream analysis?**

- [x] Yes — you may use our published disclosure for downstream analysis, including AI syntheses
- [ ] No thank you

---

## Optional Attachments

The full engineering backing for every figure above is public:
https://github.com/jo-duchan/tapflow/blob/main/contributing/sustainability-carbon-math.md
It records the measurement conditions, the three-state power samples, the published
sources, and the arguments that were tested and discarded.

---

## Submission Checklist

- [x] Section 1 — Organization and software details
- [x] Section 2 — SCI score with units and measurement period
- [x] Section 3 — Included and excluded components with rationales
- [x] Section 4 — Functional unit with rationale and measurement method
- [x] Section 5 — Energy with per-component breakdown; carbon intensity with source and year
- [x] Section 6 — Embodied emissions with breakdown (or justification if zero)
- [x] Section 7 — Methodology, assumptions, limitations, and calculation shown
- [x] Attestation — Signed and dated
