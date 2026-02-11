# EKS（Amazon EKS） — AWS 上的託管 Kubernetes 服務

> **白話說：** 如果 [K8s](k8s.md) 是貨櫃碼頭的管理系統，EKS 就是「Amazon 幫你架好、幫你維護的貨櫃碼頭」——你只管放貨櫃進去，碼頭的維修保養 Amazon 搞定。

---

## 它到底是什麼？

EKS 是 **Elastic Kubernetes Service** 的縮寫，是 [AWS](aws.md) 提供的託管 [Kubernetes（K8s）](k8s.md) 服務。

自己架 K8s 很複雜——要設定 Cluster、管理 Node、處理更新和安全性。EKS 幫你把這些麻煩事都處理好，你只需要專注在部署和管理你的應用程式。

簡單對比：

| 方式 | 你要做的 | 比喻 |
|------|---------|------|
| **自己架 K8s** | 自己建碼頭 + 自己管理 + 自己修 | 買地自己蓋倉庫 |
| **用 EKS** | Amazon 幫你建好碼頭，你只管放貨櫃 | 租現成的倉庫 |

其他雲端平台也有類似的服務：
- [GCP](gcp.md) 的 **GKE**（Google Kubernetes Engine）
- Azure 的 **AKS**（Azure Kubernetes Service）

## 生活比喻 / 實際例子

想像你要經營物流，需要一個貨櫃碼頭：

- **自己架 K8s** = 自己買地、蓋碼頭、請人管理維護
- **用 EKS** = 直接租 Amazon 蓋好的碼頭，設備齊全、有人幫你維護，你專心運貨就好

實際例子：
- [DevOps](devops.md) 說：「我們的 K8s 叢集跑在 **EKS** 上」
- 工程師說：「**EKS** 自動幫我們升級 K8s 版本，不用自己處理」
- PM 問：「為什麼用 EKS 而不是自己架？」工程師：「自己架要花很多時間在維護上」

## 為什麼要知道這個詞？

- 如果你的公司用 AWS 又用 K8s，幾乎一定是用 EKS
- 了解 EKS 可以幫助你理解 AWS 帳單上的費用項目
- 聽到工程師說「EKS」，就是在說「AWS 上的 Kubernetes」

---
**[← 回到術語總覽](../README.md)**
