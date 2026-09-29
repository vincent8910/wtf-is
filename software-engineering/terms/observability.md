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

### Agent Observability：把 Agent 的行動也留下來

當系統加入 AI Agent，Observability 不只要記錄 HTTP request 或服務錯誤，還要能看見 Agent 的工作軌跡：用了哪個模型、呼叫哪些工具、每一步花多久、在哪裡重試，以及最後是否完成任務。否則你只會知道「答案錯了」，卻不知道是模型判斷錯、工具回傳錯，還是權限或上下文出了問題。

GitHub 在 2026 年 9 月 23 日的 Copilot Changelog 示範了這種做法：透過 OpenTelemetry 匯出 Agent session、模型請求與工具使用的遙測資料，讓管理者在既有監控工具中查看逐步 trace。這是產品案例，不代表所有 Agent 都會自動產生相同欄位；實務上仍應明確定義 trace id、任務 id、工具結果、錯誤狀態與敏感內容遮罩。官方案例也特別說明，prompt 與 response 內容預設不匯出，開啟內容捕捉前要先檢查資料治理風險。

## 生活比喻 / 實際例子

- **Monitoring** = 車子儀表板亮了引擎燈（知道有問題）
- **Observability** = 接上 OBD 診斷器，看到是「第三缸點火異常」（知道哪裡壞了）

**造句**：
- 「我們的 **Observability** 做得不好，每次出事都要花好幾小時找原因」
- 「導入 OpenTelemetry 之後，系統的 **可觀測性** 大幅提升」
- 「Agent 失敗時不要只看最後答案，要用 **Agent Observability** 的 trace 找出是哪一次 tool call 出問題」
- 「[Microservice](microservice.md) 架構一定要有好的 **Observability**，不然出問題根本找不到是哪個服務的鍋」

## 為什麼要知道這個詞？

- 系統越複雜（[Microservice](microservice.md)、[K8s](k8s.md)），Observability 越重要
- 2025-2026 年 DevOps 領域最熱門的話題之一
- 跟 [Monitor / Alert](monitor-alert.md)、[DevOps](devops.md)、[Log](log.md) 直接相關
- Agent 系統還要把工具、模型、重試與任務結果串成可追蹤的執行軌跡

---
**官方參考：** [GitHub Changelog：OpenTelemetry in the GitHub Copilot app（2026-09-23）](https://github.blog/changelog/2026-09-23-opentelemetry-in-the-github-copilot-app/)

**[← 回到術語總覽](../README.md)**
