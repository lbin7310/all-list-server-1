const db = require('../db/index');

module.exports = {

  create: (data, callback) => {
  // 팀원추가 및 사용자들이 만든 보드 정보 모아놓는 곳
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
  },

  search: (data, callback) => {
    //닉네임으로 추가할 팀원을 찾을 때
    let nick = data.nickname;
    let query = "select * from `all`.Users where nickname = ?";
    db.dbConnection.query(query, [nick], (err, data) => {
      if (err) { return callback(err, null) };
      return callback(null, data);
    })
  },

  delete: (data, callback) => {
    //닉네임으로 추가할 팀원을 찾을 때
    let {origin_board_idx , origin_user_idx } = data;
    let query = "delete from `all`.User_Board where user_idx =? and board_idx = ?";
    db.dbConnection.query(query, [origin_user_idx, origin_board_idx], (err, data) => {
      if (err) { return callback(err, null) };
      return callback(null, true);
    })
  }

}
