# SCI certification questionnaire

Please answer the following questions with as much detail as possible.
All tickboxes must be checked in order for the submission to proceed. You can optionally add extra information beneath the tickboxes if you wish.

## Metadata

- **What is the measurement name?**
  
  *The name must match the title of the submitted IMP*

- **Please describe the system under measurement**
  
  *Please describe the system in terms that software generalists can understand. Please be very specific about version numbers, deployment details etc.*

- **What was the functional unit?**
  
  *Please describe the functional unit, R, used in your SCI calculation*

- **Why was this functional unit chosen?**
  
  *Please explain why your chosen functional unit is appropriate for your application*

- **What was the source of the functional unit data?**
  
  *Where did you source functional unit data from, e.g. was it an API, a published dataset, an estimate...*

- **What is the time granularity of the raw data used in this IMP?**
  
  *Describe the temporal resolution of your datasets - was it daily, 5 minute, daily, annual..etc? If the granularity of the raw data varied between components, please provide details*

- **What is the total timespan covered by your measurement?**

    *e.g. if your measurements cover 2025-04-01 to 2025-04-02 then the total timespan is 1 day 

- **Please provide a URL for the documentation for the software under measurement**

    *If you do not have open documentation, provide a link to to a website, blog or social media account where you share information about your software application*

- **Please provide the name of the accountable person for this measurement**

    *This will ideally be your name as the submitting person but can be your title or team name if necessary*

## SCI calculation

For definitions of E, I, M, O and R, you can refer back to the SCI specification here: https://sci.greensoftware.foundation/

**For each component:**

- [ ] **There is an O value in units of gCO2e**
- [ ] **O represents operational carbon, where O is derived rather than measured, it is derived as the product of E and I**
- [ ] **E is operational energy in units of kWh**
- [ ] **I is carbon intensity of the electricity used, in units of gCO2e/kWh**
- [ ] **There is an M value in units of gCO2e**
- [ ] **M represents the embodied carbon**
- [ ] **There is a functional unit, R**
- [ ] **SCI is calculated as (O + M) / R**
- [ ] **Aggregation is done by summing SCI values across all components**

## Data and model pipelines

- [ ] **The raw data in the manifest are the lowest level (closest to direct measurements of power consumption) that are available.**
  
  *This indicates that you calculated your SCI score using the least-abstracted data source and did not fall back to proxies, analogs or estimates unneccessarily*

- **Please state whether I (grid intensity) values are marginal or average. What was the source?**
	
  *Where did you gather grid intensity valuyes from? Please provide a link to any relevant documentation (e.g. EletricityMaps, WattTime, etc) and state whether you used marginal or average values - was a single value used to cover your entire measurement period or did it vary over time? If it varied over time, at what granularity?*

- **Please state whether I (grid intensity) values are location-specific (country, region, town, site) or globally averaged.**
  
  *What region do your grid intensity values cover?*

- **For each component in your manifest, please describe how you gathered E values. Please make clear whether E was directly measured, or calculated from proxies, analogs or heuristics.**
  
  *If your E values were directly measured please say so. Otherwise, please state whether the you applied models to some proxy observation(s) (e.g. CPU util, mem-util and data ingress/egress), analogs (measuring some other system that is assumed to be the same as your test system) or other estimates.*

- **For each unique observation, please describe the pipeline of models that was used to turn it into carbon**

  *Describe the sequence of operations that took you from an observation to an E value.*

- **For the coefficients applied in your model pipelines, please provide citations or, if new, a brief rationale.**

  *For example, if you chose to use a previously published coefficient for energy used to transfer data over the internet, describe the coefficient, provide a citation and describe why you chose to use it over other available options.*

- **Please describe any data that was redacted from the IMP and justify the reasons.**

  *If you omitted any data, please explain why - for example perhaps you did not want to share precise grid intensity data to protect the locations of your data centers*

- **For each observation, provide error or uncertainty estimates if possible.**

  *If you have ranges, uncertainty estimates, confidence intervals or any other quantification of measurement error for your observations of coefficients, please describe here.*

## Inventory Completeness

- [ ] The system architecture is appropriately captured using discrete components.
  
  *This indicates that you have not knowingly omitted any components that significantly contribute to your SCI score*

- Please list the components in your tree

- For any omitted components, please provide a justification

  *If you have omitted components, please show that they do not significantly influence your SCI score, could not be expressed in your chosen functional unit or were otherwise impractical to include.*
