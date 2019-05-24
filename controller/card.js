const models = require('../models/card');

module.exports = {
  create: (req, res) => {
    models.create(req.body, (err, data) => {
      if (err) { throw err };
      res.send(data);
    })
  },
  update: (req, res) => {
    models.update(req.body, (err, data) => {
      if (err) { throw err };
      res.send(data);
    })
  },
  delete: (req, res) => {
    models.delete(req.body.origin_card_idx, (err, data) => {
      if (err) { throw err };
      res.send(data);
    })
  }
}
