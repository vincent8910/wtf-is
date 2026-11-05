# Agent Plugin（代理外掛）— 把 Agent 的多項能力打包成一個可攜式工具箱

> **白話說：** Agent Plugin 是把一個或多個 Skill、MCP Server 設定和相關檔案，整理成可以安裝到不同 Agent 工具的套件。

---

## 它到底是什麼？

AI Agent 往往不只需要一項能力：可能要先讀一份工作說明，再呼叫外部工具，最後按照團隊規則產生結果。Agent Plugin 就像一個打包好的工具箱，把這些能力與設定放在一起，讓支援相同規格的 Agent Client 可以安裝和使用。

它和 **Skill** 的差別是：Skill 比較像工具箱裡的一把工具；Plugin 則是裝載一把或多把工具、使用說明與連接設定的整包套件。Plugin 也可能包含 [MCP](mcp.md) Server 設定，但「能安裝」不等於「自動取得所有權限」，仍要檢查來源、授權與網路／檔案邊界。

### Agent 能力也有「依賴管理」

一個專案可能同時仰賴別人維護的 Skill、提示詞、指示文件、Plugin 或 MCP Server 設定。若只把它們手動複製進資料夾，來源、版本與更新狀態容易散落；可用專門的套件管理工具把依賴列在設定檔、鎖定版本，再用更新流程提出變更，像管理一般程式套件一樣留下可審查的差異。

例如 Agent Package Manager（APM）是其中一種工具：Microsoft 官方文件將它描述為 AI Agent 的依賴管理器，可在 `apm.yml` 宣告專案使用的能力，並以 `apm.lock.yaml` 記錄鎖定資訊。GitHub 於 2026 年 11 月 3 日宣布 Dependabot 可更新 APM 宣告的 Git 依賴並重建 lockfile；此支援是**版本更新，不包含安全更新**。這是特定工具與平台的整合案例，不是所有 Agent Client 都採用的標準。

這類自動更新只代表「有人提出依賴版本變更」，不代表新版本可信或可直接部署。合併前仍應檢查來源與差異、執行測試，並確認權限沒有擴大；需要安全漏洞警示時，另查工具實際涵蓋範圍，不能把版本更新誤認成弱點修補。

Agent Plugins 規格的官方文件目前標示 **1.0.0 為 Published**，而 **1.1.0 為 Working Draft**；因此這裡只把 1.0.0 當作已發布版本，不把草稿功能寫成穩定標準。1.0.0 的核心契約是：根目錄放 `plugin.json`，Skill 放在 `skills/`，MCP Server 設定放在獨立的 `mcp.json`；其中 `plugin.json` 的 `$schema` 要指向對應版本，不能把 MCP 設定隨意內嵌在 manifest 裡。

GitHub 在 2026 年 8 月 12 日的官方 Changelog 說明，Agent Plugins 1.0 已可在 VS Code、Copilot CLI、GitHub Copilot SDK 與 Copilot app 使用；8 月 25 日又把 MCP Server、Plugin、Skill 與 Canvas 集中到 Copilot app 的 Customize 頁面。這些是特定產品的支援狀態，不代表每個 Agent Client 都已支援，也不代表安裝 Plugin 就自動取得工具權限。

## 生活比喻 / 實際例子

想像你買了一個木工工具箱：

- **Skill** 是電鑽或捲尺等單一工具
- **MCP Server** 是工具箱裡通往材料庫的取貨窗口
- **Agent Plugin** 是把工具、說明書和取貨設定一起裝好的工具箱
- **依賴鎖定檔** 像工具箱的採購清單，記下確切型號，讓同事安裝時拿到同一批工具

例如一個「部署檢查」Plugin，可能同時提供部署 Runbook Skill 和查詢 CI／雲端服務的 MCP Server。若專案另外用依賴管理工具固定它們的來源與版本，更新時也可以先看差異、跑檢查，再決定是否採用；這不會自動替 Plugin 做安全審核。

實際會聽到的說法：

- 「這個 Agent Plugin 可以在多個 Agent Client 共用，不用每個工具各維護一份包裝。」
- 「先檢查 Plugin 裡的 Skill、MCP Server 和權限，再決定是否安裝。」

## 為什麼要知道這個詞？

- Agent 能力開始從單一工具變成可分享、可管理的套件
- 同一套 Plugin 若能跨 Client 使用，可以減少重複維護，但要確認各 Client 的支援範圍
- Plugin 或 Skill 也可能是專案依賴；固定來源與版本能讓更新可追蹤、可審查
- 依賴管理不等於安全掃描：更新工具的支援範圍要逐項確認
- Plugin 可能攜帶外部工具設定，安裝前要檢查來源、權限與供應鏈風險

**官方參考：** [Agent Plugins 1.0.0 規格](https://agent-plugins.org/specification/) · [Microsoft：Agent Package Manager 文件](https://microsoft.github.io/apm/) · [GitHub Changelog：Dependabot version updates support Agent Package Manager（2026-11-03）](https://github.blog/changelog/2026-11-03-dependabot-version-updates-support-agent-package-manager) · [GitHub Changelog：Agent Plugins 1.0](https://github.blog/changelog/2026-08-12-agent-plugins-1-0-in-vs-code-copilot-cli-and-the-copilot-app) · [GitHub Changelog：Copilot app Customize](https://github.blog/changelog/2026-08-25-github-copilot-app-customize-tab-is-generally-available/)

---
**[← 回到 AI / 機器學習總覽](../README.md)**