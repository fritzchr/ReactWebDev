import React from 'react';
import styled from 'styled-components';

type Props = {
    items: string[];
};

const List = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 16px;
    margin: 16px;
    width: auto;
    justify-content: center;
`;

export const ListView = ({items}: Props): JSX.Element => {
    return (
        <div id={'listContainer'}>
            {items.map((item, index) => (
                <List id='list' key={index}>{item}</List>
            ))}
        </div>
    );
};
