import React from "react";
import CounterDisplay from "./CounterDisplay";

class Counter extends React.Component {
  state = {
    count: this.props.initial,
  };

  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        count: this.state.count + this.props.increment,
      });
    }, this.props.interval);
  }

  render() {
    return (
      <div>
        <CounterDisplay display={this.state.count} />
      </div>
    );
  }
}

Counter.defaultProps = {
  initial: 10,
  increment: 1,
  interval: 1000,
};

export default Counter;
