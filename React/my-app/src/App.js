import Hello from "./Hello";
import Login from "./Login";
import Welcome from "./Welcome";
import Counter from "./Counter";
import ClickCounter from "./ClickCounter";
import { useForm } from "./useForm";
// import { GithubUser } from "./GithubUser";
import { GithubUserList } from "./GithubUserList";
import { CarDetails } from "./CarDetails";
import { useState } from "react";
import LanguageContext from "./CreateContext";
import { DisplayLanguage } from "./DisplayLanguage";
export default function App() {
  const [language, setLanguage] = useState("en");

  function handleLanguageChange(event) {
    setLanguage(event.target.value);
  }

  return (
    <div>
      <select value={language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="it">Italiano</option>
      </select>

      <LanguageContext.Provider value={language}>
        <DisplayLanguage />
      </LanguageContext.Provider>
      <Hello />
      <Welcome name="John" age={15} />
      <Counter />
      <Login />
      <GithubUserList />
      <ClickCounter initialValue={0} />
      <CarDetails />
      {/* <GithubUser username="peppecaliri" /> */}
    </div>
  );
}
