const db = require('../db/index');
db.dbConnection.connect();

module.exports = {
  login: (data, callback) => {
    console.log("아이디가 필요해요");
    let selectUser = "select * from Users";
    db.dbConnection.query(selectUser, (err, data) => {
      if (err) { callback(err, null) }
      callback(null, data[0])
    })
  },

  signup: (data, callback) => { //회원가입시
    console.log(data)
    let email = data.email;
    let pw = data.pw;
    let nickname = data.nickname;
    // let select_user = "INSERT INTO `all`.`Users` (`email`, `password`, `nickname`) VALUES ('test@gmail.com', 'test1', 'test')";
    console.log("email = ", email, " / pw = ", pw, " / nickname = ", nickname)
    callback(null, "success");
  },

  update: (req, res) => { //회원정보수정시
  }
}
