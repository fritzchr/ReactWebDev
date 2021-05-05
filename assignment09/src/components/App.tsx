import React from 'react';
import { GlobalStyles } from '../styles/GlobalStyles';
import { NavigationHeader } from './NavigationHeader';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { NumbersView } from './NumbersView';
import { DateView } from './DateView';
import { TextView } from './TextView';

// function createStore(): Store {
//     return new Store();
// }

export const App = (): JSX.Element => {
    //const store = useLocalObservable(createStore);

    return (
        <>
            <Router>
                <GlobalStyles />
                <NavigationHeader />
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
        </>
    );
};
