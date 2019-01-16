import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';

class App extends Component {
  state = {
    people: [
      { id: '1', name: 'Jackie', age: 12 },
      { id: '2', name: 'Jane', age: 33 },
      { id: '3', name: 'Jethro', age: 31 }
    ],
    showPeople: true
  }

  deletePersonHandler = (personIndex) => {
    const people = [...this.state.people];
    people.splice(personIndex, 1);
    this.setState({people: people});
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.people.findIndex(p => {
      return p.id === id;
    })

    const updatedPerson = {
      ...this.state.people[personIndex]
    };

    updatedPerson.name = event.target.value;

    const people = [...this.state.people];
    people[personIndex] = updatedPerson;


    this.setState({
      people: people
    })
  }

  togglePeopleHandler = () => {
    this.setState({ showPeople: !this.state.showPeople });
  }

  render() {
    let people = null;
    let colorClass = '';
    if (this.state.showPeople) {
      people = (
        <div>
          {this.state.people.map((p, index) => {
            return <Person 
              key={p.id}
              name={p.name} 
              age={p.age} 
              // click={() => this.deletePersonHandler(index)}
              change={(event) => this.nameChangeHandler(event, p.id)}  />
          })}
        </div>
      )

      colorClass = classes.Red;
    }

    return (
        <div className={classes.App}>
          <h1>Hi, react world!</h1>
          <p>This is a paragraph</p>
          {people}
          <button onClick={this.togglePeopleHandler} className={colorClass}>Toggle People</button>
        </div>
    );
  }
}

export default App;