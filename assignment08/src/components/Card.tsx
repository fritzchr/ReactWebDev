import React from 'react';

type Gifs = {
    gifs: {title: string, url: string }[];
}

export const Card = ({gifs}: Gifs): JSX.Element => {
    return (
        <>
            {gifs.map((item, index) => 
            <>
                <p key={index}>{item.title}</p>
                <img src={item.url}></img>
                </>
                
            )}
        </>
    );
}