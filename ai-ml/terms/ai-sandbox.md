# AI Sandbox（AI 隔離環境）— 給 AI 的安全工作室

> **白話說：** AI Sandbox 是限制 AI 能看什麼、改什麼、執行什麼的隔離環境，讓它即使判斷錯誤，也不會直接影響整台電腦或正式系統。

---

## 它到底是什麼？

AI Agent 可能需要讀檔、執行指令、安裝套件或呼叫網路。Sandbox 會先畫出邊界，例如：

- 只能讀寫指定的專案目錄
- 不能讀取 `.env`、SSH key 或其他機密
- 限制可以執行的指令
- 限制網路連線與外部服務
- 讓測試在隔離環境中執行

它不是「相信 AI 不會犯錯」，而是讓錯誤的影響範圍被控制住。還要分清楚兩種責任：沙盒限制實際能做的事；組織政策則決定哪些限制必須套用，而且可能比使用者在 IDE 裡的個人設定更優先。

例如企業管理的沙盒政策可能同時管制檔案系統、網路、Proxy、開發工具，甚至 macOS Keychain。這類集中管理的限制，應該透過政策診斷或等價的稽核方式確認「有設定」也確實「有生效」；不能只看設定畫面顯示正常，就當成安全邊界已經成立。產品的預覽功能或特定 IDE 實作也可能尚未是穩定標準，文件中應標明適用範圍與狀態。

## 生活比喻 / 實際例子

把 AI 想成能力很強的新進員工。你可以讓它在一間備有工具的工作室工作，但不會把公司總鑰匙、財務資料和 production 伺服器權限一起交出去。

例如讓 AI 修改一個小型專案時，可以只開放：

- 專案資料夾的讀寫權限
- 本地測試指令
- 必要的套件快取

而不是直接給它整個家目錄與所有環境變數。

## 為什麼要知道這個詞？

Sandbox 仍要搭配最小權限、[Guardrails](guardrails.md)、[Prompt Injection](prompt-injection.md)、Git diff、測試與 rollback。它是安全邊界，不是取代人工驗收的魔法。

在 AI Coding、Agent、Computer Use 與自動化工作流中，Sandbox 是從「AI 會做事」走向「AI 可以安全做事」的關鍵概念。GitHub 2026 年 9 月 8 日的官方 Changelog 也示範了企業集中管理沙盒政策的做法：管理員可控制沙盒啟用、檔案系統與網路存取等範圍，且受管理的限制會優先於使用者設定；這是產品案例，不代表所有平台都採用相同能力或優先順序。

---
**官方參考：** [GitHub Changelog：Enterprise-managed sandbox in Copilot for JetBrains（2026-09-08，公開預覽）](https://github.blog/changelog/2026-09-08-enterprise-managed-sandbox-in-copilot-for-jetbrains/)

---
**[← 回到 AI / 機器學習總覽](../README.md)**
