const API_ALL_CHARACTERS = "https://rickandmortyapi.com/api/character/";

async function allCharacters() {
  const list = await fetch(API_ALL_CHARACTERS, {
    method: "GET"
  }).then(response => response.json());
  return list;
}

async function findCharacters(value) {
  let API_FIND =
    API_ALL_CHARACTERS +
    "?name=" +
    value.name +
    "&status=" +
    value.status +
    "&gender=" +
    value.gender;
  const list = await fetch(API_FIND, {
    method: "GET"
  }).then(response => response.json());
  return list;
}

export { allCharacters, findCharacters };
