import "./App.css";
import CardsDisplayer from "./components/cardsDisplayer/CardsDisplayer";
import { get5FakeCards } from "./utils/fakeCards";

function App() {
  return (
    <>
      <h1>BodyScope</h1>
      <CardsDisplayer>{get5FakeCards()}</CardsDisplayer>
    </>
  );
}

export default App;
