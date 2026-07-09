# Monorepo — 所有專案放同一個倉庫裡

> **白話說：** 一般公司每個專案有自己的 [Git](git.md) 倉庫，像每個部門有自己的辦公室。Monorepo 是把所有專案放在同一個大倉庫裡——像一棟開放式辦公大樓，所有人在同一個空間工作。

---

## 它到底是什麼？

**Monorepo（單一倉庫）** 是把多個相關專案放在同一個 [Git](git.md) [Repo](repo.md) 裡管理的做法。

```
Multi-repo（多倉庫）：          Monorepo（單一倉庫）：
├── frontend-repo/              ├── my-company/
├── backend-repo/               │   ├── frontend/
├── mobile-repo/                │   ├── backend/
└── shared-lib-repo/            │   ├── mobile/
（4 個獨立的 Git 倉庫）          │   └── shared-lib/
                                （1 個 Git 倉庫，裡面有多個專案）
```

Google、Meta、Microsoft 都用 Monorepo。好處是：
- **程式碼共享容易**：共用的程式碼改一次，所有專案都更新
- **原子性修改**：前後端要一起改的時候，一個 [PR](pull-request.md) 就搞定
- **統一工具鏈**：所有專案用同一套 [CI/CD](ci-cd.md)、Linter、測試

壞處是：倉庫會變得很大，需要特殊工具（Nx、Turborepo、Bazel）來管理。

## 生活比喻 / 實際例子

- **Multi-repo** = 每個部門有自己的辦公室，要合作就得跑來跑去
- **Monorepo** = 開放式辦公室，所有人在同一層樓，溝通方便但可能很吵

**造句**：
- 「我們決定遷移到 **Monorepo**，用 Turborepo 管理」
- 「**Monorepo** 的好處是改 shared library 不用跨 repo 發 PR」
- 「Google 的 **Monorepo** 有幾十億行程式碼，全公司都在同一個 repo」

## 為什麼要知道這個詞？

- 越來越多公司（尤其是中大型團隊）在採用 Monorepo
- 面試時常被問到「你們用 Monorepo 還是 Multi-repo？」
- 跟 [CI/CD](ci-cd.md)、[Git](git.md)、[Microservice](microservice.md) 的架構決策直接相關

---
**[← 回到術語總覽](../README.md)**
