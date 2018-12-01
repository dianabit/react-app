import React from 'react';
import styled from 'styled-components';
import Auth from '../Auth/index';

const MainContainer = styled.div`
    font-family: Helvetica;
`;

export class Site extends React.PureComponent {
    constructor(props) {
        super(props);
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
