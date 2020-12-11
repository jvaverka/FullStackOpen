import React, { useState } from 'react'
import ReactDOM from 'react-dom'
/**
 * @description main app
 * Has 2 states: 
 *    1 for the anecdote of the day & 
 *    1 for the votes for each anecdote
 * Has 2 Buttons: 
 *    1 to upvote an anecdote & 
 *    1 to get new anecdote
 * Also displays "anecdote of the day" & "highest voted anecdote"
 * @param {*} props 
 */
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
  // find anecdote with highest vote count
  const getMostVotes = () => {
    // create a copy of points
    const copy = points
    // find the maximum point value
    const maxValue = Object.values(copy).reduce((max, p) => p > max ? p : max, copy[0])
    return (
      // get index of maximum value found
      Object.values(copy).indexOf(maxValue)
    )
  }
  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <Button handleClick={upVote} text='vote' />
      <Button handleClick={getAnecdote} text='next anecdote' />
      <h1>Anecdote with most votes</h1>
      <p>{props.anecdotes[getMostVotes()]}</p>
    </>
  )
}
/**
 * @description button with text as label and a callback function
 * @param { CallableFunction } handler
 * @param { String } text
 */
const Button = (props) => {
  return (
    <button onClick={props.handleClick} >
      {props.text}
    </button>
  )
}
/**
 * @description list of anecdotes our app works on
 */
const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
/**
 * render main app
 */
ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)