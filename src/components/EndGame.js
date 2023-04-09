import React from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';

export const EndGame = (props) => {
    const addScore = async (e) => {
        e.preventDefault();
        const name = document.querySelector('#username');
        const docRef = await addDoc(collection(db, `${props.level}-leaderboard`), {
            name: name.value,
            time: props.time,
        })
        console.log(docRef.id);
    }

    if (props.status === true) {
        return (
            <div id='end-modal'>
                <div id='recorded-time'>Congrats you finished in: {props.time}s</div>
                <label htmlFor='username'>Enter Name: </label>
                <input type='text' name='username' id='username' placeholder='Name' />
                <button type='submit' onClick={(e) => {addScore(e); props.setStatus()}}>Add to Leaderboard</button>
            </div>
        )
    }
}