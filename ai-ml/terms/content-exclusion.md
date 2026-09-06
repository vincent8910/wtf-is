# Content Exclusion（內容排除）— 明確禁止 AI 把特定資料帶進上下文

> **白話說：** 先把不該給助理看的文件從桌面收走，再讓它開始工作，避免機密或敏感內容被拿去分析、引用或傳給工具。

---

## 它到底是什麼？

**Content Exclusion** 是一種資料邊界規則：先指定哪些檔案、資料夾或內容不能被 AI 讀取或放進工作上下文，AI 才能開始回答或執行任務。

這和「叫 AI 自己不要看機密」不一樣。排除規則應由系統、平台或管理員在模型外面執行；如果資料被標記為排除，Agent 就不應把它當成可搜尋的背景資料，也不應透過工具繞路取得它。它可以和 [Context Engineering（情境工程）](context-engineering.md)、[Prompt Injection（提示詞注入）](prompt-injection.md) 及 [Zero Trust AI Agent（零信任 AI 代理）](zero-trust-ai-agent.md) 一起使用：前者準備正確資料，後兩者處理模型可能被誤導的風險，而 Content Exclusion 先縮小資料暴露範圍。

它不是萬能的防洩漏方案。仍需搭配權限控管、秘密掃描、工具輸出過濾、稽核紀錄與測試，並確認每一條 Agent 路徑都遵守同一套排除規則。

## 生活比喻 / 實際例子

想像你請外包助理整理專案資料：

- 可以看的：需求文件、公開 API 說明、一般 issue
- 不可以看的：正式環境密碼、客戶個資、尚未公開的併購資料
- 正確做法：在他進辦公室前，就把禁止文件鎖進櫃子；不是等他看到後才提醒「不要外傳」

例如，公司的 AI coding agent 要協助重構專案，但 `secrets/`、客戶資料目錄和未公開財務資料被設定為排除。Agent 仍可處理一般程式碼；若任務依賴被排除的檔案，就應清楚標記無法取得，而不是猜測內容或用另一個工具偷偷讀取。

**造句：**

- 「這個 AI 專案要先設定 **Content Exclusion**，不要讓客戶個資進入 Agent 的上下文。」
- 「排除規則改過後，要測試搜尋、摘要、工具呼叫和子 Agent 是否都真的遵守。」
- 「Agent 說它看不到那份檔案是可接受的；編造一個答案才是問題。」

## 為什麼要知道這個詞？

- AI Agent 能讀檔、搜尋和呼叫工具時，資料是否進入上下文就是重要的安全邊界
- 把敏感資料排除在外，可以降低提示詞注入、意外摘要與跨工具傳送造成的暴露風險
- 「沒有引用機密」不等於「沒有讀過機密」；要驗證資料是否根本沒有被載入
- 規則必須 fail closed：無法判斷檔案是否可用時，應標記不可用或停止，而不是默認放行

GitHub 在 2026-09-02 的官方 Changelog 說明，Copilot app 與 CLI 已支援由企業、組織和 repository 管理員設定的 content exclusion，排除檔案不會被用作 Agent workflow 的 context。這是產品實作案例；通用原則仍是把資料邊界放在模型之外，並對每條資料消費路徑做驗證。

相關：[Context Engineering（情境工程）](context-engineering.md)、[Context Window（上下文窗口）](context-window.md)、[Prompt Injection（提示詞注入）](prompt-injection.md)、[Zero Trust AI Agent（零信任 AI 代理）](zero-trust-ai-agent.md)

**官方參考：** [GitHub Changelog：Content exclusions generally available in Copilot app and CLI（2026-09-02）](https://github.blog/changelog/2026-09-02-content-exclusions-generally-available-in-copilot-app-and-cli/)

---
**[← 回到 AI / 機器學習總覽](../README.md)**
