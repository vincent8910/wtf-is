# Workflow Execution Protection（工作流程執行防護）— 先限制哪些自動化工作能被觸發

> **白話說：** 像工廠的門禁規則，先確認誰能啟動哪條生產線，避免陌生人借入口讓機器碰到機密或執行危險操作。

---

## 它到底是什麼？

Workflow Execution Protection 是在自動化工作開始前，依事件來源、工作流程與政策決定允許、警告或阻擋執行的防護方式。它特別適合 CI/CD：一個看似只是「有人開了 PR」的事件，可能會讓工作流程讀取機密、執行程式碼或取得寫入權限。

例如 GitHub Actions 的 `pull_request_target` 事件會在目標 repository 的脈絡下執行，可能接觸 repository secrets。若流程再執行來自 fork 的不可信程式碼，就可能讓外部程式取得機密或污染建置環境。因此，除了審查 workflow 內容，也應在執行入口設定明確政策、限制 token 權限，並避免在高權限工作中執行未審查程式碼。

GitHub 在 2026 年 11 月 2 日公告，公開 repository 的 `pull_request_target` 預設阻擋將自 2026 年 12 月 2 日開始生效；生效前會有短暫測試時段。這是 GitHub Actions 的平台政策與特定觸發事件，不是所有 CI 平台共同採用的標準；實際日期、適用 repository 與政策設定應以官方文件為準。

## 生活比喻 / 實際例子

想像工廠有人按下「開始生產」按鈕：門禁不只確認按鈕有沒有被按，也要確認按的人、原料來源和機台權限都合規。Workflow Execution Protection 就是在生產線啟動前檢查這些條件。

- 「先檢查哪些 PR 事件會啟動高權限 workflow，再決定要不要允許。」
- 「這個 workflow 會讀取 secrets，不能直接執行外部 fork 傳來的程式碼。」

## 為什麼要知道這個詞？

- CI 工作流程會執行程式碼、讀取憑證或修改 repository，不只是被動的檢查腳本。
- 在入口依來源與事件設限，可降低不可信輸入借高權限流程取得機密的風險。
- 平台預設規則只涵蓋其明確列出的事件與環境；仍要檢查 workflow 權限、執行內容及其他入口。
- 不要為了讓檢查通過而寬泛地允許事件；只對必要 workflow 授權，並持續觀察實際執行情形。

相關：[CI/CD](ci-cd.md) · [Workflow Lockfile（工作流程依賴鎖定檔）](workflow-lockfile.md) · [Secret Scanning Alert Resolution（密碼掃描警示清除要求）](secret-scanning-alert-resolution.md) · [Agent Permissions（代理權限）](../../ai-ml/terms/agent-permissions.md)

**官方參考：** [GitHub Changelog：pull_request_target blocked by default December 2（2026-11-02）](https://github.blog/changelog/2026-11-02-pull_request_target-blocked-by-default-december-2/)

---
**[← 回到軟體工程總覽](../README.md)**