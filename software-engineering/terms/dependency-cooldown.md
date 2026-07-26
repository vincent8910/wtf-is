# Dependency Cooldown（依賴更新冷卻期）— 新套件先放觀察區

> **白話說：** Dependency Cooldown 是依賴套件剛發布新版本後，先等待一段時間再自動更新，讓社群、掃描工具與維護者有機會發現問題。

---

## 它到底是什麼？

現代專案會依賴很多外部套件。套件一發布新版本，理論上可能有新功能，也可能包含 bug、相容性問題，甚至被植入惡意程式碼。

Cooldown 的做法是：

1. 新版本發布
2. 先等待設定的觀察期
3. 沒有明顯風險後，才讓 Dependabot 或自動化流程建立更新 PR
4. 再經過測試、審查與合併

GitHub Dependabot 的 cooldown 設定可用來延遲一般版本更新；安全更新通常不應被同樣延遲，實際行為要以官方文件與專案設定為準。

## 生活比喻 / 實際例子

像超商新品先放在觀察區：不是永遠不進貨，而是先看有沒有客人發現包裝問題、食安疑慮或大量退貨，再決定是否全面上架。

```text
沒有 cooldown：套件剛發布 → 自動更新 → 可能立刻進入建置與部署

有 cooldown：套件剛發布 → 觀察期 → 更新 PR → 測試與人工 review → 合併
```

## 它不能取代什麼？

Cooldown 只是供應鏈防禦的一層，不能取代：

- lockfile 與版本範圍管理
- 套件漏洞掃描與簽章驗證
- CI 測試與相容性檢查
- Pull Request 人工審查
- 最小權限與可回滾的部署流程

已知的重大安全修補不應因為一般 cooldown 規則而被盲目延遲；團隊應建立明確的安全更新例外流程。

## 為什麼要知道這個詞？

AI Coding 與自動化工具讓「產生更新 PR」變得更容易，也提高了依賴更新速度。Cooldown 提醒團隊：**自動化可以加快更新，但不能省略觀察與驗收。**

相關：[Dependency](dependency.md) · [Vulnerability](vulnerability.md) · [CI/CD](ci-cd.md) · [Supply Chain Security](vulnerability.md)

---
**[← 回到軟體工程總覽](../README.md)**
