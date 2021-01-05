import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import Storytime from '../images/Storytime - Imgur.png'
import GitHubLogo from '../images/github.jpeg';


const ProjectFive = () => {
    const [isFlipped, setIsFlipped] = useState(false)
    const handleClick = () => {
        setIsFlipped(!isFlipped)
    }
    return (
        <div>
            <ReactCardFlip isFlipped={isFlipped} flipDirection='vertical'>
                <div className='projectFive'>
                    <h2>Storytime</h2>
                    <img src={Storytime} alt='storytime'></img>
                    <h2>
                        React<br />Django<br />PostgreSQL<br />Postman<br />Python<br />Javascript<br />WebRTC
                    </h2>
                    <button className='front-flip-button' onClick={handleClick}>Flip</button>
                </div>
                <div className='projectFive'>
                    <a href='' target='_blank' rel='noreferrer'>Deployed Site (Coming Soon)</a><br />
                    <a href='https://github.com/story-time-team' target='_blank' rel='noreferrer'>
                    <img src={GitHubLogo} alt='gitHubLogo'></img>
                    </a><br />
                    <button className='back-flip-button' onClick={handleClick}>Flip</button>
                </div>
            </ReactCardFlip>
        </div>
    );
};

export default ProjectFive;