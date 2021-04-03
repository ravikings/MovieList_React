import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: 'https://picsum.photos/200'
  };
  render() {
    return (
      <div>
        <span className='badge badge-primary m-2'>{this.formatCount()}</span>
        <buuton className="btn btn-secondary btn-sm">Increment</buuton>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
