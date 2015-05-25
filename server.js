var http = require('http'),
	Express = require('express');

// Middleware.

var app = Express();

// Routes. 
var routes = ['names'];
for (i in routes) {
	console.log("Loading route: " + routes[i]);
	module = require("./routes/" + routes[i]);
	new module(app)
}

// Anything else.
app.use(function(request,response,next) { 
	console.log("[default]",request.path);
	response.send("Bad path " + request.path);
})

// Server.

app.listen((process.env.PORT || 8080), (process.env.HOST || 'localhost'));
console.log("Server started.")
