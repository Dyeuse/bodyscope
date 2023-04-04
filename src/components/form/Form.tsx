import Options from "../options/Options";
import Measurements from "../measurements/Measurements";
import {
  useUserData,
  useUserDataDispatch,
} from "../../contexts/UserDataContext";
import styles from "./Form.module.scss";

const { formContainer, dataWrapper } = styles;

const buttonTexts: { [index: string]: string } = {
  english: "calculate",
  french: "calculer",
};

function Form() {
  const { language } = useUserData();
  const dispatch = useUserDataDispatch();
  const handleCalculate = () => {
    const allValuesAreOK = document.querySelector("form")?.checkValidity();
    if (allValuesAreOK) {
      dispatch({ type: "calculate" });
    }
  };

  return (
    <form
      className={formContainer}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className={dataWrapper}>
        <Options />
        <Measurements />
      </div>
      <button type="submit" onClick={handleCalculate}>
        {buttonTexts[language]}
      </button>
    </form>
  );
}

export default Form;
