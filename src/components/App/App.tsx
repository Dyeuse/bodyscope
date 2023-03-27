import styles from "./App.module.scss";
import Form from "../form/Form";
import CardsDisplayer from "../cardsDisplayer/CardsDisplayer";
import { get5FakeCards } from "../../utils/fakeCards";
import LanguageContext from "../../contexts/LanguageContext";
import { UserDataProvider } from "../../contexts/UserDataContext";

const { mainContainer, appWrapper } = styles;
function App() {
  return (
    <div className={mainContainer}>
      <div className={appWrapper}>
        <h1>BodyScope</h1>
        <UserDataProvider>
          <LanguageContext.Provider value="english">
            <Form />
            <CardsDisplayer>{get5FakeCards()}</CardsDisplayer>
          </LanguageContext.Provider>
        </UserDataProvider>
      </div>
    </div>
  );
}

export default App;
