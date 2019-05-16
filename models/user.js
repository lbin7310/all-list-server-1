const db = require('../db/index');
db.dbConnection.connect();

module.exports = {
  login: (data, callback) => {
    console.log("아이디가 필요해요");
    let findUser = "select * from Users";
    db.dbConnection.query(findUser, (err, data) => {
      if (err) { callback(err, null) }
      callback(null, data)
    })
  },

  signup: (data, callback) => { //회원가입시
    console.log(data)
    let email = data.email;
    let pw = data.pw;
    let nickname = data.nickname;
    let insertUser = "INSERT INTO `all`.`Users` (`email`, `password`, `nickname`) VALUES (?,?,?)";
    db.dbConnection.query(insertUser, [email, pw, nickname], (err, data) => {
      if (err) { callback(err, null) };
    })
    // console.log("email = ", email, " / pw = ", pw, " / nickname = ", nickname)
    // callback(null, "success");
  },

  update: (req, res) => { //회원정보수정시
  }
}
