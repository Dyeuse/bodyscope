import { useContext } from "react";
import Options from "../options/Options";
import Measurements from "../measurements/Measurements";
import LanguageContext from "../../contexts/LanguageContext";
import styles from "./Form.module.scss";

const { formContainer, dataWrapper } = styles;

const buttonTexts: { [index: string]: string } = {
  english: "calculate",
  french: "calculer",
};

function Form() {
  const language = useContext(LanguageContext);

  return (
    <form className={formContainer}>
      <div className={dataWrapper}>
        <Options />
        <Measurements />
      </div>
      <button type="submit">{buttonTexts[language]}</button>
    </form>
  );
}

export default Form;
