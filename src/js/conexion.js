import { formulario } from "./app.js";
var datos = [];
export async function response() {
  window.addEventListener("load", () => {
    fetch("../data.json")
      .then((response) => response.json())
      .then((data) => {
        cogerDatosProductos(data);
        motrarCartas(data);
      });
  });
}
function cogerDatosProductos(data) {
  for (let producto of Object.values(data)) {
    datos.push(producto);
  }
}
export const filtrar = () => {
  resultado.innerHTML = "";
  const texto = formulario.value.toLowerCase();
  for (let clave in datos) {
    if (datos[clave]["nombre"].toLowerCase().indexOf(texto) !== -1) {
      resultado.innerHTML +=
        '<div class="col">' +
        '<div class="card h-100">' +
        "<img src=" +
        datos[clave]["url"] +
        ' class="card-img-top" alt="...">' +
        '<div class="card-body">' +
        '<h5 class="card-title">' +
        datos[clave]["nombre"] +
        "</h5>" +
        '<p class="card-text">' +
        datos[clave]["descripcion"] +
        "</p>" +
        "</div>" +
        "</div>" +
        "</div>";
    }
  }
  if (resultado.innerHTML == "") {
    resultado.innerHTML += "<h1>Producto no encontrado</h1>";
  }
};
const motrarCartas = (dato) => {
  resultado.innerHTML = "";
  for (let clave in Object.values(dato)) {
    resultado.innerHTML += `
            <div class="col">
                <div class="card personalized-card">
                    <img src='${
                      Object.values(data)[i]["url"]
                    }' class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${
                          Object.values(data)[i]["nombre"]
                        }</h5>
                        <p class="card-text">
                            <span class="bold">Rareza: </span>${
                              Object.values(data)[i]["rareza"]
                            }
                        </p>
                        <p class="card-text">
                            <span class="bold">Número: </span>${
                              Object.values(data)[i]["numero"]
                            }
                        </p>
                        <p class="card-text">
                            <span class="bold">Precio: </span>${
                              Object.values(data)[i]["precio"]
                            }
                        </p>
                    </div>
                    <div>
                        <a href="#" class="view-more-button"><span class="material-symbols-outlined">
                        visibility
                        </span><p class="corner"> Ver más</p></a>
                    </div>
                </div>
            </div>`;
  }
};
