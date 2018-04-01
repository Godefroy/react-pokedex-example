import React, { Component } from "react";
import Layout from "../components/Layout";
import withRedux from "../utils/withRedux";
import { initStore } from "../store";
import { fetchPokemons } from "../store/pokemons_actions";

class HomePage extends Component {
  static async getInitialProps({ store, isServer }) {
    if (store.getState().pokemons.entries.length === 0) {
      await store.dispatch(fetchPokemons());
    }
  }

  render() {
    return <Layout>Sélectionnez un Pokemon 😄</Layout>;
  }
}

export default withRedux(initStore, undefined, {
  fetchPokemons
})(HomePage);
