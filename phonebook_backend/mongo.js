const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
    date: Date,
    name: String,
    number: String,
})
// fun fact: when defining a model with the name `Person`, 
// mongoose will automatically name the associated collection as 'people'
const Person = mongoose.model('Person', personSchema)

function connect() {
    const password = process.argv[2]
    const url =
        `mongodb+srv://fullstack:${password}@cluster0.tzhyx.mongodb.net/phonebook-app?retryWrites=true&w=majority`
    mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true})
}

function fetchPersons() {
    connect()
    // fetch all objects from database
    console.log('phonebook:')
    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(person)
        })
        mongoose.connection.close()
    })
}

function createPerson() {
    // create new person from cli inputs
    const person = new Person({
        date: new Date(),
        name: process.argv[3],
        number: process.argv[4]
    })
    return person
}

function savePerson(newPerson) {
    connect()
    // creating and saving objects
    newPerson.save().then(result => {
        console.log('added %s number %s to phonebook', result.name, result.number)
        mongoose.connection.close()
    })
}

// create and save new person in db or fetch all saved persons
if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
} else if (process.argv.length == 3) {
    fetchPersons()
} else if (process.argv.length < 4) {
    console.log('Please provide the phonebook name entry as an argument: node mongo.js <password> <name>')
    process.exit(1)
} else if (process.argv.length < 5) {
    console.log('Please provide the phonebook number entry as an argument: node mongo.js <password> <name> <number>')
    process.exit(1)
} else {
    savePerson(createPerson())
}

