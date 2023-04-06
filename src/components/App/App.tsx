import { useRef } from "react";
import useElementWidth from "../../hooks/useElementWidth";
import styles from "./App.module.scss";
import Form from "../form/Form";
import CardsDisplayer from "../cardsDisplayer/CardsDisplayer";
import { UserDataProvider } from "../../contexts/UserDataContext";
import AppWidthContext from "../../contexts/AppWidthContext";

const { mainContainer, appWrapper } = styles;
function App() {
  const appRef = useRef<HTMLDivElement>(null);
  const appWidth = useElementWidth(appRef);
  const fontSize = appWidth > 500 ? appWidth / 30 : 16;
  const initStyle = { fontSize };

  return (
    <div className={mainContainer}>
      <div className={appWrapper} ref={appRef} style={initStyle}>
        <AppWidthContext.Provider value={appWidth}>
          <header>
            <img src="check.svg" alt="A double check logo" />
            <h1>BodyScope</h1>
          </header>
          <UserDataProvider>
            <Form />
            <CardsDisplayer />
          </UserDataProvider>
        </AppWidthContext.Provider>
      </div>
    </div>
  );
}

export default App;
