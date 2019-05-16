// get
// fetch("http://localhost:9089")
// .then(res => res.json())
// .then(json => console.log(json));

//post
let testText = {
  email: "test@gmail.com",
  pw: "123",
  nickname: "hoho"
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
  .then(json => console.log(json));
//
