var express = require('express');
var router = express.Router();
const indexService = require( '../service/index_service' );

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/test', function(req, res, next) {
  let test = indexService.test();
  console.log("test :: ", test)
  res.render('index', { title: 'Express' });
});

module.exports = router;
