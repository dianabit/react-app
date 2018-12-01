import React from 'react';
import FormInput from './FormInput';
import Button from '../Button';


class Form extends React.Component {
  render() {
    const {onChange, onBlur} = props;
    return (
      <FormWrapper>
        <FormInput
          name="username"
          placeholder="Username"
          icon="user"
        />
        <FormInput
          name="password"
          placeholder="Password"
          icon="unlock"
        />
        <Button type="submit" text="SUBMIT" />
      </FormWrapper>
    );
  }
}

export default Form;
