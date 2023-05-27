import React from "react";
import Hello from "./Hello";
import Welcome from "./Welcome";

class CreateDiv extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name="John" age={28} />
      </div>
    );
  }
}

export default CreateDiv;
