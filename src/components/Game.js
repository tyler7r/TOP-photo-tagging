import React, { useState, useEffect, useRef } from 'react';
import { CharSelect } from './CharSelect';
import './styles/game.css';

export const Game = (props) => {
    const [coords, setCoords] = useState([0, 0]);

    const [showMenu, setShowMenu] = useState(false);

    const imgRef = useRef();

    const handleClick = (e) => {
        e.preventDefault();
        const nav = document.querySelector('#main-nav').clientHeight;
        setCoords([e.pageX, e.pageY - nav]);

        setShowMenu(true);
    }

    if (props.level === 'easy') {
        return (
            <div ref={imgRef}>
                <img onClick={handleClick} className='game-img' src={require('./images/ski.jpg')} alt='ski'/>
                <CharSelect coords={coords} showMenu={showMenu} />
            </div>
        )
    } else if (props.level === 'hard') {
        return (
            <div ref={imgRef}>
                <img onClick={(e) => handleClick(e)} className='game-img' src={require('./images/track.jpg')} alt='track'/>
                <CharSelect showMenu={showMenu} coords={coords} />
            </div>
        )
    }
}