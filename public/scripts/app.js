"use strict";

console.log("busy running");

//JSX - Javascript XML
var app = {
  title: "Sumologic",
  subtitle: "This is a description about Sumologic"
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  React.createElement(
    "p",
    null,
    app.subtitle
  )
);

//Create a templateTwo var JSX expression
var user = {
  name: "Le Corbusier",
  age: 30,
  location: "Mars"
};

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  React.createElement(
    "p",
    null,
    "Location: ",
    user.location
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
