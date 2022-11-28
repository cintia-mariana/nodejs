
const express = require('express');
const cors= require ('cors');
const fileUpload = require('express-fileupload');
const { dbConnection } = require('../database/config');

class Server {
  constructor() {
    this.app = express();
    this.port= process.env.PORT;

    this.paths = {
      auth:  '/api/auth',
      buscar:  '/api/buscar',
      categorias: '/api/categorias', 
      productos: '/api/productos',
      usuarios: '/api/usuarios',
      uploads:    '/api/uploads',
    }


    // Conectar a base de datos

    this.conectarDB();


    //Middlewares
    this.middlewares();
    

    //rutas de mi aplicacion
    this.routes();
  }

  async conectarDB(){

    await dbConnection();
  }


  middlewares(){
      
    //cors
    this.app.use( (cors()));

    //Parseo y lectura del body

    this.app.use(  express.json() );
    //Directorio Publico
    this.app.use( express.static('public'));

    // Fileupload - Carga de archivos
      // Note that this option available for versions 1.0.0 and newer. 
      this.app.use(fileUpload({
      useTempFiles : true,
      tempFileDir : '/tmp/'
    }));

  }
  

  routes() {

    this.app.use(this.paths.auth, require('../routes/auth'));
    this.app.use(this.paths.buscar, require('../routes/buscar'));
    this.app.use(this.paths.categorias, require('../routes/categorias'));
    this.app.use(this.paths.productos, require('../routes/productos'));
    this.app.use(this.paths.usuarios, require('../routes/user.js'));
    this.app.use( this.paths.uploads, require('../routes/uploads'));
   
   
    
  }

    listen (){
          this.app.listen( this.port, () => {
          console.log('Servidor corriendo en puerto',this.port )
  
  });
  }

}

module.exports= Server;