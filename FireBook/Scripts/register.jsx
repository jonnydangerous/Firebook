var Register = React.createClass({
	render: function() {
		return (

          <div className="ui segment">
            <div className="ui form">
              <h4 className="ui dividing header">Register</h4>
              <div className="field">
                <label>Name</label>
                <div className="two fields">
                  <div className="field">
                    <input type="text" placeholder="First Name" />
                  </div>
                  <div className="field">
                    <input type="text" placeholder="Last Name" />
                  </div>
                </div>
              </div>
              <div className="field">
                <label>Login Info</label>
                <div className="field ">
                  <input type="text" placeholder="Username" />
                </div>
                <div className="two fields">
                  <div className="field">
                    <input type="password" placeholder="Password" />
                  </div>
                  <div className="field">
                    <input type="password" placeholder="Confirm Password" />
                  </div>
                </div>
              </div>
              <button className="ui orange button">
                <i className="icon user" />
                Register
              </button>
            </div>
          </div>
      );
	}
});
React.render(
  <Register/>,
  document.getElementById('register')
);