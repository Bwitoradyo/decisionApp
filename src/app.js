console.log("busy running");

//JSX - Javascript XML
var template =(
<div>
  <h1>Sumologic</h1>
  <p>This is some info</p>
  <ol>
  	<li>Item one</li>
  	<li>Item two</li>
  </ol>
</div>
);

//Create a templateTwo var JSX expression

const templateTwo = (
  <div>
  	<h1>Sumologic</h1>
  	<p>Age: 26</p>
  	<p>Location: Ridgefield Park</p>
  </div>		
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);

