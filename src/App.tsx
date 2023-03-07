import "./App.css";
import Options from "./components/options/Options";
import Measurements from "./components/measurements/Measurements";
import CardsDisplayer from "./components/cardsDisplayer/CardsDisplayer";
import { get5FakeCards } from "./utils/fakeCards";

function App() {
  return (
    <>
      <h1>BodyScope</h1>
      <Options />
      <Measurements />
      <CardsDisplayer>{get5FakeCards()}</CardsDisplayer>
    </>
  );
}

export default App;
