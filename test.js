// const jwt = require('jsonwebtoken')
// import jwt from 'jsonwebtoken'
// const jwt = require('./node_modules/jsonwebtoken');
let testText = {
  // email: "noh@gmail.com",
  // pw: "noh",
  // nickname: "noh"
  // origin_user_idx: 20,
  // origin_board_idx: 20
};

let testObj = {
  method: "GET",
  // body: JSON.stringify({
  //   origin_board_idx : 4
  // }),
  headers: {
    "Content-Type": "application/json",
    "info": JSON.stringify({
      email: "noh@gmail.com",
      pw: "noh"
    })
  }
};
// "http://15.164.93.48:9089/login"
var myInit = {
  method: 'GET',
  // body: JSON.stringify({
  //   board_title: "crateBo",
  //   is_private: 0,
  //   board_desc : "",
  //   origin_user_idx: 99
  // }),
  headers: {
    "Content-Type": "application/json",
    info: JSON.stringify({
      id: "token",
      username: "tokenname",
      admin: 0
    })
  }
}

fetch("http://localhost:9089/login", testObj)
  .then(res => res.json())
  .then(json => {
    let token = json;
    console.log(1, json)
    return fetch("http://localhost:9089/", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        token: JSON.stringify(token)
      }
    })
  })
  .then(res => res.json())
  .then(json => console.log(2, json));
