import { form } from "./app.js";
var arrayData=[];
export async function response()
{
    window.addEventListener('load', () => {
        fetch('../data.json')
        .then(response => response.json())
        .then(data => {
            getDataCards(data);
            showCards(data);
        })
    })
}
 export function getDataCards(data)
{
    for(let product of Object.values(data))
    {
        arrayData.push(product);
    }
}
export const filter = ()=>
{
     result.innerHTML='';
     const text = form.value.toLowerCase();
     for (let key in arrayData)
     {
         
        if(arrayData[key]["name"].toLowerCase().indexOf(text) !== -1)
        {
            result.innerHTML+='<div class="col">'+'<div class="card h-100">'+'<img src='+arrayData[key]["url"]+' class="card-img-top" alt="...">'+'<div class="card-body">'+'<h5 class="card-title">'+arrayData[key]["name"]+'</h5>'+'<p class="card-text">'+arrayData[key]["description"]+ '</p>'+'</div>'+'</div>'+'</div>';
        }
    }
    if( result.innerHTML == '' )
    {
        result.innerHTML+='<h1>Product not found</h1>'
    }
}
const showCards = (date)=>
{
     result.innerHTML='';
     for (let key in Object.values(date))
     {
         
            result.innerHTML+='<div class="col">'+'<div class="card h-100">'+'<img src='+date[key]["url"]+' class="card-img-top" alt="...">'+'<div class="card-body">'+'<h5 class="card-title">'+date[key]["name"]+'</h5>'+'<p class="card-text">'+date[key]["description"]+ '</p>'+'</div>'+'</div>'+'</div>';
    }
}