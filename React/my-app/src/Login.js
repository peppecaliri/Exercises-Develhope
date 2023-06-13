/*Rewrite the Login component as a function component, and use the useState hook to track the state of the username, password and remember inputs. 
Tip: you can use useState more than once.
 */

import { useState } from "react";

export default function Login() {
  const [username, handleUsername] = useState("");
  const [password, handlePassword] = useState("");

  function handleInput(event) {
    event.preventDefault();
    let name = event.target.name;
    let value = event.target.value;

    let button = document.getElementById("btnSubmit");

    if (name === "username") {
      handleUsername(value);
      console.log(username);
      if (username.length > 1 && password.length > 1) {
        button.disabled = false;
      } else {
        button.disabled = true;
      }
    } else {
      handlePassword(value);
      console.log(password);
      if (username.length > 1 && password.length > 1) {
        button.disabled = false;
      } else {
        button.disabled = true;
      }
    }
  }

  function handleReset(event) {
    event.preventDefault();
    handleUsername("");
    handlePassword("");
  }

  return (
    <div>
      <form>
        <input type="text" name="username" onChange={handleInput} />
        <input type="password" name="password" onChange={handleInput} />
        <input
          type="submit"
          name="submit"
          // onClick={this.onLogin}
          id="btnSubmit"
          disabled
        />
        <button onChange={handleReset}>Reset</button>
      </form>
    </div>
  );
}
