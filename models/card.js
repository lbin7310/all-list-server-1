const db = require('../db/index');

module.exports = {

  create: (data, callback) => {
    let { origin_list_idx, origin_user_idx, card_title, card_desc } = data;
    // console.log(origin_list_idx, origin_user_idx, card_title, card_desc);
    let query = "INSERT INTO `all`.`Card` (`card_title`, `card_desc`, `list_idx`, `owner_idx`) VALUES (?,?,?,?)";
    db.dbConnection.query(query, [card_title, card_desc, origin_list_idx, origin_user_idx], (err, data) => {
      if (err) { return console.log(err) };
      return callback(null, true);
    })
  },

  update: (data, callback) => {
    let {origin_card_idx, card_title, card_desc} = data;
    console.log(origin_card_idx, card_title, card_desc);
    if (!card_desc) { // 카드 타이틀 수정 할 경우
      // console.log("카드 타이틀 수정 할 경우", card_title);
      let query = "UPDATE `all`.`Card` SET `card_title` = ? WHERE (`origin_card_idx` = ?)";
      db.dbConnection.query(query, [card_title, origin_card_idx], (err, data) => {
        if (err) { return console.log(err) };
        return callback(null, true);
      })
    } else if (!card_title) { // 카드 desc 수정할 경우
      // console.log("카드 desc 수정 할 경우", card_desc);
      let query = "UPDATE `all`.`Card` SET `card_desc` = ? WHERE (`origin_card_idx` = ?)";
      db.dbConnection.query(query, [card_desc, origin_card_idx], (err, data) => {
        if (err) { return console.log(err) };
        return callback(null, true);
      })
    } else {
      // console.log("카드 모두 수정할 경우");
      let query = "UPDATE `all`.`Card` SET `card_title` = ?, `card_desc` = ? WHERE (`origin_card_idx` = ?)";
      db.dbConnection.query(query, [card_title, card_desc, origin_card_idx], (err, data) => {
        if (err) { return console.log(err) };
        return callback(null, true);
      })
    }
    // 둘다 수정할 경우
  },

  delete: (data, callback) => {

  }

}
