module.exports = app => {
  
    const Ventas_Bovino_Api = app.db.models.Ventas_Bovino_TB;

    app.route('/ventasbovinos')
      .get((req, res) => {
        Ventas_Bovino_Api.findAll({})
          .then(result => res.json(result))
          .catch(error => {
            res.status(412).json({msg: error.message});
          });
      })

      app.route('/ventasbovinos')
       .post((req, res) => {
        Ventas_Bovino_Api.create(req.body)
          .then(result => res.json(result))
          .catch(error => {
            res.status(412).json({msg: error.message});
          });
      });
  
    app.route('/ventasbovinos/:ID')
      .get((req, res) => {
        console.log(req.params)
        Ventas_Bovino_Api.findOne({where: req.params})
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
        Ventas_Bovino_Api.update(req.body, {where: req.params})
          .then(result => res.sendStatus(204))
          .catch(error => {
            res.status(412).json({msg: error.message});
          });
      })
      .delete((req, res) => {
        Ventas_Bovino_Api.destroy({where: req.params})
          .then(result => res.sendStatus(204))
          .catch(error => {
            res.status(204).json({msg: error.message});
          });
      });
  };