import { form } from "./app.js";
var arrayData = [];
export async function response()
{
    window.addEventListener('load', () => {
        fetch('../data.json')
        .then(response => response.json())
        .then(data => 
        {

            getDataCards(data);
            showCards(data);
        })
    })
}
export function getDataCards(data) {
  for (let product of Object.values(data)) {
    arrayData.push(product);
  }
  localStorage.setItem("object",JSON.stringify(arrayData));
}
export const filter = () => {
  result.innerHTML = "";
  const text = form.value.toLowerCase();
  for (let key in arrayData) {
    if (arrayData[key]["nombre"].toLowerCase().indexOf(text) !== -1) {
        result.innerHTML += `
        <div class="col">
            <div class="card personalized-card">
                <img src='${
                    arrayData[key]["url"]
                }' class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${
                        arrayData[key]["nombre"]
                    }</h5>
                    <p class="card-text">
                        <span class="bold">Rareza: </span>${
                            arrayData[key]["rareza"]
                        }
                    </p>
                    <p class="card-text">
                        <span class="bold">Número: </span>${
                            arrayData[key]["numero"]
                        }
                    </p>
                    <p class="card-text">
                        <span class="bold">Precio: </span>${
                            arrayData[key]["precio"]
                        }
                    </p>
                </div>
                <div>
                    <a href="card.html?id=${arrayData[key]["id"]}" class="view-more-button"><span class="material-symbols-outlined">
                    visibility
                    </span><p class="corner"> Ver más</p></a>
                </div>
            </div>
        </div>`;
    }
  }
  if (result.innerHTML == "") {
    result.innerHTML += "<h1>Product not found</h1>";
  }
};
const showCards = (date) => {
  result.innerHTML = "";
  for (let key in Object.values(date)) {
    result.innerHTML += `
    <div class="col" style="">
        <div class="card personalized-card">
            <img src='${
                date[key]["url"]
            }' class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${
                    date[key]["nombre"]
                }</h5>
                <p class="card-text">
                    <span class="bold">Rareza: </span>${
                        date[key]["rareza"]
                    }
                </p>
                <p class="card-text">
                    <span class="bold">Número: </span>${
                        date[key]["numero"]
                    }
                </p>
                <p class="card-text">
                    <span class="bold">Precio: </span>${
                        date[key]["precio"]
                    }
                </p>
            </div>
            <div>
                <a href="card.html?id=${date[key]["id"]}" class="view-more-button on"
                ><span class="material-symbols-outlined">
                visibility
                </span><p class="corner"> Ver más</p></a>
            </div>
        </div>
    </div>`;  
  }
};
export function card()
{
    var URLsearch = new URL(window.location.href);
    const searchParams = new URLSearchParams(URLsearch.search);
    var id = searchParams.get("id");
    printCard(id);
}
function printCard(id)
{
    var cards = JSON.parse(localStorage.getItem("object"));
    console.log(cards);
            result_card.innerHTML +=`<div class="card mb-12 card-padding" style="max-width: 950px;">
            <div class="row g-5">
              <div class="col-md-4">
                <img src='${cards[id]["url"]}' class="img-fluid rounded-start">
              </div>
              <div class="col-md-8">
                <div class="card-body-exception">
                  <h1 class="card-title">${cards[id]["nombre"]}</h1>
                    <p class="card-text"><strong>Rareza:</strong>${cards[id]["rareza"]}</p>
                    <p class="card-text"><strong>Número:</strong>${cards[id]["numero"]}</p>
                    <p class="card-text"> <strong></strong>${cards[id]["descripcion"]}</p>
                    <p class="card-text"><strong>Contacto:</strong>${cards[id]["correo"]}</p>
                    <p class="price-text"><strong>Precio:</strong>${cards[id]["precio"]}</p>
                    <a href="./index.html" class="volver text-end"><span class="material-symbols-outlined">home</span><p> Volver</p></a>
                </div>
              </div>
            </div>
          </div>`;  
}
