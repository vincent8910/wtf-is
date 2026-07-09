# gRPC — Google 開發的高速 API 通訊方式

> **白話說：** [REST](rest.md) 像寄信——用文字（JSON）溝通，人看得懂但比較慢。gRPC 像打電話——用壓縮過的格式溝通，人看不懂但超快，適合機器之間大量對話。

---

## 它到底是什麼？

**gRPC** 是 Google 開發的高效能遠端程序呼叫（Remote Procedure Call）框架。

簡單說，它是另一種讓服務之間溝通的方式，跟 [REST](rest.md) 做的事一樣，但更快：

| | REST | gRPC |
|--|---|---|
| 資料格式 | JSON（文字，人看得懂） | Protocol Buffers（二進位，更小更快） |
| 速度 | 普通 | 快 2-10 倍 |
| 串流 | 不支援（要用 WebSocket） | 原生支援雙向串流 |
| 適合場景 | 對外 API、網頁前端 | 內部微服務之間通訊 |
| 除錯 | 容易（看 JSON 就懂） | 較難（二進位看不懂） |

gRPC 最常用在 [Microservice](microservice.md) 架構中，讓服務之間的溝通更快更省資源。

## 生活比喻 / 實際例子

- **REST** = 寫信溝通。格式清楚、人人看得懂，但慢
- **gRPC** = 對講機溝通。快速即時，但外人聽不懂你們的暗號

**造句**：
- 「內部服務之間改用 **gRPC** 之後，延遲降了 60%」
- 「對外的 API 還是用 REST，但內部微服務之間用 **gRPC**」
- 「**gRPC** 支援串流，很適合即時資料推送的場景」

## 為什麼要知道這個詞？

- [Microservice](microservice.md) 架構中越來越常見
- 跟 [REST](rest.md)、[GraphQL](graphql.md) 並列為三大 API 通訊方式
- 後端工程師面試常被問到「什麼時候用 gRPC、什麼時候用 REST」

---
**[← 回到術語總覽](../README.md)**
