import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchPokemon } from "../store/pokemon_actions";
import { addCapture } from "../store/captures_actions";

class Pokemon extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    loading: PropTypes.bool,
    error: PropTypes.string,
    pokemon: PropTypes.object,
    fetchPokemon: PropTypes.func,
    addCapture: PropTypes.func
  };

  componentWillMount() {
    this.fetch(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.fetch(nextProps);
  }

  fetch(props) {
    const { id, loading, entry } = props;
    if (!loading && (!entry || id !== entry.id)) {
      props.fetchPokemon(id);
    }
  }

  handleCapture = () => this.props.addCapture(this.props.id);

  render() {
    const { loading, error, entry } = this.props;
    if (loading) return <div>Loading...</div>;
    if (error) return <div style={{ color: "red" }}>Error: {error}</div>;
    if (!entry) return null;
    return (
      <div>
        <img src={entry.image} alt={entry.name} />
        <h2>{entry.name}</h2>
        <p>Poids : {entry.weight}</p>
        <p>
          <button onClick={this.handleCapture}>Capturer</button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = ({ pokemon }) => ({
  loading: pokemon.loading,
  error: pokemon.error,
  entry: pokemon.entry
});

const PokemonContainer = connect(mapStateToProps, {
  fetchPokemon,
  addCapture
})(Pokemon);

export default PokemonContainer;
