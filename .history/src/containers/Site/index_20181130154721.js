import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Heading = styled.h1`
    color: red;
`;


export class Site extends React.PureComponent {
    constructor(props) {
        super(props);

        this.enterApp = this.enterApp.bind(this);
    }

    enterApp() {
        alert('congrats');
    }

  render() {

    return (
        <MainContainer>            
            <Heading>Well, hello world!</Heading>
            <p>Enter application</p>
            <button type="submit" onClick={this.enterApp}>GO IN</button>
        </MainContainer>
        )
    }       
}

export default Site;
