import React from "react";
import Hello from "./Hello";
import Welcome from "./Welcome";
import Counter from "./Counter";
import ClickCounter from "./ClickCounter";
import ClickTracker from "./ClickTracker";
import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";

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
        <ClickCounter />
        <ClickTracker />
        <hr />
        <InteractiveWelcome />

        <Login />
      </div>
    );
  }
}

export default App;
