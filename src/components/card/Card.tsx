import { useState, useRef } from "react";
import useElementWidth from "../../hooks/useElementWidth";
import styles from "./Card.module.scss";

const { card, front, back, hidden, inverted } = styles;

type CardProps = {
  title: string;
  definition: string;
  value: string;
  position: string;
};

function Card({ title, definition, value, position }: CardProps) {
  const [isFront, setIsFront] = useState(true);
  const cardRef = useRef<HTMLDivElement>(null);
  const cardWidth = useElementWidth(cardRef);
  const fontSize = cardWidth ? Math.round(cardWidth / 10) : 20;
  const initStyle = { fontSize, gridArea: `c${position}` };

  return (
    <div className={card} ref={cardRef} style={initStyle}>
      <div className={`${front} ${isFront ? "" : hidden}`} data-testid="front">
        <h2>{title}</h2>
        <p>{value}</p>
      </div>
      <div className={`${back} ${isFront ? hidden : ""}`} data-testid="back">
        <h3>Stand for</h3>
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
