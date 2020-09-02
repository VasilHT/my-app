import React from "react";
import './App.css';
import ReactDOM from 'react-dom';

/*const element = <h1 className="centered">Hello, world!</h1>;*/

function formatName(user){
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1 className="centered">
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);

function App() {

  return <>{element}</>;
}
export default App;