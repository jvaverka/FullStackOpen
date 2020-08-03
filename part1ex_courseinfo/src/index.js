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
  return (
    <>
      <Part name={props.part1.name} count={props.part1.exercises}/>
      <Part name={props.part2.name} count={props.part2.exercises}/>
      <Part name={props.part3.name} count={props.part3.exercises}/>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.name} {props.count}</p>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.p1 + props.p2 + props.p3}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <>
      <Header course={course} />
      <Content part1={parts[0]} part2={parts[1]} part3={parts[2]} />
      <Total p1={parts[0].exercises} p2={parts[1].exercises} p3={parts[2].exercises} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))