# Package Firewall（套件防火牆）— 在安裝依賴前攔截可疑套件

> **白話說：** Package Firewall 像包裹進大樓前的檢查站：先看寄件資訊與包裹內容是否可疑，再決定能不能送到開發者電腦或 CI 主機。

---

## 它到底是什麼？

Package Firewall 是介於開發工具／CI 主機與套件來源（registry）之間的檢查層。它會檢查套件查詢與下載流量，依照政策攔截可能含有惡意程式或其他風險的依賴。

這很重要，因為惡意套件可能在「安裝」階段就執行程式碼、讀取環境變數或竊取憑證，甚至還沒等到應用程式真正啟動。把檢查放在套件進入開發環境之前，能補上只靠程式碼掃描不一定看得到的防線。

GitHub 於 **2026 年 10 月 20 日**宣布 GitHub package firewall 進入 **public preview（公開預覽）**。GitHub 官方文件目前列出的政策包含：攔截已知惡意套件、依嚴重度攔截漏洞版本、阻擋 attestation（產物來源證明）降級、攔截新加入的安裝腳本，以及設定新版本最低發布天數。政策只會套用到實際經過防火牆的請求；官方目前列出的套件生態系為 npm，且功能仍在公開預覽、細節可能變動。它是 GitHub 的產品能力，不是通用標準，也不代表其他 registry 或未經設定的端點已受保護。

## 生活比喻 / 實際例子

公司收貨時，警衛不只看包裹標籤，也會把可疑包裹暫扣查驗。Package Firewall 類似這個檢查站：工程師執行 `npm install` 時，下載流量先經過企業設定的防線；若新套件在觀察期內或被威脅情報標記，就可依政策暫緩或阻擋。

**造句：**

- 「我們讓 CI 的 npm 下載先經過 Package Firewall，避免可疑套件直接進入建置環境。」
- 「套件防火牆只能檢查經過它的流量，不能保護繞過它或尚未支援的套件來源。」

## 為什麼要知道這個詞？

套件安裝本身就是執行外部程式碼的入口。Package Firewall 把檢查往前移到下載前，但要先確認實際套件來源有經過檢查，並搭配 lockfile、審查和測試，才能降低供應鏈風險。

## 它不能取代什麼？

Package Firewall 是縱深防禦的一層，不能取代：

- lockfile 與依賴版本審查
- 漏洞掃描、簽章／來源驗證與最小權限
- CI 測試、隔離執行及憑證保護
- 對預覽功能的支援範圍、政策與費用變更持續確認

只有開發工具與 CI 的套件流量確實設定為經過防火牆，政策才有機會生效；不能只因企業啟用了功能，就假設所有端點都已受到保護。

相關：[Dependency Cooldown（依賴更新冷卻期）](dependency-cooldown.md) · [Workflow Lockfile（工作流程依賴鎖定檔）](workflow-lockfile.md) · [Vulnerability（漏洞）](vulnerability.md) · [CI/CD](ci-cd.md)

**官方參考：** [GitHub Changelog：GitHub package firewall in public preview（2026-10-20）](https://github.blog/changelog/2026-10-20-github-package-firewall-in-public-preview/)

---
**[← 回到軟體工程總覽](../README.md)**
