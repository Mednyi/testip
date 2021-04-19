var express = require('express');
var router = express.Router();
const ips = require('../modules/ips');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.ip);
  if(ips.includes(req.ip)) {
    res.render('index');
  } else {
    res.render('error');
  }
});

module.exports = router;
