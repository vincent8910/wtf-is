# Secret Scanning Alert Resolution（密碼掃描警示清除要求）— 合併前先確認沒有新洩漏的密碼

> **白話說：** Secret Scanning Alert Resolution 是一條套用在 Pull Request 的安全規則：如果這次修改引入的密碼或 API token 還被掃描到、且警示沒有處理，就不准合併。

---

## 它到底是什麼？

Secret Scanning 會在程式碼中尋找可能是密碼、API key、access token 或其他憑證的字串。**Secret Scanning Alert Resolution** 則把掃描結果接到 repository ruleset：Pull Request 要合併前，必須先完成 head commit 的掃描，而且這次 PR 引入的 secret alert 不能還開著。

這是「合併前的安全閘門」，不是單純在 CI 裡印一個警告。以 GitHub 在 2026 年 9 月 9 日公告的規則為例，管理者可在 repository、organization 或 enterprise 的 ruleset 中啟用 `require_secret_scanning_alert_resolution`；GitHub 也允許選擇要攔截 provider pattern、custom pattern 或 generic pattern。實際可用的 pattern、權限繞過方式與產品方案，仍要依 provider 文件和目前帳號方案確認。

它和「把 secret 從程式碼刪掉」不是同一件事：刪除字串只是修正動作，resolution rule 是在合併流程中強制檢查，避免有人帶著未處理的警示繞過審查。

## 生活比喻 / 實際例子

想像公司出貨前的金屬探測門：push protection 像貨物進倉庫時就攔下來；Secret Scanning Alert Resolution 則像包裹要送出大門前再檢查一次。前一道沒攔到、或某類檢查當時沒開，最後一道仍可能阻止包裹出貨。

例如開發者在 PR 裡不小心提交雲端 access token：GitHub 完成 head commit 掃描後，ruleset 發現仍有未處理的 secret alert，PR 就保持不可合併；開發者要移除或撤銷憑證、處理警示，必要時再重新掃描。

**造句：**

- 「這個 PR 被 **Secret Scanning Alert Resolution** 擋住了，先撤銷洩漏的 token。」
- 「Push protection 沒開的 repository，也可以用 PR ruleset 做第二道防線。」
- 「不能只把警示標成 resolved，還要確認憑證已撤銷、歷史紀錄與其他副本也處理完。」

## 它和相近概念有什麼不同？

| 概念 | 發生時機 | 作用 |
|---|---|---|
| Secret Scanning | 掃描程式碼或相關內容 | 找出疑似憑證 |
| Push Protection | push 進 repository 前 | 盡早阻止 secret 進入 repository |
| Secret Scanning Alert Resolution | Pull Request 合併前 | 沒有處理的 secret alert 就不准合併 |
| Code Review | PR 審查期間 | 檢查設計、邏輯與品質，不一定能辨識所有 secret |

這條規則不是萬靈丹：如果掃描尚未完成、規則只涵蓋部分 secret 類型，或具有 bypass 權限的人繞過 ruleset，仍可能需要人工追查。真正洩漏後，還要立刻撤銷或輪替憑證；刪掉程式碼不代表憑證已失效。

## 為什麼要知道這個詞？

- 把「不要把密碼 commit」變成可驗證的合併條件，而不是只靠口頭提醒
- 為 push protection 補上另一道 PR 層級的防線
- 讓團隊能把 secret scanning、ruleset、code review 與憑證輪替串成一條供應鏈安全流程
- 提醒你區分「掃描完成」「沒有未處理警示」與「憑證已撤銷」這三件不同的事

**官方參考：** [GitHub Changelog：Block pull requests with exposed secrets from merging（2026-09-09）](https://github.blog/changelog/2026-09-09-block-pull-requests-with-exposed-secrets-from-merging)

相關：[Trusted Publishing（信任發布）](trusted-publishing.md)、[Vulnerability（漏洞）](vulnerability.md)、[PR（Pull Request）](pull-request.md)、[Code Review（程式碼審查）](code-review.md)

---
**[← 回到軟體工程總覽](../README.md)**
