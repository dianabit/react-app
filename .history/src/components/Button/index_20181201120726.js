import React from 'react';

function Button(props) {
    const { type, onClick, text } = props;
    return (
        <button type={type} onClick={onClick}>{text}</button>
    )
}

export default Button;