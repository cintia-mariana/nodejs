import { v4 as uuidv4 } from 'uuid'

// const { v4:uuidv4 }= require ('uuid');


export class Tarea {

    id= ' ';
    desc = '';
    completadoEn= null;

    constructor (desc) {
      this.id= uuidv4();
        this.desc = desc;
        this.completadoEn =null;
    }
}

// module.exports = Tarea;
// export Tarea;