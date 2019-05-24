const models = require('../models/list');

module.exports = {
  create: (req, res) => { // 사용자가 리스트를 추가할 때
    models.create(req.body, (err, data) => {
      if (err) { throw err };
      res.send(data);
    })
  },

  update: (req, res) => { // 사용자가 리스트 타이틀을 수정할 때
    models.update(req.body, (err, data) => {
      if (err) { throw err };
      res.send(data);
    })
  },

  delete: (req, res) => {
    models.delete(req.body.origin_list_idx, (err, data) => {
      if (err) { throw err };
      res.send(data);
    })
  }
}
