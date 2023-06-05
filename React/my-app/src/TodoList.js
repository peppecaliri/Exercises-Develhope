import React from "react";

class TodoList extends React.Component {
  state = {
    items: ["phone", "laptop", "airdryer"],
  };

  addItem = () => {
    let searchbox = document.getElementById("searchbox");

    if (this.state.items.includes(searchbox.value) === false) {
      this.setState({
        items: [...this.state.items, searchbox.value],
      });
    } else {
      alert(`${searchbox.value} is already in your list`);
    }

    searchbox.value = "";
  };

  resetList = () => {
    this.setState({
      items: [],
    });
  };

  removeLiItem = (event) => {
    event.preventDefault();

    let toRemove = event.target.id;

    this.setState({
      items: this.state.items.filter((el) => el !== toRemove),
    });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.items.map((item) => (
            <li id={item}>
              {item}
              <button id={item} onClick={this.removeLiItem}>
                remove
              </button>
            </li>
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
