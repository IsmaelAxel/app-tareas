const {readFileSync,  writeFileSync } = require('fs') /* Por ahora comentamos el writeFileSync porque no lo vamos usar (por ahora) */
/* Path es un modulo nativo de node que nos ayuda al manejo de rutas, en este caso usamos join que nos ayuda a pararnos en una ruta dinamica (de la mano de dirname) */
const path = require('path') 
const leerJSON = () =>JSON.parse(readFileSync(path.join(__dirname, 'tareas.json'), 'utf-8')) /* Con esto podemos leer el archivo tareas.json */
const escribirJSON = (arrayDeTareas) => writeFileSync (path.join(__dirname, 'tareas.json'),JSON.stringify(arrayDeTareas, null, 3), 'utf-8');/* Con esto podemos sobrescribir el archivo tareas.json */
const Tarea = function (id,titulo,estado){
    this.id = id
    this.titulo = titulo 
    this.estado = estado
}
module.exports = {
    tareas: leerJSON(),
    listar: function(tareas = this.tareas){
        console.log('Listado de tareas\n------------------'.rainbow)
        tareas.forEach(({id,titulo,estado}, i) => {
            console.log(`${id}. ${titulo} - ${estado}`.green)
        });
    return null
    },/* Con el metodo listar, pasamos como parametro predeterminado el atributo de this.tareas, que justamente lee el json, una vez haciendo eso.
     Hacemos un ForEach que recorra todo el json que ahora tiene formato de objeto literal. Por ultimo mostramos por consola todo lo que tenemos en el json */
    guardarTarea: function(titulo){
        let tarea = this.tareas
        let ultimoId = tarea[tarea.length - 1] ? tarea[tarea.length - 1].id : 0;
        let nuevaTarea = new Tarea(ultimoId + 1,titulo, estado = "pendiente")
        tarea.push(nuevaTarea)
        escribirJSON(tarea)
        return `Nueva tarea creada\n----------------------\n${titulo}`
    }
} 