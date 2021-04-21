import React, { useState } from 'react';
import styled from 'styled-components';
import { Game } from './model/game';
import { CardComponent } from './components/CardComponent';
import Button from './components/Button';

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

export const App = (): JSX.Element => {
    const [card, setCard] = useState(game.currentCard)
    const [score, setScore] = useState(game.score);
    const [gameOver, setGameOver] = useState(false);

    function getNextCard(prediction: string): void {
        game.drawNextCard(prediction);
        if (game.isGameOver()) {
            setGameOver(true);
        }
        setCard(game.currentCard);
        setScore(game.score);
    }

    return (
        <MainContainer>
            <Score>Score: {score}</Score>
            <CardComponent card={card}></CardComponent>
            <ButtonContainer>
                <Button onClick={() => getNextCard('higher')} disabled={gameOver}>Higher</Button>
                <Button onClick={() => getNextCard('lower')} disabled={gameOver}>Lower</Button>
            </ButtonContainer>
        </MainContainer>
    );
}
