import React from "react";

class TodoList extends React.Component {
  state = {
    items: ["phone", "laptop", "airdryer"],
  };

  addItem = () => {
    let searchbox = document.getElementById("searchbox");

    this.setState({
      items: [...this.state.items, searchbox.value],
    });

    searchbox.value = "";
  };

  resetList = () => {
    this.setState({
      items: [],
    });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        <input type="text" name="search" id="searchbox" />
        <button onClick={this.addItem}>Add</button>
        <button onClick={this.resetList}>Reset</button>
      </div>
    );
  }
}

export default TodoList;

/* 
When the button is clicked, the event handler should add the value of the input tag to the items array.
 */
