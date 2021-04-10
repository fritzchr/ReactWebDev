import React from 'react';
import styled from 'styled-components';
import { WbSunny, Brightness2 } from '@material-ui/icons'

type Props = {
    displayMessageView: (value: boolean) => void;
    messageCounter: number;
    changeTheme: () => void;
    //returning state to change icon
    isLightTheme: () => boolean;
};

const NavHeader = styled.div`
    background-color: ${(props) => props.theme.navColor};
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    white-space: no-wrap;
`;

const NavButton = styled.button`
    background: none;
    border: none;
    font-weight: bold;
    font-size: 18px;
    color: ${(props) => props.theme.navButtonColor};
    &:hover {
        color: ${(props) => props.theme.navButtonHoverColor};
    }
    &:focus {
        outline: none;
    }
`;

const ToggleContainer = styled.div`
    margin-left: 20px;
`;

const ButtonContainer = styled.div`
    margin-right: 10px;
`;

const ToggleButton = styled.button`
    background: none;
    border: none;
    color: ${(props) => props.theme.toggleColor};
    &:hover {
        color: ${(props) => props.theme.toggleHoverColor};
    }
    &:focus {
        outline: none;
    }
`;

export const NavigationHeader = (props: Props): JSX.Element => {
    return (
        <NavHeader>
            <ToggleContainer>
                <ToggleButton onClick={() => props.changeTheme()}>
                    {props.isLightTheme() ? <Brightness2></Brightness2> : <WbSunny></WbSunny>}
                </ToggleButton>
            </ToggleContainer>
            <ButtonContainer>
                <NavButton onClick={() => props.displayMessageView(true)}>Messages 
                    {props.messageCounter != 0 && 
                        <span>{props.messageCounter > 5 ? ' (5+ new)' : ' (' + props.messageCounter + ' new)'}</span>
                    }
                </NavButton>
                <NavButton onClick={() => props.displayMessageView(false)}>Add Message</NavButton>
            </ButtonContainer>
        </NavHeader>
    );
};