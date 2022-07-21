import {response, filter, card} from "./conexion.js";
export const form = document.querySelector('#validationCustom01');
app();
function app() 
{
    if(window.location.pathname != "/src/card.html")
    {
        response();
        filter();
        form.addEventListener('keyup',filter)
    }
        card();            
}