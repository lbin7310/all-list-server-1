// get
// fetch("http://localhost:9089")
// .then(res => res.json())
// .then(json => console.log(json));

//post
let token;
let testText = {
  // email: "noh@gmail.com",
  // pw: "noh",
  // nickname: "noh"
  // origin_user_idx: 20,
  origin_board_idx: 20
};

let testObj = {
  method: "GET",
  // body: JSON.stringify({
  //   origin_board_idx : 4
  // }),
  headers: {
    "Content-Type": "application/json",
    "info": JSON.stringify({
      origin_board_idx : 6
    })
  }
};
// "http://15.164.93.48:9089/login"
var myInit = {
  method: 'POST',
  body: JSON.stringify({
    board_title: "crateBo",
    is_private: 0,
    board_desc : "",
    origin_user_idx: 99
  }),
  headers: {
    "Content-Type": "application/json"
  }
}
fetch("http://localhost:9089/board", myInit)
  .then(res => res.json())
  .then(json => console.log(json));
