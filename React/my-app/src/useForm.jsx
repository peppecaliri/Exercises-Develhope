import { useState } from "react";

export function useForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUsername(event) {
    event.preventDefault();

    let value = event.target.value;
    let button = document.getElementById("btnSubmit");
    console.log(value);
    if (username.length > 1 && password.length > 1) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  }

  function handlePassword(event) {
    event.preventDefault();
    let value = event.target.value;
    let button = document.getElementById("btnSubmit");
    console.log(value);
    if (username.length > 1 && password.length > 1) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  }

  function handleReset(event) {
    event.preventDefault();
    setUsername("");
    setPassword("");
  }
  return { username, password, handleUsername, handlePassword, handleReset };
}
