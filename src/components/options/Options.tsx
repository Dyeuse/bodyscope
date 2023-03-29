import { useRef } from "react";
import RadioOptions from "./RadioOptions";
import SelectOptions from "./SelectOptions";
import optionsTexts from "./optionsTexts";
import useElementWidth from "../../hooks/useElementWidth";
import styles from "./Options.module.scss";
import {
  useUserData,
  useUserDataDispatch,
} from "../../contexts/UserDataContext";

const { optionsContainer, interRadioWrapper } = styles;

function Options() {
  const userData = useUserData();
  const dispatch = useUserDataDispatch();
  const containerRef = useRef<HTMLDivElement>(null);
  const containerWidth = useElementWidth(containerRef);
  const fontSize = containerWidth ? Math.round(containerWidth / 15) : 20;
  const initStyle = { fontSize };

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

  return (
    <div className={optionsContainer} ref={containerRef} style={initStyle}>
      <div className={interRadioWrapper}>{radios}</div>
      {selects}
    </div>
  );
}

export default Options;
