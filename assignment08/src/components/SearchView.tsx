import React, { useEffect } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import { Store } from '../model/Store';
import { Content } from './Content';
import { LoadingView } from './LoadingView';

type Props = {
    store: Store;
};

const Container = styled.div`
    display: 'flex';
`;

const SearchField = styled.input`
    width: 100%;
    height: 25px;
    margin-top: 15px;
    margin-bottom: 15px;
    border: solid;
    border-radius: 5px;
    &:focus {
        outline: none;
    }
`;

export const SearchView = observer(
    ({ store }: Props): JSX.Element => {
        useEffect(() => {
            if (store.currentScreen === 'Search') {
                store.fetch();
            }
        }, [store, store.currentScreen]);

        return (
            <Container>
                <SearchField
                    type='text'
                    name='search'
                    placeholder='Search...'
                    onChange={(event) => store.search(event.target.value)}
                    value={store.searchString}
                />
                {store.isLoading ? <LoadingView /> : <Content content={store.gifs} />}
            </Container>
        );
    }
);
