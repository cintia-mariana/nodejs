const { response}= require ('express')



const usuariosGet=(req, res= response) => {
  res.json({
     
      msg: 'get API - controlador'
    });

  }

  const usuariosPut=(req, res= response) => {
    res.json({
       
        msg: 'post API - usuariosPut'
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
          const body =
          res.json({
             
              msg: 'post API - usuariosPut'
            });
        
          }

  module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
    usuariosPost
  }