# SCI Self-Certification Program — Operator Handoff

Welcome. You are taking over operational ownership of the GSF SCI Self-Certification Program. This document is your starting point. Everything else (process manuals, guides, templates) is referenced from here.

**Program in one sentence:** Any organization can submit their ISO/IEC 21031:2024 SCI calculation for review; GSF checks the disclosure is complete; if it passes a 7-item review + a 7-day SWG sign-off, GSF issues a 1-year certificate and publishes the disclosure publicly on GitHub.

---

## 1. Where the Program Currently Stands

**Status: Ready to launch. Documentation, infrastructure, and team are all in place. The only outstanding item is the public launch announcement.**

### What's done

- All operational documents live in `docs/` and are internally consistent
- The 7-section submission template is finalised (`docs/submission-email-template.md`)
- A reference example submission and a library of five additional industry case studies live in `submissions/example-*/` — use these to set the quality bar
- The certificate issuance script (`scripts/issue-certificate.mjs`) parses the submission markdown and calls the badging platform API — verified end-to-end against every example submission via `--dry-run`
- 7 email templates are ready to use (`docs/email-templates.md`)
- The tracking spreadsheet template exists (`tracking-sheet.csv`) — delete the test entry before going live
- The FAQ (`faqs.md`) is published and ready for the website team to surface
- Submission inbox, GitHub disclosure repo, badging platform integration, and badge assets are all in place
- Review committee (3+ SWG members) is recruited

### What's not done (critical path to launch)

| # | Blocker | Owner | Effort |
|---|---------|-------|--------|
| 1 | Public launch announcement | You + Marketing | 1–2 days |

**Realistic timeline:** The program can launch as soon as the announcement goes out.

---

## 2. Your First Week

With infrastructure and the review committee already in place, your first week is about taking ownership and getting ready for public launch:

1. **Read the full operations manual** (`docs/pm-operations-manual.md`) end-to-end. This is your day-to-day playbook once submissions start arriving.
2. **Confirm access** to the submission inbox, the `greensoftware-foundation/sci-certifications` GitHub repo (admin rights), the tracking spreadsheet, and the badging platform admin console.
3. **Introduce yourself to the review committee.** Share a short note confirming you're the new Program Manager and the contact point for all review-related questions.
4. **Confirm the SWG Chair sign-off path.** Make sure you know how to reach the current SWG Chair quickly when an approval needs signing off, and confirm the GSF Executive Director is available as the backup sign-off authority.
5. **Identify a backup Program Manager** so the program isn't single-threaded on you (`docs/governance.md` requires this).
6. **Coordinate the launch announcement** with Marketing — landing page go-live, FAQ publication, SWG channel post, social posts.

---

## 3. Roles and Your Authority

From `docs/governance.md`:

| Role | Who | Authority |
|------|-----|-----------|
| **Program Owner (PM)** | You (GSF Head of R&D by default) | Day-to-day operations, final call on acknowledgement/revision/rejection based on reviewer input, dispute Phase 1 resolution |
| **SWG Chair** | Current Software Standards Working Group Chair | **Certificate sign-off authority** (must explicitly sign off after 7-day objection window), dispute Phase 3 (final) |
| **GSF Executive Director** | — | Alternative sign-off authority if SWG Chair unavailable |
| **Review Committee** | 3+ self-nominated SWG members, non-GSF | Individual review decisions, dual-review on rejections, dispute Phase 2 panel |

**What you can decide alone:** Acknowledging submissions, assigning reviewers, applying reviewer recommendations, minor process tweaks, responses to applicants.

**What needs SWG Chair (or ED):** Certificate issuance (the 7-day sign-off is formal), revocations, policy changes, substantive governance changes.

**What needs full review committee:** Rejections (require 2+ reviewer concurrence), material disputes.

---

## 4. The Repository Map

```
/
├── README.md                           Program overview + document index
├── HANDOFF.md                          This document
├── faqs.md                             30 FAQs — public-facing
├── tracking-sheet.csv                  Submission tracking (delete test entry before launch)
├── precedent-log.md                    Log edge-case decisions here as they arise
├── package.json                        Node config for npm run issue
├── LICENSE                             Apache 2.0
│
├── docs/                               Program documentation
│   ├── pm-operations-manual.md         Your day-to-day playbook
│   ├── governance.md                   Roles, decisions, sign-off, disputes
│   ├── applicant-guide.md              What applicants need to know
│   ├── reviewer-guide.md               What reviewers need to know (incl. 7-item checklist)
│   ├── badge-usage-guidelines.md       Badge display rules + enforcement
│   ├── email-templates.md              7 email templates (ready to copy/paste)
│   ├── submission-email-template.md    The template applicants use
│   ├── claude-review-prompt.md         AI-assisted review prompt (optional tool)
│   └── imp-schema-documentation.md     Optional IMP/YAML submission format
│
├── submissions/                        Reference example submissions
│   ├── example-greentech-inventory-api/  B2B SaaS API (reference)
│   ├── example-neuralcast-llm-inference/ AI inference, GPU-dominated
│   ├── example-meridianbank-payments-platform/ Hybrid on-prem + cloud, market-based
│   ├── example-loftstream-vod-platform/  Streaming media, multi-region
│   ├── example-portal-arena-game-backend/ Online gaming, measurement-based, autoscaled
│   └── example-stacklane-collab-saas/    Dev productivity SaaS, M=0 path
│       Each contains: disclosure.md, review-record.md, approval-email.md, IF manifest YAML
│
└── scripts/
    └── issue-certificate.mjs           Parses disclosure.md, calls badging platform API
                                        Run via: npm run issue -- <submission-dir> [flags]
                                        Supports --dry-run for testing
```

---

## 5. Operating the Program Day-to-Day

Once launched, here's the rhythm (condensed from `docs/pm-operations-manual.md`):

### Daily
- Check submission inbox
- Log any new submissions in `tracking-sheet.csv` with `GSF-SUB-YYYY-NNNN` tracking ID
- Send acknowledgement email (Template 1) within 1 business day
- Assign to a reviewer (round-robin or by domain fit)

### Weekly
- Check SLA status — any submissions approaching 10 business days without a decision?
- Follow up with reviewers on stalled reviews
- Check SWG sign-off window for any approvals awaiting the 7-day objection period

### On each decision from a reviewer
| Reviewer recommends | You do |
|---------------------|--------|
| **Approve** | Send Template 6 (SWG Sign-Off Notification) to SWG; start 7-day window; after window, get explicit sign-off from SWG Chair/ED; then run `npm run issue -- <submission-dir> --email <contact> --disclosure-url <github-url>`; publish disclosure + review-record to GitHub; send Template 3 (Approval) to applicant |
| **Revise** | Send Template 2 (Revision Request) listing the specific checklist items that need work |
| **Reject** (rare — bad faith only) | Confirm 2nd reviewer concurs; send Template 4 (Rejection) with appeals info |

### Monthly
- SLA compliance report (time-to-acknowledge, time-to-decision, time-to-issuance)
- Committee capacity check (are all reviewers still active? any bandwidth issues?)
- Challenge log review (any community challenges raised? any patterns?)

### Quarterly
- Public program metrics report
- Committee retrospective
- Propose doc updates if process has drifted

### Annual
- Certificate renewals begin ~12 months after first issuance

---

## 6. Key Dependencies and Contacts

| Dependency | Status | Who to talk to |
|------------|--------|---------------|
| Submission mailbox | Live | GSF IT (for maintenance/access changes) |
| GitHub disclosure repo | Created | GSF GitHub org admin (for admin access changes) |
| Badging platform integration | Built (`../credentials`) | Developer on the badging platform team |
| Badge assets | Designed and uploaded | Designer (for future variants) |
| SWG Chair sign-off | Ongoing per submission | Current SWG Chair |
| Exec Director sign-off (backup) | Available if needed | GSF Executive Director |
| Review Committee | Recruited | Review committee members directly |
| Website landing page | Live (or pending launch) | Website team |
| Web submission form (optional) | Post-launch enhancement | Website team |

---

## 7. Non-Obvious Decisions You're Inheriting

Context the docs won't tell you directly:

1. **The program is deliberately not a conformity audit.** GSF only verifies disclosure *completeness*, not calculation *accuracy*. Applicants self-attest accuracy. This is central to the program model — pushing back against scope creep ("can you check the numbers?") is a first-principles defense of the design. The credibility comes from public disclosure + community challenges, not from GSF validation.

2. **7-item checklist, not a score.** Reviewers mark each item Y/N/I (insufficient). All Y = approve. Any N/I = revise (not reject). Rejection is reserved strictly for bad faith and requires two reviewers to agree. Don't let reviewers drift into "kind of Y" — push back on ambiguity.

3. **The 7-day SWG objection period is formal.** Certificates cannot issue until it expires AND the SWG Chair (or ED) explicitly signs off. Don't shortcut this, even under pressure.

4. **The program is free and open to anyone.** Eligibility was deliberately opened up (previously gated to GSF members). All docs are consistent on this. Don't accidentally reintroduce gating language.

5. **Submissions are published as-is.** With only the contact email redacted and a certificate metadata header added. Applicants consent to this in attestation point 10. Write acknowledgement emails that make this clear — surprises here damage trust.

6. **The issue-certificate.mjs script parses markdown structure strictly.** Section headings must be `## Section N —` (em-dash). If a submission comes in with slightly different structure, the script will skip fields. You can hand-edit the markdown to fit before running the script, or run `--dry-run` first to see what was parsed.

7. **The example submissions are the canonical quality bar.** When onboarding reviewers, walk them through `submissions/example-greentech-inventory-api/disclosure.md` and the matching review record. The other five examples (AI inference, financial services, streaming, gaming, dev productivity) cover different industry profiles and methodology choices.

8. **Certificates expire after 1 year.** This is intentional — it forces re-measurement and keeps the program current. Renewal is a full resubmission, not an abbreviated review.

---

## 8. Documents to Read (in order)

If you read nothing else:

1. **This document** (you're here)
2. **`docs/pm-operations-manual.md`** — your day-to-day playbook
3. **`docs/governance.md`** — your authority, sign-off, disputes
4. **`docs/reviewer-guide.md`** — what reviewers do (you'll onboard them, so you need to know this cold)
5. **`submissions/example-greentech-inventory-api/disclosure.md`** + the matching `review-record.md` — the quality bar

Read-later (reference):

- `docs/applicant-guide.md` — for applicant questions
- `docs/badge-usage-guidelines.md` — for badge misuse issues
- `docs/email-templates.md` — copy/paste each time you reply
- `docs/submission-email-template.md` — what applicants are filling in
- `docs/claude-review-prompt.md` — if you want AI-assisted draft reviews
- `docs/imp-schema-documentation.md` — for applicants using the optional IMP format
- `faqs.md` — redirect applicants here for common questions
- `submissions/example-*/` — five additional industry exemplars beyond the reference

---

## 9. Handoff Checklist

Before I step away:

- [ ] You have read this document end-to-end
- [ ] You have read the Operations Manual
- [ ] You understand your authority (`docs/governance.md`)
- [ ] You have access to the submission mailbox
- [ ] You have access to the tracking spreadsheet
- [ ] You have write access to this repository
- [ ] You have a way to contact the SWG Chair for sign-offs
- [ ] You know who your backup PM will be
- [ ] You have been introduced to the review committee

Questions? Previous operator contact: `joseph@greensoftware.foundation`.

Good luck.
