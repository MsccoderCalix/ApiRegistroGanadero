import express from 'express';
//var bodyParser = require('body-parser');

module.exports = app => {

  // Settings
  //app.use(bodyParser.urlencoded({extended: true }));
  global.port= 3636
  app.use(express.json());
  app.set('port', global.port || process.env.PORT);

  app.use((req, res, next) => {
    //console.log("Aqui: " + req.body)
    next();
  });
   
};