import React from "react";

//Git Access Token: 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

const Header = (props) => {
  return (
    <h1>{props.name}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part_name={props.part1} amount={props.exercises1} />
      <Part part_name={props.part2} amount={props.exercises2} />
      <Part part_name={props.part3} amount={props.exercises3} />
    </div>
  )
}

const Part = (props) => {
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
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Total amount_1={exercises1} amount_2={exercises2} amount_3={exercises3} />
    </div>
  )
}

export default App;
