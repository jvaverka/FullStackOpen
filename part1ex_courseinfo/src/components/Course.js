import React from 'react'


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

  export default Course