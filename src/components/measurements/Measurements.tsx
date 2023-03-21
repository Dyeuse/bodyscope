import { useContext, useRef } from "react";
import LanguageContext from "../../contexts/LanguageContext";
import measurementsTexts from "./measurementsTexts";
import useElementWidth from "../../hooks/useElementWidth";
import styles from "./Measurements.module.scss";

const { measurementsContainer } = styles;

type MeasurementProps = {
  title: string;
  min: number;
  max: number;
  children: string;
};

function Measurement({ title, min, max, children }: MeasurementProps) {
  return (
    <div>
      <label htmlFor={title}>{children}</label>
      <input type="number" name={title} id={title} min={min} max={max} />
    </div>
  );
}

function Measurements() {
  const language = useContext(LanguageContext);
  const containerRef = useRef<HTMLDivElement>(null);
  const containerWidth = useElementWidth(containerRef);
  const fontSize = containerWidth ? Math.round(containerWidth / 15) : 20;
  const initStyle = { fontSize };

  const measurements = measurementsTexts[language].map((measurement) => (
    <Measurement
      key={measurement.name}
      title={measurement.name}
      min={measurement.min}
      max={measurement.max}
    >
      {measurement.title}
    </Measurement>
  ));

  return (
    <div className={measurementsContainer} ref={containerRef} style={initStyle}>
      {measurements}
    </div>
  );
}

export default Measurements;
