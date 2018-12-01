import React from 'react';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';

class Auth extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            
        }
        
        this.enterApp = this.enterApp.bind(this);
    }

    enterApp() {
        alert('congrats');
    }

    render() {
        return(
            <div>
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
            </div>
        )
    }
}

export default Auth;