import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import ATF from '../images/ATF - Imgur.png'
import GitHubLogo from '../images/github.jpeg'

const ProjectThree = () => {
    const [isFlipped, setIsFlipped] = useState(false)
    const handleClick = () => {
        setIsFlipped(!isFlipped)
    }
    return (
        <div>
            <ReactCardFlip isFlipped={isFlipped} flipDirection='vertical'>
                <div className='projectThree atfFront'>
                    <h2 className='projectTitle'>All The Feels</h2>
                    <img src={ATF} alt='atf' className='projectImage'></img>
                    <h2 className='technologies'>
                        React + Javascript + CSS + Node + Express + MongoDB + Postman
                    </h2>
                    <button className='front-flip-button projectButton' onClick={handleClick}>Flip</button>
                </div>
                <div className='projectThree atfBack'>
                    <a href='https://all-the-feels-fe.herokuapp.com/' target='_blank' rel='noreferrer' className='atfDeployed'>Deployed Site</a><br />
                    <a href='https://github.com/Kid-Then-Kid-Now' target='_blank' rel='noreferrer' className='atfGitHub'>
                    <img src={GitHubLogo} alt='gitHubLogo' ></img>
                    </a><br />
                    <button className='back-flip-button projectButton' onClick={handleClick}>Flip</button>
                </div>
            </ReactCardFlip>
        </div>
    );
};

export default ProjectThree;