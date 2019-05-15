const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes')

app.use(cors()) // options 해결하기 위한 cors 미들웨어 사용 
app.use(express.json())// body 바로 볼 수 있게 셋팅 

app.use('/',router); // 라우터로 보내기 

app.listen(9089, ()=> console.log('Open 9089 success'))// 9089 포트로 오픈 