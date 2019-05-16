const mysql = require('mysql');

module.exports = {
  dbConnection: mysql.createConnection({
    host: 'all-list.cvo8zxv2zp0l.ap-northeast-2.rds.amazonaws.com',
    user: 'root',
    password: 'ssss',
    database: 'all'
  })
}
