// get
// fetch("http://localhost:9089")
// .then(res => res.json())
// .then(json => console.log(json));

//post
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

fetch("http://localhost:9089/login", testObj)
  // fetch("http://15.164.93.48:9089/login", testObj)
  .then(res => res.json())
  .then(json => console.log(123123, json));
//
