var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/image', function(req, res, next) {
  res.render('watermark', { title: 'ShareImage' });
});

module.exports = router;