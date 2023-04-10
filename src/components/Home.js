import React from 'react';
import { Link } from 'react-router-dom';

export const Home = (props) => {
    return (
        <div id='home'>
            <div id='level-select'>
                <Link to='/game' style={props.style} id='easy' onClick={() => props.setLevel('easy')}>EASY</Link>
                <Link to='/game' style={props.style} id='hard' onClick={() => props.setLevel('hard')}>HARD</Link>
            </div>
        </div>
    )
}