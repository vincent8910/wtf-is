# YAML — 給人看的設定檔格式

> **白話說：** 跟 JSON 是親戚，但長得更乾淨、更容易讀，專門用來寫設定檔。

---

## 它到底是什麼？

軟體需要很多「設定」，例如：資料庫的位址是什麼？要連哪台伺服器？上線前要跑哪些步驟？

這些設定要寫在一個檔案裡，讓電腦讀得懂。[JSON](json.md) 是一種方式，但 JSON 有很多大括號、逗號、引號，寫起來容易出錯。

**YAML**（YAML Ain't Markup Language）是另一種格式，用「縮排」來表示層級關係，不需要那些括號，看起來更乾淨：

```yaml
伺服器:
  名稱: 台灣主站
  連接埠: 8080
  啟用HTTPS: true
  允許的網域:
    - example.com
    - api.example.com
```

對比 JSON 版本：

```json
{
  "伺服器": {
    "名稱": "台灣主站",
    "連接埠": 8080,
    "啟用HTTPS": true,
    "允許的網域": ["example.com", "api.example.com"]
  }
}
```

兩種寫法的意思完全一樣，但 YAML 少了很多符號，對人類更友善。

## 生活比喻 / 實際例子

- **條列式筆記 vs. 正式表格**：JSON 像 Excel 表格（有格線、有框），YAML 像你在筆記本上用縮排寫的條列筆記，看起來更清爽
- **便利貼 vs. 正式公文**：YAML 像隨手寫的便利貼，簡潔明瞭；JSON 像有固定格式的公文，規矩多但也更嚴謹

### 實際使用場景

- [CI/CD](ci-cd.md) 設定檔（GitHub Actions 的 `.yml` 檔就是 YAML）
- [Docker](container-docker.md) Compose 的 `docker-compose.yml`
- [K8s](k8s.md) 的部署設定幾乎全用 YAML
- 很多工具的設定檔（ESLint、Prettier、Jekyll 等）

## 為什麼要知道這個詞？

- 「這個設定要寫在 **YAML** 裡」→ 打開那個 `.yml` 檔，用縮排格式來寫設定
- 「**YAML** 格式錯了」→ 通常是縮排沒對齊，差一格就會壞掉（YAML 對空格很敏感）
- 「用 **YAML** 還是 JSON？」→ 設定檔通常用 YAML（好讀），程式之間傳資料通常用 JSON（好解析）

---
**[← 回到術語總覽](../README.md)**
