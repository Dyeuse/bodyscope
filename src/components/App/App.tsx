import styles from "./App.module.scss";
import Form from "../form/Form";
import CardsDisplayer from "../cardsDisplayer/CardsDisplayer";
import { UserDataProvider } from "../../contexts/UserDataContext";

const { mainContainer, appWrapper } = styles;
function App() {
  return (
    <div className={mainContainer}>
      <div className={appWrapper}>
        <h1>BodyScope</h1>
        <UserDataProvider>
          <Form />
          <CardsDisplayer />
        </UserDataProvider>
      </div>
    </div>
  );
}

export default App;
