import React from "react";
import './App.css';
import ReactDOM from 'react-dom';

/*const element = <h1 className="centered">Hello, world!</h1>;*/

const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);

function App() {

  return <>{element}</>;
}
export default App;