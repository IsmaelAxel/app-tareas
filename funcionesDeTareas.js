const {readFileSync, /* writeFileSync */} = require('fs') /* Por ahora comentamos el writeFileSync porque no lo vamos usar (por ahora) */
/* Path es un modulo nativo de node que nos ayuda al manejo de rutas, en este caso usamos join que nos ayuda a pararnos en una ruta dinamica (de la mano de dirname) */
const path = require('path') 
const leerJSON = () =>JSON.parse(readFileSync(path.join(__dirname, 'tareas.json'), 'utf-8')) /* Con esto podemos leer el archivo tareas.json */
module.exports = {
    tareas: leerJSON(),
    listar: function(tareas = this.tareas){
        console.log('Listado de tareas\n------------------')
        tareas.forEach(({id,titulo,estado}, i) => {
            console.log(`${id}. ${titulo} - ${estado}`)
        });
    return null
    } /* Con el metodo listar, pasamos como parametro predeterminado el atributo de this.tareas, que justamente lee el json, una vez haciendo eso.
     Hacemos un ForEach que recorra todo el json que ahora tiene formato de objeto literal. Por ultimo mostramos por consola todo lo que tenemos en el json */
} 