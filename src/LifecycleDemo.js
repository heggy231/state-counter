import React, { Component } from "react";


class LifecycleDemo extends Component {

  constructor(props) {
    super(props);
    console.log('constructor()');

    this.state = {
      count: 77
    };
  }

  render() {
    console.log('render()');
    return (
      <>
        <h1>Lifecycle Demo {this.state.count}</h1>
        <button onClick={this._increment}>+</button>
      </>
    );
  }

  _increment = () => {
    console.log('_increment()');
    this.setState({
      count: this.state.count + 1
      }, () => {
        console.log('this.setState() finished');
    });
  }
}

export default LifecycleDemo;
