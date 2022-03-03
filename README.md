# LINE BOT

目前尚在研究 rich menu 部分，卡關在 uploadRichMenuImage 會噴 400 錯誤(圖片無法上傳上去，之前用 POSTMAN 是可以的)，之後需在筆記一些流程。
討論如何做出 LINE 的相關圖片。

doc:
https://developers.line.biz/en/reference/messaging-api/#create-rich-menu


| 檔案 | 用途 | 
| -------- | -------- | 
| createRichMenu.js          | 創建 richmenu            | 
| deleteRichMenu.js          | 刪除 richmenu            | 
| getRichMenuList.js         | 獲得目前有哪些 richmenu    | 
| uploadRichMenuImage.js     | 上傳 richmenu 需要用的圖片  | 
| setRichMenuDefault.js      | 設定 richmenu 預設顯示      | 
