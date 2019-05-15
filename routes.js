const router = require('express').Router();

// req는 client에서 받는 것
// res는 client로 줄 것 

//test
router.get('/', (req,res)=>{
    console.log("test get 요청옴");
    res.send(JSON.stringify('test get success'));
})

// user
const user = require('./controller/user');
router.post('/user', user.user);
router.post('/user/signup', user.signup);
router.post('/user/update', user.update);

// board
const board = require('./controller/board');
router.get('/board', board.get);
router.post('/board/create', board.create);
router.post('/board/update', board.update);
router.delete('/board', board.delete);

// list
const list = require('./controller/list');
router.get('/list', list.get);
router.post('/list/create',list.create);
router.post('/list/update', list.update);
router.delete('/list',list.delete);

// card
const card = require('./controller/card');
router.get('/card', card.get);
router.post('/card/create', card.create);
router.post('/card/update', card.update);
router.delete('/card', card.delete);

//user_board

module.exports = router;