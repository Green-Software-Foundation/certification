# Self-Certification Program: Launch Implementation Plan

**Goal**: Ready to accept applications within 2-4 weeks of steering committee approval.

**Assumption**: Approval received by end of week of 2026-02-27 ("Day 0").

---


## Week 1 (Days 1-5): Infrastructure and People

### 1.1 Set Up the Submission Email

Request creation of `sci-certification@greensoftware.foundation` from GSF IT on Day 1. This blocks all submission intake.

**Requirements**:
- Shared mailbox — multiple reviewers need access, or at minimum you need to be able to forward/assign
- Auto-reply with: tracking number format (`GSF-SUB-2026-NNNN`), expected timeline (10-15 business days), link to submission requirements
- Folder structure: Inbox / Under Review / Awaiting Revision / Approved / Rejected / Archive

If GSF IT has a lead time, submit the request before formal approval if possible.

### 1.2 Recruit Review Committee

You need 3-5 people with SCI expertise. Per proposal Section 5.1, these are GSF members on 1-year renewable terms reviewing submissions asynchronously.

**Time commitment**: 2-4 hours/week at projected volume (1-2 submissions/week in Year 1).

**Minimum viable**: 3 reviewers (provides quorum for disputes and coverage for absence).

**Where to recruit**: Standards Working Group participants are the obvious pool — people involved in SCI specification development or who have presented SCI case studies.

**By end of Week 1**: Confirmed list of 3+ reviewers with email addresses and commitment.

### 1.3 Set Up Submission Tracking

Create a shared spreadsheet to track all submissions through their lifecycle.

**Columns**:

| Column | Example |
|--------|---------|
| Tracking ID | GSF-SUB-2026-0001 |
| Date Received | 2026-03-15 |
| Applicant Organization | Acme Corp |
| Software Name | E-commerce API v2.1 |
| Status | Received / Under Review / Revision Requested / Approved / Rejected |
| Assigned Reviewer(s) | Jane Smith, John Doe |
| Date Assigned | 2026-03-16 |
| Date Decision Made | 2026-03-28 |
| Decision | Approved / Revision Requested / Rejected |
| Certificate ID | GSF-SCI-2026-0001 |
| Certificate Expiry | 2027-03-28 |
| Items N or I | 0 |
| Notes | — |

Share with all reviewers. This is the single source of truth for program status.

### 1.4 Set Up Public Disclosure Repository

Create `greensoftware-foundation/sci-certifications` on GitHub (per proposal Section 6.3).

```
sci-certifications/
  README.md
  certifications/
    2026/
      GSF-SCI-2026-00001/
        disclosure.md
```

Request repo creation from whoever has GSF GitHub org admin rights on Day 1.

### 1.5 Begin Certificate and Badge Design (Badging Platform)

The certificate is issued via GSF's existing badging platform. A new credential type needs to be created for this program. Start the platform work in Week 1 because template configuration and design iteration take time and you need a working certificate for the dry run in Week 2-3.

**Day 1-2: Platform setup**
- Log into the badging platform admin and create a new credential/badge type for the self-certification program
- Confirm you have the permissions to create and issue credentials (if not, request admin access from whoever manages the GSF Practitioner badge)
- Understand the platform's template system: what fields are customizable, what layout options exist, what dynamic/per-recipient fields are supported

**Day 2-5: Design decisions** (these inform the template build in Week 2)
- Review the `Certificate-Template-Specification.md` in this repo — it contains detailed design specs (color palette, typography, layout, responsive design, accessibility requirements) that were created for this program
- Review the existing [Green Software Practitioner badge](https://badges.greensoftware.foundation/credentials/green-software-practitioner-br) for visual consistency — the self-certification credential should feel like part of the same family
- Decide which elements from the Certificate Template Specification can be implemented within the badging platform's template system, and which would require a separate hosted page

The full design and template build continues in Section 3.2 (Week 2).

---

## Week 1-2 (Days 3-10): Acceptance Criteria and Review Process

This is the most important workstream. The review process must be rigorous enough to be defensible, clear enough that any qualified reviewer can follow it independently, and consistent enough that two different reviewers reach the same conclusion on the same submission. Fairness and even-handedness depend on removing ambiguity from the review criteria.

### 2.1 Define the Acceptance Criteria

The acceptance criteria must answer one question unambiguously: **given a submission, should a reviewer approve it, request revisions, or reject it?**

The proposal (Section 5.2) defines what reviewers assess: **disclosure completeness, not ISO conformity or calculation accuracy.** This principle must be operationalized into concrete, checkable criteria.

#### Structure: Single-Pass 27-Item Checklist

Every submission is evaluated in a single pass through a 27-item checklist. The reviewer works through the submission top to bottom, marking each item **Y** (present and adequate), **N** (missing), or **I** (insufficient — present but too vague for a practitioner to understand). Items marked *(if applicable)* can be marked N/A when the condition doesn't apply.

**The question for every item**: *"Could a knowledgeable practitioner reading this disclosure understand and evaluate this part of the calculation?"*

**Target review time**: ~45 minutes for a routine submission.

The full checklist with per-item guidance, pass/fail examples, and "When to mark I" reference table is in the **Reviewer Guide**. The 27 items cover:

- **Applicant and software** (items 1–4): Organization, software, SCI score, dates
- **Software boundary** (items 5–7): Included/excluded components, shared infrastructure allocation
- **Functional unit** (items 8–11): Unit, rationale, counting method, total
- **Energy** (items 12–14): Total energy, **per-component** breakdown (each component: value + method + data source), PUE
- **Carbon intensity** (items 15–19): CI value (per-region if multi-region), location, approach, data source with year, per-region weights
- **Embodied emissions** (items 20–22): Total M or justification if zero, **per-component** breakdown (each component: total embodied + allocation + value + source), allocation method with parameters
- **Methodology, assumptions, limitations** (items 23–25): Overall approach, specific assumptions, specific limitations
- **Calculation and attestation** (items 26–27): SCI formula with numbers, signed attestation

**Decision rule**:

- **All Y (or N/A)** → **Approved**.
- **Any N** → **Revision Requested** — list missing items by number.
- **Any I** → **Revision Requested** — state what is too vague and what the applicant needs to add.
- **5+ items N or I** → Submission substantially incomplete. Direct the applicant back to the submission template rather than itemizing every gap.
- **Reject** → Bad faith only (fabricated data, obvious fraud, persistent refusal to engage). Never used for poor quality. Requires concurrence from 2+ reviewers.

#### What Reviewers Explicitly Do NOT Assess

This is as important as what they do assess. Per proposal Section 5.2, reviewers do NOT evaluate:

- Whether the calculation actually conforms to ISO/IEC 21031:2024 (the applicant self-certifies this)
- Whether the SCI score is "correct" or "accurate"
- Whether the chosen methodology is the best or most appropriate approach
- Whether assumptions are "right" (only that they are disclosed)
- Whether data sources are "good" (only that they are identified)
- The relative quality of one submission compared to another (each is evaluated on its own merits)

This boundary is critical for defensibility. GSF verifies disclosure, not accuracy. If a community member believes a calculation is inaccurate, the remedy is the community challenge process (proposal Section 8.5), not the review committee.

### 2.2 Define the Review Procedure

A step-by-step procedure that any reviewer follows for every submission, producing a documented, auditable trail.

#### Step 1: Assignment (Program Manager)

- New submission arrives at the shared email
- Program manager logs it in the tracking spreadsheet with a tracking ID
- Program manager assigns to a reviewer
  - **Assignment method**: Round-robin by default, balancing workload. If a submission is in a domain where one reviewer has particular expertise, assign to them. No reviewer should assess a submission from their own employer.
  - **Conflict of interest rule**: A reviewer must recuse themselves if they have a professional or financial relationship with the applicant. Disclose the conflict to the program manager, who reassigns.
- Program manager sends acknowledgement email to applicant

#### Step 2: Review (Reviewer, ~45 minutes)

- Reviewer works through the 27-item checklist, marking each item Y, N, I, or N/A
- For any item marked I, writes a brief note explaining what is insufficient and what the applicant needs to add
- Applies the decision rule:
  - All Y (or N/A) → **Recommend Approve**
  - Any N or I → **Recommend Revision** (list items by number with specific feedback)
  - Bad faith indicators → **Recommend Reject** (requires second reviewer concurrence)

#### Step 3: Decision and Documentation (Reviewer)

- Reviewer completes the review record (see template below)
- Submits recommendation to the program manager
- For approvals: program manager issues certificate and publishes disclosure
- For revision requests: program manager sends feedback email with the specific items that need attention
- For rejections: program manager assigns a second reviewer for independent assessment before final decision

#### Step 5: Record Keeping (Program Manager)

- Every review produces a completed review record stored internally
- Every decision (approve, revise, reject) is logged in the tracking spreadsheet with date
- Review records are retained for the life of the certificate + 1 year
- Precedent-setting decisions (unusual functional units, novel methodologies, edge cases) are noted in a running "precedent log" that reviewers can reference for future submissions

### 2.3 Review Record Template

Every review produces one of these, filled in by the reviewer:

```
REVIEW RECORD
=============
Submission ID:    GSF-SUB-2026-NNNN
Reviewer:         [Name]
Review Date:      [Date]
Time Spent:       [hours]

CHECKLIST (Y = present & adequate, N = missing, I = insufficient, N/A = not applicable)

Applicant and software:
  1.  Organization, contact name, contact email:                    [ ]
  2.  Software name, version, description:                          [ ]
  3.  SCI score with units and functional unit:                     [ ]
  4.  Measurement start and end dates:                              [ ]

Software boundary:
  5.  Included components with reasons:                             [ ]
  6.  Excluded components with system-specific rationales:          [ ]
  7.  (If shared) Allocation method and share:                      [ ]

Functional unit:
  8.  Functional unit named:                                        [ ]
  9.  Rationale (connects to scaling/value):                        [ ]
  10. Counting/measurement method:                                  [ ]
  11. Total units in period:                                        [ ]

Energy:
  12. Total energy (kWh):                                           [ ]
  13. Per-component: value + method + data source each:             [ ]
  14. PUE stated or N/A:                                            [ ]

Carbon intensity:
  15. CI value (per-region if multi-region):                        [ ]
  16. Location(s):                                                  [ ]
  17. Approach (location/market-based):                             [ ]
  18. Data source with year:                                        [ ]
  19. (If multi-region) Per-region weights:                         [ ]

Embodied emissions:
  20. Total M or justification if zero:                             [ ]
  21. (If M>0) Per-component: total + allocation + value + source:  [ ]
  22. (If M>0) Allocation method with parameters:                   [ ]

Methodology, assumptions, limitations:
  23. Overall approach:                                             [ ]
  24. Specific assumption(s) with justification:                    [ ]
  25. Specific limitation(s):                                       [ ]

Calculation and attestation:
  26. SCI formula with numbers:                                     [ ]
  27. Signed attestation (10 points):                               [ ]

Result:           APPROVE / REVISION REQUESTED / REJECT

If REVISION REQUESTED — items marked N or I with notes:
[List item numbers and what needs to change]

If REJECT — rationale:
[Detailed justification; requires second reviewer concurrence]

NOTES / PRECEDENT:
[Any observations for future reference]
```

### 2.4 Calibration and Consistency Mechanisms

Even with a structured checklist, different reviewers may interpret "adequate" differently. The following mechanisms keep assessments consistent:

1. **Calibration session during training (Week 2-3)**: All reviewers independently review the same 2-3 example submissions using the checklist, then compare and discuss their results. Resolve any systematic differences in Y vs I judgements before real submissions arrive.

2. **Dual review for the first 10 submissions**: During the pilot and early launch, every submission is reviewed by two reviewers independently. Compare results. If reviewers disagree on Y vs I for any item, discuss and align. This builds shared understanding of the checklist.

3. **Precedent log**: Record edge-case decisions and the reasoning. When a similar case arises, reviewers reference the precedent rather than starting from scratch. This creates case law that makes the process more predictable over time.

4. **Monthly calibration check**: At the monthly committee meeting, review one recently-approved and one recently-revised submission as a group. Confirm the committee would have reached the same decisions. Adjust checklist guidance if needed.

5. **Inter-reviewer agreement metric**: Track how often dual reviewers agree (both approve, both request revision). Target: 80%+ agreement. If agreement is low, the checklist guidance needs to be tightened.

---

## Week 2 (Days 6-10): Other Documents and Templates

### 3.1 Write the Applicant Guide

**This does not yet exist as a standalone document.** The information is scattered across proposal Sections 2-4, `submission-questionnaire.md`, and `oath.md`. Consolidate into one document:

1. **What this program is** (2 paragraphs — self-certification, not third-party audit)
2. **Who can apply** (anyone with an SCI calculation per ISO/IEC 21031:2024)
3. **What you must submit** — the complete requirements, clearly structured:
   - Signed self-certification attestation (the 10-point form from proposal Section 2.3)
   - Score information (value, units, measurement period)
   - Software boundary (included components, excluded components with rationale)
   - Functional unit (unit chosen, rationale, measurement method)
   - E, I, and M details (values, data sources, methodology for each)
   - Key assumptions and known limitations
4. **What "sufficient disclosure" looks like** — publish the 27-item review checklist so applicants know exactly what standard their submission will be measured against. Transparency about the criteria is itself a fairness mechanism.
5. **Accepted formats** (PDF, Word, plain text email, Markdown; IMP/YAML optional)
6. **How to submit** (email to sci-certification@greensoftware.foundation)
7. **What happens next** (acknowledgement → review in 10-15 business days → approve / request revision / reject)
8. **Example submissions** (links to the three example YML files)
9. **After approval** (certificate issued, badge usage rules, public disclosure, 1-year validity)

**Important**: The current `oath.md` is a simpler attestation than the 10-point version in proposal Section 2.3. Use the proposal version as the authority.

### 3.2 Design and Build the Certificate and Badge

This is a multi-part deliverable: the certificate itself (the full credential page that lives on the badging platform), the badge (the visual asset certificate holders display on their websites/materials), and the issuance workflow (how you populate and issue a certificate for each approved applicant). All three must be working before the dry run.

#### 3.2.1 Certificate Content Template (Badging Platform)

Configure the credential template on the badging platform. The template defines what every issued certificate looks like; per-applicant details are filled in at issuance time.

**Fixed content** (same on every certificate):

| Element | Content | Source |
|---------|---------|--------|
| Issuing organization | "Green Software Foundation" with GSF branding/logo | GSF brand assets |
| Certificate title | "SELF-CERTIFIED COMPLIANT WITH ISO/IEC 21031:2024" | Proposal §6.2 |
| Subtitle | "Software Carbon Intensity (SCI)" | Proposal §6.2 |
| Self-certification statement | The exact block of text from proposal §6.2 (see below) | Proposal §6.2 |
| Verification scope | "Organization certifies conformity" + "GSF verified disclosure completeness" | Proposal §6.2 |
| Validity period | "Valid for 1 year from date of issuance" | Proposal §6.4 |
| Disclaimer | "This is not third-party certification or accredited conformity assessment." | Proposal §6.2 |

**The self-certification statement** (this exact text must appear on every certificate):

> This certificate confirms that [Organization] has self-certified conformity with ISO/IEC 21031:2024 (Software Carbon Intensity) and provided complete disclosure information verified by the Green Software Foundation.
>
> - Self-certification: [Organization] declares that this SCI calculation conforms to ISO/IEC 21031:2024 requirements
> - Disclosure verification: GSF verified that all required disclosure elements were provided with sufficient detail for community review
>
> This is not third-party certification or accredited conformity assessment. The disclosed information enables peer review and community validation of conformity claims.

**Dynamic content** (populated per-applicant at issuance):

| Field | Example | Notes |
|-------|---------|-------|
| Certificate ID | GSF-SCI-2026-00042 | Format: `GSF-SCI-{YEAR}-{SEQUENTIAL-5-DIGIT}` |
| Organization name | Acme Corporation | From submission metadata |
| Software/system name | E-commerce API Service | From submission metadata |
| Software version | v2.1.0 | From submission metadata |
| SCI score with units | 349.63 gCO2eq per 1,000 API requests | From submission: score value + functional unit |
| Functional unit | 1,000 API requests | From submission |
| Measurement period | January 1 - January 31, 2025 | From submission: start and end dates |
| Date issued | March 28, 2026 | Date of approval decision |
| Valid until | March 28, 2027 | Issued date + 1 year |
| Certificate status | Active | Active / Expired / Revoked |
| Full disclosure URL | Link to GitHub disclosure page | `github.com/greensoftware-foundation/sci-certifications/...` |

**Platform configuration steps**:
1. Create the credential template with the fixed content above
2. Define the dynamic fields as template variables that are populated at issuance time
3. Set the expiry policy to 1 year from issuance
4. Configure the public verification page URL pattern (e.g., `badges.greensoftware.foundation/credentials/gsf-sci-2026-00042`)
5. Test with dummy data — generate a test certificate and verify all fields render correctly

#### 3.2.2 Badge Design

The badge is the compact visual asset that certificate holders embed on their websites, READMEs, presentations, and marketing materials. It is distinct from the full certificate page — the badge is the entry point that links to the certificate.

**Badge design requirements** (from `Badge-Usage-Guidelines.md` and `Certificate-Template-Specification.md`):

Visual elements:
- GSF leaf logo (top center)
- Program name text (e.g., "Self-Certified" or "SCI Self-Certification")
- Year of issuance (e.g., "2026")
- GSF domain reference

Color specifications:
- Primary: GSF Green (#00C853) for logo and accents
- Light mode: white background (#FFFFFF), dark gray text (#333333)
- Dark mode: dark gray background (#1E1E1E), white text (#FFFFFF)
- Active status indicator: green accent

**Design consistency**: The badge should be visually consistent with the existing Green Software Practitioner badge. Review the Practitioner badge and match the design language (shape, proportions, typography weight, logo placement).

**Deliverables**:
- Badge image in SVG (primary, scalable), PNG at 250px/500px/1000px, and PDF for print
- Light mode and dark mode variants
- Small icon variant (leaf logo only, for email signatures and constrained spaces)

**Who creates these**: If GSF has a designer, brief them using the Badge-Usage-Guidelines.md and Certificate-Template-Specification.md as specs. If not, this may need to be created using the badging platform's built-in badge designer, or commissioned externally. This is a potential bottleneck — start the brief early in Week 1.

#### 3.2.3 Badge Asset Distribution

Once the badge design is created, certificate holders need to be able to download it.

**Options** (choose one):
- **Badging platform built-in**: If the platform provides downloadable badge assets automatically when a credential is issued, use this. Simplest approach.
- **CDN-hosted assets**: Upload badge images to GSF's CDN or static hosting, provide URLs in the approval email. The Badge-Usage-Guidelines.md references `cdn.greensoftware.foundation/badges/` as a possible location.
- **GitHub repo**: Include badge assets in the `sci-certifications` GitHub repo under a `/badges/` directory.

Whichever method is chosen, the approval email template (Section 3.3) must include download links or instructions.

#### 3.2.4 Certificate Issuance Workflow

Define the step-by-step process for issuing a certificate after a submission is approved. This is part of the reviewer procedure (Step 5 in Section 2.2) but the mechanical details depend on the badging platform.

**Issuance steps** (program manager, after reviewer recommends approval):

1. Open the badging platform admin
2. Create a new credential from the self-certification template
3. Populate the dynamic fields:
   - Certificate ID (next sequential number from tracking spreadsheet)
   - Organization name, software name, version
   - SCI score with units, functional unit, measurement period
   - Dates (issued = today, valid until = today + 1 year)
   - Disclosure URL (the GitHub path where you're about to publish)
4. Review the populated certificate for correctness (spot-check score, dates, org name)
5. Issue/publish the credential on the platform
6. Copy the certificate URL
7. Publish the full disclosure to the GitHub repo (create the directory, add disclosure.md)
8. Update the tracking spreadsheet with the certificate ID, certificate URL, and expiry date
9. Send the approval email to the applicant with the certificate URL, badge download links, and badge usage guidelines

**Estimated time per issuance**: 15-20 minutes once the workflow is practiced.

**Test this workflow during the dry run** (Section 4.2) with 2-3 test certificates to confirm it works smoothly.

#### 3.2.5 Certificate Lifecycle Management

Ongoing management tasks that need a defined process before launch:

**Expiry**: Certificates expire after 1 year. The badging platform should support automatic status change (Active → Expired). Confirm this is configurable. If not, you need a manual process: check the tracking spreadsheet monthly for upcoming expiries, update the platform status.

**Revocation**: Per proposal Section 10, certificates may be revoked. The badging platform must support manually changing status to "Revoked" with a displayed reason. Confirm this capability exists.

**Renewal**: Renewed certificates get a new certificate ID, linked to the previous one. The platform should support this (or at minimum, the new certificate's description should reference the previous ID).

### 3.3 Draft Email Templates

Six templates needed:

1. **Acknowledgement**: tracking number, expected timeline, link to requirements
2. **Revision Request**: specific feedback tied to checklist items, invitation to resubmit
3. **Approval**: certificate ID, certificate link, badge guidelines link, validity dates, disclosure URL
4. **Rejection**: specific rationale, right to appeal per proposal Section 9
5. **Renewal Reminder** (30 days before expiry): certificate ID, expiry date, how to renew
6. **Challenge Notification**: notification to certificate holder that a community challenge has been submitted (per proposal Section 8.5)

---

## Week 2-3 (Days 8-15): Training and Dry Run

### 4.1 Reviewer Training Session

One 90-minute session with the full review committee.

**Agenda**:

1. **Program overview** (15 min): The proposal, what GSF does/doesn't verify, the self-certification model
2. **Acceptance criteria walkthrough** (20 min): The 27-item checklist, Y/N/I marking, the decision rule
3. **Calibration exercise** (40 min): All reviewers independently review the same 2 example submissions, then compare results and discuss divergences. Agree on the Y vs I boundary for key items.
4. **Edge cases** (10 min): M=0, unusual functional units, vague data sources, "internal tools" as sole data source — where is the line?
5. **Operational workflow** (5 min): Assignment, the review record, the tracking spreadsheet, email templates

### 4.2 End-to-End Dry Run

Process 2-3 test submissions through the complete workflow.

**Method**:
- Package the three example calculations as mock email submissions (include attestation, metadata, full disclosure)
- Assign to reviewers under dual-review (two reviewers per submission)
- Reviewers complete review records independently
- Compare results — if reviewers disagree, discuss and calibrate
- Generate test certificates on the badging platform
- Publish test entries to the GitHub disclosure repo
- Record everything in the tracking spreadsheet

**What you're validating**:
- The single-pass review process is clear and workable
- Reviewers reach consistent conclusions on the same submission
- The review record template captures everything needed
- Certificate generation works
- GitHub publication works
- Total turnaround is achievable within 10-15 business days

**Fix anything that doesn't work before accepting real submissions.**

---

## Week 3-4 (Days 15-20): Soft Launch with Pilot Applicants

### 5.1 Recruit 3-5 Pilot Applicants

Real organizations willing to be first submitters. Sources: Standards Working Group members' organizations, case study presenters, GSF member organizations already doing SCI calculations.

Offer: direct support during preparation, priority review, founding certificate holder recognition, their feedback shapes the process.

### 5.2 Process Pilot Submissions

Accept and process real submissions under dual review (two reviewers per submission, to continue calibration).

After each pilot, gather feedback from:
- **Applicants**: Was the guide clear? How long did preparation take? Was the review feedback useful?
- **Reviewers**: Was the process workable? Were the criteria clear? Where did they feel uncertain?

Refine the Applicant Guide, acceptance criteria, and checklist guidance based on this feedback before public launch.

---

## Week 4+ (Day 20+): Public Launch

### 6.1 Announcement

Open the program publicly via GSF website/blog, newsletter, social media, Standards Working Group, and the sci-certifications GitHub repo.

Include: what the program is, link to Applicant Guide, example submissions, submission email, links to pilot certificates.

### 6.2 Steady-State Operations

| Cadence | Activity |
|---------|----------|
| Daily | Check submission email, acknowledge new submissions, assign to reviewers |
| Weekly | Follow up on in-progress reviews, check SLA (10-15 business day target) |
| Monthly | Committee sync (1 hour): review one recent approve and one recent revision as calibration; discuss precedents |
| Quarterly | Publish anonymized statistics; review inter-reviewer agreement metric |
| 30 days before expiry | Send renewal reminders |
| Annually | Full program review; refresh committee terms; update criteria if needed |

### 6.3 Transition from Dual to Single Review

Once the committee has processed ~10 submissions under dual review with consistently high inter-reviewer agreement (>80%), transition to single-reviewer for routine submissions. Reserve dual review for:
- Submissions flagged by the single reviewer as borderline or novel
- Submissions from first-time applicants in a new software category
- Any submission where the reviewer recommends rejection

---

## Launch Readiness Checklist

### Infrastructure
- [ ] Submission email live and auto-reply configured
- [ ] Tracking spreadsheet created and shared with committee
- [ ] GitHub disclosure repo created with structure and README

### Certificate and Badge
- [ ] Badging platform admin access confirmed
- [ ] Certificate content template created with all fixed content (self-certification statement, disclaimer, branding)
- [ ] Dynamic fields configured (certificate ID, org name, software, score, dates, disclosure URL)
- [ ] Certificate expiry policy set to 1 year
- [ ] Public verification URL pattern confirmed and working
- [ ] Test certificate generated with dummy data and visually reviewed
- [ ] Badge design created (SVG + PNG in light/dark variants)
- [ ] Badge assets available for download (platform built-in, CDN, or GitHub)
- [ ] Certificate issuance workflow documented and tested end-to-end
- [ ] Revocation capability confirmed on platform

### People
- [ ] 3+ reviewers recruited and confirmed
- [ ] Reviewer training session completed
- [ ] Calibration exercise completed (reviewers aligned on Y vs I boundaries)
- [ ] Assignment method and conflict-of-interest rule agreed
- [ ] Escalation path defined for complex/disputed cases

### Acceptance Criteria and Process
- [ ] 27-item review checklist documented and approved by committee
- [ ] Y/N/I marking guidance finalized with concrete pass/fail boundary examples
- [ ] Decision rules documented (approve if all Y; revise if any N or I; reject only for bad faith with dual concurrence)
- [ ] Review record template finalized
- [ ] Precedent log created (empty, ready for first entries)
- [ ] Review procedure documented step-by-step

### Documents
- [ ] Applicant Guide written and published (includes the acceptance criteria so applicants know what standard they'll be measured against)
- [ ] Reviewer Guide finalized and distributed to committee
- [ ] Email templates drafted and stored in shared location
- [ ] All documents use consistent program name

### Process Validation
- [ ] End-to-end dry run completed (minimum 2 test submissions, dual-reviewed)
- [ ] Inter-reviewer agreement confirmed on dry run submissions
- [ ] Certificate generated successfully on badging platform
- [ ] Disclosure published successfully to GitHub repo
- [ ] Bottlenecks identified and resolved

### Communications
- [ ] Pilot applicants identified (3-5)
- [ ] Announcement draft prepared for public launch

---

## Deliverables Summary

**Documents to create** (don't exist yet):

| # | Deliverable | Source Material | Priority |
|---|-------------|----------------|----------|
| 1 | Acceptance criteria and review procedure | Proposal §§3-5, Validation-Checklist.md | **Critical** — the foundation of program fairness |
| 2 | Applicant Guide | Proposal §§2-4, submission-questionnaire.md, oath.md | **Critical** — applicants can't submit without it |
| 3 | Reviewer Guide (incorporating acceptance criteria) | Acceptance criteria + adapted Validation-Checklist.md | **Critical** — reviewers can't review without it |
| 4 | Review record template | Section 2.3 of this plan | **Critical** — every review must produce one |
| 5 | Email templates (6) | Proposal §§4-5 | **Critical** — needed for first submission |
| 6 | Certificate content template (badging platform) | Proposal §6.2, Certificate-Template-Specification.md | **Critical** — needed to issue first certificate |
| 7 | Badge design (SVG/PNG, light/dark) | Badge-Usage-Guidelines.md, Certificate-Template-Specification.md | **Critical** — needed for approval email and badge guidelines |
| 8 | Certificate issuance workflow (documented steps) | Section 3.2.4 of this plan | **Critical** — program manager must be able to issue certificates |
| 9 | GitHub repo README | Proposal §6.3 | High |
| 10 | Announcement post | Proposal executive summary | Medium |

**Documents that exist but need updating**:

| # | Document | What Needs Changing |
|---|----------|-------------------|
| 1 | Validation-Checklist.md | Remove automated framing; becomes input to Reviewer Guide |
| 2 | Badge-Usage-Guidelines.md | Align terminology with final program name |
| 3 | oath.md | Replace with 10-point attestation from proposal §2.3, or deprecate |
| 4 | submission-questionnaire.md | Reconcile with proposal §3; integrate into Applicant Guide |

---

## Risk Register

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| GSF IT slow to create email | Medium | **Blocks everything** | Request before formal approval |
| Cannot recruit 3 reviewers | Low | High | Draw from SWG participants; offer stipend |
| Reviewers inconsistent in Y vs I judgements | Medium | High | Calibration exercise, dual review for first 10, monthly check-ins, precedent log |
| No pilot applicants | Medium | Medium | Approach SWG members directly; offer support |
| First submissions are low quality | High | Low | Expected — revision-request workflow handles this; refine Applicant Guide based on patterns |
| Terminology confusion | High | Medium | Resolve definitively in Week 1 |
| Acceptance criteria too strict (nothing gets approved) | Medium | High | Calibrate on examples during training; "adequate" is the bar, not "exemplary" |
| Acceptance criteria too loose (rubber-stamping) | Medium | High | Checklist requires Y/N/I for each item with notes for I marks; dual review catches drift |
| Challenge to a decision with no documented rationale | Low | High | Review record template ensures every decision is documented with per-item Y/N/I marks |
| Badging platform doesn't support needed dynamic fields | Low | High | Investigate in Week 1 (Section 1.5); if platform is too rigid, fall back to a simpler certificate with a link to the full details on GitHub |
| Badge design delayed (no designer available) | Medium | Medium | Start the brief on Day 1; if no designer, use the badging platform's built-in badge designer as a minimum viable option |
