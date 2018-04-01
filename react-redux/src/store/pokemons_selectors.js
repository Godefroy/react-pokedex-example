import { createSelector } from "reselect";

const pokemonsSelector = state => state.pokemons.entries;
const searchSelector = state => state.pokemons.search;
const capturesSelector = state => state.captures;

export const pokemonsMenuSelector = createSelector(
  pokemonsSelector,
  searchSelector,
  capturesSelector,
  (entries, search, captures) =>
    entries
      .filter(
        pokemon =>
          // Name contient search ?
          pokemon.name.indexOf(search) !== -1 ||
          // ID = search ?
          String(pokemon.id) === search
      )
      // Ajout de la propriété "captured"
      .map(pokemon => ({
        ...pokemon,
        captured: captures.indexOf(pokemon.id) !== -1
      }))
);
