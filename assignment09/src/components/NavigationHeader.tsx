import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const NavLink = styled(Link)`
    background: none;
    border: none;
    font-weight: bold;
    font-size: 18px;
    color: black;
    margin: 10px;
    text-decoration: none;
    &:hover {
        color: white;
    }
`;

const LinkContainer = styled.div`
    margin-right: 10px;
`;

export const NavigationHeader = (): JSX.Element => {
    return (
        <NavHeader>
            <LinkContainer>
                <NavLink to='/numbers'>Numbers</NavLink>
                <NavLink to='/dates'>Dates</NavLink>
                <NavLink to='/text'>Text</NavLink>
                <select>
                    <option value='en'>en</option>
                    <option value='de'>de</option>
                    <option value='nl'>nl</option>
                    <option value='pl'>pl</option>
                </select>
            </LinkContainer>
        </NavHeader>
    );
};
