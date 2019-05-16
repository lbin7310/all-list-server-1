// 라우터에서 user를 타고 들어와 응답을 받고 돌려주는 곳

const models = require('../models/user') // mysql 데이터를 관리하는 곳

module.exports = {
  login: (req, res) => {
    console.log("login controller");
    models.login(req.body, (err, data) => {
      if (err) { throw err }
      console.log(data);
    })
  },

  signup: (req, res) => { //회원가입시
    console.log("signup controllers")
    models.signup(req.body, (err) => {
      if (err) { throw err }
      console.log("signup query success")
    })
  },

  update: (req, res) => { //회원정보수정시
  }
}
