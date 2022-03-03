require('dotenv').config();
const line = require('@line/bot-sdk');

const client = new line.Client({
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
});

client.getDefaultRichMenuId()