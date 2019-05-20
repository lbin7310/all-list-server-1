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

  },

  delete: (data, callback) => {

  }

}
