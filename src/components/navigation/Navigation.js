import React from 'react';
import { Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
    return (
        <div className='navigationContainer'>
            <span><Link to='/home' className='hvr-grow'>Home</Link></span>
            <span><Link to='/about' className='hvr-grow'>About</Link></span>
            <span><Link to='/projects' className='hvr-grow'>Projects</Link></span>
        </div>
    );
};

export default Navigation;