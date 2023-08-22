"use strict";

module.exports = function (app) {
  var Bovinos_Api = app.db.models.Bovinos_TB;
  app.route('/bovinos').get(function (req, res) {
    Bovinos_Api.findAll({}).then(function (result) {
      return res.json(result);
    })["catch"](function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  }).post(function (req, res) {
    req.body.forEach(function (element) {
      Bovinos_Api.create(element) //.then(result => console.log(result))
      ["catch"](function (error) {
        res.status(412).json({
          msg: error.message
        });
      });
    });
    res.status(201).json({
      msg: "Exito"
    });
  }); /////////////////////////////

  app.route('/hijosdemadre/:Cod_Madre').get(function (req, res) {
    Bovinos_Api.findAll({
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
  });
  app.route('/hijosdepadre/:Cod_Padre').get(function (req, res) {
    Bovinos_Api.findAll({
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
  }); //////////////////////////////////////////

  app.route('/bovino').post(function (req, res) {
    Bovinos_Api.create(req.body).then(function (result) {
      return res.json(result);
    })["catch"](function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  }); //////////////////////////////////////////

  app.route('/bovino/:ID').get(function (req, res) {
    console.log(req.params);
    Bovinos_Api.findOne({
      where: req.params
    }) //Bovinos_Api.findOne({where: {Codigo_Anual: req.params.Codigo_Anual}})
    .then(function (result) {
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
    Bovinos_Api.update(req.body, {
      where: req.params
    }).then(function (result) {
      return res.sendStatus(204);
    })["catch"](function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  })["delete"](function (req, res) {
    Bovinos_Api.destroy({
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