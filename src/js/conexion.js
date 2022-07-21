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
    if (arrayData[key]["name"].toLowerCase().indexOf(text) !== -1) {
        resultado.innerHTML += `
        <div class="col">
            <div class="card personalized-card">
                <img src='${
                    arrayData[clave]["url"]
                }' class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${
                        arrayData[clave]["nombre"]
                    }</h5>
                    <p class="card-text">
                        <span class="bold">Rareza: </span>${
                            arrayData[clave]["rareza"]
                        }
                    </p>
                    <p class="card-text">
                        <span class="bold">Número: </span>${
                            arrayData[clave]["numero"]
                        }
                    </p>
                    <p class="card-text">
                        <span class="bold">Precio: </span>${
                            arrayData[clave]["precio"]
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
  if (result.innerHTML == "") {
    result.innerHTML += "<h1>Product not found</h1>";
  }
};
const showCards = (date) => {
  result.innerHTML = "";
  for (let key in Object.values(date)) {
    resultado.innerHTML += `
    <div class="col">
        <div class="card personalized-card">
            <img src='${
                date[clave]["url"]
            }' class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${
                    date[clave]["nombre"]
                }</h5>
                <p class="card-text">
                    <span class="bold">Rareza: </span>${
                        date[clave]["rareza"]
                    }
                </p>
                <p class="card-text">
                    <span class="bold">Número: </span>${
                        date[clave]["numero"]
                    }
                </p>
                <p class="card-text">
                    <span class="bold">Precio: </span>${
                        date[clave]["precio"]
                    }
                </p>
            </div>
            <div>
                <a href="card.html?id=${date[clave]["id"]}" class="view-more-button on"
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

    console.log(JSON.parse(localStorage.getItem("object")));
    console.log(id);
}
