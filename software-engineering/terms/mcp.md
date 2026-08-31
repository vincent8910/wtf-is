# MCP — AI 連接外部工具的共同插座規格

> **白話說：** MCP（Model Context Protocol，模型上下文協議）是一套讓 AI 應用程式以共同格式連接工具、資料與服務的開放協定。它像 USB-C：重點不是某一個品牌的工具，而是讓不同的 AI 應用程式與外部服務能依同一套規則溝通。

---

## 它到底是什麼？

MCP 定義 AI 應用程式（Client / Host）和 MCP Server 之間如何交換訊息，包括：

- Server 提供哪些工具、資源或提示
- Client 如何呼叫工具、取得結果
- 長流程或需要補充資料時，如何繼續同一個工作
- HTTP 連線、授權、錯誤與能力宣告應該怎麼處理

它不是模型本身，也不是「裝上就能做任何事」的萬能外掛。MCP 比較像一份共同的插座與接線規格；實際能做什麼，仍取決於 Server 暴露的能力、Client 的支援程度與授權範圍。

### 目前的規格狀態

官方目前的協定版本是 **`2026-07-28`**。這是已發布、可使用的版本，不是草案。這個版本的重要方向包括：

- **無狀態核心**：移除協定層的 `initialize` / `initialized` 交握與 `Mcp-Session-Id`，每個請求自帶版本與能力資訊，HTTP Server 可以更容易放在一般負載平衡器後面水平擴展
- **`server/discover`**：Server 可公開自己的版本、能力與身分，Client 不必先建立長連線才能做基本探索
- **Multi Round-Trip Requests（MRTR，多回合請求）**：工具若需要確認或補充資料，可以回傳 `resultType: "input_required"`，Client 再帶著 `inputResponses` 重試原始請求
- **Tasks 擴充**：長時間工作移到 `io.modelcontextprotocol/tasks` 擴充，使用 `tasks/get` 輪詢與 `tasks/update` 傳入後續資訊
- **更明確的快取與通知**：列表和讀取結果帶有 `ttlMs`、`cacheScope`；訂閱型通知改用 `subscriptions/listen`
- **授權強化**：授權伺服器的身分、Client 憑證與 issuer 綁定等規則更明確

這些是協定層能力，不代表每個 AI 工具或 MCP Server 已經完整支援。導入前要確認 Client、Server 與 SDK 實際支援的版本與功能。

## 生活比喻 / 實際例子

想像 AI 是一位被安排在辦公室裡的顧問：

- **沒有 MCP Server**：顧問只能看桌上的資料，無法查公司系統或操作工具
- **有搜尋類 MCP Server**：顧問可以依共同格式向搜尋服務提出請求，取得結果再整理給你
- **有資料庫類 MCP Server**：顧問可以查詢被授權的資料，但不代表它自動擁有修改或刪除資料的權限
- **有 MRTR**：顧問做到一半發現缺少確認，就先停在「需要補充資料」，拿到答案後再繼續，不必一直佔住一條電話線

例如你對 AI 說：「幫我查這個專案的 GitHub issue，整理成今天的進度。」

```text
你提出目標
  ↓
AI Client 依 MCP 規格發出工具呼叫
  ↓
GitHub MCP Server 查詢被授權的 issue
  ↓
Server 回傳結構化結果
  ↓
AI 整理成進度摘要
```

## MCP 不等於安全授權

接上 MCP 就像替員工接通一個公司系統，不代表員工可以進入所有房間。實際使用時仍要檢查：

- Server 是誰提供的，是否可信
- 工具是唯讀、可修改，還是可能刪除或對外發送資料
- Client 是否會在危險操作前要求人類確認
- OAuth、環境變數或其他憑證放在哪裡，以及權限是否符合最小權限
- 工具回傳的外部文字是否可能包含 Prompt Injection

MCP 的工具標註可以提供風險提示，但提示不是安全邊界；不可信的 Server 可以謊報工具行為。真正的限制應由授權、沙箱、固定規則與人類核准流程負責。

## 版本與相容性要注意什麼？

- 讀到 `2026-07-28` 時，先確認 Client 與 Server 是否都支援這個版本；舊版實作可能仍使用 `2025-11-25` 或更早版本
- **Tasks、MCP Apps 等擴充不是核心功能的同義詞**，要另外查該擴充的版本與支援矩陣
- HTTP+SSE 傳輸、Roots、Sampling、Logging 在目前規格中已列為 **Deprecated**；既有實作仍可能可用，但新系統不應只因為舊教學出現就採用
- 規格頁寫「支援」不等於某個產品已實作；要用該 Client / Server 的文件或實際測試確認

## 為什麼要知道這個詞？

- 工程師說「接 MCP」時，你知道那是在接一套標準化的 AI 工具與資料介面，不是安裝一個單一品牌 App
- 它能降低每個 AI Client 都要為每個服務重寫整合程式的成本
- 它也把工具權限、外部不可信資料、長流程與版本相容性帶進設計範圍
- 選 MCP Server 時，不要只看「能不能連上」；還要看工具清單、權限、資料流、版本、稽核與失敗時的行為

**造句：**

- 「這個 AI Client 支援 MCP，所以可以用共同格式連接不同工具。」
- 「MCP Server 能查資料，不代表它有權限修改資料。」
- 「升級到 `2026-07-28` 前，要先確認 Client、Server 和 SDK 的相容性。」
- 「MCP 工具回傳的網頁內容不一定可信，還是要防 Prompt Injection。」

**官方參考：** [MCP 2026-07-28 規格](https://modelcontextprotocol.io/specification/2026-07-28) · [規格變更紀錄](https://modelcontextprotocol.io/specification/2026-07-28/changelog) · [MCP 官方路線圖（2026-08-22）](https://blog.modelcontextprotocol.io/posts/mcp-roadmap/)

---

**[← 回到術語總覽](../README.md)**
