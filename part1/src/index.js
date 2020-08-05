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
 * @description Display shows value of counter variable - aka component state
 * @param { Number } counter is a number describing the state of App 
 */
const Display = ({ counter }) => <div>{counter}</div>
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
 * change (or button click) App is re-rendered along with its sub-components.
 */
const App = () => {
  const [ counter, setCounter ] = useState(0)
  // handlers
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)
  // example - passing by variables
  const name = 'Harry'
  const this_year = new Date().getFullYear()
  const age = this_year - 1989
  return (
    <>
      <h1>Greetings, puiny human</h1>
      <Hello name={name} age={age}/>
      <Hello name='Jake' age={this_year-1991}/>
      <Hello name='Josh' age={this_year-1990}/>
      <br />
      <br />
      <Footer />
      <br />
      <Display counter={counter}/>
      <Button handleClick={increaseByOne} text='plus' />
      <Button handleClick={setToZero} text='reset' />
      <Button handleClick={decreaseByOne} text='minus' />
    </>
  )
}
/** renders App */
ReactDOM.render(<App />, document.getElementById('root'))