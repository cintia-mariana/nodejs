const { response, request}= require ('express')



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
        const usuariosPost=(req, res= response) => {
          const { nombre, edad} = req.body;
          res.json({
             
              msg: 'post API - usuariosPut',
              nombre,
              edad
            });
        
          }

  module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
    usuariosPost
  }