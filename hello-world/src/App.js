import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      { name: 'Jackie', age: 12 },
      { name: 'Jane', age: 33 },
      { name: 'Jethro', age: 31 }
    ]
  }

  switchNameHandler = (name) => {
    // console.log("clicked");
    this.setState({
      people: [
        { name: name, age: 12 },
        { name: 'Jane', age: 33 },
        { name: 'Jethro', age: 31 }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      people: [
        { name: event.target.value , age: 12 },
        { name: 'Jane', age: 33 },
        { name: 'Jethro', age: 31 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, react world!</h1>
        <p>This is a paragraph</p>
        <Person name={this.state.people[0].name} age={this.state.people[0].age} change={this.nameChangeHandler} />
        <Person name={this.state.people[1].name} age={this.state.people[1].age} click={() => this.switchNameHandler("Harp")} />
        <Person name={this.state.people[2].name} age={this.state.people[2].age} click={this.switchNameHandler.bind(this, "Dillion")} />

        <button onClick={this.switchNameHandler.bind(this, "Jillian")}>Switch name</button>
      </div>
    );
  }
}

export default App;
