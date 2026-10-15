# Workflow Lockfile（工作流程依賴鎖定檔）— 固定 CI/CD 實際執行的依賴版本

> **白話說：** Workflow Lockfile 像一張封存的採購清單，除了記得工作流程用了哪個工具名稱，也記下它實際對應的版本，避免同一份設定下次執行時拿到已變動的程式碼。

---

## 它到底是什麼？

CI/CD 工作流程常引用第三方 Action 或可重用工作流程的 tag、branch，例如 `@v4` 或 `@main`。這些名稱可能在之後被移到另一個 commit，因此同一份 repository 設定，未來執行時可能載入不同程式碼。**Workflow Lockfile** 把依賴名稱與經審查的精確 commit 對照記錄下來，讓已鎖定的工作流程依照清單執行，並可檢查鎖定資料是否過期。

GitHub 於 **2026 年 10 月 14 日**宣布 GitHub Actions workflow dependency lockfiles 進入 **public preview**，目前適用範圍是 GitHub Enterprise Cloud 與有資料落地的 GitHub Enterprise Cloud。官方工具可為 Actions、其傳遞依賴及 reusable workflow 產生 `.github/workflows/actions.lock`；可逐條工作流程啟用，並由管理員要求 repository、organization 或 enterprise 範圍內的工作流程必須鎖定。這是 GitHub Actions 的預覽功能，不是所有 CI 平台都通用的標準。

鎖定不等於審查：它能降低 tag 或 branch 移動後依賴悄悄換碼的風險，但若一開始鎖定的 commit 本身就有問題，lockfile 仍會忠實地固定那份有問題的程式碼。因此要先審查來源，再鎖定，並透過更新 PR 定期檢視新版本。

## 生活比喻 / 實際例子

想像食譜寫著「去巷口買一包最新款的調味料」；下週店家換了配方，照同一張食譜煮出來味道卻不同。Lockfile 就像在食譜旁記下品牌、批號和配方版本，讓每次照著做都拿到同一份材料；但如果當初挑到過期調味料，記錄批號也不會讓它變安全。

**造句：**

- 「我們先審查 GitHub Actions 依賴，再建立 **Workflow Lockfile**，避免 tag 被移動後 CI 偷換程式碼。」
- 「這個工作流程已啟用 lockfile，更新 Action 時要一併更新對應的鎖定 commit。」
- 「lockfile 檢查通過只代表版本對得上，不代表依賴本身已經安全。」

## 為什麼要知道這個詞？

- CI/CD 工作流程本身也會下載並執行外部程式碼，是軟體供應鏈的一部分
- tag 或 branch 名稱可變，精確 commit 鎖定有助於重現工作流程與降低未預期更新
- 必須一併檢查傳遞依賴、更新流程與政策要求，不能只鎖最上層 Action
- 鎖定是可重現性與變更控制，不是對依賴安全性的保證

相關：[Dependency（依賴套件）](dependency.md)、[Dependency Cooldown（依賴更新冷卻期）](dependency-cooldown.md)、[Trusted Publishing（信任發布）](trusted-publishing.md)、[CI/CD](ci-cd.md)

**官方參考：** [GitHub Changelog：GitHub Actions workflow lockfiles in public preview（2026-10-14）](https://github.blog/changelog/2026-10-14-github-actions-workflow-lockfiles-in-public-preview/)

---
**[← 回到術語總覽](../README.md)**
