import React from 'react';

export class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
        <div>
          <p>You clicked {this.state.count} times</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            +1
          </button>

          <button onClick={() => this.setState({ count: this.state.count - 1 })}>
            -1
          </button>
        </div>
    );
  }
}