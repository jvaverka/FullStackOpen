import React from 'react'
import Course from './components/Course'

const App = ({ courses }) => {
  
  let result = []
  
  result.push(<h1 key={0}>Web Development Cirriculum</h1>)
  
  courses.forEach(course =>
    result.push(<Course key={course.id} course={course} />)
  )

  return result
}

export default App