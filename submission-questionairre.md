# SCI certification questionnaire

Please answer the following questions with as much detail as possible.

## Metadata

- What is the measurement name (must match the title of the IMP)

- Please describe the system under measurement (please be very specific with software version numbers

- What was the functional unit?

- Why was this functional unit chosen?

- What is the time granularity of the raw data used in this IMP?
  
  *If the granularity of the raw data varied between components, please provide details*

- Please provide a URL for the documentation for the software under measurement

- Please provide the name of the accountable person for this measurement

## SCI calculation

For each component:

- [ ] There is an O value in units of gCO2e

- [ ] O represents operational carbon, where O is derived rather than measured, it is derived as the product of E and I
- [ ] E is operational energy in units of kWh
- [ ] I is carbon intensity of the electricity used, in units of gCO2e/kWh
- [ ] There is an M value in units of gCO2e
- [ ] M represents the embodied carbon
- [ ] There is a functional unit, R
- [ ] SCI is calculated as (O + M) / R
- [ ] Aggregation is done by summing SCI values across all components

## Data and model pipelines

- [ ] The raw data in the manifest are the lowest level (closest to direct measurements of power consumption) that are available.

- Please state whether I values are marginal or average. What was the source?
	
- Please state whether I values are location-specific (country, region, town, site) or globally averaged.

- For each component in your manifest, please describe how you gathered E values. Please make clear whether E was directly measured, or calculated from proxies, analogs or heuristics.

- For each unique observation, please describe the pipeline of models that was used to turn it into carbon

- What was the source for your functional unit values?

- For the coefficients applied in your model pipelines, please provide citations or, if new, a brief rationale.

- Please describe any data that was redacted from the IMP and justify the reasons.

- For each observation, provide error or uncertainty estimates if possible.


## Inventory Completeness

- [ ] The system architecture is appropriately captured using discrete components and the choice of components are clearly explained in explanatory notes

- Please list the components in your tree

- For any omitted components, please provide a justification
