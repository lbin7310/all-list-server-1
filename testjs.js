// get
// fetch("http://localhost:9089")
// .then(res => res.json())
// .then(json => console.log(json));

//post
let test_text = { 
    email : "test@gmail.com",
    pw : "123",
    nickname : "hoho"
}
let test_obj = {
    method : "POST",
    body : JSON.stringify(test_text),
    headers: {
        "Content-Type": "application/json",
    }
}

fetch("http://localhost:9089",test_obj)
.then(res => res.json())
.then(json => console.log(json));