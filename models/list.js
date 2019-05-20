const db = require('../db/index');

module.exports = {
  get: (useridx, callback) => {
  },

  create: (data, callback) => {
  },

  update: (data, callback) => {
    // 사용자가 리스트 타이틀을 수정할 때
    const {origin_list_idx , list_title} = data;
    // console.log("origin_list_idx = ", list_title);
    let query = "UPDATE `all`.`List` SET `list_title` = ? WHERE (`origin_list_idx` = ?)"
    db.dbConnection.query(query, [list_title , origin_list_idx], (err, data) => {
      if (err) { console.log(err) };
      callback(null, true);
    })
  },

  delete: (data, callback) => {

  }

}
