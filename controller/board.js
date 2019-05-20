const models = require('../models/board');
// const iconv = require('iconv-lite'); // 클라에서 넘겨준 한글 깨짐 현상을 처리하기

module.exports = {

  lender: (req, res) => { // 로그인시 모든 것을 보내는 컨트롤러 
    
  },

  get: (req, res) => {
    console.log("board get ", req.body.origin_board_idx);
    //req.body === origin_board_idx 값
    models.get(req.body.origin_board_idx, (err, data) => {
      if (err) { return JSON.stringify("뭔가 잘못했어요") }
      res.send(data);
    })
    // console.log(paser)
    // let QueryData = req.body.userinfo.userStorage;
    // console.log("board get ", QueryData)
  },

  create: (req, res) => { // 보드 만드는 sql로 넘겨주기
    // console.log(iconv.decode(req.body.title, 'EUC-KR').toString());
    // console.log(req.body);
    let QueryData = {
      title: req.body.board.board_title,
      is_private: req.body.board.is_private,
      desc: req.body.board.board_desc,
      idx: req.body.board.origin_user_idx
    }
    // console.log(QueryData);
    models.create(QueryData, (err, data) => {
      if (err) { res.send(JSON.stringify("뭔가 잘못날렸어요")) }
      res.end();
    })
  },

  update: (req, res) => { // 보드 수정
    // 클라쪽에서 받아야할 데이터
    console.log("보드 수정 콘드롤러")
    models.update(req.body, (err, data) => {
      if (err) { throw err };
      res.send(data)
    })
  },

  delete: (req, res) => {
    console.log("보드 삭제");
    // console.log(req.body);
    models.delete(req.body, (err, data) => {
      if (err) { throw err };
      res.send(data);
    })
  }
}
