// 라우터에서 user를 타고 들어와 응답을 받고 돌려주는 곳
const models = require('../models/user') // mysql 데이터를 관리하는 곳
const jwt = require('jsonwebtoken');
const secret = require('../secrete');

module.exports = {
  login: (req, res) => {
    console.log("user login");
    console.log(JSON.parse(req.headers.info))
    models.login(JSON.parse(req.headers.info), (err, data) => {
      if (err) { console.log(err) }
      if (data) {
        let {origin_user_idx, email, password, nickname } = data[0];
        // console.log("gg = ", data[0]);
        let token = jwt.sign({
          email: email,
          password: password
        }, secret.secret);
        res.send(JSON.stringify({
          token: token,
          data: [{
            origin_user_idx: origin_user_idx,
            nickname: nickname
          }],
          success: true
        }))
      } else {
        res.send(JSON.stringify({
          data: null,
          success: false
        }))
      }
    })
  },

  signup: (req, res) => { //회원가입시
    console.log("signup controllers")
    models.signup(req.body, (err, data) => {
      //data = true or false
      if (err) {
        console.log(err);
        res.send({ success: data })
      }
      res.send({ success: data })
      console.log("signup query success")
    })
  },

  search_email: (req, res) => { //email 중복검사
    // 이메일 중복 검사하는 model 함수로 보낸다.
    // req.body로 클라에서 받은 데이터 보내고  callback으로 data를 받는다
    // console.log(1)
    models.search_email(req.body, (err, data) => {
      if (err) { throw err }
      res.send(JSON.stringify(data)); // true나 false를 던져준다.
    })
  },

  search_nick: (req, res) => { //nickname 중복검사
    // req.body로 클라에서 받은 데이터 보내고  callback으로 data를 받는다
    models.search_nick(req.body, (err, data) => {
      if (err) { throw err }
      res.send(JSON.stringify(data)); // true나 false를 던져준다.
    })
  }

  // update: (req, res) => { //회원정보수정시
  //   console.log(222, req.body);
  //   res.send(JSON.stringify("ok"));
  // }
}
