# Safety Case（安全論證）— 用證據支持「這套 AI 足夠安全」的說法

> **白話說：** Safety Case 不是一句「我們有做安全測試」，而是一份把安全主張、風險、控制措施與驗證證據串起來的論證，讓別人能檢查你憑什麼相信系統可安全運作。

## 它到底是什麼？

**Safety Case（安全論證）** 是安全關鍵產業常見的做法：先明確寫出要支持的安全主張，再用可追溯的分析、測試、監控與限制條件提供證據。放到 AI 系統裡，不能只寫「模型不會做壞事」，而要拆成可以檢查的問題：

- 在什麼環境、權限和工具範圍內，系統被宣稱安全？
- 哪些風險可能發生，哪些控制措施負責降低風險？
- 測試使用了什麼模型、[AI Harness](../../software-engineering/terms/ai-harness.md)、資料、預算與評分規則？
- 發生未知或失敗情況時，監控、隔離和人工介入怎麼接手？
- 哪些結果仍然未知，不能被包裝成安全保證？

OpenAI 在 2026 年 9 月 28 日提出，前沿模型的訓練可以逐步採用結構化、以證據為基礎的安全文件，並把對齊訓練、隔離（containment）與監控視為技術堆疊中的不同防線。這是官方正在發展的框架與方向，不代表已有一套全產業通用的固定格式。

Safety Case 和 [Agent Evaluation（代理評估）](agent-evaluation.md) 有關，但不是同一件事：Agent Evaluation 是執行測試、量測行為；Safety Case 則把主張、風險、控制與多種證據組織成可審查的整體。測試分數只是證據之一，不能單獨等於安全結論。

## 生活比喻 / 實際例子

蓋一座大橋時，工程師不會只說「材料很好」，而會提交：設計計算、承重測試、施工檢查、維修計畫，以及遇到極端天氣時的限制。Safety Case 就像 AI 系統的這份安全工程檔案。

例如一個能操作內部資料庫的 Agent，安全論證至少應說明：

1. 它使用哪個身分、能讀寫哪些資料。
2. 高風險操作是否需要人工核准，工具輸入如何驗證。
3. Prompt Injection、工具失敗、權限錯誤與異常行為怎麼被測試和監控。
4. 測試結果適用到哪個版本與環境，什麼變更會觸發重新評估。

**造句：**

- 「這次不是補一頁安全宣告，而是要把主張、控制措施和證據整理成 Safety Case。」
- 「Safety Case 裡要標明測試用的 Harness 和權限，不能只寫模型名稱。」
- 「目前證據只支持 staging 環境，不足以宣稱 production 安全。」

## 為什麼要知道這個詞？

- AI Agent 會使用工具和跨多步驟執行，單一 benchmark 分數不足以支撐安全結論
- 把主張、證據與適用範圍寫清楚，能避免把測試結果誤讀成普遍保證
- 模型、工具、權限或環境改變後，原本的論證可能失效，必須重新檢查
- 好的 Safety Case 也要誠實列出未知風險、測試限制與尚未覆蓋的情境

**官方參考：** [OpenAI：Towards safety cases for frontier AI training（2026-09-28）](https://openai.com/index/towards-safety-cases-for-frontier-ai-training) · [OpenAI：A shared playbook for trustworthy third party evaluations（2026-05-29）](https://openai.com/index/trustworthy-third-party-evaluations-foundations/)

相關： [Agent Evaluation（代理評估）](agent-evaluation.md)、[Behavioral Evaluation（行為評估）](behavioral-evaluation.md)、[AI Sandbox（AI 隔離環境）](ai-sandbox.md)、[Zero Trust AI Agent（零信任 AI 代理）](zero-trust-ai-agent.md)、[Guardrails（護欄）](guardrails.md)

---
**[← 回到 AI / 機器學習總覽](../README.md)**
