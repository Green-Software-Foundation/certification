# GSF Certificate of Disclosure - Badge Usage Guidelines

## Version 1.0 - Branding and Display Standards

---

## Table of Contents

1. [Overview](#overview)
2. [Badge Specifications](#badge-specifications)
3. [Permitted Uses](#permitted-uses)
4. [Required Context](#required-context)
5. [Prohibited Uses](#prohibited-uses)
6. [Display Examples](#display-examples)
7. [Digital Asset Library](#digital-asset-library)
8. [Compliance and Enforcement](#compliance-and-enforcement)

---

## Overview

The GSF Certificate of Disclosure badge is a visual indicator that an organization has publicly disclosed their Software Carbon Intensity (SCI) calculation through the Green Software Foundation's certification program.

### Badge Purpose

- **Recognition**: Acknowledge organizations that commit to transparency
- **Trust Signal**: Indicate that disclosure has been validated for completeness
- **Call-to-Action**: Link viewers to the full public disclosure

### Key Principle

**The badge MUST always link directly to the certificate URL.** The badge is not a standalone credential but a gateway to full transparency.

---

## Badge Specifications

### Design Elements

#### Standard Badge

```
┌─────────────────────────────────┐
│                                 │
│        [GSF Leaf Logo]          │
│                                 │
│    Certificate of Disclosure    │
│              SCI                │
│             2026                │
│                                 │
│  greensoftware.foundation       │
│                                 │
└─────────────────────────────────┘
```

**Components**:
- GSF leaf logo (top center)
- "Certificate of Disclosure" text (bold)
- "SCI" text (medium weight)
- Year of issuance (e.g., "2026")
- Domain reference (small text)

#### Color Specifications

**Primary Badge (Light Background)**:
- Background: White (#FFFFFF)
- Logo: GSF Green (#00C853)
- Primary Text: Dark Gray (#333333)
- Secondary Text: Medium Gray (#666666)
- Border: Light Gray (#E0E0E0)

**Dark Mode Badge (Dark Background)**:
- Background: Dark Gray (#1E1E1E)
- Logo: GSF Green (#00C853)
- Primary Text: White (#FFFFFF)
- Secondary Text: Light Gray (#CCCCCC)
- Border: Medium Gray (#444444)

**Active Status Indicator**:
- Green dot or border accent for active certificates
- No status indicator for expired/revoked (badge should not be displayed)

### Technical Specifications

#### File Formats

- **SVG** (primary): Scalable vector format for all uses
- **PNG**: Raster format for contexts where SVG not supported
  - 500x500px (standard)
  - 250x250px (small)
  - 1000x1000px (large/print)
- **PDF**: For print materials

#### Sizing Guidelines

| Context | Recommended Size | Minimum Size |
|---------|------------------|--------------|
| Website Header | 80-120px height | 60px height |
| Website Footer | 60-80px height | 40px height |
| Documentation | 100-150px height | 60px height |
| Email Signature | 60-80px height | 40px height |
| Print Materials | 1-2 inches | 0.75 inches |
| Social Media | 500x500px | 250x250px |

#### Spacing and Clearance

- **Minimum Clear Space**: 10% of badge height on all sides
- **Do Not**: Place badge immediately adjacent to other logos or text
- **Do**: Maintain visual breathing room

### Accessibility Requirements

#### Alt Text

Required alt text for badge image:
```html
<img src="gsf-disclosure-badge.svg"
     alt="GSF Certificate of Disclosure for SCI calculation - Click to view full disclosure">
```

#### Color Contrast

- Badge must meet WCAG 2.1 AA contrast requirements
- Light mode: Minimum 4.5:1 contrast ratio
- Dark mode: Minimum 4.5:1 contrast ratio
- Tested against various backgrounds

#### Screen Reader Compatibility

- Badge link must be keyboard accessible
- Link must have descriptive text (not just "click here")

---

## Permitted Uses

### 1. Certificate Link Display

**Websites and Documentation**

Organizations MAY display the badge on:
- Official company website
- Product documentation
- Developer portals
- Sustainability/ESG pages
- GitHub README files
- Technical blog posts

**Requirements**:
- Badge MUST link to certificate URL
- Certificate MUST be active (not expired or revoked)
- Context MUST clarify nature of certification

**Example HTML**:
```html
<a href="https://certificates.greensoftware.foundation/GSF-SCI-2026-00042"
   target="_blank"
   rel="noopener">
  <img src="gsf-disclosure-badge-light.svg"
       alt="GSF Certificate of Disclosure - View our SCI calculation"
       height="80">
</a>
```

**Example Markdown**:
```markdown
[![GSF Certificate of Disclosure](gsf-disclosure-badge-light.svg)](https://certificates.greensoftware.foundation/GSF-SCI-2026-00042)
```

### 2. Marketing and Communications

Organizations MAY reference the certificate in:
- Press releases
- Marketing materials
- Sales presentations
- Sustainability reports
- RFP responses
- Customer communications

**Requirements**:
- MUST include required context (see Section 4)
- MUST link to or reference full certificate URL
- MAY NOT imply accuracy validation or compliance certification

**Approved Language Examples**:

✅ **Correct**:
> "Our SCI calculation has been disclosed through the GSF Certificate of Disclosure program, demonstrating our commitment to transparency in software carbon measurement. [View Certificate](URL)"

✅ **Correct**:
> "We've achieved a GSF Certificate of Disclosure for our API service, publicly sharing our SCI calculation of 349.63 gCO2eq per 1,000 requests. [Full Disclosure](URL)"

✅ **Correct**:
> "Transparent software carbon reporting: Our SCI calculation is publicly disclosed and validated for completeness by the Green Software Foundation. [Certificate](URL)"

### 3. Social Media

Organizations MAY share the certificate on:
- LinkedIn
- Twitter/X
- Company blogs
- Technical forums

**Requirements**:
- Include link to certificate in post
- Use approved language (see above)
- Tag @greensoftware (optional but encouraged)

**Example Post**:
> "We're proud to share our Software Carbon Intensity calculation through @greensoftware's Certificate of Disclosure program. Transparency is key to reducing software's carbon footprint. 🌱 [View our full disclosure] (URL) #GreenSoftware #SustainableTech"

### 4. Email Signatures

Organizations MAY include badge in email signatures:

**Requirements**:
- Small size (40-60px height)
- Link to certificate
- Minimal text or icon only

**Example**:
```
Jane Smith | Senior Engineer
Acme Corporation
jane@acme.com | acme.com
[Badge Icon - 50px] GSF Certified Disclosure
```

### 5. Conference Presentations

Organizations MAY include badge in:
- Slide decks
- Posters
- Conference materials

**Requirements**:
- Include certificate URL on same slide or in references
- Provide context about disclosure vs. compliance

### 6. Product Packaging (Physical/Digital)

Organizations MAY include badge on:
- Software product pages
- SaaS dashboards
- API documentation
- Mobile app "About" pages

**Requirements**:
- Link to certificate (digital)
- Include certificate URL (physical)
- Provide clear context

---

## Required Context

### Disclosure vs. Compliance Statement

When displaying the badge or referencing the certificate, organizations MUST clarify that this is a Certificate of Disclosure, not compliance or accuracy validation.

#### Minimum Required Statement

At least one of the following MUST accompany badge display:

**Option 1 (Full Statement)**:
> "This certificate verifies disclosure of our SCI calculation, not accuracy or compliance. The Green Software Foundation validates completeness of disclosure, enabling public review."

**Option 2 (Concise)**:
> "Certificate of Disclosure - validates transparency, not accuracy. [Full disclosure](URL)"

**Option 3 (Footnote)**:
> "* GSF Certificate of Disclosure certifies public disclosure of SCI calculation with required information for community review. Does not certify accuracy."

### Where to Include Context

**On Websites**:
- Adjacent to badge (preferred)
- In hover tooltip
- In FAQ or sustainability page section
- In footer disclaimer (minimum)

**In Marketing Materials**:
- In body text near badge
- In footnote on same page
- In "About This Certification" section

**In Presentations**:
- On same slide as badge
- In speaker notes
- In Q&A or references slide

---

## Prohibited Uses

### 1. Standalone Use Without Link

❌ **PROHIBITED**: Displaying badge without hyperlink to certificate

**Example of Violation**:
```html
<!-- NO LINK - PROHIBITED -->
<img src="gsf-badge.svg" alt="GSF Certified">
```

**Why**: The badge is not a standalone credential. It must enable verification.

**Consequence**: Warning, required correction, potential certificate revocation if persistent.

---

### 2. Use with Expired or Revoked Certificates

❌ **PROHIBITED**: Displaying badge when certificate is expired or revoked

**Certificate Status Check**:
- Visit certificate URL to confirm "Active" status
- Check validity date (certificates are valid for 1 year)
- Remove badge immediately upon expiration

**Exception**: Historical references are permitted if clearly marked:
> "Achieved GSF Certificate of Disclosure in 2025 (now expired). Updated calculation in progress."

**Consequence**: Immediate takedown required, potential future application restrictions.

---

### 3. Modified Badge Design

❌ **PROHIBITED**: Altering badge colors, layout, text, or logo

**Examples of Violations**:
- Changing colors to match brand
- Adding additional text or graphics
- Stretching or distorting badge
- Removing or replacing GSF logo
- Changing year to different year

**Consequence**: Warning and required correction.

---

### 4. Implying Accuracy Validation

❌ **PROHIBITED**: Using language that implies GSF certifies accuracy or quality

**Prohibited Language**:
- ❌ "GSF-certified accurate SCI calculation"
- ❌ "Validated by Green Software Foundation"
- ❌ "GSF-approved carbon footprint"
- ❌ "Certified green software"
- ❌ "GSF endorses our methodology"

**Correct Alternatives**:
- ✅ "GSF Certificate of Disclosure (transparency, not accuracy)"
- ✅ "Publicly disclosed SCI calculation through GSF"
- ✅ "Transparent carbon reporting via GSF certification"

**Consequence**: Warning and required correction. Persistent misrepresentation may result in revocation.

---

### 5. Comparative Claims

❌ **PROHIBITED**: Using certificate to make comparative superiority claims

**Prohibited Claims**:
- ❌ "GSF-certified lower carbon than [competitor]"
- ❌ "Only [company] has GSF certification in our industry"
- ❌ "Best-in-class carbon performance (GSF certified)"
- ❌ "#1 green software (GSF certificate)"

**Why**: Certificate validates disclosure, not relative performance.

**Consequence**: Immediate takedown required, potential certificate revocation.

---

### 6. Use for Other Products/Services

❌ **PROHIBITED**: Using certificate badge for products/services not covered by the certificate

**Example**: Certificate is for "API Service v2.1" but badge is displayed for "Mobile App v1.0"

**Solution**: Obtain separate certificate for each product/service.

**Consequence**: Warning and required correction.

---

### 7. Separate GSF Logo Use

❌ **PROHIBITED**: Using GSF logo separately from certificate context

**Example**: Using GSF leaf logo on marketing materials without certificate badge or reference

**Why**: GSF logo is trademarked. Only use the official certificate badge.

**Exception**: Membership badges (separate from certification program).

**Consequence**: Trademark violation, legal action possible.

---

## Display Examples

### Example 1: Website Footer (Correct)

```html
<footer>
  <div class="certifications">
    <p>Our Certifications</p>
    <a href="https://certificates.greensoftware.foundation/GSF-SCI-2026-00042"
       target="_blank"
       rel="noopener"
       title="View our GSF Certificate of Disclosure">
      <img src="/images/gsf-disclosure-badge-light.svg"
           alt="GSF Certificate of Disclosure for SCI calculation"
           height="80">
    </a>
    <p class="disclaimer">
      Certificate of Disclosure verifies transparent reporting.
      <a href="https://certificates.greensoftware.foundation/GSF-SCI-2026-00042">
        View full disclosure
      </a>
    </p>
  </div>
</footer>
```

**Why This Works**:
- Badge links to certificate ✅
- Disclaimer provides context ✅
- Alt text is descriptive ✅

---

### Example 2: Sustainability Report (Correct)

**Page Layout**:
```
┌────────────────────────────────────────┐
│  Our Carbon Measurement Journey        │
│                                        │
│  In 2026, we achieved a GSF           │
│  Certificate of Disclosure for our    │
│  API service, demonstrating our       │
│  commitment to transparency in         │
│  software carbon measurement.          │
│                                        │
│  [Badge Image]  SCI Score: 349.63     │
│  (Links to      gCO2eq per 1,000      │
│   certificate)  API requests          │
│                                        │
│  This certificate validates that we   │
│  have publicly disclosed our          │
│  calculation with all required        │
│  information for community review.    │
│  It does not certify accuracy.        │
│                                        │
│  → View Full Disclosure (URL)         │
└────────────────────────────────────────┘
```

**Why This Works**:
- Context explains disclosure nature ✅
- Badge is linked ✅
- URL provided multiple times ✅
- No accuracy claims made ✅

---

### Example 3: GitHub README (Correct)

```markdown
# Acme API Service

High-performance REST API for e-commerce platforms.

## Sustainability

We're committed to measuring and reducing our software's carbon intensity.

[![GSF Certificate of Disclosure](https://img.shields.io/badge/GSF-Certificate%20of%20Disclosure-00C853?style=for-the-badge&logo=data:image/svg+xml;base64,...)](https://certificates.greensoftware.foundation/GSF-SCI-2026-00042)

**SCI Score**: 349.63 gCO2eq per 1,000 API requests

Our SCI calculation has been publicly disclosed through the Green Software
Foundation's Certificate of Disclosure program. This validates the completeness
and transparency of our disclosure, not the accuracy of the calculation.

[View Full Disclosure →](https://certificates.greensoftware.foundation/GSF-SCI-2026-00042)
```

**Why This Works**:
- Badge is markdown link to certificate ✅
- Context explains disclosure ✅
- No accuracy claims ✅
- Full disclosure link prominent ✅

---

### Example 4: Email Signature (Correct - Minimal)

```
Jane Smith | Senior Engineer
Acme Corporation
jane@acme.com

[🌱 GSF Disclosure](https://certificates.greensoftware.foundation/GSF-SCI-2026-00042)
```

**Why This Works**:
- Minimal but linked ✅
- Uses icon instead of full badge (space-constrained) ✅
- Direct link to certificate ✅

---

### Example 5: Website (Incorrect - Common Mistakes)

❌ **MISTAKE 1: No Link**
```html
<img src="gsf-badge.svg" alt="We're certified!">
```
**Problem**: Badge not clickable, no way to verify.

❌ **MISTAKE 2: Misleading Language**
```html
<div class="certifications">
  <h3>GSF-Certified Green Software</h3>
  <img src="gsf-badge.svg">
</div>
```
**Problems**:
- Implies accuracy validation
- No link to certificate
- Misleading "certified green" claim

❌ **MISTAKE 3: Modified Badge**
```html
<img src="gsf-badge-BLUE.svg" alt="GSF Certified" height="80">
```
**Problem**: Badge colors changed to match brand (prohibited).

---

### Example 6: Conference Slide (Correct)

**Slide Layout**:
```
┌────────────────────────────────────────┐
│  Our Carbon Measurement Results        │
│                                        │
│  [Badge]          SCI Score            │
│                   349.63 gCO2eq        │
│                   per 1,000 requests   │
│                                        │
│  Full Disclosure:                      │
│  certificates.greensoftware.foundation │
│  /GSF-SCI-2026-00042                  │
│                                        │
│  * Certificate validates disclosure    │
│    completeness for community review   │
└────────────────────────────────────────┘
```

**Why This Works**:
- Badge visible ✅
- URL printed (for non-clickable context) ✅
- Disclaimer footnote ✅

---

## Digital Asset Library

### Downloadable Assets

Organizations with active certificates can download badge assets from:
**https://certification.greensoftware.foundation/badges**

**Available Files**:

1. **Badge - Light Mode**
   - `gsf-disclosure-badge-light.svg` (primary)
   - `gsf-disclosure-badge-light-500px.png`
   - `gsf-disclosure-badge-light-250px.png`
   - `gsf-disclosure-badge-light-1000px.png`

2. **Badge - Dark Mode**
   - `gsf-disclosure-badge-dark.svg` (primary)
   - `gsf-disclosure-badge-dark-500px.png`
   - `gsf-disclosure-badge-dark-250px.png`
   - `gsf-disclosure-badge-dark-1000px.png`

3. **Badge - Print**
   - `gsf-disclosure-badge-print.pdf` (CMYK)

4. **Icon/Favicon**
   - `gsf-disclosure-icon.svg` (leaf logo only)
   - `gsf-disclosure-icon-32px.png`
   - `gsf-disclosure-icon-64px.png`

### Asset Customization

**Allowed**:
- Resizing proportionally
- Format conversion (SVG to PNG, etc.)
- Adding to badge library/collection

**Not Allowed**:
- Color changes
- Layout modifications
- Text changes
- Logo replacement

### CDN Hosting

GSF provides CDN-hosted badge images:
```html
<img src="https://cdn.greensoftware.foundation/badges/disclosure-light.svg"
     alt="GSF Certificate of Disclosure">
```

**Benefits**:
- Always up-to-date design
- Fast global delivery
- Automatic format optimization

**Note**: You must still link to your specific certificate URL.

---

## Compliance and Enforcement

### Monitoring

GSF monitors badge usage through:
- Periodic web crawling of known certificate holders
- Community reports via certification portal
- Social media monitoring (sampling)
- Quarterly compliance audits (random sample)

### Reporting Misuse

To report badge misuse:
1. Visit: https://certification.greensoftware.foundation/report-misuse
2. Provide:
   - URL or location of misuse
   - Certificate ID (if known)
   - Description of violation
   - Screenshots/evidence

**Community Reporting**: Anyone can report suspected misuse.

### Violation Response Process

#### Minor Violations (First Offense, Non-Malicious)

**Examples**:
- Badge not linked
- Missing context disclaimer
- Badge displayed for recently expired certificate

**Response**:
1. Email notification to certificate holder
2. 14-day correction period
3. Certificate status: "Under Review" during correction period
4. Restored upon correction

#### Serious Violations (Repeated or Intentional)

**Examples**:
- Persistent badge misuse after warning
- Misleading accuracy claims after warning
- Badge displayed for revoked certificate
- Intentional misrepresentation

**Response**:
1. Certificate revocation
2. Public notation of revocation reason
3. 6-12 month ban from reapplication

#### Severe Violations (Fraud or Trademark Abuse)

**Examples**:
- Fabricating certificate URL
- Using badge without any certificate
- Unauthorized use of GSF logo/brand
- Fraudulent comparative claims

**Response**:
1. Immediate certificate revocation
2. Permanent ban from program
3. Public disclosure of violation
4. Potential legal action for trademark infringement

### Appeals

Badge misuse determinations can be appealed through the dispute resolution process (see main proposal document, Section 9).

---

## Frequently Asked Questions

### Q: Can I use the badge if my certificate expired?

**A**: No. Remove the badge immediately upon expiration. You may renew your certificate and redisplay the badge with the new certificate.

**Exception**: You may make historical references if clearly labeled as expired:
> "Achieved GSF Certificate of Disclosure in 2025 (expired). Updated calculation in progress."

---

### Q: Can I create a custom badge that matches my brand?

**A**: No. You must use the official GSF badge assets without modification. You may choose between light and dark modes, but colors and layout cannot be changed.

---

### Q: Can I display the badge in multiple places?

**A**: Yes. You may display the badge on your website, documentation, presentations, email signatures, etc., as long as all instances link to the certificate and include required context.

---

### Q: What if my certificate URL is very long?

**A**: Use a URL shortener for print materials, but ensure it redirects to the official certificate URL. For digital materials, always use the full certificate URL.

---

### Q: Can I say "GSF Certified"?

**A**: Only with proper context. Acceptable: "GSF Certificate of Disclosure (transparency, not accuracy)." Not acceptable: "GSF Certified Accurate" or "GSF Certified Green Software."

---

### Q: Can I use the badge in advertising?

**A**: Yes, in marketing materials and advertisements, provided you include the required context statement and link to the certificate. Do not make misleading claims.

---

### Q: What if I have multiple certificates for different products?

**A**: Display each badge with a link to its specific certificate. Clearly label which product each certificate applies to.

---

### Q: Can I use the badge in my app or SaaS dashboard?

**A**: Yes. Include the badge with a hyperlink to the certificate (for web apps) or a "View Certificate" button that opens the URL (for native apps).

---

### Q: How do I update the badge year when I renew?

**A**: Download the new badge assets from the certification portal after renewal. The badge will automatically reflect the new certificate year.

---

### Q: Can partners or customers display my badge?

**A**: Partners/customers may reference your certificate in case studies or testimonials with proper attribution, but they should link to your certificate rather than displaying the badge as if it were theirs.

---

## Appendix: Badge Usage Checklist

Use this checklist before displaying the badge:

- [ ] Badge links to certificate URL
- [ ] Certificate is active (not expired or revoked)
- [ ] Required context statement is visible
- [ ] No misleading accuracy or compliance claims
- [ ] Badge design is unmodified (official asset)
- [ ] Badge size meets minimum requirements
- [ ] Alt text is descriptive for accessibility
- [ ] Link is keyboard-accessible
- [ ] Badge is used only for covered product/service
- [ ] No comparative claims made

**If all items are checked**, you're good to display the badge! ✅

---

## Contact and Support

**Questions about badge usage**:
- Email: certification@greensoftware.foundation
- Documentation: https://certification.greensoftware.foundation/docs/badge-guidelines

**Report badge misuse**:
- Form: https://certification.greensoftware.foundation/report-misuse

**Download badge assets**:
- Portal: https://certification.greensoftware.foundation/badges

---

**Document Version**: 1.0
**Last Updated**: 2026-01
**Maintained By**: GSF Certification Working Group
**License**: © Green Software Foundation. Badge assets provided under certificate terms.
