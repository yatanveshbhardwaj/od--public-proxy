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
  res.render('widgets/init', {
    partialName: 'gradientBeta'
  });
});

router.get('/widgets/widget', function (req, res, next) {
  let {widgetHash, brandHash, docker, theme} = req.query;
  let partialName;
  if (!docker) docker = 28;
  switch (theme) {
    case 'blank':
      partialName = 'blank';
      break;
    case 'random':
      partialName = getRandomPartialName();
      break;
    case 'gradientBeta':
      partialName = 'gradientBeta';
      break;
    case 'stars':
      partialName = 'stars';
      break;
    default:
      partialName = "gradientBeta";
  }
  res.render('widgets/widget', {
    widgetHash,
    brandHash,
    partialName,
    docker
  });
});


module.exports = router;
