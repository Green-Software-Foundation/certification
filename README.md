# GSF Self-Certification Program for ISO/IEC 21031:2024

Planning and operational documents for the Green Software Foundation's Self-Certification Program for ISO/IEC 21031:2024 (Software Carbon Intensity).

## About the Program

This program enables organizations to **self-certify conformity** with the ISO/IEC 21031:2024 standard (SCI). Organizations submit their SCI calculations along with a signed attestation and full methodology disclosure. A GSF review committee verifies **disclosure completeness** -- not calculation accuracy -- through a structured 7-item review checklist. Approved submissions receive a 1-year certificate issued via the GSF badging platform, and all disclosures are published publicly on GitHub for community review.

The program is free, follows the ISO/IEC 17050 supplier's declaration of conformity framework, and targets a ~3–4 week turnaround from submission to certificate (10–15 business day review plus 7-day SWG sign-off period).

## Repository Contents

### Planning Documents (`planning/`)

| Document | Description |
|----------|-------------|
| [GSF CoD Simplified proposal doc.md](planning/GSF%20CoD%20Simplified%20proposal%20doc.md) | Original proposal document covering program model, submission requirements, review process, governance, and certificate lifecycle (filename predates the "SCI Self-Certification Program" name) |
| [LAUNCH-IMPLEMENTATION-PLAN.md](planning/LAUNCH-IMPLEMENTATION-PLAN.md) | Week-by-week implementation plan with acceptance criteria, review procedures, and launch readiness checklist |
| [submission-email-template.md](planning/submission-email-template.md) | Structured email template for applicants submitting SCI calculations |
| [Simplified-Application-Design.md](planning/Simplified-Application-Design.md) | Design document for the simplified questionnaire-based application experience and 7-item review checklist |
| [Validation-Checklist.md](planning/Validation-Checklist.md) | Validation checklist covering structural, completeness, logical, and quality checks for submissions |
| [Badge-Usage-Guidelines.md](planning/Badge-Usage-Guidelines.md) | Badge specifications, permitted/prohibited uses, display examples, and compliance enforcement |
| [IMP-Schema-Documentation.md](planning/IMP-Schema-Documentation.md) | Impact Manifest Protocol (IMP) schema for optional structured YAML/JSON submissions |
| [Governance.md](planning/Governance.md) | Governance structure: roles, decision authority, committee formation, change management, reporting, and dispute resolution |
| [PM-Operations-Manual.md](planning/PM-Operations-Manual.md) | Program Manager's operational reference: daily/weekly/monthly/quarterly tasks, decision handling, escalation paths, SLA targets, and success metrics |
| [Landing-Page-Design.md](planning/Landing-Page-Design.md) | Design document for the applicant-facing landing page on greensoftware.foundation |
| [email-templates.md](planning/email-templates.md) | Email templates for acknowledgement, revision request, approval, rejection, renewal reminder, SWG sign-off notification, and challenge notification |
| [claude-review-prompt.md](planning/claude-review-prompt.md) | Prompt for AI-assisted submission review — paste into Claude with submission materials to get a draft review record |

### Other Files

| File | Description |
|------|-------------|
| [tracking-sheet.csv](tracking-sheet.csv) | Submission tracking spreadsheet for managing applications through the review lifecycle |
| [precedent-log.md](precedent-log.md) | Running log of edge-case decisions and reasoning for reviewer reference |

## Key Concepts

- **Self-certification, not third-party audit**: Organizations declare their own conformity with ISO/IEC 21031:2024. GSF verifies disclosure completeness, not accuracy.
- **Single-pass review**: A 7-item checklist covering completeness and disclosure sufficiency. Each item is marked Y (adequate), N (missing), or I (insufficient).
- **Public disclosure**: All approved submissions are published to enable community validation and peer review.
- **1-year validity**: Certificates expire annually and can be renewed with an updated submission.

## Status

The program is targeting launch approximately 2-4 weeks after steering committee approval. See the [Launch Implementation Plan](planning/LAUNCH-IMPLEMENTATION-PLAN.md) for the full timeline and readiness checklist.

## References

- [ISO/IEC 21031:2024 (SCI Specification)](https://github.com/Green-Software-Foundation/sci)
- [Green Software Foundation](https://greensoftware.foundation/)
- [GSF Impact Framework](https://if.greensoftware.foundation/)

## License

See [LICENSE](LICENSE) for details.
