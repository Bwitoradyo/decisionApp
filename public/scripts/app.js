"use strict";

console.log("busy running");

//JSX - Javascript XML
var template = React.createElement(
  "h1",
  null,
  "Decision App"
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
