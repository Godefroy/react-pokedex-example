import React, { Component } from "react";
import Layout from "../components/Layout";
import withRedux from "../utils/withRedux";
import { initStore } from "../store";
import { fetchPokemons } from "../store/pokemons_actions";
import { fetchPokemon } from "../store/pokemon_actions";
import Pokemon from "../components/Pokemon";

class PokemonPage extends Component {
  static async getInitialProps({ store, query: { id } }) {
    if (store.getState().pokemons.entries.length === 0) {
      await store.dispatch(fetchPokemons());
    }
    await store.dispatch(fetchPokemon(+id));
  }

  handleCapture = () => this.props.addCapture(this.props.id);

  render() {
    const { loading, error, entry } = this.props;
    return (
      <Layout>
        {!loading && entry && <Pokemon entry={entry} />}
        {loading && <div>Loading...</div>}
        {error && <div style={{ color: "red" }}>Error: {error}</div>}
      </Layout>
    );
  }
}

const mapStateToProps = ({ pokemon }) => ({
  loading: pokemon.loading,
  error: pokemon.error,
  entry: pokemon.entry
});

export default withRedux(initStore, mapStateToProps, {
  fetchPokemons,
  fetchPokemon
})(PokemonPage);
