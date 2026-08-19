# Agent Plugin（代理外掛）— 把 Agent 的多項能力打包成一個可攜式工具箱

> **白話說：** Agent Plugin 是把一個或多個 Skill、MCP Server 設定和相關檔案，整理成可以安裝到不同 Agent 工具的套件。

---

## 它到底是什麼？

AI Agent 往往不只需要一項能力：可能要先讀一份工作說明，再呼叫外部工具，最後按照團隊規則產生結果。Agent Plugin 就像一個打包好的工具箱，把這些能力與設定放在一起，讓支援相同規格的 Agent Client 可以安裝和使用。

它和 **Skill** 的差別是：Skill 比較像工具箱裡的一把工具；Plugin 則是裝載一把或多把工具、使用說明與連接設定的整包套件。Plugin 也可能包含 [MCP](mcp.md) Server 設定，但「能安裝」不等於「自動取得所有權限」，仍要檢查來源、授權與網路／檔案邊界。

GitHub 在 2026 年 8 月 12 日的官方 Changelog 說明 Agent Plugins 1.0：同一個 Plugin 可在相容的 Agent Client 間共用，並可把 Skill 與 MCP Server 包在同一個可安裝套件中。這是規格與支援範圍的說明，不代表每個 Agent 工具都已支援。

## 生活比喻 / 實際例子

想像你買了一個木工工具箱：

- **Skill** 是電鑽或捲尺等單一工具
- **MCP Server** 是工具箱裡通往材料庫的取貨窗口
- **Agent Plugin** 是把工具、說明書和取貨設定一起裝好的工具箱

例如一個「部署檢查」Plugin，可能同時提供部署 Runbook Skill 和查詢 CI／雲端服務的 MCP Server。安裝到相容的 Agent Client 後，Agent 才能依規則查資料並執行檢查；管理者仍應限制可用 Plugin 與 MCP Server 來源。

實際會聽到的說法：

- 「這個 Agent Plugin 可以在多個 Agent Client 共用，不用每個工具各維護一份包裝。」
- 「先檢查 Plugin 裡的 Skill、MCP Server 和權限，再決定是否安裝。」

## 為什麼要知道這個詞？

- Agent 能力開始從單一工具變成可分享、可管理的套件
- 同一套 Plugin 若能跨 Client 使用，可以減少重複維護，但要確認各 Client 的支援範圍
- Plugin 可能攜帶外部工具設定，安裝前要檢查來源、權限與供應鏈風險

**官方參考：** [GitHub Changelog：Agent Plugins 1.0](https://github.blog/changelog/2026-08-12-agent-plugins-1-0-in-vs-code-copilot-cli-and-the-copilot-app/)

---
**[← 回到 AI / 機器學習總覽](../README.md)**