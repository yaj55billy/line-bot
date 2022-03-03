require('dotenv').config();
const line = require('@line/bot-sdk');

const client = new line.Client({
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
});

const richmenu = {
  "size": { 
    "width": 2500,
    "height": 843 
  },
  "selected": false,
  "name": "richmenu-a",
  "chatBarText": "選單1",
  "areas": [
    {
      "bounds": { 
        "x": 0, 
        "y": 0, 
        "width": 833,
        "height": 843
      },
      "action": { 
        "type": "message", 
        "label": "文字", 
        "text": "Hello, iBot!"
      }
    },
    {
      "bounds": {
        "x": 833,
        "y": 0,
        "width": 833,
        "height": 843
      },
      "action": {
        "type": "uri",
        "label": "網址",
        "uri": "https://developers.line.biz/"
      }
    },
    {
      "bounds": {
        "x": 1666,
        "y": 0,
        "width": 833,
        "height": 843
      },
      "action": {
        "type": "richmenuswitch",
        "richMenuAliasId": "richmenu-alias-b",
        "data": "richmenu-changed-to-b"
      }
    }
  ]
}

// 多選單狀況
const richmenu2 = {
  "size": { 
    "width": 2500,
    "height": 843 
  },
  "selected": false,
  "name": "richmenu-b",
  "chatBarText": "選單2",
  "areas": [
    {
      "bounds": { 
        "x": 0, 
        "y": 0, 
        "width": 833,
        "height": 843
      },
      "action": { 
        "type": "message", 
        "label": "文字", 
        "text": "Hello, iBot(選單二)!"
      }
    },
    {
      "bounds": {
        "x": 833,
        "y": 0,
        "width": 833,
        "height": 843
      },
      "action": {
        "type": "uri",
        "label": "網址",
        "uri": "https://developers.line.biz/"
      }
    },
    {
      "bounds": {
        "x": 1666,
        "y": 0,
        "width": 833,
        "height": 843
      },
      "action": {
        "type": "richmenuswitch",
        "richMenuAliasId": "richmenu-alias-a",
        "data": "richmenu-changed-to-a"
      }
    }
  ]
}

client.createRichMenu(richmenu2)
  .then((richMenuId) =>
  console.log(richMenuId))
