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

const element = <h1>Hello, {formatName(user)}!</h1>;


function getGreeting(user){
  if(user){
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger</h1>
}

const element1 = <div tabIndex="0"></div>;

const element2 = <div><img src={user.avatarUrl}></img></div>;
/*OR, if a tag is empty, we can just close it with />*/
/*img tags are elements and they have to be wrapped with either: div, span, or empty tag <></>*/
const element3 = <><img src={user.avatarUrl}/></>;

const element4 = (
  <div>
    <h1 className="centered">Hello, {formatName(user)}!<br/></h1>
    <h2 className="onlyCenter">Good to see you here.</h2>
  </div>
);

function App() {
  return <>{element4}</>;
}

export default App;
