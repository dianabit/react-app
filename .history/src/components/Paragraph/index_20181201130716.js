import React from 'react';
import styled from 'styled-components';

const Element = styled.p`
    color: ${props => props.color || '#000'};
    font-style: ${props => props.fontStyle || 'normal'};
    font-size: ${props => props.isSmall ? '12px' : '16px'};
` 

function Paragraph(props) {
    const { fontStyle, color, isLarge, text } = props;
    return (
        <Element
            fontStyle={fontStyle}
            color={color}
            isLarge={isLarge}
        >
            {text}
        </Element>
    )
}

export default Paragraph;