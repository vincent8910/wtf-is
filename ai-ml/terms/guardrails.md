# Guardrails（護欄） — 防止 AI 暴走的安全機制

> **白話說：** 就像高速公路兩邊的護欄——車子（AI）可以自由行駛，但不能衝出道路。Guardrails 就是設定 AI「能做什麼、不能做什麼」的規則。

---

## 它到底是什麼？

**Guardrails（護欄）** 是用來限制和約束 AI 行為的安全機制，確保它不會產出有害、不當或錯誤的內容。

AI 沒有 Guardrails 會怎樣？
- 可能教人做危險的事
- 可能洩漏公司機密
- 可能產出歧視性內容
- 可能 [Hallucinate](hallucination.md) 出完全錯誤的資訊

Guardrails 的常見類型：

| 類型 | 例子 |
|------|------|
| 輸入過濾 | 偵測並拒絕惡意提問 |
| 輸出過濾 | 檢查 AI 回答是否包含敏感內容 |
| 主題限制 | AI 只回答特定領域的問題 |
| 格式約束 | 強制 AI 用特定格式回答（如 JSON） |
| 事實查核 | 比對知識庫，減少幻覺 |

## 生活比喻 / 實際例子

想像你請了一個新員工（AI）：
- **沒有 Guardrails** = 讓他自由發揮，可能亂答客戶問題、洩漏公司資料
- **有 Guardrails** = 給他一本 SOP：「這些問題可以回答、那些要轉給主管、絕對不能透露定價策略」

**造句**：
- 「我們的 AI 客服有 **Guardrails**，碰到法律問題會自動轉人工」
- 「上線前要先設好 **護欄**，不然 AI 可能回答出格的內容」
- 「這個 **Guardrails** 框架可以自動偵測 AI 是否在 Hallucinate」

## 為什麼要知道這個詞？

- 企業導入 AI 時最重要的安全考量之一
- 跟 [AI Governance](../../management/terms/ai-governance.md)、[Hallucination](hallucination.md) 直接相關
- 沒有 Guardrails 的 AI 產品上線 = 出事只是時間問題

---
**[← 回到 AI / 機器學習總覽](../README.md)**
