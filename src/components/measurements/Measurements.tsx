import { useRef } from "react";
import Measurement from "./Measurement";
import measurementsTexts from "./measurementsTexts";
import useElementWidth from "../../hooks/useElementWidth";
import {
  useUserData,
  useUserDataDispatch,
} from "../../contexts/UserDataContext";
import styles from "./Measurements.module.scss";

const { measurementsContainer } = styles;

function Measurements() {
  const userData = useUserData();
  const dispatch = useUserDataDispatch();
  const containerRef = useRef<HTMLDivElement>(null);
  const containerWidth = useElementWidth(containerRef);
  const fontSize = containerWidth ? Math.round(containerWidth / 15) : 20;
  const initStyle = { fontSize };

  const measurements = measurementsTexts[userData.language].map(
    (measurement) => {
      const { name, title, min, max } = measurement;
      return (
        <Measurement
          key={name}
          name={name}
          value={userData[name]}
          onChange={(e) => dispatch({ type: name, [name]: e.target.value })}
          min={min}
          max={max}
        >
          {title}
        </Measurement>
      );
    }
  );

  return (
    <div className={measurementsContainer} ref={containerRef} style={initStyle}>
      {measurements}
    </div>
  );
}

export default Measurements;
