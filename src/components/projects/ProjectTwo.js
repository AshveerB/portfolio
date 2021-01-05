import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import Beer30 from '../images/Beer30 - Imgur.png'
import GitHubLogo from '../images/github.jpeg'

const ProjectTwo = () => {
    const [isFlipped, setIsFlipped] = useState(false)
    const handleClick = () => {
        setIsFlipped(!isFlipped)
    }
    return (
        <div>
            <ReactCardFlip isFlipped={isFlipped} flipDirection='vertical'>
                <div className='projectTwo'>
                    <h2>Beer30</h2>
                    <img src={Beer30} alt='beer30'></img>
                    <h2>
                        React<br />Javascript<br />HTML<br />CSS<br />Git<br />GitHub
                    </h2>
                    <button className='front-flip-button' onClick={handleClick}>Flip</button>
                </div>
                <div className='projectTwo'>
                    <a href='https://mybeer30.herokuapp.com/' target='_blank' rel='noreferrer'>Deployed Site</a><br />
                    <a href='https://github.com/AshveerB/beer30' target='_blank' rel='noreferrer'>
                    <img src={GitHubLogo} alt='gitHubLogo'></img>
                    </a><br />
                    <button className='back-flip-button' onClick={handleClick}>Flip</button>
                </div>
            </ReactCardFlip>
        </div>
    );
};

export default ProjectTwo;