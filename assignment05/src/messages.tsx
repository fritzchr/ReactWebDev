import React from 'react';

type Props = {
    messages: {subject: string, body: string, isRead: boolean}[];
    messageCounter: number;
    setToIsRead: (index: number) => void;
};

export const Messages = (props: Props): JSX.Element => {
    return(
        <div className='inboxContainer'>
            <p className='unreadMessagesTxt'>You have {props.messageCounter} unread messages!</p><br/>
            <div className='messageContainer'>
                {props.messages.map((msg, index) => 
                    <div className={!msg.isRead ? 'unreadMessages' : 'readMessages'} key={index} onClick={() => !msg.isRead ? props.setToIsRead(index) : null}>
                        Subject: {msg.subject} <br/> Body: {msg.body}
                    </div>)}
            </div>
        </div>
    );
};
