"use strict";

module.exports = function (app) {
  var Defuncion_Bovinos_Api = app.db.models.Defuncion_Bovinos_TB;
  app.route('/bovinosdifuntos').get(function (req, res) {
    Defuncion_Bovinos_Api.findAll({}).then(function (result) {
      return res.json(result);
    })["catch"](function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  });
  app.route('/bovinosdifuntos').post(function (req, res) {
    Defuncion_Bovinos_Api.create(req.body).then(function (result) {
      return res.json(result);
    })["catch"](function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  });
  app.route('/bovinosdifuntos/:ID').get(function (req, res) {
    console.log(req.params);
    Defuncion_Bovinos_Api.findOne({
      where: req.params
    }).then(function (result) {
      if (result) {
        res.json(result);
      } else {
        res.sendStatus(404);
      }
    })["catch"](function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  }).put(function (req, res) {
    Defuncion_Bovinos_Api.update(req.body, {
      where: req.params
    }).then(function (result) {
      return res.sendStatus(204);
    })["catch"](function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  })["delete"](function (req, res) {
    Defuncion_Bovinos_Api.destroy({
      where: req.params
    }).then(function (result) {
      return res.sendStatus(204);
    })["catch"](function (error) {
      res.status(204).json({
        msg: error.message
      });
    });
  });
};