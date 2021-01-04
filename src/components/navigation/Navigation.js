import React from 'react';
import { Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
    return (
        <div>
            <span><Link to='/home'>Home</Link></span>
            <span><Link to='/about'>About</Link></span>
            <span><Link to='/skills'>Skills</Link></span>
            <span><Link to='/projects'>Projects</Link></span>
        </div>
    );
};

export default Navigation;