import React from 'react';
import { observer, useLocalObservable } from 'mobx-react';
import { Store } from '../model/Store';
import { GlobalStyles } from '../styles/GlobalStyles';
import { NavigationHeader } from './NavigationHeader';

function createStore(): Store {
    return new Store();
}

export const App = observer(
    (): JSX.Element => {
        const store = useLocalObservable(createStore);

        return (
            <>
            <GlobalStyles/>
            <NavigationHeader/>
            </>
        );
    }
);
