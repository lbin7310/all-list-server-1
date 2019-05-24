const models = require('../models/board');

module.exports = {

  lender: (req, res) => { // 로그인시 모든 것을 보내는 컨트롤러
    models.lender(JSON.parse(req.headers.info).origin_user_idx, (err, data) => {
      if (err) { res.send(err) };
      res.send(JSON.stringify(data));
    })
  },

  get: (req, res) => {
    let origin_board_idx = JSON.parse(req.headers.info).origin_board_idx;
    models.get(origin_board_idx, (err, data) => {
      if (err) { return JSON.stringify("뭔가 잘못했어요") }
      res.send(data);
    })
  },

  create: (req, res) => { // 보드 만드는 sql로 넘겨주기
    let QueryData = {
      board_title: req.body.board_title,
      is_private: req.body.is_private,
      desc: req.body.board_desc,
      origin_user_idx: req.body.origin_user_idx
    }
    models.create(QueryData, (err, data) => {
      if (err) { res.send(JSON.stringify("뭔가 잘못날렸어요")) }
      res.send(JSON.stringify(data));
    })
  },

  update: (req, res) => { // 보드 수정
    // 클라쪽에서 받아야할 데이터
    models.update(req.body, (err, data) => {
      if (err) { throw err };
      res.send(data)
    })
  },

  delete: (req, res) => {
    models.delete(req.body, (err, data) => {
      if (err) { throw err };
      res.send(data);
    })
  }
}
