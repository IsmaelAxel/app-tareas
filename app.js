const archivo = require('./funcionesDeTareas')
const argv = require('process').argv;
const accion = argv[2]
switch(true){
    case accion === "listar":
        archivo.listar();
    break
    case accion !== "listar"  && accion !== undefined:
        console.log(`--------------------------\nNo entiendo qué quieres hacer\nLas acciones disponibles son: listar\n-----------------------------`)
    break
    default:
        console.log(`Atención tienes que pasarme una acción\nLas acciones disponibles son: listar\n-----------------------------`)
    break
}