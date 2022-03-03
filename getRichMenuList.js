require('dotenv').config();
const line = require('@line/bot-sdk');

const client = new line.Client({
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
});

client.getRichMenuList()
	.then((richmenus) => {
  	richmenus.forEach((richmenu) => console.log(richmenu));
	})

// 獲取所有我們透過程式創建出的 Rich Menu