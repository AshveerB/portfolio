import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import SecondOpinion from '../images/92.jpeg'
import GitHubLogo from '../images/github.jpeg'

const ProjectSix = () => {
    const [isFlipped, setIsFlipped] = useState(false);
	const handleClick = () => {
		setIsFlipped(!isFlipped);
	};
    return (
        <div>
            <ReactCardFlip isFlipped={isFlipped} flipDirection='vertical'>
				<div className='projectOne spacemanFront'>
					<h2 className='projectTitle'>Second Opinion</h2>
					<img src={SecondOpinion} alt='secondOpinion' className='projectImage'></img>
					<h2 className='technologies'>
						React + Javascript + HTML + CSS + Git + GitHub + Postman
					</h2>
					<button
						className='front-flip-button projectButton'
						onClick={handleClick}>
						Flip
					</button>
				</div>
				<div className='projectOne spacemanBack'>
					<a
						href='https://second-opinion.netlify.app/'
						target='_blank'
						rel='noreferrer'
						className='spacemanDeployed'>
						Deployed Site
					</a>
					<br />
					<a
						href='https://github.com/February-Hackathon'
						target='_blank'
						rel='noreferrer'
						className='spacemanGitHub'>
						<img src={GitHubLogo} alt='gitHubLogo' className='gitHubLogo'></img>
					</a>
					<br />
					<button
						className='back-flip-button projectButton'
						onClick={handleClick}>
						Flip
					</button>
				</div>
			</ReactCardFlip>
        </div>
    );
};

export default ProjectSix;