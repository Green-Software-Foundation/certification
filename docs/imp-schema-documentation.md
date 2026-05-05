# Impact Manifest Protocol (IMP) Schema Documentation

## Version 1.0 - GSF SCI Self-Certification Program

---

## Table of Contents

1. [Overview](#overview)
2. [Schema Structure](#schema-structure)
3. [Core Fields Reference](#core-fields-reference)
4. [Disclosure Sections](#disclosure-sections)
5. [Validation Rules](#validation-rules)
6. [Examples by Domain](#examples-by-domain)
7. [JSON Schema Definition](#json-schema-definition)

---

## Overview

The **Impact Manifest Protocol (IMP)** is a structured YAML/JSON format for documenting Software Carbon Intensity (SCI) calculations. It serves as an **optional, alternative submission method** for the GSF SCI Self-Certification Program.

### Purpose

- **Standardization**: Consistent format for programmatic submissions
- **Transparency**: Captures all required disclosure information in machine-readable format
- **Automation**: Enables automated submission pipelines and CI/CD integration
- **Interoperability**: Compatible with GSF Impact Framework and other tools

### When to Use IMP Format

**IMP files are optional.** Most applicants will use the web-based form interface in the submission portal.

**Use IMP files if you:**
- Have automated SCI calculation tools or pipelines
- Want to integrate submissions into CI/CD workflows
- Prefer to prepare submissions programmatically
- Are building tools that generate SCI calculations

**Use the web form if you:**
- Are submitting manually (most common)
- Prefer a guided, step-by-step interface
- Don't have technical file format expertise

### Format Options

- **YAML** (recommended): Human-readable, supports comments
- **JSON**: Machine-friendly, API-compatible

### File Naming Convention

`{organization}-{software}-{version}-sci.{yml|json}`

Examples:
- `acme-api-service-v1-sci.yml`
- `university-ml-training-2025-sci.json`

---

## Schema Structure

### High-Level Structure

```yaml
# Metadata Section
name: string (required)
description: string (required)
tags: object (required)
  kind: "sci" (required)
  category: string (required)

# Submission Information
submission:
  applicant: object (required)
  software: object (required)
  measurement_period: object (required)

# Software Boundary
boundary:
  included: array (required)
  excluded: array (required)
  shared_infrastructure: array (optional)

# Functional Unit
functional_unit:
  unit: string (required)
  rationale: string (required)
  measurement_method: string (required)
  conversion_factors: array (optional)

# SCI Calculation
calculation:
  score: object (required)
  energy: object (required)
  carbon_intensity: object (required)
  embodied_emissions: object (required)

# Methodology and Sources
methodology:
  approach: string (required)
  assumptions: array (required)
  limitations: array (required)
  data_sources: array (required)

# Baseline Comparison (optional)
baseline:
  baseline_score: object (optional)
  actions_taken: array (optional)
  explanation: string (optional)

# Impact Framework Configuration (for automation)
initialize:
  plugins: object (optional)

tree:
  children: object (optional)
```

---

## Core Fields Reference

### 1. Metadata Section

#### `name` (string, required)
- **Description**: Unique identifier for this calculation
- **Format**: kebab-case, alphanumeric with hyphens
- **Example**: `"ecommerce-api-service-sci"`
- **Validation**: 3-100 characters, must be unique per applicant

#### `description` (string, required)
- **Description**: Human-readable summary of the software system and calculation
- **Format**: Multi-line markdown supported
- **Content Should Include**:
  - Brief software system description
  - Infrastructure overview
  - Measurement period summary
  - Expected/calculated result
- **Example**:
```yaml
description: |
  SCI calculation for e-commerce REST API service on AWS EC2 (us-east-1).

  Infrastructure:
  - 2x t3.medium application servers
  - 1x ALB load balancer
  - 1x r6g.large database

  Measurement Period: January 2025 (30 days)
  Total Requests: 45,000,000

  Result: 349.63 gCO2eq per 1,000 API requests
```

#### `tags` (object, required)
- **Description**: Categorization and classification metadata
- **Required Fields**:
  - `kind`: Always `"sci"` for SCI calculations
  - `category`: Domain category (see categories below)
- **Optional Fields**:
  - `domain`: Specific industry domain
  - `environment`: Production, staging, development
  - `cloud_provider`: AWS, GCP, Azure, on-premise, hybrid
  - `region`: Geographic region
- **Example**:
```yaml
tags:
  kind: sci
  category: api-service
  domain: e-commerce
  environment: production
  cloud_provider: aws
  region: us-east-1
```

**Standard Categories**:
- `api-service`: REST/GraphQL APIs, microservices
- `web-application`: Web apps, SPAs
- `mobile-app`: iOS, Android applications
- `ml-training`: Machine learning model training
- `ml-inference`: ML model serving/inference
- `data-processing`: ETL, batch processing
- `streaming`: Real-time data streaming
- `database`: Database services
- `cdn`: Content delivery networks
- `other`: Other categories (specify in domain tag)

---

### 2. Submission Information

#### `submission` (object, required)

```yaml
submission:
  applicant:
    organization: string (required)
    contact_name: string (required)
    contact_email: string (required, valid email)
    website: string (optional, valid URL)

  software:
    name: string (required)
    version: string (required)
    description: string (required)
    repository: string (optional, URL)
    documentation: string (optional, URL)

  measurement_period:
    start_date: string (required, ISO 8601 date)
    end_date: string (required, ISO 8601 date)
    duration_hours: number (required, positive)
    submission_date: string (required, ISO 8601 date)
```

**Field Details**:

- **applicant.organization**: Legal entity or individual name
- **applicant.contact_email**: Must be valid, used for notifications
- **software.name**: Official name of the software system
- **software.version**: Semantic version or identifier
- **measurement_period.start_date**: ISO 8601 format (e.g., `"2025-01-01"`)
- **measurement_period.end_date**: Must be after start_date
- **measurement_period.duration_hours**: Calculated duration for validation
- **submission_date**: Date of submission (auto-populated by portal)

**Example**:
```yaml
submission:
  applicant:
    organization: "Acme Corporation"
    contact_name: "Jane Smith"
    contact_email: "jane.smith@acme.com"
    website: "https://acme.com"

  software:
    name: "Acme E-commerce API"
    version: "2.1.0"
    description: "REST API for e-commerce platform serving 45M requests/month"
    repository: "https://github.com/acme/ecommerce-api"

  measurement_period:
    start_date: "2025-01-01"
    end_date: "2025-01-31"
    duration_hours: 720
    submission_date: "2025-02-15"
```

---

### 3. Software Boundary

#### `boundary` (object, required)

Defines what is included and excluded from the SCI calculation.

```yaml
boundary:
  included:
    - component: string (required)
      description: string (required)
      justification: string (required)

  excluded:
    - component: string (required)
      description: string (required)
      rationale: string (required)

  shared_infrastructure:
    - component: string (optional)
      allocation_method: string (optional)
      allocation_percentage: number (optional)
```

**Field Details**:

- **included**: Array of components explicitly included in the boundary
  - `component`: Name/identifier of the component
  - `description`: What this component does
  - `justification`: Why it's included (operational control, material impact)

- **excluded**: Array of components explicitly excluded (must have rationale!)
  - `component`: Name/identifier of the component
  - `description`: What this component does
  - `rationale`: Why it's excluded (beyond control, immaterial, separate service)

- **shared_infrastructure**: Components shared with other systems
  - `component`: Name of shared resource
  - `allocation_method`: How usage is allocated (time, resource-share, etc.)
  - `allocation_percentage`: Percentage allocated to this software

**Example**:
```yaml
boundary:
  included:
    - component: "Application Servers"
      description: "2x t3.medium EC2 instances running Node.js API"
      justification: "Core application infrastructure under operational control"

    - component: "Load Balancer"
      description: "AWS Application Load Balancer (ALB)"
      justification: "Dedicated to this API, material network overhead"

    - component: "Database"
      description: "1x r6g.large RDS PostgreSQL instance"
      justification: "Dedicated database for this application"

    - component: "Network Data Transfer"
      description: "900 GB monthly data transfer"
      justification: "Material network energy consumption"

  excluded:
    - component: "CDN (CloudFront)"
      description: "Content delivery network for static assets"
      rationale: "Separate service with independent billing, beyond operational boundary"

    - component: "End-user devices"
      description: "Client browsers and devices"
      rationale: "Beyond operational control, not part of backend SCI"

    - component: "Monitoring/observability stack"
      description: "DataDog monitoring and logging"
      rationale: "Immaterial impact (<1% of total infrastructure)"

  shared_infrastructure:
    - component: "VPC NAT Gateway"
      allocation_method: "Data transfer volume"
      allocation_percentage: 15
```

---

### 4. Functional Unit

#### `functional_unit` (object, required)

Defines the unit of measurement (R) for the SCI calculation.

```yaml
functional_unit:
  unit: string (required)
  unit_symbol: string (required)
  rationale: string (required)
  measurement_method: string (required)
  total_units: number (required, positive)
  conversion_factors:
    - from: string (optional)
      to: string (optional)
      factor: number (optional)
      justification: string (optional)
```

**Field Details**:

- **unit**: Human-readable functional unit (e.g., "API requests", "user-months")
- **unit_symbol**: Short symbol (e.g., "requests", "users", "training-runs")
- **rationale**: Why this unit was chosen (scales with usage, represents value)
- **measurement_method**: How units are counted (application logs, telemetry, etc.)
- **total_units**: Total number of units during measurement period
- **conversion_factors**: Any conversions applied (optional)

**Standard Functional Units by Category**:

| Category | Typical Units | Example |
|----------|--------------|---------|
| API Service | requests, API calls | "per 1,000 API requests" |
| Web Application | page views, user sessions | "per 1,000 page views" |
| Mobile App | user-months, active users | "per user-month" |
| ML Training | training runs, epochs | "per training run" |
| ML Inference | predictions, inferences | "per 1,000 predictions" |
| Data Processing | jobs, records processed | "per processing job" |
| Streaming | hours streamed, events | "per million events" |

**Example**:
```yaml
functional_unit:
  unit: "1,000 API requests"
  unit_symbol: "requests"
  rationale: |
    API requests scale linearly with software usage and represent the core
    value delivered by this service. Normalized to 1,000 requests for
    reasonable numeric scale.
  measurement_method: |
    Counted from application access logs (nginx) aggregated over the
    measurement period. Validated against AWS CloudWatch metrics.
  total_units: 45000000
  conversion_factors:
    - from: "total requests"
      to: "per 1,000 requests"
      factor: 0.001
      justification: "Normalization for readability"
```

---

### 5. SCI Calculation

#### `calculation` (object, required)

The core SCI calculation: `SCI = (E × I + M) / R`

```yaml
calculation:
  score:
    value: number (required, positive)
    unit: string (required)
    formula: string (required)

  energy:
    value: number (required, positive)
    unit: string (required, default "kWh")
    methodology: string (required)
    pue: number (optional, ≥1.0)
    components: array (required)
    data_sources: array (required)

  carbon_intensity:
    value: number (required, positive)
    unit: string (required, default "gCO2eq/kWh")
    location: string (required)
    approach: string (required, enum: ["location-based", "market-based"])
    data_sources: array (required)
    regional_breakdown: array (optional)

  embodied_emissions:
    value: number (required, ≥0)
    unit: string (required, default "gCO2eq")
    methodology: string (required)
    hardware_components: array (required)
    data_sources: array (required)
```

---

#### 5.1 Score

```yaml
score:
  value: 349.63
  unit: "gCO2eq per 1,000 API requests"
  formula: "SCI = (E × I + M) / R = (46.01 × 340 + 96,574.9) / 45,000 × 1,000"
```

**Validation**:
- Must match calculated value from E, I, M, R within 1% tolerance
- Unit must include functional unit

---

#### 5.2 Energy (E)

```yaml
energy:
  value: 46.01
  unit: "kWh"
  methodology: |
    Energy measured from cloud provider telemetry (AWS CloudWatch) for
    compute instances. Network energy estimated using 0.001 kWh/GB
    coefficient. PUE of 1.2 applied for data center overhead.

  pue: 1.2

  components:
    - name: "Application Servers"
      energy_kwh: 21.6
      calculation: "2 instances × 15W avg × 720 hours = 21.6 kWh"
      data_source: "AWS CloudWatch CPU utilization metrics"

    - name: "Load Balancer"
      energy_kwh: 1.44
      calculation: "2W constant × 720 hours = 1.44 kWh"
      data_source: "AWS ALB power coefficient (vendor documentation)"

    - name: "Database"
      energy_kwh: 14.4
      calculation: "20W avg × 720 hours = 14.4 kWh"
      data_source: "AWS RDS CloudWatch metrics (CPU, connections)"

    - name: "Network Data Transfer"
      energy_kwh: 0.9
      calculation: "900 GB × 0.001 kWh/GB = 0.9 kWh"
      data_source: "Network energy coefficient from Green Software Foundation"

  data_sources:
    - name: "AWS CloudWatch"
      type: "measurement"
      description: "Cloud provider telemetry for compute instances"
      url: "https://aws.amazon.com/cloudwatch/"

    - name: "GSF Network Coefficient"
      type: "coefficient"
      value: "0.001 kWh/GB"
      description: "Network energy consumption per gigabyte transferred"
      url: "https://github.com/Green-Software-Foundation/sci-data"
```

**Validation Rules**:
- Sum of component energy × PUE must equal total energy value
- All components must have data sources
- PUE must be ≥1.0 (typical range: 1.1-1.5)

---

#### 5.3 Carbon Intensity (I)

```yaml
carbon_intensity:
  value: 340
  unit: "gCO2eq/kWh"
  location: "us-east-1 (Virginia, USA)"
  approach: "location-based"

  methodology: |
    Location-based grid carbon intensity for Virginia obtained from EPA
    eGRID2022 database. Represents annual average grid mix for the region
    where infrastructure operates.

  data_sources:
    - name: "EPA eGRID 2022"
      type: "grid-data"
      value: 340
      year: 2022
      description: "Official US grid emissions data"
      url: "https://www.epa.gov/egrid"

  regional_breakdown:
    - region: "us-east-1"
      percentage: 100
      carbon_intensity: 340
      source: "EPA eGRID SRVC subregion (Virginia)"
```

**For Multi-Region Systems**:
```yaml
carbon_intensity:
  value: 410  # Weighted average
  unit: "gCO2eq/kWh"
  location: "Global (weighted by user distribution)"
  approach: "location-based"

  methodology: |
    Weighted average carbon intensity based on user geographic distribution
    and regional grid data.

  regional_breakdown:
    - region: "Europe"
      percentage: 40
      carbon_intensity: 300
      source: "European Environment Agency 2023"

    - region: "North America"
      percentage: 35
      carbon_intensity: 400
      source: "EPA eGRID 2022 (US average)"

    - region: "Asia-Pacific"
      percentage: 25
      carbon_intensity: 600
      source: "IEA Regional Grid Data 2023"

  calculation: "(0.40 × 300) + (0.35 × 400) + (0.25 × 600) = 410 gCO2eq/kWh"
```

**Validation Rules**:
- Carbon intensity must be positive and typically < 2000 gCO2eq/kWh
- Location(s) must be specified
- Data sources must include year (within last 3 years preferred)
- If weighted: regional percentages must sum to 100%

---

#### 5.4 Embodied Emissions (M)

```yaml
embodied_emissions:
  value: 96574.9
  unit: "gCO2eq"

  methodology: |
    Embodied emissions calculated using hardware lifecycle assessment (LCA)
    data, allocated based on time-share and resource-share during the
    measurement period.

    Formula: M = TE × (TiR/EL) × (RR/ToR)
    - TE = Total embodied emissions (from LCA data)
    - TiR = Time reserved (measurement period)
    - EL = Expected lifespan
    - RR = Resources reserved (vCPUs, memory)
    - ToR = Total resources available

  hardware_components:
    - name: "Application Server 1"
      type: "AWS t3.medium EC2 instance"
      embodied_total: 1200000  # gCO2eq (1,200 kg)
      expected_lifespan_hours: 35040  # 4 years
      time_reserved_hours: 720  # measurement period
      resource_share: 1.0  # dedicated
      allocated_emissions: 24658.0
      calculation: "1,200,000 × (720/35,040) × 1.0 = 24,658.0 g"
      data_source: "Cloud Carbon Footprint - AWS EC2 Embodied Emissions"

    - name: "Application Server 2"
      type: "AWS t3.medium EC2 instance"
      embodied_total: 1200000
      expected_lifespan_hours: 35040
      time_reserved_hours: 720
      resource_share: 1.0
      allocated_emissions: 24658.0
      calculation: "1,200,000 × (720/35,040) × 1.0 = 24,658.0 g"
      data_source: "Cloud Carbon Footprint - AWS EC2 Embodied Emissions"

    - name: "Load Balancer"
      type: "AWS Application Load Balancer"
      embodied_total: 800000  # gCO2eq (800 kg)
      expected_lifespan_hours: 35040
      time_reserved_hours: 720
      resource_share: 1.0
      allocated_emissions: 16438.4
      calculation: "800,000 × (720/35,040) × 1.0 = 16,438.4 g"
      data_source: "Cloud Carbon Footprint - AWS ALB Embodied Emissions"

    - name: "Database Server"
      type: "AWS r6g.large RDS instance"
      embodied_total: 1500000  # gCO2eq (1,500 kg)
      expected_lifespan_hours: 35040
      time_reserved_hours: 720
      resource_share: 1.0
      allocated_emissions: 30820.5
      calculation: "1,500,000 × (720/35,040) × 1.0 = 30,820.5 g"
      data_source: "Cloud Carbon Footprint - AWS RDS Embodied Emissions"

  data_sources:
    - name: "Cloud Carbon Footprint"
      type: "database"
      description: "Open-source embodied emissions database for cloud infrastructure"
      url: "https://www.cloudcarbonfootprint.org/"
      methodology: "Based on manufacturer LCA data and academic research"
```

**For Shared Resources**:
```yaml
hardware_components:
  - name: "Shared Kubernetes Cluster Node"
    type: "n1-standard-16 (16 vCPUs, 60 GB RAM)"
    embodied_total: 2000000  # gCO2eq for full server
    expected_lifespan_hours: 35040  # 4 years
    time_reserved_hours: 720  # 30 days
    resource_share: 0.125  # Using 2 of 16 vCPUs
    allocated_emissions: 5142.9
    calculation: "2,000,000 × (720/35,040) × (2/16) = 5,142.9 g"
    data_source: "GCP Embodied Emissions Data"
```

**Validation Rules**:
- Sum of allocated emissions must equal total M value
- All hardware components must have:
  - Total embodied emissions (TE)
  - Expected lifespan (EL)
  - Time reserved (TiR)
  - Resource share (RR/ToR) if applicable
- Typical expected lifespans: 3-5 years for servers, 2-4 years for mobile devices
- Embodied emissions can be zero only with explicit justification

---

### 6. Methodology and Sources

#### `methodology` (object, required)

```yaml
methodology:
  approach: string (required, enum: ["measurement", "calculation", "hybrid"])

  measurement_details: string (optional, required if approach includes measurement)

  calculation_details: string (optional, required if approach includes calculation)

  assumptions:
    - assumption: string (required)
      justification: string (required)
      impact: string (required, enum: ["low", "medium", "high"])

  limitations:
    - limitation: string (required)
      severity: string (required, enum: ["low", "medium", "high"])
      mitigation: string (optional)

  uncertainties:
    - source: string (optional)
      estimated_error: string (optional)
      confidence_level: string (optional)

  data_sources:
    - name: string (required)
      type: string (required)
      description: string (required)
      url: string (optional)
      date_accessed: string (optional, ISO 8601)
```

**Example**:
```yaml
methodology:
  approach: "hybrid"

  measurement_details: |
    Energy consumption measured directly from AWS CloudWatch metrics for
    compute instances (CPU utilization, memory, disk I/O). Measurements
    collected at 5-minute intervals and aggregated over 30-day period.

  calculation_details: |
    Network energy calculated using 0.001 kWh/GB coefficient from GSF SCI
    Data project. Embodied emissions calculated from Cloud Carbon Footprint
    database using time-share and resource-share allocation methodology.

  assumptions:
    - assumption: "AWS t3.medium average power draw is 15W"
      justification: "Based on AWS published TDP values and 40% average utilization"
      impact: "medium"

    - assumption: "Server expected lifespan is 4 years"
      justification: "Industry standard for cloud infrastructure refresh cycles"
      impact: "medium"

    - assumption: "PUE of 1.2 for AWS us-east-1 data centers"
      justification: "AWS sustainability report 2023"
      impact: "low"

    - assumption: "Network energy is 0.001 kWh/GB"
      justification: "GSF SCI Data project coefficient for average network transmission"
      impact: "low"

  limitations:
    - limitation: "No direct power metering at hardware level"
      severity: "medium"
      mitigation: "Used cloud provider telemetry as proxy for power consumption"

    - limitation: "Embodied emissions based on generic server LCA data"
      severity: "medium"
      mitigation: "Used Cloud Carbon Footprint database with AWS-specific instance types"

    - limitation: "Carbon intensity is annual average, not hourly"
      severity: "low"
      mitigation: "Annual average appropriate for monthly measurement period"

  uncertainties:
    - source: "Power estimation from CPU utilization"
      estimated_error: "±10%"
      confidence_level: "Medium"

    - source: "Embodied emissions allocation"
      estimated_error: "±15%"
      confidence_level: "Medium"

  data_sources:
    - name: "AWS CloudWatch"
      type: "measurement"
      description: "Cloud provider telemetry for CPU, memory, network"
      url: "https://aws.amazon.com/cloudwatch/"
      date_accessed: "2025-02-01"

    - name: "EPA eGRID 2022"
      type: "grid-data"
      description: "US grid carbon intensity data"
      url: "https://www.epa.gov/egrid"
      date_accessed: "2025-02-01"

    - name: "Cloud Carbon Footprint"
      type: "database"
      description: "Embodied emissions database for cloud infrastructure"
      url: "https://www.cloudcarbonfootprint.org/"
      date_accessed: "2025-02-01"

    - name: "GSF SCI Data"
      type: "coefficient"
      description: "Network energy coefficient"
      url: "https://github.com/Green-Software-Foundation/sci-data"
      date_accessed: "2025-02-01"
```

---

### 7. Baseline Comparison (Optional)

#### `baseline` (object, optional)

For submissions reporting improvement from a previous measurement.

```yaml
baseline:
  exists: boolean (required)

  baseline_score:
    value: number (required if exists=true)
    unit: string (required if exists=true)
    measurement_date: string (required if exists=true, ISO 8601)
    reference: string (optional, URL to previous certificate)

  new_score:
    value: number (required if exists=true)
    unit: string (required if exists=true)

  improvement:
    absolute_reduction: number (optional)
    percentage_reduction: number (optional)

  actions_taken:
    - action: string (required if exists=true)
      category: string (optional)
      expected_impact: string (optional)
      actual_impact: string (optional)

  explanation: string (required if exists=true)
```

**Example**:
```yaml
baseline:
  exists: true

  baseline_score:
    value: 5.12
    unit: "kgCO2eq per training run"
    measurement_date: "2024-12-01"
    reference: "https://badges.greensoftware.foundation/awards/GSF-SCI-2024-00123"

  new_score:
    value: 2.72
    unit: "kgCO2eq per training run"

  improvement:
    absolute_reduction: 2.40  # kgCO2eq
    percentage_reduction: 46.9  # %

  actions_taken:
    - action: "Migrated from CPU-only to GPU-accelerated training"
      category: "hardware-optimization"
      expected_impact: "40-50% reduction in training time and energy"
      actual_impact: "Training time reduced from 48h to 12h (75% reduction)"

    - action: "Moved from us-east-1 (340 gCO2eq/kWh) to europe-west4 (420 gCO2eq/kWh)"
      category: "location-optimization"
      expected_impact: "Lower carbon intensity region"
      actual_impact: "Note: Carbon intensity slightly higher, but overall reduction due to efficiency gains"

    - action: "Optimized model architecture (reduced parameters)"
      category: "software-optimization"
      expected_impact: "10-15% reduction in compute requirements"
      actual_impact: "Enabled GPU training to fit in memory, avoiding need for larger instance"

  explanation: |
    Despite moving to a region with slightly higher grid carbon intensity
    (420 vs 340 gCO2eq/kWh), the migration to GPU-accelerated training
    resulted in a 75% reduction in training time (48h → 12h), leading to
    an overall 46.9% reduction in SCI score. The efficiency gains from
    GPU acceleration outweighed the carbon intensity increase.
```

---

## Validation Rules

### Structural Validation

1. **Schema Compliance**
   - All required fields present
   - Correct data types
   - Valid YAML/JSON syntax

2. **Format Validation**
   - Dates in ISO 8601 format
   - URLs are valid
   - Email addresses are valid
   - Numeric values are positive (or ≥0 for embodied emissions)

### Completeness Validation

3. **Mandatory Disclosure**
   - Score value and units
   - At least one included boundary component
   - All excluded components have rationale
   - Functional unit defined with measurement method
   - E, I, M all documented with data sources
   - Measurement period specified

4. **Data Source Requirements**
   - Every calculation component has identified data source
   - Data sources include type (measurement, calculation, database, coefficient)
   - Grid data sources include year

### Logical Validation

5. **Calculation Consistency**
   - O = E × I (within 1% tolerance)
   - SCI = (O + M) / R (within 1% tolerance)
   - Sum of component energies × PUE = total energy
   - Sum of allocated embodied emissions = total M

6. **Date Logic**
   - Measurement start_date < end_date
   - Measurement period is in the past
   - Submission date ≥ measurement end date
   - Data source years are reasonable (within last 5 years preferred)

7. **Numeric Reasonableness**
   - Carbon intensity: 0 < I < 2000 gCO2eq/kWh (typical)
   - PUE: 1.0 ≤ PUE ≤ 3.0 (typical range: 1.1-1.5)
   - Expected lifespan: 2-7 years for most hardware
   - Resource share: 0 < RR/ToR ≤ 1.0

### Quality Checks (Non-Blocking, May Trigger Manual Review)

8. **Disclosure Quality**
   - Embodied emissions are present (M > 0)
   - Assumptions are documented
   - Limitations are acknowledged
   - Exclusions have clear rationale
   - Data sources are specific (not generic)

9. **Outlier Detection**
   - SCI score is within expected range for category
   - Carbon intensity matches expected range for location
   - Energy consumption is reasonable for infrastructure

---

## Examples by Domain

### API Service

See: `example-1-api-service-final.yml`
- **Functional Unit**: per 1,000 API requests
- **Key Characteristics**: Continuous operation, request-driven scaling
- **Energy Measurement**: Cloud provider telemetry
- **Embodied Emissions**: Server infrastructure allocation

### ML Training

See: `example-2-ml-training-final.yml`
- **Functional Unit**: per training run
- **Key Characteristics**: Discrete job, GPU-intensive
- **Energy Measurement**: Direct GPU power monitoring
- **Embodied Emissions**: GPU + server allocation

### Mobile Application

See: `example-3-mobile-app-final.yml`
- **Functional Unit**: per user-month
- **Key Characteristics**: Client-side, heterogeneous devices, geographic distribution
- **Energy Measurement**: Device instrumentation and profiling
- **Embodied Emissions**: Device allocation with resource-share methodology

---

## JSON Schema Definition

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Impact Manifest Protocol (IMP) for SCI Disclosure",
  "version": "1.0.0",
  "type": "object",
  "required": ["name", "description", "tags", "submission", "boundary", "functional_unit", "calculation", "methodology"],
  "properties": {
    "name": {
      "type": "string",
      "pattern": "^[a-z0-9-]{3,100}$",
      "description": "Unique identifier in kebab-case"
    },
    "description": {
      "type": "string",
      "minLength": 50,
      "description": "Human-readable summary of the calculation"
    },
    "tags": {
      "type": "object",
      "required": ["kind", "category"],
      "properties": {
        "kind": {
          "type": "string",
          "enum": ["sci"]
        },
        "category": {
          "type": "string",
          "enum": ["api-service", "web-application", "mobile-app", "ml-training", "ml-inference", "data-processing", "streaming", "database", "cdn", "other"]
        }
      }
    },
    "submission": {
      "type": "object",
      "required": ["applicant", "software", "measurement_period"],
      "properties": {
        "applicant": {
          "type": "object",
          "required": ["organization", "contact_name", "contact_email"],
          "properties": {
            "organization": {"type": "string", "minLength": 1},
            "contact_name": {"type": "string", "minLength": 1},
            "contact_email": {"type": "string", "format": "email"},
            "website": {"type": "string", "format": "uri"}
          }
        },
        "software": {
          "type": "object",
          "required": ["name", "version", "description"],
          "properties": {
            "name": {"type": "string", "minLength": 1},
            "version": {"type": "string", "minLength": 1},
            "description": {"type": "string", "minLength": 10}
          }
        },
        "measurement_period": {
          "type": "object",
          "required": ["start_date", "end_date", "duration_hours"],
          "properties": {
            "start_date": {"type": "string", "format": "date"},
            "end_date": {"type": "string", "format": "date"},
            "duration_hours": {"type": "number", "minimum": 0},
            "submission_date": {"type": "string", "format": "date"}
          }
        }
      }
    }
  }
}
```

*(Full JSON schema available as separate file: `imp-schema.json`)*

---

## Additional Resources

- **SCI Specification**: https://sci.greensoftware.foundation/
- **Impact Framework**: https://if.greensoftware.foundation/
- **GSF SCI Data**: https://github.com/Green-Software-Foundation/sci-data
- **Certificate Portal**: https://badges.greensoftware.foundation
- **Questions**: sci-certification@greensoftware.foundation

---

## Version History

- **v1.0.0** (2026-01): Initial release for GSF SCI Self-Certification Program
