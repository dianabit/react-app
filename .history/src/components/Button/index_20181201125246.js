import React from 'react';
import styled from 'styled-components';

const Element = styled.button`
    background-color: ${props => props.bgColor || '#85CFB4'};
    width: 7em;
    height: 3em;
    border: none;
    border-radius: 8px;

    :focus {
        outline: none;
    }

    :hover {
        backgound-color: #a3e6cd;
        cursor: pointer;
    }
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