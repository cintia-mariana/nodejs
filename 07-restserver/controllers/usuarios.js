const { response, request}= require ('express');
const bcryptjs= require('bcryptjs');

const Usuario = require ('../models/usuario');



const usuariosGet=(req=request, res= response) => {

  const {q, nombre= 'no name', apikey,page =1,limit } = req.query;
  res.json({
     
      msg: 'get API - controlador',
      q,
      nombre,
      apikey,
      page,
      limit
    });

  }

  const usuariosPut=(req, res= response) => {

      const {id}=req.params;
    
      res.json({
        msg: 'post API - usuariosPut',
        id
      });
  
    }
    const usuariosPatch=(req, res= response) => {
      res.json({
         
          msg: 'patch API - usuariosPatch'
        });
    
      }
      const usuariosDelete=(req, res= response) => {
        res.json({
           
            msg: 'delete API - usuariosDelete'
          });
      
        }
        const usuariosPost= async(req, res= response) => {

          const {nombre,correo,password,rol} = req.body;
          const usuario= new Usuario ( { nombre,correo,password,rol});

          //verificar si el correo existe

          //encriptar la contraseña

          const salt = bcryptjs.genSaltSync();
          usuario.password = bcryptjs.hashSync( password, salt);

          //guardar en BD

          await usuario.save();
          
          
          res.json({
              
              usuario
            });
        
          }

  module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
    usuariosPost
  }