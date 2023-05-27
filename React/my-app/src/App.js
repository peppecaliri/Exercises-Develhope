import React from "react";
import Hello from "./Hello";
import Welcome from "./Welcome";
import Counter from "./Counter";

class CreateDiv extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name="John" age={15} />
        <Counter />
      </div>
    );
  }
}

export default CreateDiv;
