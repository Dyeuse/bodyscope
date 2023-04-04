type MeasurementProps = {
  name:
    | "gender"
    | "bodyFat"
    | "activity"
    | "height"
    | "weight"
    | "waist"
    | "neck";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min: number;
  max: number;
  children: string;
};

function Measurement({
  name,
  value,
  onChange,
  min,
  max,
  children,
}: MeasurementProps) {
  return (
    <div>
      <label htmlFor={name}>{children}</label>
      <input
        type="number"
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        min={min}
        max={max}
        required
      />
    </div>
  );
}

export default Measurement;
