import { formulario } from "./app.js";
var datos=[];
export async function response()
{
    window.addEventListener('load', () => {
        fetch('../data.json')
        .then(response => response.json())
        .then(data => {
            cogerDatosProductos(data);
        })
    })
}
function cogerDatosProductos(data)
{
    for(let producto of Object.values(data))
    {
        datos.push(producto);
    }
}
export const cargarDatos = ()=>
{
     resultado.innerHTML='';
     const texto = formulario.value.toLowerCase();
     for (let clave in datos)
     {
        if(datos[clave]["nombre"].toLowerCase().indexOf(texto) !== -1)
        {
            resultado.innerHTML+='<div class="col">'+'<div class="card h-100">'+'<img src='+datos[clave]["url"]+' class="card-img-top" alt="...">'+'<div class="card-body">'+'<h5 class="card-title">'+datos[clave]["nombre"]+'</h5>'+'<p class="card-text">'+datos[clave]["descripcion"]+ '</p>'+'</div>'+'</div>'+'</div>';
        }
    }
}