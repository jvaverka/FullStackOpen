const express = require('express')
const app = express()

app.use(express.json())

const persons = [
    {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
    },
    {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
    },
    {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
    },
    {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
    },
    {
        "name": "Madison Tankersley",
        "number": "770-539-4348",
        "id": 5
    },
    {
        "name": "Jacob Vaverka",
        "number": "770-530-8275",
        "id": 6
    },
    {
        "name": "Henry David Thoreau",
        "number": "unlisted",
        "id": 7
    }
]

app.get('/info', (req, res) => {
    const currentDate = new Date().toString()
    // const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
    res.send(
        `
        <div>
            <p>Phonebook has info for ${persons.length} people</p>
        </div>
        <div>
            <p>${currentDate}</p>
        </div>
        `
    )
})

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})