import {response, filter} from "./conexion.js";

export const form = document.querySelector('#validationCustom01');
app();
function app() 
{
    response();
    filter();
    form.addEventListener('keyup',filter)
}