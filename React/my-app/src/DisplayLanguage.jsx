import { useContext } from "react";
import LanguageContext from "./CreateContext";

export function DisplayLanguage() {
  const language = useContext(LanguageContext);
  const Strings = {
    en: {
      SELECTED: "The language is set to :",
    },
    it: {
      SELECTED: "La lingua selezionata é :",
    },
  };

  return (
    <div>
      {Strings[language].SELECTED}{" "}
      {language === "it" ? <span>Italiano</span> : <span>English</span>}
    </div>
  );
}
