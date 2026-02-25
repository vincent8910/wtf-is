# WTF is...? AI / 機器學習篇

> **AI 又在講天書了？這裡翻譯給你聽。**
>
> 每個詞都有白話解釋、生活化比喻、實際造句。點進去就懂，不用 Google 半天。

---

## 這是什麼？

這是一份給**沒有 AI 背景的人**看的術語翻譯手冊。

如果你是行銷、設計師、PM、老闆，或任何聽到「LLM」「Transformer」「Fine-tuning」就一頭霧水的人——這裡就是你的救星。

每個術語都有：
- **白話解釋**：不用任何技術背景就能懂
- **生活比喻**：用你熟悉的事物來對照
- **造句示範**：讓你知道這個詞在什麼情境下會出現

---

## 怎麼用？

1. **找到你不懂的詞** → 看右邊的「一句話解釋」
2. **還是不懂？** → 點「詳細說明」進去看完整頁面
3. **想建立直覺？** → 滑到最下面看[比喻對照總表](#比喻對照總表)

---

## 大綱

> 共收錄 **27 個** AI / 機器學習術語，點擊分類名稱直接跳轉。

| 分類 | 術語數 | 說明 |
|------|:------:|------|
| [基礎概念類](#基礎概念類) | 7 | AI、機器學習、深度學習、神經網路⋯⋯ |
| [技術方法類](#技術方法類) | 7 | 監督式學習、NLP、電腦視覺、分類⋯⋯ |
| [模型與應用類](#模型與應用類) | 8 | LLM、GPT、Transformer、RAG、MCP、Skill⋯⋯ |
| [指標與問題類](#指標與問題類) | 5 | 過擬合、偏差、幻覺、準確率⋯⋯ |

> 想一次看完所有比喻？直接跳到 [比喻對照總表](#比喻對照總表)

---

## 單字速查表（A-Z）

| | | | |
|---|---|---|---|
| [Accuracy（準確率）](terms/accuracy.md) | [AI（人工智慧）](terms/ai.md) | [Algorithm（演算法）](terms/algorithm.md) | [Bias（偏差）](terms/bias.md) |
| [Classification（分類）](terms/classification.md) | [Computer Vision（電腦視覺）](terms/computer-vision.md) | [Dataset（資料集）](terms/dataset.md) | [Deep Learning（深度學習）](terms/deep-learning.md) |
| [Fine-tuning（微調）](terms/fine-tuning.md) | [GPT](terms/gpt.md) | [Hallucination（幻覺）](terms/hallucination.md) | [LLM（大型語言模型）](terms/llm.md) |
| [Machine Learning（機器學習）](terms/machine-learning.md) | [MCP（模型上下文協議）](terms/mcp.md) | [Model（模型）](terms/model.md) | [Neural Network（神經網路）](terms/neural-network.md) |
| [NLP（自然語言處理）](terms/nlp.md) | [Overfitting（過擬合）](terms/overfitting.md) | [Prompt Engineering（提示工程）](terms/prompt-engineering.md) | [RAG（檢索增強生成）](terms/rag.md) |
| [Regression（迴歸）](terms/regression.md) | [Reinforcement Learning（強化學習）](terms/reinforcement-learning.md) | [Skill（技能）](terms/skill.md) | [Supervised Learning（監督式學習）](terms/supervised-learning.md) |
| [Training（訓練）](terms/training.md) | [Transformer](terms/transformer.md) | [Unsupervised Learning（非監督式學習）](terms/unsupervised-learning.md) | |

---

## 基礎概念類

> 什麼是 AI？什麼是機器學習？這些是所有 AI 話題的起點。

| 詞彙 | 一句話解釋 | 比喻 | 你會在哪聽到 | 詳細說明 |
|------|-----------|------|-------------|---------|
| AI（人工智慧） | 讓電腦模仿人類思考和判斷的技術 | 教一隻很聰明的狗做各種指令 | 幾乎所有科技新聞、產品發表會 | [詳細](terms/ai.md) |
| Machine Learning（機器學習） | 讓電腦從資料中自己找規律 | 小孩看夠多次就學會認字 | 「這背後用的是 ML」 | [詳細](terms/machine-learning.md) |
| Deep Learning（深度學習） | 機器學習的進階版，用多層神經網路處理複雜問題 | 看食譜 vs 拜師學藝三年 | 「這用 Deep Learning 做的」 | [詳細](terms/deep-learning.md) |
| Neural Network（神經網路） | 模仿人類大腦結構設計的計算方式 | 公司裡千人團隊一層一層往上彙報 | 「神經網路的參數有幾十億個」 | [詳細](terms/neural-network.md) |
| Algorithm（演算法） | 解決問題的一套步驟和規則 | 泡麵的烹煮說明 | 「YouTube 的演算法又改了」 | [詳細](terms/algorithm.md) |
| Model（模型） | AI 學完之後的成品，可以拿來做預測 | 培訓完畢、可以上班的員工 | 「OpenAI 又發布新模型了」 | [詳細](terms/model.md) |
| Training（訓練） | 讓 AI 從大量資料中學習的過程 | 新人反覆練習直到上手 | 「模型還在 Training，要跑三天」 | [詳細](terms/training.md) |

---

## 技術方法類

> AI 用什麼方式學習？能處理什麼類型的問題？

| 詞彙 | 一句話解釋 | 比喻 | 你會在哪聽到 | 詳細說明 |
|------|-----------|------|-------------|---------|
| Supervised Learning（監督式學習） | 給 AI 看有正確答案的範例讓它學 | 老師出考卷然後對答案 | 「我們有標好的資料，用監督式」 | [詳細](terms/supervised-learning.md) |
| Unsupervised Learning（非監督式學習） | 不給答案，讓 AI 自己找資料裡的規律 | 把一堆沒分類的衣服自己分堆 | 「用非監督式做客戶分群」 | [詳細](terms/unsupervised-learning.md) |
| Reinforcement Learning（強化學習） | AI 在嘗試中學會怎麼拿最高分 | 訓練小狗，做對給零食 | 「AlphaGo 用的是強化學習」 | [詳細](terms/reinforcement-learning.md) |
| NLP（自然語言處理） | 讓電腦聽懂和說出人類的語言 | 教外國人讀中文信 | 「ChatGPT 是 NLP 最成功的應用」 | [詳細](terms/nlp.md) |
| Computer Vision（電腦視覺） | 讓電腦看懂圖片和影像 | 教外星人認水果 | 「自動駕駛靠的是電腦視覺」 | [詳細](terms/computer-vision.md) |
| Classification（分類） | 讓 AI 判斷東西屬於哪一類 | 郵局分信員分信到不同格子 | 「垃圾郵件過濾就是分類模型」 | [詳細](terms/classification.md) |
| Regression（迴歸） | 讓 AI 預測一個數字 | 雞排攤老闆預測今晚賣幾份 | 「用迴歸來預測下季營收」 | [詳細](terms/regression.md) |

---

## 模型與應用類

> 現在最紅的 AI 技術和應用，你一定聽過這些名字。

| 詞彙 | 一句話解釋 | 比喻 | 你會在哪聽到 | 詳細說明 |
|------|-----------|------|-------------|---------|
| LLM（大型語言模型） | 讀過超大量文字、能跟你對話的 AI | 讀遍整個圖書館的超級博學朋友 | 「ChatGPT 是 OpenAI 的 LLM」 | [詳細](terms/llm.md) |
| GPT | OpenAI 開發的大型語言模型系列 | 超強的文字接龍高手 | 「我們用 GPT-4 做客服」 | [詳細](terms/gpt.md) |
| Transformer | 讓 AI 理解語言的革命性架構 | 能同時看完整部劇本、找出所有伏筆的讀者 | 「所有主流 LLM 都基於 Transformer」 | [詳細](terms/transformer.md) |
| Fine-tuning（微調） | 把通用 AI 調整成你的專屬版本 | 日本甜點師傅來台灣微調口味 | 「Fine-tune GPT 來做客服」 | [詳細](terms/fine-tuning.md) |
| Prompt Engineering（提示工程） | 學會怎麼問問題，讓 AI 給更好的回答 | 剪頭髮時說清楚需求 vs 說「隨便剪」 | 「Prompt 要寫具體一點」 | [詳細](terms/prompt-engineering.md) |
| RAG（檢索增強生成） | 讓 AI 先查資料再回答，減少亂掰 | 客服邊接電話邊查保單資料 | 「用 RAG 減少 AI 幻覺」 | [詳細](terms/rag.md) |
| MCP（模型上下文協議） | 讓 AI 連接外部工具的統一標準 | USB-C 統一了所有充電線規格 | 「這個 AI 支援 MCP，能直接連各種工具」 | [詳細](terms/mcp.md) |
| Skill（技能） | AI 能執行的一項特定能力 | 幫手機裝 App，裝什麼就會什麼 | 「這個 AI 有搜尋的 Skill」 | [詳細](terms/skill.md) |

---

## 指標與問題類

> AI 不是萬能的，這些是它常見的問題和衡量方式。

| 詞彙 | 一句話解釋 | 比喻 | 你會在哪聽到 | 詳細說明 |
|------|-----------|------|-------------|---------|
| Overfitting（過擬合） | AI 把訓練資料背太熟，碰到新東西就不行 | 只會寫考古題，題目一改就不會 | 「這模型 Overfitting 了」 | [詳細](terms/overfitting.md) |
| Bias（偏差） | AI 從不均衡的資料中學到偏見 | 只吃過台灣菜的評審給外國菜打低分 | 「這個 AI 有 Bias 問題」 | [詳細](terms/bias.md) |
| Hallucination（幻覺） | AI 一本正經地胡說八道 | 很愛面子、不懂也不說「我不知道」的朋友 | 「ChatGPT 有時候會 Hallucinate」 | [詳細](terms/hallucination.md) |
| Accuracy（準確率） | AI 猜對了多少比例 | 考試成績——答對幾題 | 「模型準確率有 95%」 | [詳細](terms/accuracy.md) |
| Dataset（資料集） | AI 學習用的教材 | 學生的課本和練習題 | 「Dataset 太小，模型效果不好」 | [詳細](terms/dataset.md) |

---

## 比喻對照總表

> 一次看完所有比喻，讓你對 AI 術語建立直覺。

### 基礎概念類

| 術語 | 比喻 |
|------|------|
| AI | 教一隻很聰明的狗做各種指令——坐下、握手、撿球 |
| Machine Learning | 小孩學認字——看夠多次，自己就會認了 |
| Deep Learning | 看食譜 vs 拜師學藝三年，後者能處理更複雜的問題 |
| Neural Network | 大公司裡千人團隊一層一層往上彙報，最後由老闆做決策 |
| Algorithm | 泡麵的烹煮說明——按步驟來就能解決問題 |
| Model | 培訓完畢、可以獨立上班的員工 |
| Training | 新人反覆練習、看案例、做模擬考，直到學會為止 |

### 技術方法類

| 術語 | 比喻 |
|------|------|
| Supervised Learning | 老師出考卷然後對答案，學生從中學會解題 |
| Unsupervised Learning | 把一堆沒分類的衣服丟給人，他自己分成長袖、短袖、褲子 |
| Reinforcement Learning | 訓練小狗——做對了給零食，做錯了不給 |
| NLP | 教一個完全不懂中文的外國人讀中文信 |
| Computer Vision | 教從沒看過水果的外星人認水果 |
| Classification | 郵局分信員——看到地址就分到對應格子 |
| Regression | 雞排攤老闆根據經驗預測今晚賣幾份 |

### 模型與應用類

| 術語 | 比喻 |
|------|------|
| LLM | 讀遍整個圖書館的超級博學朋友（但偶爾會記錯） |
| GPT | 超強的文字接龍高手——你開頭，它接下去 |
| Transformer | 能同時攤開整部劇本、找出所有伏筆關聯的讀者 |
| Fine-tuning | 日本甜點師傅來台灣，花兩週適應在地口味 |
| Prompt Engineering | 剪頭髮時具體說「兩側推短、上面留長」vs「隨便剪」 |
| RAG | 客服邊接電話邊查保單，根據白紙黑字回答你 |
| MCP | USB-C 統一了充電線規格——所有工具用同一種方式接上 AI |
| Skill | 幫手機裝 App——裝了翻譯 App 就能翻譯，裝了計算機就能算數 |

### 指標與問題類

| 術語 | 比喻 |
|------|------|
| Overfitting | 只會寫考古題的學生，題目一改就不會了 |
| Bias | 只吃過台灣菜的美食評審，給外國菜都打低分 |
| Hallucination | 很愛面子的朋友，不懂也不說「我不知道」，硬掰一個答案 |
| Accuracy | 考試成績——答對 80 題就是 80 分 |
| Dataset | 學生的課本和練習題——教材品質決定學生程度 |
