import React, { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase';

export const Leaderboard = (props) => {
    const [display, setDisplay] = useState('easy');
    
    useEffect(() => { 
        if (props.level === '') {
            props.retrieve('easy')
        } else {
           props.retrieve(props.level)
        }
    }, [])

    return (
        <div id="leaderboard">
            {props.leaderboard.map((score) => {
                return (
                    <div key={score.id} className='leaderboard-entry'>
                        <div className='entry-name'>{score.name}</div>
                        <div className='entry-time'>{score.time}</div>
                    </div>
                )
            })}
        </div>
    )
}