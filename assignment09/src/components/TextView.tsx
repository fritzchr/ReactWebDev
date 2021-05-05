import React, { useState } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

export const messages = {
    en: {
        gender: '{gender, select, male {He} female {She} other {not specified}}',
        plural: '{itemCount, plural, =0 {no apples} =1 {# apple} other {# apples}}',
        pluralWithGender:
            '{gender, select, male {He} female {She} other {not specified}} has {itemCount, plural, =0 {no apples} =1 {# apple} other {# apples}}!',
    },
    de: {
        gender: '{gender, select, male {Er} female {Sie} other {nicht angegeben}}',
        plural: '{itemCount, plural, =0 {keine Aepfel} =1 {# Apfel} other {# Aepfel}}',
        pluralWithGender:
            '{gender, select, male {Er} female {Sie} other {nicht angegeben}} hat {itemCount, plural, =0 {keine Äpfel} =1 {# Apfel} other {# Äpfel}}!',
    },
};

const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const TextView = (): JSX.Element => {
    const [number, setNumber] = useState(0);
    const [gender, setGender] = useState('male');

    return (
        <>
            <InputContainer>
                <input type='number' onChange={(event) => setNumber(parseInt(event.currentTarget.value))} />
                <select value={gender} onChange={(event) => setGender(event.currentTarget.value)}>
                    <option value='male'>male</option>
                    <option value='female'>female</option>
                </select>
            </InputContainer>
            <p>{gender}</p>
            <span>
                <FormattedMessage id={'gender'} values={{ gender: gender }} />
            </span>
            <span>
                <FormattedMessage id={'plural'} values={{ itemCount: number }} />
            </span>
            <span>
                <FormattedMessage id={'pluralWithGender'} values={{ gender: gender, itemCount: number }} />
            </span>
        </>
    );
};
