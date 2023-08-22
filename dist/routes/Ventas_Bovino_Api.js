"use strict";

module.exports = function (app) {
  var Ventas_Bovino_Api = app.db.models.Ventas_Bovino_TB;
  app.route('/ventasbovinos').get(function (req, res) {
    Ventas_Bovino_Api.findAll({}).then(function (result) {
      return res.json(result);
    })["catch"](function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  });
  app.route('/ventasbovinos').post(function (req, res) {
    Ventas_Bovino_Api.create(req.body).then(function (result) {
      return res.json(result);
    })["catch"](function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  });
  app.route('/ventasbovinos/:ID').get(function (req, res) {
    console.log(req.params);
    Ventas_Bovino_Api.findOne({
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
    Ventas_Bovino_Api.update(req.body, {
      where: req.params
    }).then(function (result) {
      return res.sendStatus(204);
    })["catch"](function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  })["delete"](function (req, res) {
    Ventas_Bovino_Api.destroy({
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