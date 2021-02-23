import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import noteService from './services/notes'

const Footer = () => { 
    // example of inline styles
    const footerStyle = { 
        color: 'green', 
        fontStyle: 'italic', 
        fontSize: 16 
    }  
    return (
        <div style={footerStyle}>
            <br />
            <em>
                Note app, 
                Department of Computer Science, 
                University of Helsinki 2020
            </em>
        </div>
    ) 
}

const App = () => {

    const [ notes, setNotes] = useState([])
    const [ newNote, setNewNote] = useState('')
    const [ showAll, setShowAll] = useState(true)
    const [ successMessage, setSuccessMessage ] = useState('')
    const [ failureMessage, setFailureMessage ] = useState('')

    const Notification = ({ success, failure }) => {
        if (success === null && failure === null) {
            return null
        }

        if (success) {
            const successStyle = {
                color: 'green',
                background: 'lightgrey',
                fontSize: 20,
                borderStyle: 'solid',
                borderRadius: 5,
                padding: 10
            }

            return (
                <div style={successStyle}>
                    {success}
                </div>
            )
        }

        if (failure) {
            const failureStyle = {
                color: 'red',
                background: 'lightgrey',
                fontSize: 20,
                borderStyle: 'solid',
                borderRadius: 5,
                padding: 10
            }

            return (
                <div style={failureStyle}>
                    {failure}
                </div>
            )
        }

        return (
            <div></div>
        )
    }

    useEffect(() => {
        noteService
            .getAll()
            .then(initialNotes => {setNotes(initialNotes)})
    }, [])
    console.log('render', notes.length, 'notes')

    const addNote = (event) => {
        event.preventDefault()
        const noteObject = {
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() < 0.5,
            // id: notes.length + 1,
        }
        
        if (!noteObject.content) {
            setFailureMessage('Insert content to add note')
            setTimeout(() => {
                setFailureMessage(null)
            }, 5000)
        } else {
            noteService
                .create(noteObject)
                .then(returnedNote => {
                    setNotes(notes.concat(returnedNote))
                    setNewNote('')
                    setSuccessMessage(`Added note '${returnedNote.content}'`)
                    setTimeout(() => {
                        setSuccessMessage(null)
                    }, 5000);
                })
        }

    }

    const handleNoteChange = (event) => {
        console.log(event.target.value);
        setNewNote(event.target.value)
    }

    const notesToShow = showAll
        ? notes
        : notes.filter( note => note.important )
    
    const toggleImportanceOf = id => {
        const note = notes.find(n => n.id === id)
        const changedNote = { ...note, important: !note.important }

        noteService
            .update(id, changedNote)
            .then(returnedNote => {
                setNotes(notes.map(note => note.id !== id ? note : returnedNote))
                console.log('returnedNote->', returnedNote)
                setSuccessMessage(`Changed importance of note '${returnedNote.content}'`)
                setTimeout(() => {
                    setSuccessMessage(null)
                }, 5000);
            })
            .catch(error => {
                setFailureMessage(
                    `Note '${note.content}' was already removed from server`
                )        
                setTimeout(() => { 
                    setFailureMessage(null) 
                }, 5000)
                setNotes(notes.filter(n => n.id !== id))
            })
    }

    return (
        <div>
            <h1>Notes</h1>
            <Notification success={successMessage} failure={failureMessage} />
            <div>
                <button onClick={() => setShowAll(!showAll)}>
                    show { showAll ? 'important' : 'all' }
                </button>
            </div>
            <ul>
                {notesToShow.map(note =>
                    <Note 
                        key={note.id} 
                        note={note} 
                        toggleImportance={() => toggleImportanceOf(note.id)}
                    />
                )}
            </ul>
            <form onSubmit={addNote}>
                <input 
                    value={newNote}
                    onChange={handleNoteChange}
                />
                <button type='submit'>save</button>
            </form>
            <Footer />
        </div>
    )
}

export default App