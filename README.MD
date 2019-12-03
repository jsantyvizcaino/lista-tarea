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

#### Comando crear

La sintaxix de esta opcion es:

~~~

node app crear -d "la nueva tarea"
~~~

Este comando permite crear una nueva tarea. La opcion -d es obligatoria ya que esta definira el nombre de la nueva tarea. El argumento que espera como entrada es un string.

Una vez que se utilice este comanddo la nueva tarea es guardada en el archivo data.json

#### Comando Actualizar


La sintaxix de esta opcion es:

~~~

node app actualizar -d "tarea existente" -c true/false
~~~


Este comando permite cambiar el estado de una tarea. Trabaja con 2 opciones, -d que es de caracter obligatorio, por que recibe como parametro una tarea que se encuentre dentro del archivo data.json

La segunda opcion -c recibe un dato de tipo boolean que puede ser true o false, este dato no es de caracter obligtorio, ya que si el usuario no define ningun parametro el programa automaticamente tomara como parametro true.

Los cambios efectuados con este comando se sobreescriben en el arhcivo data.json


#### Comando Borrar

La sintaxix de esta opcion es:

~~~

node app borrar -d "tarea existente" 
~~~


Con la ayuda de este comando se puede borrar tareas existentes. La opcion -d es de caracter obligatorio y recibe como parametro una tarea existente dentro del archivo data.json. Al usar este comando se elimina la tarea del archivo data.json



#### Comando Listar

La sintaxix de esta opcion es:

~~~

node app listar -d "tarea existente" -c true/false
~~~


Este comando permite listar las tareas existentes dependiendo de su estado. Trabaja con 2 opciones, -d que es de caracter obligatorio, por que recibe como parametro una tarea que se encuentre dentro del archivo data.json

La segunda opcion -c recibe un dato de tipo boolean que puede ser true o false, este dato no es de caracter obligtorio, ya que si el usuario no define ningun parametro el programa automaticamente tomara como parametro true.

Si el usario manda como parametro de la opion -c true la impresion resultante seran las tareas que tengan de estado true y viceversa.
