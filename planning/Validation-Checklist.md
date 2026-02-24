# GSF Certificate of Disclosure - Validation Checklist

## Version 1.0 - For Automated and Manual Review

---

## Table of Contents

1. [Overview](#overview)
2. [Automated Validation Checks](#automated-validation-checks)
3. [Manual Review Checklist](#manual-review-checklist)
4. [Quality Assessment Rubric](#quality-assessment-rubric)
5. [Common Issues and Resolutions](#common-issues-and-resolutions)

---

## Overview

This checklist is used by both the automated validation system and the manual review committee to ensure submissions meet the GSF Certificate of Disclosure requirements.

### Validation Levels

1. **Structural Validation** (Automated, Blocking)
   - Schema compliance, syntax, data types

2. **Completeness Validation** (Automated, Blocking)
   - All mandatory fields present

3. **Logical Validation** (Automated, Blocking)
   - Internal consistency, arithmetic correctness

4. **Quality Checks** (Automated, Non-Blocking)
   - Flags for manual review

5. **Manual Review** (Committee, As Needed)
   - Disclosure sufficiency, specification alignment

### Validation Outcomes

- ✅ **Pass**: All validations pass → Auto-approve
- ⚠️ **Warning**: Quality flags raised → Manual review queue
- ❌ **Fail**: Validation errors → Rejection with feedback

---

## Automated Validation Checks

### 1. Structural Validation

#### 1.1 Schema Compliance

- [ ] **YAML/JSON Syntax**
  - Valid YAML or JSON format
  - No parsing errors
  - Proper indentation (YAML)

- [ ] **Required Top-Level Fields**
  - `name` present and valid
  - `description` present and valid
  - `tags` present with required subfields
  - `submission` present with required subfields
  - `boundary` present with required subfields
  - `functional_unit` present with required subfields
  - `calculation` present with required subfields
  - `methodology` present with required subfields

#### 1.2 Data Type Validation

- [ ] **String Fields**
  - All string fields are properly quoted/formatted
  - Minimum length requirements met
  - Special characters properly escaped

- [ ] **Numeric Fields**
  - All numeric fields contain valid numbers
  - No strings in numeric fields
  - No infinity or NaN values

- [ ] **Array Fields**
  - Arrays contain appropriate objects/values
  - No empty arrays where content required

- [ ] **Object Fields**
  - Nested objects have required properties
  - No missing required subfields

#### 1.3 Format Validation

- [ ] **Dates**
  - ISO 8601 format (YYYY-MM-DD or full timestamp)
  - Valid calendar dates
  - Example: `"2025-01-01"` ✅, `"01/01/2025"` ❌

- [ ] **URLs**
  - Valid URL format
  - Proper protocol (https:// preferred)
  - Example: `"https://example.com"` ✅, `"example.com"` ❌

- [ ] **Email Addresses**
  - Valid email format (RFC 5322)
  - Example: `"user@example.com"` ✅, `"user@"` ❌

- [ ] **Name Field**
  - Kebab-case format
  - Alphanumeric with hyphens only
  - 3-100 characters
  - Example: `"my-api-service-sci"` ✅, `"My API Service"` ❌

---

### 2. Completeness Validation

#### 2.1 Score Information

- [ ] **Score Value**
  - Numeric value present
  - Positive number (> 0)
  - Reasonable magnitude (not excessively large/small)

- [ ] **Score Unit**
  - Unit string present
  - Includes functional unit reference
  - Example: `"gCO2eq per 1,000 API requests"` ✅

- [ ] **Measurement Period**
  - Start date present
  - End date present
  - Duration calculated and matches dates

#### 2.2 Submission Metadata

- [ ] **Applicant Information**
  - Organization name present (min 1 char)
  - Contact name present (min 1 char)
  - Contact email present and valid format
  - Website URL valid if provided

- [ ] **Software Information**
  - Software name present (min 1 char)
  - Version identifier present
  - Description present (min 10 chars)

#### 2.3 Software Boundary

- [ ] **Included Components**
  - At least one component included
  - Each component has:
    - Component name/identifier
    - Description
    - Justification for inclusion

- [ ] **Excluded Components**
  - Each excluded component has:
    - Component name/identifier
    - Description
    - **Rationale for exclusion** (mandatory)

- [ ] **Shared Infrastructure (if applicable)**
  - Allocation method described
  - Allocation percentage or ratio provided

#### 2.4 Functional Unit

- [ ] **Unit Definition**
  - Functional unit clearly defined
  - Unit symbol provided
  - Scales linearly with software usage

- [ ] **Rationale**
  - Explanation of why this unit was chosen
  - Minimum 10 characters

- [ ] **Measurement Method**
  - Clear description of how units are counted
  - Data source identified (logs, telemetry, etc.)
  - Minimum 10 characters

- [ ] **Total Units**
  - Total number of units in measurement period
  - Positive number
  - Used in final SCI calculation

#### 2.5 Energy (E)

- [ ] **Energy Value**
  - Numeric value present
  - Positive (> 0)
  - Unit specified (kWh or convertible to kWh)

- [ ] **Methodology**
  - Description of how energy was measured or calculated
  - Minimum 20 characters

- [ ] **PUE (if applicable)**
  - Value provided if data center infrastructure
  - PUE ≥ 1.0
  - Typical range: 1.1 - 1.5

- [ ] **Components**
  - At least one energy component listed
  - Each component has:
    - Name
    - Energy value (kWh)
    - Calculation or measurement method
    - Data source

- [ ] **Data Sources**
  - At least one data source identified
  - Each source has:
    - Name
    - Type (measurement, calculation, coefficient)
    - Description

#### 2.6 Carbon Intensity (I)

- [ ] **Carbon Intensity Value**
  - Numeric value present
  - Positive (> 0)
  - Unit specified (gCO2eq/kWh)
  - Reasonable range: 0 < I < 2000 (typical)

- [ ] **Location**
  - Geographic location(s) specified
  - Region, country, or cloud region identified

- [ ] **Approach**
  - Location-based or market-based specified
  - Location-based recommended for transparency

- [ ] **Data Sources**
  - At least one data source identified
  - Source includes:
    - Name
    - Type (grid-data)
    - Year of data
  - Year within last 5 years preferred

- [ ] **Regional Breakdown (if multi-region)**
  - Each region has:
    - Region identifier
    - Percentage allocation
    - Carbon intensity value
    - Data source
  - Percentages sum to 100%

#### 2.7 Embodied Emissions (M)

- [ ] **Embodied Emissions Value**
  - Numeric value present
  - Non-negative (≥ 0)
  - Unit specified (gCO2eq)

- [ ] **Methodology**
  - Description of calculation approach
  - Formula or methodology explained
  - Allocation method described (time-share, resource-share)
  - Minimum 20 characters

- [ ] **Hardware Components**
  - At least one hardware component listed (if M > 0)
  - Each component has:
    - Name/type
    - Total embodied emissions (TE)
    - Expected lifespan (EL)
    - Time reserved (TiR)
    - Resource share (RR/ToR) if applicable
    - Allocated emissions
    - Calculation formula
    - Data source

- [ ] **Data Sources**
  - At least one data source identified
  - Each source has:
    - Name
    - Type (database, LCA, manufacturer)
    - Description

- [ ] **Zero Embodied Emissions Justification**
  - If M = 0, explicit justification required
  - Example: "Pure SaaS with no controlled hardware"

#### 2.8 Methodology Documentation

- [ ] **Approach**
  - Methodology type specified
  - Values: "measurement", "calculation", "hybrid"

- [ ] **Methodology Details**
  - Measurement details (if measurement used)
  - Calculation details (if calculation used)
  - Minimum 20 characters each

- [ ] **Assumptions**
  - At least one key assumption documented
  - Each assumption has:
    - Assumption statement
    - Justification
    - Impact level (low/medium/high)

- [ ] **Limitations**
  - At least one limitation acknowledged
  - Each limitation has:
    - Limitation description
    - Severity (low/medium/high)
    - Mitigation (optional but recommended)

- [ ] **Data Sources**
  - All data sources consolidated and listed
  - Each source has:
    - Name
    - Type
    - Description
    - URL (optional but recommended)

---

### 3. Logical Validation

#### 3.1 Calculation Consistency

- [ ] **Operational Emissions (O = E × I)**
  - Calculated: O_calc = E × I
  - Tolerance: |O_stated - O_calc| / O_calc ≤ 1%
  - Example: If E=46.01 kWh, I=340 gCO2eq/kWh → O=15,643.4 g

- [ ] **SCI Formula (SCI = (O + M) / R)**
  - Calculated: SCI_calc = (O + M) / R
  - Tolerance: |SCI_stated - SCI_calc| / SCI_calc ≤ 1%
  - Units must be consistent

- [ ] **Energy Component Sum**
  - Sum of component energies × PUE = total energy
  - Tolerance: |E_stated - E_components| / E_stated ≤ 1%
  - Example: If components sum to 38.34 kWh, PUE=1.2 → Total = 46.01 kWh

- [ ] **Embodied Emissions Component Sum**
  - Sum of allocated component emissions = total M
  - Tolerance: |M_stated - M_components| / M_stated ≤ 1%

#### 3.2 Date Logic

- [ ] **Measurement Period**
  - start_date < end_date
  - end_date ≤ submission_date
  - Measurement period is in the past (not future)

- [ ] **Duration Consistency**
  - duration_hours matches (end_date - start_date)
  - Tolerance: ±1 hour for rounding

- [ ] **Baseline Dates (if applicable)**
  - baseline_measurement_date < new_measurement_date
  - Baseline is from the past

#### 3.3 Numeric Reasonableness

- [ ] **Carbon Intensity Range**
  - 0 < I < 2000 gCO2eq/kWh (typical range)
  - Flag if I > 1500 (coal-heavy grids)
  - Flag if I < 50 (suspicious, unless 100% renewable with RECs)

- [ ] **PUE Range**
  - 1.0 ≤ PUE ≤ 3.0
  - Typical: 1.1 - 1.5
  - Flag if PUE > 2.0 (inefficient) or PUE < 1.05 (suspicious)

- [ ] **Expected Lifespan Range**
  - 2 years ≤ EL ≤ 7 years (typical for most hardware)
  - Servers: 3-5 years
  - Mobile devices: 2-4 years
  - Network equipment: 5-7 years
  - Flag if outside typical range

- [ ] **Resource Share Range**
  - 0 < RR/ToR ≤ 1.0
  - Cannot reserve more than 100% of resources

- [ ] **Percentage Allocations**
  - All percentage values: 0 ≤ % ≤ 100
  - Sum of percentages = 100% (for multi-region, device mix, etc.)

#### 3.4 Unit Consistency

- [ ] **Energy Units**
  - All energy values in kWh or convertible
  - Consistent units throughout

- [ ] **Carbon Units**
  - Operational carbon in gCO2eq
  - Embodied carbon in gCO2eq
  - Carbon intensity in gCO2eq/kWh
  - Final SCI includes functional unit

- [ ] **Time Units**
  - Duration in hours or seconds (documented)
  - Expected lifespan in consistent units
  - Time reserved in consistent units

---

### 4. Quality Checks (Non-Blocking)

These checks flag submissions for manual review but do not automatically reject.

#### 4.1 Disclosure Completeness Flags

⚠️ **Flag for review if:**

- [ ] **Missing Embodied Emissions**
  - M = 0 with weak or no justification
  - Hardware components exist but M not calculated

- [ ] **Vague Assumptions**
  - Assumptions present but justification is generic
  - Example: "Industry standard" without specifics

- [ ] **Unidentified Data Sources**
  - Data sources listed as "internal" or "various"
  - No URL or specific reference provided

- [ ] **Missing Rationale for Exclusions**
  - Excluded components listed but rationale is vague
  - Example: "Not included" instead of "Beyond operational control"

- [ ] **No Limitations Acknowledged**
  - Limitations array empty or generic
  - All calculations have limitations

- [ ] **Sparse Methodology**
  - Methodology description < 50 characters
  - Insufficient detail to understand approach

#### 4.2 Outlier Detection Flags

⚠️ **Flag for review if:**

- [ ] **Unusually High SCI Score**
  - Score > 2 standard deviations above category average
  - Example: API service > 1000 gCO2eq per 1000 requests

- [ ] **Unusually Low SCI Score**
  - Score > 2 standard deviations below category average
  - Example: ML training < 100 gCO2eq per run

- [ ] **Extreme Carbon Intensity**
  - I > 1500 gCO2eq/kWh (coal-heavy grid, verify location)
  - I < 50 gCO2eq/kWh (suspicious unless verified renewable)

- [ ] **Extreme PUE**
  - PUE > 2.0 (very inefficient)
  - PUE < 1.05 (suspicious, nearly theoretical minimum)

- [ ] **High Embodied Ratio**
  - M / (O + M) > 80% (embodied dominates)
  - Verify allocation methodology

- [ ] **Zero Embodied Emissions**
  - M = 0 with hardware components listed
  - Requires strong justification

#### 4.3 Novelty Flags

⚠️ **Flag for review if:**

- [ ] **Novel Category**
  - Category is "other" or new domain
  - Functional unit is unconventional

- [ ] **Novel Methodology**
  - Methodology not represented in examples
  - Custom allocation methods
  - Proprietary data sources

- [ ] **Complex Boundary**
  - > 10 components included or excluded
  - Multi-cloud or hybrid architecture
  - Client-side and server-side components

- [ ] **Multi-Region with Complex Weighting**
  - > 5 regions
  - Dynamic allocation (not static percentages)

---

## Manual Review Checklist

### For Review Committee Use

When a submission is flagged for manual review, the committee evaluates:

### 5.1 Disclosure Sufficiency

**Question**: Is enough information provided for someone else to understand and evaluate the calculation?

- [ ] **Boundary Clarity**
  - Can a reader clearly identify what is included/excluded?
  - Are exclusion rationales reasonable and specific?
  - Is the scope appropriate for the software system?

- [ ] **Methodology Transparency**
  - Can a reader understand how the calculation was performed?
  - Are data sources specific and credible?
  - Are assumptions explicit and justified?

- [ ] **Reproducibility**
  - Could another practitioner reproduce this calculation?
  - Are coefficients and factors documented?
  - Are formulas and allocation methods clear?

**Review Outcome**:
- ✅ **Sufficient**: Clear enough for community evaluation
- ⚠️ **Needs Clarification**: Request specific additions
- ❌ **Insufficient**: Major gaps in disclosure

### 5.2 Specification Alignment

**Question**: Does the submission follow SCI specification structure?

- [ ] **SCI Formula Compliance**
  - Uses SCI = (E × I + M) / R formula
  - All components (E, I, M, R) documented
  - Functional unit scales with software usage

- [ ] **Boundary Principles**
  - Boundary follows SCI specification guidance
  - Included components are under operational control or material
  - Excluded components are justified

- [ ] **Functional Unit Appropriateness**
  - Unit represents delivered value or usage
  - Scales linearly with software
  - Not a proxy metric (e.g., "per server" instead of "per user")

**Review Outcome**:
- ✅ **Aligned**: Follows specification structure
- ⚠️ **Debatable**: Interpretation differs but reasonable
- ❌ **Misaligned**: Does not follow specification

### 5.3 Good Faith Effort

**Question**: Does the submission appear to be a genuine attempt at measurement?

- [ ] **Effort Level**
  - Demonstrates thorough data collection
  - Uses credible data sources
  - Acknowledges limitations honestly

- [ ] **Truthfulness Indicators**
  - Uncertainties acknowledged
  - Conservative vs optimistic assumptions balanced
  - No obvious exaggerations or omissions

- [ ] **Professional Quality**
  - Well-organized and coherent
  - Appropriate level of detail
  - No evidence of gaming or manipulation

**Review Outcome**:
- ✅ **Good Faith**: Genuine measurement effort
- ⚠️ **Questionable**: Some concerns but not conclusive
- ❌ **Bad Faith**: Evidence of manipulation or dishonesty

### 5.4 Novel Methodology Review

**For submissions with novel approaches:**

- [ ] **Innovation Assessment**
  - Is this a legitimate novel approach?
  - Could this methodology be useful for others?
  - Should this approach be documented as precedent?

- [ ] **Community Review Recommendation**
  - Should the certificate include annotation encouraging peer review?
  - Is this methodology sound enough to approve?
  - Are there risks of misinterpretation?

**Review Outcome**:
- ✅ **Approve**: Novel but sound
- ✅ **Approve with Annotation**: Approve but flag for community review
- ⚠️ **Request Expert Consultation**: Needs domain expert input
- ❌ **Reject**: Methodology fundamentally flawed

---

## Quality Assessment Rubric

### Disclosure Quality Score (Internal Use)

For tracking improvement and identifying best practices.

| Criterion | Score 1 | Score 3 | Score 5 |
|-----------|---------|---------|---------|
| **Boundary Clarity** | Vague, missing rationales | Clear inclusions/exclusions | Detailed with specific justifications |
| **Data Sources** | Generic or missing | Named sources | Specific sources with URLs and dates |
| **Methodology** | Sparse description | Adequate description | Detailed with formulas and examples |
| **Assumptions** | Not documented | Listed with justification | Comprehensive with impact assessment |
| **Limitations** | Not acknowledged | Generic limitations | Specific with mitigation strategies |
| **Calculation Detail** | High-level only | Component breakdown | Full component breakdown with validation |

**Scoring**:
- **6-10**: Minimal disclosure (meets requirements but sparse)
- **11-20**: Good disclosure (clear and usable)
- **21-30**: Excellent disclosure (comprehensive and exemplary)

---

## Common Issues and Resolutions

### Issue 1: Missing Embodied Emissions

**Problem**: M = 0 or missing hardware components

**Auto-Check**: ⚠️ Flag for review

**Manual Review**:
- Is there a valid justification? (e.g., pure SaaS with no infrastructure control)
- If hardware exists, request M calculation
- If truly zero, require explicit statement

**Resolution**:
- ✅ Approve if justified
- ⚠️ Request revision if unjustified

---

### Issue 2: Vague Exclusion Rationales

**Problem**: Excluded components without specific rationale

**Example**: ❌ "Not included" vs ✅ "Beyond operational control - managed by third party"

**Auto-Check**: ❌ Fail completeness validation

**Resolution**:
- Reject with feedback
- Provide example rationales
- Request resubmission with specifics

---

### Issue 3: Inconsistent Calculations

**Problem**: O ≠ E × I or SCI ≠ (O + M) / R

**Auto-Check**: ❌ Fail logical validation

**Manual Review**: Check if rounding error or calculation error

**Resolution**:
- If rounding (< 1% difference): Auto-approve
- If calculation error: Reject with feedback showing correct calculation

---

### Issue 4: Outdated Carbon Intensity Data

**Problem**: Grid data source from > 5 years ago

**Auto-Check**: ⚠️ Flag for review

**Manual Review**:
- Is more recent data available?
- Is the region's grid mix stable?

**Resolution**:
- ✅ Approve if region is stable and no recent data available
- ⚠️ Approve with annotation noting data age
- ❌ Request update if recent data exists

---

### Issue 5: Unusual Functional Unit

**Problem**: Functional unit doesn't scale linearly or is a proxy metric

**Example**: ❌ "per server" vs ✅ "per user-month"

**Auto-Check**: ⚠️ Flag for novel methodology

**Manual Review**:
- Does it represent delivered value?
- Does it scale with software usage?
- Is it appropriate for the software category?

**Resolution**:
- ✅ Approve if well-justified
- ⚠️ Approve with annotation
- ❌ Reject if clearly inappropriate

---

### Issue 6: Extreme PUE Values

**Problem**: PUE > 2.0 or PUE < 1.05

**Auto-Check**: ⚠️ Flag as outlier

**Manual Review**:
- Is this an actual measured value?
- Is the data source credible?
- For low PUE: Is this a highly efficient data center?
- For high PUE: Is this legacy infrastructure?

**Resolution**:
- ✅ Approve if credibly documented
- ⚠️ Request verification if suspicious
- ❌ Reject if clearly erroneous

---

### Issue 7: No Limitations Acknowledged

**Problem**: Limitations array is empty

**Auto-Check**: ⚠️ Flag for quality review

**Manual Review**:
- Every calculation has limitations
- Request at least one honest limitation

**Resolution**:
- ⚠️ Request revision
- Provide examples of common limitations

---

## Validation Workflow Diagram

```
Submission Received
      |
      v
[Structural Validation]
      |
   Pass? --- No --> Reject with syntax errors
      |
     Yes
      |
      v
[Completeness Validation]
      |
   Pass? --- No --> Reject with missing fields feedback
      |
     Yes
      |
      v
[Logical Validation]
      |
   Pass? --- No --> Reject with calculation errors
      |
     Yes
      |
      v
[Quality Checks]
      |
  Flags? --- No --> Auto-Approve (Issue Certificate)
      |
     Yes
      |
      v
[Manual Review Queue]
      |
      v
[Committee Review]
      |
      +-- Approve -----------> Issue Certificate
      |
      +-- Approve with Annotation --> Issue Certificate with Note
      |
      +-- Request Revisions --> Notify Applicant, Await Resubmission
      |
      +-- Reject -----------> Notify Applicant, Case Closed
```

---

## Reviewer Notes Template

**For Manual Review Committee Use**

```yaml
submission_id: GSF-SCI-2026-XXXXX
reviewer: [Name]
review_date: [Date]

flags_raised:
  - flag_type: [e.g., "missing_embodied"]
    severity: [low/medium/high]
    notes: [Reviewer observations]

disclosure_sufficiency:
  score: [1-5]
  notes: [Comments on disclosure quality]

specification_alignment:
  score: [1-5]
  notes: [Comments on SCI compliance]

good_faith_assessment:
  score: [1-5]
  notes: [Comments on effort and truthfulness]

recommendation:
  decision: [approve/approve_with_annotation/request_revisions/reject]
  annotation: [If approve_with_annotation, text to add]
  revision_requests: [If request_revisions, specific requests]
  rejection_rationale: [If reject, detailed rationale]

committee_vote:
  - reviewer_1: [approve/revise/reject]
  - reviewer_2: [approve/revise/reject]
  - reviewer_3: [approve/revise/reject]
  final_decision: [majority or unanimous]
```

---

## Appendix: Validation Error Messages

### Structural Errors

- `ERROR_INVALID_YAML`: "Invalid YAML syntax on line {line}: {error}"
- `ERROR_MISSING_FIELD`: "Required field '{field}' is missing"
- `ERROR_INVALID_TYPE`: "Field '{field}' must be {type}, got {actual_type}"

### Completeness Errors

- `ERROR_NO_INCLUDED_COMPONENTS`: "At least one component must be included in boundary"
- `ERROR_MISSING_EXCLUSION_RATIONALE`: "Component '{component}' is excluded but has no rationale"
- `ERROR_MISSING_DATA_SOURCE`: "Component '{component}' has no identified data source"

### Logical Errors

- `ERROR_INCONSISTENT_CALCULATION`: "SCI calculation inconsistent: stated={stated}, calculated={calculated}"
- `ERROR_INVALID_DATE_RANGE`: "Measurement start_date must be before end_date"
- `ERROR_FUTURE_DATE`: "Measurement period cannot be in the future"

### Quality Warnings

- `WARNING_ZERO_EMBODIED`: "Embodied emissions are zero. Justification required."
- `WARNING_OUTLIER_SCORE`: "SCI score is significantly higher/lower than category average"
- `WARNING_OLD_DATA`: "Carbon intensity data is more than 3 years old"

---

**Document Version**: 1.0
**Last Updated**: 2026-01
**Maintained By**: GSF Certification Working Group
**Questions**: certification@greensoftware.foundation
