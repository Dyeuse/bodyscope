import styles from "./Options.module.scss";

const { intraRadioWrapper } = styles;

type RadioOptionsProps = {
  name: string;
  choice1: string;
  choice2: string;
};

function RadioOptions({ name, choice1, choice2 }: RadioOptionsProps) {
  return (
    <div className={intraRadioWrapper}>
      <div>
        <input type="radio" name={name} id={choice1} checked />
        <label htmlFor={choice1}>{choice1}</label>
      </div>
      <div>
        <input type="radio" name={name} id={choice2} />
        <label htmlFor={choice2}>{choice2}</label>
      </div>
    </div>
  );
}

export default RadioOptions;
