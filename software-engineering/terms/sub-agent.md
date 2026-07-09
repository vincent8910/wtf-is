# Sub-agent — AI 派出的「小分隊」

> **白話說：** 就像主管把一個大案子拆成幾個小任務，分配給不同的下屬去做——Sub-agent 就是 AI agent 產生的「子 agent」，各自負責一塊工作，最後彙整結果。

---

## 它到底是什麼？

**Sub-agent（子代理）** 是指一個 AI [Agent](agent.md) 在執行複雜任務時，自動產生其他 agent 來分工合作。

```
大型任務的處理方式：

主 Agent（收到任務）
├─ Sub-agent A：負責研究和蒐集資料
├─ Sub-agent B：負責寫程式碼
└─ Sub-agent C：負責測試和驗證

主 Agent：彙整所有結果 → 交付
```

為什麼需要 Sub-agent？

| 問題 | Sub-agent 怎麼解決 |
|------|-------------------|
| 任務太大，一個 agent 處理不完 | 拆分給多個 sub-agent 平行處理 |
| 不同步驟需要不同能力 | 每個 sub-agent 可以用不同模型或工具 |
| [Context Window](../../ai-ml/terms/context-window.md) 不夠用 | 每個 sub-agent 有自己的 context，不會互相擠壓 |
| 需要同時做多件事 | Sub-agent 可以平行執行，加快速度 |

實際例子：你叫 [Claude Code](claude-code.md) 重構一個大型專案，它可能會：
1. 派一個 sub-agent 去分析現有程式碼結構
2. 派另一個 sub-agent 去研究最佳實踐
3. 自己根據結果來執行重構

## 生活比喻 / 實際例子

想像你是一個專案經理：

- **單一 Agent** = 你一個人做所有事：研究、寫報告、做簡報、聯絡客戶
- **Agent + Sub-agents** = 你把研究交給助理 A、簡報交給助理 B、自己專心做決策

**造句**：
- 「這個 AI 工具會自動產生 **Sub-agent** 來平行處理不同的檔案」
- 「主 agent 把翻譯任務拆成三個 **Sub-agent**，每個負責一個章節」
- 「用 **Sub-agent** 架構可以突破單一 context window 的限制」

## 為什麼要知道這個詞？

- 2026 年 AI agent 的主流架構——複雜任務幾乎都靠 sub-agent 分工
- 了解這個概念，你就知道為什麼 AI 工具能處理越來越大的任務
- 跟 [Agent](agent.md)、[AI Harness](ai-harness.md)、[Context Window](../../ai-ml/terms/context-window.md) 直接相關
- 很多 AI 編程工具（如 Claude Code）已經在用這個架構

---
**[← 回到術語總覽](../README.md)**
