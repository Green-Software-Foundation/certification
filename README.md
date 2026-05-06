# GSF Self-Certification Program for ISO/IEC 21031:2024

This program enables **any organization** to self-certify conformity with ISO/IEC 21031:2024 (Software Carbon Intensity). It is **free**, open to any organization, and targets a **~3–4 week turnaround** from submission to certificate.

You submit your SCI calculation along with a signed attestation and full methodology disclosure. A GSF review committee verifies **disclosure completeness** — not calculation accuracy — through a structured 7-item checklist. All disclosures are published publicly on GitHub for community review.

> **Ready to apply?** Start with the [Applicant Guide](docs/applicant-guide.md). To see what a complete submission looks like first, browse the [reference example](submissions/example-greentech-inventory-api/).

## How It Works

This is a **self-certification** program, not a third-party audit. Your organization calculates an SCI score, discloses the full methodology, and signs an attestation. GSF reviewers check that your disclosure is complete and detailed enough for the community to understand and evaluate — they don't check whether your numbers are correct. The credibility of the certificate comes from public disclosure and community review.

**Four steps from start to certificate:**

1. **Calculate your SCI score** in accordance with ISO/IEC 21031:2024
2. **Prepare your submission** using the [submission template](docs/submission-email-template.md) — a 7-section questionnaire covering your boundary, functional unit, energy and carbon data, embodied emissions, and methodology
3. **Email your submission** to sci-certification@greensoftware.foundation — a reviewer checks disclosure completeness against a 7-item checklist within 10–15 business days
4. **Receive your certificate** after a 7-day Software Standards Working Group sign-off period

Certificates are valid for one year and renewed by full resubmission.

## What Your Submission Must Cover

All 7 sections are required — missing anything means your submission is returned for revision before review begins. Use the [submission template](docs/submission-email-template.md) as your starting point; it is structured section by section with examples for every field.

| Section | What to include |
|---|---|
| **1. About you and your software** | Organisation name, contact, software name, version, brief description |
| **2. SCI score** | Score with units (e.g. "349.63 gCO2eq per 1,000 API requests"), measurement start and end dates |
| **3. Software boundary** | Included components; excluded components each with a specific rationale; how shared infrastructure is handled |
| **4. Functional unit (R)** | The unit you chose, why it reflects how your software scales or delivers value, how you counted it, total units in the period |
| **5. Energy and carbon intensity (E, I)** | Total energy with PUE; per-component breakdown with data sources; carbon intensity value with location, approach, and named source with year |
| **6. Embodied emissions (M)** | Total M with unit, or a specific justification if M=0; per-component breakdown with sources if M>0 |
| **7. Methodology and calculation** | Approach (measurement/calculation/hybrid); at least one specific assumption with justification; at least one specific limitation; full SCI calculation shown with your actual numbers |
| **Attestation** | The 10-point attestation from the template, signed and dated |

**Your submission becomes your public disclosure.** If approved, it is published as-is to the public GitHub repository (contact email redacted, certificate metadata header added). Write it knowing it will be publicly visible — there is no separate disclosure step.

**To submit:** Email to sci-certification@greensoftware.foundation with the subject line: `SCI Self-Certification Submission — [Your Organization Name] — [Your Software Name]`. Accepted formats: PDF, Word, Markdown, or plain text in the email body.

## How Review Works
A reviewer checks your disclosure against a **7-item completeness checklist** — not whether your numbers are correct. The bar is adequate, not perfect: enough detail that a practitioner can see what you did and where your numbers came from.

1. You receive an acknowledgement with a tracking number within 1 business day
2. A reviewer assesses your submission within 10–15 business days
3. **Approved** — enters a 7-day SWG objection period, then your certificate is issued
4. **Revision requested** — you receive specific feedback on what to fix and can resubmit as many times as needed. This is not a rejection
5. **Rejected** — reserved exclusively for bad faith (fabricated data, fraud, or persistent refusal to engage after revision requests)

For full details on the checklist and what each outcome means, see the [Applicant Guide](docs/applicant-guide.md).

## Resources

| Document | Purpose |
|---|---|
| [applicant-guide.md](docs/applicant-guide.md) | Complete submission requirements, evaluation criteria, badge rules, appeals, and timescales |
| [submission-email-template.md](docs/submission-email-template.md) | The 7-section template to fill in and email |
| [faqs.md](faqs.md) | Answers covering eligibility, submission, review, certificates, technical questions, and the challenge process |
| [badge-usage-guidelines.md](docs/badge-usage-guidelines.md) | Badge specifications, permitted and prohibited uses, display examples, and downloadable assets |
| [imp-schema-documentation.md](docs/imp-schema-documentation.md) | Optional YAML/JSON submission format for automated pipelines and CI/CD integration |

**Example submissions** — each includes a complete disclosure, review record, approval email, and a runnable Impact Framework manifest:

| Submission | Profile |
|---|---|
| [example-greentech-inventory-api](submissions/example-greentech-inventory-api/) | B2B SaaS API — **start here** |
| [example-neuralcast-llm-inference](submissions/example-neuralcast-llm-inference/) | AI inference, GPU-dominated, calculation approach |
| [example-meridianbank-payments-platform](submissions/example-meridianbank-payments-platform/) | Financial services, hybrid on-prem + cloud DR, market-based, multi-region |
| [example-loftstream-vod-platform](submissions/example-loftstream-vod-platform/) | Streaming media, multi-region location-based, network-heavy |
| [example-portal-arena-game-backend](submissions/example-portal-arena-game-backend/) | Online gaming backend, measurement approach, autoscaled fleet |
| [example-stacklane-collab-saas](submissions/example-stacklane-collab-saas/) | Dev productivity SaaS on fully-managed PaaS, M=0 path |

## Key Facts

- **Open to all** — any organization that has calculated an SCI score under ISO/IEC 21031:2024 is eligible, regardless of size, type, location, or GSF membership
- **Free** — no application fees, no renewal fees
- **Self-certification, not third-party audit** — organizations declare their own conformity with ISO/IEC 21031:2024; GSF verifies disclosure completeness only
- **Public disclosure** — all approved submissions are published to GitHub so the community can review them; this is what gives the self-certification its credibility
- **1-year validity** — certificates expire annually and require a full resubmission to renew
- **Questions?** Email sci-certification@greensoftware.foundation

## References

- [ISO/IEC 21031:2024 (SCI Specification)](https://github.com/Green-Software-Foundation/sci)
- [GSF Impact Framework](https://if.greensoftware.foundation/)
- [Green Software Foundation](https://greensoftware.foundation/)
