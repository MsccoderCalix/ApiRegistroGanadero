"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//var bodyParser = require('body-parser');
module.exports = function (app) {
  // Settings
  //app.use(bodyParser.urlencoded({extended: true }));
  global.port = 3636;
  app.use(_express["default"].json());
  app.set('port', global.port || process.env.PORT);
  app.use(function (req, res, next) {
    //console.log("Aqui: " + req.body)
    next();
  });
};