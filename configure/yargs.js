const descripcion = {
    demand: true,
    alias: 'd',
    desc: "se indicara la tarea por hacer"
}

const completado = { //este es el segundo parametro que la opcion actualizar posee
    default: true, //con esto se define que si el usuario no envia argumento en la pcion se colocara true
    alias: 'c', //es el alias con el que recibira el segundo argumento 
    desc: "marca como completado o pendiente la tarea", //una breve descripcion de lo q hace esta opcion
    type: 'boolean' // se indica que el valor ingresado es de tipo boolean
}


const argv = require('yargs') //hacer el llamado del modulo yargs
    .command('crear', 'crear una nueva tarea', { //se crea el primer comando que el programa puede realizae
        descripcion

    })
    .command('actualizar', 'actualiza el estado de una tarea existente', { //segundo comando que posee la aplicacion
        descripcion,
        completado
    })
    .command('borrar', 'elimina una tarea seleccionada', { //tercer comando que posee la aplicacion

        descripcion
    })
    .command('listar', 'hace un filtrado de las tareas', { //cuarto comando que posee la aplicacion
        completado
    })
    .help() //para que se muestre la ayuda cuando se corra el progrma
    .argv; //para que tome los parametros que tiene argv



module.exports = { //exportar la constante a otros moodulos externos
    argv
}