import React from "react";


const Header = (props) => {
  return (
    <h1>{props.name}</h1>
  )
}

const Content = (props) => {
  return (
    <p>
      {props.part_name}: {props.amount}
    </p>
  )
}
const Total = (props) => {
  return (
    <p>Number of exercises: {props.amount_1 + props.amount_2 + props.amount_3}</p>
  )
}

const App = () => {
  const course = "Half Stack application development"
  const part1 = "Fundamentals of React"
  const exercises1 = 10
  const part2 = "Using props to pass data"
  const exercises2 = 7
  const part3 = "State of a component"
  const exercises3 = 14

  return (
    <div>
      <Header name={course}/>
      <Content part_name={part1} amount={exercises1} />
      <Content part_name={part2} amount={exercises2} />
      <Content part_name={part3} amount={exercises3} />
      <Total amount_1={exercises1} amount_2={exercises2} amount_3={exercises3} />
    </div>
  )
}

export default App;
