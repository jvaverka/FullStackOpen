import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  // set initial state to zero
  const [selected, setSelected] = useState(0)
  // set initial state of all points to zero
  let initState = Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0);
  const [ points, setPoints ] = useState(initState)
  // anecdote handler
  const getAnecdote = () => {
    // generate random number between zero and max length of anecdotes - 1
    let n = Math.floor(Math.random() * anecdotes.length - 1) + 1
    // change state to newly generated random number
    setSelected(n)
  }
  // vote handler
  const upVote = () => {
    // create copy of existing state
    const copy = {...points}
    // add vote
    copy[selected] += 1
    // update state
    setPoints(copy)
  }
  return (
    <>
      <p>{props.anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <Button handleClick={upVote} text='vote' />
      <Button handleClick={getAnecdote} text='next anecdote' />
    </>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick} >
      {props.text}
    </button>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)