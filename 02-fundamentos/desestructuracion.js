const deadpool = {
  nombre: 'Wade',
  apellido:'Winston',
  poder:'Regeneracion',

  getNombre() {
    return`${ this.nombre} ${this.apellido } ${this.poder}`
  }
}


  //const nombre= deadpool.nombre;
  //const apellido=deadpool.apellido;
  //const poder=deadpool.poder;


  function imprimeHeroe({nombre,apellido,poder, edad=0}) {


    nombre= 'Fernando';
  console.log(nombre,apellido,poder,edad);

  }

  //imprimeHeroe( deadpool);

  const heroes= ['Deadpool', 'Superman','Batmant'];

   //const h1=hereos [0];
   //const h2=hereos [1];
   //const h3=hereos [2];

   const [ , , h3 ] = heroes;

   console.log( h3 );
 

  




