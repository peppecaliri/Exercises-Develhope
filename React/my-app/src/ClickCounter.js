import React from "react";

class ClickCounter extends React.Component {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default ClickCounter;

// Create a ClickCounter class component that increments a counter every time a user clicks on a button.
// Render both the current value of the counter and the button within the ClickCounter component.
