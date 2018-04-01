export const actions = {
  CAPTURES_ADD: "CAPTURES_ADD"
};

export const addCapture = pokemonId => ({
  type: actions.CAPTURES_ADD,
  pokemonId
});
