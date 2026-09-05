# Trusted Publishing（信任發布）— 不保存長期密碼也能安全發布套件

> **白話說：** Trusted Publishing 是讓 CI/CD 工作流程用短期、可驗證的身分證明發布套件，不必把長期 npm token 放在程式庫或機器裡。

---

## 它到底是什麼？

Trusted Publishing 通常利用 **OpenID Connect（OIDC）**：發布平台收到 CI/CD 工作流程提供的短期身分憑證後，核對它是否來自指定的 repository、workflow 與 environment；條件符合才允許發布。它把「這次發布是誰、從哪裡來」交給平台驗證，而不是依賴一把多年不變的密碼。

以 npm 為例，GitHub 在 2026 年 9 月 3 日宣布，每個套件可以設定多組互相獨立的 trusted publishing（OIDC）設定，分別對應穩定版、預發布版或 staging workflow。設定可以允許先 stage，再經過人工核准；直接發布則要在每組設定中另外開啟。這些是 npm 的產品行為，不代表所有套件 registry 都有相同介面。

## 生活比喻 / 實際例子

想像公司倉庫出貨：不要把一把永久有效的總鑰匙放在每個外包人員手上，而是讓物流系統在每次出貨時發一張只在短時間有效、並寫明「哪間分店、哪張出貨單」的通行證。倉庫核對通行證後才放行，出貨完通行證就失效。

例如 GitHub Actions 要發布 npm 套件時，可以讓 workflow 以 OIDC 身分向 npm 證明來源。正式版本先進入 staged queue，完成惡意程式掃描後再由維護者核准；若 workflow 被入侵，攻擊者就不容易直接把版本推到 registry。

**造句：**

- 「我們把 npm 發布從長期 token 改成 **Trusted Publishing**，降低憑證外洩風險。」
- 「穩定版和 prerelease 用兩組 OIDC 設定，但每組都要限制 repository、workflow 和 environment。」
- 「Staged publishing 要等惡意程式掃描完成，維護者才能核准版本。」

## 它和相近概念有什麼不同？

| 概念 | 做法 | 主要風險或用途 |
|---|---|---|
| 長期 token | 把固定密碼交給 workflow | 外洩後可能長時間被重複使用 |
| Trusted Publishing | 每次用短期 OIDC 身分，依來源條件授權 | 減少長期憑證與人工管理負擔 |
| Staged Publishing | 先暫存版本，掃描或人工核准後才公開 | 在發布與公開之間增加安全閘門 |
| Provenance | 附帶「由哪個來源建出來」的可驗證證據 | 讓使用者或平台追溯產物來源；不等於自動授權發布 |

Trusted Publishing 不是「完全不用驗證」，也不是只要開啟 OIDC 就安全。仍要限制 workflow 權限、審查第三方 action、保護 environment，並確認 registry 實際核對哪些欄位。設定多組規則時，不應假設平台會依固定順序比對。

## 為什麼要知道這個詞？

- CI/CD 裡的長期 token 一旦外洩，攻擊者可能冒充發布者持續推送惡意版本
- OIDC 把授權綁到短期憑證與工作來源，能縮小憑證重放和橫向濫用的範圍
- staged、惡意程式掃描與人工核准可以形成發布前的安全閘門
- 供應鏈安全要同時看身分、workflow 權限、建置環境、產物來源與 registry 規則，不能只看一個綠色勾勾

**官方參考：** [GitHub Changelog：Multiple trusted publishing configurations for npm（2026-09-03）](https://github.blog/changelog/2026-09-03-multiple-trusted-publishing-configurations-for-npm)

相關：[Dependency（依賴套件）](dependency.md)、[Dependency Cooldown（依賴更新冷卻期）](dependency-cooldown.md)、[CI/CD](ci-cd.md)、[Environment Variable（環境變數）](environment-variable.md)

---
**[← 回到術語總覽](../README.md)**
