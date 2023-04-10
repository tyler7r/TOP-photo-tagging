import React from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import '../components/styles/end-modal.css'

export const EndGame = (props) => {
    const addScore = async (e) => {
        e.preventDefault();
        const name = document.querySelector('#username');
        const docRef = await addDoc(collection(db, `${props.level}-leaderboard`), {
            name: name.value,
            time: props.time,
        })
        props.setPlayAgain(true);
    }

    if (props.status === true) {
        return (
            <div id='end-modal'>
                <div id='recorded-time'>TIME: {props.time}s</div>
                <div id="username-modal">
                    <label htmlFor='username'>Enter Name</label>
                    <input type='text' name='username' id='username' placeholder='Name' />
                </div>
                <button id='submit-time' type='submit' onClick={(e) => {addScore(e); props.setStatus(false)}}>Add to Leaderboard</button>
            </div>
        )
    }
}