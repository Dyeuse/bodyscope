import Options from "../options/Options";
import Measurements from "../measurements/Measurements";
import { useUserData } from "../../contexts/UserDataContext";
import styles from "./Form.module.scss";

const { formContainer, dataWrapper } = styles;

const buttonTexts: { [index: string]: string } = {
  english: "calculate",
  french: "calculer",
};

function Form() {
  const { language } = useUserData();

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
