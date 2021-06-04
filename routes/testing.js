var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    name: 'OneDirect',
  });
});


router.get('/widgets/init', function (req, res, next) {
  res.render('widgets/init', {});
});

router.get('/widgets/widget', function (req, res, next) {
  const {widgetHash, brandHash} = req.query;
  res.render('widgets/widget', {
    widgetHash,
    brandHash
  });
});


module.exports = router;
