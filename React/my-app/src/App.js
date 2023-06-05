import React from "react";
import Hello from "./Hello";
import Welcome from "./Welcome";
import { LanguageContext } from "./LanguageContext";
// import Counter from "./Counter";
// import ClickCounter from "./ClickCounter";
// import ClickTracker from "./ClickTracker";
// import InteractiveWelcome from "./InteractiveWelcome";
// import Login from "./Login";
// import UncontrolledLogin from "./UncontrolledLogin";
// import TodoList from "./TodoList";

class App extends React.Component {
  state = {
    logged: false,
    language: "en",
  };

  handleLanguageChange = (event) => {
    this.setState({
      language: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <select
          value={this.state.language}
          onChange={this.handleLanguageChange}
        >
          <option value="en">English</option>
          <option value="it">Italiano</option>
        </select>
        <LanguageContext.Provider value={this.state.language}>
          <Hello />
          <Welcome name="John" age={15} />
          {/* <Counter />
        <hr />
        <ClickCounter />
        <hr />
        <ClickTracker />
        <hr />
        <InteractiveWelcome />

        <Login />
        <hr></hr>
        <UncontrolledLogin />
        <hr />
        <TodoList
          render={(items, removeLi) => {
            return (
              <div>
                {items.map((item) => (
                  <li id={item}>
                    {item}
                    <button id={item} onClick={removeLi}>
                      remove
                    </button>
                  </li>
                ))}
              </div>
            );
          }}
        ></TodoList> */}
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
