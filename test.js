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
  origin_user_idx: 20,
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
      nickname : "nosh"
    })
  }
};
// "http://15.164.93.48:9089/login"
var myInit = {
  method: 'DELETE',
  body: JSON.stringify({
    origin_board_idx: 1,
    origin_user_idx: 1
  }),
  headers: {
    "Content-Type": "application/json"
  }
}
fetch("http://localhost:9089/user_board", myInit)
  .then(res => res.json())
  .then(json => console.log(json));

// fetch("http://localhost:9089/login", testObj)
//   .then(res => res.json())
//   .then(json => {
//     console.log(json);
//     window.localStorage.setItem('myCat', JSON.stringify(json));
//     let userStorage = JSON.parse(window.localStorage.getItem('myCat'));
//     // let userStorage = window.localStorage.getItem('myCat');
//     // console.log("local", userStorage);
//     let puts = {
//       method: "POST",
//       body: JSON.stringify({
//         board: {
//           title: "first",
//           is_private: 0,
//           desc: null
//         },
//         userinfo: {
//           userStorage
//         }
//       }),
//       headers: {
//         "Content-Type": "application/json"
//       }
//     }
//     return fetch("http://localhost:9089/board/get", puts)
//   })
//   .then(res => res.json())
//   .then(json => console.log(json));

// fetch("http://localhost:9089/login", testObj)
//   // fetch("http://15.164.93.48:9089/login", testObj)
//   .then(res => res.json())
//   .then(json => {
//     console.log(123123, json)
//     let testjwt = {
//       method: "POST",
//       body: JSON.stringify({ data: json }),
//       headers: {
//         "Content-Type": "application/json"
//       }
//     };
//     return fetch("http://localhost:9089/user/jwt", testjwt)
//   })
//   .then(res => res.json())
//   .then(json => console.log(json));
//
