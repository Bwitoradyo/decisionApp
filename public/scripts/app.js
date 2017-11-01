console.log("busy running");

//JSX - Javascript XML
//var template = <p>This is JSX</p>;
var template = React.createElement(
  "h1",
  {"id":"someid"},
  "This is JSX"
  );
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
