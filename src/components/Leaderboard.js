import React, { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from './firebase';
import '../components/styles/leaderboard.css'

export const Leaderboard = (props) => {
    const [display, setDisplay] = useState('easy');
    const [leaderboard, setLeaderboard] = useState(null);

    const retrieveEasy = async () => {
        let copy = [];
        const leaderboard = await getDocs(collection(db, 'easy-leaderboard'));
        leaderboard.forEach((doc) => {
            copy.push(doc.data());
            copy[copy.length - 1].id = doc.id
        })
        sortLeaderboard(copy);
        setLeaderboard(copy);
    }

    const retrieveHard = async () => {
        let copy = [];
        const leaderboard = await getDocs(collection(db, 'hard-leaderboard'));
        leaderboard.forEach((doc) => {
            copy.push(doc.data());
            copy[copy.length - 1].id = doc.id
        })
        sortLeaderboard(copy);
        setLeaderboard(copy);
    }

    const retrieveLeaderboard = async () => {
        if (display === 'easy')  {
            retrieveEasy()
        } else if (display === 'hard') {
            retrieveHard();
        }
    }

      const sortLeaderboard = (array) => {
        array.sort((a, b) => a.time - b.time);
        for (let i = 0; i < array.length; i++) {
          array[i].position = i + 1;
        }
        timerStyling(array)
      }
    
      const timerStyling = (array) => {
        for (let i = 0; i < array.length; i++) {
          if (array[i].time > 60) {
            array[i].time = `${Math.floor(array[i].time / 60)}m ${Math.round(array[i].time % 60)}s`
          } else {
            array[i].time = `${array[i].time.toFixed(2)}s`
          }
        }
      }

    const changeLeaderboard = (level) => {
        if (level === 'hard') {
            setDisplay('hard');
        } else if (level === 'easy') {
            setDisplay('easy');
        }
    }

    const leaderboardDisplay = () => {
        if (display === 'easy') {
            const easy = document.querySelector('#easy-leaderboard-btn');
            const hard = document.querySelector('#hard-leaderboard-btn');
            hard.classList.remove('selected-leaderboard');
            easy.classList.add('selected-leaderboard');
        } else if (display === 'hard') {
            const hard = document.querySelector('#hard-leaderboard-btn');
            const easy = document.querySelector('#easy-leaderboard-btn');
            easy.classList.remove('selected-leaderboard');
            hard.classList.add('selected-leaderboard');
        }
    }

    useEffect(() => { 
        retrieveLeaderboard;
        leaderboardDisplay();
    }, [display]);

    return (
        <div className='content'>
            <div id='leaderboard-menu'>
                <div onClick={() => changeLeaderboard('easy')} id='easy-leaderboard-btn'>EASY</div>
                <div onClick={() => changeLeaderboard('hard')} id='hard-leaderboard-btn'>HARD</div>
            </div>
            {(leaderboard !== null && leaderboard.length !== 0) &&
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
            }
            {(leaderboard === null || leaderboard.length === 0) && 
                <div id='leaderboard'>No entries found</div>
            }
        </div>
    )
}