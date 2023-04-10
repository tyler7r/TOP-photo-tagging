import React from 'react';
import { Link } from 'react-router-dom';
import '../components/styles/home.css'

export const Home = (props) => {
    return (
        <div id='home'>
            <div id='game-banner'>
                <div id='game-title'>WHERE'S WALDO?</div>
            </div>
            <div id='level-select'>
                <Link to='/game' style={props.style} className='level-choice' id='easy' onClick={() => props.setLevel('easy')}>
                    <div className='level-select-title'>EASY</div>
                    <img src={require('./images/ski.jpg')} className='level-select-img' alt='easy-level' />
                </Link>
                <Link to='/game' style={props.style} className='level-choice' id='hard' onClick={() => props.setLevel('hard')}>
                    <div className='level-select-title'>HARD</div>
                    <img src={require('./images/track.jpg')} className='level-select-img' alt='hard-level' />
                </Link>
            </div>
        </div>
    )
}