import React, { Component } from "react";

class App extends Component {

  constructor() {
    super(); // call parent constructor, Component, https://youtu.be/s7UzFzD4zZI?t=275
    // counter prop is available to every Obj, every instance of App class
    console.log('[Constructor] this:', this);
    this.counter = 99;

    // this.handleIncrementClick = this.handleIncrementClick.bind(this);
  }

  handleIncrementClick = () => {
    console.log('this', this);
    this.counter++;
    console.log('this.counter', this.counter); // this.counter is zero as initial value is defined inside of constructor
  }

  render() {
    return (
      <div>
        <h1>{this.counter}</h1>
        <button onClick={this.handleIncrementClick}>Increment</button>
      </div>
    );
  }
}

export default App;
