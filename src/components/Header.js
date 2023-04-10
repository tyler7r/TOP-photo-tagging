import React from 'react';
import { Link } from 'react-router-dom';

export const Header = (props) => {
    return (
        <div id='header'>
            <div id='main-nav'>
                <Link className='nav-link' to='/'>MAIN MENU</Link>
                <Link to='/'><img src={require('../components/images/Waldo.jpg')} id='logo' alt='logo'/></Link>
                <Link className='nav-link' to='/leaderboard'>LEADERBOARD</Link>
            </div>
        </div>
    )
}