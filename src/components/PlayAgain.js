import React from 'react';
import { Link } from 'react-router-dom';

export const PlayAgain = (props) => {
    const setPlayAgain = () => {
        props.setPlayAgain(false);
    }

    if (props.playAgain === true) {
        return (
            <div id='play-again-modal'>
                <div id='play-again-btn' onClick={() => {setPlayAgain()}} >Play Again</div>
                <Link style={props.navStyle} onClick={() => {setPlayAgain()}} to='/' id='return-home'>Return Home</Link>
                <Link style={props.navStyle} onClick={() => {setPlayAgain()}} to='/leaderboard' id='Leaderboard'>Leaderboard</Link>
            </div>
        )
    }
}