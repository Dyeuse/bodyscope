import { useRef } from "react";
import RadioOptions from "./RadioOptions";
import SelectOptions from "./SelectOptions";
import { activityFactors, bodyFat } from "./selectableData";
import useElementWidth from "../../hooks/useElementWidth";
import styles from "./Options.module.scss";

const { container, interRadioWrapper } = styles;

function Options() {
  const containerRef = useRef<HTMLDivElement>(null);
  const containerWidth = useElementWidth(containerRef);
  const fontSize = containerWidth ? Math.round(containerWidth / 15) : 20;
  const initStyle = { fontSize };

  return (
    <div className={container} ref={containerRef} style={initStyle}>
      <div className={interRadioWrapper}>
        <RadioOptions name="language" choice1="english" choice2="français" />
        <RadioOptions name="gender" choice1="male" choice2="female" />
      </div>
      <SelectOptions name="bodyFat" data={bodyFat}>
        Body Fat Percentage
      </SelectOptions>
      <SelectOptions name="activity" data={activityFactors}>
        Physical activity
      </SelectOptions>
    </div>
  );
}

export default Options;
