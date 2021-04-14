import React from 'react';


export const App = (): JSX.Element => {
    return (

        // eslint-disable-next-line @typescript-eslint/no-var-requires
        <img src={require('./assets/heart.png').default} alt="heart"></img>

    );
}
