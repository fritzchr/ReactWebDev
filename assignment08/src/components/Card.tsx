import React from 'react';
import styled from 'styled-components';

type Props = {
    title: string;
    url: string;
};

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: auto;
    box-shadow: 4px 4px 10px #888888;
    padding: 15px;
    align-items: center;
    justify-content: center;
    margin: 25px;
`;

const Title = styled.h3`
    font-weight: bold;
    align-self: center;
`;

const Gif = styled.img`
    align-self: center;
`;

//TODO: replace with content and create CardComponent
export const Card = (props: Props): JSX.Element => {
    return (
        <CardContainer>
            <Title>{props.title}</Title>
            <Gif src={props.url}></Gif>
        </CardContainer>
    );
};
