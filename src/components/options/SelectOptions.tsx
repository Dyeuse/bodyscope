import styles from "./Options.module.scss";

const { selectWrapper } = styles;

type SelectOptionsProps = {
  name: string;
  selectedValue: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children: string;
  options: { label: string; value: number | string }[];
};

function SelectOptions({
  name,
  selectedValue,
  onChange,
  children,
  options,
}: SelectOptionsProps) {
  const allOptions = options.map(({ label, value }) => (
    <option key={label} value={value}>
      {label}
    </option>
  ));
  return (
    <div className={selectWrapper}>
      <label htmlFor={name}>{children}</label>
      <select name={name} value={selectedValue} onChange={onChange} id={name}>
        {allOptions}
      </select>
    </div>
  );
}

export default SelectOptions;
