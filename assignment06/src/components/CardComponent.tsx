import React from 'react';
import styled from 'styled-components';
import { Card } from '../gameLogic/card';


type Props = {
    card: Card;
}

const CardContaianer = styled.div`
    display: flex;
    flex-direction: column;
    height: 600px;
    width: 400px;
    box-shadow: 4px 4px 10px #888888;
    margin: auto;
`;

const CardImage = styled.img`
    height: 300px;
    width: 250px;
    align-self: center;
    margin: 30px auto;
`;

const CardText = styled.p`
    font-size 250px;
    align-self: center;
    margin: auto;
    color: ${({color}) => color === 'hearts' || color === 'diamonds' ? 'red' : 'black'};
`;

export const CardComponent = (props: Props): JSX.Element => {
    return(
        <CardContaianer>
            <CardImage src={props.card.suit.path} alt={props.card.suit.name}></CardImage>
            <CardText color={props.card.suit.name}>{props.card.value}</CardText>
        </CardContaianer>
    );
}