import React from "react";
import "./App.css";
// you dont need this, that one has already seted in index.js -> import ReactDOM from 'react-dom';

/*const element = <h1 className="centered">Hello, world!</h1>;*/

const user = {
  firstName: "Brooke",
  lastName: "Perez"
};

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const element = <h1 className="centered">Hello, {formatName(user)}!</h1>;


function getGreeting(user){
  if(user){
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger</h1>
}

function App() {
  return <>{element}</>;
}

export default App;
