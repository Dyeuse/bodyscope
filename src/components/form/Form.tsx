import Options from "../options/Options";
import Measurements from "../measurements/Measurements";
import styles from "./Form.module.scss";

const { formContainer, dataWrapper } = styles;

function Form() {
  return (
    <form className={formContainer}>
      <div className={dataWrapper}>
        <Options />
        <Measurements />
      </div>
      <button type="submit">calculate</button>
    </form>
  );
}

export default Form;
