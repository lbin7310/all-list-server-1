const db = require('../db/index');

module.exports = {
  get: (useridx, callback) => {
    // console.log("board get ", useridx);
    let query = "SELECT * FROM `Board` where owner_idx = ?"
    db.dbConnection.query(query, [useridx], (err, data) => {
      if (err) { return callback(err, null) }
      //console.log("board data", data);
      return callback(data, null);
    })
  },

  create: (data, callback) => {
    console.log("create data ", data);
    let { title, idx, is_private, desc } = data;
    // console.log("board create mysql", idx);
    let query = "INSERT INTO `Board` (`title`, `owner_idx`, `is_private`, `desc`) VALUES (?,?,?,?);"
    db.dbConnection.query(query, [title, idx, is_private, desc], (err, data) => {
      if (err) { return callback(err, null) }
      return callback(true, null) //error 안뜨면 성공이니 트루 전달.
    //   return data
    })
  },

  update: (data, callback) => {

  },

  delete: (data, callback) => {

  }

}
