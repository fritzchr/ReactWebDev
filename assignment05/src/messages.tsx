import React from 'react';
import styled from 'styled-components';

type Props = {
    messages: {subject: string, body: string, isRead: boolean}[];
    messageCounter: number;
    setToIsRead: (index: number) => void;
};

const MessageCounterText = styled.p`
    color: red;
    font-weight: bold;
`;

const ReadMessagesContainer = styled.div`
    border: ${(props) => props.theme.messageBoxBorder};
    border-radius: 5px;
    color: ${(props) => props.theme.textColor};
    margin: 0px 20px 20px 20px;
    padding: 20px 20px 20px 20px;

`;

const UnreadMessagesContainer = styled.div`
    background-color: ${(props) => props.theme.messageBoxColor};
    border: ${(props) => props.theme.messageBoxBorder};
    border-radius: 5px;
    color: ${(props) => props.theme.textColor};
    margin: 0px 20px 20px 20px;
    padding: 20px 20px 20px 20px;
`;

export const Messages = (props: Props): JSX.Element => {
    return(
        <div className='inboxContainer'>
            <MessageCounterText>{props.messages.length == 0 &&
                'You have no messages!'}</MessageCounterText>
            <MessageCounterText>{props.messageCounter > 0 && 
                (props.messageCounter == 1 ? 'You have ' + props.messageCounter + ' unread message!' : 'You have ' + props.messageCounter + ' unread messages!')}</MessageCounterText><br/>
            <div className='messageContainer'>
                {props.messages.map((msg, index) =>
                    (!msg.isRead 
                        ? <UnreadMessagesContainer key={index} onClick={() => props.setToIsRead(index)}>
                            Subject: {msg.subject} <br/><br/> Body: {msg.body}</UnreadMessagesContainer>
                        : <ReadMessagesContainer>
                            Subject: {msg.subject} <br/><br/> Body: {msg.body} </ReadMessagesContainer>))}
            </div>
        </div>
    );
};
