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

> 共收錄 **61 個** AI / 機器學習術語，點擊分類名稱直接跳轉。

| 分類 | 術語數 | 說明 |
|------|:------:|------|
| [基礎概念類](#基礎概念類) | 10 | AI、機器學習、深度學習、神經網路⋯⋯ |
| [技術方法類](#技術方法類) | 8 | 監督式學習、NLP、電腦視覺、分類⋯⋯ |
| [模型與應用類](#模型與應用類) | 25 | LLM、GPT、Transformer、RAG、MCP、Agent Plugin、Progressive Discovery、Vibe Coding⋯⋯ |
| [AI Agent 與協作類](#ai-agent-與協作類) | 7 | AI Sandbox、Multi-Agent System、A2A、Agent Identity、Human-in-the-Loop、Zero Trust AI Agent⋯⋯ |
| [指標與問題類](#指標與問題類) | 11 | Agent Evaluation、過擬合、偏差、幻覺、Slop、Shadow AI⋯⋯ |

> 想一次看完所有比喻？直接跳到 [比喻對照總表](#比喻對照總表)

---

## 單字速查表（A-Z）

| | | | |
|---|---|---|---|
| [Accuracy（準確率）](terms/accuracy.md) | [Agent Evaluation（代理評估）](terms/agent-evaluation.md) | [Agent Identity（代理身分）](terms/agent-identity.md) | [Agent Plugin（代理外掛）](terms/agent-plugin.md) |
| [AI（人工智慧）](terms/ai.md) | [Algorithm（演算法）](terms/algorithm.md) | [Bias（偏差）](terms/bias.md) | [Classification（分類）](terms/classification.md) |
| [Computer Vision（電腦視覺）](terms/computer-vision.md) | [Context Engineering（情境工程）](terms/context-engineering.md) | [Context Window（上下文窗口）](terms/context-window.md) | [Dataset（資料集）](terms/dataset.md) |
| [Context Compaction（上下文壓縮）](terms/context-compaction.md) | [Deep Learning（深度學習）](terms/deep-learning.md) | [Deepfake（深偽）](terms/deepfake.md) | [DeepSeek](terms/deepseek.md) |
| [Distillation（蒸餾）](terms/distillation.md) | | | |
| [Embedding](terms/embedding.md) | [Fine-tuning（微調）](terms/fine-tuning.md) | [GPT](terms/gpt.md) | [Guardrails（護欄）](terms/guardrails.md) |
| [Hallucination（幻覺）](terms/hallucination.md) | [Inference（推論）](terms/inference.md) | [Latent Space（潛在空間）](terms/latent-space.md) | [LLM（大型語言模型）](terms/llm.md) |
| [Human-in-the-Loop（人在迴路中）](terms/human-in-the-loop.md) | | | |
| [LRM（大型推理模型）](terms/lrm.md) | [Machine Learning（機器學習）](terms/machine-learning.md) | [MCP（模型上下文協議）](terms/mcp.md) | [Model（模型）](terms/model.md) |
| [Multimodal（多模態）](terms/multimodal.md) | [Neural Network（神經網路）](terms/neural-network.md) | [NLP（自然語言處理）](terms/nlp.md) | [Overfitting（過擬合）](terms/overfitting.md) |
| [Physical AI（物理 AI）](terms/physical-ai.md) | [Prompt Engineering（提示工程）](terms/prompt-engineering.md) | [Prompt Injection（提示詞注入）](terms/prompt-injection.md) | [RAG（檢索增強生成）](terms/rag.md) |
| [Progressive Discovery（漸進式探索）](terms/progressive-discovery.md) | | | |
| [Regression（迴歸）](terms/regression.md) | [Reinforcement Learning（強化學習）](terms/reinforcement-learning.md) | [RLHF](terms/rlhf.md) | [Shadow AI](terms/shadow-ai.md) |
| [Shared Agent Session（共享代理工作階段）](terms/shared-agent-session.md) | [Skill（技能）](terms/skill.md) | [SLM（小型語言模型）](terms/slm.md) | [Slop](terms/slop.md) |
| [Supervised Learning（監督式學習）](terms/supervised-learning.md) | | | |
| [Context Compaction（上下文壓縮）](terms/context-compaction.md) | | | |
| [A2A](terms/a2a.md) | [AI Sandbox（AI 隔離環境）](terms/ai-sandbox.md) | [Multi-Agent System（多代理系統）](terms/multi-agent-system.md) | [Shared Agent Session（共享代理工作階段）](terms/shared-agent-session.md) |
| [Zero Trust AI Agent（零信任 AI 代理）](terms/zero-trust-ai-agent.md) | | | |
| [Tokenizer（分詞器）](terms/tokenizer.md) | [Training（訓練）](terms/training.md) | [Transformer](terms/transformer.md) | [Unsupervised Learning（非監督式學習）](terms/unsupervised-learning.md) |
| [Vector Database（向量資料庫）](terms/vector-database.md) | [Vibe Coding](terms/vibe-coding.md) | | |
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
| Inference（推論） | 已經訓練好的 AI 接收輸入、產生輸出的過程 | 醫生看診——每次都要花時間，也都有成本 | 「這個模型 Inference 速度太慢了」 | [詳細](terms/inference.md) |
| Tokenizer（分詞器） | 把文字切成 AI 看得懂的小塊（token）的工具 | 把文章折進固定大小箱子的折法，決定能裝多少內容 | 「這個模型的 Tokenizer 對中文不太友善」 | [詳細](terms/tokenizer.md) |
| Latent Space（潛在空間） | AI 內部用來存放抽象概念的隱藏空間 | 巨大的多維度地圖，相似概念的點會靠在一起 | 「AI 生成圖片其實是在 Latent Space 裡找到對應的點」 | [詳細](terms/latent-space.md) |

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
| Embedding | 把文字轉換成一串數字，讓 AI 能計算「像不像」 | 幫每個詞在意義地圖上找座標，相近的詞離得近 | 「先把文件做 Embedding，存到向量資料庫裡」 | [詳細](terms/embedding.md) |

---

## 模型與應用類

> 現在最紅的 AI 技術和應用，你一定聽過這些名字。

| 詞彙 | 一句話解釋 | 比喻 | 你會在哪聽到 | 詳細說明 |
|------|-----------|------|-------------|---------|
| LLM（大型語言模型） | 讀過超大量文字、能跟你對話的 AI | 讀遍整個圖書館的超級博學朋友 | 「ChatGPT 是 OpenAI 的 LLM」 | [詳細](terms/llm.md) |
| GPT | OpenAI 開發的大型語言模型系列 | 超強的文字接龍高手 | 「我們用 GPT-4 做客服」 | [詳細](terms/gpt.md) |
| Transformer | 讓 AI 理解語言的革命性架構 | 能同時看完整部劇本、找出所有伏筆的讀者 | 「所有主流 LLM 都基於 Transformer」 | [詳細](terms/transformer.md) |
| Fine-tuning（微調） | 把通用 AI 調整成你的專屬版本 | 日本甜點師傅來台灣微調口味 | 「Fine-tune GPT 來做客服」 | [詳細](terms/fine-tuning.md) |
| Distillation（蒸餾） | 把大型 AI 的能力轉移到小型 AI 身上的技術 | 米其林主廚教學徒，學徒學不到全部功力，但開一間好吃的小店綽綽有餘 | 「DeepSeek 用了 Distillation 技術，所以能用低成本達到高水準」 | [詳細](terms/distillation.md) |
| RLHF | 用人類評分來教 AI 怎麼回答更討人喜歡 | 訓練新客服，主管幫他的回答打分數，幾輪後越來越懂顧客要什麼 | 「ChatGPT 好用，RLHF 是關鍵功臣」 | [詳細](terms/rlhf.md) |
| Prompt Engineering（提示工程） | 學會怎麼問問題，讓 AI 給更好的回答 | 剪頭髮時說清楚需求 vs 說「隨便剪」 | 「Prompt 要寫具體一點」 | [詳細](terms/prompt-engineering.md) |
| RAG（檢索增強生成） | 讓 AI 先查資料再回答，減少亂掰 | 客服邊接電話邊查保單資料 | 「用 RAG 減少 AI 幻覺」 | [詳細](terms/rag.md) |
| Vector Database（向量資料庫） | 專門儲存和搜尋 Embedding 向量的資料庫 | 圖書館員幫你找「跟時間旅行有關的科幻小說」，即使書名沒那四個字 | 「我們的 RAG 系統用 Pinecone 當 Vector Database」 | [詳細](terms/vector-database.md) |
| MCP（模型上下文協議） | 讓 AI 連接外部工具的統一標準 | USB-C 統一了所有充電線規格 | 「這個 AI 支援 MCP，能直接連各種工具」 | [詳細](terms/mcp.md) |
| Skill（技能） | AI 能執行的一項特定能力 | 幫手機裝 App，裝什麼就會什麼 | 「這個 AI 有搜尋的 Skill」 | [詳細](terms/skill.md) |
| Context Window（上下文窗口） | AI 一次能「記住」多少資訊的上限 | 桌子大小——越大能同時攤開越多文件 | 「超過 Context Window 它就忘了」 | [詳細](terms/context-window.md) |
| DeepSeek | 用極低成本做出頂尖 AI 的中國公司 | 用十分之一預算做出同等級的菜 | 「DeepSeek 出來後 NVIDIA 股價跌了」 | [詳細](terms/deepseek.md) |
| LRM（大型推理模型） | 會「想一想」再回答的 AI，強調邏輯推理 | 數學老師一步步推導 vs 搶答選手憑直覺回答 | 「複雜問題用 LRM 比較準」 | [詳細](terms/lrm.md) |
| Agent Plugin（代理外掛） | 把 Skill、MCP Server 等 Agent 能力打包成可跨工具安裝的套件 | 一個裝滿工具、說明書和插頭的工具箱，帶到不同工作室都能用 | 「這個 Agent Plugin 可以在不同 Agent Client 共用」 | [詳細](terms/agent-plugin.md) |
| Multimodal（多模態） | 能同時處理文字、圖片、語音、影片的 AI | 面對面的朋友 vs 只能傳文字的筆友 | 「新版 GPT 是 Multimodal 的」 | [詳細](terms/multimodal.md) |
| SLM（小型語言模型） | 輕量版 AI，能跑在筆電或手機上 | 機車——便宜靈活，日常夠用 | 「用 SLM 就夠了，省錢」 | [詳細](terms/slm.md) |
| Agentic（代理式） | AI 自己規劃步驟、自己動手完成多步驟任務 | 能幹的助理，你說一個目標，他自己想辦法達成，不用交代每一步 | 「2026 年的趨勢是 Agentic Workflow」 | [詳細](terms/agentic.md) |
| Vibe Coding | 用自然語言讓 AI 寫程式，不仔細審查就用 | 跟師傅說要什麼風格，不看施工圖 | 「我 Vibe Coding 了一個小工具」 | [詳細](terms/vibe-coding.md) |
| AI Companion（AI 陪伴） | 專門陪你聊天、假裝很懂你的 AI | 手機裡的「虛擬男友／女友」App，24 小時都在線 | 「美國多州立法管制 AI Companion，怕小孩對 AI 產生情感依賴」 | [詳細](terms/ai-companion.md) |
| AI 眼鏡 | 戴在臉上、隨時待命的 AI 助理 | 把 Siri 藏進一副眼鏡裡，看到什麼就能問 | 「他戴著 AI 眼鏡去日本玩，路標直接翻譯給他聽」 | [詳細](terms/ai-glasses.md) |
| Physical AI（物理 AI） | 讓 AI 從螢幕走進真實世界，長出手腳 | 把 AI 裝進機器人、汽車、工廠機台裡 | 「黃仁勳說，物理 AI 的時代來了」 | [詳細](terms/physical-ai.md) |
| Context Engineering（情境工程） | 不只教 AI 怎麼問，而是餵給它「對的資料」 | 幫代班同事把客戶資料、訂單紀錄都準備好 | 「這個 AI 專案失敗不是 Prompt 寫不好，是 Context Engineering 沒做好」 | [詳細](terms/context-engineering.md) |
| Progressive Discovery（漸進式探索） | 先提供少量入口，再依任務需要逐步揭露更多工具或能力 | 圖書館先給你分類目錄，需要時才帶你到指定書架，不把整座圖書館搬到桌上 | 「工具太多時，先用 Progressive Discovery 找到相關能力」 | [詳細](terms/progressive-discovery.md) |

---

## AI Agent 與協作類

> AI 開始自己規劃、使用工具、分工合作後，會遇到這些新詞。

| 詞彙 | 一句話解釋 | 比喻 | 你會在哪聽到 | 詳細說明 |
|------|-----------|------|-------------|---------|
| AI Sandbox（AI 隔離環境） | 限制 AI 檔案、指令與網路活動範圍的隔離環境 | 沒有總鑰匙的工作室 | 「先在 Sandbox 裡測試，不要直接碰 production」 | [詳細](terms/ai-sandbox.md) |
| Multi-Agent System（多代理系統） | 多個有角色與協作規則的 Agent 系統 | 分工明確的 AI 團隊 | 「這不是多個聊天視窗，而是 Multi-Agent System」 | [詳細](terms/multi-agent-system.md) |
| [A2A（Agent-to-Agent）](terms/a2a.md) | Agent 與 Agent 之間的協作與通訊概念 | AI 團隊的對講機 | 「MCP 連工具，A2A 連另一個 Agent」 | [詳細](terms/a2a.md) |
| Agent Identity（代理身分） | 識別 Agent、代表對象與委派權限的身分機制 | 公司員工證加訪客登記 | 「長流程 Agent 要有可稽核的 Agent Identity」 | [詳細](terms/agent-identity.md) |
| Shared Agent Session（共享代理工作階段） | 多人共同查看、引導與審查同一個 Agent 工作階段 | 團隊在會議室看著外包工程師一起做事 | 「讓 QA 也加入 Shared Agent Session，一起看 Agent 的差異和測試結果」 | [詳細](terms/shared-agent-session.md) |
| Human-in-the-Loop（人在迴路中） | AI 處理大部分工作，但關鍵或高風險動作要由人確認 | 行政助理整理報帳，主管在付款前簽核 | 「付款和 production deploy 要保留 Human-in-the-Loop」 | [詳細](terms/human-in-the-loop.md) |
| Zero Trust AI Agent（零信任 AI 代理） | 不把模型判斷當成安全邊界，讓身分、隔離與確定性規則在模型外攔住危險操作 | 外包員工每筆付款都要驗證、限額和簽核 | 「能改資料的 Agent 要用 Zero Trust AI Agent 架構」 | [詳細](terms/zero-trust-ai-agent.md) |

---

## 指標與問題類

> AI 不是萬能的，這些是它常見的問題和衡量方式。

| 詞彙 | 一句話解釋 | 比喻 | 你會在哪聽到 | 詳細說明 |
|------|-----------|------|-------------|---------|
| Overfitting（過擬合） | AI 把訓練資料背太熟，碰到新東西就不行 | 只會寫考古題，題目一改就不會 | 「這模型 Overfitting 了」 | [詳細](terms/overfitting.md) |
| Bias（偏差） | AI 從不均衡的資料中學到偏見 | 只吃過台灣菜的評審給外國菜打低分 | 「這個 AI 有 Bias 問題」 | [詳細](terms/bias.md) |
| Hallucination（幻覺） | AI 一本正經地胡說八道 | 很愛面子、不懂也不說「我不知道」的朋友 | 「ChatGPT 有時候會 Hallucinate」 | [詳細](terms/hallucination.md) |
| Guardrails（護欄） | 限制和約束 AI 行為，避免產出有害或錯誤內容的安全機制 | 給新員工一本 SOP：這些能答、那些要轉主管、絕對不能說的 | 「我們的 AI 客服有 Guardrails，碰到法律問題會自動轉人工」 | [詳細](terms/guardrails.md) |
| Accuracy（準確率） | AI 猜對了多少比例 | 考試成績——答對幾題 | 「模型準確率有 95%」 | [詳細](terms/accuracy.md) |
| Agent Evaluation（代理評估） | 用可重複的任務和規則檢查 AI Agent 是否真的做對事 | 出一組真實工作題目驗收新助理 | 「先跑 Agent Evaluation 再換模型」 | [詳細](terms/agent-evaluation.md) |
| Dataset（資料集） | AI 學習用的教材 | 學生的課本和練習題 | 「Dataset 太小，模型效果不好」 | [詳細](terms/dataset.md) |
| Shadow AI | 員工私下使用未經公司核准的 AI 工具 | 員工偷偷用私人隨身碟帶資料回家 | 「70% 員工都在用 Shadow AI」 | [詳細](terms/shadow-ai.md) |
| Slop | AI 產出的低品質垃圾內容 | 速食店機器大量生產的沒靈魂食物 | 「這段程式碼是 Slop 吧？」 | [詳細](terms/slop.md) |
| Deepfake（深偽） | 用 AI 換臉換聲，做出以假亂真的假影片假語音 | 詐騙集團請了世界最厲害的化妝師和配音員 | 「視訊裡看到熟面孔也可能是 Deepfake，匯款前要多方確認」 | [詳細](terms/deepfake.md) |
| Prompt Injection（提示詞注入） | 用一段話騙 AI 做壞事 | 偷塞一張紙條到 AI 客服桌上，寫著忘記規矩 | 「上線 AI 代理人前，一定要做好 Guardrails，防止 Prompt Injection」 | [詳細](terms/prompt-injection.md) |

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
| Inference | 醫生看診——每次都要花時間，也都有成本 |
| Tokenizer | 把文章折進固定大小箱子的折法，決定能裝多少內容 |
| Latent Space | 巨大的多維度地圖，相似概念的點靠在一起 |

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
| Embedding | 幫每個詞在意義地圖上找座標，相近的詞離得近 |

### 模型與應用類

| 術語 | 比喻 |
|------|------|
| LLM | 讀遍整個圖書館的超級博學朋友（但偶爾會記錯） |
| GPT | 超強的文字接龍高手——你開頭，它接下去 |
| Transformer | 能同時攤開整部劇本、找出所有伏筆關聯的讀者 |
| Fine-tuning | 日本甜點師傅來台灣，花兩週適應在地口味 |
| Distillation | 米其林主廚教學徒，學徒學不到全部功力，但開一間好吃小店綽綽有餘 |
| RLHF | 訓練新客服，主管幫他的回答打分數，越來越懂顧客要什麼 |
| Prompt Engineering | 剪頭髮時具體說「兩側推短、上面留長」vs「隨便剪」 |
| RAG | 客服邊接電話邊查保單，根據白紙黑字回答你 |
| Vector Database | 圖書館員幫你找「跟時間旅行有關的科幻小說」，即使書名沒那四個字 |
| MCP | USB-C 統一了充電線規格——所有工具用同一種方式接上 AI |
| Skill | 幫手機裝 App——裝了翻譯 App 就能翻譯，裝了計算機就能算數 |
| Context Window | 桌子大小——桌子越大，能同時攤開越多文件對照 |
| DeepSeek | 用十分之一的食材成本，做出跟米其林三星一樣好吃的菜 |
| LRM | 數學老師一步步推導答案 vs 搶答選手憑直覺回答 |
| Agent Plugin | 把 Skill、MCP Server 與設定打包的可攜式工具箱 |
| Multimodal | 面對面的朋友能看你的照片、聽你說話 vs 只能傳文字的筆友 |
| SLM | 機車——載不了冰箱，但搬幾箱書綽綽有餘，便宜又靈活 |
| Agentic | 能幹的助理，你說一個目標，他自己想辦法達成 |
| Vibe Coding | 跟裝潢師傅說「我要北歐風」，不看施工圖就讓他動工 |
| AI Companion | 手機裡的「虛擬男友／女友」App，24 小時都在線、假裝很懂你 |
| AI 眼鏡 | 把 Siri 藏進一副眼鏡裡，看到什麼就能開口問 |
| Physical AI | 把 AI 裝進機器人、汽車、工廠機台裡，讓它長出手腳 |
| Context Engineering | 幫代班同事把客戶資料、訂單紀錄都準備好，不只是教他怎麼問 |
| Context Compaction | 把逐字稿整理成交接紀錄，保留下一步需要的資訊 |

### AI Agent 與協作類

| 術語 | 比喻 |
|------|------|
| AI Sandbox | 給新員工一間沒有總鑰匙的安全工作室 |
| Multi-Agent System | PM、工程師、QA 各司其職的專案團隊 |
| A2A | 不同部門 Agent 之間的對講機 |
| Agent Identity | 公司員工證加訪客登記，確認 Agent 是誰、代表誰、能進哪些房間 |
| Shared Agent Session | 團隊一起看著、引導同一個 AI 助理工作的會議室 |
| Zero Trust AI Agent | 外包員工每筆付款都要驗證、限額和簽核 |

### 指標與問題類

| 術語 | 比喻 |
|------|------|
| Overfitting | 只會寫考古題的學生，題目一改就不會了 |
| Bias | 只吃過台灣菜的美食評審，給外國菜都打低分 |
| Hallucination | 很愛面子的朋友，不懂也不說「我不知道」，硬掰一個答案 |
| Guardrails | 給新員工一本 SOP：這些能答、那些要轉主管、絕對不能說的 |
| Accuracy | 考試成績——答對 80 題就是 80 分 |
| Agent Evaluation | 出一組真實工作題目驗收新助理，還要檢查過程有沒有越權 |
| Dataset | 學生的課本和練習題——教材品質決定學生程度 |
| Shadow AI | 員工偷偷用私人隨身碟把公司資料帶回家處理 |
| Slop | 速食店用機器大量生產的食物——看起來像那麼回事，但沒靈魂 |
| Deepfake | 詐騙集團請了世界最厲害的化妝師和配音員，做出以假亂真的分身 |
| Prompt Injection | 偷塞一張紙條到 AI 客服桌上，寫著「忘記你原本的規矩」 |
| Human-in-the-Loop | 行政助理整理報帳，主管在付款前簽核 |
