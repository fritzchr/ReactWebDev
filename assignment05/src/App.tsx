import React, { useState } from "react";
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Form } from "./form";
import { Messages } from "./messages";
import { NavigationHeader } from './navigation';

interface Message {
  subject: string;
  body: string;
  isRead: boolean;
}

const GlobalStyles = createGlobalStyle`
    body {
      font-family: arial;
    }

    p {
      font-weight: bold;
    }
`;

//TODO finish implementing styles and themes -> create component & styles folder 

 const themes = {
  light: {
      backgroundColor: 'white',
      navColor: 'lightsteelblue',
  },

  dark: {
      backgroundColor: 'darkgrey',
      navColor: 'grey',
  }
};

export const App = (): JSX.Element => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageCounter, setMessageCounter] = useState(0);
  const [isMessageView, setMessageView] = useState(false);
  const [theme, setTheme] = useState('light');

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

  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <>
    <GlobalStyles/>
    <ThemeProvider theme={theme === 'light' ? themes.light : themes.dark}>
        <NavigationHeader displayMessageView={setMessageView} messageCounter={messageCounter} changeTheme={changeTheme}></NavigationHeader>
        <div className='content'>
            {!isMessageView ? 
                <Form addMessage={addMessage}></Form> :
                <Messages messages={messages} setToIsRead={setToIsRead} messageCounter={messageCounter}></Messages>
            }      
        </div>
    </ThemeProvider>
    </>
  );
}
