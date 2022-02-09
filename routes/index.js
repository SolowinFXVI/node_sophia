var express = require('express');
var router = express.Router();
var db=require('../database');

/* GET home page. */
router.get('/', function(req, res, next) {
  var sql='SELECT * FROM Project';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('index', { title: 'Project List', projectData: data});
  });
});

module.exports = router;
