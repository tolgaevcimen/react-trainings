import React from 'react';

const cockpit = (props) => {
    return (
        <div>
            <h1>Hi, react world!</h1>
            <p>This is a paragraph</p>
            <button onClick={props.clicked} className={props.colorClass}>Toggle People</button>
        </div>
    );
}

export default cockpit;