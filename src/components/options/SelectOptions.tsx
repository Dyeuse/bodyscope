import styles from "./Options.module.scss";

const { selectWrapper } = styles;

type SelectOptionsProps = {
  name: string;
  children: string;
  data: { label: string; value: number | string }[];
};

function SelectOptions({ name, children, data }: SelectOptionsProps) {
  const options = data.map(({ label, value }) => (
    <option key={label} value={value}>
      {label}
    </option>
  ));
  return (
    <div className={selectWrapper}>
      <label htmlFor={name}>{children}</label>
      <select name={name} id={name}>
        {options}
      </select>
    </div>
  );
}

export default SelectOptions;
