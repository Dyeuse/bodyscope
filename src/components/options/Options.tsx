import RadioOptions from "./RadioOptions";
import SelectOptions from "./SelectOptions";
import optionsTexts from "../../data/optionsTexts";
import styles from "./Options.module.scss";
import {
  useUserData,
  useUserDataDispatch,
} from "../../contexts/UserDataContext";

const { optionsContainer, interRadioWrapper } = styles;

function Options() {
  const userData = useUserData();
  const dispatch = useUserDataDispatch();

  const radios = optionsTexts[userData.language].radios.map((radio) => {
    const { name, choice1, value1, choice2, value2 } = radio;
    return (
      <RadioOptions
        key={name}
        onChange={(e) => dispatch({ type: name, [name]: e.target.value })}
        name={name}
        choice1={choice1}
        value1={value1}
        choice2={choice2}
        value2={value2}
        userChoice={userData[name]}
      />
    );
  });

  const selects = optionsTexts[userData.language].selects.map((select) => {
    const { name, options } = select;
    return (
      <SelectOptions
        key={name}
        name={name}
        selectedValue={userData[name]}
        onChange={(e) => dispatch({ type: name, [name]: e.target.value })}
        options={options}
      >
        {select.title}
      </SelectOptions>
    );
  });

  const specificBFP = (
    <input
      type="number"
      value={userData.specificBFP}
      onChange={(e) =>
        dispatch({ type: "specificBFP", specificBFP: e.target.value })
      }
      name="specificBFP"
      min={0}
      max={60}
    />
  );
  return (
    <div className={optionsContainer}>
      <div className={interRadioWrapper}>{radios}</div>
      {selects}
      {userData.bodyFat === "specific" && specificBFP}
    </div>
  );
}

export default Options;
