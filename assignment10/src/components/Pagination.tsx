import React from 'react';
import styled from 'styled-components';

type Props = {
    page: number;
    maxPages: number;
    setPage: (page: number) => void;
};

const Container = styled.div`
    margin: 16px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const Pagination = ({ page, maxPages, setPage }: Props): JSX.Element => {
    return (
        <Container>
            <button id='prev' onClick={() => setPage(page - 1)} disabled={page <= 1}>Previous</button>
            <p id='page'>{page + ' / ' + maxPages}</p>
            <button id='next' onClick={() => setPage(page + 1)} disabled={page >= maxPages}>Next</button>
        </Container>
    );
};
