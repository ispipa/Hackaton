import {response, filter, card} from "./conexion.js";
export const formulario = document.querySelector('#validationCustom01');
app();
function app() 
{
    if(window.location.pathname != "/src/card.html")
    {
        response();
        filter();
        formulario.addEventListener('keyup',filter)
    }
    else
    {
        card();
    }
}