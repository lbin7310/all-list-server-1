const db = require('../db/index');

module.exports = {

  lender: (origin_user_idx, callback) => {
    // login 성공하고 board title을 다 주는 곳
    console.log("lender models", origin_user_idx)
    let query = "select * from `all`.Board as b inner join `all`.User_Board as ub " +
                "on ub.board_idx = b.origin_board_idx where ub.user_idx = ?"
    // let find = "SELECT * FROM `all`.Users inner join `all`.Board on Users.idx = Board.owner_idx "+
    // "inner join `all`.List on Board.idx = List.Board_idx " +
    // "inner join `all`.Card on List.idx = Card.list_idx where Users.idx = ?"
    db.dbConnection.query(query, [origin_user_idx], (err, allData) => {
      if (err) { return callback(err, null) }
      if (allData.length === 0) { return callback(null, null) } // 생성한 보드가 없는 경우
      console.log("짜잔 : ", allData);
      return callback(null, allData);
    })
  },

  get: (origin_board_idx, callback) => {
    console.log("board get ", origin_board_idx);
    let query = "select * from `all`.Board as b left join `all`.List as l " +
                "on b.origin_board_idx = l.board_idx " +
                "left join `all`.Card as c on l.origin_list_idx = c.list_idx " +
                "where b.origin_board_idx=?";
    db.dbConnection.query(query, [origin_board_idx], (err, data) => {
      if (err) { return callback(err, null) }
      console.log("board data", data);
      return callback(null, data);
    })
  },

  userboard: (data, callback) => {
    console.log("userboard = ", data);
    let {origin_board_idx, origin_user_idx} = data
    let query = "INSERT INTO `all`.`User_Board` (`user_idx`, `board_idx`) VALUES (?, ?)";
    db.dbConnection.query(query, [origin_user_idx, origin_board_idx], (err, data) => {
      if (err) { return callback(err, null) };
      console.log(data);
    })
  },

  create: (data, callback) => {
    console.log("board create data ", data);
    let { board_title, origin_user_idx, is_private, desc } = data;
    // console.log("board create mysql", idx);
    let query = "INSERT INTO `all`.Board (`board_title`, `owner_idx`, `is_private`, `board_desc`) VALUES (?,?,?,?);"
    db.dbConnection.query(query, [board_title, origin_user_idx, is_private, desc], (err, data) => {
      if (err) {
        console.log(err);
        return callback(err, null)
      }
      return callback(null, true); //error 안뜨면 성공이니 트루 전달.
    //   return data
    })
  },

  update: (data, callback) => {
    let { origin_board_idx, board_title, board_desc } = data;
    if (!board_desc) { // board_title만 수정 할 때 !board_desc
      let query = "UPDATE `all`.`Board` SET `board_title` = ? WHERE (`origin_board_idx` = ?)";
      db.dbConnection.query(query, [board_title, origin_board_idx], (err, data) => {
        if (err) { throw err }
        console.log("title만 수정할 때", data);
        return callback(null, true);
      });
    } else if (!board_title) { // board_desc만 수정 !board_title 
      let query = "UPDATE `all`.`Board` SET `board_desc` = ? WHERE (`origin_board_idx` = ?)";
      db.dbConnection.query(query, [board_desc, origin_board_idx], (err, data) => {
        if (err) { throw err }
        console.log("desc만 수정할 때", data);
        return callback(null, true);
      });
    } else { // board_title, board_desc 수정  all
      let query = "UPDATE `all`.`Board` SET `board_title` = ?, `board_desc` = ? WHERE (`origin_board_idx` = ?)";
      db.dbConnection.query(query, [board_title, board_desc, origin_board_idx], (err, data) => {
        if (err) { throw err };
        console.log("전부 수정할 때", data);
        return callback(null, true);
      });
    }
  },

  delete: (data, callback) => {
    // boardidx를 공유하고 있는 list와 card 전부를 삭제 
    let origin_board_idx = data.origin_board_idx;
    console.log("idx = ", origin_board_idx)
    let query = "delete b,l,c from `all`.Board as b inner join `all`.List as l on b.origin_board_idx = l.board_idx " +
                "inner join `all`.Card as c on l.origin_list_idx = c.list_idx where b.origin_board_idx=?";
    db.dbConnection.query(query, [origin_board_idx], (err, data) => {
      if (err) { throw err };
      return callback(null, true);
    })
  }

}
