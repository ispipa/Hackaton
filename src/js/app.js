import {response, filtrar} from "./conexion.js";
import { card } from "./card.js";
export const formulario = document.querySelector('#validationCustom01');
app();
function app() 
{
    if(window.location.pathname != "/src/card.html")
    {
        response();
        filtrar();
        formulario.addEventListener('keyup',filtrar)
    }
    card();
}