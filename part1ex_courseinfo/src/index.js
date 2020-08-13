import React from 'react'
import ReactDOM from 'react-dom'

const Course = ({ course }) => {
  // console.log(course)
  let result = []
  result.push(<Header key={course.id} name={course.name} />)
  course.parts.forEach(part => {
    result.push(
      <Content key={course.id + part.id} name={part.name} count={part.exercises} />
    )
  })
  return result
}

const Header = ({ name }) => <h1>{name}</h1>

const Content = ({ name, count }) => <Part name={name} count={count} />

const Part = ({ name, count }) => <p>{name} {count}</p>

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
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

ReactDOM.render(<App />, document.getElementById('root'))