import React from "react";

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome, {this.props.name}.</p>
        <p>Your age is {this.props.age}</p>
      </div>
    );
  }
}

Welcome.defaultProps = {
  name: "User",
  age: 18,
};

export default Welcome;
