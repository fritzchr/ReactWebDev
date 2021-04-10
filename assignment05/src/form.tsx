import React, { FormEvent, useState } from 'react';
import styled from 'styled-components';

interface Message {
    subject: string;
    body: string;
    isRead: boolean;
}

type Props = {
    addMessage: (value: Message) => void;
}

const InputField = styled.input `
    width: 100%;
    height: 25px;
    border: ${(props) => props.theme.inputFieldBorder};
    border-radius: 5px;
    background: ${(props) => props.theme.inputFieldColor};
    color: ${(props) => props.theme.textColor};
    &:focus {
        outline: none;
    }
`;

const TextArea = styled.textarea `
    width: 100%;
    height: 75px;
    border: ${(props) => props.theme.inputFieldBorder};
    border-radius: 5px;
    background: ${(props) => props.theme.inputFieldColor};
    color: ${(props) => props.theme.textColor};
    resize: none;
    &:focus {
        outline: none;
    }
`;

const SubmitBtn = styled.button`
    width: 100px;
    height: 40px;
    background-color: ${(props) => props.theme.submitButtonColor};
    font-weight: bold;
    margin-top: 20px;
    border: none;
    color: ${(props) => props.theme.textColor};

    &:hover {
        box-shadow: 2px 2px 2px 1px;
    }

    &:disabled {
        color: grey;
    }

    &:focus {
        outline: none;
    }
`;

const HeadingText = styled.p`
    color: ${(props) => props.theme.textColor};
`;

export const Form = (props: Props): JSX.Element => {
    const[subject, setSubject] = useState('');
    const[body, setBody] = useState('');

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        props.addMessage({subject: subject, body: body, isRead: false});

        //reset form after submitting
        setSubject('');
        setBody('');
    };

    return (
        <div className='formContainer'>
            <form onSubmit={(event) => handleSubmit(event)}>
                <HeadingText>Subject:</HeadingText>
                <InputField
                    type="text"
                    name="subject"
                    onChange={(event) => setSubject(event.target.value)}
                    value={subject || ''}
                />
                <HeadingText>Body:</HeadingText>
                <TextArea
                    name="body"
                    onChange={(event) => setBody(event.target.value)}
                    value={body || ''}
                />
                <br/>
                <SubmitBtn disabled={!subject || !body}>Submit</SubmitBtn>
            </form>
        </div>
    );
}