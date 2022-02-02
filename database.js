var mysql = require('mysql');
var conn = mysql.createConnection({ // change to actual db logins
    host : 'localhost',
    user : 'root',
    password : 'cloud',
    database : 'sophia'
});

conn.connect(function(err){
    if (err) throw err;
    console.log('Database is connected successfully');
});

module.exports = conn;