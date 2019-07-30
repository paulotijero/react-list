const API_ALL_CHARACTERS = "https://rickandmortyapi.com/api/character/";

async function listCharacters() {
  const list = await fetch(API_ALL_CHARACTERS, {
    method: "GET"
  }).then(response => response.json());
  return list;
}

export { listCharacters };
