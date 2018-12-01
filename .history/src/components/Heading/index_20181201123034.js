import React from 'react';
import styled from 'styled-components';

const LargeHeading = styled.h1`
    color: ${props => props.color || '#000'};
    font-style: ${props => props.fontStyle || 'normal'};
`
const RegularHeading = styled.h1`
    color: ${props => props.color || '#000'};
    font-style: ${props => props.fontStyle || 'normal'};
`
const SmallHeading = styled.h1`
    color: ${props => props.color || '#000'};
    font-style: ${props => props.fontStyle || 'normal'};
`

function Heading(props) {
    const { text, isLarge, isRegular, isSmall, color, fontStyle } = props;
    return (
        <div>
        {isLarge && (
            <LargeHeading
                color={color} 
                fontStyle={fontStyle}
            >
                {text}
            </LargeHeading>
        )}
        {isRegular && (
            <RegularHeading
                color={color} 
                fontStyle={fontStyle}
            >
                {text}
            </RegularHeading>
        )}
        {isSmall && (
            <SmallHeading
            color={color} 
            fontStyle={fontStyle}
            >
                {text}
            </SmallHeading>        
        )}
        </div>
    )
}

export default Heading;