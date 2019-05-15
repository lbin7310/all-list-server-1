const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors()) // options 해결하기 위한 cors 미들웨어 사용 
app.use(express.json())// body 바로 볼 수 있게 셋팅 

app.get('/', (req,res)=>{
    console.log("get 요청옴")
    res.send(JSON.stringify('hello'))
})
app.post('/', (req,res)=>{
    console.log("POST 요청옴")
    console.log(req.body)
    res.send('sucess')
})

app.listen(9089, ()=> console.log('Open 9089 success'))// 9089 포트로 오픈 