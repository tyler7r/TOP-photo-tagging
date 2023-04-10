import React from 'react';
import { Link } from 'react-router-dom';
import '../components/styles/play-again.css'

export const PlayAgain = (props) => {
    const setPlayAgain = () => {
        props.setPlayAgain(false);
    }

    if (props.playAgain === true) {
        return (
            <div id='play-again-modal'>
                <Link onClick={() => {setPlayAgain()}} to='/' className='play-again-btn' id='return-home'>RETURN HOME</Link>
                <Link onClick={() => {setPlayAgain()}} to='/leaderboard' className='play-again-btn' id='Leaderboard'>LEADERBOARD</Link>
            </div>
        )
    }
}