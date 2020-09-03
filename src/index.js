import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Comment from "./components/Comment";
import * as serviceWorker from "./serviceWorker";
import "./App.css";

// comment data
const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    name: "Hello Kitty",
    avatarUrl: "https://placekitten.com/g/64/64",
  },
};

ReactDOM.render(
  <React.StrictMode>
    <Comment date={comment.date} text={comment.text} author={comment.author} />,
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

//ReactDOM.render(Element, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
