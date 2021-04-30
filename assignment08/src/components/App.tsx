import React, { useEffect } from 'react';
import styled from 'styled-components';
import { observer, useLocalObservable } from 'mobx-react';
import { Store } from '../model/Store';
import { GlobalStyles } from '../styles/GlobalStyles';
import { NavigationHeader } from './NavigationHeader';

// Implement a viewer for the Giphy API with the following menu items
// Search field allows to search gifs
//     Include a pagination
//         Previous and Next link
//         Editable text field holding the current value
//         Avoid passing non-existing pages
//         Show number of pages
//             Giphy API has an error loading with high offset
// Show trending gifs
//     Include a pagination
// Make sure that the right amount of requests is sent
// Show a loader text while the request is being sent
// Use autorun and useLocalObservable for creating a MobX store automatically requesting required data

// const API_KEY = "XdaoZq9JMeywVQvulWH47Yv2ZPAY6AC0";

const Container = styled.div`
  display: 'flex';
`;

function createStore(): Store {
    return new Store();
}

export const App = observer(
    (): JSX.Element => {
        const store = useLocalObservable(createStore);

        //TODO: implement useEffect hook to destroy store
        useEffect(() => {
          if(store.currentScreen === 'Trending') {
            store.fetch();
          }
        }, [store, store.currentScreen]);

        return (
            <Container>
                <GlobalStyles />
                {console.log('in render: ' + store.gifs.map((item) => item.title + " " + item.url))}
                <NavigationHeader />

                    <>
                        {store.gifs.map((item, index) => {
                            {console.log('in map: ' + store.gifs.map((item) => item.title))}
                            <>
                            <p>Title:</p>
                            <p key={index}>{item.title}</p>;
                            </>
                        })}
                    </>
                
            </Container>
        );
    }
);
