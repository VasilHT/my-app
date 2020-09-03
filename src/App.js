import React from "react";

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

//This structure is simplified..
const element13 = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
/*
function tick(){
  const element222 = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

setInterval(tick, 1000);
*/

//Functions and Class Components

function Welcome1(props){
return <h1>Hello, {props.name}</h1>
}

const elementAB = <Welcome1 name="Sara" />;
/*
class Welcome extends React.Component{
  render(){
  return <h1>Hello, {this.props.firstName}</h1>
  }
}
*/

function formatDate(date) {
  return date.toLocaleDateString();
}

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

function App(){
  return (
    <div>
      <Welcome1 name="Sara" />
      <Welcome1 name="Cahal" />
      <Welcome1 name="Edite" />
    </div>
  );
}

// function App() {
//   return <>{elementAB}</>;
// }

export default App;
