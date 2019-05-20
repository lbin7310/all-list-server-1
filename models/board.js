const db = require('../db/index');

module.exports = {
  get: (boardIdx, callback) => {
    console.log("board get ", boardIdx);
    let query = "SELECT * FROM `all`.Board inner join `all`.List on Board.origin_board_idx = List.board_idx " +
    "inner join `all`.Card on List.origin_list_idx = Card.list_idx where Board.origin_board_idx = ?"
    db.dbConnection.query(query, [boardIdx], (err, data) => {
      if (err) { return callback(err, null) }
      console.log("board data", data);
      return callback(null, data);
    })
  },

  create: (data, callback) => {
    console.log("create data ", data);
    let { title, idx, is_private, desc } = data;
    // console.log("board create mysql", idx);
    let query = "INSERT INTO `all`.Board (`board_title`, `owner_idx`, `is_private`, `board_desc`) VALUES (?,?,?,?);"
    db.dbConnection.query(query, [title, idx, is_private, desc], (err, data) => {
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
