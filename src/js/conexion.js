import { formulario } from "./app.js";

export async function response()
{
    window.addEventListener('load', () => {
        fetch('../data.json')
        .then(response => response.json())
        .then(data => {
            cargarDatos(data);
        })
    })
}
export const cargarDatos = (data)=>
{

     resultado.innerHTML='';
     const texto = formulario.value.toLowerCase();

     for (let i = 0; i < Object.values(data).length; i++) 
     {
     
        if((Object.values(data)[i]["nombre"].indexOf(texto)!== -1))
        {
            resultado.innerHTML+='<div class="col">'+'<div class="card h-100">'+'<img src='+Object.values(data)[i]["url"]+' class="card-img-top" alt="...">'+'<div class="card-body">'+'<h5 class="card-title">'+Object.values(data)[i]["nombre"]+'</h5>'+'<p class="card-text">'+Object.values(data)[i]["descripcion"]+ '</p>'+'</div>'+'</div>'+'</div>';
        }
     }
}