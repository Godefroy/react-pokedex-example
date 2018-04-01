import axios from "axios";

export const actions = {
  POKEMON_LOAD: "POKEMON_LOAD",
  POKEMON_LOAD_SUCCESS: "POKEMON_LOAD_SUCCESS",
  POKEMON_LOAD_ERROR: "POKEMON_LOAD_ERROR"
};

export const fetchPokemon = id => async dispatch => {
  dispatch(loadPokemon());
  try {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const entry = {
      id,
      name: data.name,
      weight: data.weight,
      image: data.sprites.front_default
    };
    dispatch(loadPokemonSuccess(entry));
  } catch (error) {
    dispatch(loadPokemonError(error.message || error.toString()));
  }
};

export const loadPokemon = () => ({ type: actions.POKEMON_LOAD });

export const loadPokemonSuccess = entry => ({
  type: actions.POKEMON_LOAD_SUCCESS,
  entry
});

export const loadPokemonError = error => ({
  type: actions.POKEMON_LOAD_ERROR,
  error
});
