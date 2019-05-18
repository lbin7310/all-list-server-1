// get
// fetch("http://localhost:9089")
// .then(res => res.json())
// .then(json => console.log(json));

//post
let token;
let testText = {
  email: "noh@sgmail.com",
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

fetch("http://localhost:9089/user/email", testObj)
  .then(res => res.json())
  .then(json => {
    console.log(json);
    window.localStorage.setItem('myCat', json);
  });

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
