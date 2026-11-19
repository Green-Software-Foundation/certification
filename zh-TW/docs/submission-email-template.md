> **語言：** [English](../../docs/submission-email-template.md) | 繁體中文（台灣）
>
> 本文件為英文原文之翻譯，僅供參考。若中文譯本與英文原文有任何出入，概以英文原文為準。

# SCI 自我認證申請資料電子郵件範本

> **重要：申請資料本身必須以英文撰寫。**
>
> - 寄出的電子郵件內容（包括您填寫的所有答案）必須全部使用英文。
> - 範本中的標題、粗體欄位標籤、表格欄位標題，以及「To」行與「Subject」行，必須依英文原樣逐字複製，不得翻譯、改寫或更動任何字元（包括其中的破折號與連字號）。badges.greensoftware.foundation 會比對這些英文標籤來解析您的揭露內容。
> - 本範本中所有中文內容（包括斜體輔助說明、中文說明文字與中文譯文）僅供理解，寄出前請全部刪除。

如要提交軟體碳強度（Software Carbon Intensity，SCI）自我認證申請資料，請將分隔線以下的所有內容複製到一封新的電子郵件，收件人為 **sci-certification@greensoftware.foundation**，並使用下方所示的主旨。將所有 [方括號] 內的預留文字替換為您的資訊，並在填寫過程中刪除所有*斜體*輔助說明。

**格式：**您可以直接在電子郵件內文中作答，或附加文件（PDF、Word、Markdown 或純文字）。若使用附件，請在內文中註明檔案名稱，以便審查人員對照，例如：*「See attached: acme-api-boundary.pdf」*。

**本申請資料即為您的公開揭露。**若獲核准，將依原樣發布至 `greensoftware-foundation/certification` GitHub 儲存庫（您的聯絡電子郵件會被遮蔽，並加上證書詮釋資料標頭）。請據此撰寫，因為不會另有揭露步驟。

**請完全依照原樣保留標題、粗體欄位標籤與表格欄位標題。**badges.greensoftware.foundation 上的證書頁面會比對這些標籤來讀取您已發布的揭露內容，因此若重新命名、合併或移除這些標籤，相關欄位將無法顯示在您的標章頁面上。如需補充細節，請在任一欄位下方以附註或額外表格的方式加入，而非更改標籤。

---

**To:** sci-certification@greensoftware.foundation

*（收件人：請勿更改此電子郵件地址）*

**Subject:** "SCI Self-Certification - [Your Organization Name] - [Your Software Name]"

*（主旨：請保留英文原樣，只將方括號內容替換為您的組織名稱與軟體名稱，例如 "SCI Self-Certification - Acme Corporation - Acme API"）*

---

## Section 1 — About You and Your Software

*（第 1 節：關於您與您的軟體）*

**Organization name:** *（組織名稱）* [e.g. Acme Corporation]

**Contact name:** *（聯絡人姓名，請填寫全名）* [Full name]

**Contact email:** *（聯絡人電子郵件，發布時會被遮蔽）* [e.g. jane.smith@acme.com]

**Software name:** *（軟體名稱：受量測的應用程式或服務名稱）* [Name of the application or service being measured]

**Software version:** *（軟體版本：例如版本號，或部署的 commit 與日期）* [e.g. v2.1.0, or "commit abc123 deployed 2026-01-15"]

**Software URL:** *（軟體網址：若為公開，請提供應用程式、文件或程式碼儲存庫的連結；否則填寫 "Internal"）* [Link to application, docs, or repository if public, or "Internal"]

**Software description:** *（軟體說明）*

[2-3 sentences: what the software does, tech stack, where it runs]

*（請以英文撰寫 2 到 3 句：軟體的功能、技術堆疊，以及執行環境）*

---

## Section 2 — Your SCI Score

*（第 2 節：您的 SCI 分數）*

**Your SCI score:** *（您的 SCI 分數：數值、單位，以及每一功能單位）* [Number] [unit] per [functional unit]

*範例：349.6 gCO2eq per 1,000 API requests（每 1,000 次 API 請求 349.6 gCO2eq）*

**Measurement start date:** *（量測開始日期）* [YYYY-MM-DD]

**Measurement end date:** *（量測結束日期）* [YYYY-MM-DD]

*範例：2026-01-01 與 2026-03-31。即使是單日基準測試，也請將兩個日期分別填入各自的欄位。*

---

## Section 3 — Software Boundary

*（第 3 節：軟體邊界（software boundary））*

### Included Components

*（納入的元件（component））*

| Component | Description |
|-----------|-------------|
| [e.g. Application servers] | [e.g. 2x EC2 t3.medium running Node.js] |
| [e.g. Database] | [e.g. RDS PostgreSQL db.t3.medium] |

*（表格欄位：Component＝元件；Description＝說明）*

### Excluded Components

*（排除的元件）*

| Component | Reason for exclusion |
|-----------|----------------------|
| [e.g. CDN] | [e.g. Separate service outside operational boundary] |

*（表格欄位：Component＝元件；Reason for exclusion＝排除理由）*

*每一項排除都必須提供針對該系統的具體理由。僅寫「Not included」或「out of scope」並不足夠。*

### Shared infrastructure

*（共用基礎設施）*

[Describe any included component that runs on shared or multi-tenant infrastructure and how its energy and embodied emissions were allocated to your software. If nothing is shared, say so and explain why, e.g. "No included component runs on shared infrastructure; all compute is on dedicated hosts."]

*（請以英文說明：任何在共用或多租戶基礎設施上執行的納入元件，以及其能源消耗與隱含排放如何分配給您的軟體。若沒有任何共用情形，請明確說明並解釋原因，例如 "No included component runs on shared infrastructure; all compute is on dedicated hosts."（沒有任何納入元件在共用基礎設施上執行，所有運算皆位於專用主機）。）*

---

## Section 4 — Functional Unit (R)

*（第 4 節：功能單位（functional unit，R））*

**What is your functional unit?** *（您的功能單位是什麼？）*

[e.g. 1,000 API requests]

**Why did you choose this unit?** *（您為何選擇此單位？）*

[e.g. Primary measure of how the service delivers value]

*（例如：這是衡量服務如何提供價值的主要指標）*

**How did you count or measure the total units?** *（您如何計數或量測單位總數？）*

[e.g. nginx access logs, validated against CloudWatch]

*（例如：nginx 存取紀錄，並以 CloudWatch 交叉驗證）*

**Total units in measurement period:** *（量測期間內的單位總數）* [e.g. 45,000,000 requests]

---

## Section 5 — Energy (E) and Carbon Intensity (I)

*（第 5 節：能源消耗（E）與碳強度（I））*

### Energy

*（能源消耗）*

**Total energy consumed:** *（總能源消耗）* [e.g. 46.01 kWh]

**PUE applied:** *（採用的 PUE 值；若使用雲端服務供應商，可填寫 "N/A, cloud provider"）* [e.g. 1.2, or "N/A, cloud provider"]

Energy breakdown

*（能源消耗明細）*

| Component | Duration | Power (incremental) | Energy after PUE (kWh) | How calculated |
|-----------|----------|---------------------|------------------------|----------------|
| [e.g. Application servers] | [e.g. 720 h] | [e.g. 30 W avg] | [e.g. 21.6] | [e.g. AWS CloudWatch CPU metrics -> TDP model] |
| [e.g. Database] | [e.g. 720 h] | [e.g. 20 W avg] | [e.g. 14.4] | [e.g. RDS CloudWatch metrics] |

*（表格欄位：Component＝元件；Duration＝持續時間；Power (incremental)＝功率（增量）；Energy after PUE (kWh)＝套用 PUE 後的能源消耗（kWh）；How calculated＝計算方式）*

### Carbon intensity

*（碳強度）*

**Carbon intensity value:** *（碳強度數值）* [e.g. 340 gCO2eq/kWh]

**Location(s):** *（地點，例如雲端區域與所在地）* [e.g. AWS us-east-1 (Virginia, USA)]

**Approach:** *（方法：請以英文填寫 Location-based（地點基準法）或 Market-based（市場基準法））* [Location-based / Market-based]

**Data source + year:** *（資料來源與年份）* [e.g. EPA eGRID 2023, SRVC subregion]

*若涉及多個區域，請為每個區域新增一列：*

| Region | Component | gCO2eq/kWh | Source |
|--------|-----------|------------|--------|
| [e.g. us-east-1] | [e.g. Application servers] | [e.g. 340] | [e.g. EPA eGRID 2023] |

*（表格欄位：Region＝區域；Component＝元件；gCO2eq/kWh＝每 kWh 的 gCO2eq；Source＝來源）*

---

## Section 6 — Embodied Emissions (M)

*（第 6 節：隱含排放（M））*

**Total embodied emissions allocated to this measurement:** *（分配至本次量測的隱含排放總量）* [e.g. 96,574.9 gCO2eq]

**Allocation methodology:** *（分配方法論）* [e.g. SCI time-share allocation (M = TE x (TiR / EL) x RS), using Cloud Carbon Footprint embodied coefficients]

*若 M = 0，請在分配方法論中說明原因（例如 "Pure SaaS, no hardware under our operational control"，即純 SaaS，沒有在我方營運控制下的硬體），並略過下方表格。*

Hardware component breakdown

*（硬體元件明細）*

| Hardware component | Allocated M (gCO2eq) | Data source |
|--------------------|----------------------|-------------|
| [e.g. App server, EC2 t3.medium] | [e.g. 24,658] | [e.g. Cloud Carbon Footprint] |

*（表格欄位：Hardware component＝硬體元件；Allocated M (gCO2eq)＝分配的 M（gCO2eq）；Data source＝資料來源）*

---

## Section 7 — Methodology and Calculation

*（第 7 節：方法論與計算）*

**Overall approach:** *（整體方法：請以英文填寫 Measurement（量測法）、Calculation（計算法）或 Hybrid（混合法））* [Measurement / Calculation / Hybrid]

**Describe your methodology:** *（請說明您的方法論）*

[Paragraph or bullet points: what tools/models you used, how you gathered data, key decisions you made. If different methods were used for different components, please give component-wise descriptions]

*（請以英文段落或條列說明：使用了哪些工具或模型、如何蒐集資料，以及您做出的關鍵決策。若不同元件採用不同方法，請逐一說明各元件）*

**Show your calculation:** *（請列出您的計算過程）*

```
E x I = [E] x [I] = [result] gCO2eq
M = [M] gCO2eq
R = [total units]

SCI = (E x I + M) / R = [result] [unit] per [functional unit]
```

**Assumptions and limitations:** *（假設與限制）*

| Assumption or limitation | Justification or mitigation |
|--------------------------|-----------------------------|
| [e.g. Server avg power draw is 15W] | [e.g. Based on AWS TDP at 40% avg utilization] |
| [e.g. No direct hardware power metering] | [e.g. Used cloud telemetry as proxy] |

*（表格欄位：Assumption or limitation＝假設或限制；Justification or mitigation＝理由或緩解措施）*

*請至少列出一項具體的假設與一項具體的限制。*

---

## Attestation

*（聲明書）*

*請依原樣複製下方英文聲明書，並填寫簽名欄位。*

**Self-Certification Attestation for ISO/IEC 21031:2024**

By submitting this application, I hereby:

1. **DECLARE** that the submitted SCI calculation conforms to all requirements of ISO/IEC 21031:2024 (Software Carbon Intensity).

2. **ATTEST** that the calculation was performed in good faith using appropriate methodologies and data sources consistent with ISO/IEC 21031:2024.

3. **ACKNOWLEDGE** that this is self-certification under the ISO/IEC 17050 framework and does not constitute third-party certification or independent validation by the Green Software Foundation.

4. **MAINTAIN** supporting documentation for all calculations, methodologies, data sources, and assumptions for a minimum of 3 years and will provide upon reasonable request.

5. **ACCEPT RESPONSIBILITY** for the accuracy, completeness, and conformity of the calculation and disclosure with ISO/IEC 21031:2024.

6. **AGREE** to promptly correct any errors or inaccuracies if identified through community review or self-discovery.

7. **UNDERSTAND** that GSF's role is limited to verifying disclosure completeness, not validating calculation accuracy or ISO/IEC 21031:2024 conformity.

8. **AGREE** to use the certificate and badge only as permitted in the GSF Badge Usage Guidelines, including always using the "self-certified" qualifier when claiming ISO/IEC 21031:2024 conformity.

9. **ACKNOWLEDGE** that false or misleading self-certification may result in certificate revocation, public notice, and potential legal consequences.

10. **CONSENT** to public disclosure of the submitted information to enable community review and validation.

> **中文譯文，僅供理解，請簽署英文版本**
>
> **ISO/IEC 21031:2024 自我認證聲明書**
>
> 本人提交本申請，即在此：
>
> 1. **聲明**所提交之 SCI 計算符合 ISO/IEC 21031:2024（軟體碳強度）之所有要求。
> 2. **證明**該計算係本於善意，採用與 ISO/IEC 21031:2024 一致之適當方法論與資料來源進行。
> 3. **確認**此為依 ISO/IEC 17050 架構所進行之自我認證，並不構成第三方認證，亦不構成 Green Software Foundation 之獨立驗證。
> 4. **保存**所有計算、方法論、資料來源與假設之佐證文件至少 3 年，並將於合理要求時提供。
> 5. **承擔責任**，對計算及揭露之正確性、完整性，以及與 ISO/IEC 21031:2024 之符合性負責。
> 6. **同意**若經由社群審查或自行發現任何錯誤或不正確之處，將立即更正。
> 7. **瞭解** GSF 之角色僅限於確認揭露之完整性，並不驗證計算之正確性或與 ISO/IEC 21031:2024 之符合性。
> 8. **同意**僅依 GSF 標章使用準則（GSF Badge Usage Guidelines）所允許之方式使用證書與標章，包括在宣稱符合 ISO/IEC 21031:2024 時，一律使用「self-certified」（自我認證）限定詞。
> 9. **確認**不實或誤導之自我認證可能導致證書遭撤銷、公開公告，以及可能之法律後果。
> 10. **同意**公開揭露所提交之資訊，以供社群審查與驗證。

**Signature:** *（簽名）* ___________________

**Date:** *（日期）* ___________________

**Name and title:** *（姓名與職稱）* ___________________

**Organization:** *（組織）* ___________________

---

## Community Participation (Optional)

*（社群參與（選填））*

*以下項目完全為選填，不會影響您的申請或審查。您可以隨時寄電子郵件給我們以變更您的選擇。*

**May we feature your organisation?** *（我們可以介紹您的組織嗎？）*

我們維護一個公開的已認證組織頁面，以協助擴大 SCI 社群。若您選擇加入，您的組織名稱與標誌將與其他證書持有者一同顯示於我們的「Certified Organisations」（已認證組織）頁面。

- [ ] Yes — you may display our organisation name and logo on the GSF certified organisations page
- [ ] No thank you

*（選項：第一項為「是，您可以在 GSF 已認證組織頁面上顯示我們的組織名稱與標誌」；第二項為「不用，謝謝」。請保留英文選項，並以 [x] 勾選。）*

*若選擇「是」，請附上您的組織標誌（SVG 或 PNG，寬度至少 200px），或告訴我們可以在哪裡取得。*

**Would you participate in a blog post or case study?** *（您願意參與部落格文章或案例研究嗎？）*

我們很樂意與社群分享您的 SCI 量測歷程：您學到了什麼、哪些做法有效，以及遇到了哪些挑戰。

- [ ] Yes — we'd be open to participating in a blog post or case study
- [ ] No thank you

*（選項：第一項為「是，我們願意參與部落格文章或案例研究」；第二項為「不用，謝謝」。）*

**May we use your disclosure for downstream analysis?** *（我們可以將您的揭露內容用於後續分析嗎？）*

您已發布的揭露內容可能會被納入彙整分析、研究，以及由 AI 產生的綜合整理（例如基準比較報告、趨勢摘要，或永續工具的訓練資料）。您的揭露內容本來就已公開發布，但勾選此項即確認您同意以上述方式使用。

- [ ] Yes — you may use our published disclosure for downstream analysis, including AI syntheses
- [ ] No thank you

*（選項：第一項為「是，您可以將我們已發布的揭露內容用於後續分析，包括 AI 綜合整理」；第二項為「不用，謝謝」。）*

---

## Optional Attachments

*（選填附件）*

您可以附上佐證資料，例如包含詳細計算的試算表、Impact Framework manifest（清單檔）檔案（IMP/YAML），或公開文件的連結。我們鼓勵您提供，但並非必要：上方的問卷內容已經足夠。

---

## Submission Checklist

*（申請資料檢核表）*

- [ ] Section 1：組織與軟體資料
- [ ] Section 2：SCI 分數，包含單位與量測期間
- [ ] Section 3：納入與排除的元件，並附理由
- [ ] Section 4：功能單位，並附選擇理由與量測方式
- [ ] Section 5：能源消耗，並附各元件明細；碳強度，並附來源與年份
- [ ] Section 6：隱含排放，並附分配方法與明細（若為零，則附理由）
- [ ] Section 7：方法論、假設、限制，並列出計算過程
- [ ] Attestation（聲明書）：已簽名並註明日期
