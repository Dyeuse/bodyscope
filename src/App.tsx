import "./App.css";
import CardsDisplayer from "./components/cardsDisplayer/CardsDisplayer";
import Card from "./components/card/Card";

function App() {
  return (
    <>
      <h1>BodyScope</h1>
      <CardsDisplayer>
        <Card
          title="Test1"
          definition="Test1 / short explanation or definition"
          value="11"
          position="1"
        />
        <Card
          title="Test2"
          definition="Test2 / short explanation or definition"
          value="22"
          position="2"
        />
        <Card
          title="Test3"
          definition="Test3 / short explanation or definition"
          value="33"
          position="3"
        />
        <Card
          title="Test4"
          definition="Test4 / short explanation or definition"
          value="44"
          position="4"
        />
        <Card
          title="Test5"
          definition="Test5 / short explanation or definition"
          value="55"
          position="5"
        />
      </CardsDisplayer>
    </>
  );
}

export default App;
