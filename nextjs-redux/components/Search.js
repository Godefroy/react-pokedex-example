import React, { Component } from "react";
import { connect } from "react-redux";
import { updateSearch } from "../store/pokemons_actions";

const style = {
  boxSizing: "border-box",
  width: "100%"
};

class Search extends Component {
  handleChange = e => this.props.updateSearch(e.target.value);

  render() {
    const { value } = this.props;
    return (
      <input
        type="text"
        style={style}
        placeholder="Rechercher..."
        onChange={this.handleChange}
        value={value}
      />
    );
  }
}

const mapStateToProps = ({ pokemons }) => ({
  value: pokemons.search
});

export default connect(mapStateToProps, {
  updateSearch
})(Search);
