import React, {useState, useEffect} from 'react';
import { GlobalStyles } from '../styles/GlobalStyles';
import { NavigationHeader } from './NavigationHeader';
import { HashRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { NumbersView } from './NumbersView';
import { DateView } from './DateView';
import { TextView } from './TextView';

export const App = (): JSX.Element => {
    const history = useHistory();
    const [language, setLangauge] = useState('en');

    const changeLanguage = (language: string): void => {
        setLangauge(language);
    }

    return (
        <>
            <IntlProvider locale={language}>
                <Router>
                    <GlobalStyles />
                    <NavigationHeader language={language} changeLanguage={changeLanguage}/>
                    <Switch>
                        <Route path="/numbers">
                            <NumbersView/>
                        </Route>
                        <Route path="/dates">
                            <DateView/>
                        </Route>
                        <Route path="/text">
                            <TextView/>
                        </Route>
                    </Switch>
                </Router>
            </IntlProvider>
        </>
    );
};
