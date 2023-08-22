module.exports = app => {
  
    const Muestras_DLeche_Api = app.db.models.Muestras_DLeche_TB;

    app.route('/muestrasdeleche')
      .get((req, res) => {
        Muestras_DLeche_Api.findAll({})
          .then(result => res.json(result))
          .catch(error => {
            res.status(412).json({msg: error.message});
          });
      })

      app.route('/muestrasdeleche')
       .post((req, res) => {
        Muestras_DLeche_Api.create(req.body)
          .then(result => res.json(result))
          .catch(error => {
            res.status(412).json({msg: error.message});
          });
      });
  
    app.route('/muestrasdeleche/:ID')
      .get((req, res) => {
        console.log(req.params)
        Muestras_DLeche_Api.findOne({where: req.params})
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
        Muestras_DLeche_Api.update(req.body, {where: req.params})
          .then(result => res.sendStatus(204))
          .catch(error => {
            res.status(412).json({msg: error.message});
          });
      })
      .delete((req, res) => {
        Muestras_DLeche_Api.destroy({where: req.params})
          .then(result => res.sendStatus(204))
          .catch(error => {
            res.status(204).json({msg: error.message});
          });
      });
  };