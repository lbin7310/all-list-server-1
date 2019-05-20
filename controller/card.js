const models = require('../models/card');

module.exports = {
  create: (req, res) => {
    // console.log("card 생성 컨트롤러", req.body);
    models.create(req.body, (err, data) => {
      if (err) { throw err };
      res.send(data);
    })
  },
  update: (req, res) => {
    console.log("card 수정 컨트롤러", req.body);
    models.update(req.body, (err, data) => {
      if (err) { throw err };
      res.send(data);
    })
  },
  delete: (req, res) => {
    console.log("card 삭제 컨트롤러", req.body.origin_card_idx);
    models.delete(req.body.origin_card_idx, (err, data) => {
      if (err) { throw err };
      res.send(data);
    })
  }
}
