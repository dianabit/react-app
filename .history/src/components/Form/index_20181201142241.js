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
          onChange={onChange}
          onBlur={onBlur}
        />
        <FormInput
          name="password"
          placeholder="Password"
          icon="unlock"
          onChange={onChange}
          onBlur={onBlur}
        />
      </FormWrapper>
    );
  }
}

export default Form;
