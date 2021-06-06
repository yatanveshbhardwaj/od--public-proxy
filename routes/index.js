var express = require('express');
const {getRandomPartialName} = require("../util");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    partialName:getRandomPartialName()
  });
});

module.exports = router;
