import React from 'react';
import styled from 'styled-components';

const Element = styled.button`
color: ${props => props.color || '#01273c'};
` 

function Button(props) {
    const { type, onClick, text, color } = props;
    return (
        <button
            type={type} 
            onClick={onClick}
            color={color}
        >
            {text}
        </button>
    )
}

export default Button;