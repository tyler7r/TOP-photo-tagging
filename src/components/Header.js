import React from 'react';
import { Link } from 'react-router-dom';

export const Header = (props) => {
    return (
        <div id='header'>
            <div id='main-nav'>
                <Link style={props.style} to='/'>Home</Link>
                <Link style={props.style} to='/leaderboard'>Leaderboard</Link>
            </div>
        </div>
    )
}