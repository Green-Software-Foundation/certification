# GSF Self-Certification Program for ISO/IEC 21031:2024 \- Proposal Document

## Executive Summary

The Green Software Foundation (GSF) proposes establishing a **Self-Certification Program** for ISO/IEC 21031:2024 (Software Carbon Intensity). This program enables organizations to self-certify conformity with the ISO/IEC 21031:2024 standard while providing transparent, structured disclosure that enables community validation.

**Program Model**:

- **Self-certification**: Organizations declare conformity with ISO/IEC 21031:2024 requirements  
- **Disclosure verification**: GSF verifies that all required information was provided  
- **Community validation**: Public disclosure enables stakeholders to assess conformity claims  
- **Not third-party certification**: This is self-certification, not accredited certification

**Key Distinction**: The GSF certificate confirms that an organization has self-certified conformity with ISO/IEC 21031:2024 AND provided sufficient disclosure information - NOT that GSF has independently validated the accuracy or conformity of the calculation. This transparency-focused approach encourages disclosure and enables community scrutiny without requiring expensive third-party audits.


**Implementation** (Lean MVP Approach):

- Free, email-based submission process with self-certification attestation  
- **Manual human review** by GSF committee verifying disclosure completeness—all verification performed by expert reviewers, not automated systems  
- Certificate generation via GSF's existing badging service  
- Public disclosure via GSF website and/or GitHub repository enabling community validation  
- Community challenge process for questionable self-certifications  
- 1-year certificate validity with renewal process  
- Minimal overhead, fast time-to-launch  
- Future automation possible when proven demand exists (see Section 12\)

---

## 1\. Program Overview

### 1.1 Purpose and Scope

The GSF Self-Certification Program for ISO/IEC 21031:2024 aims to:

1. **Enable self-certification** of conformity with ISO/IEC 21031:2024 (Software Carbon Intensity standard)  
2. **Encourage transparency** through complete disclosure of calculation methodology and results  
3. **Standardize disclosure format** to enable comparison, peer review, and community validation  
4. **Lower barriers to entry** by using self-certification rather than expensive third-party audits  
5. **Create "conformant community"** of ISO/IEC 21031:2024 conformant organisations  
6. **Build trust** through transparent, auditable disclosure practices and community review

### 1.2 Self-Certification vs. Third-Party Certification

This program issues **Self-Certification Certificates**, not Third-Party Certification:

| Self-Certification (This Program) | Third-Party Certification (NOT This) |
| :---- | :---- |
| Organization declares conformity with ISO/IEC 21031:2024 | Independent auditor validates conformity |
| GSF verifies disclosure completeness | Certification body performs detailed conformity audit |
| Community reviews and validates claims | Authoritative validation by accredited body |
| Aligned with ISO/IEC 17050 framework | Requires ISO/IEC 17021-1 accredited body |
| Free and accessible | Typically expensive ($5k-15k+ per certification) [^2] |
| Fast process (\~15 business days) | Slower (weeks to months) |
| Appropriate for emerging standards | Required for regulated/high-stakes claims |

**GSF's Role**: GSF verifies that organizations have provided complete disclosure information that enables peer review. GSF does NOT independently validate the accuracy of calculations, appropriateness of methodologies, or conformity with ISO/IEC 21031:2024 - these assessments are the responsibility of the self-certifying organization and the reviewing community.

**Organization's Responsibility**: Organizations self-certify conformity with ISO/IEC 21031:2024, attest to good faith compliance, and maintain supporting documentation.

**Community's Role**: Community members can review disclosed information and challenge self-certifications that appear non-conformant or made in bad faith.


### 1.3 Self-Certification vs. ISO Accredited Certification

**Critical Distinction**: GSF issues certificates for **self-certification with ISO/IEC 21031:2024**. This is NOT ISO accredited certification.

**What is Self-Certification?**

Self-certification (also called "supplier's declaration of conformity") is a legitimate conformity assessment approach recognized by ISO:

- Organizations declare their own conformity with an ISO standard  
- Follows **ISO/IEC 17050** (Supplier's declaration of conformity) framework  
- Widely used for many ISO standards, especially in voluntary contexts  
- No third-party certification body required  
- Organization takes responsibility for conformity claim and maintains supporting documentation

**What is ISO Accredited Certification?**

ISO accredited certification is a more rigorous, expensive approach:

- Third-party certification body validates conformity through detailed audit  
- Certification body must be accredited by national accreditation body (ANAB, UKAS, etc.)  
- Requires conformance to **ISO/IEC 17021-1** (requirements for certification bodies)  
- Involves on-site assessments, annual surveillance, and periodic re-certification  
- **Costs**: £9,583-£34,614+ annually (~$12,000-$47,000+ USD at current exchange rates) based on UKAS fee schedules [^1]
- **Timeline**: 6-18 months for accreditation, plus ongoing surveillance

**Benefits of the Self-Certification Model**:

1. **Accessibility**: No expensive certification fees; free for all organizations  
2. **Appropriate scope**: Self-certification is suitable for emerging standards and voluntary disclosure programs  
3. **Speed**: Fast process (\~15 business days) vs. lengthy audit cycles  
4. **Community-driven validation**: Peer review and transparency provide accountability without expensive audits  
5. **Aligned with ISO framework**: ISO/IEC 17050 explicitly supports self-declaration  
6. **Lower barriers**: Encourages participation rather than discouraging it with high costs

**What Certificate Holders Can Say**:

- ✓ "Self-certified compliant with ISO/IEC 21031:2024"  
- ✓ "ISO/IEC 21031:2024 compliant (self-certified)"  
- ✓ "Self-certified ISO/IEC 21031:2024 Software Carbon Intensity calculation"

**What Certificate Holders CANNOT Say** (without "self-certified" qualifier):

- ✗ "ISO certified" or "ISO/IEC 21031:2024 certified"  
- ✗ “GSF verified ISO compliant“  
- ✗ "Certified by GSF for ISO 21031:2024”  
- ✗ "Certified by ISO accredited body"  
- ✗ "Third-party certified to ISO/IEC 21031:2024"  
- ✗ "Independently certified" or "audited and certified"  
- ✗ Any claim implying independent certification audit occurred  
- ✗ Any claim implying GSF have verified compliance against ISO standard


**Required Language**: Certificate holders MUST include "self-certified" qualifier when claiming ISO/IEC 21031:2024 conformity. Removing this qualifier is a violation of certificate usage terms and may result in revocation.

**Future Possibilities**:

While not part of the current program roadmap, GSF could theoretically pursue ISO accreditation to offer third-party certification in the future if:

- There is demonstrated market demand for accredited certification (beyond self-certification)  
- Funding is available to cover £10k-£35k+ (~$12k-$47k+ USD) annual accreditation costs without passing excessive fees to applicants  
- The ISO/IEC 21031:2024 landscape matures to support standardized audit practices  
- A funding model can preserve accessibility while covering accreditation costs

However, this would represent a fundamentally different program (third-party certification vs. self-certification) and is not currently planned. See Section 12.5 for detailed analysis of the accreditation path.

### 1.4 Case Study: OpenChain Self-Certification Model

This program draws inspiration from the **OpenChain Project** (Linux Foundation), which operates a successful self-certification program for ISO/IEC 5230:2020 (open source license compliance) and ISO/IEC 18974:2023 (open source security assurance).

- Organizations complete a **yes/no checklist** covering the requirements of ISO/IEC 5230:2020 or ISO/IEC 18974:2023
- Self-certification is submitted through a simple web form
- **No verification or audit** is performed—organizations self-attest to conformance
- Conformant organizations are listed on a **public "Community of Conformance"** registry
- The program is **completely free** with no fees at any level
- Over **300 organizations** are publicly listed, with 1,000+ participating in the broader community
- Self-certification follows an **18-month self-enforced review cycle**

*Source: [OpenChain Project Self-Certification](https://www.openchainproject.org/checklist-iso-5230-2020), [OpenChain Community of Conformance](https://www.openchainproject.org/community-of-conformance)*

However, OpenChain *do* support higher tiers of certification, including paid third party certification from official trusted vendors, leading to formal ISO certification.

The GSF self-certification program could adapt OpenChain's proven model, adding elements specific to technical carbon measurement:

| Aspect | OpenChain | GSF Self-Certification |
| :---- | :---- | :---- |
| **Checklist** | Yes/no process conformance questions | Structured disclosure of technical data and methodology |
| **Verification** | None (pure self-attestation) | GSF verifies disclosure completeness (human review) |
| **Public Registry** | Community of Conformance listing | Public disclosure of calculation details |
| **Substance** | Process-oriented (do you have policies?) | Substance-oriented (what did you measure and how?) |
| **Community Challenge** | No formal process | Structured community challenge mechanism (Section 9) |
| **Certificate Artifact** | No formal certificate for self-certification tier | Certificate document issued |
| **Review Cycle** | 18-month self-enforced | 1-year validity with renewal |
| **Cost** | Free | Free |

**Takeaways**:

1. **Simplicity drives adoption**: OpenChain began with free self-certification and later added paid independent assessment and accredited certification options as demand materialized
2. **Public listing creates accountability**: Community visibility provides informal enforcement without expensive audit mechanisms
3. **Checklist-based approach is effective**: A structured checklist reduces ambiguity and makes conformance requirements accessible
4. **Free access maximizes participation**: Removing cost barriers is critical for emerging standards adoption

---

## 2\. Eligibility and Applicant Requirements

### 2.1 Who Can Apply

Any individual or organization that has calculated a Software Carbon Intensity (SCI) score according to ISO/IEC 21031:2024 may apply for self-certification. There are no restrictions based on:

- Organization size or type  
- Geographic location  
- Software domain or category  
- Calculation methodology (measurement, estimation, or hybrid approaches allowed by ISO/IEC 21031:2024)

### 2.2 Application Fee Structure

**Free for all applicants.** The GSF funds this program through its operational budget to maximize accessibility and encourage widespread adoption of ISO/IEC 21031:2024 self-certification.


### 2.3 Self-Certification Attestation (Required)

All applicants MUST complete and submit the following attestation as part of their application:

**Self-Certification Attestation for ISO/IEC 21031:2024**

By submitting this application, the applicant organization or individual ("Applicant") hereby:

1. **DECLARES** that the submitted SCI calculation conforms to all requirements of ISO/IEC 21031:2024 (Software Carbon Intensity)  
     
2. **ATTESTS** that the calculation was performed in good faith using appropriate methodologies and data sources consistent with ISO/IEC 21031:2024  
     
3. **ACKNOWLEDGES** that this is self-certification under the ISO/IEC 17050 framework and does not constitute third-party certification or independent validation by GSF  
     
4. **MAINTAINS** supporting documentation for all calculations, methodologies, data sources, and assumptions for a minimum of 3 years and will provide upon reasonable request  
     
5. **ACCEPTS RESPONSIBILITY** for the accuracy, completeness, and conformity of the calculation and disclosure with ISO/IEC 21031:2024  
     
6. **AGREES** to promptly correct any errors or inaccuracies if identified through community review or self-discovery  
     
7. **UNDERSTANDS** that GSF's role is limited to verifying disclosure completeness, not validating calculation accuracy or ISO/IEC 21031:2024 conformity  
     
8. **AGREES** to use the certificate and badge only as permitted in GSF Certificate Usage Guidelines (Section 7), including always using "self-certified" qualifier when claiming ISO/IEC 21031:2024 conformity  
     
9. **ACKNOWLEDGES** that false or misleading self-certification may result in certificate revocation, public notice, and potential legal consequences  
     
10. **CONSENTS** to public disclosure of the submitted information to enable community review and validation

**Signature**: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date**: \_\_\_\_\_\_\_\_\_\_\_

**Name and Title**: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**Organization**: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_


### 2.4 Required Disclosure Information

Applicants must provide all **mandatory disclosure items** as specified in the SCI Specification and outlined below. Incomplete submissions will not be processed.

---

## 3\. Mandatory Disclosure Requirements

To support self-certification with ISO/IEC 21031:2024 and enable community validation, applicants SHALL disclose all information required by ISO/IEC 21031:2024 and the following additional details:

### 3.1 Score Information

- **Score value** (number with units, e.g., "349.63 gCO2eq per 1,000 API requests")  
- **Measurement period** (dates and duration)  
- **Submission metadata**:  
  - Applicant organization/individual name  
  - Contact information  
  - Software/system name and version  
  - Submission date

### 3.2 Software Boundary

- **Components explicitly included** in the calculation  
- **Components explicitly excluded** with rationale for each exclusion  
- **Assumptions about shared infrastructure** (if applicable)  
- **Allocation methods** for shared resources (if applicable)

**Example**: "Included: application servers, load balancer, database. Excluded: CDN (separate service), end-user devices (beyond operational control)"

### 3.3 Functional Unit (R)

- **Functional unit chosen** (e.g., "per 1,000 API requests", "per training run", "per user-month")  
- **Rationale** for the choice of functional unit  
- **How the unit is counted or measured** (e.g., "application logs", "instrumented devices")  
- **Conversion factors used** with justification (if applicable)

### 3.4 Quantification Methodology

- **Description of methodologies employed**:  
  - Measurement (direct telemetry)  
  - Calculation (modeling)  
  - Coefficients/emission factors  
  - Combination approaches  
- **Key assumptions made** in the calculation  
- **Known limitations or uncertainties**  
- **Material coefficients or emission factors** used (with sources)

**For Energy (E)**:

- How operational energy was measured or calculated  
- PUE (Power Usage Effectiveness) applied, if any  
- Data sources (e.g., cloud provider monitoring, device profiling)

**For Carbon Intensity (I)**:

- Location(s) where software runs  
- Carbon intensity values used (gCO2eq/kWh)  
- Data sources (grid data provider, year)  
- Whether location-based or market-based accounting used

**For Embodied Emissions (M)**:

- Total embodied emissions (TE) per hardware component  
- Expected lifespan (EL) assumptions  
- Time reserved (TiR) calculations  
- Resource allocation methodology (RR/ToR)  
- Data sources for embodied carbon (manufacturer LCA, databases)

### 3.5 Recommended Disclosure (Encouraged)

While not mandatory, the following SHOULD be disclosed for maximum transparency:

- An Impact Framework IMP/manifest file (gives maximum transparency and community verifiability)
- Detailed methodology per component  
- Complete data sources documentation  
- Sub-component score breakdowns  
- Uncertainty or confidence intervals  
- Comparison to industry benchmarks

### 3.6 Baseline Comparison Reporting (If Applicable)

When reporting improvement from a baseline, SHALL disclose:

- **Baseline score** (with full disclosure per section 3.1-3.4)  
- **New score** (with full disclosure per section 3.1-3.4)  
- **Actions taken** between baseline and new measurement  
- **Explanation of differences** between scores

### 3.7 Domain-Specific Reporting

For example, to comply with SCI for AI, SCI for Web

If a domain guideline exists with additional reporting requirements, applicants SHALL include:

- Reference to the domain guideline  
- All domain-specific required fields  
- Any domain-specific context

---

## 4\. Submission Process

### 4.1 Email-Based Submission

Applicants submit their SCI calculations by email to: [**sci-certification@greensoftware.foundation**](mailto:sci-certification@greensoftware.foundation)

### 4.2 Submission Format

Submissions MUST include:

**1\. Self-Certification Attestation** (REQUIRED \- see Section 2.3):

- Completed and signed attestation form  
- Declares conformity with ISO/IEC 21031:2024  
- Acknowledges responsibilities and terms

**2\. Disclosure Information** (see Section 3 for details):

1. **Applicant and Software Metadata**  
     
   - Organization/individual name and contact email  
   - Software/system name and version  
   - Measurement period (dates)


2. **SCI Score**  
     
   - Calculated score with units (e.g., "349.63 gCO2eq per 1,000 API requests")


3. **Software Boundary**  
     
   - Components included (with justification)  
   - Components excluded (with rationale)


4. **Functional Unit (R)**  
     
   - Unit chosen and rationale  
   - Measurement method


5. **Energy (E), Carbon Intensity (I), and Embodied Emissions (M)**  
     
   - Values, calculations, and data sources for each component


6. **Methodology and Assumptions**  
     
   - Approach used (measurement, calculation, hybrid)  
   - Key assumptions and limitations  
   - Data sources

**Accepted Formats**:

- PDF document  
- Word document  
- Plain text email  
- Markdown document

**Supporting Materials** (optional but encouraged):

- Calculation IMP file (spreadsheet accepted by non-preferred)  
- Links to public documentation  
- Baseline comparison data (if applicable)

**Reference Examples**: See Appendices A-C for example calculations (example-1-api-service-final.yml, example-2-ml-training-final.yml, example-3-mobile-app-final.yml)

### 4.3 Submission Acknowledgment

- Applicant receives automated email acknowledgment upon receipt  
- Submissions assigned a tracking number (e.g., "GSF-SUB-2026-0042")  
- Expected review timeline: 10-15 business days

### 4.4 Review Process

All submissions undergo manual review by the GSF review committee:

1. **Completeness Check**: Reviewer verifies all required information is present (see Validation Checklist)  
2. **Disclosure Quality Review**: Reviewer assesses whether disclosure is sufficient for community evaluation  
3. **Specification Alignment**: Reviewer confirms submission follows SCI specification structure

### 4.5 Review Outcomes

**Outcome 1: Approved**

- All required disclosures present  
- Sufficient detail for community evaluation  
- Follows SCI specification  
- **Result**: Certificate issued, applicant notified (typically within 10-15 business days)

**Outcome 2: Revisions Requested**

- Missing or insufficient information in specific areas  
- Reviewer provides specific feedback via email  
- Applicant invited to address feedback and resubmit  
- **Result**: Revised submission enters review queue

**Outcome 3: Rejected**

- Obvious bad faith submission  
- Refuses to provide required disclosures  
- Does not follow SCI specification  
- **Result**: Rejection with explanation, applicant may appeal

---

## 5\. Review Committee and Process

### 5.1 Review Committee

The review committee consists of:

- **3-5 GSF members** with SCI expertise and familiarity with the specification  
- Appointed for 1-year renewable terms

**Committee Operations**:

- Reviews conducted asynchronously (email-based workflow)  
- Complex cases discussed in monthly committee meetings (1 hour)  
- Decision consensus via email or meeting vote

### 5.2 Review Criteria

**Important**: Reviewers verify **disclosure completeness**, not ISO/IEC 21031:2024 conformity. Conformity is self-certified by the applicant; community validates through review of disclosed information.

Reviewers evaluate submissions against a **Disclosure Verification Checklist** (see Appendix D) that covers:

- All mandatory disclosure fields present (Section 3\)  
- Self-certification attestation completed and signed (Section 2.3)  
- Score, boundary, functional unit, E/I/M, methodology documented  
- Data sources identified


**What Reviewers Do NOT Assess**:

- **ISO/IEC 21031:2024 conformity** (applicant self-certifies; community validates)  
- Accuracy of calculations (beyond basic arithmetic)  
- Quality or appropriateness of methodology choices  
- Whether assumptions are "correct" (only that they're disclosed)  
- Validity of data sources (only that they're identified)

**Reviewer Role Summary**: Verify disclosure enables community validation of self-certification claims.

### 5.3 Review Outcomes

**Approve**:

- All disclosure requirements met  
- Sufficient transparency for community evaluation  
- Follows SCI specification structure  
- **Result**: Certificate issued (see Section 6\)

**Request Revisions**:

- Insufficient disclosure in specific areas  
- Reviewer provides specific feedback via email  
- Applicant invited to address and resubmit  
- **Result**: No certificate until revisions addressed

**Reject**:

- Obvious bad faith submission or intentional misrepresentation  
- Refuses to provide required disclosures after feedback  
- Does not follow SCI specification  
- **Result**: No certificate, applicant may appeal (see Section 9\)

### 5.4 Review Timeline

- **Target**: 10-15 business days for initial review  
- **Complex cases**: May extend to 20 business days with applicant notification  
- Applicants notified of delays via email

### 5.5 Review Documentation

- All review decisions documented internally  
- Precedent-setting decisions added to reviewer guidance  
- Anonymized statistics published quarterly (submission volume, approval rate, common issues)

---

## 6\. Certificate Issuance and Format

### 6.1 Certificate Generation Method

Upon approval, GSF issues a **Self-Certification Certificate for ISO/IEC 21031:2024** using the GSF's existing badging platform:

The overall design will look similar to the Green Software Practitioner badge:

[https://badges.greensoftware.foundation/credentials/green-software-practitioner-br](https://badges.greensoftware.foundation/credentials/green-software-practitioner-br)


### 6.2 Certificate Content

Each certificate includes:

**Required Elements**:

1. **Header**:  
     
   - "Green Software Foundation" branding  
   - Certificate title: "SELF-CERTIFIED COMPLIANT WITH ISO/IEC 21031:2024"  
   - Subtitle: "Software Carbon Intensity (SCI)"  
   - Certificate ID: `GSF-SCI-{YEAR}-{SEQUENTIAL-NUMBER}`  
   - Issued date and valid until date (1 year validity)  
   - Certificate status (Active, Expired, Revoked)

   

2. **Self-Certification Statement**:  
     
   "This certificate confirms that \[Organization\] has self-certified conformity with ISO/IEC 21031:2024 (Software Carbon Intensity) and provided complete disclosure information verified by the Green Software Foundation.  
     
   ✓ Self-certification: \[Organization\] declares that this SCI calculation conforms to ISO/IEC 21031:2024 requirements  
     
   ✓ Disclosure verification: GSF verified that all required disclosure elements were provided with sufficient detail for community review  
     
   This is not third-party certification or accredited conformity assessment. The disclosed information enables peer review and community validation of conformity claims."  
     
3. **Score Summary**:  
     
   - Organization/individual name  
   - Software/system name and version  
   - SCI Score with units (e.g., "349.63 gCO2eq per 1,000 API requests")  
   - Measurement period  
   - Functional unit


4. **Verification Scope**:  
     
   - "✓ Organization certifies conformity"  
   - "✓ GSF verified disclosure completeness"


5. **Reference to Full Disclosure**:  
     
   - Link to full disclosure document (hosted on GSF website or GitHub)  
   - "Full disclosure available at: \[URL\]"  
   - "Verify certificate at: greensoftware.foundation/cert/\[ID\]"


### 6.3 Full Disclosure Publication

The complete submission (with all detailed disclosure information) is published alongside the certificate:

**GitHub Repository**

- Public GitHub repo: `greensoftware-foundation/sci-certifications`  
- Each certificate \= one directory with application assets  
- Enables version control, community review, and transparency  
- Example path: `/certifications/2026/GSF-SCI-2026-00042/`

### 6.4 Certificate Validity and Renewal

**Validity Period**: 1 year from issuance date

**Expiration**:

- Certificates expire after 1 year  
- Expired certificates remain publicly accessible (historical record)  
- Badge or certificate marked as "Expired"

**Renewal Process**:

- Applicants email renewed submission to [sci-certification@greensoftware.foundation](mailto:sci-certification@greensoftware.foundation)  
- Subject line: "Renewal: GSF-SCI-2026-00042"  
- Can update calculation, methodology, or provide new measurement period  
- Renewed certificates receive new certificate ID, linked to previous version

**Multiple Certificates**:

- Organizations can hold multiple active certificates for different software systems  
- Each system/service receives separate certificate

### 6.5 Certificate Verification

**Manual Verification**:

- Certificate URL (or GitHub link) publicly accessible  
- Anyone can view full disclosure document  
- Certificate ID can be cross-referenced with GSF registry

---

## 7\. Certificate Usage Guidelines

### 7.1 Permitted Uses

Organizations with active GSF Self-Certification Certificates may:

**Display Certificate**:

- Link to certificate URL or GitHub disclosure page in documentation, websites, reports  
- Reference certificate in marketing materials with proper context  
- Display certificate badge (if using third-party badging service)  
- Share on social media platforms (LinkedIn, Twitter, etc.)

**Compliant Language Examples**:

- ✓ "Self-certified compliant with ISO/IEC 21031:2024, verified by GSF"  
- ✓ "ISO/IEC 21031:2024 SCI calculation (self-certified, disclosure verified by Green Software Foundation)"  
- ✓ "Our software carbon intensity has been self-certified to ISO/IEC 21031:2024 standards"  
- ✓ "We have self-certified our SCI calculation with ISO/IEC 21031:2024 through the GSF program"

**Badge/Certificate Display Requirements**:

- Badge or certificate image MUST link to full disclosure (URL or GitHub)  
- May only be displayed while certificate is active (not expired/revoked)  
- Must not be modified (if using official badge design)  
- "Self-certified" qualifier must be visible if displaying conformity claims alongside badge


### 7.2 Required Context and Qualifiers

When referencing the certificate or claiming ISO/IEC 21031:2024 conformity, organizations MUST:

**Always Include "Self-Certified" Qualifier**:

- REQUIRED: When claiming ISO/IEC 21031:2024 conformity, must include "self-certified" qualifier  
- This applies to ALL contexts: websites, marketing materials, press releases, presentations, social media  
- Removing "self-certified" qualifier is a violation of certificate terms and grounds for revocation

**Clarify Nature of Certification**:

- Make clear this is self-certification with disclosure verification, not third-party certification  
- Recommended language: "This is self-certification under ISO/IEC 17050 framework. GSF verified disclosure completeness; we self-certify conformity with ISO/IEC 21031:2024."

**Link to Full Disclosure**:

- Always provide certificate URL or GitHub link for full transparency  
- Enable community review and validation of self-certification claims

### 7.3 Prohibited Uses

Organizations may NOT:

**Prohibited Claims About Certification Type**:

- **Claim "ISO certified" or "ISO/IEC 21031:2024 certified" WITHOUT "self-certified" qualifier**  
- **Claim "third-party certified" or "independently certified"**  
- **Imply that GSF performed independent conformity validation or audit**  
- **Remove or obscure "self-certified" qualifier in any context**

**Prohibited Claims About GSF's Role**:

- Claim GSF "endorsement" or "approval" of calculation quality, accuracy, or conformity  
- Imply GSF validated the ISO/IEC 21031:2024 conformity (GSF only verifies disclosure)  
- State "certified by GSF" without clarifying "self-certified, disclosure verified by GSF"

**Other Prohibited Uses**:

- Claim the certificate represents accredited certification  
- Display badge/certificate for expired or revoked certificates  
- Make comparative claims ("certified lower carbon than competitor")  
- Use GSF logo separately from certificate context  
- Modify or alter certificate badge design

**Examples of Prohibited Language**:

- ✗ "ISO/IEC 21031:2024 certified" (missing "self" qualifier)  
- ✗ "Certified by Green Software Foundation to ISO/IEC 21031:2024" (implies GSF certified conformity)  
- ✗ "Independently verified ISO/IEC 21031:2024 compliant" (falsely claims independent verification)  
- ✗ "ISO certified software carbon intensity" (missing "self-certified" qualifier)

### 7.4 Enforcement

- Community can report misuse via email: [sci-certification@greensoftware.foundation](mailto:sci-certification@greensoftware.foundation)  
- Misuse triggers warning and required correction (14-day timeline)  
- Persistent misuse results in certificate revocation  
- GSF may conduct periodic spot-checks of certificate holder communications

---

## 8\. Code of Conduct

### 8.1 Applicant Expectations

By submitting an application for GSF Self-Certification, applicants agree to:

**Self-Certification Responsibility**:

- Accept full responsibility for conformity claim with ISO/IEC 21031:2024  
- Maintain supporting documentation for minimum 3 years  
- Perform self-assessment of ISO/IEC 21031:2024 conformity in good faith  
- Always use "self-certified" qualifier when claiming ISO/IEC 21031:2024 conformity  
- Promptly correct any identified errors or non-conformities

**Truthfulness**:

- Provide information to the best of their knowledge and ability  
- Use reasonable data sources and methodologies consistent with ISO/IEC 21031:2024  
- Disclose known limitations and uncertainties honestly  
- Not intentionally misrepresent data, methodology, or conformity status  
- Ensure self-certification is accurate and made in good faith

**Transparency**:

- Provide sufficient detail for community to validate conformity claims  
- Disclose assumptions, exclusions, and rationale clearly  
- Identify data sources, coefficients, and calculation methods used  
- Be responsive to community questions and challenges (encouraged but not required)  
- Enable peer review through complete, clear disclosure

**Good Faith Participation**:

- Engage constructively with the review process  
- Provide requested clarifications or revisions in reasonable timeframes  
- Use the certificate appropriately per usage guidelines (Section 7\)  
- Update or renew certificates when underlying calculation changes materially  
- Respond to community challenges professionally and substantively

**Community Engagement**:

- Acknowledge that self-certification requires community validation  
- Accept that others may critique, question, or challenge disclosed calculations  
- Engage with feedback and challenges professionally and constructively  
- Support transparent, community-driven validation of ISO/IEC 21031:2024 conformity

### 8.2 Prohibited Behaviors

The following behaviors violate the code of conduct:

**False Self-Certification**:

- Self-certifying conformity with ISO/IEC 21031:2024 when calculation does not conform  
- Making self-certification in bad faith (knowing calculation is incorrect or fraudulent)  
- Failing to maintain required supporting documentation  
- Refusing to correct identified errors or non-conformities

**Misrepresentation**:

- Fabricating data or data sources  
- Intentionally omitting material information required by ISO/IEC 21031:2024  
- Misrepresenting the scope or boundary of the calculation  
- Claiming certificate represents third-party certification or independent validation  
- Removing "self-certified" qualifier from conformity claims

**System Abuse**:

- Submitting spam or frivolous applications  
- Attempting to manipulate the review process  
- Creating multiple submissions to game the system  
- Harassing review committee or GSF staff

**Badge Misuse**:

- Displaying badge without active certificate  
- Modifying badge design  
- Using certificate to make unsupported claims  
- Implying GSF validated ISO/IEC 21031:2024 conformity (GSF only verifies disclosure)  
- Claiming "ISO certified" without "self-certified" qualifier

**Community Disruption**:

- Harassing other certificate holders  
- Making bad faith challenge claims  
- Attempting to damage the reputation of the program  
- Refusing to engage with legitimate community challenges

### 8.3 Consequences of Violations

**Minor Violations** (first offense, non-malicious):

- Warning and required correction  
- Temporary certificate status change to "Under Review"  
- Opportunity to remedy within 14 days

**Serious Violations** (intentional misrepresentation, repeated minor violations):

- Certificate revocation  
- Public notation of revocation reason  
- Potential ban from future submissions (6-12 months)

**Severe Violations** (fraud, system abuse, harassment):

- Immediate certificate revocation  
- Permanent ban from program  
- Public disclosure of violation  
- Potential legal action (in cases of fraud)

### 8.4 Appeal of Conduct Violations

Applicants may appeal conduct violation determinations through the dispute resolution process (Section 9).

### 8.5 Community Challenge Process

Self-certification relies on community validation. Any party may challenge a self-certification if they believe it is non-conformant with ISO/IEC 21031:2024 or made in bad faith.

**Grounds for Challenge**:

A community challenge may be submitted if there is reasonable belief that:

- Calculation does not conform to ISO/IEC 21031:2024 requirements  
- Disclosed information contains material errors or omissions  
- Self-certification was made in bad faith (knowing non-conformity)  
- Methodology is fundamentally inappropriate for the software system  
- Data sources are unreliable or improperly applied

**Challenge Submission Process**:

1. Submit challenge to [sci-certification@greensoftware.foundation](mailto:sci-certification@greensoftware.foundation)  
2. Include:  
   - Certificate ID being challenged  
   - Specific concerns with detailed rationale  
   - Supporting evidence or technical analysis  
   - Challenger contact information (may be kept confidential if requested)

**Challenge Review Process**:

1. **Initial Review** (5 business days):  
     
   - GSF reviews challenge for legitimacy and specificity  
   - Frivolous challenges dismissed immediately  
   - Certificate holder notified of valid challenges

2. **Response Period** (30 days):  
     
   - Certificate holder has 30 days to respond to challenge  
   - May provide: clarifications, corrections, additional documentation, or rebut challenge  
   - Certificate status changed to "Under Community Review" during this period


3. **GSF Evaluation** (15 business days):  
     
   - GSF review committee evaluates challenge and response  
   - May request additional information from either party  
   - Makes determination on challenge validity

**Challenge Outcomes**:

**Unfounded Challenge**:

- Challenge dismissed  
- Certificate status returns to "Active"  
- No notation on certificate

**Minor Issues Identified**:

- Certificate holder corrects disclosure or clarifies information  
- Certificate remains valid with updated information  
- Public notation: "Updated in response to community feedback"

**Material Non-Conformity**:

- Certificate revoked if non-conformity with ISO/IEC 21031:2024 confirmed  
- Public notice issued explaining reason  
- Certificate holder may resubmit after corrections

**Bad Faith Self-Certification**:

- Certificate immediately revoked  
- Public disclosure of false self-certification  
- Organization barred from program for 12-24 months  
- Potential referral for legal action

**Challenger Protections**:

- Challengers may request confidentiality (identity not disclosed to certificate holder)  
- GSF protects against retaliatory action  
- Bad faith challenges result in challenger being barred from future challenges

**Transparency**:

- Upheld challenges and their resolutions are publicly documented  
- Enables community learning and program improvement  
- Protects program integrity

---

## 9\. Dispute Resolution Process

### 9.1 Types of Disputes

The dispute resolution process covers:

**Applicant-Initiated Disputes**:

- Appeal of rejection or request for revision  
- Appeal of revocation decision  
- Appeal of code of conduct violation determination  
- Disagreement with review committee interpretation

**Third-Party Disputes**:

- Community challenges to issued certificates  
- Claims of misrepresentation or badge misuse  
- Concerns about certificate validity

### 9.2 Dispute Resolution Procedure

#### Phase 1: Informal Resolution (Days 1-10)

**For Applicant Disputes**:

1. Applicant submits dispute via portal with detailed rationale  
2. GSF staff reviews and attempts informal resolution  
3. If resolved: Decision documented, case closed  
4. If not resolved: Escalate to Phase 2

**For Third-Party Disputes**:

1. Complaint submitted via portal with evidence  
2. GSF staff conducts preliminary review  
3. Certificate holder notified and invited to respond  
4. If resolved: Decision documented, case closed  
5. If not resolved: Escalate to Phase 2

#### Phase 2: Formal Review (Days 11-30)

**Review Panel**: 3-person panel from review committee, excluding anyone involved in original decision

**Process**:

1. Panel receives dispute documentation and all relevant materials  
2. Written statements from disputing parties (max 5 pages each)  
3. Optional: Panel may request additional information or clarification  
4. Panel deliberates and issues written decision  
5. Decision rationale published (anonymized if applicant requests)

**Decision Options**:

- Uphold original decision  
- Reverse original decision (issue/reinstate certificate)  
- Modify decision (e.g., approve with annotations)  
- Request additional information and defer decision

#### Phase 3: Final Appeal (Days 31-60)

**Final Appeal Authority**: GSF Standards Working Group Chair or designated GSF leadership

**Grounds for Final Appeal** (limited):

- Procedural errors in review process  
- New evidence not available during formal review  
- Review panel exceeded authority or acted in bad faith

**Process**:

1. Written appeal with specific grounds (max 3 pages)  
2. Leadership review of process and decision  
3. Final decision issued (not subject to further appeal)

**Final Decision Options**:

- Affirm formal review decision  
- Remand to new review panel (if procedural errors)  
- Exceptional: Override decision (rare, requires documented rationale)

### 9.3 Timelines and Service Levels

- Informal resolution target: 10 business days  
- Formal review target: 20 business days from Phase 2 initiation  
- Final appeal target: 30 business days from appeal filing

**Extensions**: Complex cases may extend timelines by up to 50% with notification to parties

### 9.4 Dispute Transparency

- Dispute outcomes are logged (anonymized)  
- Significant precedent-setting decisions published as guidance  
- Quarterly dispute resolution reports published with aggregate statistics  
- Individual case details kept confidential unless parties agree to publication

### 9.5 No Jurisdiction for Content Accuracy

**Important Limitation**: The dispute resolution process does NOT adjudicate:

- The accuracy of disclosed calculations  
- The quality of methodologies chosen  
- Technical debates about appropriate approaches  
- Comparative claims between different calculations

These are matters for community, peer review, and market evaluation. The dispute process only addresses:

- Whether disclosure requirements were met  
- Whether code of conduct was followed  
- Whether procedures were properly applied

---

## 10\. Certificate Revocation

### 10.1 Grounds for Revocation

Certificates may be revoked for:

**Mandatory Revocation** (automatic):

- Material misrepresentation or fabrication discovered post-issuance  
- Serious code of conduct violations (fraud, system abuse)  
- Applicant request (self-revocation)

**Discretionary Revocation** (review committee decision):

- Badge or branding guideline violations (persistent after warning)  
- Failure to correct material omissions after discovery  
- Unresponsive to dispute resolution process

**No Revocation For**:

- Errors discovered in calculations (certificate represents disclosure, not accuracy)  
- Community disagreement with methodology (debate is expected and encouraged)  
- Changes in SCI specification (old certificates remain valid as historical records)  
- Expiration (handled through validity period, not revocation)


### 10.2 Effects of Revocation

**Immediate**:

- Certificate status displays "Revoked"  
- Badge use is prohibited  
- Certificate URL remains accessible (maintains public record)

**Public Record**:

- Revocation reason displayed (general terms: "Code of Conduct Violation", "Misrepresentation", "Applicant Request")  
- Detailed rationale available to certificate holder  
- Historical record preserved for transparency

**Future Submissions**:

- Applicant may resubmit after addressing revocation cause  
- Serious violations may result in temporary or permanent ban  
- Pattern of revocations may trigger enhanced review for future submissions

---

## 11\. Success Metrics

**Adoption**:

- 20-50 submissions in Year 1  
- 10+ unique organizations  
- 3+ software categories represented

**Operations**:

- Average review time: \<15 business days  
- Approval rate: 70-90% (most submissions approved or approved after revisions)  
- Revocation rate: \<5%

**Quality**:

- Disclosure completeness scores improve over time  
- Community engagement (views of public disclosures)  
- No major badge misuse incidents

\---


## References and Sources

[^1]: UKAS Fee Schedules. UK Accreditation Service (UKAS) publishes fee ranges for initial accreditation assessments (£9,583-£34,614+) and annual surveillance assessments (£9,583+) depending on scope and complexity. See [UKAS Fees and Charges](https://www.ukas.com/services/accreditation-fees/). USD conversions based on approximate GBP/USD exchange rate of ~1.35 (2025-2026).

[^2]: Third-party ISO certification costs vary widely. For management system certifications (e.g., ISO 9001, ISO 14001, ISO 27001), costs for small-to-medium organizations typically range from $5,000-$15,000+ for initial certification, depending on scope, organization size, and certification body. Sources: industry surveys and certification body published rates.

[^3]: OpenChain Project. Linux Foundation collaborative project operating self-certification programs for ISO/IEC 5230:2020 (open source license compliance) and ISO/IEC 18974:2023 (open source security assurance). Over 300 organizations publicly listed in the Community of Conformance. See [OpenChain Self-Certification](https://www.openchainproject.org/checklist-iso-5230-2020) and [Community of Conformance](https://www.openchainproject.org/community-of-conformance).

---
