# API Key — 員工證 / 門禁卡

> **白話說：** API Key 就像公司的門禁卡。Claude Code 需要這張「卡」才能連上 Anthropic 的 AI 服務，沒有卡就進不了門。

---

## 它到底是什麼？

**[API](api.md)** 是 **Application Programming Interface** 的縮寫，白話說就是「軟體之間溝通的窗口」（詳細說明請看 [什麼是 API？](api.md)）。

而 **API Key** 就是使用這個管道的「通行證」——一串長長的英文數字組合，像這樣：

```
sk-ant-api03-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

當你在 [Terminal](terminal-cli.md) 裡使用 Claude Code 時，它會把這串 Key 傳給 Anthropic 的伺服器，伺服器確認「嗯，這張門禁卡是真的」，然後才開始為你工作。

## 為什麼我需要它？

因為 AI 服務不是免費的——Anthropic 需要知道「是誰在用」，才能計算用量和收費。API Key 就是你的身分識別。

就像：
- 進公司大樓要刷門禁卡
- 用 Netflix 要登入帳號
- 用 Claude Code 要有 API Key

## 怎麼取得？

1. 前往 **[Anthropic Console](https://console.anthropic.com/)**
2. 註冊或登入帳號
3. 點左側的 **API Keys**
4. 點 **Create Key** 產生一組新的

> ⚠️ **Key 只會顯示一次！** 產生後請立刻複製存好。如果忘了複製，就刪掉重新產一組。

## 安全注意事項

API Key 就像你的信用卡號碼，要好好保管：

| ✅ 應該做 | ❌ 不該做 |
|-----------|----------|
| 存在安全的地方（密碼管理器） | 貼到公開的網頁或聊天室 |
| 只自己使用 | 傳給其他人 |
| 外洩時立刻刪除換新的 | 覺得「應該沒人看到」就放著不管 |

---

**[← 回到術語總覽](../README.md)** · **[了解環境變數（設定 Key 時會用到）→](environment-variable.md)**
