import styles from "./App.module.scss";
import Form from "../form/Form";
import CardsDisplayer from "../cardsDisplayer/CardsDisplayer";
import { get5FakeCards } from "../../utils/fakeCards";

const { mainContainer, appWrapper } = styles;
function App() {
  return (
    <div className={mainContainer}>
      <div className={appWrapper}>
        <h1>BodyScope</h1>
        <Form />
        <CardsDisplayer>{get5FakeCards()}</CardsDisplayer>
      </div>
    </div>
  );
}

export default App;
