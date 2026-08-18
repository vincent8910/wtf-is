# OAuth — 讓應用程式安全地取得其他服務授權的標準協議

> **白話說：** 就像飯店的房卡——你在櫃檯（Google）驗證身份後，拿到一張房卡，就能進房間（其他網站），但飯店不會把你的身分證影本交給房間。

---

## 它到底是什麼？

OAuth 是一種[驗證授權](auth.md)的標準協議。它讓你可以用已有的帳號（Google、Facebook、Apple、Line 等）登入其他網站或 App，也能讓一個應用程式在不拿到你的密碼下，取得你同意的有限資料或操作權限。

重點是：你授權其他網站讀取你在 Google 的「部分資料」（例如名字和 Email），但**不會把你的 Google 密碼交出去**。

流程大概是這樣：
1. 你在某個網站點「用 Google 登入」
2. 跳轉到 Google 的頁面，Google 問你「這個網站想讀取你的名字和 Email，你同意嗎？」
3. 你點同意
4. Google 發一個[令牌（Token）](token.md)給那個網站
5. 網站用這個 Token 去 Google 拿你的名字和 Email

## Token 不一定永久有效

OAuth 的 Token 是「授權的憑證」，不是永久通行證。以 GitHub 在 2026 年 8 月公布的 OAuth App 更新為例：

- 應用程式可以選擇使用**短效 Access Token**，有效期為 8 小時
- Access Token 到期後，可以用有效期 6 個月的 **Refresh Token** 換取新的一組 Token
- 新的 OAuth App 預設使用短效 Token；既有應用程式應確認 SDK 是否支援更新流程

這樣做的好處是：就算 Access Token 不小心外洩，能被濫用的時間也比較短；代價是應用程式必須妥善保存 Refresh Token，並處理過期、撤銷與重新登入。

## Redirect URI 是什麼？

**Redirect URI**（重新導向網址）是使用者同意授權後，服務商把瀏覽器送回應用程式的網址。它像銀行辦完驗證後，指定只能把回條寄回哪個地址。

GitHub 最近支援 OAuth App 登記最多 10 個 Redirect URI，方便區分開發、測試與正式環境；若啟用萬用字元比對，範圍必須設得非常窄，否則授權碼可能被送到不該收到的子網域或路徑。

## 生活比喻 / 實際例子

想像你要進一棟大樓的某間辦公室：

- **傳統做法** = 每間辦公室都要辦一張門禁卡（每個網站都要註冊帳號密碼）
- **OAuth** = 你在大樓管理處（Google）驗證身份後，管理處發一張臨時通行證，你就能進特定辦公室，但管理處不會把你的個資影本交給辦公室

實際例子：
- PM 說：「登入頁要加上 **OAuth**，讓使用者可以用 Google 和 Line 帳號登入」
- 工程師說：「我們串 Line Login 的 **OAuth** 快好了」

## 為什麼要知道這個詞？

- 幾乎所有現代 App 和網站都支援「第三方登入」，背後常用的就是 OAuth
- PM 在規劃註冊登入流程時一定會討論到：要不要支援 Google 登入？Line 登入？
- 使用者不想記一堆密碼，提供 OAuth 登入可以降低註冊門檻
- 工程師必須同時規劃 Token 生命週期、Redirect URI 白名單與撤銷處理，不能只做「登入成功」的 happy path

**官方參考：** [GitHub Changelog：Multiple redirect URIs and token refresh for OAuth apps（2026-08-14）](https://github.blog/changelog/2026-08-14-multiple-redirect-uris-and-token-refresh-for-oauth-apps)

---
**[← 回到術語總覽](../README.md)**
