var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', {title: 'About Us'});
});

router.get('/kontak', function(req, res, next) {
  res.render('kontak', {title: 'Kontak kito'});
});

module.exports = router;
