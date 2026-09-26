# Agent Anomaly Detection（代理異常偵測）— 找出單次看不出來的危險行為

> **白話說：** Agent Anomaly Detection 是持續觀察 Agent 的工具呼叫、執行軌跡與累積行為，找出單一步驟看似正常、合在一起卻不尋常或越界的模式。

---

## 它到底是什麼？

**Agent Anomaly Detection** 是針對 AI Agent 工作階段與執行遙測資料的異常偵測方法。它不只問「這一次工具呼叫是否合法」，還會觀察一段時間內的行為，例如：

- 短時間重複呼叫同一個工具或大量翻頁
- 對同一筆資料持續寫入，或累積金額、數量超過合理範圍
- 工具呼叫順序、頻率或參數模式偏離正常工作流程
- Agent 的實際行為和使用者意圖、組織政策不一致

實作上可以先用便宜的統計規則篩出可疑工作階段，再用較昂貴的分析檢查完整軌跡與原因。它通常需要結合 log、tool trace、OpenTelemetry 等遙測資料，也可以把高嚴重度結果交給 runtime policy，暫停後續工具呼叫或要求人工審查。這是補充，不是取代工具執行前的權限檢查；單次防護看不到跨回合累積風險時，異常偵測才特別有價值。

## 生活比喻 / 實際例子

銀行不只看一筆刷卡是否在額度內，也會看：同一張卡是否在幾分鐘內跨城市連刷、連續小額扣款，最後累積成不合理的金額。每筆交易單獨看可能都合法，但整體模式值得攔下來確認。

例如每次退款都低於單筆上限，但 Agent 在同一工作階段對同一張訂單重複退款，異常偵測可以看到累積行為，發出警示並讓後續工具呼叫暫停。

實際會聽到的說法：

- 「單次 tool call 都通過了，但 Agent Anomaly Detection 發現它在跨回合重複寫入。」
- 「先把異常事件連回完整 trace，再決定要告警、阻擋還是交給人工。」
- 「異常偵測是監控層，不代表前面的身分、權限和交易限制可以省略。」

## 為什麼要知道這個詞？

- 多回合攻擊或失控行為，可能不會在任何單一步驟直接報錯
- 只看成功率、錯誤率等傳統指標，容易漏掉「做了不該做的事」
- 對外宣稱安全時，要能說明觀察哪些行為、多久內判定、如何處置
- 遙測資料本身也涉及隱私與權限，必須限制存取並保留可稽核來源

**官方參考：** [Google Developers Blog：Agent Anomaly Detection（2026-09-16）](https://developers.googleblog.com/en/agent-anomaly-detection-now-in-private-preview-on-the-gemini-enterprise-agent-platform/)

相關：[Zero Trust AI Agent（零信任 AI 代理）](zero-trust-ai-agent.md)、[Agent Permissions（代理權限）](agent-permissions.md)、[Observability（可觀測性）](../../software-engineering/terms/observability.md)、[Agent Evaluation（代理評估）](agent-evaluation.md)

---
**[← 回到 AI / 機器學習總覽](../README.md)**
