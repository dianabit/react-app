import React from 'react';
import styled from 'styled-components';

const Element = styled.h1`
    color: ${props => props.color || '#000'};
    font-style: ${props => props.style || 'normal'};
`

function Heading(props) {
    const { text, isLarge, isRegular, isSmall } = props;
    return (
        <div>
        {isLarge && (
            <h1>{text}</h1>
        )}
        {isRegular && (
            <h3>{text}</h3>
        )}
        {isSmall && (
            <h5>{text}</h5>
        )}
        </div>
    )
}

export default Heading;