"use strict";

console.log("busy running");

//JSX - Javascript XML
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Sumologic"
  ),
  React.createElement(
    "p",
    null,
    "This is some info"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item one"
    ),
    React.createElement(
      "li",
      null,
      "Item two"
    )
  )
);

//Create a templateTwo var JSX expression

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Sumologic"
  ),
  React.createElement(
    "p",
    null,
    "Age: 26"
  ),
  React.createElement(
    "p",
    null,
    "Location: Ridgefield Park"
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
