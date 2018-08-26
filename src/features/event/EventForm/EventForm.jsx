import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';

class EventForm extends Component {

onFormSubit = (event) => {
  event.preventDefault();
  console.log(this.refs.title.value);
}

  render() {
    const { handleCancel } = this.props;
    return (
  <Segment>
  <Form onSubmit={this.onFormSubit}>
    <Form.Field>
      <label>Event Title</label>
      <input ref='title' placeholder="Event Title"/>
    </Form.Field>
    <Form.Field>
      <label>Event Date</label>
      <input type="date" placeholder="Event Date"/>
    </Form.Field>
    <Form.Field>
      <label>City</label>
      <input placeholder="City event is taking place"/>
    </Form.Field>
    <Form.Field>
      <label>Venue</label>
      <input placeholder="Enter the Venue of the event"/>
    </Form.Field>
    <Form.Field>
      <label>Hosted By</label>
      <input placeholder="Enter the name of person hosting"/>
    </Form.Field>
    <Button positive="positive" type="submit">
      Submit
    </Button>
    <Button onClick={handleCancel} type="button">Cancel</Button>
  </Form>
</Segment>

    )
  }
}

export default EventForm;
