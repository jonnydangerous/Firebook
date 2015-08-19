var Login = React.createClass({displayName: "Login",
    onLoginHandler: function (event) {
        $.ajax({
            type: "POST",
            url: "api/login/Authenticate",
            data: { Username:this.state.username, Password:this.state.password },
            success: function (response) {
                console.info(response);            }
        });
    },
    usernameChange: function (event) {
        this.setState({ username: event.target.value })
    },
    passwordChange: function (event) {
        this.setState({ password: event.target.value })
    },
    render: function () {
        return (
          React.createElement("div", {className: "ui segment"}, 
              React.createElement("div", {className: "ui form"}, 
              React.createElement("h4", {className: "ui dividing header"}, "Login"), 
                React.createElement("div", {className: "field"}, 
                  React.createElement("input", {type: "text", placeholder: "Username", value: this.username, onChange: this.usernameChange})
                ), 
                React.createElement("div", {className: "field"}, 
                  React.createElement("input", {type: "password", placeholder: "Password", value: this.password, onChange: this.passwordChange})
                ), 
                React.createElement("button", {className: "ui orange button", onClick: this.onLoginHandler}, 
                  React.createElement("i", {className: "icon user"}), 
                    "Login"
                )
              )
          )
      );
    }
});
React.render(
  React.createElement(Login, null),
  document.getElementById('login')
);