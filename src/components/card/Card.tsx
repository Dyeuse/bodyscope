import { useState, useContext } from "react";
import AppWidthContext from "../../contexts/AppWidthContext";
import calcCardWidth from "../../utils/calcCardWidth";
import styles from "./Card.module.scss";

const { card, front, back, hidden, inverted } = styles;

type CardProps = {
  title1: string;
  title2: string;
  definition: string;
  value: string | number;
};

function Card({ title1, title2, definition, value }: CardProps) {
  const [isFront, setIsFront] = useState(true);
  const appWidth = useContext(AppWidthContext);
  const width = calcCardWidth(appWidth);
  const fontSize = width / 10;
  const initStyle = { fontSize, width };

  return (
    <div className={card} style={initStyle}>
      <div className={`${front} ${isFront ? "" : hidden}`} data-testid="front">
        <h2>{title1}</h2>
        <p>{value}</p>
      </div>
      <div className={`${back} ${isFront ? hidden : ""}`} data-testid="back">
        <h3>{title2}</h3>
        <p>{definition}</p>
      </div>
      <button type="button" onClick={() => setIsFront(!isFront)}>
        <img
          src="flip.svg"
          alt="Double arrows"
          className={isFront ? inverted : ""}
        />
      </button>
    </div>
  );
}

export default Card;
