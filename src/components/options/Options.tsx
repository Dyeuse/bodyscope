import { useContext, useRef } from "react";
import LanguageContext from "../../contexts/LanguageContext";
import RadioOptions from "./RadioOptions";
import SelectOptions from "./SelectOptions";
import optionsTexts from "./optionsTexts";
import useElementWidth from "../../hooks/useElementWidth";
import styles from "./Options.module.scss";

const { optionsContainer, interRadioWrapper } = styles;

function Options() {
  const language = useContext(LanguageContext);
  const containerRef = useRef<HTMLDivElement>(null);
  const containerWidth = useElementWidth(containerRef);
  const fontSize = containerWidth ? Math.round(containerWidth / 15) : 20;
  const initStyle = { fontSize };

  const radios = optionsTexts[language].radios.map((radio) => (
    <RadioOptions
      key={radio.name}
      name={radio.name}
      choice1={radio.choice1}
      choice2={radio.choice2}
    />
  ));

  const selects = optionsTexts[language].selects.map((select) => (
    <SelectOptions
      key={select.name}
      name={select.name}
      options={select.options}
    >
      {select.title}
    </SelectOptions>
  ));

  return (
    <div className={optionsContainer} ref={containerRef} style={initStyle}>
      <div className={interRadioWrapper}>{radios}</div>
      {selects}
    </div>
  );
}

export default Options;
