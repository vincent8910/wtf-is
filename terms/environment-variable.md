# 環境變數 — 電腦的隱形備忘錄

> **白話說：** 環境變數就像貼在冰箱上的便條紙——你事先寫好一些重要資訊（像密碼、設定），程式需要的時候就去那裡找。

---

## 它到底是什麼？

**環境變數**（Environment Variable）是你電腦裡的一種「全域設定值」。

它的原理很簡單：
1. 你給一個「名字」配上一個「值」
2. 所有程式都可以用「名字」去查詢對應的「值」

例如：

| 名字 | 值 |
|------|---|
| `ANTHROPIC_API_KEY` | `sk-ant-api03-xxxxx...` |
| `HOME` | `/Users/你的名字` |
| `PATH` | 一長串資料夾路徑 |

當 Claude Code 啟動時，它會去找名叫 `ANTHROPIC_API_KEY` 的環境變數，讀取裡面的 [API Key](api-key.md) 來驗證身分。

## 為什麼我需要知道它？

設定 Claude Code 的 [API Key](api-key.md) 時，你可能需要把 Key 存到環境變數裡。這樣 Claude Code 每次啟動都能自動找到它，不用你每次手動輸入。

> 💡 **其實多數時候你不需要手動設定！** Claude Code 第一次啟動時會引導你登入或輸入 Key，自動處理好。只有在特殊情況下才需要手動設定環境變數。

## 怎麼設定？（需要的時候再來看）

### macOS / Linux

在 [Terminal](terminal-cli.md) 輸入：

```bash
export ANTHROPIC_API_KEY=你的API金鑰
```

要讓設定**永久生效**（不然關掉 Terminal 就忘了），把這行加到你的設定檔裡：

```bash
echo 'export ANTHROPIC_API_KEY=你的API金鑰' >> ~/.zshrc
```

> 💡 `~/.zshrc` 是什麼？它是 Terminal 的「開機設定檔」，每次打開 Terminal 時都會先讀它。把環境變數寫在裡面，就像把便條紙永久貼在門口一樣。

### Windows

在命令提示字元輸入：

```cmd
setx ANTHROPIC_API_KEY "你的API金鑰"
```

或者用圖形介面：
1. 右鍵「我的電腦」→ 內容
2. 進階系統設定 → 環境變數
3. 新增 → 名稱填 `ANTHROPIC_API_KEY`，值填你的 Key

---

**[← 回到術語總覽](../README.md)** · **[了解 API Key →](api-key.md)**
