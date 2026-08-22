# Shared Agent Session（共享代理工作階段）— 讓一群人共同看著、引導同一個 AI Agent 做事

> **白話說：** 就像把一位 AI 助理拉進團隊群組：大家看得到它目前做到哪裡，可以補充資料、修正方向，也能一起檢查它最後交出的結果。

---

## 它到底是什麼？

**Shared Agent Session** 是一種多人共同參與的 Agent 工作模式。Agent 不只和單一使用者私下對話，而是在一個團隊看得到的對話、頻道或執行工作階段裡工作，讓其他人也能：

- 查看 Agent 的任務計畫、進度與產出
- 補充背景資料或重新調整方向
- 共同檢查差異、測試結果與預覽內容
- 在需要時停止工作，或把後續工作交給人處理

它和一般群組聊天不完全一樣：重點不是「大家一起問 AI 問題」，而是 Agent 正在持續執行一個可觀察、可被團隊引導的任務。

GitHub 在 2026 年 8 月 21 日的官方 Changelog，分別說明 GitHub Copilot 在 Slack 與 Microsoft Teams 的 shared agentic work：團隊可從原本的討論開始 Agent session，查看計畫、差異與產出，並在 Agent 非同步工作時共同引導。這些功能當時仍標示為 public preview；這裡收錄的是跨產品的工作模式，不代表所有聊天工具都已支援相同功能。

## 和其他概念有什麼不同？

| 概念 | 重點 |
|---|---|
| **一般 AI 聊天** | 一個人問、一個 AI 回答，工作脈絡通常是私人的 |
| **Shared Agent Session** | 多人共享同一個 Agent 工作脈絡，可以一起觀察與引導 |
| **Multi-Agent System** | 多個 Agent 彼此分工，不一定有人類共同參與同一個 session |
| **A2A** | Agent 與 Agent 之間的通訊，不是人與 Agent 的共享工作空間 |
| **Agent Evaluation** | 用測試任務與規則驗收 Agent，不等於多人協作執行 |

## 生活比喻 / 實際例子

想像工程團隊請一位外包工程師處理 bug：

- **私下 Agent session**：只有 PM 和外包工程師在小房間裡溝通，其他人只能等結果
- **Shared Agent Session**：外包工程師在團隊會議室工作，大家看得到他的計畫、修改內容和測試結果；有人發現方向不對，可以當場補充需求或請他停下來

例如團隊在 Slack 或 Microsoft Teams 討論「登入失敗」時，可以把 Agent 拉進同一段對話：Agent 讀取被允許的專案脈絡、調查問題、提出修正並開 Pull Request，團隊成員則在過程中查看差異、補充重現步驟，最後再由人審查。

**造句：**

- 「這次不要讓 Agent 私下跑完，改用 **Shared Agent Session**，讓 QA 也能看到它的調查過程。」
- 「共享工作階段方便協作，但每個人的可見資料和 Agent 權限仍要先設定好。」
- 「Agent 在背景繼續跑時，團隊可以回來同一個 **Shared Agent Session** 接著指揮。」

## 為什麼要知道這個詞？

- Agent 開始進入團隊協作工具後，工作不再只是「一個人對一個聊天機器人」
- 共用脈絡能減少轉述，但也會讓權限、敏感資料與責任歸屬更重要
- 看到產品宣稱支援 shared agent work 時，要確認是否真的能查看工具呼叫、差異、狀態與停止權限
- **Public preview 不等於穩定標準**；導入前仍要查支援範圍、資料邊界、稽核紀錄與人工接管方式

相關：[Agentic（代理式）](agentic.md)、[Multi-Agent System（多代理系統）](multi-agent-system.md)、[Agent Evaluation（代理評估）](agent-evaluation.md)、[AI Sandbox（AI 隔離環境）](ai-sandbox.md)

**官方參考：** [GitHub Changelog：The new GitHub Copilot experience in Slack](https://github.blog/changelog/2026-08-21-the-new-github-copilot-experience-in-slack) · [GitHub Changelog：Shared agentic work with GitHub Copilot in Microsoft Teams](https://github.blog/changelog/2026-08-21-shared-agentic-work-with-github-copilot-in-microsoft-teams)

---
**[← 回到 AI / 機器學習總覽](../README.md)**
