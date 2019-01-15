import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, react world!</h1>
        <p>This is a paragraph</p>
        <Person name="Jackie" age="12"></Person>
        <Person name="Jane" age="33">My hobbies are blah blah.</Person>
        <Person name="Jethro" age="31"></Person>
      </div>
    );
  }
}

export default App;
