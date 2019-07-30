const API_ALL_CHARACTERS = "https://rickandmortyapi.com/api/character/";

async function allCharacters() {
  const list = await fetch(API_ALL_CHARACTERS, {
    method: "GET"
  }).then(response => response.json());
  return list;
}

async function findCharacters(value) {
  const list = await fetch(API_ALL_CHARACTERS + "?name=" + value, {
    method: "GET"
  }).then(response => response.json());
  return list;
}

export { allCharacters, findCharacters };
