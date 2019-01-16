import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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
        <Persons 
        change={this.nameChangeHandler} 
        people={this.state.people} />
      )

      colorClass = classes.Red;
    }

    return (
        <div className={classes.App}>
          <Cockpit
            clicked={this.togglePeopleHandler}
            colorClass={colorClass} />
          {people}
        </div>
    );
  }
}

export default App;