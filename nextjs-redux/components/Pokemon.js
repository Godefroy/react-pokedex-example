import React, { Component } from "react";
import { connect } from "react-redux";
import { addCapture } from "../store/captures_actions";

class Pokemon extends Component {
  handleCapture = () => this.props.addCapture(this.props.entry.id);

  render() {
    const { entry } = this.props;
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

export default connect(undefined, {
  addCapture
})(Pokemon);
