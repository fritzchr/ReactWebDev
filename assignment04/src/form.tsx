import React, { FormEvent, useState } from 'react';
import styled from 'styled-components';
// import { MdDone } from 'react-icons/md';


interface Message {
    subject: string;
    body: string;
    isRead: boolean;
}

type Props = {
    addMessage: (value: Message) => void;
}

//TODO styling and rename styled components 

const InputField = styled.input `
    width: 500px
`;

const TextArea = styled.textarea `
    width: 500px
`;

const SubmitBtn = styled.button`
    background-color: steelblue
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
                <p>Subject:</p>
                <InputField
                    type="text"
                    name="subject"
                    onChange={(event) => setSubject(event.target.value)}
                    value={subject || ''}
                />
                <p>Body:</p>
                <TextArea
                    name="body"
                    onChange={(event) => setBody(event.target.value)}
                    value={body || ''}
                />
                <br/>
                <SubmitBtn>Submit</SubmitBtn>
            </form>
        </div>
    );
}