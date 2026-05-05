# GSF Self-Certification Program for ISO/IEC 21031:2024

Operational documents and reference materials for the Green Software Foundation's Self-Certification Program for ISO/IEC 21031:2024 (Software Carbon Intensity).

## About the Program

This program enables **any organization** to self-certify conformity with the ISO/IEC 21031:2024 standard (SCI). Organizations submit their SCI calculations along with a signed attestation and full methodology disclosure. A GSF review committee verifies **disclosure completeness** -- not calculation accuracy -- through a structured 7-item review checklist. After reviewer approval, the Software Standards Working Group has a 7-day sign-off period before the certificate is issued. All disclosures are published publicly on GitHub for community review.

The program is free (no fees), follows the ISO/IEC 17050 supplier's declaration of conformity framework, and targets a ~3–4 week turnaround from submission to certificate (10–15 business day review plus 7-day SWG sign-off period).

## Repository Contents

### Program Documentation (`docs/`)

| Document                                                            | Description                                                                                                                                    |
| ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| [applicant-guide.md](docs/applicant-guide.md)                       | Applicant-facing guide: submission requirements, evaluation criteria, outcomes, badge rules, appeals, and timescales                           |
| [reviewer-guide.md](docs/reviewer-guide.md)                         | Reviewer instructions: 7-item checklist with pass/fail examples, edge cases, review record template, and calibration                           |
| [submission-email-template.md](docs/submission-email-template.md)   | 7-section questionnaire template that applicants fill in and email to submit                                                                   |
| [pm-operations-manual.md](docs/pm-operations-manual.md)             | Program Manager's operational reference: daily/weekly/monthly/quarterly tasks, decision handling, SWG sign-off process, SLA targets            |
| [governance.md](docs/governance.md)                                 | Governance structure: roles, decision authority, SWG sign-off, committee formation, change management, reporting, and dispute resolution       |
| [email-templates.md](docs/email-templates.md)                       | 7 email templates: acknowledgement, revision request, approval, rejection, renewal reminder, SWG sign-off notification, challenge notification |
| [badge-usage-guidelines.md](docs/badge-usage-guidelines.md)         | Badge specifications, permitted/prohibited uses, display examples, and compliance enforcement                                                  |
| [claude-review-prompt.md](docs/claude-review-prompt.md)             | Prompt for AI-assisted submission review — paste into Claude with submission materials to get a draft review record                            |
| [imp-schema-documentation.md](docs/imp-schema-documentation.md)     | Impact Manifest Protocol (IMP) schema for optional structured YAML/JSON submissions                                                            |

### Example Submissions (`submissions/`)

A library of complete reference submissions covering different industry profiles. Each contains a `disclosure.md`, `review-record.md`, `approval-email.md`, and a runnable Impact Framework manifest.

| Submission                                                                                              | Industry profile                                                            |
| ------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| [example-greentech-inventory-api](submissions/example-greentech-inventory-api/)                         | B2B SaaS API (reference example — start here)                               |
| [example-neuralcast-llm-inference](submissions/example-neuralcast-llm-inference/)                       | AI inference, GPU-dominated, calculation approach                           |
| [example-meridianbank-payments-platform](submissions/example-meridianbank-payments-platform/)           | Financial services, hybrid on-prem + cloud DR, market-based, multi-region   |
| [example-loftstream-vod-platform](submissions/example-loftstream-vod-platform/)                         | Streaming media, multi-region location-based, network-heavy                 |
| [example-portal-arena-game-backend](submissions/example-portal-arena-game-backend/)                     | Online gaming backend, measurement approach, autoscaled fleet               |
| [example-stacklane-collab-saas](submissions/example-stacklane-collab-saas/)                             | Dev productivity SaaS on fully-managed PaaS, M=0 path                       |

### Other Files

| File                                                   | Description                                                                                                                      |
| ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| [HANDOFF.md](HANDOFF.md)                               | Operator handoff document — start here if you are taking over Program Manager responsibilities                                  |
| [faqs.md](faqs.md)                                     | Frequently asked questions and answers covering eligibility, submission, review, certificates, technical topics, and challenge   |
| [tracking-sheet.csv](tracking-sheet.csv)               | Submission tracking spreadsheet template with columns for status, reviewer, decision, opt-ins                                    |
| [precedent-log.md](precedent-log.md)                   | Running log of edge-case decisions and reasoning for reviewer reference                                                          |
| [scripts/issue-certificate.mjs](scripts/issue-certificate.mjs) | Node.js script that parses a disclosure and calls the badging platform's credentials API (`npm run issue`)              |

## Key Concepts

- **Open to all**: The program is open to any organization that has calculated an SCI score according to ISO/IEC 21031:2024.
- **Self-certification, not third-party audit**: Organizations declare their own conformity with ISO/IEC 21031:2024. GSF verifies disclosure completeness, not accuracy.
- **Single-pass review**: A 7-item checklist covering completeness and disclosure sufficiency. Each item is marked Y (adequate), N (missing), or I (insufficient).
- **SWG sign-off**: After reviewer approval, the Software Standards Working Group has a 7-day objection period before the SWG Chair or Executive Director signs off on certificate issuance.
- **Public disclosure**: All approved submissions are published to enable community validation and peer review.
- **1-year validity**: Certificates expire annually and can be renewed with a full new submission.

## References

- [ISO/IEC 21031:2024 (SCI Specification)](https://github.com/Green-Software-Foundation/sci)
- [Green Software Foundation](https://greensoftware.foundation/)
- [GSF Impact Framework](https://if.greensoftware.foundation/)

## License

See [LICENSE](LICENSE) for details.
