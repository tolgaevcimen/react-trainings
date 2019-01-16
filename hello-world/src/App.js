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

    let people = null;
    if(this.state.showPeople) {
      people = (
        <div>
          {this.state.people.map(p=>{
            return <Person name={p.name} age={p.age}  change={this.nameChangeHandler}/>
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, react world!</h1>
        <p>This is a paragraph</p>
        {people}
        <button onClick={this.switchNameHandler.bind(this, "Jillian")} style={style}>Switch name</button>
        <button onClick={this.togglePeopleHandler} style={style}>Toggle People</button>
      </div>
    );
  }
}

export default App;
