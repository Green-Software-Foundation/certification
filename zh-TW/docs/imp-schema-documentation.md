> **語言：** [English](../../docs/imp-schema-documentation.md) | 繁體中文（台灣）
>
> 本文件為英文原文之翻譯，僅供參考。若中文譯本與英文原文有任何出入，概以英文原文為準。

# Impact Manifest Protocol (IMP) Schema 說明文件

## 1.0 版 GSF SCI 自我認證計畫

---

## 目錄

1. [概述](#概述)
2. [Schema 結構](#schema-結構)
3. [核心欄位參考](#核心欄位參考)
4. [揭露章節](#揭露章節)
5. [驗證規則](#驗證規則)
6. [各領域範例](#各領域範例)
7. [JSON Schema 定義](#json-schema-定義)

---

## 概述

**Impact Manifest Protocol（IMP）** 是一種結構化的 YAML/JSON 格式，用於記錄軟體碳強度（Software Carbon Intensity，SCI）的計算內容。它是 GSF SCI 自我認證計畫（Self-Certification Program）的一種**選用的替代提交方式**。

### 目的

- **標準化**：為以程式方式提交的申請資料提供一致的格式
- **透明度**：以機器可讀的格式完整記錄所有必要的揭露（disclosure）資訊
- **自動化**：支援自動化的提交流程（pipeline）及 CI/CD 整合
- **互通性**：與 GSF Impact Framework 及其他工具相容

### 何時使用 IMP 格式

**IMP 檔案為選用。** 大多數申請者會使用提交入口網站中的網頁表單介面。

**若您符合下列情況，請使用 IMP 檔案：**
- 擁有自動化的 SCI 計算工具或流程
- 希望將提交作業整合至 CI/CD 工作流程
- 偏好以程式方式準備申請資料
- 正在開發會產生 SCI 計算結果的工具

**若您符合下列情況，請使用網頁表單：**
- 以手動方式提交（最常見）
- 偏好有引導、逐步進行的介面
- 不具備技術性檔案格式的專業知識

### 格式選項

- **YAML**（建議）：人類易讀，支援註解
- **JSON**：便於機器處理，與 API 相容

### 檔案命名慣例

`{organization}-{software}-{version}-sci.{yml|json}`

範例：
- `acme-api-service-v1-sci.yml`
- `university-ml-training-2025-sci.json`

---

## Schema 結構

### 整體結構

```yaml
# 中繼資料區段
name: string (required)
description: string (required)
tags: object (required)
  kind: "sci" (required)
  category: string (required)

# 提交資訊
submission:
  applicant: object (required)
  software: object (required)
  measurement_period: object (required)

# 軟體邊界
boundary:
  included: array (required)
  excluded: array (required)
  shared_infrastructure: array (optional)

# 功能單位
functional_unit:
  unit: string (required)
  rationale: string (required)
  measurement_method: string (required)
  conversion_factors: array (optional)

# SCI 計算
calculation:
  score: object (required)
  energy: object (required)
  carbon_intensity: object (required)
  embodied_emissions: object (required)

# 方法論與資料來源
methodology:
  approach: string (required)
  assumptions: array (required)
  limitations: array (required)
  data_sources: array (required)

# 基準比較（選填）
baseline:
  baseline_score: object (optional)
  actions_taken: array (optional)
  explanation: string (optional)

# Impact Framework 設定（供自動化使用）
initialize:
  plugins: object (optional)

tree:
  children: object (optional)
```

---

## 核心欄位參考

### 1. 中繼資料區段

#### `name` (string, 必填)
- **說明**：此計算的唯一識別碼
- **格式**：kebab-case，由英數字與連字號組成
- **範例**：`"ecommerce-api-service-sci"`
- **驗證**：3-100 個字元，且在同一申請者之下必須唯一

#### `description` (string, 必填)
- **說明**：人類易讀的軟體系統與計算摘要
- **格式**：支援多行 Markdown
- **內容應包含**：
  - 軟體系統簡述
  - 基礎設施概覽
  - 量測期間摘要
  - 預期／計算結果
- **範例**：
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

#### `tags` (object, 必填)
- **說明**：用於分類與歸類的中繼資料
- **必填欄位**：
  - `kind`：SCI 計算一律為 `"sci"`
  - `category`：領域類別（請見下方類別列表）
- **選填欄位**：
  - `domain`：特定產業領域
  - `environment`：正式環境（production）、預備環境（staging）、開發環境（development）
  - `cloud_provider`：AWS、GCP、Azure、地端（on-premise）、混合（hybrid）
  - `region`：地理區域
- **範例**：
```yaml
tags:
  kind: sci
  category: api-service
  domain: e-commerce
  environment: production
  cloud_provider: aws
  region: us-east-1
```

**標準類別**：
- `api-service`：REST/GraphQL API、微服務
- `web-application`：Web 應用程式、單頁應用程式（SPA）
- `mobile-app`：iOS、Android 應用程式
- `ml-training`：機器學習模型訓練
- `ml-inference`：ML 模型服務／推論
- `data-processing`：ETL、批次處理
- `streaming`：即時資料串流
- `database`：資料庫服務
- `cdn`：內容傳遞網路
- `other`：其他類別（請於 domain 標籤中說明）

---

### 2. 提交資訊

#### `submission` (object, 必填)

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

**欄位詳細說明**：

- **applicant.organization**：法人實體或個人名稱
- **applicant.contact_email**：必須為有效的電子郵件地址，用於寄送通知
- **software.name**：軟體系統的正式名稱
- **software.version**：語意化版本號（Semantic Versioning）或其他識別碼
- **measurement_period.start_date**：ISO 8601 格式（例如 `"2025-01-01"`）
- **measurement_period.end_date**：必須晚於 start_date
- **measurement_period.duration_hours**：計算出的期間長度，供驗證使用
- **submission_date**：提交日期（由入口網站自動填入）

**範例**：
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

### 3. 軟體邊界

#### `boundary` (object, 必填)

定義 SCI 計算中納入與排除的項目，也就是軟體邊界（software boundary）。

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

**欄位詳細說明**：

- **included**：明確納入邊界的元件（component）陣列
  - `component`：元件的名稱／識別碼
  - `description`：此元件的用途
  - `justification`：納入的理由（具營運控制權、具重大影響）

- **excluded**：明確排除的元件陣列（必須附上理由！）
  - `component`：元件的名稱／識別碼
  - `description`：此元件的用途
  - `rationale`：排除的理由（不在控制範圍內、影響不顯著、屬於獨立服務）

- **shared_infrastructure**：與其他系統共用的元件，即共用基礎設施（shared infrastructure）
  - `component`：共用資源的名稱
  - `allocation_method`：使用量的分攤方式（依時間、依資源占比等）
  - `allocation_percentage`：分攤給本軟體的百分比

**範例**：
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

### 4. 功能單位

#### `functional_unit` (object, 必填)

定義 SCI 計算所使用的量測單位，即功能單位（functional unit，R）。

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

**欄位詳細說明**：

- **unit**：人類易讀的功能單位（例如 「API requests」、「user-months」）
- **unit_symbol**：簡短符號（例如 「requests」、「users」、「training-runs」）
- **rationale**：選擇此單位的理由（會隨使用量增減、能代表所提供的價值）
- **measurement_method**：單位的計數方式（應用程式日誌、遙測資料等）
- **total_units**：量測期間內的單位總數
- **conversion_factors**：所套用的任何換算（選填）

**各類別的標準功能單位**：

| 類別 | 常見單位 | 範例 |
|----------|--------------|---------|
| API 服務 | 請求數、API 呼叫次數 | 「per 1,000 API requests」 |
| Web 應用程式 | 頁面瀏覽次數、使用者工作階段 | 「per 1,000 page views」 |
| 行動應用程式 | 使用者月數（user-month）、活躍使用者 | 「per user-month」 |
| ML 訓練 | 訓練執行次數、訓練週期（epoch） | 「per training run」 |
| ML 推論 | 預測次數、推論次數 | 「per 1,000 predictions」 |
| 資料處理 | 作業數、處理的紀錄筆數 | 「per processing job」 |
| 串流 | 串流時數、事件數 | 「per million events」 |

**範例**：
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

### 5. SCI 計算

#### `calculation` (object, 必填)

核心 SCI 計算公式：`SCI = (E × I + M) / R`

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

#### 5.1 分數

```yaml
score:
  value: 349.63
  unit: "gCO2eq per 1,000 API requests"
  formula: "SCI = (E × I + M) / R = (46.01 × 340 + 96,574.9) / 45,000 × 1,000"
```

**驗證**：
- 必須與依 E、I、M、R 計算出的數值相符，容許誤差為 1% 以內
- 單位中必須包含功能單位

---

#### 5.2 能源消耗（E）

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

**驗證規則**：
- 各元件能源消耗總和 × PUE 必須等於能源消耗總值
- 所有元件都必須附有資料來源
- PUE 必須 ≥1.0（常見範圍：1.1-1.5）

---

#### 5.3 碳強度（I）

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

**多區域系統**：
```yaml
carbon_intensity:
  value: 410  # 加權平均值
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

**驗證規則**：
- 碳強度（carbon intensity）必須為正值，且通常 < 2000 gCO2eq/kWh
- 必須指明所在地點
- 資料來源必須包含年份（以最近 3 年內為佳）
- 若採加權計算：各區域百分比總和必須為 100%

---

#### 5.4 隱含排放（M）

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
      expected_lifespan_hours: 35040  # 4 年
      time_reserved_hours: 720  # 量測期間
      resource_share: 1.0  # 專用
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

**共用資源**：
```yaml
hardware_components:
  - name: "Shared Kubernetes Cluster Node"
    type: "n1-standard-16 (16 vCPUs, 60 GB RAM)"
    embodied_total: 2000000  # 整台伺服器的 gCO2eq
    expected_lifespan_hours: 35040  # 4 年
    time_reserved_hours: 720  # 30 天
    resource_share: 0.125  # 使用 16 顆 vCPU 中的 2 顆
    allocated_emissions: 5142.9
    calculation: "2,000,000 × (720/35,040) × (2/16) = 5,142.9 g"
    data_source: "GCP Embodied Emissions Data"
```

**驗證規則**：
- 各項分攤排放的總和必須等於 M 的總值
- 所有硬體元件都必須包含：
  - 隱含排放總量（TE）
  - 預期使用壽命（EL）
  - 保留時間（TiR）
  - 資源占比（RR/ToR，如適用）
- 常見的預期使用壽命：伺服器為 3-5 年，行動裝置為 2-4 年
- 隱含排放（embodied emissions）僅在有明確理由時才可為零

---

### 6. 方法論與資料來源

#### `methodology` (object, 必填)

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

**範例**：
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

### 7. 基準比較（選填）

#### `baseline` (object, 選填)

適用於呈報相較先前量測結果有所改善的申請資料。

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

**範例**：
```yaml
baseline:
  exists: true

  baseline_score:
    value: 5.12
    unit: "kgCO2eq per training run"
    measurement_date: "2024-12-01"
    reference: "https://badges.greensoftware.foundation/awards/sci/example-neuralcast-llm-inference"

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

## 驗證規則

### 結構驗證

1. **Schema 符合性**
   - 所有必填欄位皆已提供
   - 資料型別正確
   - YAML/JSON 語法有效

2. **格式驗證**
   - 日期採 ISO 8601 格式
   - URL 有效
   - 電子郵件地址有效
   - 數值為正值（隱含排放則為 ≥0）

### 完整性驗證

3. **必要揭露項目**
   - 分數值及其單位
   - 至少一個納入邊界的元件
   - 所有排除的元件皆附有理由
   - 已定義功能單位及其量測方式
   - E、I、M 皆已記錄並附有資料來源
   - 已指明量測期間

4. **資料來源要求**
   - 每個計算元件都有明確的資料來源
   - 資料來源須註明類型（量測、計算、資料庫、係數）
   - 電網資料來源須包含年份

### 邏輯驗證

5. **計算一致性**
   - O = E × I（容許誤差 1% 以內）
   - SCI = (O + M) / R（容許誤差 1% 以內）
   - 各元件能源消耗總和 × PUE = 能源消耗總值
   - 各項分攤隱含排放的總和 = M 的總值

6. **日期邏輯**
   - 量測的 start_date < end_date
   - 量測期間必須已經過去
   - 提交日期 ≥ 量測結束日期
   - 資料來源年份合理（以最近 5 年內為佳）

7. **數值合理性**
   - 碳強度：0 < I < 2000 gCO2eq/kWh（常見情況）
   - PUE：1.0 ≤ PUE ≤ 3.0（常見範圍：1.1-1.5）
   - 預期使用壽命：大多數硬體為 2-7 年
   - 資源占比：0 < RR/ToR ≤ 1.0

### 品質檢查（不會阻擋提交，但可能觸發人工審查）

8. **揭露品質**
   - 已列出隱含排放（M > 0）
   - 已記錄假設
   - 已說明限制
   - 排除項目附有清楚的理由
   - 資料來源具體明確（而非籠統帶過）

9. **離群值偵測**
   - SCI 分數落在該類別的預期範圍內
   - 碳強度與所在地點的預期範圍相符
   - 能源消耗相對於基礎設施規模而言合理

---

## 各領域範例

### API 服務

參見：`example-1-api-service-final.yml`
- **功能單位**：每 1,000 次 API 請求
- **主要特性**：持續運作，依請求量擴展
- **能源量測**：雲端服務供應商遙測資料
- **隱含排放**：伺服器基礎設施分攤

### ML 訓練

參見：`example-2-ml-training-final.yml`
- **功能單位**：每次訓練執行
- **主要特性**：獨立的批次作業，GPU 運算密集
- **能源量測**：直接監測 GPU 功耗
- **隱含排放**：GPU 及伺服器分攤

### 行動應用程式

參見：`example-3-mobile-app-final.yml`
- **功能單位**：每使用者月（user-month）
- **主要特性**：用戶端執行，裝置種類多元，使用者地理分布廣泛
- **能源量測**：裝置端檢測與效能剖析
- **隱含排放**：以資源占比方法論進行裝置分攤

---

## JSON Schema 定義

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

*（完整的 JSON Schema 另以獨立檔案提供：`imp-schema.json`）*

---

## 其他資源

- **SCI 規格**：https://sci.greensoftware.foundation/
- **Impact Framework**：https://if.greensoftware.foundation/
- **GSF SCI Data**：https://github.com/Green-Software-Foundation/sci-data
- **證書入口網站**：https://badges.greensoftware.foundation
- **問題洽詢**：sci-certification@greensoftware.foundation

---

## 版本紀錄

- **v1.0.0**（2026-01）：GSF SCI 自我認證計畫首次發布版本
