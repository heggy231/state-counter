import React, { Component } from "react";
import DisplayCounter from "./components/DisplayCounter";

class App extends Component {

  constructor() {
    super();

    this.state = {
      counter: 77
    };
  }

  handleIncrementClick = () => {
    // this.setState will replace this.state obj
    this.setState({
      counter: this.state.counter + 1
    })
  }

  handleDecrementClick = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  handleDoublingClick = () => {
    this.setState({
      counter: this.state.counter * 2
    })
  }

  handleHalfClick = () => {
    this.setState({
      counter: this.state.counter / 2
    })
  }

  render() {
    return (
      <div>
        <DisplayCounter counter={this.state.counter} />
        <button onClick={this.handleIncrementClick}>Increment</button>
        <button onClick={this.handleDecrementClick}>Decrement</button>
        <button onClick={this.handleDoublingClick}>Double 2X</button>
        <button onClick={this.handleHalfClick}>Half 1/2</button>
      </div>
    );
  }
}

export default App;
