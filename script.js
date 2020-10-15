const list = document.getElementById("list");
const description = document.getElementById("description");

const api = "https://pokeapi.co/api/v2/pokemon?limit=12";

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
  // Création des balises
  const li = document.createElement("li");
  const id = document.createElement("div");
  const image = document.createElement("img");

  fetch(pokemon.url)
    .then(transformToJson)
    .then((data) => {
      // Affichage de la liste contenant le nom+l'image
      // sur la page principale
      list.appendChild(li);
      li.innerHTML = data.name;

      li.appendChild(id);
      //id.innerHTML = data.id;

      id.appendChild(image);
      image.src = data.sprites.front_default;

      //Au click sur "li", appeller showDescription()
      li.addEventListener("click", function () {
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
  //Affichage des éléments dans la description

  const image = document.createElement("img"); //Balise img
  image.src = data.sprites.other["official-artwork"].front_default; //Attribution "src" à <img>
  document.querySelector("dd.image").innerHTML = ""; //Clean du contenu de dd.image
  document.querySelector("dd.image").appendChild(image); //Injection de <img> avec le src de l'image

  //Selection de chaque classe/injection des données
  var nom = document.querySelector(".name");
  nom.innerHTML = data.name;
  var id = document.querySelector(".id");
  id.innerHTML = data.id;
  var poids = document.querySelector(".weight");
  poids.innerHTML = data.weight;
  var taille = document.querySelector(".height");
  taille.innerHTML = data.height;
  var types = document.querySelector(".types");

  types.innerText = "";

  //Si "types" contient plusieurs valeurs alors les afficher séparement
  data.types.forEach((type) => {
    if (types.innerText.length != 0) types.innerText += "/";
    types.innerText += type.type.name;
  });

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
