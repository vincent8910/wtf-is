# Computer Use（電腦操作代理）— 讓 AI 像人一樣操作桌面程式

> **白話說：** Computer Use 是讓 AI 不只讀文字或呼叫 API，而是看著螢幕、辨認畫面上的按鈕和欄位，再用滑鼠、鍵盤或無障礙介面完成操作。它特別適合處理沒有 API、命令列介面或 MCP 整合的舊系統與 GUI-only 軟體。

---

## 它到底是什麼？

一般 AI Agent 比較像會打電話給系統的助理：它需要 API、CLI 或其他結構化工具，才能查資料或執行動作。**Computer Use** 則像一位真的坐在電腦前的數位助理，能讀取畫面上的文字與視覺內容、點擊控制項、輸入文字、按鍵、捲動、拖曳，並依照工作流程切換桌面應用程式。

這種能力通常包含三個部分：

- **看懂畫面**：讀取視窗、按鈕、表格與其他視覺或無障礙資訊
- **操作介面**：使用滑鼠與鍵盤完成點擊、輸入、選取和拖曳
- **受控執行**：透過權限、人工核准、可重設的允許清單與隔離環境限制風險

Computer Use 不是「AI 什麼都能安全代做」。畫面座標可能因視窗大小改變，OCR 或視覺判斷也可能出錯；涉及付款、刪除、送出或 production 變更時，仍應保留人工確認。macOS 也可能需要使用者明確授予 Accessibility 與 Screen Recording 權限。

GitHub 在 2026 年 10 月 1 日的官方 Changelog 將 Computer Use 以 public preview 形式帶進 Copilot CLI 與 Copilot app，並以跨桌面應用程式的報表流程示範這種能力。這是產品採用案例，不代表所有 Agent 或作業系統都具備相同能力。

## 生活比喻 / 實際例子

有 API 的系統像餐廳提供線上點餐：助理直接送出結構化訂單。沒有 API 的舊系統則像只能到櫃台填紙本表格；Computer Use 就是請一位能看螢幕、會操作滑鼠鍵盤的助理代你填寫。不過他送出訂單前，最好仍讓你看一眼內容並按下確認。

**造句：**

- 「這套老舊 ERP 沒有 API，我們先評估能不能用 **Computer Use** 操作。」
- 「Computer Use 可以幫忙填表，但付款和刪除資料仍然要人工核准。」
- 「測試 Computer Use 時，要固定視窗狀態，也要測試按鈕找不到或畫面載入失敗的情況。」

## 為什麼要知道這個詞？

- 它讓 Agent 能接觸 GUI-only 與 legacy 軟體，但也把畫面誤判、權限與不可逆操作風險帶進工作流程
- 沒有 API 不代表可以直接自動化；正式導入前要先確認權限、隔離、人工核准與失敗後的回復方式
- 評估時不能只測「成功點到按鈕」，還要測視窗改版、延遲、權限不足、彈窗與錯誤畫面
- Computer Use 和 [MCP（模型上下文協議）](mcp.md) 是互補關係：MCP 適合結構化工具整合，Computer Use 可處理尚未提供整合介面的應用程式

**官方參考：** [GitHub Changelog：GitHub Copilot can now interact with desktop apps with computer use（2026-10-01）](https://github.blog/changelog/2026-10-01-github-copilot-can-now-interact-with-desktop-apps/)

相關： [Agentic（代理式）](agentic.md)、[AI Sandbox（AI 隔離環境）](ai-sandbox.md)、[Agent Permissions（代理權限）](agent-permissions.md)、[Human-in-the-Loop（人在迴路中）](human-in-the-loop.md)、[MCP（模型上下文協議）](mcp.md)

---
**[← 回到 AI / 機器學習總覽](../README.md)**