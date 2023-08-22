"use strict";

module.exports = function (app) {
  var Muestras_DLeche_Api = app.db.models.Muestras_DLeche_TB;
  app.route('/muestrasdeleche').get(function (req, res) {
    Muestras_DLeche_Api.findAll({}).then(function (result) {
      return res.json(result);
    })["catch"](function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  });
  app.route('/muestrasdeleche').post(function (req, res) {
    Muestras_DLeche_Api.create(req.body).then(function (result) {
      return res.json(result);
    })["catch"](function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  });
  app.route('/muestrasdeleche/:ID').get(function (req, res) {
    console.log(req.params);
    Muestras_DLeche_Api.findOne({
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
    Muestras_DLeche_Api.update(req.body, {
      where: req.params
    }).then(function (result) {
      return res.sendStatus(204);
    })["catch"](function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  })["delete"](function (req, res) {
    Muestras_DLeche_Api.destroy({
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