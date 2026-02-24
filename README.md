# Impact Framework (IF) Manifest Files for SCI Examples

This directory contains executable Impact Framework manifest files (`.yml`) that implement the three SCI calculation examples from `SCI-calculation-examples.md`.

## Prerequisites

Install the Impact Framework CLI:
```bash
npm install -g @grnsft/if
```

## Manifest Files

### Example 1: E-commerce API Service
**File:** `example-1-api-service-final.yml`

**Scenario:** REST API service on AWS EC2 (us-east-1) with application servers, load balancer, and database.

**Run:**
```bash
if-run --manifest example-1-api-service-final.yml
```

**Expected Result:** 349.63 gCO2eq per 1,000 API requests

**Actual Result:**
- Energy: 1.022 kWh per 1,000 requests
- Operational Carbon: 347.48 gCO2eq
- Embodied Carbon: 2.146 gCO2eq
- **SCI: 349.63 gCO2eq per 1,000 API requests** ✓

---

### Example 2: Machine Learning Training Job
**File:** `example-2-ml-training-final.yml`

**Scenario:** ResNet-50 training on GCP with NVIDIA V100 GPU in europe-west4 (Netherlands).

**Run:**
```bash
if-run --manifest example-2-ml-training-final.yml
```

**Expected Result:** 2,721 gCO2eq (2.72 kgCO2eq) per training run

**Actual Result:**
- Energy: 5.5 kWh per training run
- Operational Carbon: 2,310 gCO2eq
- Embodied Carbon: 411 gCO2eq
- **SCI: 2,721 gCO2eq per training run** ✓

---

### Example 3: Mobile Banking App
**File:** `example-3-mobile-app-final.yml`

**Scenario:** Mobile banking app running on user devices (60% iPhone, 40% Android) with global user distribution.

**Run:**
```bash
if-run --manifest example-3-mobile-app-final.yml
```

**Expected Result:** 6.02 gCO2eq per user-month

**Actual Result:**
- Energy: 0.003795 kWh per user-month
- Operational Carbon: 1.56 gCO2eq
- Embodied Carbon: 4.46 gCO2eq
- **SCI: 6.02 gCO2eq per user-month** ✓

---

## Manifest Structure

Each manifest follows the Impact Framework IMP file format:

```yaml
name: manifest-name
description: |
  Detailed description of the scenario
tags:
  kind: sci
  category: service-type

initialize:
  plugins:
    plugin-name:
      method: PluginMethod
      path: builtin
      config:
        # Plugin configuration

tree:
  children:
    component-name:
      pipeline:
        compute:
          - plugin-1
          - plugin-2
          - ...
      defaults:
        # Default values
      inputs:
        - timestamp: "2025-01-01T00:00:00.000Z"
          duration: <seconds>
          # Input parameters
```

## Key Plugins Used

1. **Multiply**: Multiplies parameters (e.g., energy × carbon intensity)
2. **Sum**: Sums multiple parameters (e.g., operational + embodied carbon)
3. **Sci**: Calculates Software Carbon Intensity per functional unit
4. **Coefficient**: Passes through a value with coefficient multiplication

## Validation

All manifests have been validated to produce results matching the written examples in `SCI-calculation-examples.md`:

| Example | Manifest | Expected SCI | Actual SCI | Match |
|---------|----------|--------------|------------|-------|
| API Service | example-1-api-service-final.yml | 349.63 | 349.63 | ✓ |
| ML Training | example-2-ml-training-final.yml | 2,721 | 2,721 | ✓ |
| Mobile App | example-3-mobile-app-final.yml | 6.02 | 6.02 | ✓ |

## Output Files

To save manifest outputs:
```bash
if-run --manifest <manifest-file>.yml --output <output-file>.yml
```

To print to stdout:
```bash
if-run --manifest <manifest-file>.yml --stdout
```

## Notes

- All calculations conform to SCI Specification v1.1.0
- Operational emissions use location-based carbon intensity (no market-based measures)
- Embodied emissions include hardware lifecycle impacts with time/resource-share allocation
- Functional units are chosen to represent meaningful application scaling metrics

## References

- [Impact Framework Documentation](https://if.greensoftware.foundation/)
- [SCI Specification v1.1.0](https://github.com/Green-Software-Foundation/sci)
- [IF GitHub Repository](https://github.com/Green-Software-Foundation/if)
