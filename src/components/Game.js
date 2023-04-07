import React, { useState, useEffect, useRef } from 'react';
import { CharSelect } from './CharSelect';
import './styles/game.css';
import { getDoc, doc, onSnapshot, Firestore } from 'firebase/firestore';
import { db } from '../firebase';

export const Game = (props) => {
    const [coords, setCoords] = useState([0, 0]);

    const [showMenu, setShowMenu] = useState(false);

    const [charCoods, setCharCoords] = useState({});

    const [targetLocation, setTargetLocation] = useState([]);

    const imgRef = useRef();

    const handleClick = (e) => {
        e.preventDefault();

        let xCoord = Math.round((e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100)
        let yCoord = Math.round((e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100)
        console.log(xCoord, yCoord);

        setTargetLocation([e.pageX, e.pageY])

        setCoords([xCoord, yCoord]);

        setShowMenu(!showMenu);
    }

    const handleMenu = async (x, y) => {
        const answersRef = doc(db, 'answers', `${props.level}`);

        const answers = await getDoc(answersRef)

        setCharCoords(answers.data());
    }

    if (props.level === 'easy') {
        return (
            <div ref={imgRef}>
                <img onClick={(e) => {handleClick(e); handleMenu()}} className='game-img' src={require('./images/ski.jpg')} alt='ski'/>
                <CharSelect coords={coords} showMenu={showMenu} handleMenu={handleMenu} location={targetLocation} />
            </div>
        )
    } else if (props.level === 'hard') {
        return (
            <div ref={imgRef}>
                <img onClick={(e) => handleClick(e)} className='game-img' src={require('./images/track.jpg')} alt='track'/>
                <CharSelect showMenu={showMenu} coords={coords} handleMenu={handleMenu} location={targetLocation} />
            </div>
        )
    }
}