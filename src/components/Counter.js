import React, { Component } from 'react';
import '../App.css';
import Output from './Output';
import Increment from './Increment';
import Decrement from './Decrement';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // if props.initialCount is falsey (b/c it is not passed in),
      //  use 0 as a default value
      count: props.initialCount || 0
    };
  }

  render() {
    return (
      <div className="mt4">
        <Decrement handleClick={this._decrementCounter} />
        <Output count={this.state.count} />
        <Increment handleClick={this._incrementCounter} />
      </div>
    );
  }

  // Public instance fields (_incrementCounter) exist on every created instance of a class. By declaring a public field, you can ensure the field is always present, and the class definition is more self-documenting.
  // public instance field not a method! different by 1. defined as an arrow function.
  //  2. underscore `_` prefix
  _incrementCounter = () => {
    // Call this.setState() to increment this.state.count
    this.setState({
      count: this.state.count + 1
    }, () => {})
      console.log('Finished incrementing the count');
  }

  _decrementCounter = () => {
    this.setState({
      count: this.state.count - 1
    }, () => {
      console.log('Finished decrementing the count');
    })
  }
}

export default Counter;