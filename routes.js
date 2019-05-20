const router = require('express').Router();
// req는 client에서 받는 것
// res는 client로 줄 것

//test
router.get('/', (req, res) => {
  console.log("test get 요청옴");
  res.send(JSON.stringify('test get success'));
})

// user
const user = require('./controller/user');
router.post('/login', user.login);
router.post('/user', user.signup);
router.post('/user/email', user.search_email)
router.post('/user/nick', user.search_nick)
// router.put('/user', user.update);

// board
const board = require('./controller/board');
router.post('/board/get', board.get);
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
router.get('/card', card.get);
router.post('/card', card.create);
router.put('/card', card.update);
router.delete('/card', card.delete);

//user_board

module.exports = router;
