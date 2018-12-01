import React from 'react';
import styled from 'styled-components';
import Paragraph from '../Paragraph';

const FieldWrapper = styled.div`
  position: relative;
  display: flex;
  display: flex;
  align-items: flex-end;
  font-size: 35px;
  color: #ed186b;
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
  border: 1px solid #ed186b;
  padding: 10px;
  border-radius: 5px;
`;

function FormInput(props) {
    const {onChange, onBlur} = props;
  return (
    <FieldWrapper>
      <i class="fa fa-facebook"/>
      <Field className="mb-4">
        <Input
          name="Username"
          onChange={onChange}
          onBlur={onBlur}
          placeholder="Username"
        />
      </Field>
    </FieldWrapper>
  );
}

export default FormInput;
