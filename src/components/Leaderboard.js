import React, { useState, useEffect } from 'react';
import '../components/styles/leaderboard.css'

export const Leaderboard = (props) => {
    let { easyLeaderboard, hardLeaderboard } = props
    const [display, setDisplay] = useState(easyLeaderboard);
    
    useEffect(() => { 
        props.retrieve();
    }, []);

    const changeLeaderboard = (level) => {
        if (level === 'hard') {
            setDisplay(hardLeaderboard);
        } else if (level === 'easy') {
            setDisplay(easyLeaderboard);
        }
    }

    const leaderboardDisplay = () => {
        if (display === easyLeaderboard) {
            const easy = document.querySelector('#easy-leaderboard-btn');
            const hard = document.querySelector('#hard-leaderboard-btn');
            hard.classList.remove('selected-leaderboard');
            easy.classList.add('selected-leaderboard');
        } else if (display === hardLeaderboard) {
            const hard = document.querySelector('#hard-leaderboard-btn');
            const easy = document.querySelector('#easy-leaderboard-btn');
            easy.classList.remove('selected-leaderboard');
            hard.classList.add('selected-leaderboard');
        }
    }

    useEffect(() => {
        leaderboardDisplay();
    }, [display])

    return (
        <div className='content'>
            <div id='leaderboard-menu'>
                <div onClick={() => changeLeaderboard('easy')} id='easy-leaderboard-btn'>EASY</div>
                <div onClick={() => changeLeaderboard('hard')} id='hard-leaderboard-btn'>HARD</div>
            </div>
            <div id="leaderboard">
                {display.map((score) => {
                    if (score.position % 2 !== 0) {
                        return (
                            <div key={score.id} className='leaderboard-entry odd'>
                                <div className='entry-position'>{score.position}. </div>
                                <div className='entry-name'>{score.name}</div>
                                <div className='entry-time'>{score.time}</div>
                            </div>
                        ) 
                    } else {
                        return (
                            <div key={score.id} className='leaderboard-entry even'>
                                <div className='entry-position'>{score.position}. </div>
                                <div className='entry-name'>{score.name}</div>
                                <div className='entry-time'>{score.time}</div>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}