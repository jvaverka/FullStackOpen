import React from 'react'
import Person from './Person'

const Content = ({ persons, deletePerson }) => 
    <ul>
        {persons.map((person, i) =>
            <Person 
                key={i} 
                person={person} 
                deletePerson={() => deletePerson(person)} 
            />
        )}
    </ul>

export default Content