import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
  return (
    <div>
      <p>Hello, {props.name}. You are {props.age} years old.</p>
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
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))