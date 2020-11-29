const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const { extend } = require('got');

module.exports = () => {
  const app = express();

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  
  consign()
    .then('controllers')
    .into(app);

  return app
}


