const express = require('express');
const app = express();

app.use(express.json())// body 바로 볼 수 있게 셋팅 

app.get('/', (req,res)=>{
    res.send('hello')
})

app.listen(9089, ()=> console.log('Open 9089'))// 9089 포트로 오픈 