import React, { useState } from 'react';

export const TextView = (): JSX.Element => {
    const [text, setText] = useState('');

    const changeText = (text: string): void => {
        setText(text);
    }

    return (
        <>
            <input type='text' onChange={(event) => changeText(event.currentTarget.value)} />
            <p>{text}</p>
        </>
    );
};
