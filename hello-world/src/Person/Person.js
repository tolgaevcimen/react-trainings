import React from 'react';

const person = (props) => {
    return (
        <div onClick={props.click}>
            I'm {props.name}, I'm {props.age} years old.
            <p>{props.children}</p>
        </div>
    );
}

export default person;