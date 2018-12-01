import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import FormInput from '../../components/Form/FormInput';

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
    }

    enterApp() {
        this.setState({isFormOpen: true});
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
                    fontStyle="italic"
                />
                <Button 
                    type="submit" 
                    onClick={this.enterApp} 
                    text="GO IN"
                 />
                 {isFormOpen && (
                     <FormInput />
                 )}
            </Container>
        )
    }
}

export default Auth;