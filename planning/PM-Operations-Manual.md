# Program Manager Operations Manual

## SCI Self-Certification Program

This is your day-to-day reference for running the program. It tells you what to do, when, and who to involve. For the underlying rationale, see the Governance document and the Proposal.

---

## 1. Your Role in One Paragraph

You are the single point of accountability for the SCI Self-Certification Program. You route submissions to reviewers, monitor SLAs, issue certificates, manage certificate lifecycle, maintain the review committee, handle disputes at first instance, and report quarterly to the Software Standards Working Group (SWG) and Steering Committee. You are answerable to the SWG Chair, who has standing override authority on any program decision.

---

## 2. Daily Operations

**Check the submission inbox** (`sci-certification@greensoftware.foundation`) every business day.

For each new submission:

1. Log it in the tracking spreadsheet with the next tracking ID (`GSF-SUB-YYYY-NNNN`).
2. Send the acknowledgement email (template) — include tracking number, expected timeline (10–15 business days), link to submission requirements.
3. Assign to a reviewer. Use round-robin, balancing workload, avoiding employer conflicts with the applicant.
4. Update the tracking spreadsheet: assigned reviewer, date assigned, status → "Under Review."

---

## 3. Weekly Operations

**Every week, review the tracking spreadsheet for SLA compliance.**

For each submission currently under review:

- Count business days since assignment.
- **Green (≤10 days)**: No action needed.
- **Amber (11–15 days)**: Nudge the reviewer.
- **Red (>15 days — SLA breached)**:
  1. Email the applicant with an apology and updated timeline.
  2. Contact the reviewer to understand the delay.
  3. If the reviewer is blocked or unavailable, reassign to another reviewer.
  4. Log the breach in the tracking spreadsheet notes.

---

## 4. Monthly Operations

### Committee Sync (1 hour)

Facilitate the monthly calibration meeting with the review committee:

1. **Calibration**: Pick one recently approved and one recently revised submission. Walk through both as a group. Confirm the committee would have reached the same decisions.
2. **Precedents**: Discuss any edge cases or novel decisions from the past month. Update the precedent log.
3. **Certificate expiry check**: Review the tracking spreadsheet for certificates expiring in the next 30 days. Send renewal reminders to those holders.

### Reviewer Workload Check

Glance at review distribution. If one reviewer is handling significantly more submissions than others, rebalance future assignments.

---

## 5. Quarterly Operations

### Quarterly Report

Produce and deliver a report to the SWG and Steering Committee covering:

| Metric | Where to find the data |
|--------|----------------------|
| Submission volume (received, in progress, completed) | Tracking spreadsheet — count by status |
| Approval / revision / rejection rates | Tracking spreadsheet — count decisions |
| Average initial review turnaround vs 15-day SLA | Tracking spreadsheet — (Date Decision Made − Date Assigned) |
| Average total elapsed time (submission to certificate) | Tracking spreadsheet — (Date Decision Made − Date Received), including revision cycles |
| SLA breaches: count, causes, corrective actions | Tracking spreadsheet notes + your records |
| Inter-reviewer agreement rate | Review records in GitHub disclosure repo — % where both reviewers reached the same outcome |
| Reviewer workload distribution | Tracking spreadsheet — count submissions per reviewer |
| Certificate expiry and renewal activity | Tracking spreadsheet — certificates expired, renewed, lapsed this quarter |
| Community challenges received and outcomes | Challenge records |
| Badge misuse incidents and enforcement actions | Enforcement records |
| Precedent-setting decisions | `precedent-log.md` in the top-level certification repo |
| Committee membership status | Active members, any joiners/leavers this quarter |

**Tip**: Build a simple spreadsheet formula sheet that computes these metrics automatically from the tracking data. This saves time each quarter and ensures consistency.

### Expired Certificate Follow-Up

Review the tracking spreadsheet for certificates that have expired since the last quarterly check:

1. Contact each holder — ask if they intend to renew.
2. If renewing: remind them to submit a full new submission (renewal is not an abbreviated process).
3. If not renewing: remove the certificate from active site listings. The expired certificate and disclosure remain publicly accessible, marked "Expired."

---

## 6. Annual Operations

### Program Review

Once a year, conduct a full review:

1. Review Year N performance against targets.
2. Set Year N+1 targets based on actual data.
3. Refresh committee terms (1-year terms; members may continue if willing).
4. Propose any criteria or process updates to the SWG.

---

## 7. Submission Lifecycle — Decision Handling

### Approved

1. Issue the certificate on the badging platform (see Certificate Issuance Workflow below).
2. Publish the disclosure and review record to the GitHub repo (`greensoftware-foundation/sci-certifications`) — both live in the same directory (e.g. `/certifications/2026/GSF-SCI-2026-00042/`).
3. Update the tracking spreadsheet: decision, certificate ID, expiry date.
4. Send the approval email: certificate link, disclosure URL, badge download instructions, expiry date.

**Time budget**: ~15–20 minutes per issuance.

### Revision Requested

1. Send the revision email with specific feedback tied to checklist item numbers.
2. Update the tracking spreadsheet: status → "Revision Requested."
3. When the applicant resubmits, log the resubmission date, reassign to a reviewer (same reviewer if available), status → "Under Review."
4. The SLA clock resets for the resubmission.

### Rejected (rare — bad faith only)

Rejection requires a second reviewer to concur:

1. Reviewer recommends rejection → you assign a second reviewer.
2. Both reviewers must independently agree the submission is bad faith.
3. If they agree: send the rejection email with specific rationale and right to appeal.
4. If they disagree: treat as revision requested.
5. Update the tracking spreadsheet.

---

## 8. Certificate Issuance Workflow

For each approved submission:

1. Create the credential on the badging platform.
2. Populate fields: certificate ID (`GSF-SCI-YYYY-NNNNN`), organization, software name, SCI score, issue date, expiry date (issue date + 1 year), disclosure URL.
3. Review for correctness.
4. Issue and publish.
5. Copy the certificate URL.
6. Publish the disclosure and review record to GitHub (redact contact email, prepend certificate metadata header). Both go in the same directory (e.g. `/certifications/2026/GSF-SCI-2026-00042/`).
7. Update the tracking spreadsheet.
8. Send the approval email.

---

## 9. Certificate Lifecycle

| Event | What to do |
|-------|-----------|
| **30 days before expiry** | Send renewal reminder email |
| **On expiry** | No immediate action needed — the certificate displays its expiry date, so the public can see it's expired |
| **Post-expiry** | Contact the holder to ask about renewal |
| **Holder wants to renew** | They submit a full new submission; it goes through the standard 13-item review |
| **Holder does not renew** | Remove from active site listings; expired certificate stays publicly visible as historical record, marked "Expired" |
| **Revocation (mandatory)** | ISO standard itself is withdrawn or the certificate was issued in error — revoke immediately |
| **Revocation (discretionary)** | Badge misuse, misrepresentation, code of conduct violation — requires review committee decision (quorum of 3, consensus or 2/3 vote) |

---

## 10. Disputes and Escalation

### Phase 1 — Informal (Days 1–10): You Handle This

An applicant or community member raises a concern. You:

1. Review the dispute.
2. Attempt to resolve it directly (clarification, re-review, correction).
3. Document the outcome.
4. If unresolved within 10 business days → escalate to Phase 2.

### Phase 2 — Formal Review (Days 11–30): Committee Panel

1. Convene a 3-person panel from the review committee (excluding anyone involved in the original decision).
2. Panel reviews the dispute and makes a determination.
3. You communicate the outcome.

### Phase 3 — Final Appeal (Days 31–60): SWG Chair

1. If the applicant is still dissatisfied, they can appeal to the SWG Chair.
2. The SWG Chair's decision is final and not further appealable.

---

## 11. Badge Misuse Enforcement

When you receive a report of badge misuse (at the program email address):

1. Forward to the review committee.
2. Committee investigates and, if confirmed, issues a 14-day warning with specific corrective actions.
3. If misuse persists after 14 days, the committee (quorum of 3) decides on revocation.
4. If the committee can't agree, escalate to the SWG Chair.

---

## 12. Committee Management

### Recruitment

- Primary pool: Software Standards Working Group participants.
- Self-nomination is encouraged.
- Members must be from different institutions and must not be GSF staff.
- Minimum: 3 active members at all times.

### Terms

- 1-year terms, renewable. Mid-term changes require SWG approval.
- If a member is persistently inactive, has undisclosed conflicts, or persistently fails procedures, you can propose removal (SWG approves).

### Below Quorum (Fewer Than 3 Members)

1. You may temporarily step in as a reviewer to prevent the program from halting.
2. Committee-level decisions (revocation, escalation) are deferred unless the SWG Chair authorizes an exception.
3. Recruit a replacement urgently.

---

## 13. What You Can Change Unilaterally

These are operational changes — no approval needed:

- Email templates and wording
- Reviewer assignment method
- Tracking tools and spreadsheet structure
- Internal workflows and processes

---

## 14. What Requires SWG Approval

These are substantive changes — propose to the SWG:

- Review criteria (the 13-item checklist)
- Access requirements (who can apply)
- Fee structure
- Certificate validity period
- Dispute resolution procedures
- Badge usage rules
- Code of conduct

Once approved, changes take effect after a **5-day grace period**. Submissions already under review at the time of approval are evaluated against the criteria that were in effect when they were submitted.

---

## 15. Year 1 Success Targets

| Category | Metric | Target |
|----------|--------|--------|
| Adoption | Submissions received | 20–50 |
| Adoption | Unique organizations | 10+ |
| Adoption | Software categories represented | 3+ |
| Operations | Average initial review time | <15 business days |
| Operations | Approval rate | 70–90% |
| Operations | Revocation rate | <5% |
| Quality | Inter-reviewer agreement | 80%+ |
| Quality | Major badge misuse incidents | 0 |

Total elapsed time (submission to certificate, including revision cycles) is tracked for internal performance reporting but does not have a formal target in Year 1.

Year 2 targets will be set at the annual program review based on Year 1 actuals.

---

## 16. Transition from Dual to Single Review

During the early phase, every submission gets dual review (two independent reviewers). Once you have:

- ~10 submissions completed under dual review, **and**
- Inter-reviewer agreement consistently above 80%

...transition to single review for routine submissions. Reserve dual review for:

- Submissions the reviewer flags as borderline or novel
- First-time applicants in a new software category
- Any submission where the reviewer recommends rejection

---

## 17. Key Contacts and Escalation Path

| Role | Who | When to involve |
|------|-----|-----------------|
| **SWG Chair** | Override authority | Final appeals, committee deadlock, any decision you're unsure about |
| **Review Committee** | 3+ independent reviewers | All submission reviews, badge misuse investigation, discretionary revocation |
| **Backup PM** | Any GSF staff | When you're unavailable — they have the same operational authority during cover |
| **SWG** | Software Standards Working Group | Substantive program changes, quarterly report delivery |
| **Steering Committee** | GSF Steering Committee | Quarterly report delivery (strategic oversight) |

---

## 18. Quick Reference — SLA Targets

| Process | Target |
|---------|--------|
| Submission acknowledgement | Within 1 business day |
| Initial review decision | 10–15 business days |
| Complex case extension | Up to 20 business days (notify applicant) |
| Resubmission review | 10–15 business days from resubmission |
| Renewal reminder | 30 days before expiry |
| Dispute Phase 1 (informal) | 10 business days |
| Dispute Phase 2 (formal) | 20 business days from Phase 2 initiation |
| Dispute Phase 3 (final appeal) | 30 business days from appeal filing |
| Badge misuse warning | 14 days to correct |

---

## 19. Templates and Tools Checklist

Ensure you have these ready before launch:

- [ ] Submission email inbox live with auto-reply
- [ ] Tracking spreadsheet created and shared with committee
- [ ] GitHub disclosure repo created with year/certificate directory structure
- [ ] Badging platform access and certificate template configured
- [ ] Email templates drafted: acknowledgement, revision request, approval, rejection, renewal reminder, challenge notification
- [ ] Badge assets ready: SVG and PNG, light and dark variants
- [ ] Precedent log created (`precedent-log.md` in the top-level certification repo)
- [ ] Quarterly report template created

---

## 20. Document Map

When you need the authoritative source for a specific topic:

| Topic | Document |
|-------|----------|
| Governance, roles, authority, disputes, change management | `Governance.md` |
| Program rationale, full proposal, success metrics | `GSF CoD Simplified proposal doc.md` |
| Launch timeline, infrastructure setup, operational cadence | `LAUNCH-IMPLEMENTATION-PLAN.md` |
| What applicants see, submission requirements, badge rules | `Applicant-Guide.md` |
| Reviewer instructions, checklist, calibration | `Reviewer-Guide.md` |
| Certificate issuance technical implementation | `certification-update-plan.md`, `sci-certification-tech-spec.md` |
| Review records and disclosures | GitHub disclosure repo, co-located per submission (e.g. `/certifications/2026/GSF-SCI-2026-00042/`) |
| Edge-case decisions and reasoning | `precedent-log.md` (top-level certification repo) |
| This manual | `PM-Operations-Manual.md` |
