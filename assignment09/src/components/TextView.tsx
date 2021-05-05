import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { ContentContainer } from '../styles/ContentContainer';
import { Headline } from '../styles/Headline';
import { TextContainer } from '../styles/TextContainer';
import { InputContainer } from '../styles/InputContainer';
import { InputField } from '../styles/InputField';

export const messages = {
    en: {
        gender: '{gender, select, male {male} female {female} other {not specified}}',
        message_one:
            '{gender, select, male {He} female {She} other {not specified}} has {itemCount, plural, =0 {no apples} =1 {# apple} other {# apples}}.',
        message_two:
            '{gender, select, male {He} female {She} other {not specified}} invited {count, plural, =0 {nobody} =1 {# person} other {# people}} to {gender, select, male {his} female {her} other {not specified}} party.',
    },
    de: {
        gender: '{gender, select, male {männlich} female {weiblich} other {nicht angegeben}}',
        message_one:
            '{gender, select, male {Er} female {Sie} other {nicht angegeben}} hat {itemCount, plural, =0 {keine Äpfel} =1 {# Apfel} other {# Äpfel}}.',
        message_two:
            '{gender, select, male {Er} female {Sie} other {nicht angegeben}} hat {count, plural, =0 {niemand} =1 {# Person} other {# Personen}} zu {gender, select, male {seiner} female {ihrer} other {nicht angegeben}} Party eingeladen.',
    },
    fr: {
        gender: '{gender, select, male {homme} female {femme} other {non indiqué}}',
        message_one:
            '{gender, select, male {Il} female {Elle} other {non indiqué}} a {itemCount, plural, =0 {non pomme} =1 {# pomme} other {# pommes}}.',
        message_two:
            '{gender, select, male {Il} female {Elle} other {non indiqué}} a invité {count, plural, =0 {non personne} =1 {# personne} other {# personnes}} à {gender, select, male {sa} female {sa} other {non indiqué}} fête.',
    },
};

export const TextView = (): JSX.Element => {
    const [number, setNumber] = useState(0);
    const [gender, setGender] = useState('male');

    return (
        <>
            <InputContainer>
                <InputField type="number" onChange={(event) => setNumber(parseInt(event.currentTarget.value))} />
                <select value={gender} onChange={(event) => setGender(event.currentTarget.value)}>
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
            </InputContainer>
            <ContentContainer>
                <Headline>Gender: </Headline>
                <FormattedMessage id={'gender'} values={{ gender: gender }} />
                <Headline>Plural with Number and Gender:</Headline>
                <TextContainer>
                    <FormattedMessage
                        id={'message_one'}
                        values={{
                            gender: gender,
                            itemCount: number,
                        }}
                    />
                </TextContainer>
                <TextContainer>
                    <FormattedMessage
                        id={'message_two'}
                        values={{
                            gender: gender,
                            count: number,
                        }}
                    />
                </TextContainer>
            </ContentContainer>
        </>
    );
};
