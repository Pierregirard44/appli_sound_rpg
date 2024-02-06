import React from 'react';


function App() {
    return <User name="John Doe" age="12"  />
  }
  
function User(props) {
    return <h1>Hello, {props.name} , you are {props.age} years old</h1>; // Hello, John Doe!
  }

export default App;