> **語言：** [English](../README.md) | 繁體中文（台灣）
>
> 本文件為英文原文之翻譯，僅供參考。若中文譯本與英文原文有任何出入，概以英文原文為準。

# GSF ISO/IEC 21031:2024 自我認證計畫

本計畫讓**任何組織**都能針對 ISO/IEC 21031:2024（軟體碳強度，Software Carbon Intensity，SCI）進行符合性自我認證。本計畫**免費**，開放所有組織參加，從提交申請到取得證書的目標處理時間**約為 3 至 4 週**（複雜案件最長約 5 週）。

您需要提交 SCI 計算結果，並附上經簽署之聲明書（attestation）及完整的方法論揭露（disclosure）。GSF 審查委員會透過結構化的 7 項檢核表，確認的是**揭露的完整性**，而非計算的正確性。所有揭露內容都會公開發布於 GitHub，供社群審閱。

> **準備好申請了嗎？** 請從[申請者指南](docs/applicant-guide.md)開始。若想先了解完整的申請資料長什麼樣子，可參閱[參考範例](../submissions/example-greentech-inventory-api/)。

## 運作方式

這是一項**自我認證**計畫，並非第三方稽核。您的組織自行計算 SCI 分數、揭露完整的方法論，並簽署聲明書。GSF 審查人員確認您的揭露是否完整且足夠詳細，讓社群能夠理解與評估；審查人員不會檢查您的數字是否正確。證書的公信力來自公開揭露與社群審閱。

**從開始到取得證書的四個步驟：**

1. 依照 ISO/IEC 21031:2024 **計算您的 SCI 分數**
2. 使用[申請範本](docs/submission-email-template.md)**準備申請資料**。範本是一份共 7 個部分的問卷，涵蓋軟體邊界、功能單位、能源與碳資料、隱含排放及方法論
3. 將申請資料**以電子郵件寄至** sci-certification@greensoftware.foundation。審查人員會在 10 至 15 個工作天內，依 7 項檢核表確認揭露的完整性
4. 經過軟體標準工作小組（Software Standards Working Group，SWG）為期 7 個日曆天的簽核期後，**取得您的證書**

證書有效期為一年，換證時須完整重新提交申請資料。

## 申請資料必須涵蓋的內容

7 個部分全部為必填。只要有任何缺漏，申請資料會在審查開始前退回修訂。請以[申請範本](docs/submission-email-template.md)作為起點；範本依部分逐一編排，每個欄位都附有範例。

申請資料請以**英文**撰寫，因為審查人員以英文進行審查，且核准後會原樣公開發布。

| 部分 | 應包含的內容 |
|---|---|
| **1. 關於您與您的軟體** | 組織名稱、聯絡人、軟體名稱、版本、簡要說明 |
| **2. SCI 分數** | 含單位的分數（例如「349.63 gCO2eq per 1,000 API requests」，即每 1,000 次 API 請求 349.63 gCO2eq）、量測起訖日期 |
| **3. 軟體邊界** | 納入的元件；排除的元件，每一項都須附上具體理由；共用基礎設施的處理方式 |
| **4. 功能單位（R）** | 您選用的單位、為何此單位能反映軟體的擴展方式或價值交付方式、計數方法、該期間的總單位數 |
| **5. 能源消耗與碳強度（E、I）** | 含 PUE 的總能源消耗；各元件的能源明細及資料來源；碳強度數值，並註明地點、採用方法，以及具名來源與年份 |
| **6. 隱含排放（M）** | 含單位的 M 總值；若 M=0，須提出具體理由；若 M>0，須提供各元件明細及來源 |
| **7. 方法論與計算** | 採用方法（量測法、計算法或混合法）；至少一項具體假設及其理由；至少一項具體限制；以您的實際數字呈現完整的 SCI 計算過程 |
| **聲明書** | 範本中的 10 點聲明書，須簽名並註明日期 |

**您的申請資料就是您的公開揭露。** 若獲核准，申請資料將原樣發布至公開的 GitHub 儲存庫（聯絡人電子郵件會遮蔽，並加上證書詮釋資料標頭）。撰寫時請記得內容將會公開，本計畫沒有另外的揭露步驟。

**提交方式：** 以電子郵件寄至 sci-certification@greensoftware.foundation，主旨請使用：`SCI Self-Certification Submission - [Your Organization Name] - [Your Software Name]`（請將方括號內文字替換為您的組織名稱與軟體名稱）。接受的格式：PDF、Word、Markdown，或直接寫在電子郵件內文中的純文字。

## 審查方式

審查人員依照 **7 項完整性檢核表**審查您的揭露內容，而不是檢查您的數字是否正確。標準是「足夠」，而非「完美」：細節要足以讓從業人員看出您做了什麼，以及您的數字從何而來。

1. 您會在 1 個工作天內收到附有追蹤編號的確認信
2. 審查人員會在 10 至 15 個工作天內完成申請資料的審查
3. **核准**：進入為期 7 個日曆天的 SWG 異議期，之後核發證書
4. **要求修訂**：您會收到需要修正之處的具體回饋，並可視需要多次重新提交。這不是駁回
5. **駁回**：僅適用於惡意行為（捏造資料、詐欺，或在收到修訂要求後持續拒絕配合）

關於檢核表及各項審查結果的完整說明，請參閱[申請者指南](docs/applicant-guide.md)。

## 資源

| 文件 | 用途 |
|---|---|
| [applicant-guide.md](docs/applicant-guide.md) | 完整的申請要求、評估標準、標章規則、申訴及時程 |
| [submission-email-template.md](docs/submission-email-template.md) | 需填寫並以電子郵件寄出的 7 部分範本 |
| [faqs.md](faqs.md) | 常見問題，涵蓋申請資格、提交、審查、證書、技術問題及質疑程序 |
| [badge-usage-guidelines.md](docs/badge-usage-guidelines.md) | 標章規格、允許與禁止的用途、展示範例及可下載的素材 |
| [imp-schema-documentation.md](docs/imp-schema-documentation.md) | 選用的 YAML/JSON 提交格式，適用於自動化流程及 CI/CD 整合 |

**申請範例**：每個範例都包含完整的揭露、審查紀錄、核准信，以及可執行的 Impact Framework manifest（清單檔）。範例僅提供英文版。

| 申請範例 | 概況 |
|---|---|
| [example-greentech-inventory-api](../submissions/example-greentech-inventory-api/) | B2B SaaS API，**建議從這裡開始** |
| [example-neuralcast-llm-inference](../submissions/example-neuralcast-llm-inference/) | AI 推論，以 GPU 為主，採計算法 |
| [example-meridianbank-payments-platform](../submissions/example-meridianbank-payments-platform/) | 金融服務，地端加雲端災難復原的混合架構，市場基準法，多區域 |
| [example-loftstream-vod-platform](../submissions/example-loftstream-vod-platform/) | 串流媒體，多區域地點基準法，網路傳輸量大 |
| [example-portal-arena-game-backend](../submissions/example-portal-arena-game-backend/) | 線上遊戲後端，採量測法，自動擴展的伺服器群 |
| [example-stacklane-collab-saas](../submissions/example-stacklane-collab-saas/) | 建置於全代管 PaaS 上的開發者生產力 SaaS，M=0 的情境 |

## 重點摘要

- **開放所有組織參加**：任何已依 ISO/IEC 21031:2024 計算出 SCI 分數的組織均符合資格，不論規模、類型、所在地或是否為 GSF 會員
- **免費**：無申請費，也無換證費
- **自我認證，而非第三方稽核**：由組織自行聲明符合 ISO/IEC 21031:2024；GSF 僅確認揭露的完整性
- **公開揭露**：所有獲核准的申請資料都會發布於 GitHub 供社群審閱，這正是自我認證公信力的來源
- **有效期 1 年**：證書每年到期，換證須完整重新提交
- **有疑問嗎？** 請寄信至 sci-certification@greensoftware.foundation

## 參考資料

- [ISO/IEC 21031:2024（SCI 規範）](https://github.com/Green-Software-Foundation/sci)
- [GSF Impact Framework](https://if.greensoftware.foundation/)
- [Green Software Foundation](https://greensoftware.foundation/)
