import React from 'react';
import { Form, Label } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';


const DateInput = ({input:{value, onChange, onBlur, ...restInput}, input, width, placeholder, meta: {touched,error}, ...rest}) => {
  if(value) {
    value = moment(value, 'X')
  }
  return (
    <Form.Field error={touched && !!error} width={width}>
      <DatePicker
        {...rest}
        placeholderText={placeholder}
        selected={input.value? moment(input.value) : null}
        onChange={input.onChange}
        onBlur={() => onBlur()}
        {...restInput}
      />
      {touched && error && <Label basic color='red'>{error}</Label>}
    </Form.Field>
  )
}

export default DateInput;
