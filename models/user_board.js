const db = require('../db/index');

module.exports = {

  create: (data, callback) => {
  // 사용자가 추가한 보드들을 저장해 놓는 곳
    console.log("userboard = ", data);
    let {origin_board_idx, origin_user_idx} = data
    let query = "INSERT INTO `all`.`User_Board` (`user_idx`, `board_idx`) VALUES (?, ?)";
    db.dbConnection.query(query, [origin_user_idx, origin_board_idx], (err, data) => {
      if (err) { return callback(err, null) };
      return callback(null, data);
    })
  },

  find: (data, callback) => {
    let origin_board_idx = data.origin_board_idx;
    let query = "select * from `all`.Users as u inner join `all`.User_Board as ub " +
                  "on u.origin_user_idx = ub.user_idx where ub.board_idx =?";
    db.dbConnection.query(query, [origin_board_idx], (err, data) => {
      if (err) { return callback(err, null) };
      return callback(null, data);
    })
  }
}
