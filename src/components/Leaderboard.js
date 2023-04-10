import React, { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase';

export const Leaderboard = (props) => {
    let { easyLeaderboard, hardLeaderboard } = props
    const [display, setDisplay] = useState(easyLeaderboard);
    
    useEffect(() => { 
        props.retrieve();
    }, [])

    const changeLeaderboard = (level) => {
        if (level === 'hard') {
            setDisplay(hardLeaderboard);
        } else if (level === 'easy') {
            setDisplay(easyLeaderboard);
        }
    }

    return (
        <div className='content'>
            <div id='leaderboard-menu'>
                <div onClick={() => changeLeaderboard('easy')} id='easy-leaderboard-btn'>Easy</div>
                <div onClick={() => changeLeaderboard('hard')} id='hard-leaderboard-btn'>Hard</div>
            </div>
            <div id="leaderboard">
                {display.map((score) => {
                    return (
                        <div key={score.id} className='leaderboard-entry'>
                            <div className='entry-name'>{score.name}</div>
                            <div className='entry-time'>{score.time}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}