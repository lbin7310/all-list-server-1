
const models = require('../models/user')
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
    models.signup(req.body, (err, data) => {
      if (err) { throw err }
      console.log(data);
    })
  },

  update: (req, res) => { //회원정보수정시
  }
}
