import React from 'react';
import styled from 'styled-components';
import Paragraph from '../Paragraph';
import FormInput from './FormInput';


class Form extends React.Component {
  render() {
    const {onChange, onBlur} = props;
    return (
      <FormWrapper>
        <FormInput

        />
        <FormInput

        />
      </FormWrapper>
    );
  }
}

export default Form;
