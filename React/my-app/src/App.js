import Hello from "./Hello";
// import Login from "./Login";
import Welcome from "./Welcome";
import Counter from "./Counter";
// import ClickCounter from "./ClickCounter";
// import { useForm } from "./useForm";
import { GithubUser } from "./GithubUser";
import { GithubUserList } from "./GithubUserList";
// import { CarDetails } from "./CarDetails";
import { useState } from "react";
import LanguageContext from "./CreateContext";
import { ShowGithubUser } from "./ShowGithubUser";
import { DisplayLanguage } from "./DisplayLanguage";
import { Route, Routes } from "react-router-dom";
import { Nav } from "./Nav";
// import { FilteredList } from "./FilteredList";
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

      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/users/:username" element={<ShowGithubUser />} />
        <Route path="/" element={<Nav />} />
        <Route path="/*" element={<h1>Page not Found</h1>} />
        <Route path="/users" element={<GithubUserList />}>
          <Route index element={<h1>Add a user and select it</h1>} />
        </Route>
      </Routes>

      {/* <Login />
      <GithubUserList />
      <ClickCounter initialValue={0} />
      <CarDetails />
      <hr />
      <FilteredList
        people={[
          { id: 1, name: "pippo", age: 28 },
          { id: 2, name: "pappo", age: 16 },
          { id: 2, name: "peppo", age: 12 },
        ]}
      /> */}
    </div>
  );
}
