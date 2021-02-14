import React from 'react'
import Person from './Person'

const Content = ({ persons }) => 
    <ul>
        {persons.map((person, i) =>
            <Person key={i} person={person} />
        )}
    </ul>

export default Content