//  https://rickandmortyapi.com/api/character    .results - ?name=rick
//  https://rickandmortyapi.com/api/            (character, locations, episodes)

export const GET_CHARACTERS = "GET_CHARACTERS";

// creamos la funcion para obtener todos los personajes
export const getCharacters = () => (dispatch) => {
  return fetch(`https://rickandmortyapi.com/api/character`)
    .then((res) => res.json())
    .then((res) => dispatch({ type: GET_CHARACTERS, payload: res }));
};

// obtener personajes por id


// crear acciones para crear, editar y eliminar