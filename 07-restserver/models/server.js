
const express = require('express');
const cors= require ('cors');

class Server {
  constructor() {
    this.app = express();
    this.port= process.env.PORT;
    this.usuariosPath= '/api/usuarios';


    //Middlewares
    this.middlewares();
    

    //rutas de mi aplicacion
    this.routes();
  }


  middlewares(){
      
    //cors
    this.app.use( (cors()));

    //Parseo y lectura del body

    this.app.use(  express.json() );
    //Directorio Publico
    this.app.use( express.static('public'))
  }
  

  routes() {
    
    this.app.use('/api/usuarios', require('./routes/user'))
   
    
  }

    listen (){
          this.app.listen( this.port, () => {
          console.log('Servidor corriendo en puerto',this.port )
  
  });
  }

}

module.exports= Server;