import React, { Component } from "react";

class DisplayCounter extends Component {
  render() {
    return (
      <>
        <h1>DisplayCounter</h1>
        <h2>{this.props.counter}</h2>
      </>
    )
  }
}

export default DisplayCounter;