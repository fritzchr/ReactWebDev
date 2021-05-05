import React, { useEffect } from 'react';
import { observer, useLocalObservable } from 'mobx-react';
import { Store } from '../model/Store';
import { GlobalStyles } from '../styles/GlobalStyles';
import { Container } from '../styles/Container';
import { NavigationHeader } from './NavigationHeader';
import { Content } from './Content';
import { LoadingView } from './LoadingView';
import { Pagination } from './Pagination';
import { SearchField } from '../styles/SearchField';
import { ContentContainer } from '../styles/ContentContainer';

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

        const setScreen = (screen: string): void => {
            store.changeScreen(screen);
        };

        const setPage = (page: number): void => {
            store.setPage(page);
            store.fetch();
        }

        const getCurrentPageNumber = (): string => {
            return store.getCurrentPageNumber;
        }

        return (
            <Container>
                <GlobalStyles />
                <NavigationHeader setScreen={setScreen} />
                <ContentContainer>
                    {store.currentScreen === 'Trending' ? (
                        <>
                            {store.isLoading ? <LoadingView /> : <Content content={store.gifs}></Content>}
                        </>
                    ) : (
                        <>
                            <SearchField
                                type='text'
                                name='search'
                                placeholder='Search...'
                                onChange={(event) => store.search(event.target.value)}
                                value={store.searchString}
                            />
                            {store.isLoading ? <LoadingView /> : <Content content={store.gifs} />}
                        </>
                    )}
                </ContentContainer>
                {store.currentScreen === 'Search' && store.searchString === '' ? 
                    <div /> 
                : 
                    <Pagination 
                        setPage={setPage}
                        getCurrentPage={getCurrentPageNumber}
                        maxPage={store.maxPage}
                        currentPage={store.currentPage} 
                    />
                }
            </Container>
        );
    }
);
