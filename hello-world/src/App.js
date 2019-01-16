import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      { name: 'Jackie', age: 12 },
      { name: 'Jane', age: 33 },
      { name: 'Jethro', age: 31 }
    ],
    showPeople: false
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

  togglePeopleHandler = () => {
    this.setState({showPeople: !this.state.showPeople});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid green',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, react world!</h1>
        <p>This is a paragraph</p>
        {
          this.state.showPeople === true ?
            <div>
              <Person name={this.state.people[0].name} age={this.state.people[0].age} change={this.nameChangeHandler} />
              <Person name={this.state.people[1].name} age={this.state.people[1].age} click={() => this.switchNameHandler("Harp")} />
              <Person name={this.state.people[2].name} age={this.state.people[2].age} click={this.switchNameHandler.bind(this, "Dillion")} />
            </div> : null
        }
        <button onClick={this.switchNameHandler.bind(this, "Jillian")} style={style}>Switch name</button>
        <button onClick={this.togglePeopleHandler} style={style}>Toggle People</button>
      </div>
    );
  }
}

export default App;
