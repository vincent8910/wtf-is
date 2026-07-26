# Agentic（代理式） — AI 自己規劃步驟、自己動手做

> **白話說：** 一般的 AI 像客服——你問一句它答一句。Agentic AI 像一個實習生——你交代一個任務，它自己拆步驟、自己找資料、自己執行，做完再跟你報告。

---

## 它到底是什麼？

**Agentic** 是形容 AI 能夠**自主規劃和執行多步驟任務**的工作模式。

一般 AI 對話：
```
你：幫我查今天天氣
AI：今天台北 28 度，晴天。（結束）
```

Agentic AI：
```
你：幫我規劃下週的東京出差行程
AI：（自己思考）
  1. 先查下週東京天氣 → 執行
  2. 查你的行事曆空檔 → 執行
  3. 搜尋機票和飯店 → 執行
  4. 整理成行程表 → 回報給你
```

Agentic 的核心特徵：
- **自主規劃**：AI 自己決定要做哪些步驟
- **工具使用**：AI 會呼叫搜尋、計算、API 等工具
- **迭代修正**：做錯了會自己發現並修正
- **多步驟**：不是一問一答，而是完成整個任務

## 短任務與長時程任務

Agentic 不代表任務一定能可靠地跑很久。可以先區分：

| 類型 | 特徵 | 需要特別處理的風險 |
|---|---|---|
| 短任務 Agent | 幾個步驟內完成，例如查資料、改一個小檔案 | 工具權限、輸出正確性 |
| 長時程 Agent | 持續較長時間、跨多個階段與工具完成目標 | 狀態遺失、錯誤累積、成本失控、權限漂移 |

長時程任務通常需要 checkpoint、明確驗證點、可恢復狀態、人工接管與停止條件。不能因為 Agent 能自己規劃，就假設它會永遠朝正確方向前進。

## 如何評估 Agent 是否真的可靠？

不要只看最後回答像不像人，還要觀察：

- **Task success rate**：任務是否真的完成
- **Tool-call correctness**：是否正確使用工具
- **Recovery rate**：遇到錯誤後能否恢復
- **Human handoff rate**：需要人工接管的比例
- **Cost per successful task**：每次成功完成任務的總成本

[Claude Code](../../software-engineering/terms/claude-code.md)、[Sub-agent](../../software-engineering/terms/sub-agent.md) 都是 Agentic AI 的實際應用。

## 生活比喻 / 實際例子

- **非 Agentic AI** = Siri：你說一句它做一件事，不會主動多做
- **Agentic AI** = 能幹的助理：你說「幫我準備明天的會議」，他自己去訂會議室、印資料、通知與會者

**造句**：
- 「2026 年的趨勢是 **Agentic Workflow**——讓 AI 自己完成整個工作流程」
- 「這個工具是 **Agentic** 的，你只要說目標，它自己想辦法達成」
- 「我們在評估哪個 **Agentic** 框架最適合我們的需求」

## 為什麼要知道這個詞？

- 2026 年 AI 領域最熱門的關鍵字，幾乎每場 AI 發表會都在講
- 從「AI 聊天」進化到「AI 做事」的關鍵轉變
- 跟 [Sub-agent](../../software-engineering/terms/sub-agent.md)、[AI Harness](../../software-engineering/terms/ai-harness.md)、[MCP](mcp.md) 直接相關

---
**[← 回到 AI / 機器學習總覽](../README.md)**
