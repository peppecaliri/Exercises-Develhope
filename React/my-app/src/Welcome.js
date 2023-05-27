import React from "react";
import Age from "./Age";

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome, {<strong>{this.props.name}</strong>}.</p>
        {this.props.age &&
          this.props.age >= 18 &&
          this.props.age < 65 &&
          this.props.name === "John" && <Age age={this.props.age} />}
      </div>
    );
  }
}

Welcome.defaultProps = {
  name: "User",
  age: 18,
};

export default Welcome;
