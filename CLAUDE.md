# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 專案概述

**wtf-is** 是一份給**聽不懂專有名詞的人**看的多領域術語白話翻譯手冊。涵蓋軟體工程、股票投資、電子產業、行銷企劃、美術設計、企業管理等領域。附帶一個靜態搜尋網頁（PWA），可加到手機桌面即時查詢術語。

## 專案結構

- `README.md` — 主頁，全域索引（含各領域大綱 + 單字速查表）
- `software-engineering/README.md` — 軟體工程術語總覽
- `software-engineering/terms/*.md` — 軟體工程術語的詳細說明頁
- `stock/README.md` — 股票投資術語總覽
- `stock/terms/*.md` — 股票投資術語的詳細說明頁
- `electronics/README.md` — 電子產業術語總覽
- `electronics/terms/*.md` — 電子產業術語的詳細說明頁
- `marketing/README.md` — 行銷企劃術語總覽
- `marketing/terms/*.md` — 行銷企劃術語的詳細說明頁
- `design/README.md` — 美術設計術語總覽
- `design/terms/*.md` — 美術設計術語的詳細說明頁
- `management/README.md` — 企業管理與營運術語總覽
- `management/terms/*.md` — 企業管理術語的詳細說明頁
- `data-analytics/README.md` — 數據分析術語總覽
- `data-analytics/terms/*.md` — 數據分析術語的詳細說明頁
- `gambling/README.md` — 博弈術語總覽
- `gambling/terms/*.md` — 博弈術語的詳細說明頁
- `docs/` — 靜態搜尋網頁（部署此資料夾到 GitHub Pages）
  - `docs/index.html` — 單頁搜尋應用（Fuse.js 模糊搜尋 + PWA）
  - `docs/terms.json` — 搜尋索引（由 build script 自動生成，勿手動編輯）
  - `docs/manifest.json` — PWA 配置
  - `docs/sw.js` — Service Worker（離線快取）
  - `docs/icons/` — PWA 圖示
- `scripts/build-search-index.js` — 掃描所有 `terms/*.md` → 生成 `docs/terms.json`
- `package.json` — Node.js 依賴（僅 `marked`）
- `.github/workflows/build-search.yml` — GitHub Actions：術語變更時自動重建索引

## 術語頁面模板

每個 `terms/*.md` 必須遵循以下結構：

```markdown
# 術語名稱 — 一句話白話定義

> **白話說：** 用生活比喻解釋

---

## 它到底是什麼？
不用技術背景就能懂的解釋

## 生活比喻 / 實際例子
真實使用場景

## 為什麼要知道這個詞？
什麼時候會遇到

---
**[← 回到術語總覽](../README.md)**
```

## 主頁 README.md 結構規範

主頁作為全域索引，每個領域區塊包含：

1. **大綱表**：分類 | 術語數 | 說明（連結指向領域 README 的錨點）
2. **單字速查表（A-Z）**：純連結的 4 欄格子，只放術語名稱和連結，**不放**一句話解釋、分類等額外欄位

速查表格式範例：
```markdown
| | | | |
|---|---|---|---|
| [術語A](domain/terms/a.md) | [術語B](domain/terms/b.md) | [術語C](domain/terms/c.md) | [術語D](domain/terms/d.md) |
```

詳細資訊（詞彙、一句話解釋、比喻、你會在哪聽到、詳細連結）放在各領域的 `README.md` 中，不放在主頁。

## 新增術語的步驟

### 軟體工程術語
1. 在 `software-engineering/terms/` 下建立 `術語名稱.md`（用英文小寫 kebab-case 命名）
2. 按上方模板填寫內容
3. 在 `software-engineering/README.md` 對應的類別表格中新增一行（含詞彙、一句話解釋、比喻、造句、詳細連結）
4. 如果有合適比喻，也加到 `software-engineering/README.md` 底部的「比喻對照總表」
5. 在主頁 `README.md` 的軟體工程單字速查表中新增一行（只放術語名稱 + 連結）
6. 執行 `npm run build` 重建搜尋索引（或 push 後由 GitHub Actions 自動執行）

### 其他領域術語
1. 在對應領域資料夾的 `terms/` 下建立 `術語名稱.md`（用英文小寫 kebab-case 命名）
2. 按上方模板填寫內容（「回到總覽」連結指向該領域的 `../README.md`）
3. 在該領域的 `README.md` 對應的類別表格中新增一行
4. 如果有合適比喻，也加到該領域 README 底部的「比喻對照總表」
5. 在主頁 `README.md` 的該領域單字速查表中新增一行（只放術語名稱 + 連結）
6. 執行 `npm run build` 重建搜尋索引（或 push 後由 GitHub Actions 自動執行）

## Git 規範

- Commit message 不要加 `Co-Authored-By:` 行

## 寫作原則

- 目標讀者是**完全沒有技術背景的人**，禁止使用未解釋的技術術語
- 比喻要用台灣人日常生活熟悉的事物（麥當勞、便利商店、Line 等）
- 術語之間可以互相連結，用相對路徑 `[名稱](檔名.md)`
- 所有內容使用**繁體中文（台灣用語）**
- 各領域 README 的詳細表格欄位順序：詞彙 → 一句話解釋 → 比喻 → 你會在哪聽到 → 詳細說明連結
- 主頁 README 的速查表只放術語名稱 + 連結（4 欄 A-Z 格子），不放額外欄位
