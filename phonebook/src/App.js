import React, { useState, useEffect } from 'react'
import Content from './components/Content'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

import axios from 'axios'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  // set our hook
  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }
  // execute effect 
  // 2nd arg, [] means only after first render
  useEffect(hook, [])
  console.log('render', persons.length, 'persons')

  const handleNewFilter = (event) => {
    setNewFilter(event.target.value)
  }

  const filterPerson = (person) => {
    if (person.name.toLowerCase().includes(newFilter.toLowerCase()) ||
        person.number.toLowerCase().includes(newFilter.toLowerCase())) {
          return true
    }
    return false
  }

  const personsToShow = newFilter
    ? persons.filter( p => filterPerson(p) )
    : persons

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
        name: newName,
        number: newNumber
    }

    if (!persons.find(person => person.name === newName) &&
        !persons.find(person => person.number === newNumber)) {
          setPersons(persons.concat(personObject))
    } else {
      alert(`${newName} or ${newNumber} is already in phonebook`)
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNewName = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleNewFilter={handleNewFilter} />
      <h2>add a new</h2>
      <PersonForm onSubmit={addPerson} newName={newName} handleNewName={handleNewName} newNumber={newNumber} handleNewNumber={handleNewNumber} />
      <h2>Numbers</h2>
      <Content persons={personsToShow} />
    </div>
  )
}

export default App;
