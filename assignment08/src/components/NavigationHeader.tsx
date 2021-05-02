import React from 'react';
import styled from 'styled-components';

type Props = {
    setScreen (screen: string): void; 
};

const NavHeader = styled.div`
    background-color: lightsteelblue;
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    white-space: no-wrap;
`;

const NavButton = styled.button`
    background: none;
    border: none;
    font-weight: bold;
    font-size: 18px;
    color: black;
    &:hover {
        color: white;
    }
    &:focus {
        outline: none;
    }
`;

const ButtonContainer = styled.div`
    margin-right: 10px;
`;

export const NavigationHeader = ({ setScreen: changeScreen }: Props): JSX.Element => {
    return (
        <NavHeader>
            <ButtonContainer>
                <NavButton onClick={() => changeScreen('Trending')}>Trending</NavButton>
                <NavButton onClick={() => changeScreen('Search')}>Search</NavButton>
            </ButtonContainer>
        </NavHeader>
    );
};
