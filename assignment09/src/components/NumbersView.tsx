import React, { useState } from 'react';

export const NumbersView = (): JSX.Element => {
    const [number, setNumber] = useState(0);

    const changeNumber = (number: string): void => {
        console.log(number);
        setNumber(parseInt(number));
    };

    return (
        <>
            <input type='number' onChange={(event) => changeNumber(event.currentTarget.value)}></input>
            <p>{number}</p>
        </>
    );
};
