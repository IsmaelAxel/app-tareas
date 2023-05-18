const { arch } = require('os');
const archivo = require('./funcionesDeTareas')
const argv = require('process').argv;
require('colors')
const accion = argv[2]
let estado;
let listadoDeTareasFiltrado;
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
    case accion === "filtrar":
        estado = argv[3]
        listadoDeTareasFiltrado = archivo.filtrarPorEstado(estado)
        console.log(`tareas en estado de: "${estado}"\n----------------`.rainbow)
        listadoDeTareasFiltrado.forEach((tarea)=>{
            console.log(`${tarea.id}.${tarea.titulo}`.green)
        })
    break
    case accion !== "listar" && accion !== "crear"  && accion !== undefined:
        console.log(`--------------------------\nNo entiendo qué quieres hacer\nLas acciones disponibles son: listar\n-----------------------------`.red)
    break
    default:
        console.log(`Atención tienes que pasarme una acción\nLas acciones disponibles son: listar\n-----------------------------`.red)
    break
}