# Context Engineering（情境工程） — 不只教 AI 怎麼問，而是餵給它「對的資料」

> **白話說：** Prompt Engineering 像是教你怎麼把話講清楚，讓新來的助理聽懂指令；Context Engineering 則是幫這個助理把整套工作資料都準備好——公司規定、過去對話紀錄、相關文件——讓他不用你多解釋就知道現在該做什麼。

---

## 它到底是什麼？

2026 年，AI 業界開始流行一句話：「Prompt Engineering 過時了，現在要學 Context Engineering」。

差別在哪裡？
- **[Prompt Engineering](prompt-engineering.md)**：專注在「這句話怎麼問，AI 才會回答得好」
- **Context Engineering**：專注在「AI 在回答之前，手上有哪些資料、工具、記憶」——包含你給的文件、之前的對話紀錄、可以呼叫的工具、系統設定等

會有這個轉變，是因為 AI 能做的任務越來越複雜，不再是問一句答一句，而是像 [Agentic](agentic.md) AI 那樣自己拆解步驟、跑很多輪。這時候「怎麼問」已經不是重點，「AI 手上有沒有正確、完整的資料」才是決定成敗的關鍵。舉例來說，同一句指令，AI 手上只有你打的那一句話，跟 AI 手上有整份會議記錄、公司規定、過去三次對話紀錄，給出的答案品質天差地遠——後者才是 Context Engineering 要處理的問題。

## 生活比喻 / 實際例子

想像你請一個代班同事幫忙處理客訴：只做 Prompt Engineering，等於你只跟他說「客訴要客氣地回覆」，但沒給他看客戶的購買紀錄、之前的溝通紀錄；做好 Context Engineering，等於你把客戶資料、訂單紀錄、過去溝通紀錄都整理好一起交給他，他自然知道該怎麼回覆得體、精準。

**造句**：
- 「這個 AI 專案失敗不是 Prompt 寫得不好，是 **Context Engineering** 沒做好——AI 根本沒拿到該有的資料」
- 「現在招募 AI 工程師，職缺說明越來越常寫『擅長 **Context Engineering**』」
- 「[Context Window](context-window.md) 不夠大，再厲害的 **Context Engineering** 也塞不進去所有資料」

## 為什麼要知道這個詞？

- 2026 年這是 AI 從業者、工程師圈最常提到的「接班詞」，討論熱度逐漸取代 Prompt Engineering
- 反映 AI 應用的重點正在從「怎麼問問題」轉向「怎麼幫 AI 準備好完整的工作資料」
- 跟這本手冊已經收錄的 [Prompt Engineering](prompt-engineering.md)、[Context Window](context-window.md) 直接相關，是同一套概念的進階版
- 如果你的工作開始接觸 AI 代理人專案，聽到同事提「context」的頻率只會越來越高

---
**[← 回到 AI / 機器學習總覽](../README.md)**
