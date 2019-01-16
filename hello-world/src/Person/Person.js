import React from 'react';
import classes from './Person.css';

const person = (props) => {
    return (
        <div onClick={props.click} className={classes.Person}>
            I'm {props.name}, I'm {props.age} years old.
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
    );
}

export default person;