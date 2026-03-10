# Landing Page Design: SCI Self-Certification Program

Design document for the applicant-facing landing page at greensoftware.foundation. This page is the single entry point for anyone considering or preparing a submission.

---

## Design Principles

- **One page, one goal**: the visitor understands what the program is and knows exactly how to submit.
- **No jargon before explanation**: define terms on first use.
- **Front-load the action**: the submission email address and template link should be visible without scrolling far.
- **Honest about scope**: be explicit that this is self-certification, not third-party audit. This builds trust and reduces misplaced expectations.

---

## Page Structure

### Hero Section

**Headline**: Self-Certify Your SCI Score

**Subheadline**: Demonstrate that your Software Carbon Intensity calculation follows ISO/IEC 21031:2024. Free. Open. Community-validated.

**Primary CTA button**: Apply Now → anchors to [How to Apply](#section-how-to-apply)

**Secondary CTA button**: View Certified Software → links to the public disclosure repo (`greensoftware-foundation/sci-certifications`)

---

### Section 1: What This Program Is

**Heading**: What is SCI Self-Certification?

**Body** (keep to 3–4 sentences):

> The GSF Self-Certification Program lets any organization declare that its SCI calculation conforms to ISO/IEC 21031:2024. You submit your calculation and methodology. GSF checks that your disclosure is complete and detailed enough for the community to understand and evaluate. If it is, you receive a certificate.

**Callout box**:

> **This is not a third-party audit.** GSF does not verify your numbers or methodology. You are responsible for accuracy and conformity. GSF verifies disclosure completeness only. Your submission is then published for community review.

**Key facts** (icon row or card grid):

| | |
|---|---|
| **Free** | No fees to apply or renew |
| **Open** | Any organization, any size, any domain |
| **Fast** | Decision within 10–15 business days |
| **1-year certificate** | Renew annually with an updated submission |

---

### Section 2: How It Works

**Heading**: How the Process Works

**Visual**: Horizontal step diagram (numbered 1–4)

| Step | Label | Description |
|------|-------|-------------|
| 1 | **Submit** | Email your SCI calculation, methodology disclosure, and signed attestation |
| 2 | **Review** | A GSF reviewer checks your submission against a 13-item disclosure checklist (10–15 business days) |
| 3 | **Decision** | Approved, revision requested (with specific feedback), or rejected (bad faith only) |
| 4 | **Certificate** | You receive a 1-year certificate, downloadable badge, and your disclosure is published on GitHub |

**Below the diagram, a short note**:

> Most submissions are approved or approved after one round of revisions. Rejection is reserved for bad faith (fabricated data, fraud). If anything is missing or unclear, you'll receive specific feedback on what to fix.

---

### Section 3: What You Need to Submit

**Heading**: What to Include in Your Submission

**Intro line**: Your submission must cover the following areas. Use our submission template — it walks you through each section with examples.

**Numbered list** (keep brief — this is a summary, not the full guide):

1. **Applicant and software details** — organization, software name, version, description
2. **Measurement period and SCI score** — start/end dates, score with units
3. **Software boundary** — what's included, what's excluded (with rationale for each exclusion)
4. **Functional unit (R)** — what unit you chose, why, how you counted it
5. **Energy (E)** — total energy, per-component breakdown with data sources
6. **Carbon intensity (I)** — value, location, approach, named data source with year
7. **Embodied emissions (M)** — total or justified M=0, per-component breakdown if applicable
8. **Methodology, assumptions, and limitations** — approach, at least one specific assumption, at least one specific limitation
9. **Calculation** — SCI formula shown with your actual numbers
10. **Signed attestation** — 10-point declaration included in the template

**CTA button**: Download Submission Template → links to `submission-email-template.md`

**Secondary link**: See detailed requirements in the Applicant Guide → links to `Applicant-Guide.md`

---

### Section 4: How to Apply {#section-how-to-apply}

**Heading**: How to Apply

**Prominent email display**:

> **Email your submission to:** sci-certification@greensoftware.foundation
>
> **Subject line:** `SCI Self-Certification Submission — [Your Organization] — [Your Software]`

**Accepted formats**: PDF, Word, Markdown, or plain text in the email body. Attachments are fine — reference filenames inline.

**Important note** (callout box):

> **Your submission becomes your public disclosure.** If approved, it is published as-is to GitHub (with your contact email redacted). Write your submission knowing it will be the public-facing document.

**What happens next**:

1. You receive an acknowledgement with a tracking number within 1 business day.
2. A reviewer evaluates your submission within 10–15 business days.
3. You receive an email with the decision and, if approved, your certificate details.

---

### Section 5: After Approval

**Heading**: What You Receive

**Three-column card layout**:

| Certificate | Badge | Public Disclosure |
|-------------|-------|-------------------|
| A certificate on the GSF badging platform with a unique ID, valid for 1 year | Downloadable badge (SVG/PNG, light/dark) for your website, README, and materials | Your full submission published on GitHub for community validation |

**Certificate rules summary** (short list):

- Always use the "self-certified" qualifier — never claim "ISO certified" or "independently verified"
- Badge must link to your certificate URL
- Remove the badge when your certificate expires or is revoked
- Full rules: [Badge Usage Guidelines](link to Badge-Usage-Guidelines.md)

**Renewal note**:

> Certificates are valid for 1 year. You'll receive a reminder 30 days before expiry. To renew, submit a full new submission through the same process.

---

### Section 6: Resources

**Heading**: Resources and Documentation

**Table or link list**:

| Resource | Description |
|----------|-------------|
| [Submission Template](link) | Pre-structured email template with examples for every field — start here |
| [Applicant Guide](link) | Full requirements, evaluation criteria, the 13-item checklist, decision rules, badge usage, appeals |
| [Example Submission](link) | A completed example submission showing what a successful application looks like |
| [Example Review Record](link) | What a completed review looks like — see exactly how your submission will be evaluated |
| [Badge Usage Guidelines](link) | Approved/prohibited language, display standards, asset downloads |
| [Public Disclosures](link) | Browse all approved disclosures on GitHub |
| [ISO/IEC 21031:2024 (SCI Specification)](link) | The standard your calculation must conform to |

---

### Section 7: FAQ

**Heading**: Frequently Asked Questions

**Q: Is this program free?**
Yes. There is no fee to apply, receive a certificate, or renew.

**Q: Who can apply?**
Any individual or organization that has calculated an SCI score according to ISO/IEC 21031:2024. No restrictions on size, location, or domain.

**Q: How long does the review take?**
10–15 business days. Complex cases may take up to 20 business days — you'll be notified of any delay.

**Q: What does GSF actually check?**
GSF checks that your disclosure is complete and detailed enough for a practitioner to understand and evaluate your calculation. GSF does not verify accuracy, methodology, or conformity — that's your responsibility.

**Q: What if my submission is incomplete?**
You'll receive specific feedback identifying exactly which items need attention and what to add. You can resubmit as many times as needed.

**Q: Can my certificate be challenged?**
Yes. Because this is self-certification, any party can challenge your certificate if they believe your calculation is non-conformant or made in bad faith. You'll have 30 days to respond. See the Applicant Guide for the full process.

**Q: How do I renew?**
Submit a full new submission through the same process before your certificate expires. You'll receive a reminder 30 days before expiry.

**Q: What's the difference between self-certification and third-party certification?**
With self-certification, you declare your own conformity and GSF verifies your disclosure is complete. With third-party certification, an accredited body independently audits your processes and calculations. This program is self-certification under the ISO/IEC 17050 framework.

---

### Footer CTA

**Heading**: Ready to certify?

**CTA button**: Download the Submission Template → links to `submission-email-template.md`

**Text**: Questions? Email sci-certification@greensoftware.foundation

---

## Link Targets

All links on this page should resolve to the following:

| Link | Target |
|------|--------|
| Submission Template | `planning/submission-email-template.md` in the certification repo (or hosted version) |
| Applicant Guide | `planning/Applicant-Guide.md` in the certification repo (or hosted version) |
| Example Submission | `submissions/example-greentech-inventory-api/submission.md` |
| Example Review Record | `submissions/example-greentech-inventory-api/review-record.md` |
| Badge Usage Guidelines | `planning/Badge-Usage-Guidelines.md` |
| Public Disclosures | `greensoftware-foundation/sci-certifications` GitHub repo |
| SCI Specification | `https://github.com/Green-Software-Foundation/sci` |
| Submission email | `mailto:sci-certification@greensoftware.foundation` |

---

## Implementation Notes

- The page should live on greensoftware.foundation (exact URL TBD, e.g. `/sci-certification` or `/self-certification`).
- The submission template and applicant guide can be linked directly from GitHub or hosted as rendered pages — either works, but rendered pages are friendlier.
- The example submission is valuable for first-time applicants — give it visible placement in the resources section.
- The page does not need a login, account creation, or form. Submission is via email. Keep it simple.
- Badge assets (SVG/PNG) should be downloadable from this page or linked from the Badge Usage Guidelines.
