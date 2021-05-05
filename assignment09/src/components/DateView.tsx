import React, {useState} from 'react';

export const DateView = (): JSX.Element => {
    const [date, setDate] = useState('');

    const changeDate = (date: string) => {
        setDate(date);
    };


    return (
        <>
            <input type='date' onChange={(event) => changeDate(event.target.value)}></input>
            <p>{date}</p>
        </>
    );
};
