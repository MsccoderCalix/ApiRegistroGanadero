module.exports = app => {
    app.get('/', (req, res) => {
      res.json({status: 'Registro Ganadero El Carrizal'});
    });
  }
