import React, { Component } from "react";
import { connect } from "react-redux";
import Router from "next/router";
import { pokemonsMenuSelector } from "../store/pokemons_selectors";
import Search from "./Search";
import MenuItem from "./MenuItem";

const style = {
  menu: {
    width: "30%",
    padding: 20,
    backgroundColor: "#ede8f6"
  },
  list: {
    listStyleType: "none",
    margin: 0,
    padding: 0
  }
};

class Menu extends Component {
  handleRandom = e => {
    e.preventDefault();
    const { pokemons, history } = this.props;
    const randomIndex = Math.floor(Math.random() * pokemons.length);
    const randomId = pokemons[randomIndex].id;
    Router.push({
      pathname: "/pokemon",
      query: { id: randomId }
    });
  };

  render() {
    const { pokemons, loading, error } = this.props;
    return (
      <aside style={style.menu}>
        <Search />
        <h3>Pokemons</h3>
        <ul style={style.list}>
          <li>
            <a onClick={this.handleRandom} href="#">
              Random
            </a>
          </li>
          {!loading &&
            !error &&
            pokemons.map(pokemon => (
              <MenuItem
                id={pokemon.id}
                name={pokemon.name}
                captured={pokemon.captured}
                key={pokemon.id}
              />
            ))}
          {loading && <div>Loading...</div>}
          {error && <div style={{ color: "red" }}>{error}</div>}
        </ul>
      </aside>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.pokemons.loading,
  error: state.pokemons.error,
  pokemons: pokemonsMenuSelector(state)
});

export default connect(mapStateToProps)(Menu);
