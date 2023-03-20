import styles from "./App.module.scss";
import Form from "../form/Form";
import CardsDisplayer from "../cardsDisplayer/CardsDisplayer";
import { get5FakeCards } from "../../utils/fakeCards";
import LanguageContext from "../../contexts/LanguageContext";

const { mainContainer, appWrapper } = styles;
function App() {
  return (
    <div className={mainContainer}>
      <div className={appWrapper}>
        <h1>BodyScope</h1>
        <LanguageContext.Provider value="french">
          <Form />
          <CardsDisplayer>{get5FakeCards()}</CardsDisplayer>
        </LanguageContext.Provider>
      </div>
    </div>
  );
}

export default App;
