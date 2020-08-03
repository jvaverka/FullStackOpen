import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  console.log(props)
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  // create array to contain rows
  let result = []
  // add new Part row for each element
  props.parts.forEach(element => {
    // provide name & count properties to satisfy Part definition
    result.push(<Part name={element.name} count={element.exercises} />)
  })

  return result
}

const Part = (props) => {
  return (
    <>
      <p>{props.name} {props.count}</p>
    </>
  )
}

const Total = (props) => {
  // initialize a variable for total cound
  let count = 0
  // add number of exercises for each element
  props.parts.forEach(element => {
    count += element.exercises
  });
  // return total count
  return (
    <>
      <p>Number of exercises {count}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
      name: 'State of a component',
      exercises: 14
      }
    ]
  }

  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))