# GSF Self-Certification Program for ISO/IEC 21031:2024

Planning and operational documents for the Green Software Foundation's Self-Certification Program for ISO/IEC 21031:2024 (Software Carbon Intensity).

## About the Program

This program enables **any organization** to self-certify conformity with the ISO/IEC 21031:2024 standard (SCI). Organizations submit their SCI calculations along with a signed attestation and full methodology disclosure. A GSF review committee verifies **disclosure completeness** -- not calculation accuracy -- through a structured 7-item review checklist. After reviewer approval, the Software Standards Working Group has a 7-day sign-off period before the certificate is issued. All disclosures are published publicly on GitHub for community review.

The program is free (no fees), follows the ISO/IEC 17050 supplier's declaration of conformity framework, and targets a ~3–4 week turnaround from submission to certificate (10–15 business day review plus 7-day SWG sign-off period).

## Repository Contents

### Planning Documents (`planning/`)

| Document                                                                      | Description                                                                                                                                    |
| ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| [GSF SCP Proposal.md](planning/GSF%20SCP%20Proposal.md)                       | Proposal document: program model, rationale, eligibility, review process, governance, and success metrics                                      |
| [LAUNCH-IMPLEMENTATION-PLAN.md](planning/LAUNCH-IMPLEMENTATION-PLAN.md)       | Week-by-week implementation plan with acceptance criteria, review procedures, and launch readiness checklist                                   |
| [Applicant-Guide.md](planning/Applicant-Guide.md)                             | Applicant-facing guide: submission requirements, evaluation criteria, outcomes, badge rules, appeals, and timescales                           |
| [Reviewer-Guide.md](planning/Reviewer-Guide.md)                               | Reviewer instructions: 7-item checklist with pass/fail examples, edge cases, review record template, and calibration                           |
| [submission-email-template.md](planning/submission-email-template.md)         | 7-section questionnaire template that applicants fill in and email to submit                                                                   |
| [Simplified-Application-Design.md](planning/Simplified-Application-Design.md) | Design document for the simplified questionnaire-based application experience and 7-item review checklist                                      |
| [PM-Operations-Manual.md](planning/PM-Operations-Manual.md)                   | Program Manager's operational reference: daily/weekly/monthly/quarterly tasks, decision handling, SWG sign-off process, SLA targets            |
| [Governance.md](planning/Governance.md)                                       | Governance structure: roles, decision authority, SWG sign-off, committee formation, change management, reporting, and dispute resolution       |
| [email-templates.md](planning/email-templates.md)                             | 7 email templates: acknowledgement, revision request, approval, rejection, renewal reminder, SWG sign-off notification, challenge notification |
| [Badge-Usage-Guidelines.md](planning/Badge-Usage-Guidelines.md)               | Badge specifications, permitted/prohibited uses, display examples, and compliance enforcement                                                  |
| [faqs.md](faqs.md)                                                            | Frequently asked questions and answers covering eligibility, submission, review, certificates, technical topics, and community challenge       |
| [Landing-Page-Design.md](planning/Landing-Page-Design.md)                     | Design document for the applicant-facing landing page on greensoftware.foundation                                                              |
| [claude-review-prompt.md](planning/claude-review-prompt.md)                   | Prompt for AI-assisted submission review — paste into Claude with submission materials to get a draft review record                            |
| [IMP-Schema-Documentation.md](planning/IMP-Schema-Documentation.md)           | Impact Manifest Protocol (IMP) schema for optional structured YAML/JSON submissions                                                            |
| [certification-update-plan.md](planning/certification-update-plan.md)         | Technical plan for updating the GSF badging platform to support SCI certificates                                                               |
| [sci-certification-tech-spec.md](planning/sci-certification-tech-spec.md)     | Technical specification for the certificate issuance integration                                                                               |

### Example Submission (`submissions/`)

| File                                                                                                             | Description                                                                                |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| [example-greentech-inventory-api/disclosure.md](submissions/example-greentech-inventory-api/disclosure.md)       | Example completed submission showing what a published disclosure looks like after approval |
| [example-greentech-inventory-api/review-record.md](submissions/example-greentech-inventory-api/review-record.md) | Example completed review record showing a reviewer's 7-item checklist assessment           |

### Scripts (`scripts/`)

| File                                                   | Description                                                                                                                      |
| ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| [issue-certificate.mjs](scripts/issue-certificate.mjs) | Node.js script to parse a disclosure and call the badging platform's credentials API (needs updating for current section format) |

### Other Files

| File                                     | Description                                                                                        |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------- |
| [tracking-sheet.csv](tracking-sheet.csv) | Submission tracking spreadsheet template with columns for status, reviewer, decision, opt-ins      |
| [precedent-log.md](precedent-log.md)     | Running log of edge-case decisions and reasoning for reviewer reference (empty, ready for entries) |

## Key Concepts

- **Open to all**: The program is open to any organization that has calculated an SCI score according to ISO/IEC 21031:2024.
- **Self-certification, not third-party audit**: Organizations declare their own conformity with ISO/IEC 21031:2024. GSF verifies disclosure completeness, not accuracy.
- **Single-pass review**: A 7-item checklist covering completeness and disclosure sufficiency. Each item is marked Y (adequate), N (missing), or I (insufficient).
- **SWG sign-off**: After reviewer approval, the Software Standards Working Group has a 7-day objection period before the SWG Chair or Executive Director signs off on certificate issuance.
- **Public disclosure**: All approved submissions are published to enable community validation and peer review.
- **1-year validity**: Certificates expire annually and can be renewed with a full new submission.

## Status

The program is targeting launch approximately 2-4 weeks after steering committee approval. See the [Launch Implementation Plan](planning/LAUNCH-IMPLEMENTATION-PLAN.md) for the full timeline and readiness checklist.

## References

- [ISO/IEC 21031:2024 (SCI Specification)](https://github.com/Green-Software-Foundation/sci)
- [Green Software Foundation](https://greensoftware.foundation/)
- [GSF Impact Framework](https://if.greensoftware.foundation/)

## License

See [LICENSE](LICENSE) for details.
