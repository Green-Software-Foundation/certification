# SCI Certification Questionnaire

## Metadata

- Application name?
  *provide the name of the application under measurement*

- Application version
  *provide the specific version of the application under measurement*

- Application description
  *Please describe the system in terms that software generalists can understand. Please be very specific about version numbers, deployment details etc.*

- Application URL
  *Please link to the application itself or its documentation*

- Accountable Organization
  *Give your organization name*

- Accountable Person:
  *Name of the person submitting the certification*

- Accountable contact:
  *Contact email for the accountable person*

- Measurement time span
  *Start and end date and time* 

- Measurement manifest file
  *Provide link to the measurement IMP file*

- Measurement Visualizer Link
  *Link to the IF visualizer for your manifest file*

- Measurement summary
  *A short 2-3 sentence description of the measurement being certified*


## Functional Unit

- Please describe the functional unit, R, used in your SCI calculation

- Why was this functional unit chosen?
  *Please explain why your chosen functional unit is appropriate for your application*

## Methodology

- Please explain your general methodological approach.
  *describe the components under measurement and a brief outline of the data gathered and processes used to convert observatiosn to SCI scores for each component* 

- Key insights
  *What are the most important insights arising from your measurement?*

- Did you undertake any assessment of SCI score error?
  *If you can provide any quantification of the estimate uncertainty, please describe here*

- For any components knowingly omitted from your inventory, please provide a justification.
*If you have omitted components, please show that they do not significantly influence your SCI score, could not be expressed in your chosen functional unit or were otherwise impractical to include.*

## Breakdown

- For each component in your measurement, please provide the SCI score below.

*Answer the following questions **FOR EVERY COMPONENT IN YOUR TREE**:*
*Add an H3 (###) for each component in your tree, using the component name as the heading*

### Component X (replace me with your component name)
- What is this component's SCI score?
- Describe this component
- The data used to calculate SCI were:
  - [ ] Total Carbon
    - explain where you sourced your C values from and describe any models used to turn them into SCI 
  - [ ] O and M
    - explain where you sourced O and M and describe any models used to turn them into SCI 
  - [ ] E, I and M
    - explain where you sourced E, I and M and describe any models and coefficients you applied to turn them into SCI.
    - specify whether I was marginal or average, regional or global and give details.

- [ ] Aggregation was done by averaging SCI values over time (if you have time series data) and summing SCI values across components

- List out the key coefficients used in the model pipeline for this component:

| Coefficient name | Brief description      | Value | Unit    |
| ---------------- | ---------------------- | ----- | ------- |
| example          | used to convert x to y | 3     | kWh/GBh |
