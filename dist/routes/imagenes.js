"use strict";

module.exports = function (app) {
  var path = require("path");

  var fs = require("fs");

  app.get('/imagenes/:img', function (req, res) {
    console.log("\nImagen: ".concat(path.dirname(__dirname), "/res/imagenes/").concat(req.params.img)); //res.sendFile(`${req.params.img}`)

    res.sendFile("".concat(path.dirname(__dirname), "/res/imagenes/").concat(req.params.img));
  });
  app.get('/imagenes', function (req, res) {
    var filenames = fs.readdirSync("".concat(path.dirname(__dirname), "/res/imagenes"));
    filenames = filenames.filter(function (x) {
      return /\.(jpg|png)$/i.test(x);
    });
    filenames = filenames.map(function (x) {
      return x.replaceAll("\\", "/");
    }); //require('dns').lookup(require('os').hostname(), function (err, add, fam) 

    console.log('Filenames: ' + filenames); //filenames= filenames.map(x => `${add}:${global.port}/imagenes/${x}`)//concatenar IP:puerto/imagenes/archivo.jpg
    //filenames= filenames.map(x => `${x}`)//concatenar IP:puerto/imagenes/archivo.jpg

    var imagens = [];
    filenames.forEach(function (Uri) {
      try {
        imagens.push({
          uri: Uri,
          key: Uri.split('_')[1].split('.')[0]
        });
      } catch (error) {
        Console.log("Error: Imagenes con formato incorrecto");
      }
    });
    res.json(imagens); //console.log(filenames)  
  });
};