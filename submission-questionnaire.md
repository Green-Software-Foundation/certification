# SCI Certification Questionnaire

## Metadata

### What is the measurement name?

*The name must match the title of the submitted IMP*

### What is the SCI score?

*Provide the overall SCI score for the entire system*

### Please describe the system in terms that software generalists can understand. Please be very specific about version numbers, deployment details etc.

### Please describe the functional unit, R, used in your SCI calculation

### Why was this functional unit chosen?

*Please explain why your chosen functional unit is appropriate for your application*

*What was the source of the functional unit data?*

### What is the total timespan covered by your measurement?

*e.g. if your measurements cover 2025-04-01 to 2025-04-02 then the total timespan is 1 day*

### Please provide a URL for the documentation for the software under measurement

*If you do not have open documentation, provide a link to to a website, blog or social media account where you share information about your software application*

### Please provide the name of the accountable person for this measurement

*This will ideally be your name as the submitting person but can be your title or team name if necessary*

### Please list the components in your tree

*List all the components in your tree. Use indentation to indicate component heirarchy*

### Did you undertake any assessment of SCI score error?

*If you can provide any quantification of the estimate uncertainty, please describe here*

## SCI calculation

*You can refer back to the SCI specification here: https://sci.greensoftware.foundation/*

*Answer the following questions **FOR EVERY COMPONENT IN YOUR TREE**:*
*Add an H3 (###) for each component in your tree, and answer the questions in normal text underneath each heading*

e.g.

```
### Component-name
- what is this component's SCI score?
31.5
...
```

- What is this components's SCI score?
- Where was your functional unit data sourced from?
- How was your SCI score calculated?
-   R values were sourced from:
    - [ ] An API
      - describe and provide link to docs
    - [ ] A dataset
      - describe and provide link to dataset
    - [ ] A published value
      - describe and provide link
    - [ ] An estimate
      - describe how the estimate was made
  
- What is the time granularity of the raw data used in this IMP?
  
- If your SCI was computed from other SCI scores, please provide details here. Include:
  - what were the sources for the SCI scores?
  - what units were they in when you retrieved them?
  - what models did you use to express the initial SCI scores into your chosen functional unit?

- If your SCI was computed from E, I and M values:
  - How did you source E values?
    - [ ] Direct measurement
      - describe the measurement setup
    - [ ] Proxy measurement
      -  describe the proxy measurements and the models applied to turn them into E values
    - [ ] Analogue measurements
      -  describe the analogue system and the measurement setup
    - [ ] Estimate or literature values
      - Describe, with citations and/or links

  - Where did you source your I value?
  - Was your I value marginal or average? Please give details.
  - Was your I value regional or global? Please give details.
  
  - How did you source M data?
  - What were the observations you made for E?
    - [ ] Direct measurement
      - describe the measurement setup
    - [ ] Proxy measurement
      -  describe the proxy measurements and the models applied to turn them into E values
    - [ ] Analogue measurements
      -  describe the analogue system and the measurement setup
   -  [ ] Manufacturer's data sheet
      -  provide link
    - [ ] Estimate or literature values
      - Describe, with citations and/or links


- List out the key coefficients used in the model pipeline for this component:

|Coefficient name | Brief description | Value |
|---|---|---|
|example | used to convert x to y | 3 |


- [ ] SCI is calculated as (O + M) / R

- [ ] Aggregation was done by averaging SCI values over time (if you have time series data)
