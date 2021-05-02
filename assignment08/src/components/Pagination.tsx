import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

//decided to pass currentPage as attribute even though getCurrentPage returns currentPage + 1 as string
//so that i don't have to use parseInt -/+ 1 on each operation
//could've made a function in this component to return currentPage + 1 as string but decided to keep it in Store
//to make use of @computed once
type Props = {
    setPage (page: number): void;
    getCurrentPage (): string;
    maxPage: number;
    currentPage: number;
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
    ({ setPage, getCurrentPage, maxPage, currentPage }: Props): JSX.Element => {

        const changePage = (page: number) => {
            //page can't be greater than maxPage
            if (page >= maxPage) {
                setPage(maxPage - 1);
            }
            //page can only be a number
            else if (isNaN(page)) {
                setPage(0);
            } else {
                setPage(page);
            }
        };

        return (
            <PaginationContainer>
                <PaginationButton disabled={(currentPage - 1) <= 0} onClick={() => changePage(currentPage - 1)}>
                    <ArrowBackIosIcon />
                </PaginationButton>
                <PageNumber
                    type='text'
                    value={getCurrentPage()}
                    onChange={(event) => changePage(parseInt(event.target.value) - 1)}
                ></PageNumber>
                <MaxPageNumber> of {maxPage}</MaxPageNumber>
                <PaginationButton disabled={currentPage + 1 >= maxPage} onClick={() => changePage(currentPage + 1)}>
                    <ArrowForwardIosIcon />
                </PaginationButton>
            </PaginationContainer>
        );
    }
);
