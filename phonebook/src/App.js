import React from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

const App = () => {
  return (
    <div>

      <h2>Phonebook</h2>

      <Filter />

      <h3>add a new</h3>

      <PersonForm />

      <h3>Numbers</h3>

      <Persons />

    </div>
  )
}

export default App;
