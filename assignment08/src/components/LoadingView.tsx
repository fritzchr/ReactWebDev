import React from 'react';
import { Container } from '../styles/Container';
import LinearProgress from '@material-ui/core/LinearProgress';

//TODO: implement LoadingView
export const LoadingView = (): JSX.Element => {
    return (
        <Container>
            <p>loading...</p>
            <LinearProgress />
        </Container>
    );
};
