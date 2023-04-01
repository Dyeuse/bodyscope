import { useState, useRef } from "react";
import useElementWidth from "../../hooks/useElementWidth";
import styles from "./Card.module.scss";

const { card, front, back, hidden, inverted } = styles;

type CardProps = {
  title1: string;
  title2: string;
  definition: string;
  value: string | number;
  position: string;
};

function Card({ title1, title2, definition, value, position }: CardProps) {
  const [isFront, setIsFront] = useState(true);
  const cardRef = useRef<HTMLDivElement>(null);
  const cardWidth = useElementWidth(cardRef);
  const fontSize = cardWidth ? Math.round(cardWidth / 10) : 20;
  const initStyle = { fontSize, gridArea: `c${position}` };

  return (
    <div className={card} ref={cardRef} style={initStyle}>
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
          src="src/media/flip.svg"
          alt="Double arrows"
          className={isFront ? inverted : ""}
        />
      </button>
    </div>
  );
}

export default Card;
