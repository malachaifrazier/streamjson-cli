// menu.js
// Menu controller.

var prompt = require("prompt");

function build_menu(options, actions) {
  for (var i = 0; i < options.length; i++) {
    console.log(i + " - " + options[i]);
  }
  
  // TODO: Find a way to make this not show the .name
  var property = {
    name: "option",
    message: "",
    validator: /^\d*$/,
    warning: "Must be a number!"
  };
  
  prompt.message = "";
  prompt.delimiter = ">";
  prompt.start();
  
  prompt.get(property, function (err, result) {
    actions[result.option]();
  });
}

module.exports = {
  show: function(menu) {
    switch (menu) {
      case "main":
        var options = [ "Video List", "About" ];
        var actions = [
          function() {
            console.log("list");
          },
          function() {
            console.log("about");
          }
        ];

        build_menu(options, actions);
        break;
    }
  }
};