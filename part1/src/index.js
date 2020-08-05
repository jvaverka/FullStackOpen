import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Hello = ({ name, age }) => {
  // OR with Hello = (props) => ...
  // const name = props.name
  // const age = props.age
  // OR -------------------
  // const { name, age } = props
  
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

const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/jrud8/full-stack-open">Jrud + jakeV</a>
    </div>
  )
}

const App = () => {
  const [ counter, setCounter ] = useState(0)
  
  const setToZero = () => setCounter(0)

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
      <div>
        {counter}
      </div>
      {/* event handler with function - BAD practice*/}
      <button onClick={() => setCounter(counter + 1)}>
        plus
      </button>
      {/* event handler with function reference - GOOD practice*/}
      <button onClick={setToZero}>
        reset
      </button>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))