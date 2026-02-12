# Git Bash — Windows 用戶的友善終端機

> **白話說：** Git Bash 是 Windows 上的一個特殊 [Terminal（終端機）](terminal-cli.md)，讓你可以用跟 macOS / Linux 一樣的指令操作電腦。就像幫 Windows 裝了一個「翻譯機」，讓它聽得懂 macOS 的語言。

---

## 它到底是什麼？

Windows 本身有自己的命令列工具（命令提示字元、PowerShell），但它們的指令跟 macOS / Linux 不太一樣。大部分的教學和工具文件都是用 macOS / Linux 的指令寫的，這讓 Windows 用戶常常卡關。

**Git Bash** 解決了這個問題——它在 Windows 上模擬一個類似 macOS 的環境，讓你可以使用相同的指令：

| 指令 | macOS Terminal | Windows 命令提示字元 | Git Bash |
|------|---------------|-------------------|----------|
| 列出檔案 | `ls` | `dir` | `ls` ✅ |
| 清除畫面 | `clear` | `cls` | `clear` ✅ |
| 查看檔案內容 | `cat file.txt` | `type file.txt` | `cat file.txt` ✅ |

有了 Git Bash，你照著任何教學文件操作，都不用再「翻譯」指令了。

## 為什麼 Windows 用戶需要它？

1. **跟教學同步**：大部分 Claude Code 教學用的是 macOS 風格指令，Git Bash 讓你能直接跟著做
2. **更好用**：支援方向鍵瀏覽歷史指令、Tab 鍵自動補全檔名
3. **附帶 Git**：安裝 Git Bash 的同時也裝好了 [Git（後悔藥）](git.md)，一舉兩得
4. **Claude Code 相容**：在 Git Bash 裡執行 Claude Code 完全沒問題

## 安裝方式

👉 **[Git for Windows 官方下載](https://gitforwindows.org/)**

1. 下載安裝檔並執行
2. 安裝過程中大部分選項用預設值就好，一路 **Next**
3. 其中一步會問你要用什麼編輯器（Default Editor），選你喜歡的就好，不確定就選預設
4. 安裝完成後，在桌面或開始選單找到 **Git Bash** 圖示，點開就能用

### 裝好後怎麼確認？

打開 Git Bash，輸入：

```bash
git --version
```

看到版本號就代表安裝成功！接著可以試試：

```bash
node --version    # 確認 Node.js 也能在這裡用
npm --version     # 確認 npm 也 OK
```

## 使用小技巧

- **打開 Git Bash**：在任何資料夾裡按右鍵 →「Open Git Bash here」，就能直接在那個資料夾開啟
- **複製貼上**：在 Git Bash 裡用 `Ctrl + Insert` 複製、`Shift + Insert` 貼上（跟一般的 Ctrl+C / Ctrl+V 不同）
- **Tab 自動補全**：打檔名或資料夾名稱時，打前幾個字然後按 `Tab`，它會自動幫你補完

---

**[← 回到術語總覽](../README.md)** · **[了解 Terminal / CLI →](terminal-cli.md)** · **[了解 Git →](git.md)**
