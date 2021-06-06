const hbs = require('hbs');

const getRandomPartialName = ()=>{
  const templates = hbs.handlebars.partials;
  const index = getRandomInt(Object.keys(templates).length);
  return Object.keys(templates)[index];
}

function getRandomInt(max, min=0) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = {
  getRandomPartialName
}
