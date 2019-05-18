// get
// fetch("http://localhost:9089")
// .then(res => res.json())
// .then(json => console.log(json));

//post
let token;
let testText = {
  email: "noh@gmail.com",
  pw: "noh",
  nickname: "noh"
};

let testObj = {
  method: "POST",
  body: JSON.stringify(testText),
  headers: {
    "Content-Type": "application/json"
  }
};
// "http://15.164.93.48:9089/login"

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

fetch("http://localhost:9089/login", testObj)
  .then(res => res.json())
  .then(json => console.log(json));

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
