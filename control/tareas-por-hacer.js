let tareasPorHacer = []; //se crea el vector en el cual se guardaran las tareas
const fs = require('fs'); //se importa el modulo fs el cual ayuda a trabajar con archivos


const cargarDB = () => { //sirve para inicializar el vector tareasporhacer y poder manipularlo
    try { //se mete en un bocle try catch para poder controlar el error de que el archivo json este vacio
        tareasPorHacer = require('../DB/data.json') //se carga el contenido del archivo data.json en el vector
    } catch (error) {
        tareasPorHacer = [] //devuelve un vector vacio sin tomar en cuenta el archivo json
    }
};

const guardarDB = () => { //funcion flecha que permite guardar el vecor  como un archivo json
    let data = JSON.stringify(tareasPorHacer); //metodo que perite trannsformar un string a formato JSON
    fs.writeFile('DB/data.json', data, (err) => { //permite crear y escriir un archivo el segundo parametro es el contenido del archivo
        if (err) throw new Error("no se pudo guardar", err); //permite controlar si es que existieera un error
    });

};

const crear = (descripcion) => {
    cargarDB(); //con esto se puede seguir aumentado mas tareas sin que se sobreescriban
    let tarea = { //creando una nueva tarea con los atributos de descripcion y estado
        descripcion,
        completado: false
    };
    tareasPorHacer.push(tarea); //se agrega la tarea al vector tareasPorHacer
    guardarDB();
    return tarea; //esta funcion flecha devuelve la tarea creada
};


const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = tareasPorHacer.findIndex(tarea => tarea.descripcion === descripcion); //se obtiene el indice de la tarea que haga match con la tarea mandada a esta funcion
    if (index >= 0) { //se controla que el index no sea menor que 0 ya que el metodo anterior devuelve un -1 si es que no hace match
        tareasPorHacer[index].completado = completado; //se hace que la tarea en la posicion del index en su atributo completado se iguale a lo que recibe esta funcion
        guardarDB(); // los cambios se escriben en la base de datos
        return true; //para controlar el funcionamiento de la funcion
    }
    return false;
};

const listar = (completado) => {

    cargarDB(); //carga los valores que se encuantran el el json y los mete al vector
    let nuevolistado = tareasPorHacer.filter(estado => estado.completado === completado); //filtra el vector dependiendo del valor que le llegue, el resultado de ese filtro se guarda en un nuevo vector
    if (nuevolistado.length === 0) { //controla que existan resultados para la consulta
        return false;
    } else {
        return nuevolistado; //regresa el nuevo vector
    }


};

const borrar = (descripcion) => {
    cargarDB(); //carga los valores que se encuantran el el json y los mete al vector
    let nuevolistado = tareasPorHacer.filter(tarea => tarea.descripcion !== descripcion) //se crea un nuevo vector con los valores que son diferente de el argumento descripcion que llega a este metodo
    if (tareasPorHacer.length === nuevolistado.length) { //si el tamano del nuevo vector es igual al anterior esto significa que no se encontro la tarea
        return false;
    } else {
        tareasPorHacer = nuevolistado; //si el tamano es diferente se actualiza el vetor taresporhacer con los valores de el nuevo listado
        guardarDB(); //se llena el archivo json con los nuevos valores
        return true;
    }
};


module.exports = { //exporta las funciones de este archivo hacia el exterior
    crear,
    actualizar,
    listar,
    borrar
};