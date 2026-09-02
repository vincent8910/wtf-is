# Human-in-the-Loop（人在迴路中）— 讓人在人工作流程的關鍵決策點把關

> **白話說：** Human-in-the-Loop（簡稱 HITL）是讓 AI 可以先處理工作，但在重要、不可逆或高風險的步驟，必須交給人確認後才能繼續。

---

## 它到底是什麼？

Human-in-the-Loop 不是叫人盯著 AI 的每一句輸出，而是把人的判斷放進工作流程中最需要的節點。例如：

- AI 可以先整理資料、提出計畫或修改程式碼
- AI 準備送出郵件、合併程式碼、付款或刪除資料時，先停下來
- 人檢查內容、範圍和風險，核准、修改或拒絕
- AI 只在獲得核准後執行下一步

它和「完全自動化」不同，也不等於每個小動作都要人工按一次。好的設計會依風險分級：讀取公開資料可以自動做，涉及權限、金錢、個資或正式環境的動作才要求確認。

## 生活比喻 / 實際例子

想像公司的行政助理：他可以先把報帳單整理好、把會議邀請填好，但真正送出邀請或核准付款前，仍要請主管看過。主管不是重做全部工作，而是在關鍵閘門確認「這件事真的可以送出去」。

例如 AI coding agent 完成 Pull Request 後，可以先提供檢查摘要與「是否建議核准」的判斷；但團隊仍可要求人工 review，並限制 AI 只能核准特定檔案範圍。若有人再推送新的 commit，原本的核准也應重新檢查，避免人核准的是舊版本。

**造句**：

- 「付款和 production deploy 要保留 **Human-in-the-Loop**，不能只相信模型自己判斷。」
- 「低風險的查詢可以自動化，高風險的寫入操作要進 HITL 核准流程。」
- 「HITL 不是把所有按鈕都交給人工，而是把人工放在真正的風險閘門。」

## 為什麼要知道這個詞？

- Agent 越能自己使用工具，越需要清楚定義哪些動作必須由人保留最後決定權
- 人工核准要綁定明確的版本、範圍與權限，不能只顯示一個模糊的「看起來沒問題」
- 核准評估和真正的 merge、付款或部署權限是不同事情，不能混為一談
- 任何核准流程都要考慮內容被更新、工具回傳不可信、模型誤判和核准疲勞等情況

**官方參考：** [GitHub Changelog：Copilot code review can now approve pull requests（2026-09-01）](https://github.blog/changelog/2026-09-01-copilot-code-review-can-now-approve-pull-requests/) · [Anthropic：Trustworthy agents in practice](https://anthropic.com/news/trustworthy-agents)

---
**[← 回到 AI / 機器學習總覽](../README.md)**
