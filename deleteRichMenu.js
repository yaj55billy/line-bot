require('dotenv').config();
const line = require('@line/bot-sdk');

const client = new line.Client({
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
});

client.deleteRichMenu('<rich_menu_id>')

// 刪除特定的 richmenu 