import React, { useState } from 'react'
import Filter from './Filter'

const Persons = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])

    const filterPerson = (person) => {
        return person.name.toLowerCase().includes(Filter.newFilter.toLowerCase()) ||
            person.number.toLowerCase().includes(Filter.newFilter.toLowerCase())
    }

    const personsToShow = Filter.newFilter
        ? persons.filter( p => filterPerson(p))
        : persons

    return (
        <div>
            {personsToShow.map((person) => 
                <div key={person.name}>
                    {person.name} {person.number}
                </div>
            )}
        </div>
    )
}

export default Persons