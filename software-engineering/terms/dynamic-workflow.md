# Dynamic Workflow（動態工作流）— 用程式碼編排 AI Agent 如何完成複雜任務

> **白話說：** 把「先做什麼、哪些可以同時做、何時交給哪個 Agent、失敗怎麼處理」寫成一份能執行的流程表，而不是只叫一個 AI 自己想辦法。

---

## 它到底是什麼？

**Dynamic Workflow** 是用程式碼定義任務流程的做法。流程可以把固定步驟和 [AI Agent](../../ai-ml/terms/agentic.md) 組合在一起，決定哪些工作要依序執行、哪些可以平行處理，以及如何驗證與使用前一步的結果。

它和單純把任務交給一個 Agent 不一樣：Agent 負責需要分析或判斷的部分；工作流程式負責順序、分支、平行、重試、結果合併與可觀測性。這讓複雜的多 Agent 任務比較容易重現、除錯和驗收，也能和 [AI Harness](ai-harness.md) 的工具、上下文與權限管理搭配。

要注意，Dynamic Workflow 不是任何單一產品的專有功能，也不是「用了就一定可靠」。流程本身仍要定義失敗條件、權限邊界、人工核准點和 [Agent Evaluation](../../ai-ml/terms/agent-evaluation.md)；如果只把不透明的自主迴圈換個名字，仍然很難稽核。

## 生活比喻 / 實際例子

想像籌備一場活動：場地確認、餐飲確認和宣傳設計可以同時進行；全部完成後，再由總召整合成活動計畫。Dynamic Workflow 就是把這張分工表寫成會自動追蹤進度的流程：能平行的就同時做，前一步失敗就停止或走備援，不讓每個人各自猜下一步。

例如一個程式碼審查流程可以：

1. 先讓 Agent 讀取變更並執行測試。
2. 同時請兩個審查 Agent 分別檢查功能與安全風險。
3. 彙整結果，若有重大問題就回到修正步驟。
4. 通過固定驗收條件後，才交給人決定是否合併。

實際會聽到的說法：

- 「這個長任務不要只靠一個 Agent 自由發揮，改成 Dynamic Workflow 比較容易追蹤。」
- 「資料擷取可以平行跑，但寫入正式資料庫前要設人工核准節點。」
- 「Workflow 的每個步驟都要留下輸入、輸出和失敗原因，之後才查得出是哪一段出問題。」

## 為什麼要知道這個詞？

- 任務一複雜，單一 Agent 的隱性決策就很難測試和重現。
- 用程式碼固定流程，能清楚區分「程式控制」和「模型判斷」。
- 平行處理可能省時間，但必須搭配隔離、權限與結果合併規則，不能共用可互相覆蓋的工作環境。
- 流程通過離線測試，不代表真實 Provider、工具錯誤或權限拒絕情境也一定通過。

---
**官方參考：** [GitHub Changelog：Dynamic workflows in Copilot CLI and the Copilot app（2026-10-01）](https://github.blog/changelog/2026-10-01-dynamic-workflows-in-copilot-cli-and-the-copilot-app/)

相關：[AI Harness](ai-harness.md)、[Sub-agent](sub-agent.md)、[Sandbox](sandbox.md)、[Agent Evaluation](../../ai-ml/terms/agent-evaluation.md)

---
**[← 回到術語總覽](../README.md)**
