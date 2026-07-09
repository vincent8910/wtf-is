# Tokenizer — 把文字切成 AI 能吃的「小塊」

> **白話說：** AI 不能直接讀文字，要先把文字切成小塊（token）才能處理。Tokenizer 就是那把「切文字的刀」——決定怎麼切、切多細。

---

## 它到底是什麼？

**Tokenizer（分詞器）** 是把文字拆解成 [Token](../../software-engineering/terms/token.md) 的工具。

AI 模型不認識「字」，只認識數字。Tokenizer 的工作就是：
1. 把文字切成小單位（token）
2. 把每個 token 對應到一個數字

```
英文：「Hello world」→ ["Hello", " world"] → [15339, 1917]
中文：「你好世界」→ ["你好", "世界"] → [57668, 99444]
```

不同的 Tokenizer 切法不同：
- 有的一個中文字 = 1 token
- 有的一個中文字 = 2-3 tokens
- 英文常見字通常 1 token，罕見字可能被切成多個

這直接影響 [Context Window](context-window.md) 能放多少內容，也影響 API 費用（按 token 計費）。

## 生活比喻 / 實際例子

想像你要把一篇文章裝進固定大小的箱子裡：
- **Tokenizer** = 決定怎麼把文章「折」起來的方式
- 折法不同，同一個箱子能裝的內容量就不同
- 中文通常比英文「佔空間」，因為每個字可能被切成多個 token

**造句**：
- 「這個模型的 **Tokenizer** 對中文不太友善，一個字要 2-3 個 token」
- 「API 費用是按 token 算的，**Tokenizer** 切越多就越貴」
- 「換了新的 **Tokenizer** 之後，同樣的 Context Window 能塞更多中文了」

## 為什麼要知道這個詞？

- 理解為什麼 AI 的「記憶力」（[Context Window](context-window.md)）有限
- 理解為什麼 API 費用跟文字長度有關
- 理解為什麼有些模型對中文比較「貴」——因為 Tokenizer 的切法不同

---
**[← 回到 AI / 機器學習總覽](../README.md)**
