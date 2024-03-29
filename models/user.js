const db = require('../db/index');
const crypto = require('crypto');
// const util = require('util');

module.exports = {
  login: (data, callback) => {
    let email = data.email;
    let pw = crypto.createHash('sha512').update(data.pw).digest('base64').substring(0, 45);
    // 45번째 이상은 안들어가게 해놔서 substring으로 자름
    let search = "SELECT * FROM `all`.Users where email = ? and password = ?";
    db.dbConnection.query(search, [email, pw], (err, data) => {
      if (err) { callback(err, null) }
      // 맞는 user 정보가 없는 경우 [] mysql에서 빈배열이 반환되니까
      // 길이값이 0 일경우를 실패로 처리
      if (data.length === 0) { return callback(null, false)}; // 로그인 실패
      // 클라이언트 로컬스토레이지에 담을 정보 생성
      return callback(null, data) // 로그인성공
    })
  },

  signup: (data, callback) => { //회원가입시
    let email = data.email;
    let pw = crypto.createHash('sha512').update(data.pw).digest('base64'); // 비밀번호를 해싱처리 함
    let nickname = data.nickname;
    // ? 는 db.dbConnection.query안에 [email, pw, nickname]과 연동됨 핵좋음
    let insertUser = "INSERT INTO `all`.`Users` (`email`, `password`, `nickname`) VALUES (?,?,?)";
    db.dbConnection.query(insertUser, [email, pw, nickname], (err, data) => {
      if (err) { return callback(err, false) };
    })
    return callback(null, true);
  },

  search_email: (data, callback) => {
    // 이메일 중복 검사체크
    let email = data.email;
    // ? 는 db.dbConnection.query안에 [emmail]과 연동됨 핵좋음
    let searchEm = "SELECT `email` FROM `all`.`Users` where email = ?"
    db.dbConnection.query(searchEm, [email], (err, data) => {
      console.log(2, err)
      if (data.length === 0) { return callback(null, true) }; // 중복없을 때
      return callback(null, false); // 중복일 때
    })
  },

  search_nick: (data, callback) => {
    // 닉네임 중복체크
    let nickname = data.nickname; // 닉네임을 변수에 삽입
    // 쿼리문 작성
    let searchNick = "SELECT `email` FROM `all`.`Users` where nickname = ?"
    db.dbConnection.query(searchNick, [nickname], (err, data) => {
      if (err) { callback(err, null) }
      if (data.length === 0) { return callback(null, true) }; // 중복없을 때
      return callback(null, false); // 중복일 때
    })
  }
}
