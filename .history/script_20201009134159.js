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

      console.log(data);
    });
}

function myFunction() {
  document.getElementById("description").style.display = "block";
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

  const fields = description.querySelectorAll("dd");
  fields.forEach((dd) => {
    // ...
  });
}

/**
 * Hide the description
 */
function hideDescription() {
  description.classList.remove("show");
}

// Fetch the API end-point and fill the list
fetch(api).then(transformToJson).then(fillList);
