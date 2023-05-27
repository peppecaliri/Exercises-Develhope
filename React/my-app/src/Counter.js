import React from "react";
import CounterDisplay from "./CounterDisplay";

class Counter extends React.Component {
  state = {
    count: this.props.initial,
  };

  constructor(props) {
    super(props);

    setInterval(() => {
      this.setState({
        count: this.state.count + this.props.increment,
      });
    }, this.props.interval);
  }

  render() {
    return (
      <div>
        <CounterDisplay />
      </div>
    );
  }
}

export default Counter;
