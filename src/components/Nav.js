import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Nav = (props) => {
    return (
        <div id='main-nav'>
            <Link style={props.style} to='/'>Home</Link>
            <Link style={props.style} to='/leaderboard'>Leaderboard</Link>
        </div>
    )
}