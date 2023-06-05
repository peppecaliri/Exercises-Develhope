import React from "react";
import Message from "./Message";
import { LanguageContext } from "./LanguageContext";

let Strings = {
  en: {
    GREETING: "Hello, World!",
  },
  it: {
    GREETING: "Ciao, Mondo!",
  },
};

class Hello extends React.Component {
  render() {
    return (
      <div>
        <LanguageContext.Consumer>
          {(language) => {
            return (
              <div>
                <h1>{Strings[language].GREETING}</h1>
                <Message />
              </div>
            );
          }}
        </LanguageContext.Consumer>
      </div>
    );
  }
}

export default Hello;
