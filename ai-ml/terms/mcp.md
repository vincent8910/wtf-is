# MCP（模型上下文協議） — AI 的萬用插座

> **白話說：** MCP 就像 USB 接口——不管你插隨身碟、滑鼠還是鍵盤，都用同一種插座。MCP 讓 AI 用同一種方式連接各種外部工具，不用每個工具都重新學一套接法。

---

## 它到底是什麼？

MCP 全名是 **Model Context Protocol**（模型上下文協議）。它是一個開放協議，讓 AI 應用程式以一致的方式連接外部資料來源與工具。

AI 本身只會「思考」和「說話」。但很多時候你需要它做更多事：

- 幫你**查資料**（搜尋網頁、翻官方文件）
- 幫你**取得上下文**（讀取專案資料與資源）
- 幫你**操作工具**（執行查詢、跑測試或呼叫服務）

問題是，每個工具的接法都不一樣。MCP 提供共同的訊息格式、角色與能力協商方式，降低每個工具都要重新客製串接的成本。

## 2026-07-28 規格更新：從插座到可協商的連接協議

MCP 官方目前列出的最新規格版本是 **2026-07-28**。這代表 MCP 不只是「把工具插上去」，連接雙方還要理解彼此支援的版本、能力與工作流程。

這一版的重要方向包括：

- **無狀態核心**：移除 protocol-level session 與 `Mcp-Session-Id`；每個請求攜帶必要的協定版本與能力資訊
- **`server/discover`**：伺服器宣告支援的協定版本、能力與自我識別資訊，供客戶端選擇相容方式
- **版本協商**：若雙方版本不相容，應回報 `UnsupportedProtocolVersionError`，不能假設所有功能都可使用
- **Multi Round-Trip Requests（MRTR）**：伺服器可回傳 `InputRequiredResult`，客戶端補充資料後再重送原始請求，支援需要中途輸入的長流程
- **`resultType`**：結果區分一般完成結果與 `input_required` 等需要後續處理的中間結果
- **Tasks API**：針對可能需要較長時間完成的工作提供任務取得與更新模式

這些內容應視為協定版本的具體規格，不代表每個 MCP Client、Server 或 SDK 已經全部支援。實際整合前，仍要查該工具的版本、相容性與限制。

MCP 官方在 2026 年 8 月 22 日發布的 roadmap，已把 **Progressive Discovery（漸進式探索）**列為 **Improved primitives** 的發展方向：Server 先提供小型入口，等對話逐漸明確後再揭露更多工具目錄。這是 roadmap 上的發展方向，不代表目前所有 MCP Server 都已支援；實作時仍要確認具體產品的能力與 fallback 行為。

## 生活比喻 / 實際例子

想像你家的電器插座：

- **沒有 MCP**：每台電器需要專屬插座，換一台就要重新施工
- **有 MCP**：工具使用共同插頭，但插上前仍要確認電壓、規格與安全裝置

MCP 連接流程可以想成：

```text
AI Client
   ↓ 先確認版本與能力
MCP Server
   ↓ 宣告可用的工具、資源與限制
Tool / Resource / Prompt
   ↓ 必要時請求額外輸入，完成多輪工作
結果與狀態回報
```

實際會聽到的說法：

- 「這個 AI 支援 **MCP**，所以可以連接外部工具」
- 「MCP Server 提供查詢資料庫的 Tool」
- 「這個 Client 和 Server 的 MCP 版本不相容」
- 「這個任務需要 MRTR，先補充輸入後才能繼續」

## MCP 不等於安全保證

MCP 是協議，不是自動授權系統。即使 Client 與 Server 成功連線，仍要另外確認：

- 工具能讀取或修改哪些資料
- 使用者是否完成身份驗證與授權
- Server 是否可信、是否會外傳資料
- 是否限制網路、檔案與指令權限
- 工具輸入是否可能受到 Prompt Injection 影響
- 長任務是否有 timeout、取消、稽核與人工接管

「支援 MCP」只表示有一套共同的連接方式，不代表所有工具都安全，也不代表所有功能都能互通。

## 為什麼要知道這個詞？

MCP 讓 AI 工具整合更容易，但規格會演進。讀到產品文件時，應同時確認：

1. 使用哪個 MCP specification version
2. Client 與 Server 支援哪些 capabilities
3. 是否支援新版無狀態流程、MRTR 或 Tasks
4. 授權、資料邊界與安全控制由誰負責
5. 工具數量很大時，是否有 [Progressive Discovery](progressive-discovery.md) 或其他漸進式探索機制

這跟 [Skill](skill.md)、[Agentic](agentic.md) 與 [AI Sandbox](ai-sandbox.md) 的概念有關：MCP 負責連接方式，Skill 描述可重用能力，Agentic 描述自主工作模式，而 Sandbox 控制執行邊界。

**官方參考：** [MCP 2026-07-28 Specification](https://modelcontextprotocol.io/specification/2026-07-28) · [Changelog](https://modelcontextprotocol.io/specification/2026-07-28/changelog) · [MCP 官方 roadmap（2026-08-22）](https://blog.modelcontextprotocol.io/posts/mcp-roadmap/)

---
**[← 回到 AI / 機器學習總覽](../README.md)**
