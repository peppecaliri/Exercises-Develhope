import React from "react";
import Counter from "./Counter";

class CounterDisplay extends Counter {
  render() {
    return <h1>{this.state.count}</h1>;
  }
}

Counter.defaultProps = {
  initial: 10,
  increment: 2,
  interval: 3000,
};

export default CounterDisplay;
