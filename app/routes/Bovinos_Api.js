module.exports = app => {
  
    const Bovinos_Api = app.db.models.Bovinos_TB;

    app.route('/bovinos')
      .get((req, res) => {
        Bovinos_Api.findAll({})
          .then(result => res.json(result))
          .catch(error => {
            res.status(412).json({msg: error.message});
          });
      })

       .post((req, res) => {
        req.body.forEach(element => {
          Bovinos_Api.create(element)
          //.then(result => console.log(result))
          .catch(error => {
            res.status(412).json({msg: error.message});
          });

        });
        res.status(201).json({msg: "Exito"});
      });
      /////////////////////////////
      app.route('/hijosdemadre/:Cod_Madre')
      .get((req, res) => {
        Bovinos_Api.findAll({where: req.params})      
          .then(result => {
            if (result) {
              res.json(result);
            } else {
              res.sendStatus(404);
            }
          })
          .catch(error => {
            res.status(412).json({msg: error.message});
          });
      })
      app.route('/hijosdepadre/:Cod_Padre')
      .get((req, res) => {
        Bovinos_Api.findAll({where: req.params})      
          .then(result => {
            if (result) {
              res.json(result);
            } else {
              res.sendStatus(404);
            }
          })
          .catch(error => {
            res.status(412).json({msg: error.message});
          });
      })
  //////////////////////////////////////////
  app.route('/bovino')
  .post((req, res) => {
      Bovinos_Api.create(req.body)
      .then(result => res.json(result))
      .catch(error => {
        res.status(412).json({msg: error.message});
      });
  });
  //////////////////////////////////////////

    app.route('/bovino/:ID')
      .get((req, res) => {
        console.log(req.params)
        Bovinos_Api.findOne({where: req.params})      
        //Bovinos_Api.findOne({where: {Codigo_Anual: req.params.Codigo_Anual}})
          .then(result => {
            if (result) {
              res.json(result);
            } else {
              res.sendStatus(404);
            }
          })
          .catch(error => {
            res.status(412).json({msg: error.message});
          });
      })
      .put((req, res) => {
        Bovinos_Api.update(req.body, {where: req.params})
          .then(result => res.sendStatus(204))
          .catch(error => {
            res.status(412).json({msg: error.message});
          });
      })
      .delete((req, res) => {
        Bovinos_Api.destroy({where: req.params})
          .then(result => res.sendStatus(204))
          .catch(error => {
            res.status(204).json({msg: error.message});
          });
      });
  };