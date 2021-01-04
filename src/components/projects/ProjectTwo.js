import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const ProjectTwo = () => {
    const [isFlipped, setIsFlipped] = useState(false)
    const handleClick = () => {
        setIsFlipped(!isFlipped)
    }
    return (
        <div>
            <ReactCardFlip isFlipped={isFlipped} flipDirection='vertical'>
                <div>
                    <h2>Name</h2>
                    <h2>Image</h2>
                    <button className='front-flip-button' onClick={handleClick}>Flip</button>
                </div>
                <div>
                    <h2>Deployed Link</h2>
                    <h2>Repo Link</h2>
                    <button className='back-flip-button' onClick={handleClick}>Flip</button>
                </div>
            </ReactCardFlip>
        </div>
    );
};

export default ProjectTwo;