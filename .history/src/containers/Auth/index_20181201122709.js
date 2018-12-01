import React from 'react';
import Button from '../../components/Button';
import Heading from '../../components/Heading';

class Auth extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            
        }
    }

    render() {
        return(
            <div>
                <Heading 
                    text="WELL, HELLO WORLD"
                    color="red"
                    fontStyle="bold"
                    isLarge
                />
                <p>Enter application</p>
                <Button 
                    type="submit" 
                    onClick={this.enterApp} 
                    text="GO IN"
                 />
            </div>
        )
    }
}

export default Auth;