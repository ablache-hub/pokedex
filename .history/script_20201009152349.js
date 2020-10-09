const list = document.getElementById("list");
const description = document.getElementById("description");

const api = "https://pokeapi.co/api/v2/pokemon?limit=20";

/**
 * Try to parse a response as JSON data
 */
function transformToJson(response) {
  if (response.ok) {
    return response.json();
  }

  throw Error("Content not loaded");
}

/**
 * Clear the list of all its items
 */
function emptyList() {
  // ...
}

/**
 * Create an item, fetch its data and setup event listener
 */
function createItem(pokemon) {
  // Create a li tag
  const item = document.createElement("li");
  const id = document.createElement("div");
  const img = document.createElement("img");
  // ...

  fetch(pokemon.url)
    .then(transformToJson)
    .then((data) => {
      list.appendChild(item);
      item.innerHTML = data.name;

      item.appendChild(id);
      id.innerHTML = data.id;

      item.appendChild(img);
      img.src = data.sprites.front_default;

      item.addEventListener("click", function () {
        showDescription(data);
      });

      console.log(data);
    });
}

/**
 * fill the item list with values
 */
function fillList(json) {
  emptyList();
  json.results.forEach(createItem);
}

/**
 * Fill and display the description
 */
function showDescription(data) {
  description.classList.add("show");

  var nom = document.querySelector(".name");
  nom.innerHTML = data.name;
  var id = document.querySelector(".id");
  id.innerHTML = data.id;
  var poids = document.querySelector(".weight");
  weight.innerHTML = data.weight;
  var taille = document.querySelector(".height");
  height.innerHTML = data.height;

  //   const fields = description.querySelectorAll("dd");
  //   fields.forEach((dd) => {
  // ...

  //   });
}

/**
 * Hide the description
 */
function hideDescription() {
  description.classList.remove("show");
}

// Fetch the API end-point and fill the list
fetch(api).then(transformToJson).then(fillList);

// var classe = dd.classList[0];

// //si sa classe #1 n'est pas "types"

// if(classe!="type") {

//     //on definit son texte comme la valeur correspondant à la propriété dans "data" du même nom que la classe
//     dd.innertext = data[classe];

// } else {
// //Comme datatype est un objet on ne peut pas faire pareil, cela engendrerait une erreur, la méthode est donc differente
//     dd.innertext = "";

//     //on itere data.types pour tous les afficher cote à cote
//     data.types.forEach((type) => {
//         if(dd.innertext.length != 0) dd.innertext += ", ";
//         dd.innerText += type.type.name;
//     });
