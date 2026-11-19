> **語言：** [English](../../docs/badge-usage-guidelines.md) | 繁體中文（台灣）
>
> 本文件為英文原文之翻譯，僅供參考。若中文譯本與英文原文有任何出入，概以英文原文為準。

# GSF SCI 自我認證計畫：標章使用準則

## 版本 1.2：品牌與展示標準

---

## 目錄

1. [概述](#概述)
2. [標章規格](#標章規格)
3. [允許的使用方式](#允許的使用方式)
4. [必要說明文字](#必要說明文字)
5. [禁止的使用方式](#禁止的使用方式)
6. [展示範例](#展示範例)
7. [數位素材庫](#數位素材庫)
8. [合規與執行](#合規與執行)
9. [常見問題](#常見問題)
10. [附錄：標章使用檢核表](#附錄標章使用檢核表)
11. [聯絡與支援](#聯絡與支援)

---

## 概述

GSF SCI 自我認證標章（badge）是一種視覺標示，表示某組織已透過 Green Software Foundation 的 SCI 自我認證計畫（SCI Self-Certification Program），對其軟體碳強度（Software Carbon Intensity，SCI）計算完成自我認證（self-certification）。

### 標章用途

- **表彰**：肯定致力於資訊透明的組織
- **信任訊號**：表示揭露內容已通過完整性驗證
- **行動呼籲**：引導觀看者前往完整的公開揭露

### 核心原則

**標章「必須」一律直接連結至證書網址。** 標章並非獨立的資格證明，而是通往完整透明資訊的入口。

---

## 標章規格

### 設計元素

#### 標準標章

```
+---------------------------------+
|                                 |
|        [GSF Leaf Logo]          |
|                                 |
|      SCI Self-Certification     |
|              SCI                |
|             2026                |
|                                 |
|  greensoftware.foundation       |
|                                 |
+---------------------------------+
```

**組成元素**：
- GSF 葉形標誌（上方置中）
- 「SCI Self-Certification」文字（粗體）
- 「SCI」文字（中等字重）
- 核發年份（例如「2026」）
- 網域標示（小字）

#### 色彩規格

**主要標章（淺色背景）**：
- 背景：白色（#FFFFFF）
- 標誌：GSF 綠（#00C853）
- 主要文字：深灰色（#333333）
- 次要文字：中灰色（#666666）
- 外框：淺灰色（#E0E0E0）

**深色模式標章（深色背景）**：
- 背景：深灰色（#1E1E1E）
- 標誌：GSF 綠（#00C853）
- 主要文字：白色（#FFFFFF）
- 次要文字：淺灰色（#CCCCCC）
- 外框：中灰色（#444444）

**有效狀態標示**：
- 有效的證書以綠點或外框強調色標示
- 已過期或已撤銷的證書不設狀態標示（此時不應展示標章）

### 技術規格

#### 檔案格式

- **SVG**（主要格式）：可縮放的向量格式，適用於所有用途
- **PNG**：點陣格式，用於不支援 SVG 的情境
  - 500x500px（標準）
  - 250x250px（小）
  - 1000x1000px（大尺寸／印刷）
- **PDF**：用於印刷品

#### 尺寸準則

| 使用情境 | 建議尺寸 | 最小尺寸 |
|---------|------------------|--------------|
| 網站頁首 | 高度 80-120px | 高度 60px |
| 網站頁尾 | 高度 60-80px | 高度 40px |
| 文件 | 高度 100-150px | 高度 60px |
| 電子郵件簽名檔 | 高度 40-60px | 高度 40px |
| 印刷品 | 1-2 英吋 | 0.75 英吋 |
| 社群媒體 | 500x500px | 250x250px |

#### 間距與留白

- **最小留白空間**：標章四周皆須保留標章高度 10% 的空間
- **請勿**：將標章緊鄰其他標誌或文字擺放
- **請**：保留足夠的視覺空間

### 無障礙要求

#### 替代文字

標章圖片必須使用的替代文字（alt text）：
```html
<img src="gsf-sci-badge.svg"
     alt="GSF SCI Self-Certification badge - Click to view full disclosure">
```

#### 色彩對比

- 標章必須符合 WCAG 2.1 AA 對比度要求
- 淺色模式：對比度至少 4.5:1
- 深色模式：對比度至少 4.5:1
- 已於各種背景上測試

#### 螢幕閱讀器相容性

- 標章連結必須可透過鍵盤操作
- 連結必須具備描述性文字（不可只有「點此」）

---

## 允許的使用方式

### 1. 展示證書連結

**網站與文件**

組織「可以」在下列位置展示標章：
- 公司官方網站
- 產品文件
- 開發者入口網站
- 永續／ESG 頁面
- GitHub README 檔案
- 技術部落格文章

**要求**：
- 標章「必須」連結至證書網址
- 證書「必須」為有效狀態（未過期且未撤銷）
- 上下文「必須」說明此認證的性質

**HTML 範例**：
```html
<a href="https://badges.greensoftware.foundation/awards/sci/example-greentech-inventory-api"
   target="_blank"
   rel="noopener">
  <img src="gsf-sci-badge-light.svg"
       alt="GSF SCI Self-Certification - View our SCI calculation"
       height="80">
</a>
```

**Markdown 範例**：
```markdown
[![GSF SCI Self-Certification](gsf-sci-badge-light.svg)](https://badges.greensoftware.foundation/awards/sci/example-greentech-inventory-api)
```

### 2. 行銷與對外溝通

組織「可以」在下列內容中提及證書：
- 新聞稿
- 行銷素材
- 業務簡報
- 永續報告書
- 建議書徵求（RFP）回覆
- 客戶溝通內容

**要求**：
- 「必須」附上必要說明文字（請參閱第 4 節）
- 「必須」連結至或註明完整的證書網址
- 「不得」暗示經過準確性驗證或合規認證

**核可用語範例**：

（以下中文為譯文，僅供理解；具效力的用語以每則譯文下方的英文原文為準。）

**正確**：
> 「我們的 SCI 計算已透過 GSF SCI 自我認證計畫完成自我認證，展現我們在軟體碳量測上落實透明的承諾。[查看證書](URL)」
>
> "Our SCI calculation has been self-certified through the GSF SCI Self-Certification Program, demonstrating our commitment to transparency in software carbon measurement. [View Certificate](URL)"

**正確**：
> 「我們的 API 服務已取得 GSF SCI 自我認證，並公開分享 SCI 計算結果：每 1,000 次請求 349.63 gCO2eq。[完整揭露](URL)」
>
> "We've achieved a GSF SCI Self-Certification for our API service, publicly sharing our SCI calculation of 349.63 gCO2eq per 1,000 requests. [Full Disclosure](URL)"

**正確**：
> 「透明的軟體碳報告：我們的 SCI 計算已公開揭露，並經 Green Software Foundation 驗證其完整性。[證書](URL)」
>
> "Transparent software carbon reporting: Our SCI calculation is publicly disclosed and verified for completeness by the Green Software Foundation. [Certificate](URL)"

### 3. 社群媒體

組織「可以」在下列平台分享證書：
- LinkedIn
- Twitter/X
- 公司部落格
- 技術論壇

**要求**：
- 貼文中須附上證書連結
- 使用核可用語（見上文）
- 標記 @greensoftware（非必要，但鼓勵）

**貼文範例**：
> 「我們很榮幸透過 @greensoftware 的 SCI 自我認證計畫分享我們的軟體碳強度計算。透明是降低軟體碳足跡的關鍵。[查看我們的完整揭露](URL) #GreenSoftware #SustainableTech」
>
> "We're proud to share our Software Carbon Intensity calculation through @greensoftware's SCI Self-Certification Program. Transparency is key to reducing software's carbon footprint. [View our full disclosure](URL) #GreenSoftware #SustainableTech"

### 4. 電子郵件簽名檔

組織「可以」在電子郵件簽名檔中加入標章：

**要求**：
- 小尺寸（高度 40-60px）
- 連結至證書
- 僅使用極少量文字或僅使用圖示

**範例**：
```
Jane Smith | Senior Engineer
Acme Corporation
jane@acme.com | acme.com
[Badge Icon - 50px] GSF SCI Self-Certified
```

### 5. 研討會簡報

組織「可以」在下列內容中加入標章：
- 投影片
- 海報
- 研討會資料

**要求**：
- 在同一張投影片或參考資料中附上證書網址
- 說明自我認證與第三方認證的差異

### 6. 產品包裝（實體／數位）

組織「可以」在下列位置加入標章：
- 軟體產品頁面
- SaaS 儀表板
- API 文件
- 行動應用程式的「關於」頁面

**要求**：
- 連結至證書（數位）
- 附上證書網址（實體）
- 提供清楚的說明文字

---

## 必要說明文字

### 自我認證聲明

展示標章或提及證書時，組織「必須」清楚說明此為自我認證，而非第三方合規認證或準確性驗證。

#### 最低要求聲明

展示標章時，「必須」至少搭配下列其中一項聲明：

（以下中文為譯文，僅供理解；具效力的聲明文字以每則譯文下方的英文原文為準。）

**選項 1（完整聲明）**：
> 「本證書確認我們已就與 ISO/IEC 21031:2024 之符合性（conformity）完成自我認證。Green Software Foundation 已驗證揭露（disclosure）內容的完整性，以供公開審查。此並非第三方認證。」
>
> "This certificate confirms our self-certification of conformity with ISO/IEC 21031:2024. The Green Software Foundation verified disclosure completeness, enabling public review. This is not third-party certification."

**選項 2（精簡版）**：
> 「經自我認證符合 ISO/IEC 21031:2024，揭露內容經 GSF 完整性驗證。[完整揭露](URL)」
>
> "Self-certified compliant with ISO/IEC 21031:2024, disclosure verified for completeness by GSF. [Full disclosure](URL)"

**選項 3（註腳）**：
> 「* GSF SCI 自我認證確認 SCI 計算已連同必要資訊公開揭露，以供社群審查。不保證準確性。」
>
> "* GSF SCI Self-Certification confirms public disclosure of SCI calculation with required information for community review. Does not certify accuracy."

### 說明文字的放置位置

**網站上**：
- 緊鄰標章（建議）
- 滑鼠懸停提示
- 常見問題或永續頁面的段落中
- 頁尾免責聲明（最低要求）

**行銷素材中**：
- 標章附近的內文
- 同一頁的註腳
- 「關於此認證」段落

**簡報中**：
- 與標章同一張投影片
- 講者備忘稿
- 問答或參考資料投影片

---

## 禁止的使用方式

### 1. 未附連結的單獨使用

**禁止**：展示標章卻未以超連結連至證書

**違規範例**：
```html
<!-- NO LINK - PROHIBITED -->
<img src="gsf-sci-badge.svg" alt="We're certified!">
```

**原因**：標章並非獨立的資格證明，必須能讓人進行查證。

**後果**：警告、要求更正；若持續違規，可能撤銷證書。

---

### 2. 搭配已過期或已撤銷的證書使用

**禁止**：在證書已過期或已撤銷時展示標章

**證書狀態檢查**：
- 造訪證書網址，確認狀態為「Active」（有效）
- 檢查有效期（證書有效期為 1 年）
- 證書到期後立即移除標章

**例外**：歷史性提及在清楚標示的前提下允許：
> 「於 2025 年取得 GSF SCI 自我認證（已過期）。更新的計算正在進行中。」
>
> "Achieved GSF SCI Self-Certification in 2025 (expired). Updated calculation in progress."

**後果**：須立即下架。證書到期後短時間內仍展示標章者，以輕微違規處理，並給予 14 天更正期（見[合規與執行](#合規與執行)）；到期後持續或重複展示者，則構成嚴重違規，未來申請可能受到限制。

---

### 3. 修改標章設計

**禁止**：變更標章的色彩、版面、文字或標誌

**違規範例**：
- 為配合品牌而變更色彩
- 加入額外的文字或圖形
- 拉伸或扭曲標章
- 移除或替換 GSF 標誌
- 將年份改為其他年份

**後果**：警告並要求更正。

---

### 4. 暗示經過準確性驗證

**禁止**：使用暗示 GSF 認證準確性或品質的用語

**禁止用語**（中文為譯文，每則下方為具效力的英文原文）：
- 「經 GSF 認證為準確的 SCI 計算」<br>"GSF-certified accurate SCI calculation"
- 「經 Green Software Foundation 驗證」<br>"Validated by Green Software Foundation"
- 「GSF 核可的碳足跡」<br>"GSF-approved carbon footprint"
- 「經認證的綠色軟體」<br>"Certified green software"
- 「GSF 背書我們的方法論」<br>"GSF endorses our methodology"
- 「ISO 認證」或「ISO/IEC 21031:2024 認證」（缺少「自我認證」限定詞）<br>"ISO certified" or "ISO/IEC 21031:2024 certified" (missing "self-certified" qualifier)
- 「經獨立驗證符合 ISO/IEC 21031:2024」<br>"Independently verified ISO/IEC 21031:2024 compliant"
- 「第三方認證」或「獨立認證」<br>"Third-party certified" or "independently certified"
- 「經稽核並認證」<br>"Audited and certified"

**正確替代用語**（中文為譯文，每則下方為具效力的英文原文）：
- 「經自我認證符合 ISO/IEC 21031:2024，揭露內容經 GSF 完整性驗證」<br>"Self-certified compliant with ISO/IEC 21031:2024, disclosure verified for completeness by GSF"
- 「ISO/IEC 21031:2024 SCI 計算（自我認證，揭露內容經 Green Software Foundation 完整性驗證）」<br>"ISO/IEC 21031:2024 SCI calculation (self-certified, disclosure verified for completeness by Green Software Foundation)"
- 「我們的軟體碳強度已依 ISO/IEC 21031:2024 標準完成自我認證」<br>"Our software carbon intensity has been self-certified to ISO/IEC 21031:2024 standards"

**後果**：警告並要求更正。持續不實陳述可能導致撤銷。

---

### 5. 比較性宣稱

**禁止**：利用證書做出優於他人的比較性宣稱

**禁止的宣稱**（中文為譯文，每則下方為具效力的英文原文）：
- 「經 GSF 認證，碳排放低於［競爭對手］」<br>"GSF-certified lower carbon than [competitor]"
- 「在我們的產業中只有［公司］取得 GSF 認證」<br>"Only [company] has GSF certification in our industry"
- 「同級最佳的碳表現（GSF 認證）」<br>"Best-in-class carbon performance (GSF certified)"
- 「第一名的綠色軟體（GSF 證書）」<br>"#1 green software (GSF certificate)"

**原因**：證書驗證的是揭露內容，而非相對表現。

**後果**：須立即下架，可能撤銷證書。

---

### 6. 用於其他產品／服務

**禁止**：將證書標章用於該證書未涵蓋的產品／服務

**範例**：證書適用於「API Service v2.1」，但標章卻展示於「Mobile App v1.0」

**解決方式**：為每項產品／服務分別取得證書。

**後果**：警告並要求更正。

---

### 7. 單獨使用 GSF 標誌

**禁止**：脫離證書情境單獨使用 GSF 標誌

**範例**：在行銷素材上使用 GSF 葉形標誌，卻未搭配證書標章或證書資訊

**原因**：GSF 標誌為註冊商標。請僅使用官方證書標章。

**例外**：會員標章（與認證計畫無關）。

**後果**：構成商標侵權，可能採取法律行動。

---

## 展示範例

### 範例 1 網站頁尾（正確）

```html
<footer>
  <div class="certifications">
    <p>Our Certifications</p>
    <a href="https://badges.greensoftware.foundation/awards/sci/example-greentech-inventory-api"
       target="_blank"
       rel="noopener"
       title="View our GSF SCI Self-Certification">
      <img src="/images/gsf-sci-badge-light.svg"
           alt="GSF SCI Self-Certification badge"
           height="80">
    </a>
    <p class="disclaimer">
      Self-certified compliant with ISO/IEC 21031:2024, disclosure verified for completeness by GSF.
      <a href="https://badges.greensoftware.foundation/awards/sci/example-greentech-inventory-api">
        View full disclosure
      </a>
    </p>
  </div>
</footer>
```

**為何正確**：
- 標章連結至證書
- 免責聲明提供說明文字
- 替代文字具描述性

---

### 範例 2 永續報告書（正確）

**頁面版面**：
```
+----------------------------------------+
|  Our Carbon Measurement Journey        |
|                                        |
|  In 2026, we achieved a GSF SCI       |
|  Self-Certification for our API        |
|  service, demonstrating our            |
|  commitment to transparency in         |
|  software carbon measurement.          |
|                                        |
|  [Badge Image]  SCI Score: 349.63     |
|  (Links to      gCO2eq per 1,000      |
|   certificate)  API requests          |
|                                        |
|  This certificate confirms that we    |
|  have self-certified conformity with  |
|  ISO/IEC 21031:2024 and publicly      |
|  disclosed our calculation with all   |
|  required information for community   |
|  review. It does not certify accuracy.|
|                                        |
|  -> View Full Disclosure (URL)        |
+----------------------------------------+
```

**版面文字中文譯文**（僅供理解，以上方英文原文為準）：
> 我們的碳量測歷程
>
> 我們於 2026 年為 API 服務取得 GSF SCI 自我認證，展現我們在軟體碳量測上落實透明的承諾。
>
> ［標章圖片］（連結至證書）SCI 分數：每 1,000 次 API 請求 349.63 gCO2eq
>
> 本證書確認我們已就與 ISO/IEC 21031:2024 之符合性完成自我認證，並已連同所有必要資訊公開揭露我們的計算，以供社群審查。本證書不保證準確性。
>
> 查看完整揭露（URL）

**為何正確**：
- 說明文字解釋了自我認證的性質
- 標章附有連結
- 多次提供網址
- 未做出準確性宣稱

---

### 範例 3 GitHub README（正確）

```markdown
# Acme API Service

High-performance REST API for e-commerce platforms.

## Sustainability

We're committed to measuring and reducing our software's carbon intensity.

[![GSF SCI Self-Certification](https://img.shields.io/badge/GSF-SCI%20Self--Certified-00C853?style=for-the-badge&logo=data:image/svg+xml;base64,...)](https://badges.greensoftware.foundation/awards/sci/example-greentech-inventory-api)

**SCI Score**: 349.63 gCO2eq per 1,000 API requests

Our SCI calculation has been self-certified through the Green Software
Foundation's SCI Self-Certification Program. GSF verified the completeness
and transparency of our disclosure, not the accuracy of the calculation.

[View Full Disclosure ->](https://badges.greensoftware.foundation/awards/sci/example-greentech-inventory-api)
```

**README 文字中文譯文**（僅供理解，以上方英文原文為準）：
> Acme API Service：為電子商務平台打造的高效能 REST API。
>
> 永續：我們致力於量測並降低軟體的碳強度。
>
> **SCI 分數**：每 1,000 次 API 請求 349.63 gCO2eq
>
> 我們的 SCI 計算已透過 Green Software Foundation 的 SCI 自我認證計畫完成自我認證。GSF 驗證的是我們揭露內容的完整性與透明度，而非計算的準確性。
>
> 查看完整揭露

**為何正確**：
- 標章是連結至證書的 Markdown 連結
- 說明文字解釋了自我認證
- 未做出準確性宣稱
- 完整揭露連結醒目

---

### 範例 4 電子郵件簽名檔（正確，精簡版）

```
Jane Smith | Senior Engineer
Acme Corporation
jane@acme.com

[GSF SCI Self-Certified](https://badges.greensoftware.foundation/awards/sci/example-greentech-inventory-api)
```

**為何正確**：
- 精簡但附有連結
- 以文字連結取代完整標章（空間有限）
- 直接連結至證書

---

### 範例 5 網站（錯誤，常見失誤）

**失誤 1：沒有連結**
```html
<img src="gsf-sci-badge.svg" alt="We're certified!">
```
**問題**：標章無法點擊，無從查證。

**失誤 2：誤導性用語**
```html
<div class="certifications">
  <h3>GSF-Certified Green Software</h3>
  <img src="gsf-sci-badge.svg">
</div>
```
**問題**：
- 暗示經過準確性驗證
- 沒有連結至證書
- 「certified green」（經認證的綠色）屬誤導性宣稱

**失誤 3：修改過的標章**
```html
<img src="gsf-sci-badge-BLUE.svg" alt="GSF Certified" height="80">
```
**問題**：為配合品牌變更了標章色彩（禁止）。

---

### 範例 6 研討會投影片（正確）

**投影片版面**：
```
+----------------------------------------------+
|  Our Carbon Measurement Results              |
|                                              |
|  [Badge]          SCI Score                  |
|                   349.63 gCO2eq              |
|                   per 1,000 requests         |
|                                              |
|  Full Disclosure:                            |
|  badges.greensoftware.foundation             |
|  /awards/sci/example-greentech-inventory-api |
|                                              |
|  * Self-certified to ISO/IEC                 |
|    21031:2024. GSF verified disclosure       |
|    completeness for community review.        |
+----------------------------------------------+
```

**投影片文字中文譯文**（僅供理解，以上方英文原文為準）：
> 我們的碳量測結果
>
> ［標章］SCI 分數：每 1,000 次請求 349.63 gCO2eq
>
> 完整揭露：badges.greensoftware.foundation/awards/sci/example-greentech-inventory-api
>
> \* 依 ISO/IEC 21031:2024 完成自我認證。GSF 已驗證揭露內容的完整性，以供社群審查。

**為何正確**：
- 標章清楚可見
- 印出網址（適用於無法點擊的情境）
- 附有免責聲明註腳

---

## 數位素材庫

### 可下載的素材

持有有效證書的組織可從下列網址下載標章素材：
**https://badges.greensoftware.foundation/badges**

**可用檔案**：

1. **標章：淺色模式**
   - `gsf-sci-badge-light.svg`（主要）
   - `gsf-sci-badge-light-500px.png`
   - `gsf-sci-badge-light-250px.png`
   - `gsf-sci-badge-light-1000px.png`

2. **標章：深色模式**
   - `gsf-sci-badge-dark.svg`（主要）
   - `gsf-sci-badge-dark-500px.png`
   - `gsf-sci-badge-dark-250px.png`
   - `gsf-sci-badge-dark-1000px.png`

3. **標章：印刷用**
   - `gsf-sci-badge-print.pdf`（CMYK）

4. **圖示／Favicon**
   - `gsf-sci-icon.svg`（僅葉形標誌）
   - `gsf-sci-icon-32px.png`
   - `gsf-sci-icon-64px.png`

### 素材自訂

**允許**：
- 等比例縮放
- 轉換格式（SVG 轉 PNG 等）
- 加入標章庫／標章集

**不允許**：
- 變更色彩
- 修改版面
- 變更文字
- 替換標誌

### CDN 託管

GSF 提供以 CDN 託管的標章圖片：
```html
<img src="https://cdn.greensoftware.foundation/badges/sci-badge-light.svg"
     alt="GSF SCI Self-Certification">
```

**優點**：
- 設計永遠保持最新
- 全球快速傳遞
- 自動最佳化格式

**注意**：您仍須連結至您專屬的證書網址。

---

## 合規與執行

### 監測

GSF 透過下列方式監測標章使用情形：
- 定期以網路爬蟲檢查已知證書持有者的網站
- 透過 sci-certification@greensoftware.foundation 接收社群通報
- 社群媒體監測（抽樣）
- 每季合規稽核（隨機抽樣）

### 通報不當使用

如欲通報標章不當使用：
1. 寄送電子郵件至 sci-certification@greensoftware.foundation
2. 提供：
   - 不當使用的網址或位置
   - 證書 ID（如已知）
   - 違規情形說明
   - 螢幕截圖／證據

**社群通報**：任何人皆可通報疑似不當使用。

### 違規處理流程

#### 輕微違規（初犯且非惡意）

**範例**：
- 標章未附連結
- 缺少說明文字免責聲明
- 證書到期後短時間內仍展示標章（標章須於到期時立即移除；14 天更正期為執行期限，並非寬限期）

**處理方式**：
1. 以電子郵件通知證書持有者
2. 14 天更正期
3. 更正期間證書狀態為「Under Review」（審查中）
4. 完成更正後恢復

#### 嚴重違規（重複或故意）

**範例**：
- 經警告後仍持續不當使用標章
- 經警告後仍做出誤導性的準確性宣稱
- 證書已撤銷仍展示標章
- 故意不實陳述

**處理方式**：
1. 撤銷證書
2. 公開註記撤銷原因
3. 6-12 個月內禁止重新申請

#### 重大違規（詐欺或濫用商標）

**範例**：
- 偽造證書網址
- 在沒有任何證書的情況下使用標章
- 未經授權使用 GSF 標誌／品牌
- 詐欺性的比較性宣稱

**處理方式**：
1. 立即撤銷證書
2. 永久禁止參與本計畫
3. 公開揭露違規情形
4. 可能就商標侵權採取法律行動

### 申訴

標章不當使用的判定可透過爭議處理程序提出申訴（請參閱《申請者指南》的「申訴」一節）。

---

## 常見問題

### 問：證書過期後，我還能使用標章嗎？

**答**：不行。證書到期後請立即移除標章。您可以為證書換證，並以新證書重新展示標章。

**例外**：若清楚標示已過期，您可以做歷史性提及：
> 「於 2025 年取得 GSF SCI 自我認證（已過期）。更新的計算正在進行中。」
>
> "Achieved GSF SCI Self-Certification in 2025 (expired). Updated calculation in progress."

---

### 問：我可以製作配合自家品牌的自訂標章嗎？

**答**：不行。您必須使用未經修改的官方 GSF 標章素材。您可以在淺色與深色模式之間選擇，但不得變更色彩與版面。

---

### 問：我可以在多個地方展示標章嗎？

**答**：可以。您可以在網站、文件、簡報、電子郵件簽名檔等處展示標章，前提是每一處都連結至證書並附上必要說明文字。

---

### 問：如果我的證書網址很長怎麼辦？

**答**：印刷品可使用縮網址服務，但須確保其會重新導向至官方證書網址。數位素材則一律使用完整的證書網址。

---

### 問：我可以說「GSF Certified」嗎？

**答**：除非加上「self-certified」（自我認證）限定詞，否則不行。

可接受（中文為譯文，下方為具效力的英文原文）：
> 「經自我認證符合 ISO/IEC 21031:2024，揭露內容經 GSF 完整性驗證。」
>
> "Self-certified compliant with ISO/IEC 21031:2024, disclosure verified for completeness by GSF."

不可接受（中文為譯文，每則下方為具效力的英文原文）：
- 「GSF 認證準確」<br>"GSF Certified Accurate"
- 「GSF 認證綠色軟體」<br>"GSF Certified Green Software"

---

### 問：我可以在廣告中使用標章嗎？

**答**：可以。在行銷素材與廣告中使用皆可，前提是附上必要的說明聲明並連結至證書。請勿做出誤導性宣稱。

---

### 問：如果我的不同產品分別持有多張證書怎麼辦？

**答**：展示每個標章時，請連結至其對應的證書，並清楚標示每張證書適用於哪項產品。

---

### 問：我可以在自己的應用程式或 SaaS 儀表板中使用標章嗎？

**答**：可以。請加入標章並以超連結連至證書（網頁應用程式），或提供可開啟該網址的「查看證書」按鈕（原生應用程式）。

---

### 問：換證時要如何更新標章上的年份？

**答**：換證後，請從標章平台下載新的標章素材。標章會自動反映新證書的年份。

---

### 問：合作夥伴或客戶可以展示我的標章嗎？

**答**：合作夥伴／客戶可以在案例研究或推薦見證中提及您的證書並適當註明出處，但應連結至您的證書，而不是把標章當成自己的來展示。

---

## 附錄：標章使用檢核表

展示標章前，請使用本檢核表確認：

- [ ] 標章連結至證書網址
- [ ] 證書為有效狀態（未過期且未撤銷）
- [ ] 必要說明聲明清楚可見
- [ ] 沒有誤導性的準確性或合規宣稱
- [ ] 標章設計未經修改（官方素材）
- [ ] 標章尺寸符合最小尺寸要求
- [ ] 替代文字具描述性，符合無障礙需求
- [ ] 連結可透過鍵盤操作
- [ ] 標章僅用於證書涵蓋的產品／服務
- [ ] 未做出比較性宣稱

**若所有項目皆已勾選**，即可展示標章！

---

## 聯絡與支援

**標章使用相關問題**：
- 電子郵件：sci-certification@greensoftware.foundation

**通報標章不當使用**：
- 電子郵件：sci-certification@greensoftware.foundation

**下載標章素材**：
- 入口網站：https://badges.greensoftware.foundation/badges

---

**文件版本**：1.2
**最後更新**：2026-11
**維護單位**：GSF SCI 自我認證計畫
**授權**：(c) Green Software Foundation。標章素材依證書條款提供。
