import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BurgerLinks from './BurgerLinks';
import './Navigation.css';

const Navigation = () => {
	const [menuDisplay, setMenuDisplay] = useState(false);
	const menuClick = () => {
		setMenuDisplay(!menuDisplay);
	};
	return (
		<div>
			<nav className='navigationContainer'>
				<div className='brand'>
					Ashveer Bhayroo
					<br />
					Software Engineer
				</div>
				<div className='navigation'>
					<span className='links'>
						<Link to='/home' className='hvr-grow white'>
							Home
						</Link>
					</span>
					<span className='links'>
						<Link to='/about' className='hvr-grow white'>
							About
						</Link>
					</span>
					<span className='links'>
						<Link to='/projects' className='hvr-grow white'>
							Projects
						</Link>
					</span>
				</div>
				<div className='burgerContainer'>
					<div className='hamburgerNavigation hvr-grow' onClick={menuClick}>
						<span className='burger'></span>
						<span className='burger'></span>
						<span className='burger'></span>
					</div>
				</div>
			</nav>
			<div>{ menuDisplay ? <BurgerLinks /> : null }</div>
		</div>
	);
};

export default Navigation;
