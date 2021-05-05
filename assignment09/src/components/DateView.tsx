import React, {useState} from 'react';
import { FormattedDate } from 'react-intl';

export const DateView = (): JSX.Element => {
    const [date, setDate] = useState('');

    const changeDate = (date: string) => {
        setDate(date);
    };


    return (
        <>
            <input type='date' onChange={(event) => changeDate(event.target.value)}></input>
            <FormattedDate value={new Date(date)}/>
        </>
    );
};
