import React from 'react';
import Button from '../../components/Button';

class Auth extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            
        }
    }

    render() {
        return(
            <div>
                <Heading>Well, hello world!</Heading>
                <p>Enter application</p>
                <Button type="submit" onClick={this.enterApp} text="GO IN" />
            </div>
        )
    }
}

export default Auth;