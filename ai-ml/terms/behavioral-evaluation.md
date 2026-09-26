# Behavioral Evaluation（行為評估）— 檢查 Agent 怎麼做，而不只看最後答案

> **白話說：** Behavioral Evaluation 是把 Agent 的可觀察行為當成測試目標，例如有沒有查證資料、使用正確工具、遵守權限，而不是只看最後寫出的那段話像不像標準答案。

---

## 它到底是什麼？

**Behavioral Evaluation** 是 [Agent Evaluation（代理評估）](agent-evaluation.md) 的一種細緻做法：把複雜任務拆成可觀察、可重複驗證的行為，逐項檢查 Agent 是否照預期運作。常見檢查包括：

- 遇到需要即時資料時，是否真的查了可信來源，而不是憑記憶猜
- 是否選對工具、傳入正確參數，並在權限不足時停下來
- 是否先讀取現況再修改檔案，完成後有沒有跑測試
- 失敗後是否採取安全的復原或求助，而不是無限重試
- 模型、Prompt、工具或 [AI Harness](../../software-engineering/terms/ai-harness.md) 更新後，既有行為有沒有退步

它通常像快速、確定性的單元測試或整合測試：斷言工具呼叫、檔案變更、權限決策、查證動作等中間證據。複雜任務不一定只有一條正確路徑，因此不要把不必要的工具順序硬編成唯一答案；可以改驗收安全結果與可接受的行為範圍。它和大型 end-to-end benchmark 互補：前者適合快速抓回歸，後者確認完整任務是否抵達終點。

## 生活比喻 / 實際例子

驗收一位專案助理時，不只看他最後交出的報告，也觀察他：

- 有沒有真的打電話向正確窗口查資料
- 發現權限不足時有沒有停下來請示
- 修改文件前有沒有先看最新版本
- 交件前有沒有按照清單自我檢查

例如測試「查詢目前天氣」這個能力，合理的行為斷言是 Agent 使用即時搜尋工具並引用查證結果；不是只比較它最後回答的文字是否剛好等於固定句子。

實際會聽到的說法：

- 「這次不是只看 benchmark 分數，還要補 Behavioral Evaluation，確認 Agent 真的有查資料。」
- 「工具 schema 改了以後，先跑行為回歸，避免 Agent 又跳過測試。」
- 「複雜流程不要鎖死工具順序，驗證它有安全完成任務即可。」

## 為什麼要知道這個詞？

- 最終答案看似正確，Agent 可能其實拿錯資料或做了越權操作
- 小而快的行為測試能在 Prompt、工具或模型更新後及早發現回歸
- 行為證據比單一總分更容易指出到底是哪個環節壞掉
- 測試仍要搭配真實 Provider payload、端到端任務與安全檢查，不能只靠 fixture

**官方參考：** [Google Developers Blog：The Anatomy of Harness Engineering（2026-09-09）](https://developers.googleblog.com/en/the-anatomy-of-harness-engineering-how-to-evaluate-iterate-and-guard-ai-coding-agents/)

相關：[Agent Evaluation（代理評估）](agent-evaluation.md)、[AI Harness](../../software-engineering/terms/ai-harness.md)、[Agent Permissions（代理權限）](agent-permissions.md)、[Zero Trust AI Agent（零信任 AI 代理）](zero-trust-ai-agent.md)

---
**[← 回到 AI / 機器學習總覽](../README.md)**
