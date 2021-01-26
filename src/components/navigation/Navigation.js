import React from 'react';
import { Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
    return (
        <nav className='navigationContainer'>
            <div className='brand'>Ashveer Bhayroo<br />Software Engineer</div>
            <div className='navigation'>
                <span><Link to='/home' className='hvr-grow white'>Home</Link></span>
                <span><Link to='/about' className='hvr-grow white'>About</Link></span>
                <span><Link to='/projects' className='hvr-grow white'>Projects</Link></span>
            </div>
        </nav>
    );
};

export default Navigation;