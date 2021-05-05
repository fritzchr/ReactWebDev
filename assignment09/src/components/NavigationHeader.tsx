import React, {useEffect} from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';

type Props = {
    language: string;
    changeLanguage(language: string): void;
}

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

export const NavigationHeader = ({language, changeLanguage}: Props): JSX.Element => {
    const history = useHistory();

    useEffect(() => {
        history.push({
            search: "?lang=" + language,
        });
    }, [history, language]);

    return (
        <NavHeader>
            <LinkContainer>
                <NavLink to={{ pathname: '/numbers', search:'?lang=' + language}}>Numbers</NavLink>
                <NavLink to={{ pathname: '/dates', search:'?lang=' + language}}>Dates</NavLink>
                <NavLink to={{ pathname: '/texts', search:'?lang=' + language}}>Text</NavLink>
                <select value={language} onChange={(event) => changeLanguage(event.target.value)}>
                    <option value='en'>en</option>
                    <option value='de'>de</option>
                    <option value='nl'>nl</option>
                    <option value='pl'>pl</option>
                </select>
            </LinkContainer>
        </NavHeader>
    );
};
