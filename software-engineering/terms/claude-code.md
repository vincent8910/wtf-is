# Claude Code — Anthropic 的 AI 編程工具，在終端機裡用

> **白話說：** [Claude](claude.md) 的「工程師特化版」——不是在網頁上聊天，而是在[終端機](terminal-cli.md)裡直接操作你的程式碼，幫你寫功能、修 Bug、做重構。

---

## 它到底是什麼？

Claude Code 是 Anthropic 推出的 CLI（命令列）AI 編程工具。跟網頁版的 [Claude](claude.md) 不同，Claude Code 是在[終端機](terminal-cli.md)裡運作的，它可以：

- 直接讀取和修改你電腦上的程式碼
- 執行終端指令（跑測試、裝套件等）
- 搜尋整個專案找問題
- 幫你寫新功能、修 Bug、重構程式碼
- 自己規劃步驟然後一步步執行

你只要用自然語言告訴它要做什麼，它就會自己去看檔案、想方法、改程式碼。

跟 [Claude](claude.md) 的差別：
- **Claude**（網頁版）= 你複製程式碼貼給它，它回覆建議，你再手動改
- **Claude Code**（CLI 版）= 它直接存取你的專案，自己動手改

## 生活比喻 / 實際例子

- **Claude**（網頁版）= 你把文件拍照傳給顧問，顧問看完回覆建議，你自己去改
- **Claude Code** = 顧問直接坐在你旁邊，打開你的電腦幫你改

實際例子：
- 工程師說：「我用 **Claude Code** 重構了那個模組，半小時搞定」
- 工程師說：「**Claude Code** 直接幫我把測試寫好了」
- PM 問：「這個 Bug 多久能修？」工程師：「我開 **Claude Code** 看一下，應該很快」

## 為什麼要知道這個詞？

- 2025-2026 年最熱門的 AI 編程工具之一，很多工程師每天都在用
- 跟 [Gemini CLI](gemini-cli.md) 是同類型的直接競爭者（都是 CLI-based AI 編程工具）
- 它跟 [Cursor](cursor.md)、[Antigravity](antigravity.md) 不同——後者是圖形化 IDE，Claude Code 是純終端機操作
- 這份手冊（wtf-is）就是用 Claude Code 協助建立的

---
**[← 回到術語總覽](../README.md)**
