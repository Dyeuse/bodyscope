import { useRef } from "react";
import useElementWidth from "../../hooks/useElementWidth";
import styles from "./Measurements.module.scss";

const { container } = styles;

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
  const containerRef = useRef<HTMLDivElement>(null);
  const containerWidth = useElementWidth(containerRef);
  const fontSize = containerWidth ? Math.round(containerWidth / 15) : 20;
  const initStyle = { fontSize };
  return (
    <div className={container} ref={containerRef} style={initStyle}>
      <Measurement title="height" min={100} max={220}>
        height (cm)
      </Measurement>
      <Measurement title="weight" min={30} max={220}>
        weight (kg)
      </Measurement>
      <Measurement title="waist" min={30} max={220}>
        waist (cm)
      </Measurement>
      <Measurement title="neck" min={20} max={80}>
        neck (cm)
      </Measurement>
    </div>
  );
}

export default Measurements;
