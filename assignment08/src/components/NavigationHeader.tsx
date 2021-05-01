import React from 'react';
import styled from 'styled-components';
import { Store } from '../model/Store';

type Props = {
    store: Store;
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

export const NavigationHeader = ({ store }: Props): JSX.Element => {
    return (
        <NavHeader>
            <ButtonContainer>
                <NavButton onClick={() => store.changeScreen('Trending')}>Trending</NavButton>
                <NavButton onClick={() => store.changeScreen('Search')}>Search</NavButton>
            </ButtonContainer>
        </NavHeader>
    );
};
