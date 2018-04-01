import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import pokemons from "./pokemons_reducer";
import pokemon from "./pokemon_reducer";
import captures from "./captures_reducer";

const reducers = combineReducers({
  pokemons,
  pokemon,
  captures
});

export const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
