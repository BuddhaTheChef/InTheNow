import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Segment, Form, Button, Grid, Header } from 'semantic-ui-react';
import cuid from 'cuid';
import { createEvent, updateEvent } from '../eventActions';
import TextInput from '../../../app/common/form/TextInput';

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {
    title: '',
    date: '',
    city: '',
    venue: '',
    hostedBy: ''
  }
  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }

  return {
    event
  }
}

const actions = {
  createEvent,
  updateEvent
}

class EventForm extends Component {

onFormSubit = (event) => {
  event.preventDefault();
  if(this.state.event.id) {
    this.props.updateEvent(this.state.event);
    this.props.history.goBack();
  } else {
    const newEvent = {
      ...this.state.event,
      id: cuid(),
      hostPhotoURL: '/assets/user.png'
    }
    this.props.createEvent(newEvent)
    this.props.history.push('/events')
  }
}

render() {
  return (<Grid >
    <Grid.Column width={10}>
      <Segment>
        <Header sub="sub" color='teal' content='Event Details'/>
        <Form onSubmit={this.onFormSubit}>
          <Field name='title' type='text' component={TextInput} placeholder='Give Event A Name'/>
          <Field name='Category' type='text' component={TextInput} placeholder='What is your event about?'/>
          <Field name='Description' type='text' component={TextInput} placeholder='Tell us about the event?'/>
        <Header sub="sub" color='teal' content='Event Location Details'/>
          <Field name='City' type='text' component={TextInput} placeholder='Event City'/>
          <Field name='Venue' type='text' component={TextInput} placeholder='Event Venue'/>
          <Field name='Date' type='text' component={TextInput} placeholder='Event Date'/>
          <Button positive="positive" type="submit">
            Submit
          </Button>
          <Button onClick={this.props.history.goBack} type="button">Cancel</Button>
        </Form>
      </Segment>
    </Grid.Column>
  </Grid>)
}
}

export default connect(mapState, actions)(reduxForm({form: 'eventForm'})(EventForm));
