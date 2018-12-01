import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
    color: red;
`


export class Site extends React.PureComponent {

  render() {

    return (
        <React.Fragment>            
            <Heading>Well, hello world!</Heading>
            <p>Hello from the other siiiideeee...</p>
        </React.Fragment>
        )
    }       
}

export default Site;
