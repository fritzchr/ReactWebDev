import React from 'react';

type Props = {
    content: {title: string, url: string }[];
}

//TODO: replace with content and create CardComponent
export const Card = ({content}: Props): JSX.Element => {
    return (
        <>
            {content.map((item, index) => 
            <>
                <p key={index}>{item.title}</p>
                <img src={item.url}></img>
                </>
                
            )}
        </>
    );
}