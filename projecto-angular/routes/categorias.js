const{ Router}= require ('express');
const { check } = require ('express-validator');
const { crearCategoria,obtenerCategorias, obtenerCategoria } = require('../controllers/categorias');
const { validarJWT, validarCampos } = require('../middlewares');






const router= Router();
/**
 * {{ url }}/api/categorias
 */


// Obtener todas las categorias - publico
router.get ('/', obtenerCategorias
);

// Obtener una categoria por id - publico
router.get ('/:id', [

    check ( 'id', 'No es un id de mongo valido').isMongoId(),
    validarCampos
  //check('id').custom( existeCategoria)
], obtenerCategoria );

// Crear categoria -privado -cualquier persona con un token valido
router.post('/', [
   validarJWT,
  check('nombre', 'El nombre es obligatorio').not().isEmpty(),
validarCampos
], crearCategoria);


// Actualizar -privado - cualquiera con token valido
router.put('/:id', (req, res ) => {
  res.json('put');
});
// borrar una categoria -Admin
router.delete('/:id', (req, res ) => {
  res.json('delete');
});




  module.exports = router;