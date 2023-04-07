import React, { useState, useEffect, useRef } from 'react';
import { CharSelect } from './CharSelect';
import { EndGame } from './EndGame';
import './styles/game.css';
import { getDoc, doc, updateDoc, onSnapshot, Firestore } from 'firebase/firestore';
import { db } from '../firebase';

export const Game = (props) => {
    const [coords, setCoords] = useState([0, 0]);

    const [showMenu, setShowMenu] = useState(false);

    const [characters, setCharacters] = useState({});

    const [targetLocation, setTargetLocation] = useState([]);

    const [finishedGame, setFinishedGame] = useState(false);

    const [startTime, setStartTime] = useState(0);

    const [totalTime, setTotalTime] = useState(0);

    // handles clicks on gameboard, populates character select menu at the clicked spot
    const handleClick = (e) => {
        e.preventDefault();

        let xCoord = Math.round((e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100)
        let yCoord = Math.round((e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100)

        setTargetLocation([e.pageX, e.pageY])

        setCoords([xCoord, yCoord]);

        setShowMenu(!showMenu);
    }

    // retrieves character level-dependent info from firestore
    useEffect(() => {
        const answersRef = doc(db, 'answers', `${props.level}`);
        const retrieveData = async () => {
            const answers = await getDoc(answersRef)

            setCharacters(answers.data());
        }
        retrieveData();
    }, []);

    // checks if the clicked area matches the clicked character from character select menu
    // updates character found status as necessary
    const handleMenu = (char, x, y) => {
        let coordinates = characters[char].Coordinates;
        let xCheck = between(x, coordinates[0]);
        let yCheck = between(y, coordinates[1]);
        if (xCheck === true && yCheck === true) {
            characters[char].Found = true;
            setCharacters({...characters});
        }
        setShowMenu(false);
    }

    // checks all characters' found status, if they all are found it sets finished game
    useEffect(() => {
        let foundCharacters = [];

        const endGame = () => {
            for (const char in characters) {
                if (characters[char].Found === true) {
                    foundCharacters.push(char);
                }
            }
            if (foundCharacters.length === 3) {
                setFinishedGame(true);
                let total = (new Date () - startTime) / 1000;
                setTotalTime(total);
            }
        }

        endGame()
    }, [characters])

    // starts timer
    useEffect(() => {
        setStartTime(new Date());
    }, [])

    // helper function to allow for some flexibility in where the user clicks for a correct answer
    const between = (value, integer) => {
        if (((value - integer) <= 2) && ((value - integer) >= -2)) return true
        else return false;
    }

    if (props.level === 'easy') {
        return (
            <div id='board'>
                <img onClick={(e) => {handleClick(e)}} className='game-img' src={require('./images/ski.jpg')} alt='ski'/>
                <CharSelect coords={coords} characters={characters} showMenu={showMenu} location={targetLocation} handleMenu={handleMenu} />
                <EndGame status={finishedGame} time={totalTime} />
            </div>
        )
    } else if (props.level === 'hard') {
        return (
            <div id='board'>
                <img onClick={(e) => {handleClick(e)}} className='game-img' src={require('./images/track.jpg')} alt='track'/>
                <CharSelect showMenu={showMenu} coords={coords} characters={characters} location={targetLocation} handleMenu={handleMenu} />
                <EndGame status={finishedGame} time={totalTime} />
            </div>
        )
    }
}