const router = require('express').Router();
// const secret = require('./secrete');
// req는 client에서 받는 것
// res는 client로 줄 것
//test
router.get('/', (req, res) => {
  console.log("test get 요청옴");
  if (req.headers.token) {
    // jwt.verify(JSON.parse(req.headers.token).token, secret.secret, (err, data) => {
    //   if (err) { return console.log(err) };
    //   console.log("decode : ", data);
    // })  
  }
})
// user
const user = require('./controller/user');
router.get('/login', user.login);
router.post('/user', user.signup);
router.post('/user/email', user.search_email)
router.post('/user/nick', user.search_nick)
// router.put('/user', user.update);

// board
const board = require('./controller/board');
router.get('/board', board.get);
router.get('/lender', board.lender);
router.post('/board', board.create);
router.put('/board', board.update);
router.delete('/board', board.delete);

// list
const list = require('./controller/list');
router.post('/list', list.create);
router.put('/list', list.update);
router.delete('/list', list.delete);

// card
const card = require('./controller/card');
router.post('/card', card.create);
router.put('/card', card.update);
router.delete('/card', card.delete);

//user_board
const user_board = require('./controller/user_board');
router.post('/user_board', user_board.create);
router.post('/user_board/find', user_board.find);
router.post('/user_board/search', user_board.search);
router.delete('/user_board', user_board.delete);

module.exports = router;
