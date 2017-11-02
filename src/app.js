console.log("busy running");

//JSX - Javascript XML
var app = {
  title: "Sumologic",
  subtitle: "This is a description about Sumologic",
  options: ["One", "Two", "Three", "Four"]
}

var template =(
<div>
  <h1>{app.title}</h1>
  {(app.subtitle) && <p>{app.subtitle}</p>}
  <p>{(app.options.length > 2)?(app.options):("No options")}</p>
  <ol>
  	<li>Item one</li>
  	<li>Item two</li>
  </ol>
</div>
);

//Create a templateTwo var JSX expression
var user = {
 name:"Le Corbusier",
 age:60,
 location:"Philadelphia"
};

function getLocation(location){
  if(location){
    return <p>Location: {location}</p>;
  }
}

const templateTwo = (
  <div>
  	<h1>{user.name ? user.name : "Anonymus"}</h1>
	{(user.age >= 18) && <p>Age:{user.age}</p>}
  	{getLocation(user.location)}
  
  </div>		
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);

