import { actions } from "./pokemon_actions";

const initialState = {
  loading: false,
  error: undefined,
  entry: undefined
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.POKEMON_LOAD:
      return { ...state, loading: true, error: undefined };
    case actions.POKEMON_LOAD_SUCCESS:
      return { ...state, loading: false, entry: action.entry };
    case actions.POKEMON_LOAD_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}
