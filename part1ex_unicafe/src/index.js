import React, { useState } from 'react'
import ReactDOM from 'react-dom'
/**
 * @description display text in header format
 */
const Head = ({ text }) => <h1>{text}</h1>
/**
 * @description create button with label & callback
 */
const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>
/**
 * @description show all feedback statistics
 */
const Statistics = ({ good, neutral, bad }) => {
  let total = good + neutral + bad
  let avg = (good - bad) / total
  let positive = good / total * 100
  // display if no feedback has been provided
  if (total === 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    )
  }
  // display when feedback is available
  return (
    <table>
      <tbody>
        <Statistic text='good' value={good} />
        <Statistic text='neutral' value={neutral} />
        <Statistic text='bad' value={bad} />
        <Statistic text='all' value={total} />
        <Statistic text='average' value={avg} />
        <Statistic text='positive' value={positive} unit='%' />
      </tbody>
    </table>
  ) 
}
/**
 * @description for individual statistic
 */
const Statistic = ({ text, value, unit='' }) => (
  <tr>
    <td>
      {text}
    </td>
    <td style={{backgroundColor: 'lightgray'}}>
      {value}{unit}
    </td>
  </tr>
)
/**
 * @description main app
 */
const App = () => {
  // save clicks of each button to own state
  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)
  // handlers
  const incrementGood = () => setGood(good + 1)
  const incrementNeutral = () => setNeutral(neutral + 1)
  const incrementBad = () => setBad(bad + 1)
  return (
    <>
      <Head text='give feedback' />
      <Button handleClick={incrementGood} text='good' />
      <Button handleClick={incrementNeutral} text='neutral' />
      <Button handleClick={incrementBad} text='bad' />
      <Head text='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))