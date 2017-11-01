console.log("busy running");

//JSX - Javascript XML
var app = {
  title: "Sumologic",
  subtitle: "This is a description about Sumologic"
}

var template =(
<div>
  <h1>{app.title}</h1>
  <p>{app.subtitle}</p>
</div>
);

//Create a templateTwo var JSX expression
var user = {
  name:"Le Corbusier",
  age:30,
  location: "Mars"
}

const templateTwo = (
  <div>
  	<h1>{user.name}</h1>
  	<p>Age: {user.age}</p>
  	<p>Location: {user.location}</p>
  </div>		
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);

