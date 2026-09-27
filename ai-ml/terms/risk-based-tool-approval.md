# Risk-based Tool Approval（風險分級工具核准）— 依操作風險決定自動放行或請人確認

> **白話說：** 不是每次 AI 要用工具都叫主管簽名，而是低風險的動作快速放行，高風險的動作停下來請人確認。

---

## 它到底是什麼？

**Risk-based Tool Approval** 是按照工具操作可能造成的影響，分級決定 Agent 能不能自動執行。它把「要不要問人」從一條死規則，變成和風險相稱的控制：

- **低風險**：例如讀取已授權的公開文件，可以直接執行
- **中風險**：例如修改工作區檔案、呼叫可能消耗額度的服務，先顯示操作內容或請人確認
- **高風險**：例如刪除資料、修改正式環境或對外發送內容，一律保留人工核准

有些平台會用 AI 輔助核准，嘗試自動通過低風險工具呼叫，把高風險操作留給人決定。這是產品實作方式，不是所有 Agent 平台都共用的標準；導入時仍要確認誰判定風險、哪些規則不可被覆蓋，以及核准是否會持續套用到之後的操作。

它和 [Agent Permissions](agent-permissions.md) 的關係是：Agent Permissions 定義 **Allow / Ask / Deny** 的權限政策；Risk-based Tool Approval 則提供一種依風險套用這些決策的方法。它也不能取代 [Human-in-the-Loop](human-in-the-loop.md)、沙箱、身分驗證與操作日誌。

## 生活比喻 / 實際例子

想像公司櫃台的門禁：

- 員工刷卡進普通辦公區，系統直接放行
- 要進資料室，櫃台先通知主管確認
- 要進金庫，除了主管核准還要第二道驗證

同樣地，Coding Agent 可以自動讀取測試檔案，但要刪除資料、推送程式碼或修改 production 設定時，應顯示明確 diff 並停下來等待核准。曾經核准過一次，不代表未來所有相似操作都應永久放行。

**造句：**

- 「我們把讀檔設成低風險自動放行，production deploy 維持人工核准。」
- 「Risk-based Tool Approval 不是讓 AI 自己決定一切，而是讓不同風險的動作有不同的門檻。」
- 「要稽核 Agent 的工具權限，必須記錄它為什麼被放行，以及誰核准了高風險操作。」

## 為什麼要知道這個詞？

- 每個工具呼叫都要求人工確認，會讓長流程慢到不可用
- 每個工具呼叫都自動放行，則可能讓一次錯誤或 Prompt Injection 擴大成重大事故
- 風險分級能把效率和安全放在同一套政策裡衡量
- 自動核准仍要受組織 Deny 規則、最小權限、沙箱和人工閘門限制
- 評估時要測低、中、高風險路徑，也要測未知工具、失敗回應與規則被覆蓋的情況

**官方參考：** [GitHub Changelog：New features and improvements in Copilot for JetBrains（2026-09-22）](https://github.blog/changelog/2026-09-22-new-features-and-improvements-in-copilot-for-jetbrains/) · [GitHub 文件：Enterprise managed settings — deny, ask, allow](https://docs.github.com/enterprise-cloud@latest/copilot/reference/enterprise-managed-settings#deny-ask-allow)

相關：[Agent Permissions](agent-permissions.md)、[Human-in-the-Loop](human-in-the-loop.md)、[AI Sandbox](ai-sandbox.md)、[Zero Trust AI Agent](zero-trust-ai-agent.md)

---
**[← 回到 AI / 機器學習總覽](../README.md)**
