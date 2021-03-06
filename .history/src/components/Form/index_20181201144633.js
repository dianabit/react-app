import React from 'react';
import styled from 'styled-components';
import FormInput from './FormInput';
import Button from '../Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border: 1px solid #8080802e;
  padding: 20px 40px;
  margin: 20px 0;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-start;
`;

const FormButton = styled.div`
  margin-top: 20px;
`;

class Form extends React.Component {
constructor(props) {
  super(props);

  this.state = {
    isFormOpen = true
  }

  this.onCloseForm = this.onCloseForm.bind(this);
  this.onSubmitForm = this.onSubmitForm.bind(this);
}

onCloseForm() {
  this.setState({isFormOpen: false})
}

onSubmitForm() {

}

  render() {
    const {onCloseForm, onSubmitForm} = this.props;
    return (
      <Wrapper>
        <i class="fa fa-times" onClick={onCloseForm} />
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
          <FormButton>
            <Button type="submit" text="SUBMIT" onClick={onSubmitForm} />
          </FormButton>
        </FormWrapper>
      </Wrapper>
    );
  }
}

export default Form;
