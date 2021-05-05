import React, {useState} from 'react';
import { FormattedDate } from 'react-intl';
import { ContentContainer } from '../styles/ContentContainer';
import { Headline } from '../styles/Headline';
import { InputField } from '../styles/InputField';

//current date for initialization 
const currentDate = new Date().toLocaleDateString('en');

export const DateView = (): JSX.Element => {
    const [date, setDate] = useState(currentDate);

    const changeDate = (date: string) => {
        setDate(date);
    };

    return (
        <ContentContainer>
            <InputField type='date' onChange={(event) => changeDate(event.target.value)}/>
            <Headline>Date: </Headline>
            <FormattedDate value={new Date(date)}/>
        </ContentContainer>
    );
};
