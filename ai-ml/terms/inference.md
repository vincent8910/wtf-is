# Inference（推論） — AI 實際「回答問題」的過程

> **白話說：** [Training](training.md) 是 AI 上學讀書，Inference 是 AI 畢業後上班工作。你每次問 ChatGPT 一個問題，它回答你的那個過程就是 Inference。

---

## 它到底是什麼？

**Inference（推論）** 是指已經訓練好的 AI [模型](model.md)，接收輸入並產生輸出的過程。

```
Training（訓練）：花幾個月、幾百萬美元，讓 AI 學會知識
                 ↓ 學完了
Inference（推論）：你問問題 → AI 回答（每次幾毫秒到幾秒）
```

為什麼要區分這兩個？因為成本結構完全不同：

| | Training | Inference |
|--|---|---|
| 頻率 | 做一次（或偶爾更新） | 每天幾百萬次 |
| 成本 | 一次性的巨額投資 | 持續的營運成本 |
| 硬體 | 需要超大 GPU 叢集 | 可以用較小的硬體 |
| 時間 | 幾天到幾個月 | 毫秒到幾秒 |

企業在意的通常是 Inference 成本——因為每個使用者的每次提問都要花錢。

## 生活比喻 / 實際例子

- **Training** = 醫學院讀 7 年（一次性投資，很貴）
- **Inference** = 醫生看診（每天都在做，每次都有成本）

**造句**：
- 「這個模型 **Inference** 速度太慢了，使用者要等 10 秒才有回應」
- 「我們要優化 **推論** 成本，現在每個月 API 費用太高了」
- 「用 [SLM](slm.md) 做 **Inference** 比用 GPT-5 便宜 100 倍」

## 為什麼要知道這個詞？

- 理解 AI 產品的成本結構——大部分營運成本都在 Inference
- 理解為什麼「模型越小越好」——Inference 更快更便宜
- 跟 [SLM](slm.md)、[Distillation](distillation.md)、[Context Window](context-window.md) 直接相關

---
**[← 回到 AI / 機器學習總覽](../README.md)**
