const db = require('../db/index');

module.exports = {

  lender: (origin_user_idx, callback) => {
    // login 성공하고 board title을 다 주는 곳
    console.log("lender models", origin_user_idx)
    let query = "select * from `all`.Board as b inner join `all`.User_Board as ub " +
                "on ub.board_idx = b.origin_board_idx where ub.user_idx = ?"
    db.dbConnection.query(query, [origin_user_idx], (err, allData) => {
      if (err) { return callback(err, null) }
      if (allData.length === 0) { return callback(null, null) } // 생성한 보드가 없는 경우
      return callback(null, allData);
    })
  },

  get: (origin_board_idx, callback) => {
    // 보드 그리고 보드와 연결된 리스트 , 카드들을 다 가져옴
    let query = "select * from `all`.Board as b left join `all`.List as l " +
                "on b.origin_board_idx = l.board_idx " +
                "left join `all`.Card as c on l.origin_list_idx = c.list_idx " +
                "where b.origin_board_idx=?";
    db.dbConnection.query(query, [origin_board_idx], (err, data) => {
      if (err) { return callback(err, null) }
      return callback(null, data);
    })
  },

  create: (data, callback) => {
    // 보드를 생성하는 곳
    let { board_title, origin_user_idx, is_private, desc } = data;
    let query = "INSERT INTO `all`.Board (`board_title`, `owner_idx`, `is_private`, `board_desc`) VALUES (?,?,?,?);"
    db.dbConnection.query(query, [board_title, origin_user_idx, is_private, desc], (err, data) => {
      if (err) {
        return callback(err, null)
      }
      let query_tow = "SELECT * FROM `all`.Board as b ORDER BY origin_board_idx DESC LIMIT 1"
      db.dbConnection.query(query_tow, (err, data) => {
        if (err) { return callback(err, null) }
        return callback(null, data);
      })
    })
  },

  update: (data, callback) => {
    // 보드를 수정하는 곳
    let { origin_board_idx, board_title, board_desc } = data;
    if (!board_desc) { // board_title만 수정 할 때 !board_desc
      let query = "UPDATE `all`.`Board` SET `board_title` = ? WHERE (`origin_board_idx` = ?)";
      db.dbConnection.query(query, [board_title, origin_board_idx], (err, data) => {
        if (err) { throw err }
        return callback(null, true);
      });
    } else if (!board_title) { // board_desc만 수정 !board_title 
      let query = "UPDATE `all`.`Board` SET `board_desc` = ? WHERE (`origin_board_idx` = ?)";
      db.dbConnection.query(query, [board_desc, origin_board_idx], (err, data) => {
        if (err) { throw err }
        return callback(null, true);
      });
    } else { // board_title, board_desc 수정  all
      let query = "UPDATE `all`.`Board` SET `board_title` = ?, `board_desc` = ? WHERE (`origin_board_idx` = ?)";
      db.dbConnection.query(query, [board_title, board_desc, origin_board_idx], (err, data) => {
        if (err) { throw err };
        return callback(null, true);
      });
    }
  },

  delete: (data, callback) => {
    // boardidx를 공유하고 있는 list와 card 전부를 삭제 
    let origin_board_idx = data.origin_board_idx;
    let query = "delete b,l,c from `all`.Board as b left join `all`.List as l on b.origin_board_idx = l.board_idx " +
                "left join `all`.Card as c on l.origin_list_idx = c.list_idx where b.origin_board_idx=?";
    db.dbConnection.query(query, [origin_board_idx], (err, data) => {
      if (err) { throw err };
      return callback(null, true);
    })
  }

}
