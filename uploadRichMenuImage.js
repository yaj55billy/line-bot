// require('dotenv').config();

const line = require('@line/bot-sdk');
// const fs = require('fs-extra');
var fs = require('fs');

const client = new line.Client({
  channelAccessToken: 'KKEQ2imkI//Vwo9u4mHIJOAwmF/GHsi6ygI19TxKd/+pVuwVF30Ilafc78QnU1nAJveP11nuV8F2YBdDy6aZSItDs0Roz9xxTsU42jgBPqNcfeuOc9fHH8eXtqepMQh394ShM2URDlWnmZkjqT+VSwdB04t89/1O/w1cDnyilFU='
});

client
  .setRichMenuImage('richmenu-81c4f0eb1d4f229645c6f519abc5f006', 
  fs.createReadStream('./images/richmenu-a.png'))
  .then((res) => console.log(res))
  .catch((error) => console.log(error));

