import React from 'react';
import styled from 'styled-components';

type Props = {
    displayMessageView: (value: boolean) => void;
    messageCounter: number;
    changeTheme: () => void;
};

const NavHeader = styled.div`
    background-color: ${(props) => props.theme.navColor};
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
`;

const NavButton = styled.button`
    background: none;
    border: none;
    color: white;
    text-decoration: underline white;

    &:hover {
        color: black;
        text-decoration: underline black;
    }
`;

const ToggleContainer = styled.div`
    margin-left: 10px;
`;

const ButtonContainer = styled.div`
    margin-right: 10px;
`;

const ThemeSwitcher = styled.input`
`;

export const NavigationHeader = (props: Props): JSX.Element => {
    return (
        <NavHeader>
            <ToggleContainer>
                <ThemeSwitcher type="checkbox" onChange={() => props.changeTheme()}></ThemeSwitcher>
            </ToggleContainer>
            <ButtonContainer>
                <NavButton onClick={() => props.displayMessageView(true)}>Messages 
                    {props.messageCounter != 0 && 
                        <span>{props.messageCounter > 5 ? ' (5+ new)' : ' (' + props.messageCounter + ' new)'}</span>
                    }
                </NavButton>
                <NavButton onClick={() => props.displayMessageView(false)}>Compose Message</NavButton>
            </ButtonContainer>
        </NavHeader>
    );
};