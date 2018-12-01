import React from 'react';
import FormInput from './FormInput';


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
      </FormWrapper>
    );
  }
}

export default Form;
