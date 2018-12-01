import React from 'react';
import styled from 'styled-components';

const Element = styled.h1`
    color: ${props => props.color || '#000'};
    font-style: ${props => props.style || 'normal'};
`

function Heading(props) {
    const { text, isLarge, isRegular, isSmall, color, style } = props;
    return (
        <div>
        {isLarge && (
            <Element color={color} style={style}>{text}</Element>
        )}
        {isRegular && (
            <Element>{text}</Element>
        )}
        {isSmall && (
            <Element>{text}</Element>
        )}
        </div>
    )
}

export default Heading;