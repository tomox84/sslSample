var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var dat = {
    title: 'SSL接続サンプル',
    serverProtocol: global.serverProtocol,
    
    serverPort: global.serverPort,
  }
  res.render('index', { dat: dat });
});

module.exports = router;
