import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { incrementCounter, decrementCounter } from './testActions'


const actions = {
  incrementCounter,
  decrementCounter
}


class TestComponent extends Component {
  render() {
    const { incrementCounter, decrementCounter, data } = this.props;
    return (
      <div>
        <h1>Test AREA</h1>
        <h3>The answer is: {data}</h3>
        <Button onClick={incrementCounter} color='teal' content='Higher' />
        <Button onClick={decrementCounter} color='orange' content='Lower' />
      </div>
    )
  }
}

const mapState = (state) => ({
  data: state.test.data
})

export default connect(mapState, actions)(TestComponent);
