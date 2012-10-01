// app.js
// The main app.

// Libraries
var http = require("http");
var fs = require("fs");

// Includes
var menu = require("./menu.js");

menu.show("main");

/*http.get("http://www.google.com/index.html", function(res) {
  console.log("Got response: " + res.statusCode);
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});*/