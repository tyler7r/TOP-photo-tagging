import React from 'react';
import { Link } from 'react-router-dom';

export const PlayAgain = (props) => {
    console.log(props.lvl);
    const setPlayAgain = () => {
        props.setPlayAgain(false);
    }

    if (props.playAgain === true) {
        return (
            <div id='play-again-modal'>
                <Link style={props.navStyle} onClick={() => {setPlayAgain()}} to='/' id='return-home'>Return Home</Link>
                <Link style={props.navStyle} onClick={() => {setPlayAgain()}} to='/leaderboard' id='Leaderboard'>Leaderboard</Link>
            </div>
        )
    }
}