# SCI Self-Certification — Public Disclosure

> **This is an example public disclosure.** It shows what gets published to
> the `greensoftware-foundation/sci-certifications` GitHub repository after
> approval. It is the applicant's submission published as-is, with a
> certificate metadata header prepended and the contact email redacted.

| Field | Value |
|-------|-------|
| **Certificate ID** | GSF-SCI-2026-00006 |
| **Date Issued** | 2026-07-09 |
| **Valid Until** | 2027-07-09 |
| **Certificate URL** | [View certificate](https://badges.greensoftware.foundation/credentials/gsf-sci-2026-00006) |
| **Status** | Active |

---

## Section 1 — About You and Your Software

**Organization name:** StackLane Inc

**Contact name:** Priya Sharma

**Contact email:** *[redacted]*

**Software name:** StackLane Collaborative Workspace

**Software version:** v3.7.0 (release 2026.05.0011, deployed 2026-04-21)

**Software description:**
A B2B collaborative workspace product comprising project boards, technical docs, and embedded chat for product and engineering teams. The application is built on Next.js (App Router) and is fully serverless: there are no servers, containers, or virtual machines under StackLane's operational control. The compute, data, cache, and edge layers are entirely provided by managed-PaaS vendors. The application served approximately 25,000 monthly active users in the measurement period, distributed primarily across North America and Europe.

**Software URL:** https://stacklane.example/about

---

## Section 2 — Your SCI Score

**Measurement start date:** 2026-05-01

**Measurement end date:** 2026-05-30

**Your SCI score:** 170.00 gCO2eq per 1,000 active user-days

---

## Section 3 — Software Boundary

### Included components

| Component | Description | Why included |
|-----------|-------------|--------------|
| Vercel function compute | Next.js Edge and Serverless functions executing application logic (request handling, API endpoints, server-rendered pages) | Material energy consumption attributable to the application |
| Vercel static asset delivery | Vercel CDN serving JS bundles, CSS, fonts, and images for the StackLane web client | Material energy consumption attributable to the application |
| Neon Postgres | Managed Postgres database (scale-to-zero compute) holding application data | Core data tier; material energy when active |
| Upstash Redis | Managed Redis (pay-per-command) used for ephemeral session and rate-limit state | Material energy attributable to the application |
| Cloudflare Workers | Edge auth and image-proxy functions running at Cloudflare's network edge | Material energy attributable to the application |

### Excluded components

| Component | Description | Reason for exclusion |
|-----------|-------------|----------------------|
| User devices | Browsers and mobile devices running the StackLane client | Beyond StackLane's operational control — owned and operated by users |
| User network / ISP | Last-mile connection from user to Cloudflare edge | Beyond StackLane's operational control |
| Provider-shared transit | AWS internal networking, Cloudflare backbone | Shared infrastructure across the providers' tenant base; per-tenant allocation infeasible and the providers report this within their own footprints |
| GitHub Actions CI | Build and deployment pipeline | Runs only on deploys (~5/week, ~3 minutes each); contributes <0.05% of monthly platform energy |
| Sentry / PostHog observability | Third-party error tracking and product analytics | Operated by third parties on their own infrastructure; not under StackLane's operational control |
| Office and corporate IT | StackLane staff devices, video calls, internal tooling | Out of scope for the SCI of the StackLane product itself |

### Shared infrastructure

StackLane has no dedicated infrastructure of its own. All listed components are services provided by managed-PaaS vendors (Vercel, Neon, Upstash, Cloudflare). The underlying hardware is operated, allocated, and refreshed by those vendors. Energy for each component is allocated to StackLane based on the metered usage of that component (function-seconds, compute-hours, command counts, request counts) — that is, the unit by which the vendor itself measures and bills.

---

## Section 4 — Functional Unit (R)

**What is your functional unit?**
1,000 active user-days

**Why did you choose this unit?**
A user-day — one calendar day in which a user authenticates and performs at least one substantive action — is the unit by which engagement, value, and infrastructure load are best understood for a B2B SaaS. It is the metric our product team uses for retention and capacity reasoning. We considered "per active user per month" but this hides intra-month variation; "per session" was rejected because session length varies substantially. We normalise to 1,000 user-days to produce an SCI value at a meaningful scale.

**How did you count or measure the total units?**
Active user-days were counted from the application's analytics warehouse, which records one row per user per day on which any meaningful event was emitted. The count was independently reconciled against the auth provider's `daily_active_user` aggregate, agreement within 0.6%.

**Total units in measurement period:** 750,000 user-days (≈25,000 users × 30 days)

---

## Section 5 — Energy (E) and Carbon Intensity (I)

**Total energy consumed:** 370.00 kWh

**PUE applied:** Not applicable. StackLane operates no data centre infrastructure of its own. Each managed-PaaS provider's reported energy is presumed to be facility-level (i.e. PUE-inclusive); applying our own PUE would double-count.

**How was energy measured or estimated?**
A calculation approach. For each managed-PaaS component, energy was estimated from the provider's own usage telemetry (function-seconds for Vercel; active compute-hours for Neon; commands billed for Upstash; requests for Cloudflare) multiplied by published energy coefficients. Vercel function and edge function-seconds were converted using Cloud Carbon Footprint's published serverless coefficient. Neon active compute-hours were converted using Cloud Carbon Footprint's managed-database coefficient. Upstash and Cloudflare per-operation energy values were taken from the providers' published sustainability reports. We have no direct hardware power telemetry — see Assumptions and Limitations.

**Energy breakdown by component:**

| Component | Usage measured | Energy (kWh) | How calculated | Data source |
|-----------|---------------|-------------|----------------|-------------|
| Vercel function compute | ~210M invocations × ~150 ms mean = ~31.5M function-seconds | 250 | Function-seconds × CCF serverless coefficient (~8 µWh per function-second) | Vercel usage dashboard; Cloud Carbon Footprint serverless methodology |
| Vercel static asset delivery | ~20,000 GB egress | 20 | Static egress GB × GSF coefficient (0.001 kWh/GB) | Vercel bandwidth report; GSF SCI Data |
| Neon Postgres | ~1,200 active compute-hours over the period (scale-to-zero) | 40 | Active compute-hours × CCF managed-DB coefficient (~33 W effective) | Neon usage dashboard; Cloud Carbon Footprint |
| Upstash Redis | ~480M commands | 10 | Commands × Upstash published per-command energy figure | Upstash sustainability report 2024 |
| Cloudflare Workers | ~520M edge requests | 50 | Requests × Cloudflare's published per-request energy figure | Cloudflare Impact Report 2024 |
| **Total** | | **370.00** | | |

### Carbon intensity

**Carbon intensity value:** 370 gCO2eq/kWh (Vercel & Upstash, AWS us-east-1); 410 gCO2eq/kWh (Neon, AWS us-east-2); 150 gCO2eq/kWh (Cloudflare global edge); effective combined intensity 344.6 gCO2eq/kWh by energy weight

**Location(s):** Multi-region across providers — Vercel and Upstash on AWS us-east-1 (Virginia, USA); Neon on AWS us-east-2 (Ohio, USA); Cloudflare on its global edge network

**Approach:** Location-based

**Data source + year:**
- AWS us-east-1: EPA eGRID 2023, SRVC subregion, published February 2025
- AWS us-east-2: EPA eGRID 2023, RFCW subregion, published February 2025
- Cloudflare global edge: Cloudflare Impact Report 2024, location-based renewable-adjusted figure of ~150 gCO2eq/kWh, published April 2025

**Per-provider breakdown:**

| Provider region | Component scope | Energy (kWh) | gCO2eq/kWh | Operational gCO2eq | Source |
|----------------|----------------|-------------|------------|-------------------|--------|
| AWS us-east-1 (Vercel) | Vercel function + Vercel static | 270 | 370 | 99,900 | EPA eGRID 2023 SRVC |
| AWS us-east-2 (Neon) | Neon Postgres | 40 | 410 | 16,400 | EPA eGRID 2023 RFCW |
| AWS us-east-1 (Upstash) | Upstash Redis | 10 | 370 | 3,700 | EPA eGRID 2023 SRVC |
| Cloudflare global edge | Cloudflare Workers | 50 | 150 | 7,500 | Cloudflare Impact Report 2024 |
| **Total** | | **370** | (effective 344.6) | **127,500** | |

---

## Section 6 — Embodied Emissions (M)

**Total embodied emissions allocated to this measurement:** 0 gCO2eq

**Justification for M = 0:**
StackLane operates no hardware. There are no servers, containers, virtual machines, or storage devices under StackLane's operational control. All compute, data, cache, and edge infrastructure is provided by managed-PaaS vendors (Vercel, Neon, Upstash, Cloudflare) who own, operate, allocate, refresh, and dispose of the underlying hardware. Per ISO/IEC 21031:2024, embodied emissions are allocated to the operator with operational control over the hardware lifecycle. StackLane has none.

We acknowledge that physical hardware exists somewhere in our value chain, and that hardware embodied emissions are real. We rely on the providers above to disclose those emissions within their own footprints. StackLane reports M = 0 honestly: it is not zero because hardware is absent from the value chain, but because StackLane has zero operational control over that hardware. A future revision of ISO/IEC 21031 may introduce a Scope-3-style allocation for managed-PaaS consumers; we will update this disclosure if so.

---

## Section 7 — Methodology and Calculation

**Overall approach:** Calculation (provider usage telemetry × provider-published or industry-standard energy coefficients)

**Describe your methodology:**
A pure calculation approach. For each of the five managed-PaaS components in the boundary, we used the provider's own usage telemetry (which is also the basis on which they bill us) as the activity metric, then multiplied by an energy coefficient — provider-published where available (Cloudflare, Upstash) or industry-standard via Cloud Carbon Footprint where not (Vercel functions, Neon DB). We did not apply our own PUE: each provider's coefficient is presumed facility-level (PUE-inclusive), so applying our own PUE would double-count overhead. We applied region-specific carbon intensity for each provider using EPA eGRID 2023 for the AWS regions and the Cloudflare Impact Report 2024 location-based figure for Cloudflare's global edge. Embodied emissions are reported as M = 0 with explicit justification grounded in operational control.

**Assumptions and limitations:**

| Assumption or limitation | Justification or mitigation |
|--------------------------|----------------------------|
| Vercel function-second energy is ~8 µWh | Cloud Carbon Footprint serverless coefficient based on Lambda-equivalent reference workload; provider does not publish a per-invocation figure |
| Neon active-hour energy uses CCF managed-DB coefficient | Neon does not publish per-active-hour energy; CCF managed-database (~33 W effective) is the closest industry-standard proxy |
| Upstash per-command energy from Upstash Sustainability Report 2024 | Provider-published value; we cannot independently verify and must trust the disclosure |
| Cloudflare per-request energy from CF Impact Report 2024 | Provider-published value; we cannot independently verify |
| Static asset egress at GSF 0.001 kWh/GB coefficient | GSF SCI Data project published value — best available estimate for internet transport energy |
| No PUE applied at our level | Provider coefficients are facility-level (PUE-inclusive); applying our own would double-count |
| Embodied M = 0 due to no operational control over hardware | StackLane has no servers, containers, or VMs of its own; per ISO/IEC 21031:2024 embodied is allocated to the operator with operational control. The providers retain operational control of their hardware. |
| Provider regions are stable across the period | We selected the providers' default AWS regions; our infrastructure-as-code locks Vercel to us-east-1, Neon to us-east-2, etc. |
| User device energy is excluded | User devices are out of operational control; energy is borne by users on their hardware |
| Carbon intensity uses location-based EPA eGRID 2023 for AWS regions | Location-based methodology consistent across the disclosure; the providers' market-based REC figures are not used to avoid mixing methodologies |
| Cloudflare 150 gCO2eq/kWh is provider-disclosed | Cloudflare reports this as a location-based figure reflecting renewable matching across its network; we use it directly |
| Estimation error on energy is approximately ±25% | Larger uncertainty than fully-metered submissions because we depend on provider-published or modelled coefficients rather than direct hardware telemetry |

### Show your calculation

```
Per-provider operational emissions:

Vercel function compute (AWS us-east-1):
  250 kWh × 370 gCO2eq/kWh                         =  92,500 gCO2eq
Vercel static delivery (AWS us-east-1):
   20 kWh × 370 gCO2eq/kWh                         =   7,400 gCO2eq
Neon Postgres (AWS us-east-2):
   40 kWh × 410 gCO2eq/kWh                         =  16,400 gCO2eq
Upstash Redis (AWS us-east-1):
   10 kWh × 370 gCO2eq/kWh                         =   3,700 gCO2eq
Cloudflare Workers (CF global edge):
   50 kWh × 150 gCO2eq/kWh                         =   7,500 gCO2eq

Total energy E                                     =     370.00 kWh
Total operational O                                =  127,500 gCO2eq

Embodied emissions M (no hardware operational control):
                                                   =       0 gCO2eq

Total carbon (O + M)                               =  127,500 gCO2eq

Functional units (R)         = 750,000 user-days / 1,000
                             =       750

SCI = (O + M) / R            = 127,500 / 750
                             =  170.00 gCO2eq per 1,000 active user-days
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

**Signature:** Priya Sharma

**Date:** 2026-06-15

**Name and title:** Priya Sharma, Co-Founder and Head of Engineering

**Organization:** StackLane Inc

---

## Community Participation

- [x] Yes — you may display our organisation name and logo on the GSF certified organisations page
- [x] Yes — we'd be open to participating in a blog post or case study
- [x] Yes — you may use our published disclosure for downstream analysis, including AI syntheses

---

## Optional Attachments

- [x] Impact Framework manifest file (IMP/YAML) — see attached: `stacklane-workspace-v3.7-sci.yml`

  Run with: `if-run --manifest stacklane-workspace-v3.7-sci.yml`

  The manifest models each of the five managed-PaaS components as a separate child node, with each provider's region-specific carbon intensity and `carbon-embodied: 0` (M = 0). The system-total uses pre-summed `carbon-operational` (because providers run in different regions with different intensities). The manifest independently computes 170.00 gCO2eq per 1,000 active user-days exactly.

---

## Submission Checklist

- [x] Section 1 — Organization and software details
- [x] Section 2 — SCI score with units and measurement period
- [x] Section 3 — Included and excluded components with rationales
- [x] Section 4 — Functional unit with rationale and measurement method
- [x] Section 5 — Energy with per-component breakdown; carbon intensity with sources and years
- [x] Section 6 — Embodied emissions stated as M = 0 with explicit justification
- [x] Section 7 — Methodology, assumptions, limitations, and calculation shown
- [x] Attestation — Signed and dated

---

*This disclosure is published under the GSF SCI Self-Certification Program. To challenge this certification, see the [Community Challenge Process](https://github.com/greensoftware-foundation/sci-certifications/blob/main/CHALLENGE-PROCESS.md).*
