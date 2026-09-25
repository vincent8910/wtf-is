# Agent Memory（代理記憶）— 讓 AI Agent 在不同工作之間保留可用的經驗

> **白話說：** Agent Memory 是讓 AI Agent 把值得保留的資訊存到上下文以外，之後需要時再找回來，而不是每次都像第一次上班一樣重新問一遍。

---

## 它到底是什麼？

**Agent Memory** 是 AI Agent 用來保存、整理與取回資訊的一套機制。它保存的可能不是完整聊天紀錄，而是之後真的有用的內容，例如：

- 使用者長期偏好與工作規則
- 專案目前進度、重要決策與未完成事項
- 過去排錯後確認有效的做法
- Agent 自己需要在下一次任務延續的中間結果

它和 [Context Window](context-window.md) 不一樣：Context Window 是這一輪能同時攤開多少資料；Agent Memory 則是把部分資訊放到外部儲存，跨回合或跨工作階段取回。它也和 [RAG](rag.md) 不完全相同：RAG 著重從資料來源檢索內容來回答，Agent Memory 更著重「這個 Agent 過去做過什麼、哪些資訊值得下次延續」。實際系統可以同時使用兩者。

好的 Agent Memory 不應該把所有對話原封不動永久保存，而是要有：

- **寫入規則**：什麼值得記、什麼是一次性雜訊
- **取回規則**：什麼任務應該讀哪些記憶
- **更新與淘汰**：過時、矛盾或不再需要的內容要能修正或移除
- **權限與隔離**：不同使用者、專案或敏感情境的記憶不能混用
- **來源與信心**：記憶從哪裡來、是否已驗證，最好能追溯

近期官方案例把這個概念稱為讓 Agent 具備「institutional memory」：把組織文件與過去工作整理成之後可查詢的上下文，而不是每次只依賴目前對話。這也提醒我們，記憶不是單純把資料庫接上去，而是要設計保存、檢索、更新與治理流程。

## 生活比喻 / 實際例子

像一位長期合作的專案助理：

- **Context Window** 是他今天桌上攤開的文件
- **Agent Memory** 是他整理好的專案筆記與交接簿
- **RAG** 是他去公司的文件庫查找原始資料

例如，Agent 上週已確認「這個服務的測試要使用 staging 設定，不能碰 production」。下週接到同一專案任務時，它可以讀回這項已驗證的規則，避免重新踩雷；但如果設定已改版，記憶也必須能被新證據更新，而不是盲目相信舊筆記。

實際會聽到的說法：

- 「這個 Agent 有長期記憶，所以換一個工作階段還知道專案決策。」
- 「不要把整份聊天紀錄都塞進 Agent Memory，要先整理成可驗證的工作記憶。」
- 「Memory retrieval 找錯資料時，Agent 可能比沒有記憶更有自信地做錯事。」
- 「跨客戶的 Agent Memory 必須做租戶隔離，不能因為相似關鍵字就互相污染。」

## 為什麼要知道這個詞？

- 長時程任務不可能永遠依賴單一 Context Window
- 記憶寫錯、過時或串錯對象，可能造成持續性的錯誤
- Agent Memory 涉及隱私、資料保留、刪除權與權限邊界
- 驗收時不只要測「記不記得」，還要測能否正確取回、更新、忘記與隔離
- 記憶保存的是工作狀態，不代表內容天然正確；重要決策仍要保留來源與人工驗收

**官方參考：** [OpenAI：How V7 gives AI agents institutional memory（2026-09-21）](https://openai.com/index/v7/)

相關： [Context Window（上下文窗口）](context-window.md)、[Context Compaction（上下文壓縮）](context-compaction.md)、[Context Engineering（情境工程）](context-engineering.md)、[RAG（檢索增強生成）](rag.md)、[Agent Evaluation（代理評估）](agent-evaluation.md)、[Content Exclusion（內容排除）](content-exclusion.md)

---
**[← 回到 AI / 機器學習總覽](../README.md)**
