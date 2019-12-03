## LISTA DE TAREAS


Esta aplicacion esta disenada con NodeJS y permite administrar tareas.

Las opciones que tiene esta aplicacion son:
- Crear
- Actualizar 
- Borrar
- Listar

La estructura de arbol de la aplicacion es

- configure
    - yargs.js
- control
    - tareas-por-hacer.js
- DB
    - data.json
- .gitignore
- app.js

#### Opcion crear

La sintaxix de esta opcion es:

~~~

node app crear -d "la nueva tarea"
~~~

La opcion -d es obligatoria ya que esta definira el nombre de la nueva tarea. Este argumento espera como entrada un string.
