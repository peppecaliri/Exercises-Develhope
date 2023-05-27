import React from "react";

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
    return <h1>{this.state.count}</h1>;
  }
}

Counter.defaultProps = {
  initial: 10,
  increment: 2,
  interval: 3000,
};

export default Counter;
