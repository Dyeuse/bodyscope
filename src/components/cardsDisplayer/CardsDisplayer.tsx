import styles from "./CardsDisplayer.module.scss";
import { TupleWith5ReactNodes } from "../../types/TupleOfNItems";

const { grid } = styles;

type CardsDisplayerProps = {
  children: TupleWith5ReactNodes;
};

function CardsDisplayer({ children }: CardsDisplayerProps) {
  return <div className={grid}>{children}</div>;
}

export default CardsDisplayer;
