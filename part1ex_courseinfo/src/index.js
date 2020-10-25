import React from 'react'
import ReactDOM from 'react-dom'

const Course = ({ course }) => {
  let result = []
  result.push(<SubHeader key={course.id} name={course.name} />)
  course.parts.forEach(part => {
    result.push(
      <Content key={course.id + part.id} name={part.name} count={part.exercises} />
    )
  })
  result.push(<Total key={course.id*1000} parts={course.parts} />)
  return result
}

const Header = ({ name }) => <h1>{name}</h1>

const SubHeader = ({ name }) => <h2>{name}</h2>

const Content = ({ name, count }) => <Part name={name} count={count} />

const Part = ({ name, count }) => <p>{name} {count}</p>

const Total = (props) => {
  
  const totalExercises = props.parts.reduce((sum, part) => {
    return sum + part.exercises
  }, 0)

  return (
    <>
      <p><b>Total of exercises {totalExercises}</b></p>
    </>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  let result = []
  result.push(<Header key={0} name='Web Development Cirriculum' />)
  courses.forEach(course =>
    result.push(<Course key={course.id} course={course} />)
  )
  return result
}

ReactDOM.render(<App />, document.getElementById('root'))