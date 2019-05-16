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

fetch("http://localhost:9089/user", testObj)
  .then(res => res.json())
  .then(json => console.log(json));
