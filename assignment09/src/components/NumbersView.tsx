import React, { useState } from 'react';
import { FormattedNumber } from 'react-intl';
import { ContentContainer } from '../styles/ContentContainer';
import { Headline } from '../styles/Headline';
import { TextContainer } from '../styles/TextContainer';
import { InputField } from '../styles/InputField';

export const NumbersView = (): JSX.Element => {
    const [number, setNumber] = useState(0);

    const changeNumber = (number: string): void => {
        console.log(number);
        setNumber(parseFloat(number));
    };

    return (
        <ContentContainer>
            <InputField type="number" onChange={(event) => changeNumber(event.currentTarget.value)} />
            <Headline>Numbers:</Headline>
            <TextContainer>
                <FormattedNumber value={number} />
            </TextContainer>
            <TextContainer>
                <FormattedNumber style="unit" unit="kilobyte" value={number} />
            </TextContainer>
            <TextContainer>
                <FormattedNumber style="currency" currency="EUR" value={number} />
            </TextContainer>
            <TextContainer>
                <FormattedNumber style="currency" currency="EUR" minimumFractionDigits={5} value={number} />
            </TextContainer>
        </ContentContainer>
    );
};
