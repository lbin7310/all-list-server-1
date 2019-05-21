const db = require('../db/index');

module.exports = {

  create: (data, callback) => {
  // 사용자가 추가한 보드들을 저장해 놓는 곳
    console.log("userboard = ", data);
    let {origin_board_idx, origin_user_idx} = data
    let query = "INSERT INTO `all`.`User_Board` (`user_idx`, `board_idx`) VALUES (?, ?)";
    db.dbConnection.query(query, [origin_user_idx, origin_board_idx], (err, data) => {
      if (err) { return callback(err, null) };
      console.log(data);
    })
  }
}
