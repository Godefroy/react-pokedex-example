import { actions } from "./pokemons_actions";

const initialState = {
  loading: false,
  error: undefined,
  entries: [],
  search: ""
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.POKEMONS_LOAD:
      return { ...state, loading: true, error: undefined };
    case actions.POKEMONS_LOAD_SUCCESS:
      return { ...state, loading: false, entries: action.entries };
    case actions.POKEMONS_LOAD_ERROR:
      return { ...state, loading: false, error: action.error };
    case actions.POKEMONS_UPDATE_SEARCH:
      return { ...state, search: action.search };
    default:
      return state;
  }
}
