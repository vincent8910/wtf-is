# Model Routing（模型路由）— 依任務需要選擇合適的 AI 模型

> **白話說：** Model Routing 就像公司的派工櫃台：簡單工作交給快速、便宜的同事，複雜工作交給能力更強的專家，不是每件事都派同一個人。

---

## 它到底是什麼？

**Model Routing（模型路由）** 是根據輸入任務、品質要求、延遲、成本、可用性或安全政策，動態選擇要呼叫哪一個 AI 模型的機制。

最簡單的做法是用固定規則：短問題交給小模型，涉及程式重構或複雜推理時交給大模型。更進階的做法則由另一個分類器、評分器或模型選擇器，逐次判斷目前請求最適合哪個模型。

路由不只是「挑最強的模型」。通常要在幾個目標之間取捨：

- **品質**：答案是否足夠正確、完整
- **成本**：每次呼叫與整體工作流花多少錢
- **延遲**：使用者要等多久
- **可用性**：模型是否故障、限流或暫時不可用
- **政策**：資料能否送到該模型或該地區

GitHub 2026 年 9 月 14 日的官方 Changelog 示範了這種概念：自動選模可用 efficiency、balance、intelligence 三種偏好，在成本、品質與回應時間之間調整權重，再針對每個提示選擇模型。這是特定產品的功能，不是通用標準；可泛化的重點是「路由策略必須把取捨明確化」。

## 生活比喻 / 實際例子

想像醫院的掛號分流：

- 問「今天幾點開門」這類簡單問題，交給快速的櫃台人員
- 一般文件整理，交給熟練的行政人員
- 複雜的診斷或高風險決策，交給專科醫師並保留人工確認

AI 系統也可以先判斷任務難度，再選擇合適模型。例如：

```text
簡單格式轉換       → 小型、低延遲模型
一般摘要與問答     → 平衡成本與品質的模型
複雜除錯與多步驟規劃 → 推理能力較強的模型
```

**造句：**

- 「我們用 **Model Routing** 把簡單請求交給小模型，降低整體推論成本。」
- 「路由策略不能只看模型排行榜，還要把延遲、限流和資料政策納入考量。」
- 「換模型或改 routing 規則後，要用同一批任務重跑 [Agent Evaluation](agent-evaluation.md)。」

## 為什麼要知道這個詞？

- 多模型環境中，永遠使用最強模型通常會增加成本與延遲
- 路由規則本身會改變 Agent 的行為，因此也是 [AI Harness](../../software-engineering/terms/ai-harness.md) 的一部分
- 只看平均成功率不夠，還要分別觀察每種任務、模型選擇、成本、延遲與 fallback
- 路由器判斷錯誤時，應有明確的預設模型、重試上限與 fail-closed 政策
- 涉及機密或高風險操作時，資料邊界與權限政策優先於成本最佳化

相關：[Agent Evaluation](agent-evaluation.md)、[Inference（推論）](inference.md)、[Model（模型）](model.md)、[Agent Permissions（代理權限）](agent-permissions.md)

**官方參考：** [GitHub Changelog：Configure cost and quality in Copilot auto model selection（2026-09-14）](https://github.blog/changelog/2026-09-14-configure-cost-and-quality-in-copilot-auto-model-selection/) · [GitHub Changelog：GitHub Copilot weekly releases — September 14（2026-09-18）](https://github.blog/changelog/2026-09-18-github-copilot-weekly-releases-september-14/)

---
**[← 回到 AI / 機器學習總覽](../README.md)**
