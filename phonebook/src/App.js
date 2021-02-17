import React, { useState, useEffect } from 'react'
import Content from './components/Content'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [message, setMessage] = useState('')

  const Notification = ({ successMessage }) => {
    if (message === null) {
      return null
    }
    const notifyStyle = {
      color: 'green',
      background: 'lightgrey',
      fontSize: 20,
      borderStyle: 'solid',
      borderRadius: 5,
      padding: 10
    }

    return (
      <div style={notifyStyle}>
        {successMessage}
      </div>
    )
  }

  // set our hook
  const hook = () => {
    personService
      .getAll()
      .then(allPersons => { setPersons(allPersons) })
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
    ? persons.filter(p => filterPerson(p))
    : persons

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber
    }

    // try to find if the person already exists in phonebook
    const existingPerson = persons.find(person => person.name === newName)

    if (!existingPerson) {
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setMessage(`Added '${returnedPerson.name}'`)
          setTimeout(() => {
            setMessage(null)
          }, 5000);
        })
    } else if (existingPerson && existingPerson.number !== newNumber) {
      // ask user if they wish to update the number
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        personService
          .update(existingPerson.id, personObject)
          .then(returnedPerson => {
            setPersons(persons.map(p => p.id !== existingPerson.id ? p : returnedPerson))
            setMessage(`Updated '${returnedPerson.name}'`)
            setTimeout(() => {
              setMessage(null)
            }, 5000);
          })
      }
    } else {
      alert(`${newName} ${newNumber} is already in phonebook`)
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
      .then(() => {
        setPersons(persons.filter(p => p.id !== person.id))
        setMessage(`removed '${person.name}'`)
        setTimeout(() => {
          setMessage(null)
        }, 5000);
      })
      .catch(error => {
        console.log(error)
        window.confirm(
          `the person '${person.name}' was already deleted from server`
        )
        setPersons(persons.filter(p => p.id !== person.id))
      })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification successMessage={message} />
      <Filter
        newFilter={newFilter}
        handleNewFilter={handleNewFilter}
      />
      <h2>add a new</h2>
      <PersonForm
        onSubmit={addPerson}
        newName={newName}
        handleNewName={handleNewName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
      />
      <h2>Numbers</h2>
      <Content
        persons={personsToShow}
        deletePerson={deletePerson}
      />
    </div>
  )
}

export default App;
