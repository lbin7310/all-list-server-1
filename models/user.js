const db = require('../db/index');
db.dbConnection.connect();

module.exports = {
  login: (data, callback) => {
    console.log("gg", data);
  },

  signup: (data, callback) => { //회원가입시
    console.log(data)
    let email = data.email;
    let pw = data.pw;
    let nickname = data.nickname;
    console.log("email = ", email, " / pw = ", pw, " / nickname = ", nickname)
    callback(null, "success");
  },

  update: (req, res) => { //회원정보수정시
  }
}
