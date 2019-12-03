const argv = require('./configure/yargs').argv; //hace la llaamada al modulo yargs con sus respectivos metodos
const tareas = require('./control/tareas-por-hacer');
const colors = require('colors');


let comando = argv._[0]; //se guarda en una variable el parametro que se encuentra en la posicion 0


switch (comando) { //switch para controlar las opciones que tiene la aplicacion
    case 'crear':
        let tarea = tareas.crear(argv.descripcion); //utiliza el metodo crear mandado como parmetro lo que ingresa en descripcion
        console.log(tarea);
        break;

    case 'actualizar':
        let actualizado = tareas.actualizar(argv.descripcion, argv.completado) //utiliza el metodo actualizar mandado como parmetro lo que ingresa en descripcion
        console.log(actualizado);

        break;
    case 'listar':
        let vector = tareas.listar(argv.completado) // se guarda el vector que retorna la funcion listar 
        let titulo = '';
        if (!vector) {
            console.log(`no hay tareas con el estado ${argv.completado}`);
        } else {
            for (let tarea of vector) { //se muestra por consola los elementos del vector
                console.log(`============== tareas con el estado ${argv.completado} =============`.blue);
                console.log("Nombre: ", tarea.descripcion.green);
                console.log("Estado: ", tarea.completado);
            }
        }
        break;
    case 'borrar':
        let borrado = tareas.borrar(argv.descripcion); //utiliza el metodo borrar mandado como parmetro lo que ingresa en descripcion
        console.log(borrado);

        break;
    default:
        console.log("la opcion escogida no existe");

}