import React from 'react';
import FormInput from './FormInput';
import Button from '../Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const FormWrapper = styled.div`
  display: flex;
  align-self: flex-start;
`;

class Form extends React.Component {
  render() {
    return (
      <Wrapper>
        <i class="fa fa-times" />
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
          <Button type="submit" text="SUBMIT" onClick={this.onClick} />
        </FormWrapper>
      </Wrapper>
    );
  }
}

export default Form;
