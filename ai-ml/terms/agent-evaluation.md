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

評估 Agent 時，還要把 **Harness 一起寫進實驗條件**。同一個模型在不同工具、上下文壓縮、重試、隔離環境與預算下，可能得到完全不同的結果；若只報模型名稱和最後答案，其他人無法重現，也不能公平比較。至少應記錄：模型與版本、Harness／工具介面、可用 turn／token／時間預算、重試規則、資料版本、評分規則，以及是否有人工或安全閘門。

GitHub 2026 年 9 月 2 日分享的實務是先用 agentic coding benchmark 做離線比較，再用受控線上實驗驗證候選改動；這提醒我們：離線通過是篩選證據，不是直接宣稱 production 已驗收。若改動涉及輸出壓縮或背景工作編排，也要檢查 Agent 是否因資訊遺失而重讀、重跑或多花回合。

評估上線後的 Agent，還要把「有沒有被使用、怎麼被使用」和「任務做得好不好」分開看。GitHub 2026 年 9 月 17 日的 Copilot usage metrics API 已把 Skill、custom agent、MCP server、slash command 與 plugin 的使用量和多樣性納入報表；其中 MCP 的 `interaction_count` 是連線或重連嘗試，不是每次工具呼叫，成功與失敗都會計入。這類 telemetry 可以找出採用率、啟用缺口與異常變化，但不能單獨證明任務品質。陣列為空或計數為零代表沒有匹配活動；資料不可用時欄位可能是 `null` 或缺失，不能當成零或成功。

GitHub 2026 年 9 月 11 日的 Code Review 更新又示範兩個可泛化的評估方向：讓 Agent 在隔離的權限邊界內實際執行 build、測試、腳本或 API 查詢，並用多個 Agent 各自檢查後再合併結果。前者是在驗證「它真的查過」而不是只看懂檔案，後者能增加覆蓋面；但兩者都不能取代固定資料集、軌跡檢查與真實 Provider 驗收。官方公布的改善數字屬於 GitHub 自家實驗，不應直接當成所有 Agent 的保證。

Anthropic 2026 年 9 月 18 日宣布與 Accenture 建立 embedded evaluators，讓獨立評估者和模型開發團隊一起做模型評估、紅隊測試、alignment assessment 與 safeguard 測試。這個案例可抽象成一個實務原則：評估不應只在產品完成後才做一次，而要把獨立視角、真實使用情境與安全測試嵌入開發流程；但「嵌入式評估」仍然需要清楚的測試範圍、資料隔離、評分規則與可重現證據，不能只用評估者掛名取代驗收。

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
- 「報告 Agent Evaluation 時要把 Harness、工具、預算和 retry 規則一起列出，不然結果無法重現。」
- 「離線 benchmark 通過後，還要用受控線上實驗確認真實 workflow 沒有回歸。」
- 「Usage metrics 顯示 MCP 連線嘗試增加，不代表工具真的成功執行；還要對照 tool trace 和任務結果。」

## 為什麼要知道這個詞？

- Agent 會自己規劃和呼叫工具，單看最後回答很容易漏掉中途的錯誤或越權
- 可重複的評估集能讓模型、Prompt、工具和 Harness 的改動有客觀比較基準
- 測試 fixture 通過不代表真實 Provider payload 一定通過，兩者都要驗證
- 評估規則要寫清楚「什麼算成功、什麼算安全失敗」，不能只報一個漂亮百分比
- 同一個模型換了 Harness、工具或預算，結果可能改變；比較時要固定條件或清楚標示差異
- 效率最佳化要看完整任務的成功率、成本、延遲與重試，不要只看單次模型呼叫的 token

**官方參考：** [GitHub Changelog：Agentic CLI customizations now in the usage metrics API（2026-09-17）](https://github.blog/changelog/2026-09-17-agentic-cli-customizations-now-in-the-usage-metrics-api) · [GitHub Changelog：Auto-resolution and analysis updates in Copilot code review（2026-09-11）](https://github.blog/changelog/2026-09-11-auto-resolution-and-analysis-updates-in-copilot-code-review/) · [Anthropic：Partnering with Accenture on embedded evaluation（2026-09-18）](https://www.anthropic.com/news/accenture-embedded-evaluation) · [GitHub：How we make AI coding more cost efficient without sacrificing task quality（2026-09-02）](https://github.blog/ai-and-ml/github-copilot/how-we-make-ai-coding-more-cost-efficient-without-sacrificing-task-quality/)

相關： [Agentic（代理式）](agentic.md)、[AI Sandbox（AI 隔離環境）](ai-sandbox.md)、[AI Harness](../../software-engineering/terms/ai-harness.md)、[Guardrails（護欄）](guardrails.md)、[Accuracy（準確率）](accuracy.md)

---
**[← 回到 AI / 機器學習總覽](../README.md)**
