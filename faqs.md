# SCI Self-Certification Program — Frequently Asked Questions

---

## About the Program

### What is the SCI Self-Certification Program?

It is a program run by the Green Software Foundation (GSF) that lets any organization declare that their Software Carbon Intensity (SCI) calculation conforms to ISO/IEC 21031:2024. You submit a structured disclosure of your calculation, GSF checks that the disclosure is complete and detailed enough for public review, and — if it passes — GSF issues a certificate and publishes your disclosure.

### What is ISO/IEC 21031:2024?

ISO/IEC 21031:2024 is the international standard for Software Carbon Intensity (SCI). It defines a methodology for quantifying the carbon emissions associated with running a piece of software, expressed as a rate: carbon emissions per unit of work (e.g., gCO2eq per 1,000 API requests). The standard was developed by the Green Software Foundation and published by ISO/IEC in 2024.

### What does "self-certification" mean?

Self-certification means **your organization** declares conformity with the standard — not an independent auditor. This follows the ISO/IEC 17050 framework for supplier's declarations of conformity. GSF's role is limited to verifying that your disclosure is complete and sufficiently detailed. GSF does not validate accuracy, check your arithmetic, assess your methodology, or confirm that your calculation actually conforms to ISO/IEC 21031:2024. You are responsible for all of that.

### How is this different from third-party ISO certification?

| | This Program | Third-Party Certification |
|---|---|---|
| **Who declares conformity** | Your organization | An independent auditor |
| **What gets verified** | Disclosure completeness | Full conformity assessment |
| **Cost** | Free (no fees) | $12,000–$47,000+/year |
| **Timeline** | ~3–4 weeks | Months |
| **Accountability** | Community validation via public disclosure | Auditor validation |

Third-party certification for ISO/IEC 21031:2024 does not currently exist. This program provides a practical path to demonstrate conformity while the standard is still gaining adoption.

### Is there a precedent for self-certification programs?

Yes. The OpenChain Project (Linux Foundation) runs a successful self-certification program for ISO/IEC 5230:2020 and ISO/IEC 18974:2023 with over 300 organizations listed. Our program goes further than OpenChain by adding human review of disclosures, public publication of submissions, and a structured community challenge mechanism.

---

## Eligibility and Cost

### Who can apply?

The program is open to **any organization** that has calculated an SCI score according to ISO/IEC 21031:2024. There are no restrictions on organization size, type, location, software domain, or calculation methodology.

### Does it cost anything?

No. The program is completely free. There is no fee to apply, receive a certificate, or renew.

### Can individuals apply, or only organizations?

Only organizations. The certificate is issued to the organization, not to an individual. However, an individual within an organization prepares and submits the application on behalf of their organization.

### Can I certify multiple software products?

Yes. Each software product or system requires a separate submission and receives its own certificate. There is no limit on the number of submissions per organization.

### Can I submit before my SCI calculation is complete?

No. You must have a completed SCI calculation before submitting. The submission requires your final score, full methodology, and supporting data. If you are still working on your calculation, the [GSF Impact Framework](https://if.greensoftware.foundation/) and the [SCI specification](https://github.com/Green-Software-Foundation/sci) are good starting points.

---

## Submission

### How do I submit?

Email your completed submission to **sci-certification@greensoftware.foundation** using the subject line format: `SCI Self-Certification Submission — [Your Organization Name] — [Your Software Name]`. Use the submission email template (`docs/submission-email-template.md`) as your starting point. Accepted formats are PDF, Word, Markdown, or plain text in the email body.

### What do I need to include?

Your submission has 7 sections plus a signed attestation:

1. **About you and your software** — organization, contact, software name/version/description
2. **Your SCI score** — score with units, measurement period
3. **Software boundary** — included/excluded components with rationales, shared infrastructure
4. **Functional unit (R)** — unit, rationale, counting method, total
5. **Energy and carbon intensity (E, I)** — per-component energy breakdown with sources, carbon intensity with location and source+year
6. **Embodied emissions (M)** — total or justified M=0, per-component breakdown with sources
7. **Methodology and calculation** — approach, methodology, assumptions, limitations, full calculation shown

Plus a 10-point attestation, signed and dated.

### Is there an example I can look at?

Yes. The repository includes a complete example submission in `submissions/example-greentech-inventory-api/disclosure.md` along with the corresponding review record in `review-record.md`. These show what a strong submission looks like and how the reviewer evaluates it.

### My submission will be published publicly?

Yes. If approved, your submission is published as-is to the `greensoftware-foundation/sci-certifications` GitHub repository. Your contact email is redacted and a certificate metadata header is added, but otherwise the submission is published exactly as you wrote it. This is a core feature of the program — public disclosure enables community validation, which is what gives self-certification its credibility. You consent to this in attestation point 10.

### Can I submit confidential or proprietary information?

Write your submission knowing it will be public. You do not need to include trade secrets, source code, or proprietary algorithms. The disclosure needs to be detailed enough that a practitioner can understand your calculation — not detailed enough to reproduce your entire system. For example, you can describe your energy estimation method without sharing your full monitoring infrastructure.

### Can I use the GSF Impact Framework for my submission?

Yes. The Impact Framework (IF) is one way to perform your SCI calculation, and an IF manifest file is encouraged as an optional attachment. However, the submission questionnaire must still be completed in full — an IF manifest alone is not a valid submission.

---

## Review Process

### What exactly does the reviewer check?

The reviewer works through a 7-item checklist. For each item, they ask: *"Could a knowledgeable practitioner reading this disclosure understand and evaluate this part of the calculation?"* Each item is marked **Y** (present and adequate), **N** (missing), or **I** (insufficient — present but too vague). The 7 items are:

1. Identity and scope (org details, boundary, exclusion rationales)
2. Score and period
3. Functional unit
4. Energy and carbon intensity
5. Embodied emissions
6. Methodology and transparency
7. Attestation

### What does the reviewer NOT check?

The reviewer does **not** assess:

- Whether your calculation actually conforms to ISO/IEC 21031:2024
- Whether your SCI score is correct
- Whether your arithmetic adds up
- Whether your methodology is appropriate
- Whether your assumptions are reasonable
- Whether your data sources are the best available

You self-certify all of that. The reviewer only checks that your disclosure is complete and detailed enough for the community to understand and evaluate.

### How long does the review take?

The initial review decision takes **10–15 business days** from submission (up to 20 for complex cases). After approval, there is a **7-day SWG objection period** before the certificate is issued. Total time from submission to certificate is typically **3–4 weeks**.

### What happens if my submission needs revisions?

You receive specific feedback identifying which checklist items need attention and what to add or clarify. This is not a rejection — it is an invitation to fix specific issues and resubmit. You may resubmit as many times as needed. Each resubmission enters the review queue for another 10–15 business day review cycle.

### What is the SWG sign-off?

After a reviewer recommends approval, the Software Standards Working Group (SWG) has a **7-day objection period**. Any SWG member may raise an objection with a specific rationale during this window. If no objections are raised, the SWG Chair or GSF Executive Director provides explicit sign-off and the certificate is issued. This is a governance safeguard — in practice, most submissions proceed without objection.

### Can my submission be rejected?

Rejection is reserved exclusively for **bad faith** — fabricated data, obvious fraud, or persistent refusal to engage after revision requests. It requires two reviewers to agree. Incomplete or low-quality submissions always receive revision requests, never rejections. If rejected, you may appeal through the dispute resolution process.

---

## Certificates and Badges

### What do I receive when approved?

- A certificate on the GSF badging platform (`badges.greensoftware.foundation`) with a unique ID (format: `GSF-SCI-YYYY-NNNNN`)
- A downloadable badge (SVG and PNG, light and dark variants)
- A public disclosure page on GitHub containing your full submission
- An email with your certificate link, disclosure URL, badge download instructions, and expiry date

### How long is the certificate valid?

**1 year** from the date of issuance. You will receive a renewal reminder 30 days before expiry.

### How do I renew?

Submit a full new submission through the same process. Renewal is not a lighter or abbreviated review — it is a complete resubmission with current data. Renewed certificates receive a new ID linked to the previous one.

### What happens when my certificate expires?

The certificate remains publicly visible as a historical record but is marked "Expired." You must remove the badge from all materials. You can renew at any time by submitting a new application.

### How can I use the badge?

You may display the badge on websites, READMEs, presentations, marketing materials, and social media. Every badge display must link to your certificate URL. You must use official badge assets without modification.

### What is the single most important badge rule?

**Always include the "self-certified" qualifier when claiming ISO/IEC 21031:2024 conformity.** You may say "self-certified compliant with ISO/IEC 21031:2024" — never "ISO certified", "third-party certified", "independently verified", or anything that implies GSF validated accuracy. Removing the "self-certified" qualifier is grounds for certificate revocation.

### Can I display the badge for software that is not covered by my certificate?

No. The badge applies only to the specific software named in your certificate. Displaying it alongside uncertified products is a violation of the badge usage rules.

---

## Technical Questions

### What functional unit should I use?

Choose a unit that reflects how your software delivers value or scales. Common examples include "per 1,000 API requests", "per user-month", "per training run", or "per transaction". The key requirement is that your rationale connects the unit to your software's purpose and scaling behaviour. There is no prescribed list — you choose what makes sense for your software.

### What if my embodied emissions (M) are zero?

M = 0 is acceptable if you provide a specific justification — for example, "Pure SaaS deployment with no hardware under our operational control" or "Serverless functions with no dedicated hardware to allocate." A bare "M = 0" without explanation will be marked insufficient.

### What data sources are acceptable for carbon intensity?

Any reputable, published source with a named year is acceptable. Common sources include EPA eGRID (US), IEA World Energy Outlook, Ember, DEFRA (UK), and cloud provider sustainability reports. What is **not** acceptable is "average grid data" with no source name or year. The reviewer needs to see which dataset you used and how recent it is.

### Do I need direct hardware power measurements?

No. Most cloud-hosted software will use estimation methods — TDP-based power modelling, cloud provider telemetry, or tools like the Cloud Carbon Footprint methodology. What matters is that you disclose your method and data sources clearly, and acknowledge estimation uncertainty in your assumptions and limitations.

### How should I handle shared infrastructure?

If any included component runs on shared infrastructure (e.g., a shared database cluster), state what is shared and describe how you allocated your share (e.g., by CPU time, by request volume, by cost proportion). If all components are dedicated, state "No shared infrastructure." Either way, the reviewer needs to see that you have addressed this explicitly.

### What if my software runs in multiple regions?

Provide a per-region breakdown showing the carbon intensity value, data source, and percentage of workload for each region, with weights that sum to 100%. Use a single weighted-average carbon intensity value in your final SCI calculation.

### Can I use a measurement period shorter or longer than one month?

Yes. ISO/IEC 21031:2024 does not prescribe a specific measurement period length. Choose a period that is representative of your software's typical operation. Very short periods (e.g., one day) may not capture representative patterns; very long periods may mask seasonal variation. State and justify your choice.

---

## Community and Accountability

### How does community validation work?

All approved submissions are published publicly on GitHub. Anyone — industry practitioners, researchers, the public — can read your disclosure and assess whether it is reasonable. This transparency is what gives self-certification its credibility. If someone identifies a concern, they can raise a formal challenge.

### Can anyone challenge my certificate?

Yes. Any party may challenge a certificate by emailing sci-certification@greensoftware.foundation with specific concerns and supporting evidence. Challenges are reviewed for legitimacy within 5 business days. Frivolous challenges (e.g., disagreements about methodology choice that don't indicate non-conformity) are dismissed.

### What happens if my certificate is challenged?

1. GSF reviews the challenge for legitimacy (5 business days)
2. If valid, you have 30 days to respond — your certificate status changes to "Under Community Review"
3. GSF evaluates the response (15 business days)

Outcomes range from dismissal (certificate returns to Active) through minor corrections (disclosure updated) to revocation (material non-conformity or bad faith confirmed).

### Can my certificate be revoked?

Yes, in limited circumstances:

- **Automatic revocation**: fabrication/misrepresentation discovered post-issuance, serious code of conduct violation, or at your own request
- **Committee decision**: persistent badge misuse after a warning, failure to correct material omissions, or unresponsive to the dispute process

Certificates are **not** revoked for calculation errors, methodology disagreements, or changes in the SCI specification. The certificate represents that you made a complete disclosure, not that your numbers are correct.

---

## Appeals and Disputes

### How do I appeal a review decision?

The dispute resolution process has three phases:

1. **Informal resolution (days 1–10)** — email sci-certification@greensoftware.foundation with your rationale; the Program Manager attempts to resolve
2. **Formal review (days 11–30)** — a 3-person panel from the review committee (excluding anyone involved in the original decision) reviews written statements and issues a written decision
3. **Final appeal (days 31–60)** — heard by the SWG Chair; limited to procedural errors, new evidence, or panel misconduct; decision is final

### What can I dispute?

You can dispute whether disclosure requirements were met, whether the code of conduct was followed, and whether review procedures were properly applied. The dispute process does **not** adjudicate the accuracy of calculations, the quality of methodologies, or technical debates — those are matters for community review.

---

## Getting Started

### Where do I find the submission template?

The template is in this repository at `docs/submission-email-template.md`. It is structured to match the 7-section requirements exactly, with placeholder text and examples for every field.

### Where do I find detailed submission requirements?

The [Applicant Guide](docs/applicant-guide.md) contains full requirements, evaluation criteria, pass/fail examples, badge rules, the appeals process, and a pre-submission checklist.

### Who do I contact with questions?

Email **sci-certification@greensoftware.foundation** for any questions about the program, your submission, or your certificate.

### How do I learn more about the Green Software Foundation?

Visit [greensoftware.foundation](https://greensoftware.foundation/) for information about the Green Software Foundation and its initiatives.
