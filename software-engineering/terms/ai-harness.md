# AI Harness — 幫你管好 AI 的「中間管家」框架

> **白話說：** 就像一個管家幫你跟好幾個外包廠商溝通——你只要跟管家說要什麼，管家會幫你分配工作、追蹤進度、整合結果。AI Harness 就是幫你管理 AI 呼叫的中間層框架。

---

## 它到底是什麼？

**AI Harness** 是一種框架（Framework），用來包裝和管理 [LLM](../../ai-ml/terms/llm.md) 的 API 呼叫。

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

## 為什麼要知道這個詞？

- 任何要在產品中整合 AI 的團隊都會用到 AI Harness
- 了解這個概念，你就知道為什麼工程師不是「直接呼叫 ChatGPT API」就好
- 跟 [MCP](mcp.md)、[Agent](agent.md)、[Sub-agent](sub-agent.md) 概念密切相關
- 選對 AI Harness 可以省下大量開發時間

---
**[← 回到術語總覽](../README.md)**
