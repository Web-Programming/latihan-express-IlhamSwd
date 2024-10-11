var express = require('express');
var router = express.Router();


// Import Controller
const mainController = require('../controllers/main');

/* GET home page. */
router.get('/', mainController.index);

// buat route ke halaman kontak (/kontak) dengan method
router.get('/kontak', mainController.kontak);


module.exports = router;

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


