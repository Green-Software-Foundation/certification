# SCI Self-Certification Program: Governance

This document defines the governance structure, decision authority, and operating procedures for the SCI Self-Certification Program. It is the authoritative reference for who is accountable for what, how decisions are made, and how the program is changed and overseen.

---

## 1. Roles and Accountability

### Program Owner / Manager

**Person**: GSF Head of R&D

The Program Owner is the single accountable individual for the program. They are responsible for:

- Day-to-day operations: submission assignment, tracking, acknowledgement emails, certificate issuance, SLA monitoring
- Recruiting and onboarding review committee members
- Coordinating rejection escalations (assigning a second reviewer)
- Producing quarterly reports (see Section 6)
- Proposing operational and substantive changes to the program
- Serving as Phase 1 decision-maker in the dispute resolution process

The Program Owner is answerable to the SWG Chair, who may override any decision.

**Backup**: Any GSF staff member may serve as backup if the Program Owner is unavailable for an extended period. The backup has the same operational authority for the duration of their cover.

### SWG Chair

**Person**: Chair of the Software Standards Working Group

The SWG Chair has:

- **Certificate sign-off authority**: after a reviewer recommends approval, the SWG Chair (or GSF Executive Director) provides explicit sign-off following a 7-day SWG objection period. No certificate is issued without this sign-off.
- **Override authority** on any program decision, at any time
- **Adjudication authority** when brought in by the Program Owner or through dispute escalation
- **Final appeal authority** for Phase 3 disputes (decision is final and not subject to further appeal)

The SWG Chair does not participate in routine operations. Their role is to ensure the program operates fairly, to resolve conflicts the Program Owner or committee cannot, and to represent the program within GSF governance.

### Review Committee

**Composition**: 3 or more members with SCI expertise

- Self-nominated, drawn from the Software Standards Working Group or the broader SCI community
- Members must be from **different institutions**
- Members must **not** be GSF staff (to maintain independence from the program operator)

**Responsibilities**:

- Review submissions: approve, request revision, or recommend rejection
- Investigate and enforce badge misuse (see Section 5)
- Make precedent-setting decisions on edge cases
- Participate in calibration exercises and monthly committee meetings
- Propose changes to program rules

### Software Standards Working Group (SWG)

The SWG provides oversight of the program:

- Approves substantive program changes (see Section 4)
- Receives and acts on quarterly reports
- Approves mid-term committee member changes
- May direct follow-up actions (e.g., tightening criteria, adjusting SLAs)

### GSF Steering Committee

The Steering Committee provides strategic oversight:

- Receives quarterly reports from the Program Owner
- No direct operational role in the program

---

## 2. Review Committee: Formation and Terms

### Appointment

Committee members are **self-nominated**. Nominations are open to anyone with SCI expertise, with preference given to Software Standards Working Group participants. The Program Owner confirms that nominees meet the eligibility criteria (SCI expertise, institutional diversity, not GSF staff) and onboards them.

### Terms

- **Duration**: 1 year
- **Consecutive terms**: Permitted. A member may serve multiple consecutive terms.
- **Mid-term changes**: A member may step down or be replaced mid-term with approval from the Software Standards Working Group.

### Removal

A committee member may be removed mid-term if:

- They are persistently inactive (not completing assigned reviews within SLA)
- They have an undisclosed conflict of interest that comes to light
- They persistently fail to follow the review checklist or program procedures

Removal is proposed by the Program Owner and approved by the SWG.

### Minimum Membership

**3 active members** are the minimum required for the program to operate normally.

If the committee drops below 3 active members:

1. The Program Owner may step in temporarily as a reviewer to prevent the program from halting.
2. The Program Owner must urgently recruit a replacement.
3. While below quorum, committee-level decisions (discretionary revocation, precedent-setting cases) are deferred until quorum is restored, unless the SWG Chair authorises an exception.

---

## 3. Decision-Making

### Submission Decisions

| Decision | Who decides | Process |
|----------|-----------|---------|
| **Recommend approval** | Single reviewer | Reviewer completes the 7-item checklist; all items Y → recommends approval |
| **SWG sign-off** | SWG Chair or GSF Executive Director | After reviewer recommends approval, the SWG is notified and has a **7-day objection period**. If no objections are raised, the SWG Chair or GSF Executive Director provides explicit sign-off and the certificate is issued. If an objection is raised, the objection must be resolved before issuance can proceed. |
| **Request revision** | Single reviewer | Reviewer identifies items marked N or I with specific feedback |
| **Reject** | 2 reviewers must concur | First reviewer provides written rationale; Program Owner assigns second reviewer for independent assessment; both must agree |

### Committee-Level Decisions

Committee-level decisions include: discretionary revocation, precedent-setting edge cases, changes to reviewer guidance, badge misuse enforcement escalation.

- **Quorum**: 3 members
- **Method**: Consensus. If consensus cannot be reached, fallback to a vote.
- **Voting**: 2/3 majority wins.
- **Tie-breaking**: If the committee cannot reach a decision, the matter is escalated to the SWG Chair.

### Conflict of Interest

**Per-submission recusal** is the mechanism for managing conflicts of interest:

- A reviewer must recuse themselves from any submission where they have a professional or financial relationship with the applicant, including submissions from their own employer.
- The reviewer discloses the conflict to the Program Owner, who reassigns the submission.
- No blanket disclosure register is required at appointment, but reviewers are expected to act in good faith and recuse proactively.

---

## 4. Change Management

### Operational Changes

Changes to operational procedures (email templates, assignment method, tracking tools, internal workflows) can be made by the **Program Owner unilaterally**, at any time.

### Substantive Changes

Changes to the following require **Software Standards Working Group approval**:

- Review criteria (the 7-item checklist, Y/N/I marking guidance, pass/fail examples)
- Access requirements (who can apply, eligibility criteria)
- Fee structure (currently free)
- Certificate validity period
- Dispute resolution procedures
- Badge usage rules
- Code of conduct

**Process**:

1. Change proposed by the Program Owner or by the SWG directly.
2. Proposal reviewed and approved by the SWG (by whatever process the SWG uses for its own decisions).
3. Approved changes take effect **5 business days** after approval.
4. Submissions already under review at the time of approval are evaluated against the criteria that were in effect when the submission was received.

---

## 5. Badge Misuse Enforcement

The **review committee** is responsible for investigating and enforcing badge misuse. Reports of misuse are received at sci-certification@greensoftware.foundation and forwarded to the committee by the Program Owner.

### Procedure

1. **Investigation**: A committee member reviews the reported misuse and gathers evidence.
2. **Warning**: If misuse is confirmed, the committee issues a written warning to the certificate holder with 14 days to correct.
3. **Escalation**: If the misuse persists after the warning period, the committee (quorum of 3) decides whether to revoke the certificate.
4. **Further escalation**: If the committee cannot agree, the matter is escalated to the SWG Chair.

### What constitutes badge misuse

- Displaying the badge without an active certificate
- Removing the "self-certified" qualifier when claiming ISO/IEC 21031:2024 conformity
- Modifying the badge design
- Implying GSF validated accuracy or conformity (GSF only verifies disclosure)
- Claiming "ISO certified" without the "self-certified" qualifier
- Using the certificate to make unsupported claims

Full details are in the [Badge Usage Guidelines](Badge-Usage-Guidelines.md).

---

## 6. Reporting and Oversight

### Quarterly Reports

The Program Owner produces a quarterly report covering:

- Submission volume (received, in progress, completed)
- Approval / revision / rejection rates
- Average initial review turnaround time vs SLA target (15 business days)
- Average total elapsed time from submission to certificate issuance (internal performance metric)
- SLA breaches: count, causes, and corrective actions taken
- Inter-reviewer agreement rate (for dual-reviewed submissions)
- Reviewer workload distribution (submissions per reviewer)
- Certificate expiry and renewal activity (expired, renewed, lapsed)
- Community challenges received and outcomes
- Badge misuse incidents and enforcement actions
- Precedent-setting decisions made during the quarter
- Committee membership status (active members, any changes)

### Audience

Reports are delivered to:

1. **Software Standards Working Group** — for operational oversight and follow-up actions
2. **GSF Steering Committee** — for strategic oversight

### Follow-Up

The SWG may direct follow-up actions based on the reports, such as:

- Tightening or loosening review criteria
- Recruiting additional committee members
- Adjusting SLA targets
- Commissioning process improvements

### Oversight Model

There is no separate annual review. Ongoing oversight is provided through:

- Quarterly reports
- The SWG Chair's standing override authority
- Any follow-up actions the SWG decides to enact

---

## 7. Dispute Resolution

Disputes are handled through a three-phase escalation process. Full details are in the proposal document (Section 9). The governance-relevant summary:

| Phase | Timeline | Decision-maker | Scope |
|-------|----------|----------------|-------|
| **Phase 1: Informal resolution** | Days 1-10 | Program Owner | Attempts to resolve by discussion |
| **Phase 2: Formal review** | Days 11-30 | 3-person panel from review committee (excluding anyone involved in the original decision) | Written statements, panel deliberation, written decision |
| **Phase 3: Final appeal** | Days 31-60 | SWG Chair | Limited to procedural errors, new evidence, or panel misconduct. Decision is final. |

**Important limitation**: The dispute process addresses whether disclosure requirements were met, whether the code of conduct was followed, and whether procedures were properly applied. It does **not** adjudicate the accuracy of calculations, the quality of methodologies, or technical debates.

---

## 8. Revocation

### Mandatory Revocation (automatic)

- Material misrepresentation or fabrication discovered post-issuance
- Serious code of conduct violations (fraud, system abuse)
- Applicant request (self-revocation)

### Discretionary Revocation

Decided by the review committee (quorum of 3, consensus or 2/3 vote):

- Persistent badge or branding guideline violations (after warning)
- Failure to correct material omissions after discovery
- Unresponsive to dispute resolution process

### No Revocation For

- Errors discovered in calculations (the certificate represents disclosure, not accuracy)
- Community disagreement with methodology
- Changes in the SCI specification
- Expiration (handled through the validity period)

### Escalation

If the committee cannot reach a decision on discretionary revocation, the matter is escalated to the SWG Chair.

---

## 9. Relationship to GSF Governance

The SCI Self-Certification Program operates under the Software Standards Working Group:

```
GSF Steering Committee
    |
    v
Software Standards Working Group (SWG)
    |
    +-- SWG Chair (override authority, final appeals)
    |
    +-- SCI Self-Certification Program
            |
            +-- Program Owner (GSF Head of R&D)
            |
            +-- Review Committee (3+ independent members)
```

The SWG approved the program's establishment and must approve any substantive changes to its operating rules. The SWG Chair has standing authority to override any program decision. The Steering Committee receives quarterly reports for strategic awareness but does not participate in operational decisions.
