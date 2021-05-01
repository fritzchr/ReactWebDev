import React from 'react';
import styled from 'styled-components';
import { Card } from './Card';

type Props = {
    content: { title: string; url: string }[];
};

const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

export const Content = ({ content }: Props): JSX.Element => {
    return (
        <ContentContainer>
            {content.map((item, index) => (
                <>
                    <Card key={index} title={item.title} url={item.url}></Card>
                </>
            ))}
        </ContentContainer>
    );
};
