# Vector Database — 專門存「AI 座標」的資料庫

> **白話說：** 一般資料庫像字典，用關鍵字查東西。Vector Database 像一張地圖，你指一個點，它幫你找附近最近的點——用來找「意思最像」的資料。

---

## 它到底是什麼？

**Vector Database（向量資料庫）** 是專門用來儲存和搜尋 [Embedding](embedding.md) 向量的資料庫。

傳統資料庫的搜尋方式：
- 你搜「貓」→ 只找到包含「貓」這個字的資料

Vector Database 的搜尋方式：
- 你搜「貓」→ 找到「貓」「小貓」「喵星人」「寵物」等**意思相近**的資料

```
傳統資料庫：  搜「好吃的拉麵」→ 只找到有「好吃」「拉麵」的文章
Vector DB：  搜「好吃的拉麵」→ 也找到「推薦日式湯麵」「必吃麵店」
```

常見的 Vector Database：Pinecone、Weaviate、Milvus、Chroma、pgvector

它是 [RAG](rag.md) 架構的核心元件——先把文件做 [Embedding](embedding.md) 存進去，使用者問問題時再從裡面找最相關的資料給 [LLM](llm.md)。

## 生活比喻 / 實際例子

想像你在圖書館找書：
- **傳統資料庫** = 用書名或作者查目錄，完全比對
- **Vector Database** = 跟圖書館員說「我想看跟時間旅行有關的科幻小說」，他幫你找出所有相關的書，即使書名裡沒有「時間旅行」四個字

**造句**：
- 「我們的 RAG 系統用 Pinecone 當 **Vector Database**」
- 「把所有客服 FAQ 做 Embedding 存到 **向量資料庫**，使用者問問題就能找到最相關的答案」
- 「**Vector DB** 的查詢速度很快，幾百萬筆資料也能毫秒級回應」

## 為什麼要知道這個詞？

- 2025-2026 年 AI 應用最核心的基礎設施之一
- 任何要做「智慧搜尋」「AI 客服」「知識庫問答」的產品都需要它
- 跟 [Embedding](embedding.md)、[RAG](rag.md)、[LLM](llm.md) 是一整套組合技

---
**[← 回到 AI / 機器學習總覽](../README.md)**
