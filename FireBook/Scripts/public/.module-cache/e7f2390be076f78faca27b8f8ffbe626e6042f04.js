var Register = React.createClass({displayName: "Register",
	render: function() {
		return (

          React.createElement("div", {className: "ui segment"}, 
            React.createElement("div", {className: "ui form"}, 
              React.createElement("h4", {className: "ui dividing header"}, "Register"), 
              React.createElement("div", {className: "field"}, 
                React.createElement("label", null, "Name"), 
                React.createElement("div", {className: "two fields"}, 
                  React.createElement("div", {className: "field"}, 
                    React.createElement("input", {type: "text", placeholder: "First Name"})
                  ), 
                  React.createElement("div", {className: "field"}, 
                    React.createElement("input", {type: "text", placeholder: "Last Name"})
                  )
                )
              ), 
              React.createElement("div", {className: "field"}, 
                React.createElement("label", null, "Login Info"), 
                React.createElement("div", {className: "field "}, 
                  React.createElement("input", {type: "text", placeholder: "Username"})
                ), 
                React.createElement("div", {className: "two fields"}, 
                  React.createElement("div", {className: "field"}, 
                    React.createElement("input", {type: "password", placeholder: "Password"})
                  ), 
                  React.createElement("div", {className: "field"}, 
                    React.createElement("input", {type: "password", placeholder: "Confirm Password"})
                  )
                )
              ), 
              React.createElement("button", {className: "ui orange button"}, 
                React.createElement("i", {className: "icon user"}), 
                "Register"
              )
            )
          )
      );
	}
});
React.render(
  React.createElement(Register, null),
  document.getElementById('register')
);