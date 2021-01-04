import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import PMP from '../images/PMP - Imgur.png'
import GitHubLogo from '../images/github.jpeg'

const ProjectFour = () => {
    const [isFlipped, setIsFlipped] = useState(false)
    const handleClick = () => {
        setIsFlipped(!isFlipped)
    }
    return (
        <div>
            <ReactCardFlip isFlipped={isFlipped} flipDirection='vertical'>
                <div>
                    <h2>Practice Makes Permanent</h2>
                    <img src={PMP} alt='pmp'></img>
                    <h2>
                        React<br />Django<br />PostgreSQL<br />Postman<br />Python<br />Javascript
                    </h2>
                    <button className='front-flip-button' onClick={handleClick}>Flip</button>
                </div>
                <div>
                    <a href='https://practice-makes-permanent-fe.herokuapp.com/' target='_blank' rel='noreferrer'>Deployed Site</a><br />
                    <a href='https://github.com/AshveerB/practice-makes-permanent' target='_blank' rel='noreferrer'>Front End
                    <img src={GitHubLogo} alt='gitHubLogo'></img>
                    </a><br />
                    <a href='https://github.com/AshveerB/practice-makes-permanent-back-end' target='_blank' rel='noreferrer'>Back End
                    <img src={GitHubLogo} alt='gitHubLogo'></img>
                    </a><br />
                    <button className='back-flip-button' onClick={handleClick}>Flip</button>
                </div>
            </ReactCardFlip>
        </div>
    );
};

export default ProjectFour;