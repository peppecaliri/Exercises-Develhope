import React from "react";
import Hello from "./Hello";
import Welcome from "./Welcome";
import Counter from "./Counter";
import ClickCounter from "./ClickCounter";
import ClickTracker from "./ClickTracker";
import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";
import UncontrolledLogin from "./UncontrolledLogin";
import TodoList from "./TodoList";

class App extends React.Component {
  state = {
    logged: false,
  };

  render() {
    return (
      <div>
        <Hello />
        <Welcome name="John" age={15} />
        <Counter />
        <hr />
        <ClickCounter />
        <hr />
        <ClickTracker />
        <hr />
        <InteractiveWelcome />

        <Login />
        <hr></hr>
        <UncontrolledLogin />
        <hr />
        <TodoList />
      </div>
    );
  }
}

export default App;
