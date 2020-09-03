import React from "react";
import "./App.css";
// you dont need this, that one has already seted in index.js -> import ReactDOM from 'react-dom';

/*const element = <h1 className="centered">Hello, world!</h1>;*/

const user = {
  firstName: "Brooke",
  lastName: "Perez",
};

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const element = <h1>Hello, {formatName(user)}!</h1>;

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger</h1>;
}

const element1 = <div tabIndex="0"></div>;

const element2 = <div><img src={user.avatarUrl}></img></div>;
/*OR, if a tag is empty, we can just close it with />*/
const element3 = <img src={user.avatarUrl} />;

const element4 = (
  <div className="centered">
    <h1>Hello, {formatName(user)}!</h1>
    <h2>Good to see you here.</h2>
  </div>
);

const title = Response.potentiallyMaliciousInput;
//this is safe
const element5 = <h1>{title}</h1>

const element11 = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
//^this is the same with this
const element12 = React.createElement(
  'h1', 
  {className: 'geeting'},
  'Hello, world!'
);

function App() {
  return <>{element11}</>;
}

export default App;
