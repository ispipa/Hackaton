import { formulario } from "./app.js";
export var datos=[];
var object ="";
export async function response()
{
    window.addEventListener('load', () => {
        fetch('../data.json')
        .then(response => response.json())
        .then(data => 
        {

            cogerDatosProductos(data);
            motrarCartas(data);
        })
    })
}
function cogerDatosProductos(data)
{
    for(let producto of Object.values(data))
    {
        datos.push(producto);
    }
    localStorage.setItem("object",JSON.stringify(datos));
}
export const filtrar = ()=>
{
    
     resultado.innerHTML='';
     const texto = formulario.value.toLowerCase();
     for (let clave in datos)
     {
         
        if(datos[clave]["nombre"].toLowerCase().indexOf(texto) !== -1)
        {
            resultado.innerHTML += `
            <div class="col">
                <div class="card personalized-card">
                    <img src='${
                      datos[clave]["url"]
                    }' class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${
                            datos[clave]["nombre"]
                        }</h5>
                        <p class="card-text">
                            <span class="bold">Rareza: </span>${
                                datos[clave]["rareza"]
                            }
                        </p>
                        <p class="card-text">
                            <span class="bold">Número: </span>${
                                datos[clave]["numero"]
                            }
                        </p>
                        <p class="card-text">
                            <span class="bold">Precio: </span>${
                                datos[clave]["precio"]
                            }
                        </p>
                    </div>
                    <div>
                        <a href="card.html" class="view-more-button"><span class="material-symbols-outlined">
                        visibility
                        </span><p class="corner"> Ver más</p></a>
                    </div>
                </div>
            </div>`;
           
        }
    }
    if( resultado.innerHTML == '' )
    {
        resultado.innerHTML+='<h1>Producto no encontrado</h1>'
    }
}
const motrarCartas = (dato)=>
{
    if(resultado != undefined)
    {
        resultado.innerHTML='';
        for (let clave in Object.values(dato))
        {
                resultado.innerHTML += `
                    <div class="col">
                        <div class="card personalized-card">
                            <img src='${
                            dato[clave]["url"]
                            }' class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${
                                    dato[clave]["nombre"]
                                }</h5>
                                <p class="card-text">
                                    <span class="bold">Rareza: </span>${
                                        dato[clave]["rareza"]
                                    }
                                </p>
                                <p class="card-text">
                                    <span class="bold">Número: </span>${
                                        dato[clave]["numero"]
                                    }
                                </p>
                                <p class="card-text">
                                    <span class="bold">Precio: </span>${
                                        dato[clave]["precio"]
                                    }
                                </p>
                            </div>
                            <div>
                                <a href="card.html?id=${datos[clave]["id"]}" class="view-more-button on"
                                ><span class="material-symbols-outlined">
                                visibility
                                </span><p class="corner"> Ver más</p></a>
                            </div>
                        </div>
                    </div>`;  
        }
    }
}
export function card()
{
    var URLsearch = new URL(window.location.href);
    const searchParams = new URLSearchParams(URLsearch.search);
    var id = searchParams.get("id");
    printCard(id);
}
function printCard(id)
{

    console.log(JSON.parse(localStorage.getItem("object")));
    console.log(id);
}