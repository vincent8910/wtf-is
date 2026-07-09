# GraphQL — 讓前端「點菜」式地要資料

> **白話說：** [REST](rest.md) API 像套餐——餐廳決定給你什麼。GraphQL 像自助餐——你自己選要吃什麼，不多不少剛剛好。

---

## 它到底是什麼？

**GraphQL** 是 Facebook（Meta）開發的一種 API 查詢語言，讓前端可以精確指定需要哪些資料。

REST vs GraphQL 的差別：

```
REST（套餐式）：
  GET /users/123     → 回傳使用者的「所有」資料（名字、email、地址、頭像、設定...）
  GET /users/123/posts → 再打一次 API 拿文章

GraphQL（點菜式）：
  query {
    user(id: 123) {
      name          ← 我只要名字
      posts {       ← 順便把文章也給我
        title       ← 文章只要標題就好
      }
    }
  }
```

GraphQL 的優點：
- **不多拿**：只拿需要的欄位，省流量
- **不少拿**：一次請求就拿到所有需要的資料，不用打多次 API
- **前端自主**：前端改需求不用等後端改 API

缺點：
- 學習曲線較高
- 快取比 REST 複雜
- 小專案可能殺雞用牛刀

## 生活比喻 / 實際例子

- **REST** = 去餐廳點套餐，店家決定配什麼菜，你不能換
- **GraphQL** = 去自助餐，你自己夾想吃的，不想吃的不拿

**造句**：
- 「我們的 App 用 **GraphQL**，首頁只要一次請求就能拿到所有資料」
- 「改用 **GraphQL** 之後，手機版的流量省了 40%」
- 「**GraphQL** 的 schema 就是前後端的合約，改了大家都知道」

## 為什麼要知道這個詞？

- 跟 [REST](rest.md) 並列為兩大主流 API 風格
- GitHub、Shopify、Facebook 都用 GraphQL
- 前端工程師面試常考「REST 和 GraphQL 的差別」

---
**[← 回到術語總覽](../README.md)**
