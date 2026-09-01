# Progressive Discovery（漸進式探索） — 先給 Agent 小入口，再逐步揭露需要的能力

> **白話說：** Progressive Discovery 是不要一開始把所有工具、功能和文件全部塞給 AI，而是先給它一個精簡的入口，等任務方向變清楚後，再逐步找出並載入真正需要的能力。

---

## 它到底是什麼？

當一個 Agent 接上的工具越來越多，若每次對話一開始就把數百個工具的名稱、說明與參數全部放進上下文，會浪費 Token，也可能讓模型更難選到正確工具。Progressive Discovery 的做法是把「發現能力」拆成幾層：先讓 Agent 看見少量分類或搜尋入口，再依目前任務揭露更細的工具與參數。

MCP 官方 2026 年 8 月 22 日 roadmap 把這列為 **Improved primitives** 的發展方向，目標是讓 Server 提供小型入口，並隨著對話縮小範圍而逐步揭露工具目錄。這是 roadmap 上的方向，不是已由所有 Client／Server 共同支援的穩定規格；實際導入前要查產品文件與支援矩陣。

它和 [Context Engineering](context-engineering.md) 有關，但焦點不同：Context Engineering 是整體準備 Agent 所需資料、工具與記憶；Progressive Discovery 則是控制能力何時、以多少範圍進入上下文。

## 生活比喻 / 實際例子

想像你走進一座大型圖書館：櫃台不會把幾十萬本書全部搬到你桌上，而是先問你要查哪個主題，給你分類目錄；你選定「AI Agent 安全」後，才列出相關書架，再讓你挑某幾本書。這樣比較快，也比較不會拿錯資料。

例如一個連接 GitHub、Notion、Slack、資料庫與部署平台的 Agent，可以先只暴露「搜尋文件」「查程式碼」「查部署狀態」三個入口。使用者說要查一次部署失敗後，系統才展開部署平台相關工具，而不是每次都把所有資料庫寫入工具放在模型面前。

**造句**：

- 「我們的 MCP Server 工具太多，應該用 **Progressive Discovery** 降低初始上下文負擔。」
- 「Progressive Discovery 只是縮小探索範圍，不代表工具本身就安全；權限和確認流程仍要獨立設計。」
- 「做 Progressive Discovery 時，要測試 Agent 找不到能力、目錄過期和搜尋結果不完整時會不會 fail closed。」

## 為什麼要知道這個詞？

- 工具數量增加後，單純把所有工具列給 Agent 會增加成本，也可能降低工具選擇品質
- 它是 MCP 官方 roadmap 的明確發展方向，但目前仍要分清楚「roadmap」與「已發布規格」
- 它提醒工程師：上下文管理不只是壓縮文字，也包括控制工具與能力的曝光時機
- 設計時要把權限、快取、搜尋失敗、目錄過期與人工核准一起測試，不能只驗證 happy path

**官方參考：** [MCP 官方 roadmap（2026-08-22）](https://blog.modelcontextprotocol.io/posts/mcp-roadmap/) · [MCP 2026-07-28 規格](https://modelcontextprotocol.io/specification/2026-07-28)

---
**[← 回到 AI / 機器學習總覽](../README.md)**
