
require('dotenv').config();
const line = require('@line/bot-sdk');

const client = new line.Client({
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
});

client
  .setDefaultRichMenu('richmenu-81c4f0eb1d4f229645c6f519abc5f006')
  .then((obj) => console.log(obj))
  .catch((error) => console.log(error))