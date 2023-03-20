import styles from "./Options.module.scss";

const { selectWrapper } = styles;

type SelectOptionsProps = {
  name: string;
  children: string;
  options: { label: string; value: number | string }[];
};

function SelectOptions({ name, children, options }: SelectOptionsProps) {
  const allOptions = options.map(({ label, value }) => (
    <option key={label} value={value}>
      {label}
    </option>
  ));
  return (
    <div className={selectWrapper}>
      <label htmlFor={name}>{children}</label>
      <select name={name} id={name}>
        {allOptions}
      </select>
    </div>
  );
}

export default SelectOptions;
