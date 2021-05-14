import React, { useState } from 'react';
import { ListView } from './ListView';
import { Store } from '../model/Store';
import { Pagination } from './Pagination';

const store = new Store();

export const App = (): JSX.Element => {
    const [page, setPage] = useState(1);

    return (
        <>
            <ListView items={store.getDataForPage(page)} />
            <Pagination page={page} maxPages={10} setPage={setPage} />
        </>
    );
};
