# Agent Identity（代理身分）— 讓系統知道「是哪個 AI 在代表誰做事」

> **白話說：** Agent Identity 就像公司員工證。系統不只要知道「有人來了」，還要確認是哪位 Agent、代表哪個使用者或服務、被授權做哪些事。

---

## 它到底是什麼？

**Agent Identity** 是用來識別 AI Agent 及其代表對象的身分機制。當 Agent 以雲端工作負載執行任務、代表不在場的使用者做事，或把較小的任務交給另一個 Agent 時，伺服器需要能分辨：

- 這是哪個 Agent 或工作負載
- 它是代表哪位使用者、組織或上游 Agent
- 它目前被授予哪些範圍與期限的權限
- 這次操作能不能追溯到具體的呼叫者與委派鏈

它不只是替 Agent 取一個名字，也不等於把一組 API key 塞進設定檔。成熟的 Agent Identity 會搭配身分驗證、授權、權限委派、token 綁定與稽核紀錄，讓服務能在執行危險操作前做出可驗證的判斷。

MCP 官方在 2026 年 8 月 22 日發布的新路線圖，把 **agent identity and enterprise-ready security** 列為優先方向，並提到 DPoP、Workload Identity Federation、ID-JAG 與 token exchange 等既有標準或機制。這是協定生態系的發展方向，不代表每個 MCP Client、Server 或 SDK 已經支援完整方案。

## 生活比喻 / 實際例子

想像公司櫃檯有人來領取客戶資料：

- **只有 API key**：像拿著一把沒有照片、沒有職稱的鑰匙，櫃檯很難判斷誰在使用
- **Agent Identity**：像員工證加上訪客登記，能確認來訪者、代表的部門、可進入的房間與有效時間
- **委派身分**：像主管授權助理代辦一件事，但助理不能因此取得主管所有權限

例如研究 Agent 代表 Vincent 查詢內部文件，再把「只讀財務資料」的狹窄權限委派給摘要 Agent。文件服務可以記錄原始使用者、研究 Agent、摘要 Agent 與實際讀取的資源，而不是只看到同一組共用金鑰。

**造句：**

- 「這個長時間執行的 Agent 不能只靠共用 API key，應該建立可稽核的 **Agent Identity**。」
- 「子 Agent 只需要讀取報表，不應繼承上游 Agent 的全部 **Agent Identity** 權限。」
- 「導入前要確認 Agent Identity 能否驗證委派鏈，而不是只檢查 token 有沒有存在。」

## 和其他概念有什麼不同？

| 概念 | 重點 |
|---|---|
| **Authentication（身分驗證）** | 確認「你是誰」 |
| **Authorization（授權）** | 決定「你可以做什麼」 |
| **Agent Identity** | 把 Agent、代表對象、委派關係與權限脈絡連在一起 |
| **API Key** | 一種憑證，不自動提供細緻的身分、期限或委派語意 |

## 為什麼要知道這個詞？

- Agent 從互動式聊天變成雲端長流程後，不能假設使用者一直在瀏覽器前批准每一步
- 沒有清楚的 Agent Identity，服務難以做到最小權限、撤銷權限與事後追責
- 多 Agent 協作時，必須分辨「原始使用者想做什麼」和「哪個子 Agent 實際呼叫了工具」
- 看到產品宣稱支援 Agent Identity 時，要查它使用的標準、token 生命週期、委派範圍、撤銷方式與稽核欄位

相關：[Agentic（代理式）](agentic.md)、[Multi-Agent System（多代理系統）](multi-agent-system.md)、[MCP（模型上下文協議）](mcp.md)、[AI Sandbox（AI 隔離環境）](ai-sandbox.md)、[Guardrails（護欄）](guardrails.md)

**官方參考：** [MCP：The New MCP Roadmap（2026-08-22）](https://blog.modelcontextprotocol.io/posts/mcp-roadmap) · [MCP Authorization](https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization)

---
**[← 回到 AI / 機器學習總覽](../README.md)**
