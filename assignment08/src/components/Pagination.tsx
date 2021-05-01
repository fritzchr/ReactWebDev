import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Store } from '../model/Store';

type Props = {
    store: Store;
};

const PaginationContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const PaginationButton = styled.button`
    background: none;
    border: none;
    &:hover {
        color: #436d99;
    }
    &:focus {
        outline: none;
    }
    &:disabled {
        color:grey;
    }
`;

const PageNumber = styled.input`
    font-size: 15px;
    border: none;
    width: 40px;
    &:focus {
        outline: none;
    }
`;

const MaxPageNumber = styled.p`
    font-size: 15px;
`;

export const Pagination = observer(
    ({ store }: Props): JSX.Element => {
        const setPage = (page: number) => {
            //page can't be greater than maxPage
            if (page >= store.maxPage) {
                store.setPage(store.maxPage - 1);
                store.fetch();
            }
            //page can only be a number
            else if (isNaN(page)) {
                store.setPage(0);
                store.fetch();
            } else {
                store.setPage(page);
                store.fetch();
            }
        };

        return (
            <PaginationContainer>
                <PaginationButton disabled={store.currentPage <= 0} onClick={() => setPage(store.currentPage - 1)}>
                    <ArrowBackIosIcon />
                </PaginationButton>
                <PageNumber
                    type='text'
                    value={store.getCurrentPageNumber}
                    onChange={(event) => setPage(parseInt(event.target.value) - 1)}
                ></PageNumber>
                <MaxPageNumber> of {store.maxPage}</MaxPageNumber>
                <PaginationButton disabled={store.currentPage + 1 >= store.maxPage} onClick={() => setPage(store.currentPage + 1)}>
                    <ArrowForwardIosIcon />
                </PaginationButton>
            </PaginationContainer>
        );
    }
);
