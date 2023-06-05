import React from "react";

class UncontrolledLogin extends React.Component {
  handleInputUnc = () => {
    const user = document.getElementById("username");
    const pass = document.getElementById("password");
    const btn = document.getElementById("btnSubmit2");

    if (user.value && pass.value) {
      btn.disabled = false;
    } else btn.disabled = true;
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="username"
          id="username"
          onChange={this.handleInputUnc}
          autoFocus
        />
        <input
          type="password"
          name="password"
          id="password"
          onChange={this.handleInputUnc}
        />
        <input type="submit" name="submit" id="btnSubmit2" disabled />
      </div>
    );
  }
}

export default UncontrolledLogin;
