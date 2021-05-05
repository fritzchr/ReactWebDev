import React, { useState, useEffect } from "react";
import { GlobalStyles } from "../styles/GlobalStyles";
import { NavigationHeader } from "./NavigationHeader";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { IntlProvider } from "react-intl";
import { NumbersView } from "./NumbersView";
import { DateView } from "./DateView";
import { TextView } from "./TextView";
import { messages } from "./TextView";
import { Container } from "../styles/Container";

export const App = (): JSX.Element => {
  const [language, setLanguage] = useState(
    localStorage.getItem("storedLanguage") || "en"
  );

  useEffect(() => {
    localStorage.setItem("storedLanguage", language);
  }, [language]);

  const changeLanguage = (language: string): void => {
    setLanguage(language);
  };

  return (
    <>
      <IntlProvider locale={language} messages={messages[language]}>
        <Router>
          <GlobalStyles />
          <NavigationHeader
            language={language}
            changeLanguage={changeLanguage}
          />
          <Container>
            <Switch>
              <Route path="/numbers">
                <NumbersView />
              </Route>
              <Route path="/dates">
                <DateView />
              </Route>
              <Route path="/texts">
                <TextView />
              </Route>
            </Switch>
          </Container>
        </Router>
      </IntlProvider>
    </>
  );
};
