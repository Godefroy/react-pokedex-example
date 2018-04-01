import React from "react";
import PropTypes from "prop-types";
import Pokemon from "./Pokemon";

const PokemonPage = ({ match }) => <Pokemon id={+match.params.id} />;

PokemonPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default PokemonPage;
