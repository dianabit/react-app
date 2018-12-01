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
            <p>Enter application</p>
            <button type="submit">GO IN</button>
        </React.Fragment>
        )
    }       
}

export default Site;
