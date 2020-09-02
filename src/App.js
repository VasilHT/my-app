import React from "react";
import "./App.css";
// you dont need this, that one has already seted in index.js -> import ReactDOM from 'react-dom';

/*const element = <h1 className="centered">Hello, world!</h1>;*/

const user = {
  firstName: "Harper",
  lastName: "Perez",
};

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const element = <h1 className="centered">Hello, {formatName(user)}!</h1>;

// also we dont need those 4 lines
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

function App() {
  return <>{element}</>;
}

export default App;
