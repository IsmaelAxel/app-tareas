const {readFileSync,  writeFileSync } = require('fs') /* Por ahora comentamos el writeFileSync porque no lo vamos usar (por ahora) */
/* Path es un modulo nativo de node que nos ayuda al manejo de rutas, en este caso usamos join que nos ayuda a pararnos en una ruta dinamica (de la mano de dirname) */
const path = require('path') 
const leerJSON = () =>JSON.parse(readFileSync(path.join(__dirname, 'tareas.json'), 'utf-8')) /* Con esto podemos leer el archivo tareas.json */
const escribirJSON = (arrayDeTareas) => writeFileSync (path.join(__dirname, 'tareas.json'),JSON.stringify(arrayDeTareas, null, 3), 'utf-8');/* Con esto podemos sobrescribir el archivo tareas.json */
const Tarea = function (id,titulo,estado){
    this.id = id
    this.titulo = titulo 
    this.estado = estado
} /* Creamos una función constructora para que cree Tarea nueva, esta la usaremos mas abajo en el metodo "guardarTarea" */
module.exports = {
    tareas: leerJSON(),
    listar: function(tareas = this.tareas){
        console.log('Listado de tareas\n------------------'.rainbow)
        tareas.forEach(({id,titulo,estado}, i) => {
            console.log(`${id}. ${titulo} - ${estado}`.green)
        });
    },/* Con el metodo listar, pasamos como parametro predeterminado el atributo de this.tareas, que justamente lee el json, una vez haciendo eso.
     Hacemos un ForEach que recorra todo el json que ahora tiene formato de objeto literal. Por ultimo mostramos por consola todo lo que tenemos en el json */
    guardarTarea: function(nombreTarea){
        let tarea = this.tareas
        let ultimoId = tarea[tarea.length - 1] ? tarea[tarea.length - 1].id : 0; /* primero nos dice el numero de elementos que tiene tarea y le restamos uno para pararnos en el id, si no hay ningun id, su valor inicial es 0*/
        let nuevaTarea = new Tarea(ultimoId + 1,nombreTarea, estado = "pendiente") /* llamamos a la funcion constructora para que cree una nueva Tarea, donde tomara el ultimo id, titulo pasado por parametro y el estado que sera igual a pendiente */
        tarea.push(nuevaTarea) /* la nuevaTarea la enviamos al array de tarea */
        escribirJSON(tarea)/* sobreescribimos tarea con el nuevo array de tarea */
        return `Nueva tarea creada\n----------------------\n${nombreTarea}` /* Retornamos un texto que nos dira informacion si es que la nueva tarea se pudo subir exitosamente */
    },
    filtrarPorEstado: function(estado){
        let tareasFiltradas = this.tareas.filter(tarea => tarea.estado === estado)       
        return tareasFiltradas
    }

} 