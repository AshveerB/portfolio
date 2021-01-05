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
                <div className='projectThree'>
                    <h2>All The Feels</h2>
                    <img src={ATF} alt='atf'></img>
                    <h2>
                        React<br/>Javascript<br/>CSS<br />Node<br />Express<br />MongoDB<br />Postman
                    </h2>
                    <button className='front-flip-button' onClick={handleClick}>Flip</button>
                </div>
                <div className='projectThree'>
                    <a href='https://all-the-feels-fe.herokuapp.com/' target='_blank' rel='noreferrer'>Deployed Site</a><br />
                    <a href='https://github.com/Kid-Then-Kid-Now' target='_blank' rel='noreferrer'>
                    <img src={GitHubLogo} alt='gitHubLogo'></img>
                    </a><br />
                    <button className='back-flip-button' onClick={handleClick}>Flip</button>
                </div>
            </ReactCardFlip>
        </div>
    );
};

export default ProjectThree;