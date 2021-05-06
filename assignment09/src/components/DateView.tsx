import React, { useState } from 'react';
import { FormattedDate } from 'react-intl';
import { ContentContainer } from '../styles/ContentContainer';
import { Headline } from '../styles/Headline';
import { InputField } from '../styles/InputField';
import { TextContainer } from '../styles/TextContainer';

//current date for initialization
const currentDate = new Date().toLocaleDateString('en');

export const DateView = (): JSX.Element => {
    const [date, setDate] = useState(currentDate);

    const changeDate = (date: string) => {
        setDate(date);
    };

    return (
        <ContentContainer>
            <InputField type='date' onChange={(event) => changeDate(event.target.value)} />
            <Headline>Date: </Headline>
            <TextContainer>
                <FormattedDate value={new Date(date)} />
            </TextContainer>
            <TextContainer>
                <FormattedDate value={new Date(date)} year='numeric' month='long' day='2-digit' />
            </TextContainer>
            <TextContainer>
                <FormattedDate value={new Date(date)} year="2-digit" month="short" day="numeric"/>
            </TextContainer>
        </ContentContainer>
    );
};
