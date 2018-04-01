import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store";
import Header from "./Header";
import Menu from "./Menu";
import HomePage from "./HomePage";
import PokemonPage from "./PokemonPage";

const style = {
  content: {
    display: "flex"
  },
  page: {
    padding: 20
  }
};

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Header name="Bob" />
        <div style={style.content}>
          <Menu />
          <div style={style.page}>
            <Route exact path="/" component={HomePage} />
            <Route path="/pokemons/:id" component={PokemonPage} />
          </div>
        </div>
      </div>
    </Router>
  </Provider>
);

export default App;
