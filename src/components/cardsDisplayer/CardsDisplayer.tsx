import Card from "../card/Card";
import styles from "./CardsDisplayer.module.scss";
import cardsTexts from "./cardsTexts";
import { useUserData } from "../../contexts/UserDataContext";

const { grid } = styles;

function CardsDisplayer() {
  const userData = useUserData();

  const cards = cardsTexts[userData.language].map((card) => {
    const { id, title1, title2, definition, position } = card;
    const value = userData.results[card.id];
    return (
      <Card
        key={id}
        title1={title1}
        title2={title2}
        definition={definition}
        position={position}
        value={value}
      />
    );
  });

  return <div className={grid}>{cards}</div>;
}

export default CardsDisplayer;
