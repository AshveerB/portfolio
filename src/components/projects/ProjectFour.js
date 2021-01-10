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
                <div className='projectFour pmpFront'>
                    <h2 className='projectTitle'>Practice Makes Permanent</h2>
                    <img src={PMP} alt='pmp' className='projectImage'></img>
                    <h2 className='technologies'>
                        React + Django + PostgreSQL + Postman + Python + Javascript
                    </h2>
                    <button className='front-flip-button projectButton' onClick={handleClick}>Flip</button>
                </div>
                <div className='projectFour pmpBack'>
                    <a href='https://practice-makes-permanent-fe.herokuapp.com/' target='_blank' rel='noreferrer' className='pmpDeployed'>Deployed Site</a><br />
                    <div className='pmpGitHubContainer'>
                    <a href='https://github.com/AshveerB/practice-makes-permanent' target='_blank' rel='noreferrer' className='pmpGitHub'>Front End<br />
                    <img src={GitHubLogo} alt='gitHubLogo' className='pmpGitHubLogo'></img>
                    </a><br />
                    <a href='https://github.com/AshveerB/practice-makes-permanent-back-end' target='_blank' rel='noreferrer' className='pmpGitHub'>Back End<br />
                    <img src={GitHubLogo} alt='gitHubLogo' className='pmpGitHubLogo'></img>
                    </a></div><br />
                    <button className='back-flip-button projectButton' onClick={handleClick}>Flip</button>
                </div>
            </ReactCardFlip>
        </div>
    );
};

export default ProjectFour;