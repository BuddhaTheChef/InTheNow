import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from './testActions'


const actions = {
  incrementCounter,
  decrementCounter
}


class TestComponent extends Component {
  render() {
    return (
      <div>
        <h1>Test AREA</h1>
        <h3>The answer is: {this.props.data}</h3>
      </div>
    )
  }
}

const mapState = (state) => ({
  data: state.test.data
})

export default connect(mapState, actions)(TestComponent);
