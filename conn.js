var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ami123",
  database: "restful",
  port: "3310"
});

con.connect(function (err){
    if(err) throw err;
});

module.exports = con;
