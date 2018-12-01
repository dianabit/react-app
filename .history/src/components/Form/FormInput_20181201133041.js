import React from 'react';
import styled from 'styled-components';
import Paragraph from '../Paragraph';

const FieldWrapper = styled.div`
  position: relative;
`;

const Icon = styled.i`
  position: absolute;
  top: 4px;
  font-size: 30px;
  color: grey;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`;

const Input = styled.input`
    
`;

function FormInput(props) {
    const {onChange, onBlur} = props;
  return (
    <FieldWrapper>
      <Icon className="fa fa-facebook" />
      <Field className="mb-4">
        <Paragraph text="Facebook"/>
        <Input
          name="facebook"
          value="fb"
          onChange={onChange}
          onBlur={onBlur}
        />
      </Field>
    </FieldWrapper>
  );
}

export default FormInput;
