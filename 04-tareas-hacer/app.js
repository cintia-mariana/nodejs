import { inquirerMenu, pausa } from './helpers/inquirer.js';
import { Tarea } from './models/tarea.js';
import { Tareas } from './models/tareas.js';

// const Tarea =require ('./models/tarea');


console.clear();

const main = async () => {

  console.log('Hola mundo');
  let opt = '';


  do {
    //opt=await  inquirerMenu();
    //console.log({ opt });
    const tareas = new Tareas ();
    const tarea=new Tarea('comprar comida');
    tareas._listado[tarea.id]= tarea;

    console.log(tareas);
    await pausa();



  } while (opt !== '0')
 


//pausa();


}

main ();

