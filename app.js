const archivo = require('./funcionesDeTareas')
const argv = require('process').argv;
require('colors')
const accion = argv[2]
switch(true){
    case accion === "listar":
        archivo.listar();
    break
    case accion === "crear":
        let crearTarea = {
            titulo: argv[3],
            estado: "pendiente"
        }
        console.log(`${archivo.guardarTarea(crearTarea.titulo)} -> ${crearTarea.estado}`.green)
    break
    case accion !== "listar" && accion !== "crear"  && accion !== undefined:
        console.log(`--------------------------\nNo entiendo qué quieres hacer\nLas acciones disponibles son: listar\n-----------------------------`.red)
    break
    default:
        console.log(`Atención tienes que pasarme una acción\nLas acciones disponibles son: listar\n-----------------------------`.red)
    break
}