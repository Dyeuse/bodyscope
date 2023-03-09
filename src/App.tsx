import "./App.css";
import Form from "./components/form/Form";
import CardsDisplayer from "./components/cardsDisplayer/CardsDisplayer";
import { get5FakeCards } from "./utils/fakeCards";

function App() {
  return (
    <div className="container">
      <h1>BodyScope</h1>
      <Form />
      <CardsDisplayer>{get5FakeCards()}</CardsDisplayer>
    </div>
  );
}

export default App;
