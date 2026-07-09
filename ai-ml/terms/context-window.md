# Context Window（上下文窗口） — AI 一次能「記住」多少東西的上限

> **白話說：** 就像一張桌子的大小——桌子越大，你能同時攤開越多文件來對照。Context Window 就是 AI 的「桌面大小」，決定它一次能處理多少資訊。

---

## 它到底是什麼？

Context Window 是指 [LLM](llm.md) 在一次對話中能處理的最大 [Token](../../software-engineering/terms/token.md) 數量。

Token 大約等於一個中文字或半個英文單字。Context Window 包含了：
- 你給 AI 的所有輸入（問題、文件、程式碼）
- AI 回覆的所有內容
- 系統提示（System Prompt）

```
Context Window = 你的桌面大小

┌─────────────────────────────────────┐
│  系統提示    你的問題    AI 的回答     │
│  ████░░░░  ████████░  ████████████  │
│                                     │
│  ← ─── 全部加起來不能超過上限 ─── →  │
└─────────────────────────────────────┘
```

各模型的 Context Window 大小（2026 年中）：

| 模型 | Context Window |
|------|---------------|
| Claude（Sonnet 5 / Opus 4.8 起） | 1M tokens |
| Gemini 3 Pro | 1M tokens |
| GPT-5.5 | 1M tokens（GPT-5.2 等較早子版本則是 400K） |
| DeepSeek V3.2 | 131K tokens |

（各家都持續在推新子版本，數字會再變動，此表僅反映 2026 年中的狀況）

超過 Context Window 會怎樣？AI 會「忘記」最前面的內容，或直接報錯。

## 生活比喻 / 實際例子

想像你在跟人開會：

- **Context Window 小** = 你只能記住最近 5 分鐘的對話，之前講的都忘了
- **Context Window 大** = 你能記住整場 3 小時會議的所有內容

**造句**：
- 「這份文件太長了，超過模型的 **Context Window**，要分段餵給它」
- 「Gemini 的 **上下文窗口** 有 100 萬 tokens，可以一次丟整本書進去」
- 「對話太長 AI 開始忘記前面講的，是因為超出 **Context Window** 了」

## 為什麼要知道這個詞？

- 使用任何 AI 工具都會碰到這個限制——聊太久它就「忘記」前面的內容
- Context Window 的大小直接影響 AI 能處理的任務複雜度
- 了解這個概念，你就知道為什麼有時候 AI 會「失憶」，以及怎麼解決（例如用 [RAG](rag.md)）
- 各家 AI 公司都在競爭誰的 Context Window 更大

---
**[← 回到 AI / 機器學習總覽](../README.md)**
