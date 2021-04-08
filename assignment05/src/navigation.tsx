import React from 'react';

type Props = {
    displayMessageView: (value: boolean) => void;
    messageCounter: number;
};

export const NavigationHeader = (props: Props): JSX.Element => {
    return (
        <div className="navHeader">
            <button onClick={() => props.displayMessageView(true)}>Messages 
                {props.messageCounter != 0 && 
                    <span>{props.messageCounter > 5 ? ' (5+ new)' : ' (' + props.messageCounter + ')'}</span>
                }
            </button>
            <button onClick={() => props.displayMessageView(false)}>Compose Message</button>
        </div>
    );
};