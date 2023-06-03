import React from "react";
import Hello from "./Hello";
import Welcome from "./Welcome";
import Counter from "./Counter";
import ClickCounter from "./ClickCounter";
import ClickTracker from "./ClickTracker";
import InteractiveWelcome from "./InteractiveWelcome";

class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name="John" age={15} />
        <Counter />
        <ClickCounter />
        <ClickTracker />

        <InteractiveWelcome />
      </div>
    );
  }
}

export default App;
