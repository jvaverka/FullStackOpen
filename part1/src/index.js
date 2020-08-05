import React, { useState } from 'react';
import ReactDOM from 'react-dom';
/**
 * @description Hello component returns name, age, and
 * birth year derived from given age and current year
 * @param { String } name of person
 * @param { Number } age of person
 */
const Hello = ({ name, age }) => {
  // function to calculate year of birth  
  const bornYear = () => new Date().getFullYear() - age
  return (
    <div>
      <p>
        Hello, {name}. You are {age} years old.
        So you were probably born in {bornYear()}
      </p>
    </div>
  )
}
/**
 * @description Footer provides link to GitHub page for project
 */
const Footer = () => (
  <div>
    Greeting app created by <a href="https://github.com/jrud8/full-stack-open">Jrud + jakeV.</a>
  </div>
)
/**
 * @description Display shows value of clicks variable - aka component state
 * @param { Object } clicks is an object describing the composite state of App 
 */
const Display = ({ clicks: { left, right }, all }) => {
  return (
    <div>
      <p>
        Left: {left}, Right: {right}
      </p>
      <p>
        All: {all.join(' ')}
      </p>
    </div>
  )
}
/**
 * @description Button is a reusable button component
 * @param { Function } handleClick is the callback function executed onClick
 * @param { String } text serves as the lable to button component 
 */
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
/**
 * @description App is main function and gets run automatically.  App also
 * contains all other sub-components defined above.  Therefore, on any state
 * change (aka button click) App is re-rendered along with its sub-components.
 */
const App = () => {
  // complex - or composite - state variables
  const [ clicks, setClicks ] = useState({ left: 0, right: 0 })
  const [ allClicks, setAll ] = useState([])
  // left handlers
  const increaseLeftByOne = () => {
    setAll(allClicks.concat('L'))
    setClicks({...clicks, left: clicks.left + 1})
  }
  const decreaseLeftByOne = () => {
    setAll(allClicks.concat('L'))
    setClicks({...clicks, left: clicks.left - 1})
  }
  const setLeftToZero = () => {
    setAll(allClicks.concat('L'))
    setClicks({...clicks, left: 0})
  }
  // right handlers
  const increaseRightByOne = () => {
    setAll(allClicks.concat('R'))
    setClicks({...clicks, right: clicks.right + 1})
  }
  const decreaseRightByOne = () => {
    setAll(allClicks.concat('R'))
    setClicks({...clicks, right: clicks.right - 1})
  }
  const setRightToZero = () => {
    setAll(allClicks.concat('R'))
    setClicks({...clicks, right: 0})
  }
  // example - passing by variables
  const name = 'Harry'
  const thisYear = new Date().getFullYear()
  const age = thisYear - 1980
  return (
    <>
      <h1>Greetings, puiny human</h1>
      <Hello name={name} age={age}/>
      <Hello name='Jake' age={thisYear-1991}/>
      <Hello name='Josh' age={thisYear-1990}/>
      <br />
      <br />
      <Footer />
      <br />
      <Display clicks={clicks} all={allClicks}/>
      <Button handleClick={increaseLeftByOne} text='left++' />
      <Button handleClick={increaseRightByOne} text='right++' />
      <br />
      <Button handleClick={setLeftToZero} text='0 left' />
      <Button handleClick={setRightToZero} text='0 right' />
      <br />
      <Button handleClick={decreaseLeftByOne} text='left--' />
      <Button handleClick={decreaseRightByOne} text='right--' />
    </>
  )
}
/** renders App */
ReactDOM.render(<App />, document.getElementById('root'))