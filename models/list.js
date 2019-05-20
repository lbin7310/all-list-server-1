const db = require('../db/index');

module.exports = {
  // get: (useridx, callback) => {
  // },

  create: (data, callback) => {
    // 사용자가 리스트를 추가할 때
    const {list_title, origin_board_idx, origin_user_idx} = data;
    let query = "INSERT INTO `all`.`List` (`list_title`, `board_idx`, `owner_idx`) VALUES (?,?,?)";
    db.dbConnection.query(query, [list_title, origin_board_idx, origin_user_idx], (err, data) => {
      if (err) { return console.log(err) };
      return callback(null, true);
    })
  },

  update: (data, callback) => {
    // 사용자가 리스트 타이틀을 수정할 때
    const {origin_list_idx , list_title} = data;
    // console.log("origin_list_idx = ", list_title);
    let query = "UPDATE `all`.`List` SET `list_title` = ? WHERE (`origin_list_idx` = ?)"
    db.dbConnection.query(query, [list_title , origin_list_idx], (err, data) => {
      if (err) { return console.log(err) };
      callback(null, true);
    })
  },

  delete: (origin_list_idx, callback) => {
    // 사용자가 리스트를 삭제할 때
    let query = "delete l,c from `all`.List as l inner join `all`.Card as c on l.origin_list_idx = c.list_idx " +
    "where l.origin_list_idx=?"
    db.dbConnection.query(query, [origin_list_idx], (err, data) => {
      if (err) { return console.log(err) };
      return callback(null, true);
    })
  }

}
