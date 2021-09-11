import React, { Component } from "react";

class Historial extends Component {
  render() {
    return (
      <div className="historial">
        <h2>Selección anterior: {this.props.prevSelection}</h2>
        <h2>Historial de opciones elegidas: </h2>
        <p>{this.props.historial}</p>
      </div>
    );
  }
}

export default Historial;
