
const models = require('../models/user')
module.exports = {
  login: (req, res, callback) => {
  },

  signup: (req, res) => { //회원가입시
    console.log("controllers")
    models.signup(req.body, (err, data) => {
      if (err) { throw err }
      console.log(data);
    })
  },

  update: (req, res) => { //회원정보수정시
  }
}
