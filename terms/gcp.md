# GCP（Google Cloud Platform） — Google 的雲端服務平台

> **白話說：** Google 開的「電腦出租公司」——跟 [AWS](aws.md) 類似，但是 Google 家的，在 AI 和資料分析方面特別強。

---

## 它到底是什麼？

GCP 是 **Google Cloud Platform** 的縮寫，是 Google 提供的[雲端](cloud.md)服務平台。跟 [AWS](aws.md) 一樣，讓你租用伺服器、資料庫、儲存空間等各種服務。

GCP 最常聽到的服務：

| 服務 | 在做什麼 | 對應 AWS 的 |
|------|---------|------------|
| **Compute Engine** | 虛擬伺服器 | EC2 |
| **Cloud Storage** | 檔案儲存空間 | [S3](s3.md) |
| **Cloud SQL** | 託管[資料庫](database.md) | RDS |
| **GKE** | 託管 [Kubernetes](k8s.md)（Google Kubernetes Engine） | [EKS](eks.md) |
| **BigQuery** | 超大資料分析（Data Warehouse） | Redshift |
| **Vertex AI** | AI / 機器學習平台 | SageMaker |

GCP 的特色：
- **AI / ML 很強**：Google 畢竟是做 AI 的，相關工具最齊全
- **BigQuery**：分析超大量資料特別方便，很多 Data 團隊愛用
- **GKE**：Google 發明了 Kubernetes，他們自家的 K8s 託管服務當然最穩
- **網路品質好**：Google 的全球網路基礎設施很強

## 生活比喻 / 實際例子

如果雲端平台是不同的商場：

- **[AWS](aws.md)** = 最大的商場，什麼都有，選項最多
- **GCP** = Google 開的商場，AI 工具和資料分析特別強
- **Azure** = 微軟開的商場，跟 Office 365 整合最好

實際例子：
- 工程師說：「我們用 **GCP** 的 BigQuery 做資料分析」
- [DevOps](devops.md) 說：「我們的 K8s 叢集跑在 **GCP** 的 GKE 上」
- 老闆問：「我們用 AWS 還是 GCP？」工程師：「看需求，AI 相關的 **GCP** 比較方便」

## 為什麼要知道這個詞？

- 三大雲端平台之一，很多公司都在用
- 如果你的公司重度使用 Google 生態系（Gmail、Google Workspace），選 GCP 整合比較方便
- 雲端費用是公司大筆開支，PM 和老闆可能會參與「用 AWS 還是 GCP」的決策討論

---
**[← 回到術語總覽](../README.md)**
