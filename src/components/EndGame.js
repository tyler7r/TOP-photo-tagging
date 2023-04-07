import React from 'react';

export const EndGame = (props) => {
    if (props.status === true) {
        return (
            <div id='end-modal'>
                <div id='time'>You finished in {props.time}s</div>
            </div>
        )
    }
}