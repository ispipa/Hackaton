import { formulario } from "./app.js";

export async function response() {
  window.addEventListener("load", () => {
    fetch("../data.json")
      .then((response) => response.json())
      .then((data) => {
        cargarDatos(data);
      });
  });
}
export const cargarDatos = (data) => {
  resultado.innerHTML = "";
  const texto = formulario.value.toLowerCase();

  for (let i = 0; i < Object.values(data).length; i++) {
    if (Object.values(data)[i]["nombre"].indexOf(texto) !== -1) {
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
  }
};
