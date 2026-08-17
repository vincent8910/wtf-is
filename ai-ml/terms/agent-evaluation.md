# Agent Evaluation（代理評估） — 用可重複的任務檢查 AI Agent 是否真的做對事

> **白話說：** 就像不是只看員工說「我會了」，而是拿一組真實工作題目，檢查他有沒有完成、過程有沒有越權，下一版有沒有退步。

---

## 它到底是什麼？

**Agent Evaluation** 是用一組可重複的任務、資料和評分規則，系統性檢查 [AI Agent](agentic.md) 的表現。它評估的不只是最後一句回答，也會看 Agent 有沒有選對工具、傳入正確參數、遵守權限、處理失敗，以及在多步驟任務中最後是否達成目標。

常見的評估組成包括：

- **測試案例**：準備一批代表真實使用情境的任務，不只挑最容易的 happy path
- **成功條件**：定義什麼叫做完成，例如資料正確、檔案產生、工具呼叫次數合理
- **軌跡檢查**：檢查 Agent 的工具選擇、參數、順序和中間結果，而不只看最終文字
- **安全檢查**：確認遇到敏感操作、未知資料或失敗時會停下來，而不是擅自繼續
- **回歸比較**：模型、Prompt、工具或 [AI Harness](../../software-engineering/terms/ai-harness.md) 更新後，重新跑同一批題目比較差異

一次「跑通」不代表 Agent 可靠。好的評估集要包含邊界條件、錯誤回應、權限限制、長流程中斷，以及接近真實 Provider payload 的資料。若評估資料本身不代表真實使用情境，漂亮的分數也可能只是考古題考得好。

OpenAI Agents SDK 在 2026 年 8 月的官方 release notes 中新增 provider-neutral testing utilities，讓 Agent、Sandbox、Realtime 和 Voice workflow 可以在不呼叫 Provider 的情況下做可重複測試；這是測試工具，不等於整個 Agent 已經通過真實 Provider 驗收。

## 生活比喻 / 實際例子

想像你要驗收一位新進助理：

- 先給他 20 個日常任務，看能不能正確完成
- 故意放一個權限不足的任務，看他會不會先停下來詢問
- 把某個工具改版，再重做同一批任務，看能力有沒有退步
- 不只看他交出的報告，也查看他是否拿錯資料、做了不該做的操作

實際會聽到的說法：

- 「這次 Agent Evaluation 的成功率變高了，但工具參數錯誤率也上升了。」
- 「不要只測正常流程，Agent Evaluation 要加入權限拒絕和 Provider 回傳錯誤。」
- 「換模型前先跑回歸評估，確認原本的任務沒有退步。」

## 為什麼要知道這個詞？

- Agent 會自己規劃和呼叫工具，單看最後回答很容易漏掉中途的錯誤或越權
- 可重複的評估集能讓模型、Prompt、工具和 Harness 的改動有客觀比較基準
- 測試 fixture 通過不代表真實 Provider payload 一定通過，兩者都要驗證
- 評估規則要寫清楚「什麼算成功、什麼算安全失敗」，不能只報一個漂亮百分比

相關： [Agentic（代理式）](agentic.md)、[AI Sandbox（AI 隔離環境）](ai-sandbox.md)、[Guardrails（護欄）](guardrails.md)、[Accuracy（準確率）](accuracy.md)

---
**[← 回到 AI / 機器學習總覽](../README.md)**
