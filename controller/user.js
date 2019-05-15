
// url 넘어오는 형태 
// router.post('/user')
// router.post('/user/signup')
// router.post('/user/update')

module.exports = {

    user : (req,res) => { // 로그인시
        let email = req.body.email;
        let pw = req.body.pw;
        let nickname = req.body.nickname;
        console.log ("email = ", email, " / pw = ", pw, " / nickname = ", nickname )
        res.send(JSON.stringify("success post"))
    },

    signup : (req,res) => { // 회원가입시 
        
    },

    update : (req,res) => { // 회원정보 수정시 

    }
}