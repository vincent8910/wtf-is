# Observability（可觀測性） — 從外面就能看懂系統裡面發生什麼事

> **白話說：** Monitoring 是看儀表板上的數字有沒有異常。Observability 是當數字異常時，你能**快速找出為什麼**——就像醫生不只看體溫計，還能做 X 光、驗血、問診來找出病因。

---

## 它到底是什麼？

**Observability（可觀測性）** 是指一個系統能讓你從外部輸出（logs、metrics、traces）來理解內部狀態的能力。

Observability 的三大支柱：

| 支柱 | 是什麼 | 比喻 |
|------|--------|------|
| **Logs（日誌）** | 系統發生了什麼事的文字紀錄 | 病歷 |
| **Metrics（指標）** | 數字化的衡量值（CPU、延遲、錯誤率） | 體溫、血壓 |
| **Traces（追蹤）** | 一個請求從頭到尾經過了哪些服務 | 快遞追蹤號碼 |

Monitoring vs Observability：
- **Monitoring** = 「CPU 超過 90% 了！」（知道有問題）
- **Observability** = 「CPU 高是因為 Service A 呼叫 Service B 時 timeout，導致重試風暴」（知道為什麼）

常見工具：Datadog、Grafana、Jaeger、OpenTelemetry

## 生活比喻 / 實際例子

- **Monitoring** = 車子儀表板亮了引擎燈（知道有問題）
- **Observability** = 接上 OBD 診斷器，看到是「第三缸點火異常」（知道哪裡壞了）

**造句**：
- 「我們的 **Observability** 做得不好，每次出事都要花好幾小時找原因」
- 「導入 OpenTelemetry 之後，系統的 **可觀測性** 大幅提升」
- 「[Microservice](microservice.md) 架構一定要有好的 **Observability**，不然出問題根本找不到是哪個服務的鍋」

## 為什麼要知道這個詞？

- 系統越複雜（[Microservice](microservice.md)、[K8s](k8s.md)），Observability 越重要
- 2025-2026 年 DevOps 領域最熱門的話題之一
- 跟 [Monitor / Alert](monitor-alert.md)、[DevOps](devops.md)、[Log](log.md) 直接相關

---
**[← 回到術語總覽](../README.md)**
