import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import Storytime from '../images/Storytime - Imgur.png';
import GitHubLogo from '../images/github.jpeg';

const ProjectFive = () => {
	const [isFlipped, setIsFlipped] = useState(false);
	const handleClick = () => {
		setIsFlipped(!isFlipped);
	};
	return (
		<div>
			<ReactCardFlip isFlipped={isFlipped} flipDirection='vertical'>
				<div className='projectFive stFront'>
					<h2 className='projectTitle'>Storytime</h2>
					<img src={Storytime} alt='storytime' className='projectImage'></img>
					<h2 className='technologies'>
						React + Django + PostgreSQL + Postman + Python + Javascript + WebRTC
					</h2>
					<button
						className='front-flip-button projectButton'
						onClick={handleClick}>
						Flip
					</button>
				</div>
				<div className='projectFive stBack'>
					<a href='' target='_blank' rel='noreferrer' className='stDeployed'>
						Deployed Site (Coming Soon)
					</a>
					<br />
					<a
						href='https://github.com/story-time-team'
						target='_blank'
						rel='noreferrer'
						className='stGitHub'>
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

export default ProjectFive;
