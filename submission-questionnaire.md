# SCI Certification Questionnaire

## Metadata

### What is the measurement name?

*The name must match the title of the submitted IMP*

### What is the SCI score?

*Please describe the system under measurement*

### Please describe the system in terms that software generalists can understand. Please be very specific about version numbers, deployment details etc.

*What was the functional unit?*

### Please describe the functional unit, R, used in your SCI calculation

*Why was this functional unit chosen?*

### Please explain why your chosen functional unit is appropriate for your application

*What was the source of the functional unit data?*

### Where did you source functional unit data from, e.g. was it an API, a published dataset, an estimate...

*What is the time granularity of the raw data used in this IMP?*

### Describe the temporal resolution of your datasets - was it daily, 5 minute, daily, annual..etc? If the granularity of the raw data varied between components, please provide details

*What is the total timespan covered by your measurement?*
*e.g. if your measurements cover 2025-04-01 to 2025-04-02 then the total timespan is 1 day*

### Please provide a URL for the documentation for the software under measurement

*If you do not have open documentation, provide a link to to a website, blog or social media account where you share information about your software application*

### Please provide the name of the accountable person for this measurement

*This will ideally be your name as the submitting person but can be your title or team name if necessary*

### Please list the components in your tree

*List all the components in your tree. Use indentation to indicate component heirarchy*

## SCI calculation

*For definitions of E, I, M, O and R, you can refer back to the SCI specification here: https://sci.greensoftware.foundation/*

*Answer the following questions **FOR EVERY COMPONENT IN YOUR TREE**:*

- [ ] There is an O value in units of gCO2e
  O was sourced from:
    - [ ] Direct measurement of power consumption (describe)
    - [ ] A proxy (describe) 
    - [ ] An analogue (describe)
    - [ ] A published value (describe)
    - [ ] An estimate (describe)
    - [ ] Calculated from E and I

- [ ] E is operational energy in units of kWh
    E was sourced from:
    - [ ] Direct measurement of power consumption (describe)
    - [ ] A proxy or proxies (describe) 
    - [ ] What models were used to convert your proxy measurements? (describe)
    - [ ] An analogue (describe)
    - [ ] A published value (describe)
    - [ ] An estimate (describe)

- [ ] I is carbon intensity of the electricity used, in units of gCO2e/kWh
  I was sourced from:
    - [ ] An API (describe) 
    - [ ] A dataset (describe)
    - [ ] A published value (describe)
    - [ ] An estimate (describe)
	I was:
    - [ ] Averaged over time (describe)
    - [ ] Marginal (describe)
    - [ ] Global
    - [ ] Regional (describe)

- [ ] There is an M value representing embodied carbon in units of gCO2e
  M was sourced from:
    - [ ] A PCF or other LCA assessment (describe) 
    - [ ] A manufacturer’s data sheet for the specific hardware
    - [ ] Manufacturer’s data sheet for analogue hardware
    - [ ] A published value (describe)
    - [ ] A model (describe)
    - [ ] An estimate (describe)

- [ ] There is a functional unit, R
  R values were sourced from:
    - [ ] An API (describe) 
    - [ ] A dataset (describe)
    - [ ] A published value (describe)
    - [ ] An estimate (describe)

- [ ] SCI is calculated as (O + M) / R

- [ ] Aggregation is done by summing SCI values across all components
