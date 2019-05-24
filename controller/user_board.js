const models = require('../models/user_board');

module.exports = {

  create: (req, res) => {
    //사용자가 만든 보드들 모으는 곳
    models.create(req.body, (err, data) => {
      if (err) { res.send(err) };
      res.send(true);
    })
  },

  find: (req, res) => {
    //팀보드에 속해있는 사용자 목록 찾을 때
    models.find(req.body, (err, data) => {
      if (err) { res.send(err) };
      res.send(JSON.stringify(data));
    })
  },

  search: (req, res) => {
    //닉네임으로 추가할 팀원을 찾을 때
    models.search(req.body, (err, data) => {
      if (err) { res.send(err) };
      res.send(JSON.stringify(data));
    })
  },

  delete: (req, res) => {
    //닉네임으로 추가할 팀원을 찾을 때
    models.delete(req.body, (err, data) => {
      if (err) { res.send(err) };
      res.send(data);
    })
  }

}
