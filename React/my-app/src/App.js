import React from "react";
import Hello from "./Hello";
import Welcome from "./Welcome";
import Counter from "./Counter";
import ClickCounter from "./ClickCounter";
import ClickTracker from "./ClickTracker";

class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name="John" age={15} />
        <Counter />
        <ClickCounter />
        <ClickTracker />
      </div>
    );
  }
}

export default App;
