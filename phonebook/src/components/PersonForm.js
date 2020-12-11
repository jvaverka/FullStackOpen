import React, { useState } from 'react'
import Persons, {persons, setPersons} from './Persons'

const PersonForm = () => {
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')

    const isNewPerson = (personObject) => {
        return !persons.find(p => p.name === newName) ||
            !persons.find(p => p.number === newNumber)
    }

    const handleNewPerson = (event) => {
        event.preventDefault()
        const personObject = {
            name: newName,
            number: newNumber
        }

        if (isNewPerson(personObject)) {
            setPerson(persons.concat(personObject))
        } else {
            alert(`${newName} - ${newNumber} is already in phonebook.`)
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
        <form onSubmit={handleNewPerson} >
            <div>
                name: <input value={newName} onChange={handleNewName} />
            </div>
            <div>
                number: <input value={newNumber} onChange={handleNewNumber} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm