import React, { useState } from "react";
import styled from "styled-components";
import { autorun } from "mobx";
import { observer } from "mobx-react";
import { GlobalStyles } from '../styles/GlobalStyles'
import { NavigationHeader } from './NavigationHeader';

const API_KEY = "XdaoZq9JMeywVQvulWH47Yv2ZPAY6AC0";

const Container = styled.div``;

export const App = (): JSX.Element => {
  const [json, setJson] = useState(null);

  const fetchURL = () => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=cat&limit=25&offset=0&rating=g&lang=en`;
    console.log("fetch");
    fetch(url).then((response) => response.json());
  };

  return (
    <Container>
        <GlobalStyles/>
        <NavigationHeader/>
    </Container>
  );
};
