import React from 'react';

function Child(props) {
    return (
        <div>
            <h1>Well, hello world!</h1>
            <p>Hello from the other siiiideeee...</p>
        </div>
    );
}

class Parent extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <Child />
        )
    }
}