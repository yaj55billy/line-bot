const lineConfig = {
  channelAccessToken: '',
  channelSecret: ''
};

const crypto = require('crypto');
var express = require('express');
var app = express();
const line = require('@line/bot-sdk');
const channelSecret = lineConfig.channelSecret;

app.post('/callback', line.middleware(lineConfig), (req, res) => {
  
  // 給 LINE 的 body 要是 string
  const body = JSON.stringify(req.body);
  // console.log(body);
  // {"destination":"U279244b7ed098649db8e97530b63d668","events":[{"type":"message","message":{"type":"text","id":"15625789043545","text":"測試"},"timestamp":1645430241220,"source":{"type":"user","userId":"U4fcbe4b9305c0af4843892e7c1fdc1e5"},"replyToken":"c75eddec86894a7188bb091f667b5362","mode":"active"}]}
  
  // 取得 LINE 的簽名
  const signature = crypto.createHmac('SHA256', channelSecret).update(body).digest('base64');
  console.log(signature); 
  // HJNYqYw+LnjmyAJZ0qniUyDEC9UrvTaDovWoMccYVU0=

  // 取得 headers 中的 X-Line-Signature
  const headerX = req.get('X-Line-Signature');
  console.log(headerX); 
  // HJNYqYw+LnjmyAJZ0qniUyDEC9UrvTaDovWoMccYVU0=
  
  // 比對 signature, headers ，二者相等時才代表是由 LINE server 發來的訊息
  if(signature === headerX) {
    
    // webhook event
    const event = req.body.events[0];
    console.log(event);

    // 是加入好友時
    if(event.type === 'follow') handleFollow(event);

    // 是封鎖時
    else if(event.type === 'unfollow') handleUnFollow(event);

    // 是訊息時
    else if(event.type === 'message') handleMessage(event);

    // 是 postback 時
    else if(event.type === 'postback') handlePostback(event);

    else if(event.type === 'things') handleThings(event);

    else if(event.type === 'accountLink') handleAccountLink(event);
    
  }
  
  res.send('get webhook');
});

app.get('/callback', function (req, res) {
  res.send('<h1>首頁</h1>');
});

app.listen(80, function () {
  console.log('Example app listening on port 80!');
});

function handleFollow() {
  // 加入好友時要做的事
  console.log('加入好友');
  // alert('加入好友');
}

function handleUnFollow() {
  // 被封鎖時要做的事
  console.log('被封鎖');
  // alert('被封鎖');
}

function handleMessage() {
  // 收到訊息時要做的事
  console.log('收到訊息');
  // alert('收到訊息');
}

function handlePostback() {
  // 收到 postback 時要做的事
  console.log('postback');
}

function handleThings() {
  console.log('Device');
}

function handleAccountLink() {
  console.log('帳戶連接?');
}



