const models = require('../models/board');
// const iconv = require('iconv-lite'); // 클라에서 넘겨준 한글 깨짐 현상을 처리하기

module.exports = {
  get: (req, res) => {
    console.log("board get ", req.body.boardIdx);
    //req.body === origin_board_idx 값
    models.get(req.body.boardIdx, (err, data) => {
      if (err) { return JSON.stringify("뭔가 잘못했어요") }
      res.send(data);
    })
    // console.log(paser)
    // let QueryData = req.body.userinfo.userStorage;
    // console.log("board get ", QueryData)
  },

  create: (req, res) => { // 보드 만드는 sql로 넘겨주기
    /** mysql로 넘겨줄 정보형태
     * title
     * owner_idx
     * is_private
     * desc
     */
    // console.log(iconv.decode(req.body.title, 'EUC-KR').toString());
    // console.log(req.body);
    let QueryData = {
      title: req.body.board.title,
      is_private: req.body.board.is_private,
      desc: req.body.board.desc,
      idx: req.body.board.idx
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
    if (req.body.board_desc) { // desc도 수정할경우
      console.log("desc not null")
      models.update(req.body, (err, data) => {
        if (err) { throw err };
        console.log(data);
      })
    } else { // title 만 수정할 경우
      console.log("desc null")
      models.update(req.body, (err, data) => {
        if (err) { throw err }
        console.log(data);
      })
    }
    // console.log("보드 수정 콘트롤러 와 값 = ", req.body);
  },

  delete: (req, res) => {}

}
