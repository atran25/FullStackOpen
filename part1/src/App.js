import React from "react";

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const name = "Anthony"
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name={name} age={age} />
      <Hello name="Anthony" age={18}/>
    </div>
  )
}

export default App;
