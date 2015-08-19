var Login = React.createClass({
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
          <div className="ui segment">
              <div className="ui form">
              <h4 className="ui dividing header">Login</h4>
                <div className="field">
                  <input type="text" placeholder="Username" value={this.username} onChange={this.usernameChange}/>
                </div>
                <div className="field">
                  <input type="password" placeholder="Password" value={this.password} onChange={this.passwordChange} />
                </div>
                <button className="ui orange button" onClick={this.onLoginHandler}>
                  <i className="icon user" />
                    Login
                </button>
              </div>
          </div>
      );
    }
});
React.render(
  <Login />,
  document.getElementById('login')
);