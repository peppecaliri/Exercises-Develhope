import React from "react";
import Hello from "./Hello";
import Welcome from "./Welcome";

class CreateDiv extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name="Peppe" />
      </div>
    );
  }
}

export default CreateDiv;
