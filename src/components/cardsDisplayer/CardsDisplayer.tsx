import Card from "../card/Card";
import styles from "./CardsDisplayer.module.scss";
import cardsTexts from "../../data/cardsTexts";
import { useUserData } from "../../contexts/UserDataContext";

const { cardsContainer } = styles;

function CardsDisplayer() {
  const userData = useUserData();

  const cards = cardsTexts[userData.language].map((card) => {
    const { id, title1, title2, definition, info } = card;
    const value = userData.results[card.id];
    return (
      <Card
        key={id}
        title1={title1}
        title2={title2}
        definition={definition}
        info={info}
        value={value}
      />
    );
  });

  return <div className={cardsContainer}>{cards}</div>;
}

export default CardsDisplayer;
