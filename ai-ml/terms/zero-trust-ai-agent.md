# Zero Trust AI Agent（零信任 AI 代理）— 不把模型判斷當成安全邊界

> **白話說：** Zero Trust AI Agent 的原則是：就算 AI 被騙、被提示詞注入，或模型更新後行為改變，系統外圍仍要用硬規則攔住危險操作。

---

## 它到底是什麼？

**Zero Trust AI Agent** 不是某一個產品，而是一種設計 AI Agent 的安全架構：**不因為 Agent 看起來聰明、拿到合法身分，或通過幾次測試，就自動相信它可以做任何事**。

傳統 Guardrails 常放在 Prompt 或模型輸入輸出附近；零信任做法則把關鍵限制放到模型之外，讓每次真正會改變資料或系統的操作，都必須通過可驗證的控制。例如：

- 每個 Agent 使用可識別、可稽核的身分，重要寫入附帶簽章
- 動態產生的程式在隔離環境執行，限制權限、資源與網路出口
- 工具呼叫與資料寫入經過確定性的規則檢查，超出交易範圍就拒絕
- 把安全規則寫成自動化測試，模型、Prompt 或工具更新後重新驗證

它和 [AI Sandbox](ai-sandbox.md)、[Guardrails](guardrails.md)、[Agent Identity](agent-identity.md) 是互補關係：Sandbox 限制執行環境，Guardrails 約束模型互動，Agent Identity 說明「誰」在做事，而 Zero Trust AI Agent 把這些控制組合成「即使模型失守，危險操作仍不能直接落地」的整體架構。

## 生活比喻 / 實際例子

想像公司請了一位很能幹但可能被騙的外包員工：

- **只靠 Prompt**：在合約上寫「請勿亂花錢」，但仍把公司信用卡交給他
- **零信任做法**：每筆付款都要用員工身分簽核，付款系統限制金額，危險腳本只能在沒有網路的隔離房間執行，最後還要經過固定規則檢查

Google 2026-08-17 的官方 Agent Development Kit 文章以退款 Agent 為例，提出三層控制：硬體支援的寫入簽章、使用 gVisor 的程式隔離，以及檢查輸入輸出與交易限制的 deterministic semantic gateway。重點不是宣稱模型永遠安全，而是讓模型判斷錯誤時，基礎設施仍能拒絕不合理的副作用。

**造句：**

- 「這個 Agent 可以改訂單，不能只靠 Prompt，要用 **Zero Trust AI Agent** 的方式把寫入驗證放在模型外面。」
- 「先確認每個工具呼叫都有身分、權限和交易上限，再談 Agent 自動化。」
- 「模型升級後要重跑安全契約測試，不能因為昨天沒出事就放行。」

## 為什麼要知道這個詞？

- Agent 一旦能退款、改資料、執行程式，就不再只是產生文字，而是在改變真實世界狀態
- Prompt Injection、越獄和模型更新都可能讓「看起來合理」的指令變成危險操作
- 安全設計的重點應從「叫模型小心一點」移到身分、隔離、最小權限、確定性驗證與可稽核紀錄
- 看到產品宣稱 AI 安全時，要追問：危險操作在哪一層被拒絕？規則能否測試？失敗時是否 fail closed？

相關：[Agent Identity](agent-identity.md)、[AI Sandbox](ai-sandbox.md)、[Guardrails](guardrails.md)、[Prompt Injection](prompt-injection.md)、[Agent Evaluation](agent-evaluation.md)

**官方參考：** [Google Developers Blog：Build zero-trust AI agents with Google's Agent Development Kit（2026-08-17）](https://developers.googleblog.com/build-zero-trust-ai-agents-with-googles-agent-development-kit/)

---
**[← 回到 AI / 機器學習總覽](../README.md)**
