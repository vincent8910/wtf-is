# Agent Permissions（代理權限）— 決定 AI Agent 哪些動作能做、要先問人，或一律禁止

> **白話說：** Agent Permissions 就像替 AI 助理設計一張門禁表：哪些門可以自己開、哪些門要主管核准、哪些門永遠不能進。

---

## 它到底是什麼？

**Agent Permissions** 是把 AI Agent 可執行的操作，按照風險分成明確規則的權限模型。它不只是在 Prompt 裡提醒「請小心」，而是由執行環境或政策層實際判定每次操作要：

- **Allow（允許）**：可以直接執行，例如讀取已授權的專案檔案
- **Ask（詢問）**：先停下來請人確認，例如修改重要設定或連到外部服務
- **Deny（拒絕）**：不論 Agent 怎麼要求都不能做，例如讀取未授權的機密或執行危險命令

權限最好細分到具體的操作種類，而不是只寫一個模糊的「可以用終端機」。常見控制面向包括：Shell 命令、檔案讀取與編輯、網路網域、資料寫入、外部工具，以及是否需要人工核准。還要定義政策優先順序：組織管理的限制不能被使用者設定、自動核准或過去保存的核准紀錄繞過。

權限政策也不應只寫在 Agent 的 Prompt 裡。Google 2026 年 9 月 15 日的零信任 Agent 實務把治理移到平台層：除了先列出的規則檢查，還用意圖判斷與異常行為偵測處理「語法合法但業務意圖可疑」的操作，例如看似正常的退款其實是社交工程。這不代表可以放棄確定性檢查，而是把 **Allow / Ask / Deny**、交易上限、身分驗證與行為監控疊在一起；平台管理者的政策也應與 Agent 開發者分離，避免應用程式自己替自己放寬門禁。

它和 [AI Sandbox](ai-sandbox.md) 有關但不相同：Sandbox 限制 Agent 實際能碰到的環境；Agent Permissions 則回答「某一種操作在這個環境裡能不能做、是否要先問人」。兩者應一起設計，並用 [Zero Trust AI Agent](zero-trust-ai-agent.md) 的思路讓關鍵限制留在模型之外。

GitHub 於 2026 年 9 月 9 日公布的企業管理權限案例，將 Copilot Agent 操作分成 blocked、需要人工核准與可直接執行三類，涵蓋 Shell、檔案讀寫和網路網域。這是 GitHub Copilot 的產品實作，不代表所有 Agent 平台都有相同的設定名稱或優先順序；可把它當作權限政策的具體例子，而不是通用標準。

## 生活比喻 / 實際例子

想像公司請了一位很能幹的助理：

- 他可以自己讀公開的專案文件
- 要寄信給客戶或改正式資料，必須先請主管核准
- 薪資資料室和保險箱則完全禁止進入

同樣地，Coding Agent 可以直接讀取測試資料夾，但修改 production 設定、推送程式碼或連到陌生網域時，應該停下來交給人判斷，而不是因為使用者曾經按過一次允許就永久放行。

**造句：**

- 「先把這個 Coding Agent 的 **Agent Permissions** 設成讀檔允許、寫檔詢問、production 命令拒絕。」
- 「不要只看 Agent 有沒有 Sandbox，也要確認每類工具操作的權限政策。」
- 「組織的 Deny 規則不能被個人設定或 auto-approve 蓋掉。」

## 為什麼要知道這個詞？

- Agent 能執行命令、改檔案或連網時，真正的風險在副作用，不只在回答內容
- 把權限分成 Allow、Ask、Deny，比一句「請小心」更容易測試、稽核與回溯
- 最小權限能縮小 Prompt Injection、錯誤推理或被竄改工具造成的損害範圍
- 受管理政策可能覆蓋個人設定；導入前要確認政策真的生效，而不是只看設定畫面
- 高風險操作仍應保留 Human-in-the-Loop，並搭配 diff、測試、日誌與 rollback

相關：[AI Sandbox](ai-sandbox.md)、[Zero Trust AI Agent](zero-trust-ai-agent.md)、[Human-in-the-Loop](human-in-the-loop.md)、[Prompt Injection](prompt-injection.md)、[Agent Identity](agent-identity.md)

**官方參考：** [Google Developers Blog：Build zero-trust AI agents that judge intent not just syntax（2026-09-15）](https://developers.googleblog.com/build-zero-trust-ai-agents-that-judge-intent-not-just-syntax/) · [GitHub Changelog：Enterprise managed permissions for GitHub Copilot agent operations（2026-09-09）](https://github.blog/changelog/2026-09-09-enterprise-managed-permissions-for-github-copilot-agent-operations/) · [GitHub 文件：Enterprise managed settings — deny, ask, allow](https://docs.github.com/enterprise-cloud@latest/copilot/reference/enterprise-managed-settings#deny-ask-allow)

---
**[← 回到 AI / 機器學習總覽](../README.md)**
