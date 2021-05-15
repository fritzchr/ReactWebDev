import React, { useState } from 'react';
import { ListView } from './ListView';
import { Pagination } from './Pagination';

export const createFakeData = (page: number): string[] => {
    const arr = [];
    for (let i = (page - 1) * 20; i < 20 * page; i++) {
        arr.push('Entry ' + i);
    }
    return arr;
}

export const App = (): JSX.Element => {
    const [page, setPage] = useState(1);

    return (
        <>
            <ListView items={createFakeData(page)} />
            <Pagination page={page} maxPages={10} setPage={setPage} />
        </>
    );
};
