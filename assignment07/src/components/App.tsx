import React from 'react';
import styled from 'styled-components';
import { autorun } from 'mobx';
import { observer } from 'mobx-react';
import { Game } from '../model/game';
import { CardComponent } from './CardComponent';
import Button from './Button';

const MainContainer = styled.div`
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 400px;
    margin: auto;
    margin-top 20px;
`;

const Score = styled.h1`
    margin: auto;
    margin-bottom: 20px;
    text-align: center;
`;

const game = new Game();

autorun(() => {
    console.log('current Card: ' + (game.index + 1) + '/52');
    console.log('current Score: ' + game.score);
});

export const App = observer((): JSX.Element => {
    return (
        <MainContainer>
            <Score>Score: {game.score}</Score>
            <CardComponent card={game.currentCard}></CardComponent>
            <ButtonContainer>
                <Button onClick={() => game.drawNextCard('higher')} disabled={game.isGameOver()}>Higher</Button>
                <Button onClick={() => game.drawNextCard('lower')} disabled={game.isGameOver()}>Lower</Button>
            </ButtonContainer>
        </MainContainer>
    );
});
