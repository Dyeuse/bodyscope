import styles from "./CardsDisplayer.module.scss";

const { grid } = styles;

interface FixedLengthArray<T, L extends number> extends Array<T> {
  0: T;
  length: L;
}

type CardsDisplayerProps = {
  children: FixedLengthArray<JSX.Element, 5>;
};

function CardsDisplayer({ children }: CardsDisplayerProps) {
  return <div className={grid}>{children}</div>;
}

export default CardsDisplayer;
