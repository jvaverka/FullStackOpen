import React, { useState, useEffect } from 'react'
import Content from './components/Content'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  // set our hook
  const hook = () => {
    personService
      .getAll()
      .then(allPersons => {setPersons(allPersons)})
  }
  // execute effect 
  // 2nd arg, [] means only after first render
  useEffect(hook, [])

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
          personService
            .create(personObject)
            .then(returnedPerson => {
              setPersons(persons.concat(returnedPerson))
            })
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

  const deletePerson = (person) => {
    personService
      .remove(person)
      .then(remainingPersons => {
        setPersons(persons.filter(p => p.id !== person.id))
      })
      .catch(error => {
        window.confirm(
          `the person '${person.name}' was already deleted from server`
        )
        setPersons(persons.filter(p => p.id !== person.id))
      })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleNewFilter={handleNewFilter} />
      <h2>add a new</h2>
      <PersonForm onSubmit={addPerson} newName={newName} handleNewName={handleNewName} newNumber={newNumber} handleNewNumber={handleNewNumber} />
      <h2>Numbers</h2>
      <Content persons={personsToShow} deletePerson={deletePerson} />
    </div>
  )
}

export default App;
