/* Create a ClickTracker component that renders three buttons. Implement a single event handler for all three 
buttons, and track of which button was pressed last. Show the last button that was pressed in an h1 tag within
 the ClickTracker component. Tip: you can use the event object to access the target property of the event.
*/

import React from "react";

class ClickTracker extends React.Component {
  state = {
    clicked: "",
  };

  handleButtonClick = (event) => {
    this.setState({
      clicked: event.target.name,
    });
  };

  render() {
    return (
      <div>
        <button name="button1" onClick={this.handleButtonClick}>
          ONE
        </button>
        <button name="button2" onClick={this.handleButtonClick}>
          TWO
        </button>
        <button name="button3" onClick={this.handleButtonClick}>
          THREE
        </button>

        <h1>The last button clicked is {this.state.clicked}</h1>
      </div>
    );
  }
}

export default ClickTracker;
