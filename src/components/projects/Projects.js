import React, { useState } from 'react';
import Footer from '../footer/Footer';
import ReactCardFlip from 'react-card-flip'


const Projects = () => {
    const [isFlipped, setIsFlipped] = useState(false)
    const handleClick = () => {
        setIsFlipped(!isFlipped)
    }
    return (
        <div>
            Projects
            <ReactCardFlip isFlipped={isFlipped} flipDirection='vertical'>
                <div>
                    <h2>Front</h2>
                    <button className='front-flip-button' onClick={handleClick}>Flip</button>
                </div>
                <div>
                    <h2>Back</h2>
                    <button className='back-flip-button' onClick={handleClick}>Flip</button>
                </div>
            </ReactCardFlip>
            <div><Footer /></div>
        </div>
    );
};

export default Projects;