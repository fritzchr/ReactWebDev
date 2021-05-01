import React, { useEffect } from 'react';
import styled from 'styled-components';
import { observer, useLocalObservable } from 'mobx-react';
import { Store } from '../model/Store';
import { GlobalStyles } from '../styles/GlobalStyles';
import { Container } from '../styles/Container';
import { NavigationHeader } from './NavigationHeader';
import { Content } from './Content';
import { SearchView } from './SearchView';
import { LoadingView } from './LoadingView';
import { Pagination } from './Pagination';

const ContentContainer = styled.div`
    margin-left: 20px;
    margin-right: 20px;
`;

function createStore(): Store {
    return new Store();
}

export const App = observer(
    (): JSX.Element => {
        const store = useLocalObservable(createStore);

        useEffect(() => {
            if (store.currentScreen === 'Trending') {
                store.fetch();
            }
        }, [store, store.currentScreen]);

        return (
            <Container>
                <GlobalStyles />
                <NavigationHeader store={store} />
                <ContentContainer>
                    {store.currentScreen === 'Trending' ? (
                        <>
                            {store.isLoading ? (
                                <LoadingView />
                            ) : (
                                <>
                                    <Content content={store.gifs}></Content>
                                </>
                            )}
                        </>
                    ) : (
                        <SearchView store={store} />
                    )}
                </ContentContainer>
                {store.currentScreen === 'Search' && store.searchString === '' ? <div /> : <Pagination store={store} />}
            </Container>
        );
    }
);
