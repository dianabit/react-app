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
            <Auth />
        </MainContainer>
        )
    }       
}

export default Site;
