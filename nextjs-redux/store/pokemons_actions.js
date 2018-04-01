import axios from "axios";

export const actions = {
  POKEMONS_LOAD: "POKEMONS_LOAD",
  POKEMONS_LOAD_SUCCESS: "POKEMONS_LOAD_SUCCESS",
  POKEMONS_LOAD_ERROR: "POKEMONS_LOAD_ERROR",
  POKEMONS_UPDATE_SEARCH: "POKEMONS_UPDATE_SEARCH"
};

export const fetchPokemons = () => async dispatch => {
  dispatch(loadPokemons());
  try {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
    const pokemons = data.results.map(p => ({
      name: p.name,
      id: +p.url.match(/\/([0-9]+)\/$/)[1]
    }));
    dispatch(loadPokemonsSuccess(pokemons));
  } catch (error) {
    dispatch(loadPokemonsError(error.message || error.toString()));
  }
};

export const loadPokemons = () => ({ type: actions.POKEMONS_LOAD });

export const loadPokemonsSuccess = entries => ({
  type: actions.POKEMONS_LOAD_SUCCESS,
  entries
});

export const loadPokemonsError = error => ({
  type: actions.POKEMONS_LOAD_ERROR,
  error
});

export const updateSearch = search => ({
  type: actions.POKEMONS_UPDATE_SEARCH,
  search
});
