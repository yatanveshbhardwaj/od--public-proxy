var express = require('express');
const {getRandomPartialName} = require("../util");
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    name: 'OneDirect',
  });
});


router.get('/widgets/init', function (req, res, next) {
  let {docker} = req.query;
  if (!docker) docker = 28;
  res.render('widgets/init', {
    partialName: 'gradientBeta',
    docker
  });
});

router.get('/widgets/widget', function (req, res, next) {
  let {widgetHash, brandHash,docker} = req.query;
  if (!docker) docker = 28;
  res.render('widgets/widget', {
    widgetHash,
    brandHash,
    partialName: 'gradientBeta',
    docker
  });
});


module.exports = router;
