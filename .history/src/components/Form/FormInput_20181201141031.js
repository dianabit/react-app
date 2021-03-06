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

const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  margin-top: 30px;
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
      <i class="fa fa-user"/>
      <Field>
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
