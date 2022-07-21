import {response, filtrar, card} from "./conexion.js";
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
    else
    {
        card();
    }
}