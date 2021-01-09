import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import Spaceman from '../images/Spaceman - Imgur.png';
import GitHubLogo from '../images/github.jpeg';

const ProjectOne = () => {
	const [isFlipped, setIsFlipped] = useState(false);
	const handleClick = () => {
		setIsFlipped(!isFlipped);
	};
	return (
		<div>
			<ReactCardFlip isFlipped={isFlipped} flipDirection='vertical'>
				<div className='projectOne spacemanFront'>
					<h2 className='projectTitle'>Spaceman</h2>
					<img src={Spaceman} alt='spaceman' className='projectImage'></img>
					<h2 className='technologies'>
						Javascript + HTML + CSS + Git + GitHub
					</h2>
					<button
						className='front-flip-button projectButton'
						onClick={handleClick}>
						Flip
					</button>
				</div>
				<div className='projectOne spacemanBack'>
					<a
						href='https://ashveerb.github.io/spaceman/'
						target='_blank'
						rel='noreferrer'
						className='spacemanDeployed'>
						Deployed Game
					</a>
					<br />
					<a
						href='https://github.com/AshveerB/spaceman'
						target='_blank'
						rel='noreferrer'
						className='spacemanGitHub'>
						<img src={GitHubLogo} alt='gitHubLogo'></img>
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

export default ProjectOne;
