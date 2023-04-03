import Measurement from "./Measurement";
import measurementsTexts from "../../data/measurementsTexts";
import {
  useUserData,
  useUserDataDispatch,
} from "../../contexts/UserDataContext";
import styles from "./Measurements.module.scss";

const { measurementsContainer } = styles;

function Measurements() {
  const userData = useUserData();
  const dispatch = useUserDataDispatch();

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

  return <div className={measurementsContainer}>{measurements}</div>;
}

export default Measurements;
