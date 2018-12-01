import React from 'react';
import styled from 'styled-components';

const Element = styled.button`
    background-color: ${props => props.bgColor || '#FBD1A7'};
` 

function Button(props) {
    const { type, onClick, text, bgColor } = props;
    return (
        <Element
            type={type} 
            onClick={onClick}
            bgColor={bgColor}
        >
            {text}
        </Element>
    )
}

export default Button;