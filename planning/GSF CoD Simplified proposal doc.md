# GSF Self-Certification Program for ISO/IEC 21031:2024 — Proposal Document

## Executive Summary

The Green Software Foundation (GSF) proposes a **Self-Certification Program** for ISO/IEC 21031:2024 (Software Carbon Intensity). Organizations self-certify conformity with the standard, submit a structured disclosure, and GSF verifies that the disclosure is complete and detailed enough for community review. Approved submissions receive a 1-year certificate and are published publicly.

**Key points:**

- **Self-certification, not third-party audit** — organizations declare their own conformity; GSF verifies disclosure completeness only
- **Free for members** — no additional fees, email-based submission, open to all GSF member organizations
- **Transparent** — all approved disclosures are published on GitHub for community validation
- **Fast** — ~3–4 weeks from submission to certificate (10–15 business day review + 7-day SWG sign-off period)
- **Community-driven accountability** — public disclosure and a structured challenge mechanism replace expensive audits

---

## 1. Why Self-Certification

### The Problem

ISO/IEC 21031:2024 (SCI) is now a published standard, but there is no mechanism for organizations to demonstrate conformity. Third-party ISO certification would require an accredited certification body, costs of $12,000–$47,000+ annually, and months of audit cycles — barriers that would suppress adoption of an emerging standard.

### The Model

Self-certification (ISO/IEC 17050, "supplier's declaration of conformity") is a recognized conformity assessment approach where organizations declare their own conformity. It is widely used for voluntary standards and is appropriate for emerging standards where the goal is adoption, not gatekeeping.

GSF adds a disclosure verification layer: a structured review that confirms the submission contains enough detail for a knowledgeable practitioner to understand and evaluate the calculation. This is more rigorous than pure self-attestation (e.g., OpenChain's yes/no checklist) but far lighter than a full conformity audit.

| | This Program | Third-Party Certification |
|---|---|---|
| **Who declares conformity** | The organization | An independent auditor |
| **What GSF verifies** | Disclosure completeness | N/A (not this program) |
| **Cost** | Free | $12,000–$47,000+/year |
| **Timeline** | ~3–4 weeks | Months |
| **ISO framework** | ISO/IEC 17050 | ISO/IEC 17021-1 |
| **Accountability** | Community validation via public disclosure | Auditor validation |

### Precedent: OpenChain

The OpenChain Project (Linux Foundation) operates a successful self-certification program for ISO/IEC 5230:2020 and ISO/IEC 18974:2023 with 300+ organizations publicly listed. Key differences from our model:

| | OpenChain | GSF SCI Program |
|---|---|---|
| **Checklist** | Yes/no process questions | Structured technical disclosure |
| **Verification** | None (pure self-attestation) | Human review of disclosure completeness |
| **Public registry** | Organization listing | Full disclosure publication |
| **Challenge mechanism** | None | Structured community challenge process |
| **Certificate** | None (self-cert tier) | Formal certificate issued |
| **Review cycle** | 18 months, self-enforced | 1 year, renewal by resubmission |

---

## 2. Eligibility and Submission

### Who Can Apply

The program is open to **GSF member organizations** that have calculated an SCI score according to ISO/IEC 21031:2024. Applicants must be current members of the Green Software Foundation. Within that membership, there are no further restrictions on organization size, type, location, domain, or methodology. The program is **free** — there is no additional fee beyond GSF membership.

### What Applicants Submit

Applicants email a completed 7-section questionnaire to `sci-certification@greensoftware.foundation`:

| Section | Content |
|---------|---------|
| 1. About you and your software | Organization, contact, software name/version/description |
| 2. Your SCI score | Score with units, measurement period |
| 3. Software boundary | Included/excluded components with rationales, shared infrastructure |
| 4. Functional unit (R) | Unit, rationale, counting method, total |
| 5. Energy and carbon intensity (E, I) | Per-component energy with sources, carbon intensity with location and source+year |
| 6. Embodied emissions (M) | Total or justified M=0, per-component with sources |
| 7. Methodology and calculation | Approach, assumptions, limitations, full calculation shown |

Plus a signed **10-point attestation** declaring ISO/IEC 21031:2024 conformity, accepting responsibility for accuracy, agreeing to public disclosure, and committing to badge usage rules.

The attestation and full template are in `submission-email-template.md`. Detailed submission requirements are in the **Applicant Guide**.

### Community Participation (Optional)

Applicants may opt in to:
- **Logo display** — organization name and logo featured on the Certified Organisations page
- **Blog participation** — invited to participate in a blog post or case study

---

## 3. Review Process

### How Reviews Work

A GSF reviewer evaluates each submission against a **7-item disclosure checklist** in a single pass (~30 minutes). Each item is marked **Y** (adequate), **N** (missing), or **I** (insufficient — present but too vague).

The reviewer's question for every item: *"Could a knowledgeable practitioner reading this disclosure understand and evaluate this part of the calculation?"*

**What reviewers do NOT assess:** whether the calculation conforms to ISO/IEC 21031:2024, whether the score is correct, whether the methodology is appropriate, or whether assumptions are right. The applicant self-certifies conformity; the community validates through review of the published disclosure.

### Decision Rule

- **All Y** → Approved
- **Any N or I** → Revision requested (specific feedback by item number)
- **3+ items N or I** → Substantially incomplete (directed back to the template)
- **Bad faith** → Rejected (fabricated data, fraud — requires 2 reviewers to concur)

### SWG Sign-Off

After a reviewer recommends approval, the certificate is **not issued immediately**. The Software Standards Working Group has a **7-day objection period**:

1. The PM notifies the SWG with the submission details and review record.
2. Any SWG member may object within 7 calendar days with a specific rationale.
3. If no objections, the SWG Chair or GSF Executive Director provides explicit sign-off.
4. If an objection is raised, it must be resolved before sign-off is granted.
5. After sign-off, the certificate is issued.

This ensures governance oversight of every certificate while keeping the process lightweight.

### Timeline

| Step | Timeline |
|------|----------|
| Acknowledgement | Within 1 business day |
| Review decision | 10–15 business days (up to 20 for complex cases) |
| SWG objection period | 7 calendar days |
| Sign-off and certificate issuance | After objection period |
| **Total** | **~3–4 weeks** |

Full review procedures, the checklist with pass/fail examples, and edge case guidance are in the **Reviewer Guide**. Operational procedures are in the **PM Operations Manual**.

---

## 4. Certificate and Badge

### Certificate

On approval and sign-off, GSF issues a certificate via its existing badging platform (`badges.greensoftware.foundation`):

- **Certificate ID**: `GSF-SCI-YYYY-NNNNN`
- **Content**: organization name, software name/version, SCI score with units, measurement period, self-certification statement, disclaimer, link to full disclosure
- **Validity**: 1 year from issuance
- **Public verification**: certificate URL is publicly accessible
- **Full disclosure**: the applicant's submission is published to `greensoftware-foundation/sci-certifications` on GitHub

### Badge

Certificate holders may display an official badge (SVG/PNG, light/dark variants) on websites, READMEs, presentations, and marketing materials. The badge must link to the certificate URL.

### The Single Most Important Rule

**Always include the "self-certified" qualifier when claiming ISO/IEC 21031:2024 conformity.** Removing this qualifier is grounds for revocation. Certificate holders may say "self-certified compliant with ISO/IEC 21031:2024" — never "ISO certified" or "GSF verified."

Full badge specifications, permitted/prohibited language, and enforcement procedures are in the **Badge Usage Guidelines**.

### Renewal

Certificates expire after 1 year. Renewal requires a full new submission through the same process (no abbreviated review). Renewed certificates receive a new ID linked to the previous one. A renewal reminder is sent 30 days before expiry.

---

## 5. Governance

### Roles

| Role | Responsibility |
|------|---------------|
| **Program Manager** (GSF Head of R&D) | Day-to-day operations, submission routing, SLA monitoring, certificate issuance, quarterly reporting |
| **SWG Chair** | Certificate sign-off after objection period, override authority, final appeal arbiter |
| **Review Committee** (3+ independent members) | Review submissions, enforce badge misuse, set precedent on edge cases |
| **Software Standards Working Group** | Approves substantive program changes, receives quarterly reports, objection period for approvals |
| **Steering Committee** | Strategic oversight via quarterly reports |

### Key Governance Principles

- **Separation of concerns**: PM runs operations, committee reviews submissions, SWG governs rules, SWG Chair signs off on certificates
- **Independence**: reviewers must be from different institutions and not GSF staff
- **Conflict of interest**: reviewers recuse themselves from submissions involving their employer
- **Change management**: operational changes (templates, tooling) — PM unilateral; substantive changes (criteria, fees, validity) — SWG approval required

Full governance structure, committee formation, decision-making procedures, and reporting requirements are in **Governance.md**.

---

## 6. Community Challenge

Because this is self-certification, the community serves as the validation layer. Any party may challenge a certificate by emailing `sci-certification@greensoftware.foundation` with specific concerns and evidence.

| Phase | Timeline | What happens |
|-------|----------|-------------|
| Initial review | 5 business days | GSF reviews for legitimacy; frivolous challenges dismissed |
| Response period | 30 days | Certificate holder responds; status changes to "Under Community Review" |
| Evaluation | 15 business days | GSF evaluates and determines outcome |

**Outcomes:** challenge dismissed (certificate returns to Active), minor corrections (disclosure updated), material non-conformity (certificate revoked, may resubmit), or bad faith confirmed (revoked, 12–24 month ban).

---

## 7. Dispute Resolution

A three-phase escalation process handles disputes about review decisions:

| Phase | Timeline | Decision-maker |
|-------|----------|---------------|
| **Informal resolution** | Days 1–10 | Program Manager |
| **Formal review** | Days 11–30 | 3-person panel from review committee |
| **Final appeal** | Days 31–60 | SWG Chair (final, limited to procedural errors or new evidence) |

The dispute process addresses whether disclosure requirements were met and whether procedures were followed. It does **not** adjudicate calculation accuracy, methodology quality, or technical debates — those are matters for community review.

---

## 8. Revocation

| Category | Grounds | Process |
|----------|---------|---------|
| **Mandatory** | Fabrication/misrepresentation, serious code of conduct violation, applicant request | Automatic |
| **Discretionary** | Persistent badge misuse (after warning), failure to correct material omissions, unresponsive to disputes | Committee decision (quorum of 3, consensus or 2/3 vote) |
| **Not grounds** | Calculation errors, methodology disagreements, specification changes, expiration | N/A |

Revoked certificates display "Revoked" status publicly. The holder may resubmit after addressing the cause; serious violations may result in a temporary or permanent ban.

---

## 9. Code of Conduct

Applicants agree to:

- **Self-certify in good faith** — declare conformity honestly, maintain documentation for 3 years
- **Be transparent** — disclose assumptions, limitations, and data sources clearly
- **Use the certificate correctly** — always include "self-certified" qualifier, remove badge on expiry
- **Engage constructively** — respond to revision requests and community challenges professionally

Violations follow a graduated response: warning with 14 days to correct → certificate revocation → potential ban. Severe violations (fraud, fabrication) trigger immediate revocation.

---

## 10. Success Metrics

### Year 1 Targets

| Category | Metric | Target |
|----------|--------|--------|
| **Adoption** | Submissions received | 20–50 |
| **Adoption** | Unique organizations | 10+ |
| **Adoption** | Software categories | 3+ |
| **Operations** | Average review time | <15 business days |
| **Operations** | Approval rate | 70–90% |
| **Quality** | Inter-reviewer agreement | 80%+ |
| **Quality** | Major badge misuse incidents | 0 |

Year 2 targets will be set after Year 1 results are available, at the annual program review.

### SLA Breach Procedure

If a review exceeds the 15 business day target: contact the applicant with an apology and updated timeline, then secure reviewer capacity to deliver promptly. Breaches are tracked and reported quarterly.

---

## References

1. **UKAS Fee Schedules** — UK Accreditation Service publishes fee ranges for initial accreditation assessments (£9,583–£34,614+). See [UKAS Fees and Charges](https://www.ukas.com/services/accreditation-fees/).
2. **Third-party ISO certification costs** — For management system certifications, costs typically range from $5,000–$15,000+ for initial certification depending on scope and size.
3. **OpenChain Project** — Linux Foundation self-certification program for ISO/IEC 5230:2020 and ISO/IEC 18974:2023. 300+ organizations listed. See [OpenChain Self-Certification](https://www.openchainproject.org/checklist-iso-5230-2020) and [Community of Conformance](https://www.openchainproject.org/community-of-conformance).

---

## Related Documents

| Document | What it covers |
|----------|---------------|
| `Applicant-Guide.md` | Full submission requirements, evaluation criteria, badge rules, appeals |
| `submission-email-template.md` | The 7-section questionnaire applicants fill in |
| `Reviewer-Guide.md` | 7-item checklist with pass/fail examples, edge cases, review record template |
| `PM-Operations-Manual.md` | Daily/weekly/monthly/quarterly operational procedures |
| `Governance.md` | Roles, authority, committee formation, change management, reporting |
| `Badge-Usage-Guidelines.md` | Badge specs, permitted/prohibited uses, enforcement |
| `LAUNCH-IMPLEMENTATION-PLAN.md` | Week-by-week implementation timeline and readiness checklist |
| `email-templates.md` | 7 email templates for program communications |
| `Simplified-Application-Design.md` | Design rationale for the 7-section template and 7-item checklist |
