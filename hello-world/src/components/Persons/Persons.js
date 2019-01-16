import React from 'react';
import Person from './Person/Person'

const Persons = (props) => props.people.map((p, index) => {
    return <Person 
      key={p.id}
      name={p.name} 
      age={p.age} 
      // click={() => this.deletePersonHandler(index)}
      change={(event) => props.change(event, p.id)}  />
  })

export default Persons;