//const { default: axios } = require("axios");
const axios = require('axios');


class Busquedas {

  historial = [ 'Tegucigalpa', 'Madrid','San jose',];

  constructor () {

  }

  async ciudad (lugar= '') {
    try{

       //peticion http
    //console.log('ciudad',lugar);

   const resp= await axios.get (' https://reqres.in/api/users?page=2');
   console.log( resp.data);

    return []

    }catch (error){

        return [];
    }

   

  }


}



module.exports = Busquedas;