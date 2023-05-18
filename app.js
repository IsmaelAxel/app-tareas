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
        if(crearTarea.titulo === undefined){
            console.log(`No podes crear una tarea sin titulo`.red)
            break
        }
        console.log(`${archivo.guardarTarea(crearTarea.titulo)} -> ${crearTarea.estado}`.green)
    break
    case accion === "filtrar":
        estado = argv[3]
        if(estado === undefined){
            console.log(`No podemos filtrar algo que no estas especificando`.red)
            break
        }
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
        console.log(`Atención tienes que pasarme una acción\nLas acciones disponibles son: listar, crear y filtrar\n-----------------------------`.red)
    break
}