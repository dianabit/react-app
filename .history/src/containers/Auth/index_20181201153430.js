import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import { withRouter } from 'react-router-dom';
import Form from '../../components/Form';
import { compose } from 'redux';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

class Auth extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            isFormOpen: false
        }
        
        this.enterApp = this.enterApp.bind(this);
        this.onCloseForm = this.onCloseForm.bind(this);
    }

    enterApp() {
        this.setState({isFormOpen: true});
    }

    onCloseForm() {
        this.setState({isFormOpen: false});
    }

    onSubmitForm() {
        history.push('/welcome')
    }

    render() {
    const { isFormOpen } = this.state;
    return(
        <Container>
            <Heading 
                text="WELL, HELLO WORLD"
                fontStyle="bold"
                isLarge
            />
            <Paragraph
                text="Lorem ipsum lorem. Lorem ispum lorem hagmdn rmlorem orem ipsum ipsum lore. Jihh. kfjeurthjildndvama."
            />
            <Button 
                type="submit" 
                onClick={this.enterApp} 
                text="GO IN"
                />
                {isFormOpen && (
                    <Form 
                        onCloseForm={this.onCloseForm}
                        onSubmitForm={this.onSubmitForm}
                    />
                )}
        </Container>
    )
}
}

export default compose(
    withRouter
    )(Auth);