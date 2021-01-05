import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import Spaceman from '../images/Spaceman - Imgur.png'
import GitHubLogo from '../images/github.jpeg'


const ProjectOne = () => {
    const [isFlipped, setIsFlipped] = useState(false)
    const handleClick = () => {
        setIsFlipped(!isFlipped)
    }
    return (
			<div>
				<ReactCardFlip isFlipped={isFlipped} flipDirection='vertical'>
					<div className='projectOne'>
						<h2>Spaceman</h2>
						<img src={Spaceman} alt='spaceman'></img>
						<h2>
							Javascript
							<br />
							HTML
							<br />
							CSS
							<br />
							Git
							<br />
							GitHub
						</h2>
						<button className='front-flip-button' onClick={handleClick}>
							Flip
						</button>
					</div>
					<div className='projectOne'>
						<a
							href='https://ashveerb.github.io/spaceman/'
							target='_blank'
							rel='noreferrer'>
							Deployed Game
						</a>
						<br />
						<a
							href='https://github.com/AshveerB/spaceman'
							target='_blank'
							rel='noreferrer'>
							<img src={GitHubLogo} alt='gitHubLogo'></img>
						</a>
						<br />
						<button className='back-flip-button' onClick={handleClick}>
							Flip
						</button>
					</div>
				</ReactCardFlip>
			</div>
		);
};

export default ProjectOne;