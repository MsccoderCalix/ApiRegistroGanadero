module.exports = app => {


  var path = require("path")
  const fs = require("fs")

  app.get('/imagenes/:img', (req, res) => {
    console.log(`\nImagen: ${path.dirname(__dirname)}/res/imagenes/${req.params.img}`)
    //res.sendFile(`${req.params.img}`)
    res.sendFile(`${path.dirname(__dirname)}/res/imagenes/${req.params.img}`)
  })

  app.get('/imagenes', (req, res) => {
    

    let filenames = fs.readdirSync(`${path.dirname(__dirname)}/res/imagenes`)
    filenames= filenames.filter(x => (/\.(jpg|png)$/i).test(x))
    filenames= filenames.map(x => x.replaceAll("\\","/"))
   
    //require('dns').lookup(require('os').hostname(), function (err, add, fam) 
    
      console.log('Filenames: '+filenames)
    //filenames= filenames.map(x => `${add}:${global.port}/imagenes/${x}`)//concatenar IP:puerto/imagenes/archivo.jpg
    //filenames= filenames.map(x => `${x}`)//concatenar IP:puerto/imagenes/archivo.jpg
    let imagens= []
    filenames.forEach(function(Uri) {
      try {        
        imagens.push({uri:Uri, key: Uri.split('_')[1].split('.')[0]})
      } catch (error) {
        console.log("Error: Imagenes con formato incorrecto= "+error)
      }

  });
    res.json(imagens);
    //console.log(filenames)  

})

  }

