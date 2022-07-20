import {response, filtrar} from "./conexion.js";

export const formulario = document.querySelector('#validationCustom01');
app();
function app() 
{
    response();
    filtrar();
    formulario.addEventListener('keyup',filtrar)
}