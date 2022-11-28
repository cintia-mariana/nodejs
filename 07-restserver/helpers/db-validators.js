const Role = require ('../models/role');
const { Usuario,Categoria, Producto } = require ('../models');


const esRoleValido= async  (rol= '') => {
  const existeRol = await Role.findOne({ rol });
  if ( !existeRol ) {
    throw new Error (`El rol ${ rol } no esta registrado en la BD`);
  }
}

const emailExiste= async (correo = '')=> {
  //verificar si el correo existe
  const existeEmail = await Usuario.findOne({ correo });
  if (existeEmail) {
    throw new Error (`Ese correo: ${ correo } ya esta registrado`);
  }
}

const existeUsuarioPorId= async (id )=> {
  //verificar si el correo existe
  const existeUsuario = await Usuario.findById(id);
  if ( !existeUsuario) {
    throw new Error (`El id no existe ${ id }`);
  }
}
/**
 * Categorias
 */

 const existeCategoriaPorId= async (id )=> {
  //verificar si el correo existe
  const existeCategoria = await Categoria.findById(id);
  if ( !existeCategoria) {
    throw new Error (`El id no existe ${ id }`);
  }
}

/**
 * Productos
 */

 const existeProductoPorId= async (id )=> {
  //verificar si el correo existe
  const existeProducto = await Producto.findById(id);
  if ( !existeProducto) {
    throw new Error (`El id no existe ${ id }`);
  }
}



module.exports = {
  esRoleValido,
 emailExiste,
 existeUsuarioPorId,
 existeCategoriaPorId,
 existeProductoPorId
}