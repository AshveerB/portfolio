import React from 'react';
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
            Navigation
            <span><Link to='/home'>Home</Link></span>
            <span><Link to='/about'>About</Link></span>
            <span><Link to='/skills'>Skills</Link></span>
            <span><Link to='/projects'>Projects</Link></span>
            <span><Link to='/resume'>Resume</Link></span>
        </div>
    );
};

export default Navigation;