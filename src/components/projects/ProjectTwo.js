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
                <div className='projectTwo beer30Front'>
                    <h2 className='projectTitle'>Beer30</h2>
                    <img src={Beer30} alt='beer30' className='projectImage'></img>
                    <h2 className='technologies'>
                        React + Javascript + HTML + CSS + Git + GitHub
                    </h2>
                    <button className='front-flip-button projectButton' onClick={handleClick}>Flip</button>
                </div>
                <div className='projectTwo beer30Back'>
                    <a href='https://mybeer30.herokuapp.com/' target='_blank' rel='noreferrer'>Deployed Site</a><br />
                    <a href='https://github.com/AshveerB/beer30' target='_blank' rel='noreferrer'>
                    <img src={GitHubLogo} alt='gitHubLogo'></img>
                    </a><br />
                    <button className='back-flip-button projectButton' onClick={handleClick}>Flip</button>
                </div>
            </ReactCardFlip>
        </div>
    );
};

export default ProjectTwo;