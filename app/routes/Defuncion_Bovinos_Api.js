module.exports = app => {
  
    const Defuncion_Bovinos_Api = app.db.models.Defuncion_Bovinos_TB;

    app.route('/bovinosdifuntos')
      .get((req, res) => {
        Defuncion_Bovinos_Api.findAll({})
          .then(result => res.json(result))
          .catch(error => {
            res.status(412).json({msg: error.message});
          });
      })

      app.route('/bovinosdifuntos')
       .post((req, res) => {
        Defuncion_Bovinos_Api.create(req.body)
          .then(result => res.json(result))
          .catch(error => {
            res.status(412).json({msg: error.message});
          });
      });
  
    app.route('/bovinosdifuntos/:ID')
      .get((req, res) => {
        console.log(req.params)
        Defuncion_Bovinos_Api.findOne({where: req.params})
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
        Defuncion_Bovinos_Api.update(req.body, {where: req.params})
          .then(result => res.sendStatus(204))
          .catch(error => {
            res.status(412).json({msg: error.message});
          });
      })
      .delete((req, res) => {
        Defuncion_Bovinos_Api.destroy({where: req.params})
          .then(result => res.sendStatus(204))
          .catch(error => {
            res.status(204).json({msg: error.message});
          });
      });
  };