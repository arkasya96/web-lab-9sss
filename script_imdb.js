 // titlu (string), durata (number),actori


var arrayFilm = [
    {titlu: "film 1", durata:120, actori:["actor 1", "actor 2", "actor 3"],vizualizat: true},
    {titlu: "film 2", durata:130, actori:["actor 11", "actor 22", "actor 33"], vizualizat: false},
    {titlu: "film 3", durata:140, actori:["actor 111", "actor 222", "actor 333"],vizualizat: true},
    {titlu: "film 4", durata:150, actori:["actor 1111", "actor 3333"], vizualizat: true}

];


var body = document.getElementsByTagName("body")[0];

for(let i=0; i<arrayFilm.length; i++)
{
  let createP = document.createElement("p");
  createP.innerHTML =arrayFilm[i].titlu ;
  console.log(createP);
  body.appendChild(createP);
}
