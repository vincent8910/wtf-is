# npm — 軟體商店

> **白話說：** npm 就像手機上的 App Store 或 Google Play。你想安裝什麼軟體工具，就去 npm 這個「商店」下載。

---

## 它到底是什麼？

npm 全名是 **Node Package Manager**（Node 套件管理器）。它是一個命令行工具，讓你可以用一行指令就安裝各種軟體。

就像你在 App Store 搜尋「LINE」然後按下載一樣，你在 npm 輸入一行指令就能安裝 Claude Code。

## 為什麼我需要它？

因為 Claude Code 就是透過 npm 安裝的：

```bash
npm install -g @anthropic-ai/claude-code
```

這行指令翻譯成白話就是：「去 npm 商店，找到 Claude Code 這個工具，下載安裝到我的電腦上。」

其中：
- `install` = 安裝
- `-g` = 裝在全域（整台電腦都能用，不只限某個資料夾）
- `@anthropic-ai/claude-code` = 商品名稱（就像 App Store 裡搜尋 app 的名字）

## 怎麼取得 npm？

**你不需要額外安裝 npm！** 當你安裝 [Node.js](nodejs.md) 的時候，npm 就已經自動裝好了。就像買了手機，App Store 就已經內建好了。

## 裝好後怎麼確認？

打開 [Terminal（終端機）](terminal-cli.md)，輸入：

```bash
npm --version
```

看到版本數字就代表沒問題。

---

**[← 回到術語總覽](../README.md)** · **[上一個：Node.js](nodejs.md)** · **[下一步：認識 Terminal →](terminal-cli.md)**
