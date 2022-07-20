import {response, cargarDatos} from "./conexion.js";

export const formulario = document.querySelector('#validationCustom01');
app();
function app() 
{
    response();
    cargarDatos();
    formulario.addEventListener('keyup',cargarDatos)
}