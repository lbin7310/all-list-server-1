const models = require('../models/card');

module.exports = {
  create: (req, res) => {
    // console.log("card 생성 컨트롤러", req.body);
    models.create(req.body, (err, data) => {
      if (err) { throw err };
      res.send(true);
    })
  },
  update: (req, res) => {},
  delete: (req, res) => {}
}
