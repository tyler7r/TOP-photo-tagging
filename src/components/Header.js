import React from 'react';
import { Link } from 'react-router-dom';

export const Header = (props) => {
    return (
        <div id='header'>
            <div id='main-nav'>
                <Link className='nav-link' to='/'>HOME</Link>
                <Link className='nav-link' to='/leaderboard'>LEADERBOARD</Link>
            </div>
        </div>
    )
}