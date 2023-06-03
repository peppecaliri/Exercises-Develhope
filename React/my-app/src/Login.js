/*Add a "login" button to the Login component. This button should be disabled as long as the username and password 
inputs are empty. When clicked, the event handler attached to the button should call an onLogin function passed 
as a prop to the Login component, passing it the state.
 */

import React from "react";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleInputChange = (event) => {
    event.preventDefault();
    let name = event.target.name;
    let value = event.target.value;
    let button = document.getElementById("btnSubmit");
    this.setState({
      [name]: value,
    });

    if (this.state.username.length > 1 && this.state.password.length > 1) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  };

  onLogin = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="username"
            onChange={this.handleInputChange}
          />
          <input
            type="password"
            name="password"
            onChange={this.handleInputChange}
          />
          <input
            type="submit"
            name="submit"
            onClick={this.onLogin}
            id="btnSubmit"
            disabled
          />
        </form>
      </div>
    );
  }
}

export default Login;
