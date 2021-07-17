import React from 'react';

class Output extends React.Component {
  render() {
    return (
      <span>{this.props.count}</span>
    );
  }
}

export default Output;