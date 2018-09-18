import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import Script from 'react-load-script';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import { incrementCounter, decrementCounter } from './testActions'



const actions = {
  incrementCounter,
  decrementCounter
}


class TestComponent extends Component {

  state = {
    address: '',
    scriptLoaded: false
  }

  handleScriptLoad = () => {
    this.setState({ scriptLoaded: true })
  }

  handleFormSubmit = (event) => {
  event.preventDefault()

  geocodeByAddress(this.state.address)
    .then(results => getLatLng(results[0]))
    .then(latLng => console.log('Success', latLng))
    .catch(error => console.error('Error', error))
}

onChange = (address) => this.setState({address});

  render() {
      console.log(this.props)
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }
    const { incrementCounter, decrementCounter, data } = this.props;
    return (
      <div>
        <Script
          url='API_KEY'
          onLoad={this.handleScriptLoad}
      />

        <h1>Test AREA</h1>
        <h3>The answer is: {data}</h3>
        <Button onClick={incrementCounter} color='teal' content='Higher' />
        <Button onClick={decrementCounter} color='orange' content='Lower' />
        <br/>
        <br/>
        <form onSubmit={this.handleFormSubmit}>
          {this.state.scriptLoaded && <PlacesAutocomplete inputProps={inputProps} />}
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

const mapState = (state) => ({
  data: state.test.data
})

export default connect(mapState, actions)(TestComponent);
