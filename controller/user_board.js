const models = require('../models/user_board');

module.exports = {

  create: (req, res) => {
    //사용자가 만든 보드들 모으는 곳
    console.log(req.body);
    models.create(req.body, (err, data) => {
      if (err) { res.send(err) };
      console.log(data);
    })
  }

}
