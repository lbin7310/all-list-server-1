// list 넘어오기전 형태
// router.get('/list')
// router.post('/list/create')
// router.post('/list/update')
// router.delete('/list')
const models = require('../models/list');

module.exports = {
  // get: (req, res) => {},
  create: (req, res) => { // 사용자가 리스트를 추가할 때
    console.log("리스트 생성 콘트롤러 ", req.body);
    models.create(req.body, (err, data) => {
      if (err) { throw err };
      res.send(data);
    })
  },

  update: (req, res) => { // 사용자가 리스트 타이틀을 수정할 때
    console.log("리스트 수정 콘트롤러");
    models.update(req.body, (err, data) => {
      if (err) { throw err };
      res.send(data);
    })
  },

  delete: (req, res) => {
    console.log("리스트 삭제 콘트롤러", req.body.origin_list_idx);
    models.delete(req.body.origin_list_idx, (err, data) => {
      if (err) { throw err };
      res.send(data);
    })
  }
}
