# AI Harness — 幫你管好 AI 的「中間管家」框架

> **白話說：** 就像一個管家幫你跟好幾個外包廠商溝通——你只要跟管家說要什麼，管家會幫你分配工作、追蹤進度、整合結果。AI Harness 就是幫你管理 AI 呼叫的中間層框架。

---

## 它到底是什麼？

**AI Harness** 是包在 [LLM](../../ai-ml/terms/llm.md) 外面的執行框架，用來管理模型如何取得上下文、呼叫工具、保存狀態，以及何時重試、並行或停止。它不只是把 API 包成另一個函式。

當你的應用程式要使用 AI 時，直接呼叫 API 會遇到很多麻煩事：

| 問題 | AI Harness 怎麼幫你 |
|------|-------------------|
| 要管理多個模型（GPT、Claude、Gemini） | 統一介面，切換模型只改一行設定 |
| [Context Window](../../ai-ml/terms/context-window.md) 有限 | 自動管理上下文、做摘要 |
| 需要呼叫外部工具（搜尋、資料庫） | 內建工具呼叫（Tool Use）管理 |
| 要處理錯誤和重試 | 自動重試、fallback 到其他模型 |
| 要追蹤花了多少錢 | 內建用量追蹤和日誌 |
| 要執行長時間、多步驟任務 | 管理狀態、checkpoint、停止條件與人工接管 |

```
沒有 AI Harness：
  你的程式 → 直接呼叫 GPT API → 自己處理所有細節

有 AI Harness：
  你的程式 → AI Harness → 自動管理 → GPT / Claude / DeepSeek
                ↕
          工具呼叫、上下文管理、錯誤處理
```

**AI Harness** 不只是 API 包裝層。對 Agentic 工作流來說，它也可能負責執行迴圈、工具權限、上下文、狀態保存、重試、評估與停止條件。

近期官方實務也顯示，Harness 的價值在「如何編排完整任務」，不在單次呼叫看起來省了多少 token：

- GitHub 2026 年 9 月 2 日的工程說明指出，過度壓短工具輸出，可能迫使 Agent 重讀或重跑，反而增加整體成本；應保留完成任務所需的資訊，並以整個 workflow 的成功率、時間與成本驗證改動。
- GitHub 2026 年 9 月 4 日介紹的 HydraFusion，會依任務的推理、產碼、除錯與工具使用需求，選擇直接完成、加入 review／revision 或升級的流程；這種「只在值得時增加模型呼叫」的做法叫選擇性編排。
- GitHub 2026 年 9 月 3 日示範平行 Agent 時，讓每個 session 使用獨立 Git worktree。平行不等於共用同一個工作樹；隔離是避免互相覆蓋的前提。

因此，設計或評估 Harness 時，除了模型清單，也要明確記錄：任務級成本、延遲、重試與恢復率、工具／背景工作的編排、隔離邊界，以及失敗時是否能安全停止或交給人處理。

評估一個 AI Harness 時，不要只問「支援哪個模型」，還要看：

- 任務成功率與回歸測試覆蓋率
- 工具呼叫是否正確、可追蹤
- token、工具與重試造成的總成本
- 失敗後能否恢復，或安全地交給人類接管
- 同一任務能否重現與比較

**模型能力不等於完整 Agent 系統能力。** 最後成果取決於模型、Harness、工具、資料、權限與驗收流程的組合。

常見的 AI Harness 框架：LangChain、LlamaIndex、Semantic Kernel、Vercel AI SDK 等。

## 生活比喻 / 實際例子

想像你要辦一場大型活動：

- **沒有 AI Harness** = 你自己打電話給場地、餐飲、音響、攝影⋯⋯每個廠商都要自己盯
- **有 AI Harness** = 你請一個活動公司，跟他說你要什麼效果，他幫你協調所有廠商

**造句**：
- 「我們用 LangChain 當 **AI Harness**，這樣切換模型很方便」
- 「這個 **AI Harness** 幫我們處理了 token 計算和上下文管理」
- 「不要自己從零寫 AI 整合，用現成的 **AI Harness** 框架比較快」
- 「這次不要只比較每次 tool call 的 token，要看 AI Harness 完成整個任務花多少成本。」
- 「平行跑兩個 Coding Agent 前，先讓 Harness 為每個 session 建獨立 worktree。」

## 為什麼要知道這個詞？

- 任何要在產品中整合 AI 的團隊都會用到 AI Harness
- 了解這個概念，你就知道為什麼工程師不是「直接呼叫 ChatGPT API」就好
- 跟 [MCP](mcp.md)、[Agent](agent.md)、[Sub-agent](sub-agent.md) 概念密切相關
- 選對 AI Harness 可以省下大量開發時間

---
**官方參考：** [GitHub：How we make AI coding more cost efficient without sacrificing task quality（2026-09-02）](https://github.blog/ai-and-ml/github-copilot/how-we-make-ai-coding-more-cost-efficient-without-sacrificing-task-quality/) · [Project HydraFusion（2026-09-04）](https://github.blog/ai-and-ml/github-copilot/project-hydrafusion-frontier-quality-via-multi-model-orchestration/) · [Run several agents at once（2026-09-03）](https://github.blog/ai-and-ml/github-copilot/github-copilot-app-for-beginners-run-several-agents-at-once/)

---
**[← 回到術語總覽](../README.md)**
