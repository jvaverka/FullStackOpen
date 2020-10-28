import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

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
    ? persons.filter( p => filterPerson(p))
    : persons

  const addPerson = (event) => {
    event.preventDefault()
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
      <form>
        <div>find <input value={newFilter} onChange={handleNewFilter} /></div>
      </form>
      <h2>add a new</h2>
      <form onSubmit={addPerson} >
        <div>name: <input value={newName} onChange={handleNewName} /></div>
        <div>number: <input value={newNumber} onChange={handleNewNumber} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {personsToShow.map((person) => 
          <div key={person.name}>{person.name} {person.number}</div>
        )}
      </div>
    </div>
  )
}

export default App;
