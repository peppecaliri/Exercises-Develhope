import React from "react";
import Hello from "./Hello";
import Welcome from "./Welcome";
import Counter from "./Counter";
import ClickCounter from "./ClickCounter";

class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name="John" age={15} />
        <Counter />
        <ClickCounter />
      </div>
    );
  }
}

export default App;
