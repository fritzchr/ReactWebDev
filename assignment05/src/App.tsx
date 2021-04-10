import React, { useState } from "react";
import styled, { ThemeProvider } from 'styled-components';
import { LightTheme, DarkTheme } from './styles/themes';
import { GlobalStyles } from './styles/globalStyles';
import { Form } from "./form";
import { Messages } from "./messages";
import { NavigationHeader } from './navigation';

interface Message {
  subject: string;
  body: string;
  isRead: boolean;
}

const MainContainer = styled.div`
  height: 100vh;
  background: ${(props) => props.theme.backgroundColor}
`;

const ContentContainer = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`;

export const App = (): JSX.Element => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageCounter, setMessageCounter] = useState(0);
  const [isMessageView, setMessageView] = useState(false);
  const [theme, setTheme] = useState(LightTheme);

  //adds new message and increments message counter
  const addMessage = (message: {
    subject: string;
    body: string;
    isRead: boolean;
  }) => {
    setMessages([...messages, message]);
    setMessageCounter(messageCounter + 1);
    setMessageView(true);
  };

  //marks message as read and decrements message counter
  const setToIsRead = (index: number) => {
    const message = [...messages];
    message[index].isRead = true;
    setMessages(message);
    setMessageCounter(messageCounter - 1);
  };

  //changes theme
  const changeTheme = () => {
    if (theme === LightTheme) {
      setTheme(DarkTheme);
    } else {
      setTheme(LightTheme);
    }
  };

  //is used to pass state to navigation component to change icons
  const isLightTheme = () => {
    if (theme === LightTheme) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
    <GlobalStyles/>
    <ThemeProvider theme={theme}>
          <MainContainer>
        <NavigationHeader displayMessageView={setMessageView} messageCounter={messageCounter} changeTheme={changeTheme} isLightTheme={isLightTheme}></NavigationHeader>
        <ContentContainer>
            {!isMessageView ? 
                <Form addMessage={addMessage}></Form> :
                <Messages messages={messages} setToIsRead={setToIsRead} messageCounter={messageCounter}></Messages>
            }      
        </ContentContainer>
        </MainContainer>
    </ThemeProvider>
    </>
  );
}
