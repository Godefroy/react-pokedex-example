import { actions } from "./captures_actions";

const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.CAPTURES_ADD:
      return [...state, action.pokemonId];
    default:
      return state;
  }
}
