import styles from "./Options.module.scss";

const { intraRadioWrapper } = styles;

type RadioOptionsProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: "language" | "gender";
  choice1: string;
  value1: string;
  choice2: string;
  value2: string;
  userChoice: string;
};

function RadioOptions({
  onChange,
  name,
  choice1,
  value1,
  choice2,
  value2,
  userChoice,
}: RadioOptionsProps) {
  return (
    <div className={intraRadioWrapper}>
      <div>
        <input
          type="radio"
          value={value1}
          onChange={onChange}
          name={name}
          id={choice1}
          checked={userChoice === value1}
        />
        <label htmlFor={choice1}>{choice1}</label>
      </div>
      <div>
        <input
          type="radio"
          value={value2}
          onChange={onChange}
          name={name}
          id={choice2}
          checked={userChoice === value2}
        />
        <label htmlFor={choice2}>{choice2}</label>
      </div>
    </div>
  );
}

export default RadioOptions;
