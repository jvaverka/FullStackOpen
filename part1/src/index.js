import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Hello = ({ name, age }) => {  
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

const Footer = () => (
  <div>
    Greeting app created by <a href="https://github.com/jrud8/full-stack-open">Jrud + jakeV.</a>
  </div>
)

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

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

ReactDOM.render(<App />, document.getElementById('root'))