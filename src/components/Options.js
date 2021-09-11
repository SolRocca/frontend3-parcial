import React, { Component } from "react";

class Options extends Component {
  render() {
    return (
      <div className="options">
        <div className="option">
          <button
            id="A"
            className="buttons"
            onClick={() => {
              this.props.handleClick("A");
            }}
          >
            A
          </button>
          <h2>{this.props.optionA}</h2>
        </div>
        <div className="option">
          <button
            id="B"
            className="buttons"
            onClick={() => {
              this.props.handleClick("B");
            }}
          >
            B
          </button>
          <h2>{this.props.optionB}</h2>
        </div>
      </div>
    );
  }
}

export default Options;
