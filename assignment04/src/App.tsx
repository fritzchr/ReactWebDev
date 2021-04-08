import React, { useState } from "react";
import { Form } from "./form";
import { Messages } from "./messages";
import { NavigationHeader } from './navigation';

interface Message {
  subject: string;
  body: string;
  isRead: boolean;
}

export const App = (): JSX.Element => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageCounter, setMessageCounter] = useState(0);
  const [isMessageView, setMessageView] = useState(false);

  const addMessage = (message: {
    subject: string;
    body: string;
    isRead: boolean;
  }) => {
    setMessages([...messages, message]);
    setMessageCounter(messageCounter + 1);
    setMessageView(true);
  };

  const setToIsRead = (index: number) => {
    const message = [...messages];
    message[index].isRead = true;
    setMessages(message);
    setMessageCounter(messageCounter - 1);
  };

  return (
    <>
        <NavigationHeader displayMessageView={setMessageView} messageCounter={messageCounter}></NavigationHeader>
        <div className='content'>
            {!isMessageView ? 
                <Form addMessage={addMessage}></Form> :
                <Messages messages={messages} setToIsRead={setToIsRead} messageCounter={messageCounter}></Messages>
            }      
        </div>
    </>
  );
}
