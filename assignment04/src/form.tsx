import React, { FormEvent, useState } from 'react';


interface Message {
    subject: string;
    body: string;
    isRead: boolean;
}

type Props = {
    addMessage: (value: Message) => void;
}

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
                <input
                    type="text"
                    name="subject"
                    onChange={(event) => setSubject(event.target.value)}
                    value={subject || ''}
                />
                <p>Body:</p>
                <textarea
                    name="body"
                    onChange={(event) => setBody(event.target.value)}
                    value={body || ''}
                />
                <br/>
                <button className='submitBtn'>Submit</button>
            </form>
        </div>
    );
}